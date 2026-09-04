// Day-wise & Hour-wise Itinerary Engine with Weather Adaptability
import { DESTINATIONS } from '../data/mockData.js';

export class ItineraryEngine {
  constructor(options = {}) {
    this.currentDestination = options.defaultDestination || 'darjeeling';
    this.selectedDayIndex = 0;
    this.weatherMode = 'rainy'; // 'rainy' | 'sunny'
    this.currency = options.currency || 'INR';
    this.currencyRate = 1;
    this.currencySymbol = '₹';

    this.activePlan = this.generatePlan(this.currentDestination);
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
  }

  formatCost(inrNum) {
    if (inrNum === 0) return 'Free';
    const converted = Math.round(inrNum * this.currencyRate);
    return `${this.currencySymbol}${converted.toLocaleString()}`;
  }

  generatePlan(destinationKey) {
    this.currentDestination = destinationKey;
    const dest = DESTINATIONS[destinationKey] || DESTINATIONS.darjeeling;

    // Deep clone to allow user edits (e.g. adding custom hours or checking off)
    const clonedDays = JSON.parse(JSON.stringify(dest.days));

    return {
      destination: dest.name,
      tagline: dest.tagline,
      weather: dest.weather,
      days: clonedDays
    };
  }

  getCurrentDay() {
    if (!this.activePlan || !this.activePlan.days.length) return null;
    return this.activePlan.days[this.selectedDayIndex] || this.activePlan.days[0];
  }

  selectDay(index) {
    if (index >= 0 && index < this.activePlan.days.length) {
      this.selectedDayIndex = index;
    }
    return this.getCurrentDay();
  }

  toggleWeatherMode() {
    this.weatherMode = this.weatherMode === 'rainy' ? 'sunny' : 'rainy';
    return this.weatherMode;
  }

  addCustomActivity(dayIndex, activity) {
    if (this.activePlan.days[dayIndex]) {
      this.activePlan.days[dayIndex].hours.push({
        time: activity.time || "04:00 PM - 05:00 PM",
        title: activity.title || "Custom Activity",
        description: activity.description || "Personal exploration time.",
        category: activity.category || "Leisure",
        categoryTag: "Custom",
        indoor: true,
        cost: this.formatCost(activity.costNum || 0),
        costNum: activity.costNum || 0,
        location: activity.location || "City Center",
        weatherSuitability: "All Weather",
        badgeColor: "purple",
        rating: 5.0,
        custom: true
      });
      // Sort roughly by time
      return true;
    }
    return false;
  }

  toggleHourCompleted(dayIndex, hourIndex) {
    if (this.activePlan.days[dayIndex] && this.activePlan.days[dayIndex].hours[hourIndex]) {
      const item = this.activePlan.days[dayIndex].hours[hourIndex];
      item.completed = !item.completed;
      return item.completed;
    }
    return false;
  }

  calculateDayTotalCost(dayIndex) {
    const day = this.activePlan.days[dayIndex];
    if (!day) return 0;
    const totalInr = day.hours.reduce((acc, h) => acc + (h.costNum || 0), 0);
    return this.formatCost(totalInr);
  }
}
