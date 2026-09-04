// ==========================================================================
// TravelAI Pro - Comprehensive 12 Indian Destinations & Intelligence Data
// ==========================================================================

export const DESTINATIONS = {
  kashmir: {
    id: "kashmir",
    name: "Kashmir (Srinagar & Gulmarg)",
    state: "Jammu & Kashmir",
    category: "himalayas",
    categoryLabel: "Himalayas & Valleys",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1000&auto=format&fit=crop&q=80",
    bestSeason: "Mar - Oct (Gardens) / Dec - Feb (Snowsports)",
    helpline: "1363 (Tourist) · 112 (Police)",
    tagline: "Paradise on Earth - Dal Lake, Snow Gondolas & Saffron Valleys",
    lat: 34.0837,
    lng: 74.7973,
    weather: {
      temp: 14,
      condition: "Crisp Alpine & Light Fog",
      conditionCode: "cloudy",
      humidity: 58,
      wind: "8 km/h",
      feelsLike: 12,
      precipitationChance: 25,
      uvIndex: 4,
      forecast: [
        { day: "Day 1", temp: "14°C", icon: "cloud", note: "Misty morning over Dal Lake" },
        { day: "Day 2", temp: "11°C", icon: "snow", note: "Light snowfall at Gulmarg Phase 2" },
        { day: "Day 3", temp: "15°C", icon: "sun", note: "Crisp golden sunshine in Pahalgam" }
      ]
    },
    hazard: {
      type: "Avalanche & Mountain Pass Landslide",
      level: "Moderate",
      probability: 35,
      dangerZones: ["Zoji La Pass", "Apharwat Peak Off-Piste", "NH-44 Ramban Stretch"],
      advisory: "Winter and shoulder seasons carry risk of sudden road closures on mountain passes. Always travel with certified local drivers and verify weather window before taking the Gulmarg Gondola Phase 2."
    },
    wardrobe: {
      category: "Alpine Warmth & Layering",
      headline: "Thermal Underlayers + Windproof Parka + Snow Boots",
      fabrics: "Merino wool, fleece, down feather, Gore-Tex windbreaker",
      footwear: "Insulated snow boots with anti-slip rubber lug soles",
      culturalEtiquette: "Modest attire in Hazratbal & Jama Masjid; remove shoes, cover head with scarf.",
      mustCarry: [
        "Thermal Inners (Top & Bottom)",
        "Waterproof Gloves & Woolen Beanie",
        "Moisturizing Cream & Cold Lip Balm",
        "Original Govt ID / Aadhaar for Gondola Security",
        "Cash (ATMs frequently out of service at Gulmarg)"
      ]
    },
    days: [
      {
        dayNumber: 1,
        title: "Dal Lake Serenity & Mughal Imperial Gardens",
        subtitle: "Shikara Cruises, Floating Markets & Chinar Trees",
        date: "Day 1",
        hours: [
          {
            time: "06:30 AM - 08:30 AM",
            title: "Early Morning Floating Vegetable Market Shikara",
            description: "Glaze across misty Dal Lake in a wooden shikara boat to witness the historic floating vegetable trade dating back 200 years.",
            category: "Culture",
            categoryTag: "Floating Market",
            cost: "₹700",
            costNum: 700,
            location: "Dal Lake, Srinagar",
            lat: 34.088,
            lng: 74.842,
            weatherSuitability: "Crisp Morning",
            badgeColor: "cyan",
            rating: 4.9
          },
          {
            time: "09:00 AM - 10:30 AM",
            title: "Traditional Kashmiri Breakfast & Kahwa",
            description: "Warm saffron Kahwa infused with crushed almonds and cardamom, served with fresh Girda and Tsot breads from local Kandur bakeries.",
            category: "Dining",
            categoryTag: "Breakfast",
            cost: "₹350",
            costNum: 350,
            location: "Boulevard Road Waterfront",
            lat: 34.081,
            lng: 74.835,
            weatherSuitability: "Indoor Cafe",
            badgeColor: "green",
            rating: 4.8
          },
          {
            time: "11:00 AM - 01:30 PM",
            title: "Nishat Bagh & Shalimar Imperial Gardens",
            description: "Stroll through Emperor Jahangir's terraced water cascades, towering 400-year-old Chinar trees, and vibrant flower beds overlooking the Zabarwan range.",
            category: "Heritage",
            categoryTag: "Mughal Architecture",
            cost: "₹50",
            costNum: 50,
            location: "Nishat, Srinagar",
            lat: 34.125,
            lng: 74.881,
            weatherSuitability: "Pleasant Walk",
            badgeColor: "purple",
            rating: 4.9
          },
          {
            time: "02:00 PM - 03:30 PM",
            title: "Authentic Kashmiri Wazwan Feast",
            description: "Relish 7 courses of traditional Wazwan including tender Rogan Josh, melt-in-mouth Rista, Gushtaba in yogurt gravy, and saffron rice.",
            category: "Dining",
            categoryTag: "Lunch",
            cost: "₹950",
            costNum: 950,
            location: "Mughal Darbar, Residency Rd",
            lat: 34.072,
            lng: 74.821,
            weatherSuitability: "Cozy Dining",
            badgeColor: "cyan",
            rating: 4.9
          },
          {
            time: "04:30 PM - 07:00 PM",
            title: "Sunset Shikara Ride to Char Chinar & Nehru Park",
            description: "Watch the sun set over Hari Parbat Fort from the center of Dal Lake, reflecting golden amber waves across Kashmiri houseboats.",
            category: "Scenic",
            categoryTag: "Golden Hour",
            cost: "₹600",
            costNum: 600,
            location: "Char Chinar Island",
            lat: 34.095,
            lng: 74.851,
            weatherSuitability: "Scenic Evening",
            badgeColor: "amber",
            rating: 5.0
          },
          {
            time: "07:30 PM - 09:30 PM",
            title: "Heritage Houseboat Dinner & Sitar Melodies",
            description: "Candlelit dinner aboard a handcrafted cedarwood houseboat with fragrant Yakhni broth and soothing Sufi acoustic sitar tunes.",
            category: "Nightlife",
            categoryTag: "Houseboat Experience",
            cost: "₹800",
            costNum: 800,
            location: "Nigeen Lake / Dal Gate",
            lat: 34.115,
            lng: 74.832,
            weatherSuitability: "Warm Indoor",
            badgeColor: "pink",
            rating: 4.9
          }
        ]
      },
      {
        dayNumber: 2,
        title: "Gulmarg Alpine Meadows & Highest Cable Car",
        subtitle: "Apharwat Peak Snow Walk & Pine Forest Sleigh Rides",
        date: "Day 2",
        hours: [
          {
            time: "08:00 AM - 10:00 AM",
            title: "Scenic Mountain Drive from Srinagar to Gulmarg",
            description: "Traverse winding pine-scented highways climbing to 8,690 feet, with views of snowy Himalayan ranges.",
            category: "Scenic",
            categoryTag: "Highway Drive",
            cost: "₹1,800 (Shared Cab)",
            costNum: 1800,
            location: "Srinagar-Gulmarg Highway",
            lat: 34.048,
            lng: 74.385,
            weatherSuitability: "Clear Morning",
            badgeColor: "blue",
            rating: 4.8
          },
          {
            time: "10:30 AM - 01:30 PM",
            title: "Gulmarg Gondola Phase 1 & 2 to Apharwat Peak",
            description: "Ascend on Asia's highest cable car to 13,780 feet directly into eternal snowfields with panoramic views of Nanga Parbat.",
            category: "Adventure",
            categoryTag: "Gondola Peak (13,780 ft)",
            cost: "₹1,750 (Both Phases)",
            costNum: 1750,
            location: "Apharwat Peak, Gulmarg",
            lat: 34.021,
            lng: 74.351,
            weatherSuitability: "High Altitude Extreme",
            badgeColor: "purple",
            rating: 5.0
          },
          {
            time: "02:00 PM - 03:30 PM",
            title: "Ski Hut Lunch & Hot Chocolate",
            description: "Savor piping hot vegetable Maggi, mutton skewers, and rich dark cocoa inside an authentic timber ski cabin.",
            category: "Dining",
            categoryTag: "Lunch",
            cost: "₹450",
            costNum: 450,
            location: "Highlands Park Cafe",
            lat: 34.051,
            lng: 74.389,
            weatherSuitability: "Indoor Warmth",
            badgeColor: "cyan",
            rating: 4.7
          },
          {
            time: "04:00 PM - 06:30 PM",
            title: "St. Mary's Victorian Church & Golf Course Walk",
            description: "Explore the 1902 green-roofed Victorian stone church tucked away amidst wildflower meadows and snowdrifts.",
            category: "Heritage",
            categoryTag: "Colonial Charm",
            cost: "Free",
            costNum: 0,
            location: "Gulmarg Valley Center",
            lat: 34.053,
            lng: 74.384,
            weatherSuitability: "Crisp Walk",
            badgeColor: "green",
            rating: 4.8
          }
        ]
      }
    ]
  },

  kerala: {
    id: "kerala",
    name: "Kerala (Munnar & Alleppey)",
    state: "Kerala",
    category: "coastal",
    categoryLabel: "Coastal & Backwaters",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1000&auto=format&fit=crop&q=80",
    bestSeason: "Sep - Mar (Ayurveda & Backwaters)",
    helpline: "1363 (Tourist) · 112 (Police)",
    tagline: "God's Own Country - Tea Highlands & Serene Backwaters",
    lat: 9.9312,
    lng: 76.2673,
    weather: {
      temp: 28,
      condition: "Tropical Breeze & Passing Clouds",
      conditionCode: "sunny",
      humidity: 84,
      wind: "14 km/h",
      feelsLike: 31,
      precipitationChance: 40,
      uvIndex: 8,
      forecast: [
        { day: "Day 1", temp: "28°C", icon: "sun", note: "Balmy coastal sunset in Kochi" },
        { day: "Day 2", temp: "20°C", icon: "cloud", note: "Misty tea slopes in Munnar" },
        { day: "Day 3", temp: "29°C", icon: "rain", note: "Warm tropical drizzle on backwaters" }
      ]
    },
    hazard: {
      type: "Monsoon Flash Flood & Ghat Road Slips",
      level: "Low to Moderate",
      probability: 20,
      dangerZones: ["Gap Road Munnar", "Meenachil River Basin", "Alleppey Low-lying Canals"],
      advisory: "Watch out for high sea swells during monsoons. Keep rain ponchos ready for sudden tropical cloudbursts in Munnar tea highlands."
    },
    wardrobe: {
      category: "Tropical Breathable & Rain-Safe",
      headline: "Light Cotton/Linen + Quick-Dry Poncho + Mosquito Repellent",
      fabrics: "100% Cotton, linen shirts, quick-dry swim shorts, breathable mesh",
      footwear: "Waterproof walking sandals with good arch support; flip-flops for houseboats",
      culturalEtiquette: "Traditional Kasavu saree/mundu required for entry to Guruvayur & Padmanabhaswamy temples; strict dress code.",
      mustCarry: [
        "Compact Wind-Resistant Umbrella",
        "Anti-Leech Socks (for rainforest & tea trails)",
        "Herbal Mosquito Repellent Lotion",
        "Sunscreen SPF 50+ & UV Sunglasses",
        "Waterproof Phone Pouch"
      ]
    },
    days: [
      {
        dayNumber: 1,
        title: "Fort Kochi Colonial Heritage & Spice Markets",
        subtitle: "Chinese Fishing Nets, Jew Town & Kathakali Dance",
        date: "Day 1",
        hours: [
          {
            time: "08:00 AM - 09:30 AM",
            title: "Appam & Stew Breakfast at Kashi Art Cafe",
            description: "Soft fluffy rice Appams with aromatic coconut milk vegetable/chicken stew in an open-air art courtyard.",
            category: "Dining",
            categoryTag: "Breakfast",
            cost: "₹350",
            costNum: 350,
            location: "Burgher St, Fort Kochi",
            lat: 9.965,
            lng: 76.242,
            weatherSuitability: "Shaded Garden",
            badgeColor: "cyan",
            rating: 4.8
          },
          {
            time: "10:00 AM - 12:30 PM",
            title: "Historic Chinese Fishing Nets & Dutch Palace",
            description: "Watch master fishermen counterweight giant cantilevered fishing nets operating since the 14th century, followed by Mattancherry Palace murals.",
            category: "Culture",
            categoryTag: "Living History",
            cost: "₹25",
            costNum: 25,
            location: "Vasco da Gama Square",
            lat: 9.967,
            lng: 76.243,
            weatherSuitability: "Coastal Morning",
            badgeColor: "purple",
            rating: 4.9
          },
          {
            time: "01:00 PM - 02:30 PM",
            title: "Kerala Sadhya on Banana Leaf Lunch",
            description: "Grand feast featuring 24 delicacies: Avial, Thoran, Olan, Sambar, payasam pudding served on fresh plantain leaf.",
            category: "Dining",
            categoryTag: "Lunch",
            cost: "₹400",
            costNum: 400,
            location: "Grand Hotel Restaurant, MG Rd",
            lat: 9.972,
            lng: 76.281,
            weatherSuitability: "Indoor AC",
            badgeColor: "cyan",
            rating: 4.9
          },
          {
            time: "05:00 PM - 07:00 PM",
            title: "Kathakali Classical Drama & Kalaripayattu Martial Arts",
            description: "Experience the elaborate face makeup demonstration followed by mesmerizing high-energy martial arts and temple dance.",
            category: "Culture",
            categoryTag: "Performing Arts",
            cost: "₹500",
            costNum: 500,
            location: "Kerala Kathakali Centre",
            lat: 9.964,
            lng: 76.244,
            weatherSuitability: "Indoor Theatre",
            badgeColor: "green",
            rating: 4.9
          }
        ]
      }
    ]
  },

  varanasi: {
    id: "varanasi",
    name: "Varanasi (Kashi)",
    state: "Uttar Pradesh",
    category: "spiritual",
    categoryLabel: "Spiritual & Sacred Yatra",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1000&auto=format&fit=crop&q=80",
    bestSeason: "Oct - Mar (Cool Ghats & Festivities)",
    helpline: "1363 (Tourist) · 112 (Police)",
    tagline: "Spiritual Capital of India - Sacred Ghats & Eternal Chants",
    lat: 25.3176,
    lng: 82.9739,
    weather: {
      temp: 31,
      condition: "Warm Sunshine & River Breeze",
      conditionCode: "sunny",
      humidity: 62,
      wind: "9 km/h",
      feelsLike: 34,
      precipitationChance: 15,
      uvIndex: 7,
      forecast: [
        { day: "Day 1", temp: "31°C", icon: "sun", note: "Clear skies for evening Ganga Aarti" },
        { day: "Day 2", temp: "32°C", icon: "sun", note: "Warm afternoon in Sarnath" }
      ]
    },
    hazard: {
      type: "High River Water Surge & Alley Stampede Congestion",
      level: "Moderate",
      probability: 30,
      dangerZones: ["Dashashwamedh Ghat Steps during Aarti", "Manikarnika Narrow Galis", "Assi Ghat Riverfront during high tide"],
      advisory: "During monsoon months (July-Sept), the Ganga river level rises significantly submerging ghat walkways. Boat rides may be suspended on red flag alerts."
    },
    wardrobe: {
      category: "Spiritual Modest & Heat Resistant",
      headline: "Breathable Cotton Kurta + Slip-on Sandals + Scarf",
      fabrics: "Pure handloom cotton, mulmul, linen",
      footwear: "Slip-on shoes/sandals (frequent temple entry requires removing footwear rapidly)",
      culturalEtiquette: "Strict modesty: Shoulders and knees must be covered. Photography forbidden at Manikarnika Ghat out of respect for cremations.",
      mustCarry: [
        "Cotton Dupatta / Shawl for Head Covering",
        "Hand Sanitizer & Wet Wipes",
        "Stainless Steel Water Bottle",
        "Small Change / Coins for Temple Offerings",
        "Slip-on Juttis or Strapped Sandals"
      ]
    },
    days: [
      {
        dayNumber: 1,
        title: "Eternal Sunrise over Ganga & Kashi Vishwanath",
        subtitle: "Rowing Boats, Ancient Galis & Maha Ganga Aarti",
        date: "Day 1",
        hours: [
          {
            time: "05:30 AM - 07:30 AM",
            title: "Subah-e-Banaras Sunrise Boat Ride",
            description: "Watch the morning dawn illuminate 84 ancient ghats, bathing pilgrims, and Vedic chants echoing across the holy river.",
            category: "Spiritual",
            categoryTag: "Sunrise Ritual",
            cost: "₹500 (Row Boat)",
            costNum: 500,
            location: "Assi Ghat to Dashashwamedh",
            lat: 25.293,
            lng: 83.007,
            weatherSuitability: "Serene Dawn",
            badgeColor: "amber",
            rating: 5.0
          },
          {
            time: "08:00 AM - 09:30 AM",
            title: "Banarasi Kachori Jalebi & Malaiyo Breakfast",
            description: "Crispy fried lentil kachoris with spicy potato curry followed by frothy saffron-infused winter milk foam (Malaiyo) at Ram Bhandar.",
            category: "Dining",
            categoryTag: "Street Breakfast",
            cost: "₹150",
            costNum: 150,
            location: "Thatheri Bazar, Chowk",
            lat: 25.312,
            lng: 83.011,
            weatherSuitability: "Street Nook",
            badgeColor: "cyan",
            rating: 4.8
          },
          {
            time: "10:00 AM - 12:30 PM",
            title: "Kashi Vishwanath Jyotirlinga Corridor Darshan",
            description: "Pay homage at one of the 12 sacred Jyotirlingas inside the grand newly built golden temple corridor overlooking the holy river.",
            category: "Culture",
            categoryTag: "Sacred Temple",
            cost: "Free (Special VIP ₹300)",
            costNum: 300,
            location: "Vishwanath Gali, Lahori Tola",
            lat: 25.310,
            lng: 83.010,
            weatherSuitability: "Covered Corridors",
            badgeColor: "purple",
            rating: 5.0
          },
          {
            time: "06:30 PM - 08:30 PM",
            title: "Grand Dashashwamedh Ghat Ganga Aarti",
            description: "Spectacular multi-tiered brass lamp ritual performed by young Vedic priests accompanied by conch shells, bells, and floating candle diyas.",
            category: "Spiritual",
            categoryTag: "Grand Aarti",
            cost: "Free (Reserved Boat ₹300)",
            costNum: 300,
            location: "Dashashwamedh Ghat",
            lat: 25.307,
            lng: 83.010,
            weatherSuitability: "Evening River Breeze",
            badgeColor: "amber",
            rating: 5.0
          }
        ]
      }
    ]
  },

  ayodhya: {
    id: "ayodhya",
    name: "Ayodhya",
    state: "Uttar Pradesh",
    category: "spiritual",
    categoryLabel: "Spiritual & Sacred Yatra",
    image: "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?w=1000&auto=format&fit=crop&q=80",
    bestSeason: "Oct - Mar (Pleasant Pilgrimage)",
    helpline: "1363 (Tourist) · 112 (Police)",
    tagline: "Divine Sacred Heritage - Shri Ram Janmabhoomi & Saryu Aarti",
    lat: 26.7922,
    lng: 82.1998,
    weather: {
      temp: 30,
      condition: "Pleasant Sunshine",
      conditionCode: "sunny",
      humidity: 59,
      wind: "10 km/h",
      feelsLike: 32,
      precipitationChance: 10,
      uvIndex: 6,
      forecast: [
        { day: "Day 1", temp: "30°C", icon: "sun", note: "Gentle breeze along Saryu riverfront" },
        { day: "Day 2", temp: "31°C", icon: "sun", note: "Clear skies for temple complex walks" }
      ]
    },
    hazard: {
      type: "High Crowd Density & Summer Heatwave",
      level: "Moderate",
      probability: 25,
      dangerZones: ["Ram Janmabhoomi Security Lines", "Hanuman Garhi Steep Steps"],
      advisory: "Peak festivals (Ram Navami, Deepotsav) draw millions. Ensure elderly tourists stay hydrated and pre-book digital Darshan tokens."
    },
    wardrobe: {
      category: "Modest Spiritual & Heat Tolerant",
      headline: "Traditional Cotton Kurta/Sari + Sun Umbrella + Socks",
      fabrics: "Lightweight cotton, khadi, breathable linen",
      footwear: "Shoes with thick socks (stone temple courtyards become scalding hot under midday sun)",
      culturalEtiquette: "Strict security protocols: Mobile phones, smart watches, and leather belts prohibited inside main sanctum.",
      mustCarry: [
        "Official Photo ID (Mandatory for security gates)",
        "Cotton Socks (for heated marble walkway)",
        "Foldable Sun Hat / Umbrella",
        "Electrolyte Hydration Packets",
        "Locker Bag for Digital Gadgets"
      ]
    },
    days: [
      {
        dayNumber: 1,
        title: "Shri Ram Janmabhoomi & Saryu Maha Aarti",
        subtitle: "Nagara Architecture, Hanuman Garhi & Laser Light Show",
        date: "Day 1",
        hours: [
          {
            time: "07:30 AM - 10:30 AM",
            title: "Shri Ram Janmabhoomi Mandir Grand Darshan",
            description: "Marvel at the monumental pink Bansi Paharpur sandstone temple built in traditional Nagara style, offering prayers to Ram Lalla.",
            category: "Spiritual",
            categoryTag: "Grand Mandir",
            cost: "Free (Pass Required)",
            costNum: 0,
            location: "Ram Kot, Ayodhya",
            lat: 26.795,
            lng: 82.194,
            weatherSuitability: "Early Morning Cool",
            badgeColor: "amber",
            rating: 5.0
          },
          {
            time: "11:00 AM - 12:30 PM",
            title: "Hanuman Garhi 76-Step Temple Fortress",
            description: "Climb the 76 steps to the 10th-century fortress temple guarding Ayodhya, seeking blessings of Lord Hanuman.",
            category: "Spiritual",
            categoryTag: "Historic Fort",
            cost: "Free",
            costNum: 0,
            location: "Sai Nagar, Ayodhya",
            lat: 26.793,
            lng: 82.203,
            weatherSuitability: "Shaded Steps",
            badgeColor: "purple",
            rating: 4.8
          },
          {
            time: "01:00 PM - 02:30 PM",
            title: "Traditional Awadhi Satvik Thali Lunch",
            description: "Pure vegetarian satvik meal featuring Dal Baati Churma, Paneer Lababdar, Bedmi Puri, and hot Gulab Jamuns.",
            category: "Dining",
            categoryTag: "Satvik Lunch",
            cost: "₹300",
            costNum: 300,
            location: "Ram Ki Paidi Food Lane",
            lat: 26.801,
            lng: 82.205,
            weatherSuitability: "Indoor AC",
            badgeColor: "cyan",
            rating: 4.7
          },
          {
            time: "06:00 PM - 08:30 PM",
            title: "Ram Ki Paidi Saryu Evening Aarti & Laser Symphony",
            description: "Witness the illuminated steps of Ram Ki Paidi glowing with thousands of earthen lamps, accompanied by a dynamic laser projection tracing the Ramayana.",
            category: "Culture",
            categoryTag: "Laser & Aarti",
            cost: "Free",
            costNum: 0,
            location: "Saryu Riverfront, Ayodhya",
            lat: 26.804,
            lng: 82.206,
            weatherSuitability: "Evening Breeze",
            badgeColor: "pink",
            rating: 4.9
          }
        ]
      }
    ]
  },

  manali: {
    id: "manali",
    name: "Manali & Solang Valley",
    state: "Himachal Pradesh",
    category: "himalayas",
    categoryLabel: "Himalayas & Adventure",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1000&auto=format&fit=crop&q=80",
    bestSeason: "Oct - Jun (Snow & Adventure Sports)",
    helpline: "1363 (Tourist) · 112 (Police)",
    tagline: "Himalayan Adventure Haven - Pine Trails, Rohtang & Atal Tunnel",
    lat: 32.2396,
    lng: 77.1887,
    weather: {
      temp: 16,
      condition: "Cool Alpine Breeze",
      conditionCode: "cloudy",
      humidity: 64,
      wind: "11 km/h",
      feelsLike: 15,
      precipitationChance: 35,
      uvIndex: 6,
      forecast: [
        { day: "Day 1", temp: "16°C", icon: "sun", note: "Pleasant cafe weather in Old Manali" },
        { day: "Day 2", temp: "9°C", icon: "snow", note: "Sub-zero winds at Rohtang Pass" }
      ]
    },
    hazard: {
      type: "Landslides on Chandigarh-Manali Highway & Sudden Snow Blizzards",
      level: "High",
      probability: 45,
      dangerZones: ["Pandoh Dam Stretch", "Gulaba Rohtang Road", "Solang Valley Riverbeds"],
      advisory: "Monsoon rains trigger severe landslides along the Beas river basin. Always verify National Highway-21 traffic alerts before departure."
    },
    wardrobe: {
      category: "Mountain Adventure & Snow Proof",
      headline: "Fleece Jacket + Waterproof Snow Boots + UV Goggles",
      fabrics: "Thermal innerwear, fleece jacket, waterproof windcheater, down parka",
      footwear: "Waterproof trekking boots with ankle support and deep rubber treads",
      culturalEtiquette: "Modest attire at Hadimba Temple and Vashisht Hot Springs.",
      mustCarry: [
        "Thermals & Extra Woolen Socks",
        "Waterproof Trekking Shoes",
        "UV 400 Polarized Sunglasses (protect against snow blindness)",
        "Motion Sickness Tablets (for winding ghat roads)",
        "Power Bank (cold temperatures deplete phone batteries rapidly)"
      ]
    },
    days: [
      {
        dayNumber: 1,
        title: "Hadimba Ancient Forest & Old Manali Bohemian Cafes",
        subtitle: "Cedar Woods, Vashisht Sulphur Springs & Live Music",
        date: "Day 1",
        hours: [
          {
            time: "08:30 AM - 10:30 AM",
            title: "Hadimba Devi 1553 Wood Carved Temple",
            description: "Surrounded by towering deodar forests, marvel at the four-tiered wooden pagoda temple dedicated to Hadimba Devi.",
            category: "Heritage",
            categoryTag: "Forest Shrine",
            cost: "₹30",
            costNum: 30,
            location: "Dhungri Forest, Manali",
            lat: 32.248,
            lng: 77.181,
            weatherSuitability: "Pine Forest Walk",
            badgeColor: "green",
            rating: 4.8
          },
          {
            time: "11:00 AM - 01:00 PM",
            title: "Vashisht Natural Hot Sulphur Springs",
            description: "Dip your feet into therapeutic natural hot springs with scenic views across the Beas valley.",
            category: "Wellness",
            categoryTag: "Hot Springs",
            cost: "Free",
            costNum: 0,
            location: "Vashisht Village",
            lat: 32.261,
            lng: 77.199,
            weatherSuitability: "Warm Baths",
            badgeColor: "cyan",
            rating: 4.7
          },
          {
            time: "01:30 PM - 03:30 PM",
            title: "Woodfired Trout & Apple Crumble in Old Manali",
            description: "Tuck into freshly caught Himalayan river trout baked with mountain herbs and warm Himachali apple pie at Cafe 1947.",
            category: "Dining",
            categoryTag: "Lunch",
            cost: "₹650",
            costNum: 650,
            location: "Old Manali Riverside",
            lat: 32.253,
            lng: 77.182,
            weatherSuitability: "Riverside Deck",
            badgeColor: "cyan",
            rating: 4.9
          },
          {
            time: "04:00 PM - 07:00 PM",
            title: "Mall Road Shopping & Tibetan Handcrafts",
            description: "Pick up hand-woven Kullu shawls, wooden carvings, and pine honey along the pedestrian boulevard.",
            category: "Leisure",
            categoryTag: "Shopping",
            cost: "Free",
            costNum: 0,
            location: "Mall Road, Manali",
            lat: 32.242,
            lng: 77.189,
            weatherSuitability: "Evening Stroll",
            badgeColor: "purple",
            rating: 4.7
          }
        ]
      }
    ]
  },

  rajasthan: {
    id: "rajasthan",
    name: "Rajasthan (Jaipur & Udaipur)",
    state: "Rajasthan",
    category: "heritage",
    categoryLabel: "Heritage & Royal Palaces",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1000&auto=format&fit=crop&q=80",
    bestSeason: "Oct - Mar (Royal Desert Season)",
    helpline: "1363 (Tourist) · 112 (Police)",
    tagline: "Land of Maharajas - Golden Fortresses & Royal Palaces",
    lat: 26.9124,
    lng: 75.7873,
    weather: {
      temp: 33,
      condition: "Dry Sun & Golden Glow",
      conditionCode: "sunny",
      humidity: 35,
      wind: "15 km/h",
      feelsLike: 35,
      precipitationChance: 5,
      uvIndex: 9,
      forecast: [
        { day: "Day 1", temp: "33°C", icon: "sun", note: "Bright skies over Amber Fort" },
        { day: "Day 2", temp: "30°C", icon: "sun", note: "Sunset breeze on Lake Pichola" }
      ]
    },
    hazard: {
      type: "Desert Heatwave & Thar Dust Storms",
      level: "Moderate",
      probability: 25,
      dangerZones: ["Exposed Fort Ramparts during Midday (12 PM - 3 PM)", "Highway Desert Stretches"],
      advisory: "Summer temperatures can touch 43°C. Plan fort sightseeing during early morning hours and stay equipped with electrolyte hydration."
    },
    wardrobe: {
      category: "Desert Sun-Proof & Royal Modest",
      headline: "Loose Flowing Cotton + Broad Sun Hat + Polarized Shades",
      fabrics: "Fine mulmul, breathable linen, lightweight chiffon",
      footwear: "Cushioned walking shoes for cobbled fort ramps and marble palace corridors",
      culturalEtiquette: "Modest dressing inside temples and royal family courtyards.",
      mustCarry: [
        "Broad-Brimmed Sun Hat or Cotton Bandana",
        "Sunscreen SPF 50+ & Aloe Vera Gel",
        "ORSL / Oral Rehydration Salts",
        "Scarf to protect against desert dust",
        "Camera with extra battery (for royal architecture)"
      ]
    },
    days: [
      {
        dayNumber: 1,
        title: "Amber Fort Majesty & Pink City Bazaars",
        subtitle: "Sheesh Mahal Mirrors, Hawa Mahal & Dal Baati Churma",
        date: "Day 1",
        hours: [
          {
            time: "08:00 AM - 11:30 AM",
            title: "Amber Fort & Sheesh Mahal (Palace of Mirrors)",
            description: "Climb through the monumental sun-gilded courtyards and marvel at thousands of concave Belgian glass mirrors illuminating the royal chambers.",
            category: "Heritage",
            categoryTag: "Royal Fort",
            cost: "₹100 (Indian) / ₹500 (Foreign)",
            costNum: 100,
            location: "Amer, Jaipur",
            lat: 26.985,
            lng: 75.851,
            weatherSuitability: "Early Morning Best",
            badgeColor: "amber",
            rating: 5.0
          },
          {
            time: "12:00 PM - 01:30 PM",
            title: "Hawa Mahal (Palace of Winds) & Photo Deck",
            description: "Admire the 953 honeycombed sandstone jharokha windows designed to funnel cooling desert breezes to royal women.",
            category: "Heritage",
            categoryTag: "Iconic Landmark",
            cost: "₹50",
            costNum: 50,
            location: "Badi Choupad, Jaipur",
            lat: 26.924,
            lng: 75.826,
            weatherSuitability: "Shaded Balconies",
            badgeColor: "purple",
            rating: 4.8
          },
          {
            time: "02:00 PM - 03:30 PM",
            title: "Royal Rajasthani Thali at Chokhi Dhani",
            description: "Authentic feast of Baati dipped in pure desi ghee, spicy Panchmel Dal, Churma, Gatte ki Sabzi, and Ker Sangri.",
            category: "Dining",
            categoryTag: "Royal Lunch",
            cost: "₹750",
            costNum: 750,
            location: "Tonk Road / MI Road",
            lat: 26.852,
            lng: 75.811,
            weatherSuitability: "Air-Conditioned",
            badgeColor: "cyan",
            rating: 4.9
          },
          {
            time: "05:00 PM - 07:30 PM",
            title: "Sunset over Jal Mahal & Johari Bazaar Gems",
            description: "Watch the water palace glow under amber sunset lights followed by shopping for blue pottery and silver jhumkas.",
            category: "Scenic",
            categoryTag: "Sunset & Souvenirs",
            cost: "Free",
            costNum: 0,
            location: "Man Sagar Lake, Jaipur",
            lat: 26.953,
            lng: 75.846,
            weatherSuitability: "Golden Sunset",
            badgeColor: "pink",
            rating: 4.9
          }
        ]
      }
    ]
  },

  kolkata: {
    id: "kolkata",
    name: "Kolkata (City of Joy)",
    state: "West Bengal",
    category: "heritage",
    categoryLabel: "Heritage & Cultural Capital",
    image: "https://images.unsplash.com/photo-1558431382-27e303142255?w=1000&auto=format&fit=crop&q=80",
    bestSeason: "Oct - Mar (Durga Puja & Winter Sweets)",
    helpline: "1363 (Tourist) · 112 (Police)",
    tagline: "City of Joy - Colonial Splendor, Art & Street Culinary",
    lat: 22.5726,
    lng: 88.3639,
    weather: {
      temp: 29,
      condition: "Tropical Warmth & Passing Clouds",
      conditionCode: "cloudy",
      humidity: 78,
      wind: "12 km/h",
      feelsLike: 33,
      precipitationChance: 30,
      uvIndex: 6,
      forecast: [
        { day: "Day 1", temp: "29°C", icon: "sun", note: "Pleasant breeze along Princep Ghat" },
        { day: "Day 2", temp: "30°C", icon: "cloud", note: "Warm evening in Park Street" }
      ]
    },
    hazard: {
      type: "Kalbaishakhi Thunderstorms & Urban Waterlogging",
      level: "Moderate",
      probability: 25,
      dangerZones: ["Central Avenue Waterlogging Stretch", "Howrah Bridge Ferry during High Wind"],
      advisory: "Sudden pre-monsoon squalls (Kalbaishakhi) bring gale force winds. Carry umbrellas and utilize Kolkata Metro during downpours."
    },
    wardrobe: {
      category: "Tropical Cotton & Vintage Walking",
      headline: "Pure Handloom Cotton Kurta + Walking Shoes + Umbrella",
      fabrics: "Bengal Tant cotton, mulmul, soft linen",
      footwear: "Comfortable closed sneakers for extensive colonial architecture walks",
      culturalEtiquette: "Modest clothing at Dakshineswar & Kalighat; leather goods restricted.",
      mustCarry: [
        "Lightweight Compact Umbrella",
        "Cotton Handkerchief for humid days",
        "Metro Smartcard or UPI for street food",
        "Canvas Tote Bag for College Street Book Market"
      ]
    },
    days: [
      {
        dayNumber: 1,
        title: "Victoria Memorial Grandeur & Heritage Tram Ride",
        subtitle: "Princep Ghat River Breeze, Coffee House & Park Street",
        date: "Day 1",
        hours: [
          {
            time: "08:30 AM - 10:30 AM",
            title: "Victoria Memorial White Marble Palace & Gardens",
            description: "Stroll through the 64-acre royal gardens and galleries housing British colonial masterpieces and Queen Victoria's royal piano.",
            category: "Heritage",
            categoryTag: "Marble Palace",
            cost: "₹50 (Indian) / ₹500 (Foreign)",
            costNum: 50,
            location: "Queens Way, Maidan",
            lat: 22.544,
            lng: 88.342,
            weatherSuitability: "Morning Garden Walk",
            badgeColor: "purple",
            rating: 4.9
          },
          {
            time: "11:00 AM - 01:00 PM",
            title: "Vintage Wooden Tram Ride & College Street Boi Para",
            description: "Hop on Asia's oldest operating electric tram through heritage streets to the world's largest second-hand book market.",
            category: "Culture",
            categoryTag: "Vintage Tram",
            cost: "₹10",
            costNum: 10,
            location: "College Street, Kolkata",
            lat: 22.574,
            lng: 88.363,
            weatherSuitability: "Covered Tram",
            badgeColor: "blue",
            rating: 4.8
          },
          {
            time: "01:30 PM - 03:00 PM",
            title: "Traditional Bengali Fish Curry & Mishti Doi",
            description: "Relish aromatic Ilish Bhape (steamed hilsa in mustard), Kosha Mangsho, Luchi, and caramelized earthen pot Mishti Doi at 6 Ballygunge Place.",
            category: "Dining",
            categoryTag: "Bengali Lunch",
            cost: "₹650",
            costNum: 650,
            location: "Ballygunge, Kolkata",
            lat: 22.528,
            lng: 88.367,
            weatherSuitability: "Indoor Heritage",
            badgeColor: "cyan",
            rating: 4.9
          },
          {
            time: "05:00 PM - 07:30 PM",
            title: "Sunset Wooden Boat at Princep Ghat & Vidyasagar Setu",
            description: "Drift in a traditional country boat beneath the grand cable-stayed bridge while savoring hot chai and Kolkata Kathi Rolls.",
            category: "Scenic",
            categoryTag: "Hooghly River Sunset",
            cost: "₹350 (Boat)",
            costNum: 350,
            location: "Princep Ghat, Strand Rd",
            lat: 22.555,
            lng: 88.332,
            weatherSuitability: "Golden Sunset",
            badgeColor: "amber",
            rating: 5.0
          }
        ]
      }
    ]
  },

  ladakh: {
    id: "ladakh",
    name: "Ladakh (Leh, Pangong & Nubra)",
    state: "Ladakh",
    category: "himalayas",
    categoryLabel: "Himalayas & High Altitude",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=1000&auto=format&fit=crop&q=80",
    bestSeason: "May - Sep (Open High Passes)",
    helpline: "1363 (Tourist) · 112 (Police)",
    tagline: "Roof of the World - High Altitude Lakes & Moonland Passes",
    lat: 34.1526,
    lng: 77.5771,
    weather: {
      temp: 10,
      condition: "Piercing Blue Skies & High UV",
      conditionCode: "sunny",
      humidity: 22,
      wind: "24 km/h",
      feelsLike: 7,
      precipitationChance: 5,
      uvIndex: 11,
      forecast: [
        { day: "Day 1", temp: "10°C", icon: "sun", note: "Mandatory rest day in Leh for acclimatization" },
        { day: "Day 2", temp: "2°C", icon: "wind", note: "Sub-zero winds at Khardung La Pass" }
      ]
    },
    hazard: {
      type: "Acute Mountain Sickness (AMS) & Extreme UV Radiation",
      level: "High",
      probability: 60,
      dangerZones: ["Khardung La (17,982 ft)", "Chang La (17,688 ft)", "Pangong Tso Night Chill"],
      advisory: "CRITICAL: Mandatory 48-hour complete resting protocol upon landing at Leh (11,500 ft). Diamox medication recommended under medical supervision. Never sleep at passes above 15,000 ft."
    },
    wardrobe: {
      category: "High Altitude Extreme 4-Layer System",
      headline: "Thermal Base + Polar Fleece + Down Parka + UV 400 Goggles",
      fabrics: "Heavy Merino wool, down feathers, windstopper shell",
      footwear: "Rigid high-ankle waterproof hiking boots with thermal wool socks",
      culturalEtiquette: "Walk clockwise around chortens and mani stones; remove hats inside monastery prayer halls.",
      mustCarry: [
        "Portable Oxygen Canister (Oxy99)",
        "Diamox / Acetazolamide Tablets",
        "UV 400 Category 4 Polarized Sunglasses",
        "High SPF 50+ Sunscreen & Boroline Lip Balm",
        "Inner Line Permits (ILP) Printed Copies"
      ]
    },
    days: [
      {
        dayNumber: 1,
        title: "Leh Acclimatization, Shanti Stupa & Tibetan Old Town",
        subtitle: "Slow Pace Rest, Butter Tea & Panoramic Sunset",
        date: "Day 1",
        hours: [
          {
            time: "08:30 AM - 12:00 PM",
            title: "Mandatory Oxygen Rest & Hydration in Hotel",
            description: "Strict acclimatization rest period sipping warm water and garlic soup to prevent Acute Mountain Sickness.",
            category: "Wellness",
            categoryTag: "Acclimatization",
            cost: "Free",
            costNum: 0,
            location: "Leh Town Hotel",
            lat: 34.164,
            lng: 77.584,
            weatherSuitability: "Indoor Rest",
            badgeColor: "green",
            rating: 5.0
          },
          {
            time: "01:00 PM - 02:30 PM",
            title: "Traditional Ladakhi Skyu & Thukpa Lunch",
            description: "Warm vegetable and wheat dough pasta stew simmered with mountain root vegetables at The Tibetan Kitchen.",
            category: "Dining",
            categoryTag: "Lunch",
            cost: "₹400",
            costNum: 400,
            location: "Fort Road, Leh",
            lat: 34.161,
            lng: 77.581,
            weatherSuitability: "Warm Cafe",
            badgeColor: "cyan",
            rating: 4.8
          },
          {
            time: "04:30 PM - 07:00 PM",
            title: "Sunset at Shanti Stupa & White Dome Chorten",
            description: "Gently climb to the Japanese Peace Stupa overlooking the snowcapped Stok Kangri range under twilight stars.",
            category: "Scenic",
            categoryTag: "Panoramic Vista",
            cost: "Free",
            costNum: 0,
            location: "Chanspa, Leh",
            lat: 34.172,
            lng: 77.574,
            weatherSuitability: "Cold Evening",
            badgeColor: "amber",
            rating: 5.0
          }
        ]
      }
    ]
  },

  gangtok: {
    id: "gangtok",
    name: "Gangtok & East Sikkim",
    state: "Sikkim",
    category: "himalayas",
    categoryLabel: "Himalayas & Monasteries",
    image: "https://images.unsplash.com/photo-1579618218290-24a26f634568?w=1000&auto=format&fit=crop&q=80",
    bestSeason: "Mar - May / Oct - Dec (Mountain Views)",
    helpline: "1363 (Tourist) · 112 (Police)",
    tagline: "Gateway to Sikkim - Monasteries, Nathula & Glacial Lakes",
    lat: 27.3389,
    lng: 88.6065,
    weather: {
      temp: 17,
      condition: "Misty Mountain Clouds",
      conditionCode: "cloudy",
      humidity: 88,
      wind: "10 km/h",
      feelsLike: 16,
      precipitationChance: 40,
      uvIndex: 5,
      forecast: [
        { day: "Day 1", temp: "17°C", icon: "cloud", note: "Clean cobblestone stroll along MG Marg" },
        { day: "Day 2", temp: "8°C", icon: "snow", note: "Chilly winds at Tsomgo Glacial Lake" }
      ]
    },
    hazard: {
      type: "Landslides on National Highway 10 & Snowbound Passes",
      level: "High",
      probability: 40,
      dangerZones: ["NH-10 Teesta Riverbanks", "Jawaharlal Nehru Road to Tsomgo"],
      advisory: "Heavy rains frequently trigger rockslides along the Siliguri-Gangtok route. Nathula Pass requires special military permits arranged in advance."
    },
    wardrobe: {
      category: "Hill Station Layering & Rain Proof",
      headline: "Waterproof Windbreaker + Woolen Cardigan + Comfortable Sneakers",
      fabrics: "Warm fleece, weather-proof nylon, wool blends",
      footwear: "Waterproof sneakers or light hiking boots",
      culturalEtiquette: "Remove shoes at Rumtek and Enchey monasteries; photography restricted inside sanctum.",
      mustCarry: [
        "Voter ID / Passport & 4 Passport Photos for Sikkim Permits",
        "Waterproof Rain Poncho or Trench",
        "Light Woolen Beanie & Scarf",
        "Motion Sickness Pills (for winding hill roads)"
      ]
    },
    days: [
      {
        dayNumber: 1,
        title: "MG Marg Promenade, Cable Car & Rumtek Monastery",
        subtitle: "Litter-Free Boulevard, Tibetan Crafts & Golden Stupa",
        date: "Day 1",
        hours: [
          {
            time: "08:30 AM - 10:30 AM",
            title: "Rumtek Dharma Chakra Centre & Golden Stupa",
            description: "Visit the grand 16th Karmapa seat adorned with intricate Tibetan murals, golden prayer wheels, and sacred relics.",
            category: "Culture",
            categoryTag: "Tibetan Monastery",
            cost: "₹20",
            costNum: 20,
            location: "Rumtek, 24 km from Gangtok",
            lat: 27.301,
            lng: 88.541,
            weatherSuitability: "Covered Courtyards",
            badgeColor: "purple",
            rating: 4.9
          },
          {
            time: "11:30 AM - 01:00 PM",
            title: "Gangtok Ropeway Aerial Cable Car",
            description: "Glide high above the city valley with sweeping views of the Kanchenjunga peak and Deorali hills.",
            category: "Scenic",
            categoryTag: "Aerial Ride",
            cost: "₹110",
            costNum: 110,
            location: "Deorali Bazar",
            lat: 27.319,
            lng: 88.609,
            weatherSuitability: "Clear Windows",
            badgeColor: "blue",
            rating: 4.7
          },
          {
            time: "01:30 PM - 03:00 PM",
            title: "Authentic Sikkimese Shaphalay & Tingmo Lunch",
            description: "Crisp meat-stuffed fried Shaphalay bread with spiced broth and fiery Dalle Khursani chilli chutney at Taste of Tibet.",
            category: "Dining",
            categoryTag: "Lunch",
            cost: "₹350",
            costNum: 350,
            location: "MG Marg, Gangtok",
            lat: 27.329,
            lng: 88.613,
            weatherSuitability: "Cozy Dining",
            badgeColor: "cyan",
            rating: 4.8
          },
          {
            time: "04:30 PM - 08:30 PM",
            title: "MG Marg Evening Walk & Red Panda Beer Tasting",
            description: "Stroll along India's cleanest vehicle-free promenade illuminated with fairy lights, stopping at local microbreweries.",
            category: "Leisure",
            categoryTag: "Pedestrian Boulevard",
            cost: "Free",
            costNum: 0,
            location: "MG Marg Promenade",
            lat: 27.329,
            lng: 88.613,
            weatherSuitability: "Evening Mist",
            badgeColor: "pink",
            rating: 4.9
          }
        ]
      }
    ]
  },

  darjeeling: {
    id: "darjeeling",
    name: "Darjeeling",
    state: "West Bengal",
    category: "himalayas",
    categoryLabel: "Himalayas & Tea Estates",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1000&auto=format&fit=crop&q=80",
    bestSeason: "Sep - Nov / Mar - May (Toy Train Season)",
    helpline: "1363 (Tourist) · 112 (Police)",
    tagline: "Queen of the Hills - First Flush Tea & Kanchenjunga Vistas",
    lat: 27.041,
    lng: 88.2663,
    weather: {
      temp: 18,
      condition: "Light Mountain Rain",
      conditionCode: "rainy",
      humidity: 92,
      wind: "12 km/h",
      feelsLike: 17,
      precipitationChance: 70,
      uvIndex: 4,
      forecast: [
        { day: "Day 1", temp: "18°C", icon: "rain", note: "Light rain over tea valleys" },
        { day: "Day 2", temp: "20°C", icon: "cloud-sun", note: "Optimal sunrise at Tiger Hill" }
      ]
    },
    hazard: {
      type: "Hill Slope Mudslips & Dense Fog",
      level: "Moderate",
      probability: 35,
      dangerZones: ["Pankhabari Road", "Lebong Cart Road during heavy showers"],
      advisory: "Dense cloud cover can reduce road visibility to under 10 meters. The UNESCO Toy Train schedule can be impacted by fog."
    },
    wardrobe: {
      category: "Warm Hill Layers & Rain Guard",
      headline: "Cardigan + Windbreaker + Umbrella + Sturdy Sneakers",
      fabrics: "Warm woolens, fleece, waterproof nylon",
      footwear: "Walking sneakers with anti-slip grip for steep inclines",
      culturalEtiquette: "Modesty in monasteries; silence in tea tasting salons.",
      mustCarry: [
        "Compact Folding Umbrella",
        "Warm Woolen Muffler & Gloves",
        "Cash (small tea stalls accept cash only)",
        "Thermos Flask for warm water"
      ]
    },
    days: [
      {
        dayNumber: 1,
        title: "Tea Factory Heritage, Mountaineering Museum & Glenary's",
        subtitle: "Covered Factory Tours, Everest Relics & Live Music",
        date: "Day 1",
        hours: [
          {
            time: "08:30 AM - 10:00 AM",
            title: "Artisanal Breakfast at Keventer's Open Terrace",
            description: "Freshly brewed Darjeeling First Flush tea with hot sausages, toast, and valley mist.",
            category: "Dining",
            categoryTag: "Breakfast",
            cost: "₹350",
            costNum: 350,
            location: "Clubside, Darjeeling",
            lat: 27.041,
            lng: 88.266,
            weatherSuitability: "Covered Deck",
            badgeColor: "cyan",
            rating: 4.8
          },
          {
            time: "10:30 AM - 01:00 PM",
            title: "Himalayan Mountaineering Institute & Museum",
            description: "Inspect Tenzing Norgay's original 1953 Everest ascent gear, historic ice axes, and mountaineering archives.",
            category: "Heritage",
            categoryTag: "Indoor Museum",
            cost: "₹150",
            costNum: 150,
            location: "Jawahar Parbat",
            lat: 27.051,
            lng: 88.258,
            weatherSuitability: "Rain-Safe",
            badgeColor: "purple",
            rating: 4.9
          },
          {
            time: "01:30 PM - 03:00 PM",
            title: "Warm Tibetan Broth & Steamed Momos at Kunga",
            description: "Comforting Thukpa noodle soup and steamed pork/veg momos at Darjeeling's most beloved cult eatery.",
            category: "Dining",
            categoryTag: "Lunch",
            cost: "₹300",
            costNum: 300,
            location: "Chauk Bazaar",
            lat: 27.040,
            lng: 88.268,
            weatherSuitability: "Indoor",
            badgeColor: "cyan",
            rating: 4.8
          },
          {
            time: "07:00 PM - 09:30 PM",
            title: "Colonial Dinner & Live Acoustic at Glenary's",
            description: "Roast chicken, hot apple strudel, and acoustic folk music inside the 130-year-old colonial bakery lounge.",
            category: "Nightlife",
            categoryTag: "Dinner & Music",
            cost: "₹850",
            costNum: 850,
            location: "Nehru Road, The Mall",
            lat: 27.043,
            lng: 88.266,
            weatherSuitability: "Warm Fireplace",
            badgeColor: "pink",
            rating: 4.9
          }
        ]
      }
    ]
  },

  digha: {
    id: "digha",
    name: "Digha & Coastal Bengal",
    state: "West Bengal",
    category: "coastal",
    categoryLabel: "Coastal & Beachfront",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&auto=format&fit=crop&q=80",
    bestSeason: "Oct - Mar (Gentle Ocean Breeze)",
    helpline: "1363 (Tourist) · 112 (Police)",
    tagline: "Bengal's Favorite Coastline - Casuarina Groves & Golden Tides",
    lat: 21.6266,
    lng: 87.5074,
    weather: {
      temp: 28,
      condition: "Ocean Breeze & Sunny Shores",
      conditionCode: "sunny",
      humidity: 82,
      wind: "18 km/h",
      feelsLike: 31,
      precipitationChance: 20,
      uvIndex: 8,
      forecast: [
        { day: "Day 1", temp: "28°C", icon: "sun", note: "Pleasant tides at New Digha" },
        { day: "Day 2", temp: "29°C", icon: "sun", note: "Breezy afternoon at Udaipur beach" }
      ]
    },
    hazard: {
      type: "High Sea Waves & Tidal Swells",
      level: "Moderate",
      probability: 30,
      dangerZones: ["Old Digha Concrete Sea Wall during High Tide", "Unmanned Udaipur Beach Stretches"],
      advisory: "High tide surging waves can be perilous along Old Digha's stone breakers. Follow lifeguard warning flags and avoid swimming after sunset."
    },
    wardrobe: {
      category: "Beach Casual & Quick-Dry",
      headline: "Cotton Shorts + Linen Shirts + Flip-Flops + Sunscreen",
      fabrics: "Quick-dry nylon, breathable cotton, airy linen",
      footwear: "Waterproof beach flip-flops or water shoes",
      culturalEtiquette: "Casual resort wear; modest attire recommended when exploring village fish markets.",
      mustCarry: [
        "Waterproof Phone Pouch",
        "Sunscreen Lotion SPF 50",
        "Beach Towel & Spare Change of Clothes",
        "Polarized Sunglasses & Sun Cap"
      ]
    },
    days: [
      {
        dayNumber: 1,
        title: "New Digha Morning Waves & Marine Aquarium",
        subtitle: "Fried Seafood Shacks, Casuarina Pines & Udaipur Beach",
        date: "Day 1",
        hours: [
          {
            time: "06:30 AM - 09:00 AM",
            title: "Sunrise Walk along New Digha Sea Beach",
            description: "Dip your feet in the calm Bay of Bengal waves while red ghost crabs scurry along the flat golden sands.",
            category: "Scenic",
            categoryTag: "Beach Sunrise",
            cost: "Free",
            costNum: 0,
            location: "New Digha Beach",
            lat: 21.626,
            lng: 87.507,
            weatherSuitability: "Crisp Morning",
            badgeColor: "amber",
            rating: 4.7
          },
          {
            time: "09:30 AM - 11:00 AM",
            title: "Marine Aquarium & Regional Research Centre",
            description: "Explore India's largest marine research aquarium housing sea anemones, rays, coral fish, and coastal flora.",
            category: "Culture",
            categoryTag: "Marine Biology",
            cost: "Free",
            costNum: 0,
            location: "Old Digha Main Road",
            lat: 21.628,
            lng: 87.519,
            weatherSuitability: "Indoor Air-Cooled",
            badgeColor: "blue",
            rating: 4.6
          },
          {
            time: "01:00 PM - 02:30 PM",
            title: "Fresh Fried Pomfret & Prawn Curry Feast",
            description: "Savor crispy spiced fried sea pomfret, jumbo prawn malai curry, and steamed rice at beachfront shack stalls.",
            category: "Dining",
            categoryTag: "Seafood Lunch",
            cost: "₹450",
            costNum: 450,
            location: "Beach Road Shacks",
            lat: 21.625,
            lng: 87.509,
            weatherSuitability: "Beach Canopy",
            badgeColor: "cyan",
            rating: 4.8
          },
          {
            time: "04:30 PM - 07:30 PM",
            title: "Udaipur Beach Speedboat & Casuarina Sunset",
            description: "Ride an adrenaline-filled speedboat along the Bengal-Odisha border followed by sipping fresh green coconut water.",
            category: "Adventure",
            categoryTag: "Water Sports",
            cost: "₹400",
            costNum: 400,
            location: "Udaipur Beach, Border",
            lat: 21.611,
            lng: 87.491,
            weatherSuitability: "Golden Sunset",
            badgeColor: "pink",
            rating: 4.8
          }
        ]
      }
    ]
  },

  puri: {
    id: "puri",
    name: "Puri & Konark",
    state: "Odisha",
    category: "spiritual",
    categoryLabel: "Spiritual & Coastal Yatra",
    image: "https://images.unsplash.com/photo-1599818816933-4f964030739c?w=1000&auto=format&fit=crop&q=80",
    bestSeason: "Oct - Mar (Pleasant Temple Yatra)",
    helpline: "1363 (Tourist) · 112 (Police)",
    tagline: "Spiritual Shore of Odisha - Chariot of Faith & Sun Temple",
    lat: 19.8135,
    lng: 85.8312,
    weather: {
      temp: 29,
      condition: "Coastal Warmth & Salty Breeze",
      conditionCode: "sunny",
      humidity: 79,
      wind: "16 km/h",
      feelsLike: 32,
      precipitationChance: 20,
      uvIndex: 8,
      forecast: [
        { day: "Day 1", temp: "29°C", icon: "sun", note: "Gentle surf at Golden Beach" },
        { day: "Day 2", temp: "30°C", icon: "sun", note: "Sunlit stone wheels at Konark" }
      ]
    },
    hazard: {
      type: "Ocean Undertow Rip Currents & Coastal Cyclones",
      level: "Moderate",
      probability: 30,
      dangerZones: ["Blue Flag Beach Deep Water Zone", "Chakratirtha Beach Rip Currents"],
      advisory: "Puri's coastal waves have strong underwater rip currents. Bathe only in designated zones supervised by government lifeguards."
    },
    wardrobe: {
      category: "Spiritual Cotton & Coastal Comfort",
      headline: "Traditional Cotton Kurta/Sari + Beach Sandals + Sun Hat",
      fabrics: "Odisha Sambalpuri cotton, lightweight mulmul",
      footwear: "Slip-on sandals (leather shoes/belts completely forbidden inside Jagannath Temple)",
      culturalEtiquette: "Strict Hindu temple entry guidelines at Jagannath Temple; no cameras or leather items permitted.",
      mustCarry: [
        "Cloth bag for personal belongings during temple visits",
        "Cotton Dupatta or Dhoti",
        "Sunscreen & Sunglasses for Golden Beach",
        "Cash for temple priests & Mahaprasad"
      ]
    },
    days: [
      {
        dayNumber: 1,
        title: "Shree Jagannath Mandir Darshan & Mahaprasad",
        subtitle: "12th Century Sanctum, Anand Bazar & Golden Beach",
        date: "Day 1",
        hours: [
          {
            time: "07:00 AM - 10:30 AM",
            title: "Shree Jagannath Temple Morning Darshan",
            description: "Pay homage to Lord Jagannath, Balabhadra, and Subhadra in the 12th-century Kalinga architecture masterpiece.",
            category: "Spiritual",
            categoryTag: "Sacred Temple",
            cost: "Free",
            costNum: 0,
            location: "Grand Road, Puri",
            lat: 19.805,
            lng: 85.818,
            weatherSuitability: "Early Morning",
            badgeColor: "amber",
            rating: 5.0
          },
          {
            time: "11:30 AM - 01:00 PM",
            title: "Ananda Bazar Sacred 56-Bhog Mahaprasad",
            description: "Taste the world's largest open-air food market serving divine Khaja, Kanika sweet rice, and Dalma cooked in earthen clay pots.",
            category: "Dining",
            categoryTag: "Sacred Lunch",
            cost: "₹250",
            costNum: 250,
            location: "Temple Anand Bazar",
            lat: 19.806,
            lng: 85.819,
            weatherSuitability: "Covered Market",
            badgeColor: "cyan",
            rating: 4.9
          },
          {
            time: "04:00 PM - 07:30 PM",
            title: "Golden Beach (Blue Flag Certified) Sunset Walk",
            description: "Walk along the pristine Blue Flag certified sands, watching local sand sculptors craft transient mythological art.",
            category: "Scenic",
            categoryTag: "Blue Flag Beach",
            cost: "Free",
            costNum: 0,
            location: "Golden Beach, Puri",
            lat: 19.799,
            lng: 85.828,
            weatherSuitability: "Golden Sunset",
            badgeColor: "pink",
            rating: 4.9
          }
        ]
      }
    ]
  }
};

