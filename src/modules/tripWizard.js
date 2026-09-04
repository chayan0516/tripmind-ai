// ==========================================================================
// Startup Retreat & Custom AI Itinerary Wizard
// Destination, Duration (Days), Budget, Food Preferences & Team Retreat Features
// ==========================================================================

export class TripWizard {
  constructor(options = {}) {
    this.onPlanGenerated = options.onPlanGenerated || null;
    this.currency = options.currency || 'INR';
    this.currencyRate = 1;
    this.currencySymbol = '₹';

    this.formData = {
      destination: 'manali',
      days: 3,
      budgetTier: 'moderate',
      totalBudget: 16500,
      currency: 'INR',
      foodPreference: 'pure_veg',
      tripType: 'startup_workation',
      pace: 'balanced',
      teamSize: 6,
      coworkingNeeded: true,
      brainstormingNeeded: true,
      galaDinner: true
    };
  }

  setCurrency(curr) {
    this.currency = curr;
    if (curr === 'USD') {
      this.currencyRate = 0.012;
      this.currencySymbol = '$';
    } else if (curr === 'EUR') {
      this.currencyRate = 0.011;
      this.currencySymbol = '€';
    } else {
      this.currencyRate = 1;
      this.currencySymbol = '₹';
    }
    this.formData.currency = curr;
  }

  async generateCustomItinerary(params = {}) {
    const payload = {
      ...this.formData,
      ...params
    };

    try {
      const response = await fetch('/api/itinerary/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const data = await response.json();
        if (this.onPlanGenerated) this.onPlanGenerated(data);
        return data;
      }
    } catch (e) {
      console.warn('Backend offline, using client-side generator fallback:', e);
    }

    // Client-side fallback if backend is unreachable
    return this.generateLocalFallback(payload);
  }

  generateLocalFallback(payload) {
    const { destination, days, budgetTier, foodPreference, tripType } = payload;
    const numDays = Math.min(Math.max(parseInt(days) || 3, 1), 14);

    const generatedDays = [];
    for (let d = 1; d <= numDays; d++) {
      generatedDays.push({
        day: d,
        theme: tripType === 'startup_workation'
          ? `Day ${d}: ${d === 1 ? 'Retreat Kickoff & Setup' : d === numDays ? 'Demo Showcase & Celebration' : 'Sprint Block & Outdoor Ideation'}`
          : `Day ${d}: Iconic ${destination} Wonders`,
        hours: [
          {
            time: "08:00 AM - 09:30 AM",
            title: `Morning Energy & ${foodPreference === 'pure_veg' ? 'Pure Veg' : foodPreference === 'jain' ? 'Jain Sattvic' : 'Local'} Breakfast`,
            category: "Dining",
            categoryTag: "Dietary Verified",
            description: `Curated breakfast tailored for ${foodPreference} travelers.`,
            cost: `${this.currencySymbol}${Math.round(350 * this.currencyRate)}`,
            costNum: 350,
            location: `${destination} Center`,
            rating: 4.8
          },
          {
            time: "10:00 AM - 01:00 PM",
            title: tripType === 'startup_workation' ? `💻 Startup Co-Working Sprint Block` : `Scenic Landmark Exploration`,
            category: tripType === 'startup_workation' ? "Workation" : "Exploration",
            categoryTag: tripType === 'startup_workation' ? "Startup Workation" : "Sightseeing",
            description: tripType === 'startup_workation' ? `High-speed WiFi work session with team desks and power backups.` : `Guided discovery of historical monuments and picturesque viewpoints.`,
            cost: `${this.currencySymbol}${Math.round(800 * this.currencyRate)}`,
            costNum: 800,
            location: `${destination} Landmark Zone`,
            badgeColor: "blue",
            rating: 4.9
          },
          {
            time: "01:30 PM - 02:45 PM",
            title: `Curated Lunch with ${foodPreference} Standards`,
            category: "Dining",
            categoryTag: "Regional Dining",
            description: `Fresh, hygienic meals cooked according to your dietary instructions.`,
            cost: `${this.currencySymbol}${Math.round(650 * this.currencyRate)}`,
            costNum: 650,
            location: `${destination} Dining Corridor`,
            rating: 4.7
          },
          {
            time: "03:30 PM - 05:30 PM",
            title: tripType === 'startup_workation' ? `🚀 Team Brainstorming & Whiteboard Session` : `Local Bazaars & Cultural Handlooms`,
            category: tripType === 'startup_workation' ? "Workation" : "Culture",
            categoryTag: tripType === 'startup_workation' ? "Strategy" : "Artisan Shopping",
            description: tripType === 'startup_workation' ? `Executive breakout session to map Q4 goals and product sprints.` : `Shop directly from local artisans, handloom weavers, and spice markets.`,
            cost: `${this.currencySymbol}${Math.round(500 * this.currencyRate)}`,
            costNum: 500,
            location: `${destination} Hub`,
            badgeColor: "purple",
            rating: 4.8
          },
          {
            time: "06:30 PM - 09:30 PM",
            title: tripType === 'startup_workation' ? `🥂 Team Dinner & Bonding Social` : `Evening Cultural Aarti & Banquet`,
            category: "Entertainment",
            categoryTag: "Evening Social",
            description: `Traditional music, dinner, and social evening.`,
            cost: `${this.currencySymbol}${Math.round(1100 * this.currencyRate)}`,
            costNum: 1100,
            location: `${destination} Grand Hall`,
            rating: 4.9
          }
        ]
      });
    }

    const result = {
      success: true,
      destination,
      durationDays: numDays,
      budgetTier,
      currency: this.currency,
      foodPreference,
      tripType,
      estimatedTotalCost: `${this.currencySymbol}${Math.round(numDays * 5500 * this.currencyRate).toLocaleString()}`,
      days: generatedDays
    };

    if (this.onPlanGenerated) this.onPlanGenerated(result);
    return result;
  }
}
