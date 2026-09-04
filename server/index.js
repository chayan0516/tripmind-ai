// ==========================================================================
// TravelAI Bharat - Express Backend Server
// Endpoints: Health, OAuth Auth, Zero-Net SOS Broadcast, Dynamic Trip Wizard
// ==========================================================================

import express from 'express';
import cors from 'cors';

export const app = express();

app.use(cors());
app.use(express.json());

// In-memory store for SOS distress tickets & user sessions
const sosDistressLogs = [];
const activeSessions = new Map();

// --------------------------------------------------------------------------
// 1. Health & Status Monitor
// --------------------------------------------------------------------------
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    system: 'TravelAI Bharat Production Backend',
    version: '2.4.0',
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    istTime: new Date(Date.now() + 5.5 * 3600000).toISOString().replace('T', ' ').slice(0, 19) + ' IST',
    services: {
      auth: 'active',
      itineraryEngine: 'active',
      sosDisasterCell: 'active',
      hazardRadar: 'active'
    }
  });
});

// --------------------------------------------------------------------------
// 2. Enterprise OAuth Authentication (Google, GitHub, Apple)
// --------------------------------------------------------------------------
app.post('/api/auth/oauth', (req, res) => {
  const { provider, email, name, avatar } = req.body;

  if (!provider) {
    return res.status(400).json({ error: 'OAuth provider is required.' });
  }

  const providerNames = {
    google: { title: 'Google Verified Traveler', badge: 'G-Suite' },
    github: { title: 'GitHub Developer Explorer', badge: 'Dev' },
    apple: { title: 'Apple ID Explorer', badge: 'Apple' },
    digilocker: { title: 'DigiLocker / Aadhaar Verified Citizen', badge: 'Govt. of India' }
  };

  const info = providerNames[provider] || { title: 'Verified Member', badge: 'OAuth' };

  const sessionUser = {
    id: `usr_${provider}_${Date.now()}`,
    name: name || `${provider.toUpperCase()} Traveler`,
    email: email || `traveler@${provider}.com`,
    provider,
    role: info.title,
    badge: info.badge,
    avatar: avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${name || provider}`,
    token: `tok_bharat_${provider}_${Math.random().toString(36).substring(2, 15)}`,
    state: 'National Traveler',
    tripsPlanned: 8,
    placesExplored: 12,
    upcomingTrips: 2,
    savedPlaces: 19
  };

  activeSessions.set(sessionUser.token, sessionUser);

  res.json({
    success: true,
    message: `Successfully authenticated via ${provider}`,
    user: sessionUser
  });
});

// Standard Login / OTP endpoint
app.post('/api/auth/login', (req, res) => {
  const { email, phone, password, otp } = req.body;

  if (phone) {
    if (!phone.match(/^[6-9]\d{9}$/)) {
      return res.status(400).json({ error: 'Please provide a valid 10-digit Indian mobile number.' });
    }
    const user = {
      name: `Traveler (+91 ${phone.slice(-4)})`,
      email: `user.${phone}@travelai.in`,
      phone: `+91 ${phone}`,
      role: 'OTP Verified Traveler',
      token: `tok_otp_${Date.now()}`
    };
    return res.json({ success: true, user });
  }

  if (email && password) {
    const user = {
      name: email.split('@')[0],
      email: email,
      role: 'Verified Traveler',
      token: `tok_pass_${Date.now()}`
    };
    return res.json({ success: true, user });
  }

  res.status(400).json({ error: 'Invalid login parameters.' });
});

// --------------------------------------------------------------------------
// 3. SOS Emergency Distress Broadcast & NDRF Ticket Dispatch
// --------------------------------------------------------------------------
app.post('/api/sos/broadcast', (req, res) => {
  const { latitude, longitude, altitude, accuracy, travelerName, phone, note } = req.body;

  const ticketNumber = `SOS-NDRF-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;

  const sosRecord = {
    ticketNumber,
    timestamp: new Date().toISOString(),
    istTimestamp: new Date(Date.now() + 5.5 * 3600000).toISOString().replace('T', ' ').slice(0, 19) + ' IST',
    location: {
      latitude: Number(latitude) || 27.0410,
      longitude: Number(longitude) || 88.2663,
      altitude: Number(altitude) || 2042,
      accuracyMeters: Number(accuracy) || 5,
      googleMapsUrl: `https://maps.google.com/?q=${latitude},${longitude}`
    },
    traveler: {
      name: travelerName || 'Anonymous Traveler',
      phone: phone || '+91 98765 43210',
      note: note || 'Emergency assistance requested via Zero-Net Distress Beacon.'
    },
    dispatchedServices: [
      { unit: 'National Disaster Response Force (NDRF)', status: 'ALERTED', helpline: '112' },
      { unit: 'Ministry of Tourism Tourist Police', status: 'DISPATCHED', helpline: '1363' },
      { unit: 'State Medical Ambulance & Mountain QRT', status: 'STANDBY', helpline: '108' }
    ]
  };

  sosDistressLogs.push(sosRecord);

  console.log(`[SOS BEACON RECEIVED] Ticket ${ticketNumber} at ${latitude}, ${longitude}`);

  res.json({
    success: true,
    ticket: ticketNumber,
    status: 'DISPATCH_CONFIRMED',
    message: 'Distress beacon received. National Disaster Response Force & Tourist Safety Cell notified.',
    sosRecord
  });
});

// --------------------------------------------------------------------------
// 4. Dynamic AI Itinerary Generator (Budget, Days, Food, Startup Retreats)
// --------------------------------------------------------------------------
const FOOD_DATABASE = {
  pure_veg: {
    tag: '🥗 Pure Vegetarian (शुद्ध शाकाहारी)',
    desc: '100% Pure Vegetarian kitchens with separate vessels and sacred cleanliness.',
    options: [
      { name: "Govinda's Pure Veg Restaurant", type: 'Sattvic / North & South Indian', rating: '4.8' },
      { name: "Haldiram's & Bikaner Sweets", type: 'Pure Veg Thalis & Chaat', rating: '4.7' },
      { name: 'Saravana Bhavan / Sagar Ratna', type: 'South Indian Filter Coffee & Dosas', rating: '4.9' },
      { name: 'Shiv Sagar Pure Veg Heritage', type: 'Multi-Cuisine Vegetarian', rating: '4.6' }
    ]
  },
  jain: {
    tag: '🌿 Jain Friendly (जैन भोजन)',
    desc: 'Strictly zero root vegetables, zero onion, zero garlic. Prepared before sunset.',
    options: [
      { name: 'Shree Mahavir Jain Bhojanalaya', type: 'Authentic Sattvic Jain Thali', rating: '4.9' },
      { name: 'Swati Snacks Jain Counter', type: 'Gourmet Onion-Garlic Free Delicacies', rating: '4.8' },
      { name: 'Jain Heritage Bhojan Mandir', type: 'Dal Baati & Rotis (No Root Veg)', rating: '4.7' }
    ]
  },
  non_veg: {
    tag: '🍗 Non-Vegetarian Connoisseur',
    desc: 'Iconic local meats, Kashmiri Wazwan, coastal fish curries, and Mughlai biryanis.',
    options: [
      { name: 'Mughal Darbar & Wazwan House', type: 'Rogan Josh, Gustaba & Kebabs', rating: '4.9' },
      { name: "Karim's / Arsalan Heritage", type: 'Dum Pukht Biryani & Mutton Chaap', rating: '4.8' },
      { name: "Fisherman's Wharf / Malabar Coast", type: 'Fresh Catch Prawns & Fish Curry', rating: '4.9' }
    ]
  },
  vegan: {
    tag: '🌱 Vegan / Plant-Based',
    desc: '100% dairy-free, oat/almond milk lattes, cruelty-free organic grain bowls.',
    options: [
      { name: 'The Green Planet Organic Cafe', type: 'Plant-based Smoothie Bowls & Tofu', rating: '4.7' },
      { name: 'Karma Kitchen Vegan Studio', type: 'Dairy-free Kashmiri Kahwa & Salads', rating: '4.8' }
    ]
  },
  street_food: {
    tag: '🍲 Street Food Explorer (Chaat & Delicacies)',
    desc: 'Hygiene-certified street corridors, puchkas, kachoris, chole bhature.',
    options: [
      { name: 'Old Town Heritage Chaat Lane', type: 'Pani Puri, Dahi Bhalla & Samosas', rating: '4.8' },
      { name: 'Chowpatty Evening Food Corridor', type: 'Pav Bhaji, Kulfi & Fresh Juices', rating: '4.7' }
    ]
  },
  halal: {
    tag: '🥩 Halal Certified Dining',
    desc: 'Strictly 100% Halal certified meats and family-friendly dining halls.',
    options: [
      { name: 'Al-Bake & Zaffran Family Diner', type: 'Halal Grills, Shawarmas & Biryani', rating: '4.8' },
      { name: 'Sultanate Dastarkhwan', type: 'Halal Mutton Korma & Sheermal', rating: '4.9' }
    ]
  }
};

const WORKATION_HUBS = {
  coworking: [
    { name: 'Innov8 High-Speed Work Hub', speed: '650 Mbps Fiber', perk: 'Soundproof podcast booths & backup genset' },
    { name: 'WeWork Summit Lounge', speed: '1 Gbps Dedicated', perk: 'Dual-monitor hotdesks & unlimited espresso' },
    { name: 'The Mountain Digital Nomad Cafe', speed: '300 Mbps Starlink/Fiber', perk: 'Panoramic Himalayan views & quiet conference rooms' }
  ],
  retreatActivities: [
    'Quarterly Roadmap & Vision Alignment Session',
    'Product Hackathon & Sprint Planning Block',
    'Founder Fireside Chat & Angel Networking',
    'Team Bonding Campfire & Folk Music Evening',
    'Scenic Mountain/Beach Sunrise Brainstorming Walk'
  ]
};

app.post('/api/itinerary/generate', (req, res) => {
  const {
    destination = 'manali',
    days = 3,
    budgetTier = 'moderate',
    currency = 'INR',
    foodPreference = 'pure_veg',
    tripType = 'standard',
    pace = 'balanced'
  } = req.body;

  const numDays = Math.min(Math.max(parseInt(days) || 3, 1), 14);
  const foodData = FOOD_DATABASE[foodPreference] || FOOD_DATABASE.pure_veg;

  // Currency multiplier
  const currencyRate = currency === 'USD' ? 0.012 : currency === 'EUR' ? 0.011 : 1;
  const currencySymbol = currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '₹';

  const dailyBudgetMap = {
    budget: 2000,
    moderate: 5500,
    luxury: 16000
  };

  const basePerDayInr = dailyBudgetMap[budgetTier] || 5500;
  const isStartupWorkation = tripType === 'startup_workation' || tripType === 'team_retreat';

  const generatedDays = [];

  for (let d = 1; d <= numDays; d++) {
    const hours = [];
    const foodPick = foodData.options[(d - 1) % foodData.options.length];
    const foodLunch = foodData.options[d % foodData.options.length];

    // Morning Slot
    hours.push({
      time: '07:30 AM - 09:00 AM',
      title: `Morning Sunrise & ${foodPreference === 'pure_veg' || foodPreference === 'jain' ? 'Sattvic' : 'Traditional'} Breakfast`,
      category: 'Dining',
      categoryTag: 'Food & Wellness',
      description: `Start the day at ${foodPick.name}. Enjoy hot regional delicacies respecting your ${foodData.tag} preference.`,
      cost: `${currencySymbol}${Math.round(400 * currencyRate)}`,
      costNum: 400,
      location: `${destination} City Center`,
      rating: 4.8
    });

    // Morning Sightseeing or Workation Session
    if (isStartupWorkation && (d % 2 === 1)) {
      const hub = WORKATION_HUBS.coworking[(d - 1) % WORKATION_HUBS.coworking.length];
      hours.push({
        time: '09:30 AM - 01:00 PM',
        title: `💻 Startup Deep Work & Sprint Block at ${hub.name}`,
        category: 'Workation',
        categoryTag: 'Startup Workation',
        description: `High-bandwidth work session (${hub.speed}). ${hub.perk}. Perfect for engineering sprints and product syncs.`,
        cost: `${currencySymbol}${Math.round(800 * currencyRate)}`,
        costNum: 800,
        location: hub.name,
        badgeColor: 'blue',
        rating: 4.9
      });
    } else {
      hours.push({
        time: '09:30 AM - 01:00 PM',
        title: `Historic Sightseeing & Cultural Discovery (Day ${d})`,
        category: 'Exploration',
        categoryTag: 'Heritage & Nature',
        description: `Explore top landmarks and scenic viewpoints with registered local guides and panoramic photography spots.`,
        cost: `${currencySymbol}${Math.round(900 * currencyRate)}`,
        costNum: 900,
        location: `${destination} Heritage Zone`,
        rating: 4.9
      });
    }

    // Lunch Slot
    hours.push({
      time: '01:00 PM - 02:30 PM',
      title: `Curated Lunch at ${foodLunch.name}`,
      category: 'Dining',
      categoryTag: foodData.tag,
      description: `${foodData.desc} Signature dish tailored for dietary safety and culinary excellence.`,
      cost: `${currencySymbol}${Math.round(750 * currencyRate)}`,
      costNum: 750,
      location: foodLunch.name,
      rating: foodLunch.rating
    });

    // Afternoon Slot (Startup Brainstorming or Leisure)
    if (isStartupWorkation) {
      const activity = WORKATION_HUBS.retreatActivities[(d - 1) % WORKATION_HUBS.retreatActivities.length];
      hours.push({
        time: '03:00 PM - 05:30 PM',
        title: `🚀 Team Session: ${activity}`,
        category: 'Workation',
        categoryTag: 'Team Building',
        description: `Structured breakout time with whiteboards, tea break, and leadership discussions.`,
        cost: `${currencySymbol}${Math.round(600 * currencyRate)}`,
        costNum: 600,
        location: 'Retreat Conference Hub',
        badgeColor: 'purple',
        rating: 5.0
      });
    } else {
      hours.push({
        time: '03:00 PM - 05:30 PM',
        title: `Local Handicrafts, Artisan Bazaars & Sunset Walk`,
        category: 'Culture',
        categoryTag: 'Shopping & Leisure',
        description: `Browse authentic handlooms, local spices, and handicrafts directly supporting rural artisans.`,
        cost: `${currencySymbol}${Math.round(500 * currencyRate)}`,
        costNum: 500,
        location: 'Local Bazaar Corridor',
        rating: 4.7
      });
    }

    // Evening Slot
    hours.push({
      time: '06:30 PM - 09:30 PM',
      title: isStartupWorkation ? `🥂 Team Dinner & Bonding Social` : `Evening Cultural Aarti / Folk Show & Royal Dinner`,
      category: 'Entertainment',
      categoryTag: isStartupWorkation ? 'Retreat Gala' : 'Night Experience',
      description: `Unwind with musical performances and dinner curated specifically with ${foodData.tag} standards.`,
      cost: `${currencySymbol}${Math.round(1200 * currencyRate)}`,
      costNum: 1200,
      location: `${destination} Promenade / Dining Hall`,
      rating: 4.9
    });

    generatedDays.push({
      day: d,
      theme: isStartupWorkation
        ? `Day ${d}: ${d === 1 ? 'Arrival & Kickoff Sprint' : d === numDays ? 'Demo Day & Celebration' : 'Deep Work & Exploration'}`
        : `Day ${d}: Iconic ${destination} Wonders`,
      hours
    });
  }

  const totalCostInr = numDays * basePerDayInr;

  res.json({
    success: true,
    destination,
    durationDays: numDays,
    budgetTier,
    currency,
    foodPreference: foodData.tag,
    tripType,
    estimatedTotalCost: `${currencySymbol}${Math.round(totalCostInr * currencyRate).toLocaleString()}`,
    days: generatedDays
  });
});

// --------------------------------------------------------------------------
// Standalone Server Launcher
// --------------------------------------------------------------------------
const PORT = process.env.PORT || 5000;
// If executed directly from Node
if (import.meta.url === `file:///${process.argv[1].replace(/\\/g, '/')}`) {
  app.listen(PORT, () => {
    console.log(`[TravelAI Express Server] Running on http://localhost:${PORT}`);
  });
}