// Top Hotels Across India
export const HOTELS = [
  {
    id: "h1",
    name: "Smart Budget Hotel",
    type: "budget",
    destination: "darjeeling",
    rating: 4.2,
    reviews: 128,
    price: "₹799",
    priceNum: 799,
    unit: "/ night",
    desc: "Clean rooms near popular tourist areas, high-speed WiFi, 24/7 front desk and hot water.",
    features: ["Free WiFi", "Mountain View", "24/7 Hot Water", "Tea Kettle"],
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&auto=format&fit=crop&q=80",
    lat: 27.039,
    lng: 88.261
  },
  {
    id: "h2",
    name: "Dal Lake Heritage Houseboat",
    type: "luxury",
    destination: "kashmir",
    rating: 4.9,
    reviews: 240,
    price: "₹4,899",
    priceNum: 4899,
    unit: "/ night",
    desc: "Handcrafted cedarwood palace floating on peaceful Nigeen Lake with personal butler and traditional Shikara transfers.",
    features: ["Carved Wood Suites", "Personal Shikara", "Wazwan Butler", "Sun Deck"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
    lat: 34.095,
    lng: 74.851
  },
  {
    id: "h3",
    name: "Munnar Green Valley Backpackers",
    type: "budget",
    destination: "kerala",
    rating: 4.4,
    reviews: 160,
    price: "₹699",
    priceNum: 699,
    unit: "/ night",
    desc: "Cozy backpacker hostel amidst tea plantations with morning mist yoga and guided spice plantation walks.",
    features: ["Free WiFi", "Tea Garden View", "Community Lounge", "Campfire"],
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&auto=format&fit=crop&q=80",
    lat: 10.088,
    lng: 77.059
  },
  {
    id: "h4",
    name: "Ganga Riverside Heritage Haveli",
    type: "luxury",
    destination: "varanasi",
    rating: 4.8,
    reviews: 320,
    price: "₹5,200",
    priceNum: 5200,
    unit: "/ night",
    desc: "Restored 18th-century stone palace right on the sacred ghats with private terrace views of morning Ganga aarti.",
    features: ["Private Ghat Access", "Rooftop Aarti View", "Ayurvedic Spa", "Heritage Courtyard"],
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&auto=format&fit=crop&q=80",
    lat: 25.305,
    lng: 83.008
  },
  {
    id: "h5",
    name: "Nubra Organic Eco Pods",
    type: "budget",
    destination: "ladakh",
    rating: 4.6,
    reviews: 195,
    price: "₹1,200",
    priceNum: 1200,
    unit: "/ night",
    desc: "Solar-heated luxury domes overlooking Hunder sand dunes and Bactrian double-humped camels.",
    features: ["Stargazing Skylight", "Oxygen Assistance", "Solar Heating", "Organic Farm Food"],
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&auto=format&fit=crop&q=80",
    lat: 34.582,
    lng: 77.421
  }
];

// Top Restaurants
export const RESTAURANTS = [
  {
    id: "r1",
    name: "Local Food Corner",
    type: "budget",
    destination: "darjeeling",
    rating: 4.5,
    reviews: 210,
    price: "₹150 - ₹300",
    priceNum: 220,
    unit: "/ person",
    cuisine: "Tibetan & Himalayan",
    desc: "Tasty local food at reasonable price. Legendary for pan-fried pork momos, spicy aloo dum, and steaming thukpa.",
    dishes: ["Steamed Momos", "Tibetan Thukpa", "Shaphalay", "Butter Tea"],
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "r2",
    name: "Mughal Darbar Residency",
    type: "luxury",
    destination: "kashmir",
    rating: 4.9,
    reviews: 650,
    price: "₹800 - ₹1,800",
    priceNum: 1200,
    unit: "/ person",
    cuisine: "Traditional Kashmiri Wazwan",
    desc: "The gold standard for royal Kashmiri Wazwan. Rogan Josh, Gushtaba, and saffron Phirni.",
    dishes: ["7-Course Wazwan", "Mutton Rogan Josh", "Rista in Gravy", "Saffron Kahwa"],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "r3",
    name: "Kashi Chat Bhandar",
    type: "budget",
    destination: "varanasi",
    rating: 4.8,
    reviews: 980,
    price: "₹100 - ₹250",
    priceNum: 160,
    unit: "/ person",
    cuisine: "Banarasi Street Delicacies",
    desc: "World-renowned for sizzling Tamatar Chaat, Palak Chaat, and Gulab Jamuns served in clay kulhads.",
    dishes: ["Spicy Tamatar Chaat", "Dahi Chuda", "Crispy Palak Chaat"],
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop&q=80"
  }
];

// Emergency Services
export const EMERGENCY_SERVICES = {
  hotlines: [
    { number: "112", title: "National Emergency", subtitle: "Police, Fire & All Rescue Services", color: "danger" },
    { number: "108", title: "Ambulance Toll-Free", subtitle: "24/7 Trauma Care Transport", color: "warning" },
    { number: "1363", title: "Tourist Helpline", subtitle: "Ministry of Tourism Multi-lingual Aid", color: "blue" },
    { number: "1077", title: "Disaster Control Room", subtitle: "Flood, Landslide & Cyclone Relief", color: "purple" }
  ],
  medicalCenters: [
    {
      id: "med1",
      name: "City General Hospital",
      type: "Hospital",
      distance: "2.4 km away",
      status: "Open 24/7",
      phone: "+91 354 225 4321",
      services: ["ICU", "Emergency Trauma Care", "High Altitude Oxygen Ward", "Pharmacy"],
      lat: 27.046,
      lng: 88.263
    },
    {
      id: "med2",
      name: "Life Care Medical Store & Oxygen Depot",
      type: "Pharmacy",
      distance: "1.1 km away",
      status: "Open 24/7",
      phone: "+91 354 225 9988",
      services: ["All Medicines", "Portable Oxygen Cylinders", "First Aid Supplies", "English Speaking"],
      lat: 27.042,
      lng: 88.267
    }
  ]
};

// AI Personas
export const AI_PERSONAS = {
  alex: {
    id: "alex",
    gender: "male",
    name: "Alex",
    title: "Male AI Guide & Tactical Explorer",
    subtitle: "Adventurous, analytical, route-optimization & trekking specialist",
    avatar3d: "👨‍✈️",
    badge: "Tactical Scout",
    voiceConfig: { pitch: 0.82, rate: 0.98, voiceFilter: "male" },
    greeting: "Hey there! I'm Alex, your tactical travel co-pilot. I can map all 12 top Indian destinations hour by hour, compute natural hazard risks (landslides, flash floods, cyclones), coordinate offline cellular SOS, and suggest weather-ready gear. Where are we heading?",
    greetingBn: "নমস্কার! আমি অ্যালেক্স। কাশ্মীর থেকে কেরালা, বারাণসী বা লাদাখ—সব ভ্রমণের জন্য ঘণ্টার নিখুঁত প্ল্যান এবং প্রাকৃতিক দুর্যোগের সতর্কতা নিয়ে আমি আপনার পাশে আছি।",
    greetingHi: "नमस्ते! मैं एलेक्स हूँ। कश्मीर, लद्दाख, अयोध्या से लेकर कन्याकुमारी तक—घंटे-दर-घंटे का प्लान, मौसम और इमरजेंसी मदद के लिए मैं पूरी तरह तैयार हूँ।"
  },
  maya: {
    id: "maya",
    gender: "female",
    name: "Maya",
    title: "Female AI Guide & Cultural Curator",
    subtitle: "Empathetic, artistic, gourmet food lover & hidden gems storyteller",
    avatar3d: "👩‍💼",
    badge: "Culture & Stays",
    voiceConfig: { pitch: 1.18, rate: 1.02, voiceFilter: "female" },
    greeting: "Hello, lovely traveler! I'm Maya. Let me guide your senses through India's sacred ghats, misty hill stations, and royal desert palaces. I'll help you pick comfortable dress styles for each climate, discover local foods, and ensure your journey is safe and joyful!",
    greetingBn: "হ্যালো! আমি মায়া। সুন্দর স্থান, স্থানীয় সুস্বাদু খাবার এবং সংস্কৃতিতে পরিপূর্ণ এক ভ্রমণের জন্য আমি আপনার সাথে আছি। আপনার প্রিয় গন্তব্যটি বেছে নিন!",
    greetingHi: "नमस्ते! मैं माया हूँ। खूबसूरत नज़ारे, स्वादिष्ट पकवान और हर जगह के पहनावे के सुझाव के साथ मैं आपकी यात्रा को यादगार बनाऊँगी। बताइए, आज कहाँ चलना है?"
  }
};
