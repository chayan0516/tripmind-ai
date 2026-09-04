(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();const Fe={kashmir:{id:"kashmir",name:"Kashmir (Srinagar & Gulmarg)",state:"Jammu & Kashmir",category:"himalayas",categoryLabel:"Himalayas & Valleys",image:"https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1000&auto=format&fit=crop&q=80",bestSeason:"Mar - Oct (Gardens) / Dec - Feb (Snowsports)",helpline:"1363 (Tourist) · 112 (Police)",tagline:"Paradise on Earth - Dal Lake, Snow Gondolas & Saffron Valleys",lat:34.0837,lng:74.7973,weather:{temp:14,condition:"Crisp Alpine & Light Fog",conditionCode:"cloudy",humidity:58,wind:"8 km/h",feelsLike:12,precipitationChance:25,uvIndex:4,forecast:[{day:"Day 1",temp:"14°C",icon:"cloud",note:"Misty morning over Dal Lake"},{day:"Day 2",temp:"11°C",icon:"snow",note:"Light snowfall at Gulmarg Phase 2"},{day:"Day 3",temp:"15°C",icon:"sun",note:"Crisp golden sunshine in Pahalgam"}]},hazard:{type:"Avalanche & Mountain Pass Landslide",level:"Moderate",probability:35,dangerZones:["Zoji La Pass","Apharwat Peak Off-Piste","NH-44 Ramban Stretch"],advisory:"Winter and shoulder seasons carry risk of sudden road closures on mountain passes. Always travel with certified local drivers and verify weather window before taking the Gulmarg Gondola Phase 2."},wardrobe:{category:"Alpine Warmth & Layering",headline:"Thermal Underlayers + Windproof Parka + Snow Boots",fabrics:"Merino wool, fleece, down feather, Gore-Tex windbreaker",footwear:"Insulated snow boots with anti-slip rubber lug soles",culturalEtiquette:"Modest attire in Hazratbal & Jama Masjid; remove shoes, cover head with scarf.",mustCarry:["Thermal Inners (Top & Bottom)","Waterproof Gloves & Woolen Beanie","Moisturizing Cream & Cold Lip Balm","Original Govt ID / Aadhaar for Gondola Security","Cash (ATMs frequently out of service at Gulmarg)"]},days:[{dayNumber:1,title:"Dal Lake Serenity & Mughal Imperial Gardens",subtitle:"Shikara Cruises, Floating Markets & Chinar Trees",date:"Day 1",hours:[{time:"06:30 AM - 08:30 AM",title:"Early Morning Floating Vegetable Market Shikara",description:"Glaze across misty Dal Lake in a wooden shikara boat to witness the historic floating vegetable trade dating back 200 years.",category:"Culture",categoryTag:"Floating Market",cost:"₹700",costNum:700,location:"Dal Lake, Srinagar",lat:34.088,lng:74.842,weatherSuitability:"Crisp Morning",badgeColor:"cyan",rating:4.9},{time:"09:00 AM - 10:30 AM",title:"Traditional Kashmiri Breakfast & Kahwa",description:"Warm saffron Kahwa infused with crushed almonds and cardamom, served with fresh Girda and Tsot breads from local Kandur bakeries.",category:"Dining",categoryTag:"Breakfast",cost:"₹350",costNum:350,location:"Boulevard Road Waterfront",lat:34.081,lng:74.835,weatherSuitability:"Indoor Cafe",badgeColor:"green",rating:4.8},{time:"11:00 AM - 01:30 PM",title:"Nishat Bagh & Shalimar Imperial Gardens",description:"Stroll through Emperor Jahangir's terraced water cascades, towering 400-year-old Chinar trees, and vibrant flower beds overlooking the Zabarwan range.",category:"Heritage",categoryTag:"Mughal Architecture",cost:"₹50",costNum:50,location:"Nishat, Srinagar",lat:34.125,lng:74.881,weatherSuitability:"Pleasant Walk",badgeColor:"purple",rating:4.9},{time:"02:00 PM - 03:30 PM",title:"Authentic Kashmiri Wazwan Feast",description:"Relish 7 courses of traditional Wazwan including tender Rogan Josh, melt-in-mouth Rista, Gushtaba in yogurt gravy, and saffron rice.",category:"Dining",categoryTag:"Lunch",cost:"₹950",costNum:950,location:"Mughal Darbar, Residency Rd",lat:34.072,lng:74.821,weatherSuitability:"Cozy Dining",badgeColor:"cyan",rating:4.9},{time:"04:30 PM - 07:00 PM",title:"Sunset Shikara Ride to Char Chinar & Nehru Park",description:"Watch the sun set over Hari Parbat Fort from the center of Dal Lake, reflecting golden amber waves across Kashmiri houseboats.",category:"Scenic",categoryTag:"Golden Hour",cost:"₹600",costNum:600,location:"Char Chinar Island",lat:34.095,lng:74.851,weatherSuitability:"Scenic Evening",badgeColor:"amber",rating:5},{time:"07:30 PM - 09:30 PM",title:"Heritage Houseboat Dinner & Sitar Melodies",description:"Candlelit dinner aboard a handcrafted cedarwood houseboat with fragrant Yakhni broth and soothing Sufi acoustic sitar tunes.",category:"Nightlife",categoryTag:"Houseboat Experience",cost:"₹800",costNum:800,location:"Nigeen Lake / Dal Gate",lat:34.115,lng:74.832,weatherSuitability:"Warm Indoor",badgeColor:"pink",rating:4.9}]},{dayNumber:2,title:"Gulmarg Alpine Meadows & Highest Cable Car",subtitle:"Apharwat Peak Snow Walk & Pine Forest Sleigh Rides",date:"Day 2",hours:[{time:"08:00 AM - 10:00 AM",title:"Scenic Mountain Drive from Srinagar to Gulmarg",description:"Traverse winding pine-scented highways climbing to 8,690 feet, with views of snowy Himalayan ranges.",category:"Scenic",categoryTag:"Highway Drive",cost:"₹1,800 (Shared Cab)",costNum:1800,location:"Srinagar-Gulmarg Highway",lat:34.048,lng:74.385,weatherSuitability:"Clear Morning",badgeColor:"blue",rating:4.8},{time:"10:30 AM - 01:30 PM",title:"Gulmarg Gondola Phase 1 & 2 to Apharwat Peak",description:"Ascend on Asia's highest cable car to 13,780 feet directly into eternal snowfields with panoramic views of Nanga Parbat.",category:"Adventure",categoryTag:"Gondola Peak (13,780 ft)",cost:"₹1,750 (Both Phases)",costNum:1750,location:"Apharwat Peak, Gulmarg",lat:34.021,lng:74.351,weatherSuitability:"High Altitude Extreme",badgeColor:"purple",rating:5},{time:"02:00 PM - 03:30 PM",title:"Ski Hut Lunch & Hot Chocolate",description:"Savor piping hot vegetable Maggi, mutton skewers, and rich dark cocoa inside an authentic timber ski cabin.",category:"Dining",categoryTag:"Lunch",cost:"₹450",costNum:450,location:"Highlands Park Cafe",lat:34.051,lng:74.389,weatherSuitability:"Indoor Warmth",badgeColor:"cyan",rating:4.7},{time:"04:00 PM - 06:30 PM",title:"St. Mary's Victorian Church & Golf Course Walk",description:"Explore the 1902 green-roofed Victorian stone church tucked away amidst wildflower meadows and snowdrifts.",category:"Heritage",categoryTag:"Colonial Charm",cost:"Free",costNum:0,location:"Gulmarg Valley Center",lat:34.053,lng:74.384,weatherSuitability:"Crisp Walk",badgeColor:"green",rating:4.8}]}]},kerala:{id:"kerala",name:"Kerala (Munnar & Alleppey)",state:"Kerala",category:"coastal",categoryLabel:"Coastal & Backwaters",image:"https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1000&auto=format&fit=crop&q=80",bestSeason:"Sep - Mar (Ayurveda & Backwaters)",helpline:"1363 (Tourist) · 112 (Police)",tagline:"God's Own Country - Tea Highlands & Serene Backwaters",lat:9.9312,lng:76.2673,weather:{temp:28,condition:"Tropical Breeze & Passing Clouds",conditionCode:"sunny",humidity:84,wind:"14 km/h",feelsLike:31,precipitationChance:40,uvIndex:8,forecast:[{day:"Day 1",temp:"28°C",icon:"sun",note:"Balmy coastal sunset in Kochi"},{day:"Day 2",temp:"20°C",icon:"cloud",note:"Misty tea slopes in Munnar"},{day:"Day 3",temp:"29°C",icon:"rain",note:"Warm tropical drizzle on backwaters"}]},hazard:{type:"Monsoon Flash Flood & Ghat Road Slips",level:"Low to Moderate",probability:20,dangerZones:["Gap Road Munnar","Meenachil River Basin","Alleppey Low-lying Canals"],advisory:"Watch out for high sea swells during monsoons. Keep rain ponchos ready for sudden tropical cloudbursts in Munnar tea highlands."},wardrobe:{category:"Tropical Breathable & Rain-Safe",headline:"Light Cotton/Linen + Quick-Dry Poncho + Mosquito Repellent",fabrics:"100% Cotton, linen shirts, quick-dry swim shorts, breathable mesh",footwear:"Waterproof walking sandals with good arch support; flip-flops for houseboats",culturalEtiquette:"Traditional Kasavu saree/mundu required for entry to Guruvayur & Padmanabhaswamy temples; strict dress code.",mustCarry:["Compact Wind-Resistant Umbrella","Anti-Leech Socks (for rainforest & tea trails)","Herbal Mosquito Repellent Lotion","Sunscreen SPF 50+ & UV Sunglasses","Waterproof Phone Pouch"]},days:[{dayNumber:1,title:"Fort Kochi Colonial Heritage & Spice Markets",subtitle:"Chinese Fishing Nets, Jew Town & Kathakali Dance",date:"Day 1",hours:[{time:"08:00 AM - 09:30 AM",title:"Appam & Stew Breakfast at Kashi Art Cafe",description:"Soft fluffy rice Appams with aromatic coconut milk vegetable/chicken stew in an open-air art courtyard.",category:"Dining",categoryTag:"Breakfast",cost:"₹350",costNum:350,location:"Burgher St, Fort Kochi",lat:9.965,lng:76.242,weatherSuitability:"Shaded Garden",badgeColor:"cyan",rating:4.8},{time:"10:00 AM - 12:30 PM",title:"Historic Chinese Fishing Nets & Dutch Palace",description:"Watch master fishermen counterweight giant cantilevered fishing nets operating since the 14th century, followed by Mattancherry Palace murals.",category:"Culture",categoryTag:"Living History",cost:"₹25",costNum:25,location:"Vasco da Gama Square",lat:9.967,lng:76.243,weatherSuitability:"Coastal Morning",badgeColor:"purple",rating:4.9},{time:"01:00 PM - 02:30 PM",title:"Kerala Sadhya on Banana Leaf Lunch",description:"Grand feast featuring 24 delicacies: Avial, Thoran, Olan, Sambar, payasam pudding served on fresh plantain leaf.",category:"Dining",categoryTag:"Lunch",cost:"₹400",costNum:400,location:"Grand Hotel Restaurant, MG Rd",lat:9.972,lng:76.281,weatherSuitability:"Indoor AC",badgeColor:"cyan",rating:4.9},{time:"05:00 PM - 07:00 PM",title:"Kathakali Classical Drama & Kalaripayattu Martial Arts",description:"Experience the elaborate face makeup demonstration followed by mesmerizing high-energy martial arts and temple dance.",category:"Culture",categoryTag:"Performing Arts",cost:"₹500",costNum:500,location:"Kerala Kathakali Centre",lat:9.964,lng:76.244,weatherSuitability:"Indoor Theatre",badgeColor:"green",rating:4.9}]}]},varanasi:{id:"varanasi",name:"Varanasi (Kashi)",state:"Uttar Pradesh",category:"spiritual",categoryLabel:"Spiritual & Sacred Yatra",image:"https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1000&auto=format&fit=crop&q=80",bestSeason:"Oct - Mar (Cool Ghats & Festivities)",helpline:"1363 (Tourist) · 112 (Police)",tagline:"Spiritual Capital of India - Sacred Ghats & Eternal Chants",lat:25.3176,lng:82.9739,weather:{temp:31,condition:"Warm Sunshine & River Breeze",conditionCode:"sunny",humidity:62,wind:"9 km/h",feelsLike:34,precipitationChance:15,uvIndex:7,forecast:[{day:"Day 1",temp:"31°C",icon:"sun",note:"Clear skies for evening Ganga Aarti"},{day:"Day 2",temp:"32°C",icon:"sun",note:"Warm afternoon in Sarnath"}]},hazard:{type:"High River Water Surge & Alley Stampede Congestion",level:"Moderate",probability:30,dangerZones:["Dashashwamedh Ghat Steps during Aarti","Manikarnika Narrow Galis","Assi Ghat Riverfront during high tide"],advisory:"During monsoon months (July-Sept), the Ganga river level rises significantly submerging ghat walkways. Boat rides may be suspended on red flag alerts."},wardrobe:{category:"Spiritual Modest & Heat Resistant",headline:"Breathable Cotton Kurta + Slip-on Sandals + Scarf",fabrics:"Pure handloom cotton, mulmul, linen",footwear:"Slip-on shoes/sandals (frequent temple entry requires removing footwear rapidly)",culturalEtiquette:"Strict modesty: Shoulders and knees must be covered. Photography forbidden at Manikarnika Ghat out of respect for cremations.",mustCarry:["Cotton Dupatta / Shawl for Head Covering","Hand Sanitizer & Wet Wipes","Stainless Steel Water Bottle","Small Change / Coins for Temple Offerings","Slip-on Juttis or Strapped Sandals"]},days:[{dayNumber:1,title:"Eternal Sunrise over Ganga & Kashi Vishwanath",subtitle:"Rowing Boats, Ancient Galis & Maha Ganga Aarti",date:"Day 1",hours:[{time:"05:30 AM - 07:30 AM",title:"Subah-e-Banaras Sunrise Boat Ride",description:"Watch the morning dawn illuminate 84 ancient ghats, bathing pilgrims, and Vedic chants echoing across the holy river.",category:"Spiritual",categoryTag:"Sunrise Ritual",cost:"₹500 (Row Boat)",costNum:500,location:"Assi Ghat to Dashashwamedh",lat:25.293,lng:83.007,weatherSuitability:"Serene Dawn",badgeColor:"amber",rating:5},{time:"08:00 AM - 09:30 AM",title:"Banarasi Kachori Jalebi & Malaiyo Breakfast",description:"Crispy fried lentil kachoris with spicy potato curry followed by frothy saffron-infused winter milk foam (Malaiyo) at Ram Bhandar.",category:"Dining",categoryTag:"Street Breakfast",cost:"₹150",costNum:150,location:"Thatheri Bazar, Chowk",lat:25.312,lng:83.011,weatherSuitability:"Street Nook",badgeColor:"cyan",rating:4.8},{time:"10:00 AM - 12:30 PM",title:"Kashi Vishwanath Jyotirlinga Corridor Darshan",description:"Pay homage at one of the 12 sacred Jyotirlingas inside the grand newly built golden temple corridor overlooking the holy river.",category:"Culture",categoryTag:"Sacred Temple",cost:"Free (Special VIP ₹300)",costNum:300,location:"Vishwanath Gali, Lahori Tola",lat:25.31,lng:83.01,weatherSuitability:"Covered Corridors",badgeColor:"purple",rating:5},{time:"06:30 PM - 08:30 PM",title:"Grand Dashashwamedh Ghat Ganga Aarti",description:"Spectacular multi-tiered brass lamp ritual performed by young Vedic priests accompanied by conch shells, bells, and floating candle diyas.",category:"Spiritual",categoryTag:"Grand Aarti",cost:"Free (Reserved Boat ₹300)",costNum:300,location:"Dashashwamedh Ghat",lat:25.307,lng:83.01,weatherSuitability:"Evening River Breeze",badgeColor:"amber",rating:5}]}]},ayodhya:{id:"ayodhya",name:"Ayodhya",state:"Uttar Pradesh",category:"spiritual",categoryLabel:"Spiritual & Sacred Yatra",image:"https://images.unsplash.com/photo-1598890777032-bde835ba27c2?w=1000&auto=format&fit=crop&q=80",bestSeason:"Oct - Mar (Pleasant Pilgrimage)",helpline:"1363 (Tourist) · 112 (Police)",tagline:"Divine Sacred Heritage - Shri Ram Janmabhoomi & Saryu Aarti",lat:26.7922,lng:82.1998,weather:{temp:30,condition:"Pleasant Sunshine",conditionCode:"sunny",humidity:59,wind:"10 km/h",feelsLike:32,precipitationChance:10,uvIndex:6,forecast:[{day:"Day 1",temp:"30°C",icon:"sun",note:"Gentle breeze along Saryu riverfront"},{day:"Day 2",temp:"31°C",icon:"sun",note:"Clear skies for temple complex walks"}]},hazard:{type:"High Crowd Density & Summer Heatwave",level:"Moderate",probability:25,dangerZones:["Ram Janmabhoomi Security Lines","Hanuman Garhi Steep Steps"],advisory:"Peak festivals (Ram Navami, Deepotsav) draw millions. Ensure elderly tourists stay hydrated and pre-book digital Darshan tokens."},wardrobe:{category:"Modest Spiritual & Heat Tolerant",headline:"Traditional Cotton Kurta/Sari + Sun Umbrella + Socks",fabrics:"Lightweight cotton, khadi, breathable linen",footwear:"Shoes with thick socks (stone temple courtyards become scalding hot under midday sun)",culturalEtiquette:"Strict security protocols: Mobile phones, smart watches, and leather belts prohibited inside main sanctum.",mustCarry:["Official Photo ID (Mandatory for security gates)","Cotton Socks (for heated marble walkway)","Foldable Sun Hat / Umbrella","Electrolyte Hydration Packets","Locker Bag for Digital Gadgets"]},days:[{dayNumber:1,title:"Shri Ram Janmabhoomi & Saryu Maha Aarti",subtitle:"Nagara Architecture, Hanuman Garhi & Laser Light Show",date:"Day 1",hours:[{time:"07:30 AM - 10:30 AM",title:"Shri Ram Janmabhoomi Mandir Grand Darshan",description:"Marvel at the monumental pink Bansi Paharpur sandstone temple built in traditional Nagara style, offering prayers to Ram Lalla.",category:"Spiritual",categoryTag:"Grand Mandir",cost:"Free (Pass Required)",costNum:0,location:"Ram Kot, Ayodhya",lat:26.795,lng:82.194,weatherSuitability:"Early Morning Cool",badgeColor:"amber",rating:5},{time:"11:00 AM - 12:30 PM",title:"Hanuman Garhi 76-Step Temple Fortress",description:"Climb the 76 steps to the 10th-century fortress temple guarding Ayodhya, seeking blessings of Lord Hanuman.",category:"Spiritual",categoryTag:"Historic Fort",cost:"Free",costNum:0,location:"Sai Nagar, Ayodhya",lat:26.793,lng:82.203,weatherSuitability:"Shaded Steps",badgeColor:"purple",rating:4.8},{time:"01:00 PM - 02:30 PM",title:"Traditional Awadhi Satvik Thali Lunch",description:"Pure vegetarian satvik meal featuring Dal Baati Churma, Paneer Lababdar, Bedmi Puri, and hot Gulab Jamuns.",category:"Dining",categoryTag:"Satvik Lunch",cost:"₹300",costNum:300,location:"Ram Ki Paidi Food Lane",lat:26.801,lng:82.205,weatherSuitability:"Indoor AC",badgeColor:"cyan",rating:4.7},{time:"06:00 PM - 08:30 PM",title:"Ram Ki Paidi Saryu Evening Aarti & Laser Symphony",description:"Witness the illuminated steps of Ram Ki Paidi glowing with thousands of earthen lamps, accompanied by a dynamic laser projection tracing the Ramayana.",category:"Culture",categoryTag:"Laser & Aarti",cost:"Free",costNum:0,location:"Saryu Riverfront, Ayodhya",lat:26.804,lng:82.206,weatherSuitability:"Evening Breeze",badgeColor:"pink",rating:4.9}]}]},manali:{id:"manali",name:"Manali & Solang Valley",state:"Himachal Pradesh",category:"himalayas",categoryLabel:"Himalayas & Adventure",image:"https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1000&auto=format&fit=crop&q=80",bestSeason:"Oct - Jun (Snow & Adventure Sports)",helpline:"1363 (Tourist) · 112 (Police)",tagline:"Himalayan Adventure Haven - Pine Trails, Rohtang & Atal Tunnel",lat:32.2396,lng:77.1887,weather:{temp:16,condition:"Cool Alpine Breeze",conditionCode:"cloudy",humidity:64,wind:"11 km/h",feelsLike:15,precipitationChance:35,uvIndex:6,forecast:[{day:"Day 1",temp:"16°C",icon:"sun",note:"Pleasant cafe weather in Old Manali"},{day:"Day 2",temp:"9°C",icon:"snow",note:"Sub-zero winds at Rohtang Pass"}]},hazard:{type:"Landslides on Chandigarh-Manali Highway & Sudden Snow Blizzards",level:"High",probability:45,dangerZones:["Pandoh Dam Stretch","Gulaba Rohtang Road","Solang Valley Riverbeds"],advisory:"Monsoon rains trigger severe landslides along the Beas river basin. Always verify National Highway-21 traffic alerts before departure."},wardrobe:{category:"Mountain Adventure & Snow Proof",headline:"Fleece Jacket + Waterproof Snow Boots + UV Goggles",fabrics:"Thermal innerwear, fleece jacket, waterproof windcheater, down parka",footwear:"Waterproof trekking boots with ankle support and deep rubber treads",culturalEtiquette:"Modest attire at Hadimba Temple and Vashisht Hot Springs.",mustCarry:["Thermals & Extra Woolen Socks","Waterproof Trekking Shoes","UV 400 Polarized Sunglasses (protect against snow blindness)","Motion Sickness Tablets (for winding ghat roads)","Power Bank (cold temperatures deplete phone batteries rapidly)"]},days:[{dayNumber:1,title:"Hadimba Ancient Forest & Old Manali Bohemian Cafes",subtitle:"Cedar Woods, Vashisht Sulphur Springs & Live Music",date:"Day 1",hours:[{time:"08:30 AM - 10:30 AM",title:"Hadimba Devi 1553 Wood Carved Temple",description:"Surrounded by towering deodar forests, marvel at the four-tiered wooden pagoda temple dedicated to Hadimba Devi.",category:"Heritage",categoryTag:"Forest Shrine",cost:"₹30",costNum:30,location:"Dhungri Forest, Manali",lat:32.248,lng:77.181,weatherSuitability:"Pine Forest Walk",badgeColor:"green",rating:4.8},{time:"11:00 AM - 01:00 PM",title:"Vashisht Natural Hot Sulphur Springs",description:"Dip your feet into therapeutic natural hot springs with scenic views across the Beas valley.",category:"Wellness",categoryTag:"Hot Springs",cost:"Free",costNum:0,location:"Vashisht Village",lat:32.261,lng:77.199,weatherSuitability:"Warm Baths",badgeColor:"cyan",rating:4.7},{time:"01:30 PM - 03:30 PM",title:"Woodfired Trout & Apple Crumble in Old Manali",description:"Tuck into freshly caught Himalayan river trout baked with mountain herbs and warm Himachali apple pie at Cafe 1947.",category:"Dining",categoryTag:"Lunch",cost:"₹650",costNum:650,location:"Old Manali Riverside",lat:32.253,lng:77.182,weatherSuitability:"Riverside Deck",badgeColor:"cyan",rating:4.9},{time:"04:00 PM - 07:00 PM",title:"Mall Road Shopping & Tibetan Handcrafts",description:"Pick up hand-woven Kullu shawls, wooden carvings, and pine honey along the pedestrian boulevard.",category:"Leisure",categoryTag:"Shopping",cost:"Free",costNum:0,location:"Mall Road, Manali",lat:32.242,lng:77.189,weatherSuitability:"Evening Stroll",badgeColor:"purple",rating:4.7}]}]},rajasthan:{id:"rajasthan",name:"Rajasthan (Jaipur & Udaipur)",state:"Rajasthan",category:"heritage",categoryLabel:"Heritage & Royal Palaces",image:"https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1000&auto=format&fit=crop&q=80",bestSeason:"Oct - Mar (Royal Desert Season)",helpline:"1363 (Tourist) · 112 (Police)",tagline:"Land of Maharajas - Golden Fortresses & Royal Palaces",lat:26.9124,lng:75.7873,weather:{temp:33,condition:"Dry Sun & Golden Glow",conditionCode:"sunny",humidity:35,wind:"15 km/h",feelsLike:35,precipitationChance:5,uvIndex:9,forecast:[{day:"Day 1",temp:"33°C",icon:"sun",note:"Bright skies over Amber Fort"},{day:"Day 2",temp:"30°C",icon:"sun",note:"Sunset breeze on Lake Pichola"}]},hazard:{type:"Desert Heatwave & Thar Dust Storms",level:"Moderate",probability:25,dangerZones:["Exposed Fort Ramparts during Midday (12 PM - 3 PM)","Highway Desert Stretches"],advisory:"Summer temperatures can touch 43°C. Plan fort sightseeing during early morning hours and stay equipped with electrolyte hydration."},wardrobe:{category:"Desert Sun-Proof & Royal Modest",headline:"Loose Flowing Cotton + Broad Sun Hat + Polarized Shades",fabrics:"Fine mulmul, breathable linen, lightweight chiffon",footwear:"Cushioned walking shoes for cobbled fort ramps and marble palace corridors",culturalEtiquette:"Modest dressing inside temples and royal family courtyards.",mustCarry:["Broad-Brimmed Sun Hat or Cotton Bandana","Sunscreen SPF 50+ & Aloe Vera Gel","ORSL / Oral Rehydration Salts","Scarf to protect against desert dust","Camera with extra battery (for royal architecture)"]},days:[{dayNumber:1,title:"Amber Fort Majesty & Pink City Bazaars",subtitle:"Sheesh Mahal Mirrors, Hawa Mahal & Dal Baati Churma",date:"Day 1",hours:[{time:"08:00 AM - 11:30 AM",title:"Amber Fort & Sheesh Mahal (Palace of Mirrors)",description:"Climb through the monumental sun-gilded courtyards and marvel at thousands of concave Belgian glass mirrors illuminating the royal chambers.",category:"Heritage",categoryTag:"Royal Fort",cost:"₹100 (Indian) / ₹500 (Foreign)",costNum:100,location:"Amer, Jaipur",lat:26.985,lng:75.851,weatherSuitability:"Early Morning Best",badgeColor:"amber",rating:5},{time:"12:00 PM - 01:30 PM",title:"Hawa Mahal (Palace of Winds) & Photo Deck",description:"Admire the 953 honeycombed sandstone jharokha windows designed to funnel cooling desert breezes to royal women.",category:"Heritage",categoryTag:"Iconic Landmark",cost:"₹50",costNum:50,location:"Badi Choupad, Jaipur",lat:26.924,lng:75.826,weatherSuitability:"Shaded Balconies",badgeColor:"purple",rating:4.8},{time:"02:00 PM - 03:30 PM",title:"Royal Rajasthani Thali at Chokhi Dhani",description:"Authentic feast of Baati dipped in pure desi ghee, spicy Panchmel Dal, Churma, Gatte ki Sabzi, and Ker Sangri.",category:"Dining",categoryTag:"Royal Lunch",cost:"₹750",costNum:750,location:"Tonk Road / MI Road",lat:26.852,lng:75.811,weatherSuitability:"Air-Conditioned",badgeColor:"cyan",rating:4.9},{time:"05:00 PM - 07:30 PM",title:"Sunset over Jal Mahal & Johari Bazaar Gems",description:"Watch the water palace glow under amber sunset lights followed by shopping for blue pottery and silver jhumkas.",category:"Scenic",categoryTag:"Sunset & Souvenirs",cost:"Free",costNum:0,location:"Man Sagar Lake, Jaipur",lat:26.953,lng:75.846,weatherSuitability:"Golden Sunset",badgeColor:"pink",rating:4.9}]}]},kolkata:{id:"kolkata",name:"Kolkata (City of Joy)",state:"West Bengal",category:"heritage",categoryLabel:"Heritage & Cultural Capital",image:"https://images.unsplash.com/photo-1558431382-27e303142255?w=1000&auto=format&fit=crop&q=80",bestSeason:"Oct - Mar (Durga Puja & Winter Sweets)",helpline:"1363 (Tourist) · 112 (Police)",tagline:"City of Joy - Colonial Splendor, Art & Street Culinary",lat:22.5726,lng:88.3639,weather:{temp:29,condition:"Tropical Warmth & Passing Clouds",conditionCode:"cloudy",humidity:78,wind:"12 km/h",feelsLike:33,precipitationChance:30,uvIndex:6,forecast:[{day:"Day 1",temp:"29°C",icon:"sun",note:"Pleasant breeze along Princep Ghat"},{day:"Day 2",temp:"30°C",icon:"cloud",note:"Warm evening in Park Street"}]},hazard:{type:"Kalbaishakhi Thunderstorms & Urban Waterlogging",level:"Moderate",probability:25,dangerZones:["Central Avenue Waterlogging Stretch","Howrah Bridge Ferry during High Wind"],advisory:"Sudden pre-monsoon squalls (Kalbaishakhi) bring gale force winds. Carry umbrellas and utilize Kolkata Metro during downpours."},wardrobe:{category:"Tropical Cotton & Vintage Walking",headline:"Pure Handloom Cotton Kurta + Walking Shoes + Umbrella",fabrics:"Bengal Tant cotton, mulmul, soft linen",footwear:"Comfortable closed sneakers for extensive colonial architecture walks",culturalEtiquette:"Modest clothing at Dakshineswar & Kalighat; leather goods restricted.",mustCarry:["Lightweight Compact Umbrella","Cotton Handkerchief for humid days","Metro Smartcard or UPI for street food","Canvas Tote Bag for College Street Book Market"]},days:[{dayNumber:1,title:"Victoria Memorial Grandeur & Heritage Tram Ride",subtitle:"Princep Ghat River Breeze, Coffee House & Park Street",date:"Day 1",hours:[{time:"08:30 AM - 10:30 AM",title:"Victoria Memorial White Marble Palace & Gardens",description:"Stroll through the 64-acre royal gardens and galleries housing British colonial masterpieces and Queen Victoria's royal piano.",category:"Heritage",categoryTag:"Marble Palace",cost:"₹50 (Indian) / ₹500 (Foreign)",costNum:50,location:"Queens Way, Maidan",lat:22.544,lng:88.342,weatherSuitability:"Morning Garden Walk",badgeColor:"purple",rating:4.9},{time:"11:00 AM - 01:00 PM",title:"Vintage Wooden Tram Ride & College Street Boi Para",description:"Hop on Asia's oldest operating electric tram through heritage streets to the world's largest second-hand book market.",category:"Culture",categoryTag:"Vintage Tram",cost:"₹10",costNum:10,location:"College Street, Kolkata",lat:22.574,lng:88.363,weatherSuitability:"Covered Tram",badgeColor:"blue",rating:4.8},{time:"01:30 PM - 03:00 PM",title:"Traditional Bengali Fish Curry & Mishti Doi",description:"Relish aromatic Ilish Bhape (steamed hilsa in mustard), Kosha Mangsho, Luchi, and caramelized earthen pot Mishti Doi at 6 Ballygunge Place.",category:"Dining",categoryTag:"Bengali Lunch",cost:"₹650",costNum:650,location:"Ballygunge, Kolkata",lat:22.528,lng:88.367,weatherSuitability:"Indoor Heritage",badgeColor:"cyan",rating:4.9},{time:"05:00 PM - 07:30 PM",title:"Sunset Wooden Boat at Princep Ghat & Vidyasagar Setu",description:"Drift in a traditional country boat beneath the grand cable-stayed bridge while savoring hot chai and Kolkata Kathi Rolls.",category:"Scenic",categoryTag:"Hooghly River Sunset",cost:"₹350 (Boat)",costNum:350,location:"Princep Ghat, Strand Rd",lat:22.555,lng:88.332,weatherSuitability:"Golden Sunset",badgeColor:"amber",rating:5}]}]},ladakh:{id:"ladakh",name:"Ladakh (Leh, Pangong & Nubra)",state:"Ladakh",category:"himalayas",categoryLabel:"Himalayas & High Altitude",image:"https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=1000&auto=format&fit=crop&q=80",bestSeason:"May - Sep (Open High Passes)",helpline:"1363 (Tourist) · 112 (Police)",tagline:"Roof of the World - High Altitude Lakes & Moonland Passes",lat:34.1526,lng:77.5771,weather:{temp:10,condition:"Piercing Blue Skies & High UV",conditionCode:"sunny",humidity:22,wind:"24 km/h",feelsLike:7,precipitationChance:5,uvIndex:11,forecast:[{day:"Day 1",temp:"10°C",icon:"sun",note:"Mandatory rest day in Leh for acclimatization"},{day:"Day 2",temp:"2°C",icon:"wind",note:"Sub-zero winds at Khardung La Pass"}]},hazard:{type:"Acute Mountain Sickness (AMS) & Extreme UV Radiation",level:"High",probability:60,dangerZones:["Khardung La (17,982 ft)","Chang La (17,688 ft)","Pangong Tso Night Chill"],advisory:"CRITICAL: Mandatory 48-hour complete resting protocol upon landing at Leh (11,500 ft). Diamox medication recommended under medical supervision. Never sleep at passes above 15,000 ft."},wardrobe:{category:"High Altitude Extreme 4-Layer System",headline:"Thermal Base + Polar Fleece + Down Parka + UV 400 Goggles",fabrics:"Heavy Merino wool, down feathers, windstopper shell",footwear:"Rigid high-ankle waterproof hiking boots with thermal wool socks",culturalEtiquette:"Walk clockwise around chortens and mani stones; remove hats inside monastery prayer halls.",mustCarry:["Portable Oxygen Canister (Oxy99)","Diamox / Acetazolamide Tablets","UV 400 Category 4 Polarized Sunglasses","High SPF 50+ Sunscreen & Boroline Lip Balm","Inner Line Permits (ILP) Printed Copies"]},days:[{dayNumber:1,title:"Leh Acclimatization, Shanti Stupa & Tibetan Old Town",subtitle:"Slow Pace Rest, Butter Tea & Panoramic Sunset",date:"Day 1",hours:[{time:"08:30 AM - 12:00 PM",title:"Mandatory Oxygen Rest & Hydration in Hotel",description:"Strict acclimatization rest period sipping warm water and garlic soup to prevent Acute Mountain Sickness.",category:"Wellness",categoryTag:"Acclimatization",cost:"Free",costNum:0,location:"Leh Town Hotel",lat:34.164,lng:77.584,weatherSuitability:"Indoor Rest",badgeColor:"green",rating:5},{time:"01:00 PM - 02:30 PM",title:"Traditional Ladakhi Skyu & Thukpa Lunch",description:"Warm vegetable and wheat dough pasta stew simmered with mountain root vegetables at The Tibetan Kitchen.",category:"Dining",categoryTag:"Lunch",cost:"₹400",costNum:400,location:"Fort Road, Leh",lat:34.161,lng:77.581,weatherSuitability:"Warm Cafe",badgeColor:"cyan",rating:4.8},{time:"04:30 PM - 07:00 PM",title:"Sunset at Shanti Stupa & White Dome Chorten",description:"Gently climb to the Japanese Peace Stupa overlooking the snowcapped Stok Kangri range under twilight stars.",category:"Scenic",categoryTag:"Panoramic Vista",cost:"Free",costNum:0,location:"Chanspa, Leh",lat:34.172,lng:77.574,weatherSuitability:"Cold Evening",badgeColor:"amber",rating:5}]}]},gangtok:{id:"gangtok",name:"Gangtok & East Sikkim",state:"Sikkim",category:"himalayas",categoryLabel:"Himalayas & Monasteries",image:"https://images.unsplash.com/photo-1579618218290-24a26f634568?w=1000&auto=format&fit=crop&q=80",bestSeason:"Mar - May / Oct - Dec (Mountain Views)",helpline:"1363 (Tourist) · 112 (Police)",tagline:"Gateway to Sikkim - Monasteries, Nathula & Glacial Lakes",lat:27.3389,lng:88.6065,weather:{temp:17,condition:"Misty Mountain Clouds",conditionCode:"cloudy",humidity:88,wind:"10 km/h",feelsLike:16,precipitationChance:40,uvIndex:5,forecast:[{day:"Day 1",temp:"17°C",icon:"cloud",note:"Clean cobblestone stroll along MG Marg"},{day:"Day 2",temp:"8°C",icon:"snow",note:"Chilly winds at Tsomgo Glacial Lake"}]},hazard:{type:"Landslides on National Highway 10 & Snowbound Passes",level:"High",probability:40,dangerZones:["NH-10 Teesta Riverbanks","Jawaharlal Nehru Road to Tsomgo"],advisory:"Heavy rains frequently trigger rockslides along the Siliguri-Gangtok route. Nathula Pass requires special military permits arranged in advance."},wardrobe:{category:"Hill Station Layering & Rain Proof",headline:"Waterproof Windbreaker + Woolen Cardigan + Comfortable Sneakers",fabrics:"Warm fleece, weather-proof nylon, wool blends",footwear:"Waterproof sneakers or light hiking boots",culturalEtiquette:"Remove shoes at Rumtek and Enchey monasteries; photography restricted inside sanctum.",mustCarry:["Voter ID / Passport & 4 Passport Photos for Sikkim Permits","Waterproof Rain Poncho or Trench","Light Woolen Beanie & Scarf","Motion Sickness Pills (for winding hill roads)"]},days:[{dayNumber:1,title:"MG Marg Promenade, Cable Car & Rumtek Monastery",subtitle:"Litter-Free Boulevard, Tibetan Crafts & Golden Stupa",date:"Day 1",hours:[{time:"08:30 AM - 10:30 AM",title:"Rumtek Dharma Chakra Centre & Golden Stupa",description:"Visit the grand 16th Karmapa seat adorned with intricate Tibetan murals, golden prayer wheels, and sacred relics.",category:"Culture",categoryTag:"Tibetan Monastery",cost:"₹20",costNum:20,location:"Rumtek, 24 km from Gangtok",lat:27.301,lng:88.541,weatherSuitability:"Covered Courtyards",badgeColor:"purple",rating:4.9},{time:"11:30 AM - 01:00 PM",title:"Gangtok Ropeway Aerial Cable Car",description:"Glide high above the city valley with sweeping views of the Kanchenjunga peak and Deorali hills.",category:"Scenic",categoryTag:"Aerial Ride",cost:"₹110",costNum:110,location:"Deorali Bazar",lat:27.319,lng:88.609,weatherSuitability:"Clear Windows",badgeColor:"blue",rating:4.7},{time:"01:30 PM - 03:00 PM",title:"Authentic Sikkimese Shaphalay & Tingmo Lunch",description:"Crisp meat-stuffed fried Shaphalay bread with spiced broth and fiery Dalle Khursani chilli chutney at Taste of Tibet.",category:"Dining",categoryTag:"Lunch",cost:"₹350",costNum:350,location:"MG Marg, Gangtok",lat:27.329,lng:88.613,weatherSuitability:"Cozy Dining",badgeColor:"cyan",rating:4.8},{time:"04:30 PM - 08:30 PM",title:"MG Marg Evening Walk & Red Panda Beer Tasting",description:"Stroll along India's cleanest vehicle-free promenade illuminated with fairy lights, stopping at local microbreweries.",category:"Leisure",categoryTag:"Pedestrian Boulevard",cost:"Free",costNum:0,location:"MG Marg Promenade",lat:27.329,lng:88.613,weatherSuitability:"Evening Mist",badgeColor:"pink",rating:4.9}]}]},darjeeling:{id:"darjeeling",name:"Darjeeling",state:"West Bengal",category:"himalayas",categoryLabel:"Himalayas & Tea Estates",image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1000&auto=format&fit=crop&q=80",bestSeason:"Sep - Nov / Mar - May (Toy Train Season)",helpline:"1363 (Tourist) · 112 (Police)",tagline:"Queen of the Hills - First Flush Tea & Kanchenjunga Vistas",lat:27.041,lng:88.2663,weather:{temp:18,condition:"Light Mountain Rain",conditionCode:"rainy",humidity:92,wind:"12 km/h",feelsLike:17,precipitationChance:70,uvIndex:4,forecast:[{day:"Day 1",temp:"18°C",icon:"rain",note:"Light rain over tea valleys"},{day:"Day 2",temp:"20°C",icon:"cloud-sun",note:"Optimal sunrise at Tiger Hill"}]},hazard:{type:"Hill Slope Mudslips & Dense Fog",level:"Moderate",probability:35,dangerZones:["Pankhabari Road","Lebong Cart Road during heavy showers"],advisory:"Dense cloud cover can reduce road visibility to under 10 meters. The UNESCO Toy Train schedule can be impacted by fog."},wardrobe:{category:"Warm Hill Layers & Rain Guard",headline:"Cardigan + Windbreaker + Umbrella + Sturdy Sneakers",fabrics:"Warm woolens, fleece, waterproof nylon",footwear:"Walking sneakers with anti-slip grip for steep inclines",culturalEtiquette:"Modesty in monasteries; silence in tea tasting salons.",mustCarry:["Compact Folding Umbrella","Warm Woolen Muffler & Gloves","Cash (small tea stalls accept cash only)","Thermos Flask for warm water"]},days:[{dayNumber:1,title:"Tea Factory Heritage, Mountaineering Museum & Glenary's",subtitle:"Covered Factory Tours, Everest Relics & Live Music",date:"Day 1",hours:[{time:"08:30 AM - 10:00 AM",title:"Artisanal Breakfast at Keventer's Open Terrace",description:"Freshly brewed Darjeeling First Flush tea with hot sausages, toast, and valley mist.",category:"Dining",categoryTag:"Breakfast",cost:"₹350",costNum:350,location:"Clubside, Darjeeling",lat:27.041,lng:88.266,weatherSuitability:"Covered Deck",badgeColor:"cyan",rating:4.8},{time:"10:30 AM - 01:00 PM",title:"Himalayan Mountaineering Institute & Museum",description:"Inspect Tenzing Norgay's original 1953 Everest ascent gear, historic ice axes, and mountaineering archives.",category:"Heritage",categoryTag:"Indoor Museum",cost:"₹150",costNum:150,location:"Jawahar Parbat",lat:27.051,lng:88.258,weatherSuitability:"Rain-Safe",badgeColor:"purple",rating:4.9},{time:"01:30 PM - 03:00 PM",title:"Warm Tibetan Broth & Steamed Momos at Kunga",description:"Comforting Thukpa noodle soup and steamed pork/veg momos at Darjeeling's most beloved cult eatery.",category:"Dining",categoryTag:"Lunch",cost:"₹300",costNum:300,location:"Chauk Bazaar",lat:27.04,lng:88.268,weatherSuitability:"Indoor",badgeColor:"cyan",rating:4.8},{time:"07:00 PM - 09:30 PM",title:"Colonial Dinner & Live Acoustic at Glenary's",description:"Roast chicken, hot apple strudel, and acoustic folk music inside the 130-year-old colonial bakery lounge.",category:"Nightlife",categoryTag:"Dinner & Music",cost:"₹850",costNum:850,location:"Nehru Road, The Mall",lat:27.043,lng:88.266,weatherSuitability:"Warm Fireplace",badgeColor:"pink",rating:4.9}]}]},digha:{id:"digha",name:"Digha & Coastal Bengal",state:"West Bengal",category:"coastal",categoryLabel:"Coastal & Beachfront",image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&auto=format&fit=crop&q=80",bestSeason:"Oct - Mar (Gentle Ocean Breeze)",helpline:"1363 (Tourist) · 112 (Police)",tagline:"Bengal's Favorite Coastline - Casuarina Groves & Golden Tides",lat:21.6266,lng:87.5074,weather:{temp:28,condition:"Ocean Breeze & Sunny Shores",conditionCode:"sunny",humidity:82,wind:"18 km/h",feelsLike:31,precipitationChance:20,uvIndex:8,forecast:[{day:"Day 1",temp:"28°C",icon:"sun",note:"Pleasant tides at New Digha"},{day:"Day 2",temp:"29°C",icon:"sun",note:"Breezy afternoon at Udaipur beach"}]},hazard:{type:"High Sea Waves & Tidal Swells",level:"Moderate",probability:30,dangerZones:["Old Digha Concrete Sea Wall during High Tide","Unmanned Udaipur Beach Stretches"],advisory:"High tide surging waves can be perilous along Old Digha's stone breakers. Follow lifeguard warning flags and avoid swimming after sunset."},wardrobe:{category:"Beach Casual & Quick-Dry",headline:"Cotton Shorts + Linen Shirts + Flip-Flops + Sunscreen",fabrics:"Quick-dry nylon, breathable cotton, airy linen",footwear:"Waterproof beach flip-flops or water shoes",culturalEtiquette:"Casual resort wear; modest attire recommended when exploring village fish markets.",mustCarry:["Waterproof Phone Pouch","Sunscreen Lotion SPF 50","Beach Towel & Spare Change of Clothes","Polarized Sunglasses & Sun Cap"]},days:[{dayNumber:1,title:"New Digha Morning Waves & Marine Aquarium",subtitle:"Fried Seafood Shacks, Casuarina Pines & Udaipur Beach",date:"Day 1",hours:[{time:"06:30 AM - 09:00 AM",title:"Sunrise Walk along New Digha Sea Beach",description:"Dip your feet in the calm Bay of Bengal waves while red ghost crabs scurry along the flat golden sands.",category:"Scenic",categoryTag:"Beach Sunrise",cost:"Free",costNum:0,location:"New Digha Beach",lat:21.626,lng:87.507,weatherSuitability:"Crisp Morning",badgeColor:"amber",rating:4.7},{time:"09:30 AM - 11:00 AM",title:"Marine Aquarium & Regional Research Centre",description:"Explore India's largest marine research aquarium housing sea anemones, rays, coral fish, and coastal flora.",category:"Culture",categoryTag:"Marine Biology",cost:"Free",costNum:0,location:"Old Digha Main Road",lat:21.628,lng:87.519,weatherSuitability:"Indoor Air-Cooled",badgeColor:"blue",rating:4.6},{time:"01:00 PM - 02:30 PM",title:"Fresh Fried Pomfret & Prawn Curry Feast",description:"Savor crispy spiced fried sea pomfret, jumbo prawn malai curry, and steamed rice at beachfront shack stalls.",category:"Dining",categoryTag:"Seafood Lunch",cost:"₹450",costNum:450,location:"Beach Road Shacks",lat:21.625,lng:87.509,weatherSuitability:"Beach Canopy",badgeColor:"cyan",rating:4.8},{time:"04:30 PM - 07:30 PM",title:"Udaipur Beach Speedboat & Casuarina Sunset",description:"Ride an adrenaline-filled speedboat along the Bengal-Odisha border followed by sipping fresh green coconut water.",category:"Adventure",categoryTag:"Water Sports",cost:"₹400",costNum:400,location:"Udaipur Beach, Border",lat:21.611,lng:87.491,weatherSuitability:"Golden Sunset",badgeColor:"pink",rating:4.8}]}]},puri:{id:"puri",name:"Puri & Konark",state:"Odisha",category:"spiritual",categoryLabel:"Spiritual & Coastal Yatra",image:"https://images.unsplash.com/photo-1599818816933-4f964030739c?w=1000&auto=format&fit=crop&q=80",bestSeason:"Oct - Mar (Pleasant Temple Yatra)",helpline:"1363 (Tourist) · 112 (Police)",tagline:"Spiritual Shore of Odisha - Chariot of Faith & Sun Temple",lat:19.8135,lng:85.8312,weather:{temp:29,condition:"Coastal Warmth & Salty Breeze",conditionCode:"sunny",humidity:79,wind:"16 km/h",feelsLike:32,precipitationChance:20,uvIndex:8,forecast:[{day:"Day 1",temp:"29°C",icon:"sun",note:"Gentle surf at Golden Beach"},{day:"Day 2",temp:"30°C",icon:"sun",note:"Sunlit stone wheels at Konark"}]},hazard:{type:"Ocean Undertow Rip Currents & Coastal Cyclones",level:"Moderate",probability:30,dangerZones:["Blue Flag Beach Deep Water Zone","Chakratirtha Beach Rip Currents"],advisory:"Puri's coastal waves have strong underwater rip currents. Bathe only in designated zones supervised by government lifeguards."},wardrobe:{category:"Spiritual Cotton & Coastal Comfort",headline:"Traditional Cotton Kurta/Sari + Beach Sandals + Sun Hat",fabrics:"Odisha Sambalpuri cotton, lightweight mulmul",footwear:"Slip-on sandals (leather shoes/belts completely forbidden inside Jagannath Temple)",culturalEtiquette:"Strict Hindu temple entry guidelines at Jagannath Temple; no cameras or leather items permitted.",mustCarry:["Cloth bag for personal belongings during temple visits","Cotton Dupatta or Dhoti","Sunscreen & Sunglasses for Golden Beach","Cash for temple priests & Mahaprasad"]},days:[{dayNumber:1,title:"Shree Jagannath Mandir Darshan & Mahaprasad",subtitle:"12th Century Sanctum, Anand Bazar & Golden Beach",date:"Day 1",hours:[{time:"07:00 AM - 10:30 AM",title:"Shree Jagannath Temple Morning Darshan",description:"Pay homage to Lord Jagannath, Balabhadra, and Subhadra in the 12th-century Kalinga architecture masterpiece.",category:"Spiritual",categoryTag:"Sacred Temple",cost:"Free",costNum:0,location:"Grand Road, Puri",lat:19.805,lng:85.818,weatherSuitability:"Early Morning",badgeColor:"amber",rating:5},{time:"11:30 AM - 01:00 PM",title:"Ananda Bazar Sacred 56-Bhog Mahaprasad",description:"Taste the world's largest open-air food market serving divine Khaja, Kanika sweet rice, and Dalma cooked in earthen clay pots.",category:"Dining",categoryTag:"Sacred Lunch",cost:"₹250",costNum:250,location:"Temple Anand Bazar",lat:19.806,lng:85.819,weatherSuitability:"Covered Market",badgeColor:"cyan",rating:4.9},{time:"04:00 PM - 07:30 PM",title:"Golden Beach (Blue Flag Certified) Sunset Walk",description:"Walk along the pristine Blue Flag certified sands, watching local sand sculptors craft transient mythological art.",category:"Scenic",categoryTag:"Blue Flag Beach",cost:"Free",costNum:0,location:"Golden Beach, Puri",lat:19.799,lng:85.828,weatherSuitability:"Golden Sunset",badgeColor:"pink",rating:4.9}]}]}},Zo=[{id:"h1",name:"Smart Budget Hotel",type:"budget",destination:"darjeeling",rating:4.2,reviews:128,price:"₹799",priceNum:799,unit:"/ night",desc:"Clean rooms near popular tourist areas, high-speed WiFi, 24/7 front desk and hot water.",features:["Free WiFi","Mountain View","24/7 Hot Water","Tea Kettle"],image:"https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&auto=format&fit=crop&q=80",lat:27.039,lng:88.261},{id:"h2",name:"Dal Lake Heritage Houseboat",type:"luxury",destination:"kashmir",rating:4.9,reviews:240,price:"₹4,899",priceNum:4899,unit:"/ night",desc:"Handcrafted cedarwood palace floating on peaceful Nigeen Lake with personal butler and traditional Shikara transfers.",features:["Carved Wood Suites","Personal Shikara","Wazwan Butler","Sun Deck"],image:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",lat:34.095,lng:74.851},{id:"h3",name:"Munnar Green Valley Backpackers",type:"budget",destination:"kerala",rating:4.4,reviews:160,price:"₹699",priceNum:699,unit:"/ night",desc:"Cozy backpacker hostel amidst tea plantations with morning mist yoga and guided spice plantation walks.",features:["Free WiFi","Tea Garden View","Community Lounge","Campfire"],image:"https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&auto=format&fit=crop&q=80",lat:10.088,lng:77.059},{id:"h4",name:"Ganga Riverside Heritage Haveli",type:"luxury",destination:"varanasi",rating:4.8,reviews:320,price:"₹5,200",priceNum:5200,unit:"/ night",desc:"Restored 18th-century stone palace right on the sacred ghats with private terrace views of morning Ganga aarti.",features:["Private Ghat Access","Rooftop Aarti View","Ayurvedic Spa","Heritage Courtyard"],image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&auto=format&fit=crop&q=80",lat:25.305,lng:83.008},{id:"h5",name:"Nubra Organic Eco Pods",type:"budget",destination:"ladakh",rating:4.6,reviews:195,price:"₹1,200",priceNum:1200,unit:"/ night",desc:"Solar-heated luxury domes overlooking Hunder sand dunes and Bactrian double-humped camels.",features:["Stargazing Skylight","Oxygen Assistance","Solar Heating","Organic Farm Food"],image:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&auto=format&fit=crop&q=80",lat:34.582,lng:77.421}],Jo=[{id:"r1",name:"Local Food Corner",type:"budget",destination:"darjeeling",rating:4.5,reviews:210,price:"₹150 - ₹300",priceNum:220,unit:"/ person",cuisine:"Tibetan & Himalayan",desc:"Tasty local food at reasonable price. Legendary for pan-fried pork momos, spicy aloo dum, and steaming thukpa.",dishes:["Steamed Momos","Tibetan Thukpa","Shaphalay","Butter Tea"],image:"https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=600&auto=format&fit=crop&q=80"},{id:"r2",name:"Mughal Darbar Residency",type:"luxury",destination:"kashmir",rating:4.9,reviews:650,price:"₹800 - ₹1,800",priceNum:1200,unit:"/ person",cuisine:"Traditional Kashmiri Wazwan",desc:"The gold standard for royal Kashmiri Wazwan. Rogan Josh, Gushtaba, and saffron Phirni.",dishes:["7-Course Wazwan","Mutton Rogan Josh","Rista in Gravy","Saffron Kahwa"],image:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80"},{id:"r3",name:"Kashi Chat Bhandar",type:"budget",destination:"varanasi",rating:4.8,reviews:980,price:"₹100 - ₹250",priceNum:160,unit:"/ person",cuisine:"Banarasi Street Delicacies",desc:"World-renowned for sizzling Tamatar Chaat, Palak Chaat, and Gulab Jamuns served in clay kulhads.",dishes:["Spicy Tamatar Chaat","Dahi Chuda","Crispy Palak Chaat"],image:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop&q=80"}],qt={alex:{id:"alex",gender:"male",name:"Alex",title:"Male AI Guide & Tactical Explorer",subtitle:"Adventurous, analytical, route-optimization & trekking specialist",avatar3d:"👨‍✈️",badge:"Tactical Scout",voiceConfig:{pitch:.82,rate:.98,voiceFilter:"male"},greeting:"Hey there! I'm Alex, your tactical travel co-pilot. I can map all 12 top Indian destinations hour by hour, compute natural hazard risks (landslides, flash floods, cyclones), coordinate offline cellular SOS, and suggest weather-ready gear. Where are we heading?",greetingBn:"নমস্কার! আমি অ্যালেক্স। কাশ্মীর থেকে কেরালা, বারাণসী বা লাদাখ—সব ভ্রমণের জন্য ঘণ্টার নিখুঁত প্ল্যান এবং প্রাকৃতিক দুর্যোগের সতর্কতা নিয়ে আমি আপনার পাশে আছি।",greetingHi:"नमस्ते! मैं एलेक्स हूँ। कश्मीर, लद्दाख, अयोध्या से लेकर कन्याकुमारी तक—घंटे-दर-घंटे का प्लान, मौसम और इमरजेंसी मदद के लिए मैं पूरी तरह तैयार हूँ।"},maya:{id:"maya",gender:"female",name:"Maya",title:"Female AI Guide & Cultural Curator",subtitle:"Empathetic, artistic, gourmet food lover & hidden gems storyteller",avatar3d:"👩‍💼",badge:"Culture & Stays",voiceConfig:{pitch:1.18,rate:1.02,voiceFilter:"female"},greeting:"Hello, lovely traveler! I'm Maya. Let me guide your senses through India's sacred ghats, misty hill stations, and royal desert palaces. I'll help you pick comfortable dress styles for each climate, discover local foods, and ensure your journey is safe and joyful!",greetingBn:"হ্যালো! আমি মায়া। সুন্দর স্থান, স্থানীয় সুস্বাদু খাবার এবং সংস্কৃতিতে পরিপূর্ণ এক ভ্রমণের জন্য আমি আপনার সাথে আছি। আপনার প্রিয় গন্তব্যটি বেছে নিন!",greetingHi:"नमस्ते! मैं माया हूँ। खूबसूरत नज़ारे, स्वादिष्ट पकवान और हर जगह के पहनावे के सुझाव के साथ मैं आपकी यात्रा को यादगार बनाऊँगी। बताइए, आज कहाँ चलना है?"}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zr="170",Qo=0,os=1,el=2,mo=1,tl=2,Qt=3,vn=0,gt=1,Gt=2,mn=0,Kn=1,Ka=2,ls=3,cs=4,nl=5,An=100,il=101,al=102,rl=103,sl=104,ol=200,ll=201,cl=202,dl=203,Za=204,Ja=205,ul=206,hl=207,fl=208,pl=209,ml=210,gl=211,vl=212,yl=213,_l=214,Qa=0,er=1,tr=2,Qn=3,nr=4,ir=5,ar=6,rr=7,go=0,bl=1,xl=2,gn=0,Sl=1,Ml=2,El=3,wl=4,Tl=5,Al=6,Cl=7,vo=300,ei=301,ti=302,sr=303,or=304,ua=306,lr=1e3,Rn=1001,cr=1002,Ot=1003,Rl=1004,Ri=1005,Vt=1006,va=1007,Pn=1008,an=1009,yo=1010,_o=1011,bi=1012,Hr=1013,Ln=1014,en=1015,xi=1016,Gr=1017,Vr=1018,ni=1020,bo=35902,xo=1021,So=1022,Bt=1023,Mo=1024,Eo=1025,Zn=1026,ii=1027,wo=1028,Wr=1029,To=1030,$r=1031,Xr=1033,ea=33776,ta=33777,na=33778,ia=33779,dr=35840,ur=35841,hr=35842,fr=35843,pr=36196,mr=37492,gr=37496,vr=37808,yr=37809,_r=37810,br=37811,xr=37812,Sr=37813,Mr=37814,Er=37815,wr=37816,Tr=37817,Ar=37818,Cr=37819,Rr=37820,Pr=37821,aa=36492,Lr=36494,Dr=36495,Ao=36283,Ir=36284,Ur=36285,Nr=36286,Pl=3200,Ll=3201,Co=0,Dl=1,pn="",Rt="srgb",ri="srgb-linear",ha="linear",Ze="srgb",Nn=7680,ds=519,Il=512,Ul=513,Nl=514,Ro=515,Fl=516,kl=517,Bl=518,Ol=519,us=35044,hs="300 es",tn=2e3,sa=2001;class si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ya=Math.PI/180,Fr=180/Math.PI;function Si(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ht[i&255]+ht[i>>8&255]+ht[i>>16&255]+ht[i>>24&255]+"-"+ht[e&255]+ht[e>>8&255]+"-"+ht[e>>16&15|64]+ht[e>>24&255]+"-"+ht[t&63|128]+ht[t>>8&255]+"-"+ht[t>>16&255]+ht[t>>24&255]+ht[n&255]+ht[n>>8&255]+ht[n>>16&255]+ht[n>>24&255]).toLowerCase()}function pt(i,e,t){return Math.max(e,Math.min(t,i))}function zl(i,e){return(i%e+e)%e}function _a(i,e,t){return(1-t)*i+t*e}function di(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*a+e.x,this.y=r*a+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,a,r,s,o,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,r,s,o,l,c)}set(e,t,n,a,r,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,r=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],d=n[4],f=n[7],h=n[2],p=n[5],g=n[8],y=a[0],m=a[3],u=a[6],w=a[1],E=a[4],x=a[7],N=a[2],A=a[5],C=a[8];return r[0]=s*y+o*w+l*N,r[3]=s*m+o*E+l*A,r[6]=s*u+o*x+l*C,r[1]=c*y+d*w+f*N,r[4]=c*m+d*E+f*A,r[7]=c*u+d*x+f*C,r[2]=h*y+p*w+g*N,r[5]=h*m+p*E+g*A,r[8]=h*u+p*x+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*o*c-n*r*d+n*o*l+a*r*c-a*s*l}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*s-o*c,h=o*l-d*r,p=c*r-s*l,g=t*f+n*h+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=f*y,e[1]=(a*c-d*n)*y,e[2]=(o*n-a*s)*y,e[3]=h*y,e[4]=(d*t-a*l)*y,e[5]=(a*r-o*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(s*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-a*c,a*l,-a*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ba.makeScale(e,t)),this}rotate(e){return this.premultiply(ba.makeRotation(-e)),this}translate(e,t){return this.premultiply(ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ba=new ke;function Po(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function oa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hl(){const i=oa("canvas");return i.style.display="block",i}const fs={};function gi(i){i in fs||(fs[i]=!0,console.warn(i))}function Gl(i,e,t){return new Promise(function(n,a){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Vl(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Wl(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const We={enabled:!0,workingColorSpace:ri,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ze&&(i.r=nn(i.r),i.g=nn(i.g),i.b=nn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ze&&(i.r=Jn(i.r),i.g=Jn(i.g),i.b=Jn(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===pn?ha:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function nn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Jn(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ps=[.64,.33,.3,.6,.15,.06],ms=[.2126,.7152,.0722],gs=[.3127,.329],vs=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ys=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);We.define({[ri]:{primaries:ps,whitePoint:gs,transfer:ha,toXYZ:vs,fromXYZ:ys,luminanceCoefficients:ms,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:ps,whitePoint:gs,transfer:Ze,toXYZ:vs,fromXYZ:ys,luminanceCoefficients:ms,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}});let Fn;class $l{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fn===void 0&&(Fn=oa("canvas")),Fn.width=e.width,Fn.height=e.height;const n=Fn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=nn(r[s]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(nn(t[n]/255)*255):t[n]=nn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xl=0;class Lo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xl++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(xa(a[s].image)):r.push(xa(a[s]))}else r=xa(a);n.url=r}return t||(e.images[this.uuid]=n),n}}function xa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$l.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ql=0;class vt extends si{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,n=Rn,a=Rn,r=Vt,s=Pn,o=Bt,l=an,c=vt.DEFAULT_ANISOTROPY,d=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ql++}),this.uuid=Si(),this.name="",this.source=new Lo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lr:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case cr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lr:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case cr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vt.DEFAULT_IMAGE=null;vt.DEFAULT_MAPPING=vo;vt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,a=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*a+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*a+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,r;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],p=l[5],g=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,x=(p+1)/2,N=(u+1)/2,A=(d+h)/4,C=(f+y)/4,F=(g+m)/4;return E>x&&E>N?E<.01?(n=0,a=.707106781,r=.707106781):(n=Math.sqrt(E),a=A/n,r=C/n):x>N?x<.01?(n=.707106781,a=0,r=.707106781):(a=Math.sqrt(x),n=A/a,r=F/a):N<.01?(n=.707106781,a=.707106781,r=0):(r=Math.sqrt(N),n=C/r,a=F/r),this.set(n,a,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(h-d)*(h-d));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(f-y)/w,this.z=(h-d)/w,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yl extends si{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const a={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new vt(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Lo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends Yl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Do extends vt{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jl extends vt{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mi{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,r,s,o){let l=n[a+0],c=n[a+1],d=n[a+2],f=n[a+3];const h=r[s+0],p=r[s+1],g=r[s+2],y=r[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(f!==y||l!==h||c!==p||d!==g){let m=1-o;const u=l*h+c*p+d*g+f*y,w=u>=0?1:-1,E=1-u*u;if(E>Number.EPSILON){const N=Math.sqrt(E),A=Math.atan2(N,u*w);m=Math.sin(m*A)/N,o=Math.sin(o*A)/N}const x=o*w;if(l=l*m+h*x,c=c*m+p*x,d=d*m+g*x,f=f*m+y*x,m===1-o){const N=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=N,c*=N,d*=N,f*=N}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,a,r,s){const o=n[a],l=n[a+1],c=n[a+2],d=n[a+3],f=r[s],h=r[s+1],p=r[s+2],g=r[s+3];return e[t]=o*g+d*f+l*p-c*h,e[t+1]=l*g+d*h+c*f-o*p,e[t+2]=c*g+d*p+o*h-l*f,e[t+3]=d*g-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(a/2),f=o(r/2),h=l(n/2),p=l(a/2),g=l(r/2);switch(s){case"XYZ":this._x=h*d*f+c*p*g,this._y=c*p*f-h*d*g,this._z=c*d*g+h*p*f,this._w=c*d*f-h*p*g;break;case"YXZ":this._x=h*d*f+c*p*g,this._y=c*p*f-h*d*g,this._z=c*d*g-h*p*f,this._w=c*d*f+h*p*g;break;case"ZXY":this._x=h*d*f-c*p*g,this._y=c*p*f+h*d*g,this._z=c*d*g+h*p*f,this._w=c*d*f-h*p*g;break;case"ZYX":this._x=h*d*f-c*p*g,this._y=c*p*f+h*d*g,this._z=c*d*g-h*p*f,this._w=c*d*f+h*p*g;break;case"YZX":this._x=h*d*f+c*p*g,this._y=c*p*f+h*d*g,this._z=c*d*g-h*p*f,this._w=c*d*f-h*p*g;break;case"XZY":this._x=h*d*f-c*p*g,this._y=c*p*f-h*d*g,this._z=c*d*g+h*p*f,this._w=c*d*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],d=t[6],f=t[10],h=n+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(s-a)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(d-l)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(s-a)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+s*o+a*c-r*l,this._y=a*d+s*l+r*o-n*c,this._z=r*d+s*c+n*l-a*o,this._w=s*d-n*o-a*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,a=this._y,r=this._z,s=this._w;let o=s*e._w+n*e._x+a*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=a,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*n+t*this._x,this._y=p*a+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=s*f+this._w*h,this._x=n*f+this._x*h,this._y=a*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_s.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_s.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*a,this.y=r[1]*t+r[4]*n+r[7]*a,this.z=r[2]*t+r[5]*n+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*a+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*a+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*a+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*a-o*n),d=2*(o*t-r*a),f=2*(r*n-s*t);return this.x=t+l*c+s*f-o*d,this.y=n+l*d+o*c-r*f,this.z=a+l*f+r*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*a,this.y=r[1]*t+r[5]*n+r[9]*a,this.z=r[2]*t+r[6]*n+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=a*l-r*o,this.y=r*s-n*l,this.z=n*o-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sa.copy(this).projectOnVector(e),this.sub(Sa)}reflect(e){return this.sub(Sa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sa=new k,_s=new Mi;class Ei{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ut.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ut.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ut.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Ut):Ut.fromBufferAttribute(r,s),Ut.applyMatrix4(e.matrixWorld),this.expandByPoint(Ut);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pi.copy(n.boundingBox)),Pi.applyMatrix4(e.matrixWorld),this.union(Pi)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ut),Ut.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ui),Li.subVectors(this.max,ui),kn.subVectors(e.a,ui),Bn.subVectors(e.b,ui),On.subVectors(e.c,ui),ln.subVectors(Bn,kn),cn.subVectors(On,Bn),_n.subVectors(kn,On);let t=[0,-ln.z,ln.y,0,-cn.z,cn.y,0,-_n.z,_n.y,ln.z,0,-ln.x,cn.z,0,-cn.x,_n.z,0,-_n.x,-ln.y,ln.x,0,-cn.y,cn.x,0,-_n.y,_n.x,0];return!Ma(t,kn,Bn,On,Li)||(t=[1,0,0,0,1,0,0,0,1],!Ma(t,kn,Bn,On,Li))?!1:(Di.crossVectors(ln,cn),t=[Di.x,Di.y,Di.z],Ma(t,kn,Bn,On,Li))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ut).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ut).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yt=[new k,new k,new k,new k,new k,new k,new k,new k],Ut=new k,Pi=new Ei,kn=new k,Bn=new k,On=new k,ln=new k,cn=new k,_n=new k,ui=new k,Li=new k,Di=new k,bn=new k;function Ma(i,e,t,n,a){for(let r=0,s=i.length-3;r<=s;r+=3){bn.fromArray(i,r);const o=a.x*Math.abs(bn.x)+a.y*Math.abs(bn.y)+a.z*Math.abs(bn.z),l=e.dot(bn),c=t.dot(bn),d=n.dot(bn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Kl=new Ei,hi=new k,Ea=new k;class wi{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Kl.setFromPoints(e).getCenter(n);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hi.subVectors(e,this.center);const t=hi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(hi,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ea.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hi.copy(e.center).add(Ea)),this.expandByPoint(hi.copy(e.center).sub(Ea))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jt=new k,wa=new k,Ii=new k,dn=new k,Ta=new k,Ui=new k,Aa=new k;class fa{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jt.copy(this.origin).addScaledVector(this.direction,t),jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){wa.copy(e).add(t).multiplyScalar(.5),Ii.copy(t).sub(e).normalize(),dn.copy(this.origin).sub(wa);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Ii),o=dn.dot(this.direction),l=-dn.dot(Ii),c=dn.lengthSq(),d=Math.abs(1-s*s);let f,h,p,g;if(d>0)if(f=s*l-o,h=s*o-l,g=r*d,f>=0)if(h>=-g)if(h<=g){const y=1/d;f*=y,h*=y,p=f*(f+s*h+2*o)+h*(s*f+h+2*l)+c}else h=r,f=Math.max(0,-(s*h+o)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(s*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-s*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(s*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=s>0?-r:r,f=Math.max(0,-(s*h+o)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),a&&a.copy(wa).addScaledVector(Ii,h),p}intersectSphere(e,t){jt.subVectors(e.center,this.origin);const n=jt.dot(this.direction),a=jt.dot(jt)-n*n,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,r,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,a=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,a=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,s=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,s=(e.min.y-h.y)*d),n>s||r>a||((r>n||isNaN(n))&&(n=r),(s<a||isNaN(a))&&(a=s),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>a)||((o>n||n!==n)&&(n=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,jt)!==null}intersectTriangle(e,t,n,a,r){Ta.subVectors(t,e),Ui.subVectors(n,e),Aa.crossVectors(Ta,Ui);let s=this.direction.dot(Aa),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;dn.subVectors(this.origin,e);const l=o*this.direction.dot(Ui.crossVectors(dn,Ui));if(l<0)return null;const c=o*this.direction.dot(Ta.cross(dn));if(c<0||l+c>s)return null;const d=-o*dn.dot(Aa);return d<0?null:this.at(d/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,a,r,s,o,l,c,d,f,h,p,g,y,m){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,r,s,o,l,c,d,f,h,p,g,y,m)}set(e,t,n,a,r,s,o,l,c,d,f,h,p,g,y,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=a,u[1]=r,u[5]=s,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=p,u[7]=g,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,a=1/zn.setFromMatrixColumn(e,0).length(),r=1/zn.setFromMatrixColumn(e,1).length(),s=1/zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(a),c=Math.sin(a),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=s*d,p=s*f,g=o*d,y=o*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-y*c,t[9]=-o*l,t[2]=y-h*c,t[6]=g+p*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,g=c*d,y=c*f;t[0]=h+y*o,t[4]=g*o-p,t[8]=s*c,t[1]=s*f,t[5]=s*d,t[9]=-o,t[2]=p*o-g,t[6]=y+h*o,t[10]=s*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,g=c*d,y=c*f;t[0]=h-y*o,t[4]=-s*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=s*d,t[9]=y-h*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const h=s*d,p=s*f,g=o*d,y=o*f;t[0]=l*d,t[4]=g*c-p,t[8]=h*c+y,t[1]=l*f,t[5]=y*c+h,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,p=s*c,g=o*l,y=o*c;t[0]=l*d,t[4]=y-h*f,t[8]=g*f+p,t[1]=f,t[5]=s*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*f+g,t[10]=h-y*f}else if(e.order==="XZY"){const h=s*l,p=s*c,g=o*l,y=o*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=h*f+y,t[5]=s*d,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*d,t[10]=y*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zl,e,Jl)}lookAt(e,t,n){const a=this.elements;return Et.subVectors(e,t),Et.lengthSq()===0&&(Et.z=1),Et.normalize(),un.crossVectors(n,Et),un.lengthSq()===0&&(Math.abs(n.z)===1?Et.x+=1e-4:Et.z+=1e-4,Et.normalize(),un.crossVectors(n,Et)),un.normalize(),Ni.crossVectors(Et,un),a[0]=un.x,a[4]=Ni.x,a[8]=Et.x,a[1]=un.y,a[5]=Ni.y,a[9]=Et.y,a[2]=un.z,a[6]=Ni.z,a[10]=Et.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,r=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],d=n[1],f=n[5],h=n[9],p=n[13],g=n[2],y=n[6],m=n[10],u=n[14],w=n[3],E=n[7],x=n[11],N=n[15],A=a[0],C=a[4],F=a[8],S=a[12],b=a[1],L=a[5],q=a[9],G=a[13],J=a[2],Q=a[6],j=a[10],te=a[14],V=a[3],le=a[7],P=a[11],T=a[15];return r[0]=s*A+o*b+l*J+c*V,r[4]=s*C+o*L+l*Q+c*le,r[8]=s*F+o*q+l*j+c*P,r[12]=s*S+o*G+l*te+c*T,r[1]=d*A+f*b+h*J+p*V,r[5]=d*C+f*L+h*Q+p*le,r[9]=d*F+f*q+h*j+p*P,r[13]=d*S+f*G+h*te+p*T,r[2]=g*A+y*b+m*J+u*V,r[6]=g*C+y*L+m*Q+u*le,r[10]=g*F+y*q+m*j+u*P,r[14]=g*S+y*G+m*te+u*T,r[3]=w*A+E*b+x*J+N*V,r[7]=w*C+E*L+x*Q+N*le,r[11]=w*F+E*q+x*j+N*P,r[15]=w*S+E*G+x*te+N*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],p=e[14],g=e[3],y=e[7],m=e[11],u=e[15];return g*(+r*l*f-a*c*f-r*o*h+n*c*h+a*o*p-n*l*p)+y*(+t*l*p-t*c*h+r*s*h-a*s*p+a*c*d-r*l*d)+m*(+t*c*f-t*o*p-r*s*f+n*s*p+r*o*d-n*c*d)+u*(-a*o*d-t*l*f+t*o*h+a*s*f-n*s*h+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],p=e[11],g=e[12],y=e[13],m=e[14],u=e[15],w=f*m*c-y*h*c+y*l*p-o*m*p-f*l*u+o*h*u,E=g*h*c-d*m*c-g*l*p+s*m*p+d*l*u-s*h*u,x=d*y*c-g*f*c+g*o*p-s*y*p-d*o*u+s*f*u,N=g*f*l-d*y*l-g*o*h+s*y*h+d*o*m-s*f*m,A=t*w+n*E+a*x+r*N;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=w*C,e[1]=(y*h*r-f*m*r-y*a*p+n*m*p+f*a*u-n*h*u)*C,e[2]=(o*m*r-y*l*r+y*a*c-n*m*c-o*a*u+n*l*u)*C,e[3]=(f*l*r-o*h*r-f*a*c+n*h*c+o*a*p-n*l*p)*C,e[4]=E*C,e[5]=(d*m*r-g*h*r+g*a*p-t*m*p-d*a*u+t*h*u)*C,e[6]=(g*l*r-s*m*r-g*a*c+t*m*c+s*a*u-t*l*u)*C,e[7]=(s*h*r-d*l*r+d*a*c-t*h*c-s*a*p+t*l*p)*C,e[8]=x*C,e[9]=(g*f*r-d*y*r-g*n*p+t*y*p+d*n*u-t*f*u)*C,e[10]=(s*y*r-g*o*r+g*n*c-t*y*c-s*n*u+t*o*u)*C,e[11]=(d*o*r-s*f*r-d*n*c+t*f*c+s*n*p-t*o*p)*C,e[12]=N*C,e[13]=(d*y*a-g*f*a+g*n*h-t*y*h-d*n*m+t*f*m)*C,e[14]=(g*o*a-s*y*a-g*n*l+t*y*l+s*n*m-t*o*m)*C,e[15]=(s*f*a-d*o*a+d*n*l-t*f*l-s*n*h+t*o*h)*C,this}scale(e){const t=this.elements,n=e.x,a=e.y,r=e.z;return t[0]*=n,t[4]*=a,t[8]*=r,t[1]*=n,t[5]*=a,t[9]*=r,t[2]*=n,t[6]*=a,t[10]*=r,t[3]*=n,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),r=1-n,s=e.x,o=e.y,l=e.z,c=r*s,d=r*o;return this.set(c*s+n,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+n,d*l-a*s,0,c*l-a*o,d*l+a*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,r,s){return this.set(1,n,r,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,d=s+s,f=o+o,h=r*c,p=r*d,g=r*f,y=s*d,m=s*f,u=o*f,w=l*c,E=l*d,x=l*f,N=n.x,A=n.y,C=n.z;return a[0]=(1-(y+u))*N,a[1]=(p+x)*N,a[2]=(g-E)*N,a[3]=0,a[4]=(p-x)*A,a[5]=(1-(h+u))*A,a[6]=(m+w)*A,a[7]=0,a[8]=(g+E)*C,a[9]=(m-w)*C,a[10]=(1-(h+y))*C,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;let r=zn.set(a[0],a[1],a[2]).length();const s=zn.set(a[4],a[5],a[6]).length(),o=zn.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),e.x=a[12],e.y=a[13],e.z=a[14],Nt.copy(this);const c=1/r,d=1/s,f=1/o;return Nt.elements[0]*=c,Nt.elements[1]*=c,Nt.elements[2]*=c,Nt.elements[4]*=d,Nt.elements[5]*=d,Nt.elements[6]*=d,Nt.elements[8]*=f,Nt.elements[9]*=f,Nt.elements[10]*=f,t.setFromRotationMatrix(Nt),n.x=r,n.y=s,n.z=o,this}makePerspective(e,t,n,a,r,s,o=tn){const l=this.elements,c=2*r/(t-e),d=2*r/(n-a),f=(t+e)/(t-e),h=(n+a)/(n-a);let p,g;if(o===tn)p=-(s+r)/(s-r),g=-2*s*r/(s-r);else if(o===sa)p=-s/(s-r),g=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,a,r,s,o=tn){const l=this.elements,c=1/(t-e),d=1/(n-a),f=1/(s-r),h=(t+e)*c,p=(n+a)*d;let g,y;if(o===tn)g=(s+r)*f,y=-2*f;else if(o===sa)g=r*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const zn=new k,Nt=new tt,Zl=new k(0,0,0),Jl=new k(1,1,1),un=new k,Ni=new k,Et=new k,bs=new tt,xs=new Mi;class Wt{constructor(e=0,t=0,n=0,a=Wt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],d=a[9],f=a[2],h=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-pt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bs,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xs.setFromEuler(this),this.setFromQuaternion(xs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wt.DEFAULT_ORDER="XYZ";class qr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ql=0;const Ss=new k,Hn=new Mi,Kt=new tt,Fi=new k,fi=new k,ec=new k,tc=new Mi,Ms=new k(1,0,0),Es=new k(0,1,0),ws=new k(0,0,1),Ts={type:"added"},nc={type:"removed"},Gn={type:"childadded",child:null},Ca={type:"childremoved",child:null};class dt extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ql++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new k,t=new Wt,n=new Mi,a=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new tt},normalMatrix:{value:new ke}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hn.setFromAxisAngle(e,t),this.quaternion.multiply(Hn),this}rotateOnWorldAxis(e,t){return Hn.setFromAxisAngle(e,t),this.quaternion.premultiply(Hn),this}rotateX(e){return this.rotateOnAxis(Ms,e)}rotateY(e){return this.rotateOnAxis(Es,e)}rotateZ(e){return this.rotateOnAxis(ws,e)}translateOnAxis(e,t){return Ss.copy(e).applyQuaternion(this.quaternion),this.position.add(Ss.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ms,e)}translateY(e){return this.translateOnAxis(Es,e)}translateZ(e){return this.translateOnAxis(ws,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fi.copy(e):Fi.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kt.lookAt(fi,Fi,this.up):Kt.lookAt(Fi,fi,this.up),this.quaternion.setFromRotationMatrix(Kt),a&&(Kt.extractRotation(a.matrixWorld),Hn.setFromRotationMatrix(Kt),this.quaternion.premultiply(Hn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ts),Gn.child=e,this.dispatchEvent(Gn),Gn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nc),Ca.child=e,this.dispatchEvent(Ca),Ca.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ts),Gn.child=e,this.dispatchEvent(Gn),Gn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fi,e,ec),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fi,tc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),f=s(e.shapes),h=s(e.skeletons),p=s(e.animations),g=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=a,n;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}dt.DEFAULT_UP=new k(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ft=new k,Zt=new k,Ra=new k,Jt=new k,Vn=new k,Wn=new k,As=new k,Pa=new k,La=new k,Da=new k,Ia=new rt,Ua=new rt,Na=new rt;class kt{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),Ft.subVectors(e,t),a.cross(Ft);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,n,a,r){Ft.subVectors(a,t),Zt.subVectors(n,t),Ra.subVectors(e,t);const s=Ft.dot(Ft),o=Ft.dot(Zt),l=Ft.dot(Ra),c=Zt.dot(Zt),d=Zt.dot(Ra),f=s*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(c*l-o*d)*h,g=(s*d-o*l)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,Jt)===null?!1:Jt.x>=0&&Jt.y>=0&&Jt.x+Jt.y<=1}static getInterpolation(e,t,n,a,r,s,o,l){return this.getBarycoord(e,t,n,a,Jt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jt.x),l.addScaledVector(s,Jt.y),l.addScaledVector(o,Jt.z),l)}static getInterpolatedAttribute(e,t,n,a,r,s){return Ia.setScalar(0),Ua.setScalar(0),Na.setScalar(0),Ia.fromBufferAttribute(e,t),Ua.fromBufferAttribute(e,n),Na.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(Ia,r.x),s.addScaledVector(Ua,r.y),s.addScaledVector(Na,r.z),s}static isFrontFacing(e,t,n,a){return Ft.subVectors(n,t),Zt.subVectors(e,t),Ft.cross(Zt).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ft.subVectors(this.c,this.b),Zt.subVectors(this.a,this.b),Ft.cross(Zt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,r){return kt.getInterpolation(e,this.a,this.b,this.c,t,n,a,r)}containsPoint(e){return kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,r=this.c;let s,o;Vn.subVectors(a,n),Wn.subVectors(r,n),Pa.subVectors(e,n);const l=Vn.dot(Pa),c=Wn.dot(Pa);if(l<=0&&c<=0)return t.copy(n);La.subVectors(e,a);const d=Vn.dot(La),f=Wn.dot(La);if(d>=0&&f<=d)return t.copy(a);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(n).addScaledVector(Vn,s);Da.subVectors(e,r);const p=Vn.dot(Da),g=Wn.dot(Da);if(g>=0&&p<=g)return t.copy(r);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Wn,o);const m=d*g-p*f;if(m<=0&&f-d>=0&&p-g>=0)return As.subVectors(r,a),o=(f-d)/(f-d+(p-g)),t.copy(a).addScaledVector(As,o);const u=1/(m+y+h);return s=y*u,o=h*u,t.copy(n).addScaledVector(Vn,s).addScaledVector(Wn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Io={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},ki={h:0,s:0,l:0};function Fa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,n,a=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.toWorkingColorSpace(this,a),this}setHSL(e,t,n,a=We.workingColorSpace){if(e=zl(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Fa(s,r,e+1/3),this.g=Fa(s,r,e),this.b=Fa(s,r,e-1/3)}return We.toWorkingColorSpace(this,a),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const n=Io[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nn(e.r),this.g=nn(e.g),this.b=nn(e.b),this}copyLinearToSRGB(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return We.fromWorkingColorSpace(ft.copy(this),e),Math.round(pt(ft.r*255,0,255))*65536+Math.round(pt(ft.g*255,0,255))*256+Math.round(pt(ft.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(ft.copy(this),t);const n=ft.r,a=ft.g,r=ft.b,s=Math.max(n,a,r),o=Math.min(n,a,r);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=d<=.5?f/(s+o):f/(2-s-o),s){case n:l=(a-r)/f+(a<r?6:0);break;case a:l=(r-n)/f+2;break;case r:l=(n-a)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(ft.copy(this),t),e.r=ft.r,e.g=ft.g,e.b=ft.b,e}getStyle(e=Rt){We.fromWorkingColorSpace(ft.copy(this),e);const t=ft.r,n=ft.g,a=ft.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(hn),this.setHSL(hn.h+e,hn.s+t,hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hn),e.getHSL(ki);const n=_a(hn.h,ki.h,t),a=_a(hn.s,ki.s,t),r=_a(hn.l,ki.l,t);return this.setHSL(n,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*a,this.g=r[1]*t+r[4]*n+r[7]*a,this.b=r[2]*t+r[5]*n+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ft=new $e;$e.NAMES=Io;let ic=0;class In extends si{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ic++}),this.uuid=Si(),this.name="",this.blending=Kn,this.side=vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Za,this.blendDst=Ja,this.blendEquation=An,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Qn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ds,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nn,this.stencilZFail=Nn,this.stencilZPass=Nn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Kn&&(n.blending=this.blending),this.side!==vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Za&&(n.blendSrc=this.blendSrc),this.blendDst!==Ja&&(n.blendDst=this.blendDst),this.blendEquation!==An&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ds&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Nn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Nn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=a(e.textures),s=a(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let r=0;r!==a;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class la extends In{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.combine=go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new k,Bi=new Xe;class Lt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=us,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bi.fromBufferAttribute(this,t),Bi.applyMatrix3(e),this.setXY(t,Bi.x,Bi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=di(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=di(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=di(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),a=_t(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),a=_t(a,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==us&&(e.usage=this.usage),e}}class Uo extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class No extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xt extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ac=0;const Ct=new tt,ka=new dt,$n=new k,wt=new Ei,pi=new Ei,ct=new k;class St extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ac++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Po(e)?No:Uo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ct.makeRotationFromQuaternion(e),this.applyMatrix4(Ct),this}rotateX(e){return Ct.makeRotationX(e),this.applyMatrix4(Ct),this}rotateY(e){return Ct.makeRotationY(e),this.applyMatrix4(Ct),this}rotateZ(e){return Ct.makeRotationZ(e),this.applyMatrix4(Ct),this}translate(e,t,n){return Ct.makeTranslation(e,t,n),this.applyMatrix4(Ct),this}scale(e,t,n){return Ct.makeScale(e,t,n),this.applyMatrix4(Ct),this}lookAt(e){return ka.lookAt(e),ka.updateMatrix(),this.applyMatrix4(ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($n).negate(),this.translate($n.x,$n.y,$n.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new xt(n,3))}else{for(let n=0,a=t.count;n<a;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const r=t[n];wt.setFromBufferAttribute(r),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];pi.setFromBufferAttribute(o),this.morphTargetsRelative?(ct.addVectors(wt.min,pi.min),wt.expandByPoint(ct),ct.addVectors(wt.max,pi.max),wt.expandByPoint(ct)):(wt.expandByPoint(pi.min),wt.expandByPoint(pi.max))}wt.getCenter(n);let a=0;for(let r=0,s=e.count;r<s;r++)ct.fromBufferAttribute(e,r),a=Math.max(a,n.distanceToSquared(ct));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)ct.fromBufferAttribute(o,c),l&&($n.fromBufferAttribute(e,c),ct.add($n)),a=Math.max(a,n.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<n.count;F++)o[F]=new k,l[F]=new k;const c=new k,d=new k,f=new k,h=new Xe,p=new Xe,g=new Xe,y=new k,m=new k;function u(F,S,b){c.fromBufferAttribute(n,F),d.fromBufferAttribute(n,S),f.fromBufferAttribute(n,b),h.fromBufferAttribute(r,F),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,b),d.sub(c),f.sub(c),p.sub(h),g.sub(h);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(y.copy(d).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(L),o[F].add(y),o[S].add(y),o[b].add(y),l[F].add(m),l[S].add(m),l[b].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let F=0,S=w.length;F<S;++F){const b=w[F],L=b.start,q=b.count;for(let G=L,J=L+q;G<J;G+=3)u(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const E=new k,x=new k,N=new k,A=new k;function C(F){N.fromBufferAttribute(a,F),A.copy(N);const S=o[F];E.copy(S),E.sub(N.multiplyScalar(N.dot(S))).normalize(),x.crossVectors(A,S);const L=x.dot(l[F])<0?-1:1;s.setXYZW(F,E.x,E.y,E.z,L)}for(let F=0,S=w.length;F<S;++F){const b=w[F],L=b.start,q=b.count;for(let G=L,J=L+q;G<J;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const a=new k,r=new k,s=new k,o=new k,l=new k,c=new k,d=new k,f=new k;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);a.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,m),d.subVectors(s,r),f.subVectors(a,r),d.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)a.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),d.subVectors(s,r),f.subVectors(a,r),d.cross(f),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,h=new c.constructor(l.length*d);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*d;for(let u=0;u<d;u++)h[g++]=c[p++]}return new Lt(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new St,n=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,f=c.length;d<f;d++){const h=c[d],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(a[l]=d,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const a=e.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],f=r[c];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cs=new tt,xn=new fa,Oi=new wi,Rs=new k,zi=new k,Hi=new k,Gi=new k,Ba=new k,Vi=new k,Ps=new k,Wi=new k;class Tt extends dt{constructor(e=new St,t=new la){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){Vi.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],f=r[l];d!==0&&(Ba.fromBufferAttribute(f,e),s?Vi.addScaledVector(Ba,d):Vi.addScaledVector(Ba.sub(t),d))}t.add(Vi)}return t}raycast(e,t){const n=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oi.copy(n.boundingSphere),Oi.applyMatrix4(r),xn.copy(e.ray).recast(e.near),!(Oi.containsPoint(xn.origin)===!1&&(xn.intersectSphere(Oi,Rs)===null||xn.origin.distanceToSquared(Rs)>(e.far-e.near)**2))&&(Cs.copy(r).invert(),xn.copy(e.ray).applyMatrix4(Cs),!(n.boundingBox!==null&&xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xn)))}_computeIntersections(e,t,n){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,y=h.length;g<y;g++){const m=h[g],u=s[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=w,N=E;x<N;x+=3){const A=o.getX(x),C=o.getX(x+1),F=o.getX(x+2);a=$i(this,u,e,n,c,d,f,A,C,F),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=g,u=y;m<u;m+=3){const w=o.getX(m),E=o.getX(m+1),x=o.getX(m+2);a=$i(this,s,e,n,c,d,f,w,E,x),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,y=h.length;g<y;g++){const m=h[g],u=s[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=w,N=E;x<N;x+=3){const A=x,C=x+1,F=x+2;a=$i(this,u,e,n,c,d,f,A,C,F),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,u=y;m<u;m+=3){const w=m,E=m+1,x=m+2;a=$i(this,s,e,n,c,d,f,w,E,x),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function rc(i,e,t,n,a,r,s,o){let l;if(e.side===gt?l=n.intersectTriangle(s,r,a,!0,o):l=n.intersectTriangle(a,r,s,e.side===vn,o),l===null)return null;Wi.copy(o),Wi.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Wi);return c<t.near||c>t.far?null:{distance:c,point:Wi.clone(),object:i}}function $i(i,e,t,n,a,r,s,o,l,c){i.getVertexPosition(o,zi),i.getVertexPosition(l,Hi),i.getVertexPosition(c,Gi);const d=rc(i,e,t,n,zi,Hi,Gi,Ps);if(d){const f=new k;kt.getBarycoord(Ps,zi,Hi,Gi,f),a&&(d.uv=kt.getInterpolatedAttribute(a,o,l,c,f,new Xe)),r&&(d.uv1=kt.getInterpolatedAttribute(r,o,l,c,f,new Xe)),s&&(d.normal=kt.getInterpolatedAttribute(s,o,l,c,f,new k),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new k,materialIndex:0};kt.getNormal(zi,Hi,Gi,h.normal),d.face=h,d.barycoord=f}return d}class Ti extends St{constructor(e=1,t=1,n=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],d=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,s,r,0),g("z","y","x",1,-1,n,t,-e,s,r,1),g("x","z","y",1,1,e,n,t,a,s,2),g("x","z","y",1,-1,e,n,-t,a,s,3),g("x","y","z",1,-1,e,t,n,a,r,4),g("x","y","z",-1,-1,e,t,-n,a,r,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(f,2));function g(y,m,u,w,E,x,N,A,C,F,S){const b=x/C,L=N/F,q=x/2,G=N/2,J=A/2,Q=C+1,j=F+1;let te=0,V=0;const le=new k;for(let P=0;P<j;P++){const T=P*L-G;for(let ie=0;ie<Q;ie++){const ce=ie*b-q;le[y]=ce*w,le[m]=T*E,le[u]=J,c.push(le.x,le.y,le.z),le[y]=0,le[m]=0,le[u]=A>0?1:-1,d.push(le.x,le.y,le.z),f.push(ie/C),f.push(1-P/F),te+=1}}for(let P=0;P<F;P++)for(let T=0;T<C;T++){const ie=h+T+Q*P,ce=h+T+Q*(P+1),B=h+(T+1)+Q*(P+1),$=h+(T+1)+Q*P;l.push(ie,ce,$),l.push(ce,B,$),V+=6}o.addGroup(p,V,S),p+=V,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ti(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ai(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone():Array.isArray(a)?e[t][n]=a.slice():e[t][n]=a}}return e}function mt(i){const e={};for(let t=0;t<i.length;t++){const n=ai(i[t]);for(const a in n)e[a]=n[a]}return e}function sc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fo(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const oc={clone:ai,merge:mt};var lc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends In{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lc,this.fragmentShader=cc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ai(e.uniforms),this.uniformsGroups=sc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ko extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=tn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fn=new k,Ls=new Xe,Ds=new Xe;class Pt extends ko{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fn.x,fn.y).multiplyScalar(-e/fn.z),fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fn.x,fn.y).multiplyScalar(-e/fn.z)}getViewSize(e,t){return this.getViewBounds(e,Ls,Ds),t.subVectors(Ds,Ls)}setViewOffset(e,t,n,a,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ya*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,t-=s.offsetY*n/c,a*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xn=-90,qn=1;class dc extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Pt(Xn,qn,e,t);a.layers=this.layers,this.add(a);const r=new Pt(Xn,qn,e,t);r.layers=this.layers,this.add(r);const s=new Pt(Xn,qn,e,t);s.layers=this.layers,this.add(s);const o=new Pt(Xn,qn,e,t);o.layers=this.layers,this.add(o);const l=new Pt(Xn,qn,e,t);l.layers=this.layers,this.add(l);const c=new Pt(Xn,qn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,r,s,o,l]=t;for(const c of t)this.remove(c);if(e===tn)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,a),e.render(t,r),e.setRenderTarget(n,1,a),e.render(t,s),e.setRenderTarget(n,2,a),e.render(t,o),e.setRenderTarget(n,3,a),e.render(t,l),e.setRenderTarget(n,4,a),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,a),e.render(t,d),e.setRenderTarget(f,h,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bo extends vt{constructor(e,t,n,a,r,s,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:ei,super(e,t,n,a,r,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uc extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new Bo(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Ti(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gt,blending:mn});r.uniforms.tEquirect.value=t;const s=new Tt(a,r),o=t.minFilter;return t.minFilter===Pn&&(t.minFilter=Vt),new dc(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,a){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,a);e.setRenderTarget(r)}}const Oa=new k,hc=new k,fc=new ke;class wn{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=Oa.subVectors(n,t).cross(hc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Oa),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||fc.getNormalMatrix(e),a=this.coplanarPoint(Oa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sn=new wi,Xi=new k;class Yr{constructor(e=new wn,t=new wn,n=new wn,a=new wn,r=new wn,s=new wn){this.planes=[e,t,n,a,r,s]}set(e,t,n,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tn){const n=this.planes,a=e.elements,r=a[0],s=a[1],o=a[2],l=a[3],c=a[4],d=a[5],f=a[6],h=a[7],p=a[8],g=a[9],y=a[10],m=a[11],u=a[12],w=a[13],E=a[14],x=a[15];if(n[0].setComponents(l-r,h-c,m-p,x-u).normalize(),n[1].setComponents(l+r,h+c,m+p,x+u).normalize(),n[2].setComponents(l+s,h+d,m+g,x+w).normalize(),n[3].setComponents(l-s,h-d,m-g,x-w).normalize(),n[4].setComponents(l-o,h-f,m-y,x-E).normalize(),t===tn)n[5].setComponents(l+o,h+f,m+y,x+E).normalize();else if(t===sa)n[5].setComponents(o,f,y,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sn)}intersectsSprite(e){return Sn.center.set(0,0,0),Sn.radius=.7071067811865476,Sn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sn)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(Xi.x=a.normal.x>0?e.max.x:e.min.x,Xi.y=a.normal.y>0?e.max.y:e.min.y,Xi.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Xi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Oo(){let i=null,e=!1,t=null,n=null;function a(r,s){t(r,s),n=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function pc(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const d=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,d);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],y=f[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,f[h]=y)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const y=f[p];i.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}class pa extends St{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const r=e/2,s=t/2,o=Math.floor(n),l=Math.floor(a),c=o+1,d=l+1,f=e/o,h=t/l,p=[],g=[],y=[],m=[];for(let u=0;u<d;u++){const w=u*h-s;for(let E=0;E<c;E++){const x=E*f-r;g.push(x,-w,0),y.push(0,0,1),m.push(E/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let w=0;w<o;w++){const E=w+c*u,x=w+c*(u+1),N=w+1+c*(u+1),A=w+1+c*u;p.push(E,x,A),p.push(x,N,A)}this.setIndex(p),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(y,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.widthSegments,e.heightSegments)}}var mc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_c=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mc=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ec=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ac=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ic=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Bc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Oc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$c="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xc=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Kc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,td=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ad=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,od=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ld=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ud=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,md=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_d=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ed=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Td=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ad=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ld=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Id=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Od=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Wd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$d=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Zd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,au=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ru=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,su=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ou=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,du=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_u=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Su=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Eu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Au=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ru=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Du=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Iu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ku=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ou=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$u=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:mc,alphahash_pars_fragment:gc,alphamap_fragment:vc,alphamap_pars_fragment:yc,alphatest_fragment:_c,alphatest_pars_fragment:bc,aomap_fragment:xc,aomap_pars_fragment:Sc,batching_pars_vertex:Mc,batching_vertex:Ec,begin_vertex:wc,beginnormal_vertex:Tc,bsdfs:Ac,iridescence_fragment:Cc,bumpmap_pars_fragment:Rc,clipping_planes_fragment:Pc,clipping_planes_pars_fragment:Lc,clipping_planes_pars_vertex:Dc,clipping_planes_vertex:Ic,color_fragment:Uc,color_pars_fragment:Nc,color_pars_vertex:Fc,color_vertex:kc,common:Bc,cube_uv_reflection_fragment:Oc,defaultnormal_vertex:zc,displacementmap_pars_vertex:Hc,displacementmap_vertex:Gc,emissivemap_fragment:Vc,emissivemap_pars_fragment:Wc,colorspace_fragment:$c,colorspace_pars_fragment:Xc,envmap_fragment:qc,envmap_common_pars_fragment:Yc,envmap_pars_fragment:jc,envmap_pars_vertex:Kc,envmap_physical_pars_fragment:od,envmap_vertex:Zc,fog_vertex:Jc,fog_pars_vertex:Qc,fog_fragment:ed,fog_pars_fragment:td,gradientmap_pars_fragment:nd,lightmap_pars_fragment:id,lights_lambert_fragment:ad,lights_lambert_pars_fragment:rd,lights_pars_begin:sd,lights_toon_fragment:ld,lights_toon_pars_fragment:cd,lights_phong_fragment:dd,lights_phong_pars_fragment:ud,lights_physical_fragment:hd,lights_physical_pars_fragment:fd,lights_fragment_begin:pd,lights_fragment_maps:md,lights_fragment_end:gd,logdepthbuf_fragment:vd,logdepthbuf_pars_fragment:yd,logdepthbuf_pars_vertex:_d,logdepthbuf_vertex:bd,map_fragment:xd,map_pars_fragment:Sd,map_particle_fragment:Md,map_particle_pars_fragment:Ed,metalnessmap_fragment:wd,metalnessmap_pars_fragment:Td,morphinstance_vertex:Ad,morphcolor_vertex:Cd,morphnormal_vertex:Rd,morphtarget_pars_vertex:Pd,morphtarget_vertex:Ld,normal_fragment_begin:Dd,normal_fragment_maps:Id,normal_pars_fragment:Ud,normal_pars_vertex:Nd,normal_vertex:Fd,normalmap_pars_fragment:kd,clearcoat_normal_fragment_begin:Bd,clearcoat_normal_fragment_maps:Od,clearcoat_pars_fragment:zd,iridescence_pars_fragment:Hd,opaque_fragment:Gd,packing:Vd,premultiplied_alpha_fragment:Wd,project_vertex:$d,dithering_fragment:Xd,dithering_pars_fragment:qd,roughnessmap_fragment:Yd,roughnessmap_pars_fragment:jd,shadowmap_pars_fragment:Kd,shadowmap_pars_vertex:Zd,shadowmap_vertex:Jd,shadowmask_pars_fragment:Qd,skinbase_vertex:eu,skinning_pars_vertex:tu,skinning_vertex:nu,skinnormal_vertex:iu,specularmap_fragment:au,specularmap_pars_fragment:ru,tonemapping_fragment:su,tonemapping_pars_fragment:ou,transmission_fragment:lu,transmission_pars_fragment:cu,uv_pars_fragment:du,uv_pars_vertex:uu,uv_vertex:hu,worldpos_vertex:fu,background_vert:pu,background_frag:mu,backgroundCube_vert:gu,backgroundCube_frag:vu,cube_vert:yu,cube_frag:_u,depth_vert:bu,depth_frag:xu,distanceRGBA_vert:Su,distanceRGBA_frag:Mu,equirect_vert:Eu,equirect_frag:wu,linedashed_vert:Tu,linedashed_frag:Au,meshbasic_vert:Cu,meshbasic_frag:Ru,meshlambert_vert:Pu,meshlambert_frag:Lu,meshmatcap_vert:Du,meshmatcap_frag:Iu,meshnormal_vert:Uu,meshnormal_frag:Nu,meshphong_vert:Fu,meshphong_frag:ku,meshphysical_vert:Bu,meshphysical_frag:Ou,meshtoon_vert:zu,meshtoon_frag:Hu,points_vert:Gu,points_frag:Vu,shadow_vert:Wu,shadow_frag:$u,sprite_vert:Xu,sprite_frag:qu},oe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Ht={basic:{uniforms:mt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:mt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:mt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:mt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:mt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:mt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:mt([oe.points,oe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:mt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:mt([oe.common,oe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:mt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:mt([oe.sprite,oe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:mt([oe.common,oe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:mt([oe.lights,oe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Ht.physical={uniforms:mt([Ht.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const qi={r:0,b:0,g:0},Mn=new Wt,Yu=new tt;function ju(i,e,t,n,a,r,s){const o=new $e(0);let l=r===!0?0:1,c,d,f=null,h=0,p=null;function g(w){let E=w.isScene===!0?w.background:null;return E&&E.isTexture&&(E=(w.backgroundBlurriness>0?t:e).get(E)),E}function y(w){let E=!1;const x=g(w);x===null?u(o,l):x&&x.isColor&&(u(x,1),E=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,s):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,E){const x=g(E);x&&(x.isCubeTexture||x.mapping===ua)?(d===void 0&&(d=new Tt(new Ti(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:ai(Ht.backgroundCube.uniforms),vertexShader:Ht.backgroundCube.vertexShader,fragmentShader:Ht.backgroundCube.fragmentShader,side:gt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(N,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),Mn.copy(E.backgroundRotation),Mn.x*=-1,Mn.y*=-1,Mn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Mn.y*=-1,Mn.z*=-1),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Yu.makeRotationFromEuler(Mn)),d.material.toneMapped=We.getTransfer(x.colorSpace)!==Ze,(f!==x||h!==x.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,f=x,h=x.version,p=i.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Tt(new pa(2,2),new rn({name:"BackgroundMaterial",uniforms:ai(Ht.background.uniforms),vertexShader:Ht.background.vertexShader,fragmentShader:Ht.background.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=We.getTransfer(x.colorSpace)!==Ze,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,p=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function u(w,E){w.getRGB(qi,Fo(i)),n.buffers.color.setClear(qi.r,qi.g,qi.b,E,s)}return{getClearColor:function(){return o},setClearColor:function(w,E=1){o.set(w),l=E,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,u(o,l)},render:y,addToRenderList:m}}function Ku(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=h(null);let r=a,s=!1;function o(b,L,q,G,J){let Q=!1;const j=f(G,q,L);r!==j&&(r=j,c(r.object)),Q=p(b,G,q,J),Q&&g(b,G,q,J),J!==null&&e.update(J,i.ELEMENT_ARRAY_BUFFER),(Q||s)&&(s=!1,x(b,L,q,G),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function d(b){return i.deleteVertexArray(b)}function f(b,L,q){const G=q.wireframe===!0;let J=n[b.id];J===void 0&&(J={},n[b.id]=J);let Q=J[L.id];Q===void 0&&(Q={},J[L.id]=Q);let j=Q[G];return j===void 0&&(j=h(l()),Q[G]=j),j}function h(b){const L=[],q=[],G=[];for(let J=0;J<t;J++)L[J]=0,q[J]=0,G[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:q,attributeDivisors:G,object:b,attributes:{},index:null}}function p(b,L,q,G){const J=r.attributes,Q=L.attributes;let j=0;const te=q.getAttributes();for(const V in te)if(te[V].location>=0){const P=J[V];let T=Q[V];if(T===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(T=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(T=b.instanceColor)),P===void 0||P.attribute!==T||T&&P.data!==T.data)return!0;j++}return r.attributesNum!==j||r.index!==G}function g(b,L,q,G){const J={},Q=L.attributes;let j=0;const te=q.getAttributes();for(const V in te)if(te[V].location>=0){let P=Q[V];P===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(P=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(P=b.instanceColor));const T={};T.attribute=P,P&&P.data&&(T.data=P.data),J[V]=T,j++}r.attributes=J,r.attributesNum=j,r.index=G}function y(){const b=r.newAttributes;for(let L=0,q=b.length;L<q;L++)b[L]=0}function m(b){u(b,0)}function u(b,L){const q=r.newAttributes,G=r.enabledAttributes,J=r.attributeDivisors;q[b]=1,G[b]===0&&(i.enableVertexAttribArray(b),G[b]=1),J[b]!==L&&(i.vertexAttribDivisor(b,L),J[b]=L)}function w(){const b=r.newAttributes,L=r.enabledAttributes;for(let q=0,G=L.length;q<G;q++)L[q]!==b[q]&&(i.disableVertexAttribArray(q),L[q]=0)}function E(b,L,q,G,J,Q,j){j===!0?i.vertexAttribIPointer(b,L,q,J,Q):i.vertexAttribPointer(b,L,q,G,J,Q)}function x(b,L,q,G){y();const J=G.attributes,Q=q.getAttributes(),j=L.defaultAttributeValues;for(const te in Q){const V=Q[te];if(V.location>=0){let le=J[te];if(le===void 0&&(te==="instanceMatrix"&&b.instanceMatrix&&(le=b.instanceMatrix),te==="instanceColor"&&b.instanceColor&&(le=b.instanceColor)),le!==void 0){const P=le.normalized,T=le.itemSize,ie=e.get(le);if(ie===void 0)continue;const ce=ie.buffer,B=ie.type,$=ie.bytesPerElement,ne=B===i.INT||B===i.UNSIGNED_INT||le.gpuType===Hr;if(le.isInterleavedBufferAttribute){const X=le.data,se=X.stride,pe=le.offset;if(X.isInstancedInterleavedBuffer){for(let be=0;be<V.locationSize;be++)u(V.location+be,X.meshPerAttribute);b.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let be=0;be<V.locationSize;be++)m(V.location+be);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let be=0;be<V.locationSize;be++)E(V.location+be,T/V.locationSize,B,P,se*$,(pe+T/V.locationSize*be)*$,ne)}else{if(le.isInstancedBufferAttribute){for(let X=0;X<V.locationSize;X++)u(V.location+X,le.meshPerAttribute);b.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let X=0;X<V.locationSize;X++)m(V.location+X);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let X=0;X<V.locationSize;X++)E(V.location+X,T/V.locationSize,B,P,T*$,T/V.locationSize*X*$,ne)}}else if(j!==void 0){const P=j[te];if(P!==void 0)switch(P.length){case 2:i.vertexAttrib2fv(V.location,P);break;case 3:i.vertexAttrib3fv(V.location,P);break;case 4:i.vertexAttrib4fv(V.location,P);break;default:i.vertexAttrib1fv(V.location,P)}}}}w()}function N(){F();for(const b in n){const L=n[b];for(const q in L){const G=L[q];for(const J in G)d(G[J].object),delete G[J];delete L[q]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;const L=n[b.id];for(const q in L){const G=L[q];for(const J in G)d(G[J].object),delete G[J];delete L[q]}delete n[b.id]}function C(b){for(const L in n){const q=n[L];if(q[b.id]===void 0)continue;const G=q[b.id];for(const J in G)d(G[J].object),delete G[J];delete q[b.id]}}function F(){S(),s=!0,r!==a&&(r=a,c(r.object))}function S(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:F,resetDefaultState:S,dispose:N,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:w}}function Zu(i,e,t){let n;function a(c){n=c}function r(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function s(c,d,f){f!==0&&(i.drawArraysInstanced(n,c,d,f),t.update(d,n,f))}function o(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,f);let p=0;for(let g=0;g<f;g++)p+=d[g];t.update(p,n,1)}function l(c,d,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)s(c[g],d[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,h,0,f);let g=0;for(let y=0;y<f;y++)g+=d[y]*h[y];t.update(g,n,1)}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ju(i,e,t,n){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(C){return!(C!==Bt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const F=C===xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==an&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==en&&!F)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:N,maxSamples:A}}function Qu(i){const e=this;let t=null,n=0,a=!1,r=!1;const s=new wn,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||a;return a=h,n=f.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=d(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,u=i.get(f);if(!a||g===null||g.length===0||r&&!m)r?d(null):c();else{const w=r?0:n,E=w*4;let x=u.clippingState||null;l.value=x,x=d(g,h,E,p);for(let N=0;N!==E;++N)x[N]=t[N];u.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,h,p,g){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const u=p+y*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<u)&&(m=new Float32Array(u));for(let E=0,x=p;E!==y;++E,x+=4)s.copy(f[E]).applyMatrix4(w,o),s.normal.toArray(m,x),m[x+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function eh(i){let e=new WeakMap;function t(s,o){return o===sr?s.mapping=ei:o===or&&(s.mapping=ti),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===sr||o===or)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new uc(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",a),t(c.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class zo extends ko{constructor(e=-1,t=1,n=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const jn=4,Is=[.125,.215,.35,.446,.526,.582],Cn=20,za=new zo,Us=new $e;let Ha=null,Ga=0,Va=0,Wa=!1;const Tn=(1+Math.sqrt(5))/2,Yn=1/Tn,Ns=[new k(-Tn,Yn,0),new k(Tn,Yn,0),new k(-Yn,0,Tn),new k(Yn,0,Tn),new k(0,Tn,-Yn),new k(0,Tn,Yn),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Fs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,a=100){Ha=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,a,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Os(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ha,Ga,Va),this._renderer.xr.enabled=Wa,e.scissorTest=!1,Yi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ei||e.mapping===ti?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ha=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:xi,format:Bt,colorSpace:ri,depthBuffer:!1},a=ks(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ks(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=th(r)),this._blurMaterial=nh(r,e,t)}return a}_compileMaterial(e){const t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,za)}_sceneToCubeUV(e,t,n,a){const o=new Pt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Us),d.toneMapping=gn,d.autoClear=!1;const p=new la({name:"PMREM.Background",side:gt,depthWrite:!1,depthTest:!1}),g=new Tt(new Ti,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Us),y=!0);for(let u=0;u<6;u++){const w=u%3;w===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):w===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const E=this._cubeSize;Yi(a,w*E,u>2?E:0,E,E),d.setRenderTarget(a),y&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===ei||e.mapping===ti;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Os()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bs());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new Tt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Yi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,za)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ns[(a-r-1)%Ns.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,a,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,a,"latitudinal",r),this._halfBlur(s,e,n,n,a,"longitudinal",r)}_halfBlur(e,t,n,a,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Tt(this._lodPlanes[a],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Cn-1),y=r/g,m=isFinite(r)?1+Math.floor(d*y):Cn;m>Cn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cn}`);const u=[];let w=0;for(let C=0;C<Cn;++C){const F=C/y,S=Math.exp(-F*F/2);u.push(S),C===0?w+=S:C<m&&(w+=2*S)}for(let C=0;C<u.length;C++)u[C]=u[C]/w;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-n;const x=this._sizeLods[a],N=3*x*(a>E-jn?a-E+jn:0),A=4*(this._cubeSize-x);Yi(t,N,A,3*x,2*x),l.setRenderTarget(t),l.render(f,za)}}function th(i){const e=[],t=[],n=[];let a=i;const r=i-jn+1+Is.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);t.push(o);let l=1/o;s>i-jn?l=Is[s-i+jn-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,g=6,y=3,m=2,u=1,w=new Float32Array(y*g*p),E=new Float32Array(m*g*p),x=new Float32Array(u*g*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,F=A>2?0:-1,S=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];w.set(S,y*g*A),E.set(h,m*g*A);const b=[A,A,A,A,A,A];x.set(b,u*g*A)}const N=new St;N.setAttribute("position",new Lt(w,y)),N.setAttribute("uv",new Lt(E,m)),N.setAttribute("faceIndex",new Lt(x,u)),e.push(N),a>jn&&a--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ks(i,e,t){const n=new Dn(i,e,t);return n.texture.mapping=ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yi(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function nh(i,e,t){const n=new Float32Array(Cn),a=new k(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Cn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Bs(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Os(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function jr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ih(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===sr||l===or,d=l===ei||l===ti;if(c||d){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Fs(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&a(p)?(t===null&&(t=new Fs(i)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function a(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function ah(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&gi("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function rh(i,e,t,n){const a={},r=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const y=h.morphAttributes[g];for(let m=0,u=y.length;m<u;m++)e.remove(y[m])}h.removeEventListener("dispose",s),delete a[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return a[h.id]===!0||(h.addEventListener("dispose",s),a[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const y=p[g];for(let m=0,u=y.length;m<u;m++)e.update(y[m],i.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let y=0;if(p!==null){const w=p.array;y=p.version;for(let E=0,x=w.length;E<x;E+=3){const N=w[E+0],A=w[E+1],C=w[E+2];h.push(N,A,A,C,C,N)}}else if(g!==void 0){const w=g.array;y=g.version;for(let E=0,x=w.length/3-1;E<x;E+=3){const N=E+0,A=E+1,C=E+2;h.push(N,A,A,C,C,N)}}else return;const m=new(Po(h)?No:Uo)(h,1);m.version=y;const u=r.get(f);u&&e.remove(u),r.set(f,m)}function d(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function sh(i,e,t){let n;function a(h){n=h}let r,s;function o(h){r=h.type,s=h.bytesPerElement}function l(h,p){i.drawElements(n,p,r,h*s),t.update(p,n,1)}function c(h,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,h*s,g),t.update(p,n,g))}function d(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,h,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];t.update(m,n,1)}function f(h,p,g,y){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/s,p[u],y[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,h,0,y,0,g);let u=0;for(let w=0;w<g;w++)u+=p[w]*y[w];t.update(u,n,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function oh(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function lh(i,e,t){const n=new WeakMap,a=new rt;function r(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let b=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var p=b;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),y===!0&&(x=2),m===!0&&(x=3);let N=o.attributes.position.count*x,A=1;N>e.maxTextureSize&&(A=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const C=new Float32Array(N*A*4*f),F=new Do(C,N,A,f);F.type=en,F.needsUpdate=!0;const S=x*4;for(let L=0;L<f;L++){const q=u[L],G=w[L],J=E[L],Q=N*A*4*L;for(let j=0;j<q.count;j++){const te=j*S;g===!0&&(a.fromBufferAttribute(q,j),C[Q+te+0]=a.x,C[Q+te+1]=a.y,C[Q+te+2]=a.z,C[Q+te+3]=0),y===!0&&(a.fromBufferAttribute(G,j),C[Q+te+4]=a.x,C[Q+te+5]=a.y,C[Q+te+6]=a.z,C[Q+te+7]=0),m===!0&&(a.fromBufferAttribute(J,j),C[Q+te+8]=a.x,C[Q+te+9]=a.y,C[Q+te+10]=a.z,C[Q+te+11]=J.itemSize===4?a.w:1)}}h={count:f,texture:F,size:new Xe(N,A)},n.set(o,h),o.addEventListener("dispose",b)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const y=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function ch(i,e,t,n){let a=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,f=e.get(l,d);if(a.get(f)!==c&&(e.update(f),a.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;a.get(h)!==c&&(h.update(),a.set(h,c))}return f}function s(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}class Ho extends vt{constructor(e,t,n,a,r,s,o,l,c,d=Zn){if(d!==Zn&&d!==ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Zn&&(n=Ln),n===void 0&&d===ii&&(n=ni),super(null,a,r,s,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ot,this.minFilter=l!==void 0?l:Ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Go=new vt,zs=new Ho(1,1),Vo=new Do,Wo=new jl,$o=new Bo,Hs=[],Gs=[],Vs=new Float32Array(16),Ws=new Float32Array(9),$s=new Float32Array(4);function oi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let r=Hs[a];if(r===void 0&&(r=new Float32Array(a),Hs[a]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(r,o)}return r}function ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ma(i,e){let t=Gs[e];t===void 0&&(t=new Int32Array(e),Gs[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function dh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function uh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2fv(this.addr,e),lt(t,e)}}function hh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;i.uniform3fv(this.addr,e),lt(t,e)}}function fh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4fv(this.addr,e),lt(t,e)}}function ph(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;$s.set(n),i.uniformMatrix2fv(this.addr,!1,$s),lt(t,n)}}function mh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;Ws.set(n),i.uniformMatrix3fv(this.addr,!1,Ws),lt(t,n)}}function gh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;Vs.set(n),i.uniformMatrix4fv(this.addr,!1,Vs),lt(t,n)}}function vh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function yh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2iv(this.addr,e),lt(t,e)}}function _h(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3iv(this.addr,e),lt(t,e)}}function bh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4iv(this.addr,e),lt(t,e)}}function xh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Sh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2uiv(this.addr,e),lt(t,e)}}function Mh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3uiv(this.addr,e),lt(t,e)}}function Eh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4uiv(this.addr,e),lt(t,e)}}function wh(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let r;this.type===i.SAMPLER_2D_SHADOW?(zs.compareFunction=Ro,r=zs):r=Go,t.setTexture2D(e||r,a)}function Th(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||Wo,a)}function Ah(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||$o,a)}function Ch(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||Vo,a)}function Rh(i){switch(i){case 5126:return dh;case 35664:return uh;case 35665:return hh;case 35666:return fh;case 35674:return ph;case 35675:return mh;case 35676:return gh;case 5124:case 35670:return vh;case 35667:case 35671:return yh;case 35668:case 35672:return _h;case 35669:case 35673:return bh;case 5125:return xh;case 36294:return Sh;case 36295:return Mh;case 36296:return Eh;case 35678:case 36198:case 36298:case 36306:case 35682:return wh;case 35679:case 36299:case 36307:return Th;case 35680:case 36300:case 36308:case 36293:return Ah;case 36289:case 36303:case 36311:case 36292:return Ch}}function Ph(i,e){i.uniform1fv(this.addr,e)}function Lh(i,e){const t=oi(e,this.size,2);i.uniform2fv(this.addr,t)}function Dh(i,e){const t=oi(e,this.size,3);i.uniform3fv(this.addr,t)}function Ih(i,e){const t=oi(e,this.size,4);i.uniform4fv(this.addr,t)}function Uh(i,e){const t=oi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Nh(i,e){const t=oi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Fh(i,e){const t=oi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function kh(i,e){i.uniform1iv(this.addr,e)}function Bh(i,e){i.uniform2iv(this.addr,e)}function Oh(i,e){i.uniform3iv(this.addr,e)}function zh(i,e){i.uniform4iv(this.addr,e)}function Hh(i,e){i.uniform1uiv(this.addr,e)}function Gh(i,e){i.uniform2uiv(this.addr,e)}function Vh(i,e){i.uniform3uiv(this.addr,e)}function Wh(i,e){i.uniform4uiv(this.addr,e)}function $h(i,e,t){const n=this.cache,a=e.length,r=ma(t,a);ot(n,r)||(i.uniform1iv(this.addr,r),lt(n,r));for(let s=0;s!==a;++s)t.setTexture2D(e[s]||Go,r[s])}function Xh(i,e,t){const n=this.cache,a=e.length,r=ma(t,a);ot(n,r)||(i.uniform1iv(this.addr,r),lt(n,r));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||Wo,r[s])}function qh(i,e,t){const n=this.cache,a=e.length,r=ma(t,a);ot(n,r)||(i.uniform1iv(this.addr,r),lt(n,r));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||$o,r[s])}function Yh(i,e,t){const n=this.cache,a=e.length,r=ma(t,a);ot(n,r)||(i.uniform1iv(this.addr,r),lt(n,r));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||Vo,r[s])}function jh(i){switch(i){case 5126:return Ph;case 35664:return Lh;case 35665:return Dh;case 35666:return Ih;case 35674:return Uh;case 35675:return Nh;case 35676:return Fh;case 5124:case 35670:return kh;case 35667:case 35671:return Bh;case 35668:case 35672:return Oh;case 35669:case 35673:return zh;case 5125:return Hh;case 36294:return Gh;case 36295:return Vh;case 36296:return Wh;case 35678:case 36198:case 36298:case 36306:case 35682:return $h;case 35679:case 36299:case 36307:return Xh;case 35680:case 36300:case 36308:case 36293:return qh;case 36289:case 36303:case 36311:case 36292:return Yh}}class Kh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Rh(t.type)}}class Zh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jh(t.type)}}class Jh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,t[o.id],n)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function Xs(i,e){i.seq.push(e),i.map[e.id]=e}function Qh(i,e,t){const n=i.name,a=n.length;for($a.lastIndex=0;;){const r=$a.exec(n),s=$a.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){Xs(t,c===void 0?new Kh(o,i,e):new Zh(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Jh(o),Xs(t,f)),t=f}}}class ra{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const r=e.getActiveUniform(t,a),s=e.getUniformLocation(t,r.name);Qh(r,s,this)}}setValue(e,t,n,a){const r=this.map[t];r!==void 0&&r.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in t&&n.push(s)}return n}}function qs(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ef=37297;let tf=0;function nf(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=a;s<r;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const Ys=new ke;function af(i){We._getMatrix(Ys,We.workingColorSpace,i);const e=`mat3( ${Ys.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(i)){case ha:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function js(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=i.getShaderInfoLog(e).trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+nf(i.getShaderSource(e),s)}else return a}function rf(i,e){const t=af(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sf(i,e){let t;switch(e){case Sl:t="Linear";break;case Ml:t="Reinhard";break;case El:t="Cineon";break;case wl:t="ACESFilmic";break;case Al:t="AgX";break;case Cl:t="Neutral";break;case Tl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ji=new k;function of(){We.getLuminanceCoefficients(ji);const i=ji.x.toFixed(4),e=ji.y.toFixed(4),t=ji.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vi).join(`
`)}function cf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function df(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const r=i.getActiveAttrib(e,a),s=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function vi(i){return i!==""}function Ks(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zs(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uf=/^[ \t]*#include +<([\w\d./]+)>/gm;function kr(i){return i.replace(uf,ff)}const hf=new Map;function ff(i,e){let t=Oe[e];if(t===void 0){const n=hf.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return kr(t)}const pf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Js(i){return i.replace(pf,mf)}function mf(i,e,t,n){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Qs(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===mo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===tl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qt&&(e="SHADOWMAP_TYPE_VSM"),e}function vf(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ei:case ti:e="ENVMAP_TYPE_CUBE";break;case ua:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ti:e="ENVMAP_MODE_REFRACTION";break}return e}function _f(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case go:e="ENVMAP_BLENDING_MULTIPLY";break;case bl:e="ENVMAP_BLENDING_MIX";break;case xl:e="ENVMAP_BLENDING_ADD";break}return e}function bf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function xf(i,e,t,n){const a=i.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=gf(t),c=vf(t),d=yf(t),f=_f(t),h=bf(t),p=lf(t),g=cf(r),y=a.createProgram();let m,u,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vi).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vi).join(`
`),u.length>0&&(u+=`
`)):(m=[Qs(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vi).join(`
`),u=[Qs(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gn?"#define TONE_MAPPING":"",t.toneMapping!==gn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==gn?sf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,rf("linearToOutputTexel",t.outputColorSpace),of(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vi).join(`
`)),s=kr(s),s=Ks(s,t),s=Zs(s,t),o=kr(o),o=Ks(o,t),o=Zs(o,t),s=Js(s),o=Js(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===hs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const E=w+m+s,x=w+u+o,N=qs(a,a.VERTEX_SHADER,E),A=qs(a,a.FRAGMENT_SHADER,x);a.attachShader(y,N),a.attachShader(y,A),t.index0AttributeName!==void 0?a.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function C(L){if(i.debug.checkShaderErrors){const q=a.getProgramInfoLog(y).trim(),G=a.getShaderInfoLog(N).trim(),J=a.getShaderInfoLog(A).trim();let Q=!0,j=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,y,N,A);else{const te=js(a,N,"vertex"),V=js(a,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+q+`
`+te+`
`+V)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(G===""||J==="")&&(j=!1);j&&(L.diagnostics={runnable:Q,programLog:q,vertexShader:{log:G,prefix:m},fragmentShader:{log:J,prefix:u}})}a.deleteShader(N),a.deleteShader(A),F=new ra(a,y),S=df(a,y)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=a.getProgramParameter(y,ef)),b},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tf++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=N,this.fragmentShader=A,this}let Sf=0;class Mf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,a=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ef(e),t.set(e,n)),n}}class Ef{constructor(e){this.id=Sf++,this.code=e,this.usedTimes=0}}function wf(i,e,t,n,a,r,s){const o=new qr,l=new Mf,c=new Set,d=[],f=a.logarithmicDepthBuffer,h=a.vertexTextures;let p=a.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,b,L,q,G){const J=q.fog,Q=G.geometry,j=S.isMeshStandardMaterial?q.environment:null,te=(S.isMeshStandardMaterial?t:e).get(S.envMap||j),V=te&&te.mapping===ua?te.image.height:null,le=g[S.type];S.precision!==null&&(p=a.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const P=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,T=P!==void 0?P.length:0;let ie=0;Q.morphAttributes.position!==void 0&&(ie=1),Q.morphAttributes.normal!==void 0&&(ie=2),Q.morphAttributes.color!==void 0&&(ie=3);let ce,B,$,ne;if(le){const Ke=Ht[le];ce=Ke.vertexShader,B=Ke.fragmentShader}else ce=S.vertexShader,B=S.fragmentShader,l.update(S),$=l.getVertexShaderID(S),ne=l.getFragmentShaderID(S);const X=i.getRenderTarget(),se=i.state.buffers.depth.getReversed(),pe=G.isInstancedMesh===!0,be=G.isBatchedMesh===!0,Re=!!S.map,Te=!!S.matcap,ze=!!te,R=!!S.aoMap,Je=!!S.lightMap,Pe=!!S.bumpMap,Le=!!S.normalMap,xe=!!S.displacementMap,Ve=!!S.emissiveMap,_e=!!S.metalnessMap,M=!!S.roughnessMap,v=S.anisotropy>0,O=S.clearcoat>0,K=S.dispersion>0,ee=S.iridescence>0,Y=S.sheen>0,Se=S.transmission>0,de=v&&!!S.anisotropyMap,ge=O&&!!S.clearcoatMap,He=O&&!!S.clearcoatNormalMap,ae=O&&!!S.clearcoatRoughnessMap,ve=ee&&!!S.iridescenceMap,Ce=ee&&!!S.iridescenceThicknessMap,De=Y&&!!S.sheenColorMap,ye=Y&&!!S.sheenRoughnessMap,Ge=!!S.specularMap,Be=!!S.specularColorMap,Qe=!!S.specularIntensityMap,D=Se&&!!S.transmissionMap,ue=Se&&!!S.thicknessMap,W=!!S.gradientMap,Z=!!S.alphaMap,me=S.alphaTest>0,he=!!S.alphaHash,Ue=!!S.extensions;let at=gn;S.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(at=i.toneMapping);const ut={shaderID:le,shaderType:S.type,shaderName:S.name,vertexShader:ce,fragmentShader:B,defines:S.defines,customVertexShaderID:$,customFragmentShaderID:ne,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:be,batchingColor:be&&G._colorsTexture!==null,instancing:pe,instancingColor:pe&&G.instanceColor!==null,instancingMorph:pe&&G.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ri,alphaToCoverage:!!S.alphaToCoverage,map:Re,matcap:Te,envMap:ze,envMapMode:ze&&te.mapping,envMapCubeUVHeight:V,aoMap:R,lightMap:Je,bumpMap:Pe,normalMap:Le,displacementMap:h&&xe,emissiveMap:Ve,normalMapObjectSpace:Le&&S.normalMapType===Dl,normalMapTangentSpace:Le&&S.normalMapType===Co,metalnessMap:_e,roughnessMap:M,anisotropy:v,anisotropyMap:de,clearcoat:O,clearcoatMap:ge,clearcoatNormalMap:He,clearcoatRoughnessMap:ae,dispersion:K,iridescence:ee,iridescenceMap:ve,iridescenceThicknessMap:Ce,sheen:Y,sheenColorMap:De,sheenRoughnessMap:ye,specularMap:Ge,specularColorMap:Be,specularIntensityMap:Qe,transmission:Se,transmissionMap:D,thicknessMap:ue,gradientMap:W,opaque:S.transparent===!1&&S.blending===Kn&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:me,alphaHash:he,combine:S.combine,mapUv:Re&&y(S.map.channel),aoMapUv:R&&y(S.aoMap.channel),lightMapUv:Je&&y(S.lightMap.channel),bumpMapUv:Pe&&y(S.bumpMap.channel),normalMapUv:Le&&y(S.normalMap.channel),displacementMapUv:xe&&y(S.displacementMap.channel),emissiveMapUv:Ve&&y(S.emissiveMap.channel),metalnessMapUv:_e&&y(S.metalnessMap.channel),roughnessMapUv:M&&y(S.roughnessMap.channel),anisotropyMapUv:de&&y(S.anisotropyMap.channel),clearcoatMapUv:ge&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:He&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:De&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:ye&&y(S.sheenRoughnessMap.channel),specularMapUv:Ge&&y(S.specularMap.channel),specularColorMapUv:Be&&y(S.specularColorMap.channel),specularIntensityMapUv:Qe&&y(S.specularIntensityMap.channel),transmissionMapUv:D&&y(S.transmissionMap.channel),thicknessMapUv:ue&&y(S.thicknessMap.channel),alphaMapUv:Z&&y(S.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Le||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Q.attributes.uv&&(Re||Z),fog:!!J,useFog:S.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:se,skinning:G.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:ie,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:at,decodeVideoTexture:Re&&S.map.isVideoTexture===!0&&We.getTransfer(S.map.colorSpace)===Ze,decodeVideoTextureEmissive:Ve&&S.emissiveMap.isVideoTexture===!0&&We.getTransfer(S.emissiveMap.colorSpace)===Ze,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Gt,flipSided:S.side===gt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ue&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&S.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function u(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)b.push(L),b.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(w(b,S),E(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function w(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function E(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const b=g[S.type];let L;if(b){const q=Ht[b];L=oc.clone(q.uniforms)}else L=S.uniforms;return L}function N(S,b){let L;for(let q=0,G=d.length;q<G;q++){const J=d[q];if(J.cacheKey===b){L=J,++L.usedTimes;break}}return L===void 0&&(L=new xf(i,b,S,r),d.push(L)),L}function A(S){if(--S.usedTimes===0){const b=d.indexOf(S);d[b]=d[d.length-1],d.pop(),S.destroy()}}function C(S){l.remove(S)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:x,acquireProgram:N,releaseProgram:A,releaseShaderCache:C,programs:d,dispose:F}}function Tf(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function a(s,o,l){i.get(s)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:r}}function Af(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function eo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function to(){const i=[];let e=0;const t=[],n=[],a=[];function r(){e=0,t.length=0,n.length=0,a.length=0}function s(f,h,p,g,y,m){let u=i[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:y,group:m},i[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=p,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=y,u.group=m),e++,u}function o(f,h,p,g,y,m){const u=s(f,h,p,g,y,m);p.transmission>0?n.push(u):p.transparent===!0?a.push(u):t.push(u)}function l(f,h,p,g,y,m){const u=s(f,h,p,g,y,m);p.transmission>0?n.unshift(u):p.transparent===!0?a.unshift(u):t.unshift(u)}function c(f,h){t.length>1&&t.sort(f||Af),n.length>1&&n.sort(h||eo),a.length>1&&a.sort(h||eo)}function d(){for(let f=e,h=i.length;f<h;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:a,init:r,push:o,unshift:l,finish:d,sort:c}}function Cf(){let i=new WeakMap;function e(n,a){const r=i.get(n);let s;return r===void 0?(s=new to,i.set(n,[s])):a>=r.length?(s=new to,r.push(s)):s=r[a],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Rf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new $e};break;case"SpotLight":t={position:new k,direction:new k,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function Pf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Lf=0;function Df(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function If(i){const e=new Rf,t=Pf(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const a=new k,r=new tt,s=new tt;function o(c){let d=0,f=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,y=0,m=0,u=0,w=0,E=0,x=0,N=0,A=0,C=0;c.sort(Df);for(let S=0,b=c.length;S<b;S++){const L=c[S],q=L.color,G=L.intensity,J=L.distance,Q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=q.r*G,f+=q.g*G,h+=q.b*G;else if(L.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(L.sh.coefficients[j],G);C++}else if(L.isDirectionalLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const te=L.shadow,V=t.get(L);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=L.shadow.matrix,w++}n.directional[p]=j,p++}else if(L.isSpotLight){const j=e.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(q).multiplyScalar(G),j.distance=J,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,n.spot[y]=j;const te=L.shadow;if(L.map&&(n.spotLightMap[N]=L.map,N++,te.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[y]=te.matrix,L.castShadow){const V=t.get(L);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,n.spotShadow[y]=V,n.spotShadowMap[y]=Q,x++}y++}else if(L.isRectAreaLight){const j=e.get(L);j.color.copy(q).multiplyScalar(G),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=j,m++}else if(L.isPointLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),j.distance=L.distance,j.decay=L.decay,L.castShadow){const te=L.shadow,V=t.get(L);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,V.shadowCameraNear=te.camera.near,V.shadowCameraFar=te.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=L.shadow.matrix,E++}n.point[g]=j,g++}else if(L.isHemisphereLight){const j=e.get(L);j.skyColor.copy(L.color).multiplyScalar(G),j.groundColor.copy(L.groundColor).multiplyScalar(G),n.hemi[u]=j,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=h;const F=n.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==y||F.rectAreaLength!==m||F.hemiLength!==u||F.numDirectionalShadows!==w||F.numPointShadows!==E||F.numSpotShadows!==x||F.numSpotMaps!==N||F.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=x+N-A,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,F.directionalLength=p,F.pointLength=g,F.spotLength=y,F.rectAreaLength=m,F.hemiLength=u,F.numDirectionalShadows=w,F.numPointShadows=E,F.numSpotShadows=x,F.numSpotMaps=N,F.numLightProbes=C,n.version=Lf++)}function l(c,d){let f=0,h=0,p=0,g=0,y=0;const m=d.matrixWorldInverse;for(let u=0,w=c.length;u<w;u++){const E=c[u];if(E.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(a),x.direction.transformDirection(m),f++}else if(E.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(a),x.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),s.identity(),r.copy(E.matrixWorld),r.premultiply(m),s.extractRotation(r),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),g++}else if(E.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const x=n.hemi[y];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:n}}function no(i){const e=new If(i),t=[],n=[];function a(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function s(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function Uf(i){let e=new WeakMap;function t(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new no(i),e.set(a,[o])):r>=s.length?(o=new no(i),s.push(o)):o=s[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Nf extends In{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Pl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ff extends In{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Of(i,e,t){let n=new Yr;const a=new Xe,r=new Xe,s=new rt,o=new Nf({depthPacking:Ll}),l=new Ff,c={},d=t.maxTextureSize,f={[vn]:gt,[gt]:vn,[Gt]:Gt},h=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:kf,fragmentShader:Bf}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new St;g.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Tt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mo;let u=this.type;this.render=function(A,C,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=i.getRenderTarget(),b=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),q=i.state;q.setBlending(mn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const G=u!==Qt&&this.type===Qt,J=u===Qt&&this.type!==Qt;for(let Q=0,j=A.length;Q<j;Q++){const te=A[Q],V=te.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);const le=V.getFrameExtents();if(a.multiply(le),r.copy(V.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(r.x=Math.floor(d/le.x),a.x=r.x*le.x,V.mapSize.x=r.x),a.y>d&&(r.y=Math.floor(d/le.y),a.y=r.y*le.y,V.mapSize.y=r.y)),V.map===null||G===!0||J===!0){const T=this.type!==Qt?{minFilter:Ot,magFilter:Ot}:{};V.map!==null&&V.map.dispose(),V.map=new Dn(a.x,a.y,T),V.map.texture.name=te.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const P=V.getViewportCount();for(let T=0;T<P;T++){const ie=V.getViewport(T);s.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),q.viewport(s),V.updateMatrices(te,T),n=V.getFrustum(),x(C,F,V.camera,te,this.type)}V.isPointLightShadow!==!0&&this.type===Qt&&w(V,F),V.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(S,b,L)};function w(A,C){const F=e.update(y);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Dn(a.x,a.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,F,h,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,F,p,y,null)}function E(A,C,F,S){let b=null;const L=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)b=L;else if(b=F.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const q=b.uuid,G=C.uuid;let J=c[q];J===void 0&&(J={},c[q]=J);let Q=J[G];Q===void 0&&(Q=b.clone(),J[G]=Q,C.addEventListener("dispose",N)),b=Q}if(b.visible=C.visible,b.wireframe=C.wireframe,S===Qt?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:f[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const q=i.properties.get(b);q.light=F}return b}function x(A,C,F,S,b){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Qt)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);const G=e.update(A),J=A.material;if(Array.isArray(J)){const Q=G.groups;for(let j=0,te=Q.length;j<te;j++){const V=Q[j],le=J[V.materialIndex];if(le&&le.visible){const P=E(A,le,S,b);A.onBeforeShadow(i,A,C,F,G,P,V),i.renderBufferDirect(F,null,G,P,A,V),A.onAfterShadow(i,A,C,F,G,P,V)}}}else if(J.visible){const Q=E(A,J,S,b);A.onBeforeShadow(i,A,C,F,G,Q,null),i.renderBufferDirect(F,null,G,Q,A,null),A.onAfterShadow(i,A,C,F,G,Q,null)}}const q=A.children;for(let G=0,J=q.length;G<J;G++)x(q[G],C,F,S,b)}function N(A){A.target.removeEventListener("dispose",N);for(const F in c){const S=c[F],b=A.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const zf={[Qa]:er,[tr]:ar,[nr]:rr,[Qn]:ir,[er]:Qa,[ar]:tr,[rr]:nr,[ir]:Qn};function Hf(i,e){function t(){let D=!1;const ue=new rt;let W=null;const Z=new rt(0,0,0,0);return{setMask:function(me){W!==me&&!D&&(i.colorMask(me,me,me,me),W=me)},setLocked:function(me){D=me},setClear:function(me,he,Ue,at,ut){ut===!0&&(me*=at,he*=at,Ue*=at),ue.set(me,he,Ue,at),Z.equals(ue)===!1&&(i.clearColor(me,he,Ue,at),Z.copy(ue))},reset:function(){D=!1,W=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,ue=!1,W=null,Z=null,me=null;return{setReversed:function(he){if(ue!==he){const Ue=e.get("EXT_clip_control");ue?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT);const at=me;me=null,this.setClear(at)}ue=he},getReversed:function(){return ue},setTest:function(he){he?X(i.DEPTH_TEST):se(i.DEPTH_TEST)},setMask:function(he){W!==he&&!D&&(i.depthMask(he),W=he)},setFunc:function(he){if(ue&&(he=zf[he]),Z!==he){switch(he){case Qa:i.depthFunc(i.NEVER);break;case er:i.depthFunc(i.ALWAYS);break;case tr:i.depthFunc(i.LESS);break;case Qn:i.depthFunc(i.LEQUAL);break;case nr:i.depthFunc(i.EQUAL);break;case ir:i.depthFunc(i.GEQUAL);break;case ar:i.depthFunc(i.GREATER);break;case rr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=he}},setLocked:function(he){D=he},setClear:function(he){me!==he&&(ue&&(he=1-he),i.clearDepth(he),me=he)},reset:function(){D=!1,W=null,Z=null,me=null,ue=!1}}}function a(){let D=!1,ue=null,W=null,Z=null,me=null,he=null,Ue=null,at=null,ut=null;return{setTest:function(Ke){D||(Ke?X(i.STENCIL_TEST):se(i.STENCIL_TEST))},setMask:function(Ke){ue!==Ke&&!D&&(i.stencilMask(Ke),ue=Ke)},setFunc:function(Ke,Dt,$t){(W!==Ke||Z!==Dt||me!==$t)&&(i.stencilFunc(Ke,Dt,$t),W=Ke,Z=Dt,me=$t)},setOp:function(Ke,Dt,$t){(he!==Ke||Ue!==Dt||at!==$t)&&(i.stencilOp(Ke,Dt,$t),he=Ke,Ue=Dt,at=$t)},setLocked:function(Ke){D=Ke},setClear:function(Ke){ut!==Ke&&(i.clearStencil(Ke),ut=Ke)},reset:function(){D=!1,ue=null,W=null,Z=null,me=null,he=null,Ue=null,at=null,ut=null}}}const r=new t,s=new n,o=new a,l=new WeakMap,c=new WeakMap;let d={},f={},h=new WeakMap,p=[],g=null,y=!1,m=null,u=null,w=null,E=null,x=null,N=null,A=null,C=new $e(0,0,0),F=0,S=!1,b=null,L=null,q=null,G=null,J=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,te=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(V)[1]),j=te>=1):V.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),j=te>=2);let le=null,P={};const T=i.getParameter(i.SCISSOR_BOX),ie=i.getParameter(i.VIEWPORT),ce=new rt().fromArray(T),B=new rt().fromArray(ie);function $(D,ue,W,Z){const me=new Uint8Array(4),he=i.createTexture();i.bindTexture(D,he),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<W;Ue++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(ue+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return he}const ne={};ne[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),ne[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ne[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),X(i.DEPTH_TEST),s.setFunc(Qn),Pe(!1),Le(os),X(i.CULL_FACE),R(mn);function X(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function se(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function pe(D,ue){return f[D]!==ue?(i.bindFramebuffer(D,ue),f[D]=ue,D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ue),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function be(D,ue){let W=p,Z=!1;if(D){W=h.get(ue),W===void 0&&(W=[],h.set(ue,W));const me=D.textures;if(W.length!==me.length||W[0]!==i.COLOR_ATTACHMENT0){for(let he=0,Ue=me.length;he<Ue;he++)W[he]=i.COLOR_ATTACHMENT0+he;W.length=me.length,Z=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,Z=!0);Z&&i.drawBuffers(W)}function Re(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const Te={[An]:i.FUNC_ADD,[il]:i.FUNC_SUBTRACT,[al]:i.FUNC_REVERSE_SUBTRACT};Te[rl]=i.MIN,Te[sl]=i.MAX;const ze={[ol]:i.ZERO,[ll]:i.ONE,[cl]:i.SRC_COLOR,[Za]:i.SRC_ALPHA,[ml]:i.SRC_ALPHA_SATURATE,[fl]:i.DST_COLOR,[ul]:i.DST_ALPHA,[dl]:i.ONE_MINUS_SRC_COLOR,[Ja]:i.ONE_MINUS_SRC_ALPHA,[pl]:i.ONE_MINUS_DST_COLOR,[hl]:i.ONE_MINUS_DST_ALPHA,[gl]:i.CONSTANT_COLOR,[vl]:i.ONE_MINUS_CONSTANT_COLOR,[yl]:i.CONSTANT_ALPHA,[_l]:i.ONE_MINUS_CONSTANT_ALPHA};function R(D,ue,W,Z,me,he,Ue,at,ut,Ke){if(D===mn){y===!0&&(se(i.BLEND),y=!1);return}if(y===!1&&(X(i.BLEND),y=!0),D!==nl){if(D!==m||Ke!==S){if((u!==An||x!==An)&&(i.blendEquation(i.FUNC_ADD),u=An,x=An),Ke)switch(D){case Kn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ka:i.blendFunc(i.ONE,i.ONE);break;case ls:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cs:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Kn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ka:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ls:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cs:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,E=null,N=null,A=null,C.set(0,0,0),F=0,m=D,S=Ke}return}me=me||ue,he=he||W,Ue=Ue||Z,(ue!==u||me!==x)&&(i.blendEquationSeparate(Te[ue],Te[me]),u=ue,x=me),(W!==w||Z!==E||he!==N||Ue!==A)&&(i.blendFuncSeparate(ze[W],ze[Z],ze[he],ze[Ue]),w=W,E=Z,N=he,A=Ue),(at.equals(C)===!1||ut!==F)&&(i.blendColor(at.r,at.g,at.b,ut),C.copy(at),F=ut),m=D,S=!1}function Je(D,ue){D.side===Gt?se(i.CULL_FACE):X(i.CULL_FACE);let W=D.side===gt;ue&&(W=!W),Pe(W),D.blending===Kn&&D.transparent===!1?R(mn):R(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const Z=D.stencilWrite;o.setTest(Z),Z&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ve(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(D){b!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),b=D)}function Le(D){D!==Qo?(X(i.CULL_FACE),D!==L&&(D===os?i.cullFace(i.BACK):D===el?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):se(i.CULL_FACE),L=D}function xe(D){D!==q&&(j&&i.lineWidth(D),q=D)}function Ve(D,ue,W){D?(X(i.POLYGON_OFFSET_FILL),(G!==ue||J!==W)&&(i.polygonOffset(ue,W),G=ue,J=W)):se(i.POLYGON_OFFSET_FILL)}function _e(D){D?X(i.SCISSOR_TEST):se(i.SCISSOR_TEST)}function M(D){D===void 0&&(D=i.TEXTURE0+Q-1),le!==D&&(i.activeTexture(D),le=D)}function v(D,ue,W){W===void 0&&(le===null?W=i.TEXTURE0+Q-1:W=le);let Z=P[W];Z===void 0&&(Z={type:void 0,texture:void 0},P[W]=Z),(Z.type!==D||Z.texture!==ue)&&(le!==W&&(i.activeTexture(W),le=W),i.bindTexture(D,ue||ne[D]),Z.type=D,Z.texture=ue)}function O(){const D=P[le];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function He(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(D){ce.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ce.copy(D))}function ye(D){B.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),B.copy(D))}function Ge(D,ue){let W=c.get(ue);W===void 0&&(W=new WeakMap,c.set(ue,W));let Z=W.get(D);Z===void 0&&(Z=i.getUniformBlockIndex(ue,D.name),W.set(D,Z))}function Be(D,ue){const Z=c.get(ue).get(D);l.get(ue)!==Z&&(i.uniformBlockBinding(ue,Z,D.__bindingPointIndex),l.set(ue,Z))}function Qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},le=null,P={},f={},h=new WeakMap,p=[],g=null,y=!1,m=null,u=null,w=null,E=null,x=null,N=null,A=null,C=new $e(0,0,0),F=0,S=!1,b=null,L=null,q=null,G=null,J=null,ce.set(0,0,i.canvas.width,i.canvas.height),B.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:X,disable:se,bindFramebuffer:pe,drawBuffers:be,useProgram:Re,setBlending:R,setMaterial:Je,setFlipSided:Pe,setCullFace:Le,setLineWidth:xe,setPolygonOffset:Ve,setScissorTest:_e,activeTexture:M,bindTexture:v,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:ee,texImage2D:ve,texImage3D:Ce,updateUBOMapping:Ge,uniformBlockBinding:Be,texStorage2D:He,texStorage3D:ae,texSubImage2D:Y,texSubImage3D:Se,compressedTexSubImage2D:de,compressedTexSubImage3D:ge,scissor:De,viewport:ye,reset:Qe}}function io(i,e,t,n){const a=Gf(n);switch(t){case xo:return i*e;case Mo:return i*e;case Eo:return i*e*2;case wo:return i*e/a.components*a.byteLength;case Wr:return i*e/a.components*a.byteLength;case To:return i*e*2/a.components*a.byteLength;case $r:return i*e*2/a.components*a.byteLength;case So:return i*e*3/a.components*a.byteLength;case Bt:return i*e*4/a.components*a.byteLength;case Xr:return i*e*4/a.components*a.byteLength;case ea:case ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case na:case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ur:case fr:return Math.max(i,16)*Math.max(e,8)/4;case dr:case hr:return Math.max(i,8)*Math.max(e,8)/2;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _r:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case br:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case xr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Sr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Mr:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Er:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case wr:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Tr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ar:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Cr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Rr:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Pr:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case aa:case Lr:case Dr:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ao:case Ir:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ur:case Nr:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gf(i){switch(i){case an:case yo:return{byteLength:1,components:1};case bi:case _o:case xi:return{byteLength:2,components:1};case Gr:case Vr:return{byteLength:2,components:4};case Ln:case Hr:case en:return{byteLength:4,components:1};case bo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Vf(i,e,t,n,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,v){return p?new OffscreenCanvas(M,v):oa("canvas")}function y(M,v,O){let K=1;const ee=_e(M);if((ee.width>O||ee.height>O)&&(K=O/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const Y=Math.floor(K*ee.width),Se=Math.floor(K*ee.height);f===void 0&&(f=g(Y,Se));const de=v?g(Y,Se):f;return de.width=Y,de.height=Se,de.getContext("2d").drawImage(M,0,0,Y,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Y+"x"+Se+")."),de}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),M;return M}function m(M){return M.generateMipmaps}function u(M){i.generateMipmap(M)}function w(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(M,v,O,K,ee=!1){if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Y=v;if(v===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),v===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),v===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),v===i.RGBA){const Se=ee?ha:We.getTransfer(K);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=Se===Ze?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(M,v){let O;return M?v===null||v===Ln||v===ni?O=i.DEPTH24_STENCIL8:v===en?O=i.DEPTH32F_STENCIL8:v===bi&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ln||v===ni?O=i.DEPTH_COMPONENT24:v===en?O=i.DEPTH_COMPONENT32F:v===bi&&(O=i.DEPTH_COMPONENT16),O}function N(M,v){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Ot&&M.minFilter!==Vt?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function A(M){const v=M.target;v.removeEventListener("dispose",A),F(v),v.isVideoTexture&&d.delete(v)}function C(M){const v=M.target;v.removeEventListener("dispose",C),b(v)}function F(M){const v=n.get(M);if(v.__webglInit===void 0)return;const O=M.source,K=h.get(O);if(K){const ee=K[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&S(M),Object.keys(K).length===0&&h.delete(O)}n.remove(M)}function S(M){const v=n.get(M);i.deleteTexture(v.__webglTexture);const O=M.source,K=h.get(O);delete K[v.__cacheKey],s.memory.textures--}function b(M){const v=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let ee=0;ee<v.__webglFramebuffer[K].length;ee++)i.deleteFramebuffer(v.__webglFramebuffer[K][ee]);else i.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)i.deleteFramebuffer(v.__webglFramebuffer[K]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=M.textures;for(let K=0,ee=O.length;K<ee;K++){const Y=n.get(O[K]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),s.memory.textures--),n.remove(O[K])}n.remove(M)}let L=0;function q(){L=0}function G(){const M=L;return M>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+a.maxTextures),L+=1,M}function J(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function Q(M,v){const O=n.get(M);if(M.isVideoTexture&&xe(M),M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){const K=M.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(O,M,v);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function j(M,v){const O=n.get(M);if(M.version>0&&O.__version!==M.version){B(O,M,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function te(M,v){const O=n.get(M);if(M.version>0&&O.__version!==M.version){B(O,M,v);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function V(M,v){const O=n.get(M);if(M.version>0&&O.__version!==M.version){$(O,M,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}const le={[lr]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[cr]:i.MIRRORED_REPEAT},P={[Ot]:i.NEAREST,[Rl]:i.NEAREST_MIPMAP_NEAREST,[Ri]:i.NEAREST_MIPMAP_LINEAR,[Vt]:i.LINEAR,[va]:i.LINEAR_MIPMAP_NEAREST,[Pn]:i.LINEAR_MIPMAP_LINEAR},T={[Il]:i.NEVER,[Ol]:i.ALWAYS,[Ul]:i.LESS,[Ro]:i.LEQUAL,[Nl]:i.EQUAL,[Bl]:i.GEQUAL,[Fl]:i.GREATER,[kl]:i.NOTEQUAL};function ie(M,v){if(v.type===en&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Vt||v.magFilter===va||v.magFilter===Ri||v.magFilter===Pn||v.minFilter===Vt||v.minFilter===va||v.minFilter===Ri||v.minFilter===Pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,le[v.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,le[v.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,le[v.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,P[v.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,P[v.minFilter]),v.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,T[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ot||v.minFilter!==Ri&&v.minFilter!==Pn||v.type===en&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(M,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,a.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ce(M,v){let O=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",A));const K=v.source;let ee=h.get(K);ee===void 0&&(ee={},h.set(K,ee));const Y=J(v);if(Y!==M.__cacheKey){ee[Y]===void 0&&(ee[Y]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,O=!0),ee[Y].usedTimes++;const Se=ee[M.__cacheKey];Se!==void 0&&(ee[M.__cacheKey].usedTimes--,Se.usedTimes===0&&S(v)),M.__cacheKey=Y,M.__webglTexture=ee[Y].texture}return O}function B(M,v,O){let K=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=i.TEXTURE_3D);const ee=ce(M,v),Y=v.source;t.bindTexture(K,M.__webglTexture,i.TEXTURE0+O);const Se=n.get(Y);if(Y.version!==Se.__version||ee===!0){t.activeTexture(i.TEXTURE0+O);const de=We.getPrimaries(We.workingColorSpace),ge=v.colorSpace===pn?null:We.getPrimaries(v.colorSpace),He=v.colorSpace===pn||de===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let ae=y(v.image,!1,a.maxTextureSize);ae=Ve(v,ae);const ve=r.convert(v.format,v.colorSpace),Ce=r.convert(v.type);let De=E(v.internalFormat,ve,Ce,v.colorSpace,v.isVideoTexture);ie(K,v);let ye;const Ge=v.mipmaps,Be=v.isVideoTexture!==!0,Qe=Se.__version===void 0||ee===!0,D=Y.dataReady,ue=N(v,ae);if(v.isDepthTexture)De=x(v.format===ii,v.type),Qe&&(Be?t.texStorage2D(i.TEXTURE_2D,1,De,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,De,ae.width,ae.height,0,ve,Ce,null));else if(v.isDataTexture)if(Ge.length>0){Be&&Qe&&t.texStorage2D(i.TEXTURE_2D,ue,De,Ge[0].width,Ge[0].height);for(let W=0,Z=Ge.length;W<Z;W++)ye=Ge[W],Be?D&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,ye.width,ye.height,ve,Ce,ye.data):t.texImage2D(i.TEXTURE_2D,W,De,ye.width,ye.height,0,ve,Ce,ye.data);v.generateMipmaps=!1}else Be?(Qe&&t.texStorage2D(i.TEXTURE_2D,ue,De,ae.width,ae.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,ve,Ce,ae.data)):t.texImage2D(i.TEXTURE_2D,0,De,ae.width,ae.height,0,ve,Ce,ae.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Be&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,De,Ge[0].width,Ge[0].height,ae.depth);for(let W=0,Z=Ge.length;W<Z;W++)if(ye=Ge[W],v.format!==Bt)if(ve!==null)if(Be){if(D)if(v.layerUpdates.size>0){const me=io(ye.width,ye.height,v.format,v.type);for(const he of v.layerUpdates){const Ue=ye.data.subarray(he*me/ye.data.BYTES_PER_ELEMENT,(he+1)*me/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,he,ye.width,ye.height,1,ve,Ue)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,ye.width,ye.height,ae.depth,ve,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,De,ye.width,ye.height,ae.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,ye.width,ye.height,ae.depth,ve,Ce,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,De,ye.width,ye.height,ae.depth,0,ve,Ce,ye.data)}else{Be&&Qe&&t.texStorage2D(i.TEXTURE_2D,ue,De,Ge[0].width,Ge[0].height);for(let W=0,Z=Ge.length;W<Z;W++)ye=Ge[W],v.format!==Bt?ve!==null?Be?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,ye.width,ye.height,ve,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,W,De,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?D&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,ye.width,ye.height,ve,Ce,ye.data):t.texImage2D(i.TEXTURE_2D,W,De,ye.width,ye.height,0,ve,Ce,ye.data)}else if(v.isDataArrayTexture)if(Be){if(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,De,ae.width,ae.height,ae.depth),D)if(v.layerUpdates.size>0){const W=io(ae.width,ae.height,v.format,v.type);for(const Z of v.layerUpdates){const me=ae.data.subarray(Z*W/ae.data.BYTES_PER_ELEMENT,(Z+1)*W/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,ae.width,ae.height,1,ve,Ce,me)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ve,Ce,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,ae.width,ae.height,ae.depth,0,ve,Ce,ae.data);else if(v.isData3DTexture)Be?(Qe&&t.texStorage3D(i.TEXTURE_3D,ue,De,ae.width,ae.height,ae.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ve,Ce,ae.data)):t.texImage3D(i.TEXTURE_3D,0,De,ae.width,ae.height,ae.depth,0,ve,Ce,ae.data);else if(v.isFramebufferTexture){if(Qe)if(Be)t.texStorage2D(i.TEXTURE_2D,ue,De,ae.width,ae.height);else{let W=ae.width,Z=ae.height;for(let me=0;me<ue;me++)t.texImage2D(i.TEXTURE_2D,me,De,W,Z,0,ve,Ce,null),W>>=1,Z>>=1}}else if(Ge.length>0){if(Be&&Qe){const W=_e(Ge[0]);t.texStorage2D(i.TEXTURE_2D,ue,De,W.width,W.height)}for(let W=0,Z=Ge.length;W<Z;W++)ye=Ge[W],Be?D&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,ve,Ce,ye):t.texImage2D(i.TEXTURE_2D,W,De,ve,Ce,ye);v.generateMipmaps=!1}else if(Be){if(Qe){const W=_e(ae);t.texStorage2D(i.TEXTURE_2D,ue,De,W.width,W.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Ce,ae)}else t.texImage2D(i.TEXTURE_2D,0,De,ve,Ce,ae);m(v)&&u(K),Se.__version=Y.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function $(M,v,O){if(v.image.length!==6)return;const K=ce(M,v),ee=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+O);const Y=n.get(ee);if(ee.version!==Y.__version||K===!0){t.activeTexture(i.TEXTURE0+O);const Se=We.getPrimaries(We.workingColorSpace),de=v.colorSpace===pn?null:We.getPrimaries(v.colorSpace),ge=v.colorSpace===pn||Se===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const He=v.isCompressedTexture||v.image[0].isCompressedTexture,ae=v.image[0]&&v.image[0].isDataTexture,ve=[];for(let Z=0;Z<6;Z++)!He&&!ae?ve[Z]=y(v.image[Z],!0,a.maxCubemapSize):ve[Z]=ae?v.image[Z].image:v.image[Z],ve[Z]=Ve(v,ve[Z]);const Ce=ve[0],De=r.convert(v.format,v.colorSpace),ye=r.convert(v.type),Ge=E(v.internalFormat,De,ye,v.colorSpace),Be=v.isVideoTexture!==!0,Qe=Y.__version===void 0||K===!0,D=ee.dataReady;let ue=N(v,Ce);ie(i.TEXTURE_CUBE_MAP,v);let W;if(He){Be&&Qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Ge,Ce.width,Ce.height);for(let Z=0;Z<6;Z++){W=ve[Z].mipmaps;for(let me=0;me<W.length;me++){const he=W[me];v.format!==Bt?De!==null?Be?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,he.width,he.height,De,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,Ge,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,he.width,he.height,De,ye,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,Ge,he.width,he.height,0,De,ye,he.data)}}}else{if(W=v.mipmaps,Be&&Qe){W.length>0&&ue++;const Z=_e(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Ge,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ae){Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ve[Z].width,ve[Z].height,De,ye,ve[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ge,ve[Z].width,ve[Z].height,0,De,ye,ve[Z].data);for(let me=0;me<W.length;me++){const Ue=W[me].image[Z].image;Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,Ue.width,Ue.height,De,ye,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,Ge,Ue.width,Ue.height,0,De,ye,Ue.data)}}else{Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,De,ye,ve[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ge,De,ye,ve[Z]);for(let me=0;me<W.length;me++){const he=W[me];Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,De,ye,he.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,Ge,De,ye,he.image[Z])}}}m(v)&&u(i.TEXTURE_CUBE_MAP),Y.__version=ee.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ne(M,v,O,K,ee,Y){const Se=r.convert(O.format,O.colorSpace),de=r.convert(O.type),ge=E(O.internalFormat,Se,de,O.colorSpace),He=n.get(v),ae=n.get(O);if(ae.__renderTarget=v,!He.__hasExternalTextures){const ve=Math.max(1,v.width>>Y),Ce=Math.max(1,v.height>>Y);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,Y,ge,ve,Ce,v.depth,0,Se,de,null):t.texImage2D(ee,Y,ge,ve,Ce,0,Se,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),Le(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,ee,ae.__webglTexture,0,Pe(v)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,ee,ae.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function X(M,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,M),v.depthBuffer){const K=v.depthTexture,ee=K&&K.isDepthTexture?K.type:null,Y=x(v.stencilBuffer,ee),Se=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=Pe(v);Le(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,Y,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,Y,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Y,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,M)}else{const K=v.textures;for(let ee=0;ee<K.length;ee++){const Y=K[ee],Se=r.convert(Y.format,Y.colorSpace),de=r.convert(Y.type),ge=E(Y.internalFormat,Se,de,Y.colorSpace),He=Pe(v);O&&Le(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,He,ge,v.width,v.height):Le(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He,ge,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ge,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function se(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(v.depthTexture);K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Q(v.depthTexture,0);const ee=K.__webglTexture,Y=Pe(v);if(v.depthTexture.format===Zn)Le(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(v.depthTexture.format===ii)Le(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function pe(M){const v=n.get(M),O=M.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==M.depthTexture){const K=M.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const ee=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),v.__depthDisposeCallback=ee}v.__boundDepthTexture=K}if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");se(v.__webglFramebuffer,M)}else if(O){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=i.createRenderbuffer(),X(v.__webglDepthbuffer[K],M,!1);else{const ee=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),X(v.__webglDepthbuffer,M,!1);else{const K=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ee)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(M,v,O){const K=n.get(M);v!==void 0&&ne(K.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&pe(M)}function Re(M){const v=M.texture,O=n.get(M),K=n.get(v);M.addEventListener("dispose",C);const ee=M.textures,Y=M.isWebGLCubeRenderTarget===!0,Se=ee.length>1;if(Se||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=v.version,s.memory.textures++),Y){O.__webglFramebuffer=[];for(let de=0;de<6;de++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[de]=[];for(let ge=0;ge<v.mipmaps.length;ge++)O.__webglFramebuffer[de][ge]=i.createFramebuffer()}else O.__webglFramebuffer[de]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let de=0;de<v.mipmaps.length;de++)O.__webglFramebuffer[de]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Se)for(let de=0,ge=ee.length;de<ge;de++){const He=n.get(ee[de]);He.__webglTexture===void 0&&(He.__webglTexture=i.createTexture(),s.memory.textures++)}if(M.samples>0&&Le(M)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let de=0;de<ee.length;de++){const ge=ee[de];O.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[de]);const He=r.convert(ge.format,ge.colorSpace),ae=r.convert(ge.type),ve=E(ge.internalFormat,He,ae,ge.colorSpace,M.isXRRenderTarget===!0),Ce=Pe(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,ve,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,O.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),X(O.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ie(i.TEXTURE_CUBE_MAP,v);for(let de=0;de<6;de++)if(v.mipmaps&&v.mipmaps.length>0)for(let ge=0;ge<v.mipmaps.length;ge++)ne(O.__webglFramebuffer[de][ge],M,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,ge);else ne(O.__webglFramebuffer[de],M,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(v)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let de=0,ge=ee.length;de<ge;de++){const He=ee[de],ae=n.get(He);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),ie(i.TEXTURE_2D,He),ne(O.__webglFramebuffer,M,He,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),m(He)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(de=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,K.__webglTexture),ie(de,v),v.mipmaps&&v.mipmaps.length>0)for(let ge=0;ge<v.mipmaps.length;ge++)ne(O.__webglFramebuffer[ge],M,v,i.COLOR_ATTACHMENT0,de,ge);else ne(O.__webglFramebuffer,M,v,i.COLOR_ATTACHMENT0,de,0);m(v)&&u(de),t.unbindTexture()}M.depthBuffer&&pe(M)}function Te(M){const v=M.textures;for(let O=0,K=v.length;O<K;O++){const ee=v[O];if(m(ee)){const Y=w(M),Se=n.get(ee).__webglTexture;t.bindTexture(Y,Se),u(Y),t.unbindTexture()}}}const ze=[],R=[];function Je(M){if(M.samples>0){if(Le(M)===!1){const v=M.textures,O=M.width,K=M.height;let ee=i.COLOR_BUFFER_BIT;const Y=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(M),de=v.length>1;if(de)for(let ge=0;ge<v.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ge=0;ge<v.length;ge++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const He=n.get(v[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,He,0)}i.blitFramebuffer(0,0,O,K,0,0,O,K,ee,i.NEAREST),l===!0&&(ze.length=0,R.length=0,ze.push(i.COLOR_ATTACHMENT0+ge),M.depthBuffer&&M.resolveDepthBuffer===!1&&(ze.push(Y),R.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ze))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let ge=0;ge<v.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const He=n.get(v[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,He,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const v=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Pe(M){return Math.min(a.maxSamples,M.samples)}function Le(M){const v=n.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function xe(M){const v=s.render.frame;d.get(M)!==v&&(d.set(M,v),M.update())}function Ve(M,v){const O=M.colorSpace,K=M.format,ee=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||O!==ri&&O!==pn&&(We.getTransfer(O)===Ze?(K!==Bt||ee!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function _e(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=q,this.setTexture2D=Q,this.setTexture2DArray=j,this.setTexture3D=te,this.setTextureCube=V,this.rebindTextures=be,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Le}function Wf(i,e){function t(n,a=pn){let r;const s=We.getTransfer(a);if(n===an)return i.UNSIGNED_BYTE;if(n===Gr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yo)return i.BYTE;if(n===_o)return i.SHORT;if(n===bi)return i.UNSIGNED_SHORT;if(n===Hr)return i.INT;if(n===Ln)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===xi)return i.HALF_FLOAT;if(n===xo)return i.ALPHA;if(n===So)return i.RGB;if(n===Bt)return i.RGBA;if(n===Mo)return i.LUMINANCE;if(n===Eo)return i.LUMINANCE_ALPHA;if(n===Zn)return i.DEPTH_COMPONENT;if(n===ii)return i.DEPTH_STENCIL;if(n===wo)return i.RED;if(n===Wr)return i.RED_INTEGER;if(n===To)return i.RG;if(n===$r)return i.RG_INTEGER;if(n===Xr)return i.RGBA_INTEGER;if(n===ea||n===ta||n===na||n===ia)if(s===Ze)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dr||n===ur||n===hr||n===fr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===dr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ur)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pr||n===mr||n===gr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pr||n===mr)return s===Ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===gr)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vr||n===yr||n===_r||n===br||n===xr||n===Sr||n===Mr||n===Er||n===wr||n===Tr||n===Ar||n===Cr||n===Rr||n===Pr)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===vr)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yr)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_r)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===br)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xr)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sr)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mr)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Er)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wr)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tr)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ar)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cr)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rr)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pr)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===aa||n===Lr||n===Dr)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===aa)return s===Ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ao||n===Ir||n===Ur||n===Nr)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ir)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ur)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ni?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class $f extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yi extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xf={type:"move"};class Xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,n),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xf)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new yi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const qf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const a=new vt,r=e.properties.get(a);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new rn({vertexShader:qf,fragmentShader:Yf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new pa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kf extends si{constructor(e,t){super();const n=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,d=null,f=null,h=null,p=null,g=null;const y=new jf,m=t.getContextAttributes();let u=null,w=null;const E=[],x=[],N=new Xe;let A=null;const C=new Pt;C.viewport=new rt;const F=new Pt;F.viewport=new rt;const S=[C,F],b=new $f;let L=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let $=E[B];return $===void 0&&($=new Xa,E[B]=$),$.getTargetRaySpace()},this.getControllerGrip=function(B){let $=E[B];return $===void 0&&($=new Xa,E[B]=$),$.getGripSpace()},this.getHand=function(B){let $=E[B];return $===void 0&&($=new Xa,E[B]=$),$.getHandSpace()};function G(B){const $=x.indexOf(B.inputSource);if($===-1)return;const ne=E[$];ne!==void 0&&(ne.update(B.inputSource,B.frame,c||s),ne.dispatchEvent({type:B.type,data:B.inputSource}))}function J(){a.removeEventListener("select",G),a.removeEventListener("selectstart",G),a.removeEventListener("selectend",G),a.removeEventListener("squeeze",G),a.removeEventListener("squeezestart",G),a.removeEventListener("squeezeend",G),a.removeEventListener("end",J),a.removeEventListener("inputsourceschange",Q);for(let B=0;B<E.length;B++){const $=x[B];$!==null&&(x[B]=null,E[B].disconnect($))}L=null,q=null,y.reset(),e.setRenderTarget(u),p=null,h=null,f=null,a=null,w=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(B){if(a=B,a!==null){if(u=e.getRenderTarget(),a.addEventListener("select",G),a.addEventListener("selectstart",G),a.addEventListener("selectend",G),a.addEventListener("squeeze",G),a.addEventListener("squeezestart",G),a.addEventListener("squeezeend",G),a.addEventListener("end",J),a.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(N),a.renderState.layers===void 0){const $={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,t,$),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Dn(p.framebufferWidth,p.framebufferHeight,{format:Bt,type:an,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let $=null,ne=null,X=null;m.depth&&(X=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=m.stencil?ii:Zn,ne=m.stencil?ni:Ln);const se={colorFormat:t.RGBA8,depthFormat:X,scaleFactor:r};f=new XRWebGLBinding(a,t),h=f.createProjectionLayer(se),a.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new Dn(h.textureWidth,h.textureHeight,{format:Bt,type:an,depthTexture:new Ho(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),ce.setContext(a),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Q(B){for(let $=0;$<B.removed.length;$++){const ne=B.removed[$],X=x.indexOf(ne);X>=0&&(x[X]=null,E[X].disconnect(ne))}for(let $=0;$<B.added.length;$++){const ne=B.added[$];let X=x.indexOf(ne);if(X===-1){for(let pe=0;pe<E.length;pe++)if(pe>=x.length){x.push(ne),X=pe;break}else if(x[pe]===null){x[pe]=ne,X=pe;break}if(X===-1)break}const se=E[X];se&&se.connect(ne)}}const j=new k,te=new k;function V(B,$,ne){j.setFromMatrixPosition($.matrixWorld),te.setFromMatrixPosition(ne.matrixWorld);const X=j.distanceTo(te),se=$.projectionMatrix.elements,pe=ne.projectionMatrix.elements,be=se[14]/(se[10]-1),Re=se[14]/(se[10]+1),Te=(se[9]+1)/se[5],ze=(se[9]-1)/se[5],R=(se[8]-1)/se[0],Je=(pe[8]+1)/pe[0],Pe=be*R,Le=be*Je,xe=X/(-R+Je),Ve=xe*-R;if($.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ve),B.translateZ(xe),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),se[10]===-1)B.projectionMatrix.copy($.projectionMatrix),B.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const _e=be+xe,M=Re+xe,v=Pe-Ve,O=Le+(X-Ve),K=Te*Re/M*_e,ee=ze*Re/M*_e;B.projectionMatrix.makePerspective(v,O,K,ee,_e,M),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function le(B,$){$===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices($.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(a===null)return;let $=B.near,ne=B.far;y.texture!==null&&(y.depthNear>0&&($=y.depthNear),y.depthFar>0&&(ne=y.depthFar)),b.near=F.near=C.near=$,b.far=F.far=C.far=ne,(L!==b.near||q!==b.far)&&(a.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,q=b.far),C.layers.mask=B.layers.mask|2,F.layers.mask=B.layers.mask|4,b.layers.mask=C.layers.mask|F.layers.mask;const X=B.parent,se=b.cameras;le(b,X);for(let pe=0;pe<se.length;pe++)le(se[pe],X);se.length===2?V(b,C,F):b.projectionMatrix.copy(C.projectionMatrix),P(B,b,X)};function P(B,$,ne){ne===null?B.matrix.copy($.matrixWorld):(B.matrix.copy(ne.matrixWorld),B.matrix.invert(),B.matrix.multiply($.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy($.projectionMatrix),B.projectionMatrixInverse.copy($.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Fr*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(b)};let T=null;function ie(B,$){if(d=$.getViewerPose(c||s),g=$,d!==null){const ne=d.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let X=!1;ne.length!==b.cameras.length&&(b.cameras.length=0,X=!0);for(let pe=0;pe<ne.length;pe++){const be=ne[pe];let Re=null;if(p!==null)Re=p.getViewport(be);else{const ze=f.getViewSubImage(h,be);Re=ze.viewport,pe===0&&(e.setRenderTargetTextures(w,ze.colorTexture,h.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(w))}let Te=S[pe];Te===void 0&&(Te=new Pt,Te.layers.enable(pe),Te.viewport=new rt,S[pe]=Te),Te.matrix.fromArray(be.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(be.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Re.x,Re.y,Re.width,Re.height),pe===0&&(b.matrix.copy(Te.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),X===!0&&b.cameras.push(Te)}const se=a.enabledFeatures;if(se&&se.includes("depth-sensing")){const pe=f.getDepthInformation(ne[0]);pe&&pe.isValid&&pe.texture&&y.init(e,pe,a.renderState)}}for(let ne=0;ne<E.length;ne++){const X=x[ne],se=E[ne];X!==null&&se!==void 0&&se.update(X,$,c||s)}T&&T(B,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const ce=new Oo;ce.setAnimationLoop(ie),this.setAnimationLoop=function(B){T=B},this.dispose=function(){}}}const En=new Wt,Zf=new tt;function Jf(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Fo(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function a(m,u,w,E,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),f(m,u)):u.isMeshPhongMaterial?(r(m,u),d(m,u)):u.isMeshStandardMaterial?(r(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,x)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),y(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(s(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,w,E):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===gt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===gt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const w=e.get(u),E=w.envMap,x=w.envMapRotation;E&&(m.envMap.value=E,En.copy(x),En.x*=-1,En.y*=-1,En.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(En.y*=-1,En.z*=-1),m.envMapRotation.value.setFromMatrix4(Zf.makeRotationFromEuler(En)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function s(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,w,E){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*w,m.scale.value=E*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,w){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===gt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){const w=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function Qf(i,e,t,n){let a={},r={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,E){const x=E.program;n.uniformBlockBinding(w,x)}function c(w,E){let x=a[w.id];x===void 0&&(g(w),x=d(w),a[w.id]=x,w.addEventListener("dispose",m));const N=E.program;n.updateUBOMapping(w,N);const A=e.render.frame;r[w.id]!==A&&(h(w),r[w.id]=A)}function d(w){const E=f();w.__bindingPointIndex=E;const x=i.createBuffer(),N=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,N,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,x),x}function f(){for(let w=0;w<o;w++)if(s.indexOf(w)===-1)return s.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const E=a[w.id],x=w.uniforms,N=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,C=x.length;A<C;A++){const F=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,b=F.length;S<b;S++){const L=F[S];if(p(L,A,S,N)===!0){const q=L.__offset,G=Array.isArray(L.value)?L.value:[L.value];let J=0;for(let Q=0;Q<G.length;Q++){const j=G[Q],te=y(j);typeof j=="number"||typeof j=="boolean"?(L.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,q+J,L.__data)):j.isMatrix3?(L.__data[0]=j.elements[0],L.__data[1]=j.elements[1],L.__data[2]=j.elements[2],L.__data[3]=0,L.__data[4]=j.elements[3],L.__data[5]=j.elements[4],L.__data[6]=j.elements[5],L.__data[7]=0,L.__data[8]=j.elements[6],L.__data[9]=j.elements[7],L.__data[10]=j.elements[8],L.__data[11]=0):(j.toArray(L.__data,J),J+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,E,x,N){const A=w.value,C=E+"_"+x;if(N[C]===void 0)return typeof A=="number"||typeof A=="boolean"?N[C]=A:N[C]=A.clone(),!0;{const F=N[C];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return N[C]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function g(w){const E=w.uniforms;let x=0;const N=16;for(let C=0,F=E.length;C<F;C++){const S=Array.isArray(E[C])?E[C]:[E[C]];for(let b=0,L=S.length;b<L;b++){const q=S[b],G=Array.isArray(q.value)?q.value:[q.value];for(let J=0,Q=G.length;J<Q;J++){const j=G[J],te=y(j),V=x%N,le=V%te.boundary,P=V+le;x+=le,P!==0&&N-P<te.storage&&(x+=N-P),q.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=x,x+=te.storage}}}const A=x%N;return A>0&&(x+=N-A),w.__size=x,w.__cache={},this}function y(w){const E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function m(w){const E=w.target;E.removeEventListener("dispose",m);const x=s.indexOf(E.__bindingPointIndex);s.splice(x,1),i.deleteBuffer(a[E.id]),delete a[E.id],delete r[E.id]}function u(){for(const w in a)i.deleteBuffer(a[w]);s=[],a={},r={}}return{bind:l,update:c,dispose:u}}class ep{constructor(e={}){const{canvas:t=Hl(),context:n=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;const g=new Uint32Array(4),y=new Int32Array(4);let m=null,u=null;const w=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this.toneMapping=gn,this.toneMappingExposure=1;const x=this;let N=!1,A=0,C=0,F=null,S=-1,b=null;const L=new rt,q=new rt;let G=null;const J=new $e(0);let Q=0,j=t.width,te=t.height,V=1,le=null,P=null;const T=new rt(0,0,j,te),ie=new rt(0,0,j,te);let ce=!1;const B=new Yr;let $=!1,ne=!1;const X=new tt,se=new tt,pe=new k,be=new rt,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Te=!1;function ze(){return F===null?V:1}let R=n;function Je(_,I){return t.getContext(_,I)}try{const _={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zr}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",he,!1),R===null){const I="webgl2";if(R=Je(I,_),R===null)throw Je(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Pe,Le,xe,Ve,_e,M,v,O,K,ee,Y,Se,de,ge,He,ae,ve,Ce,De,ye,Ge,Be,Qe,D;function ue(){Pe=new ah(R),Pe.init(),Be=new Wf(R,Pe),Le=new Ju(R,Pe,e,Be),xe=new Hf(R,Pe),Le.reverseDepthBuffer&&h&&xe.buffers.depth.setReversed(!0),Ve=new oh(R),_e=new Tf,M=new Vf(R,Pe,xe,_e,Le,Be,Ve),v=new eh(x),O=new ih(x),K=new pc(R),Qe=new Ku(R,K),ee=new rh(R,K,Ve,Qe),Y=new ch(R,ee,K,Ve),De=new lh(R,Le,M),ae=new Qu(_e),Se=new wf(x,v,O,Pe,Le,Qe,ae),de=new Jf(x,_e),ge=new Cf,He=new Uf(Pe),Ce=new ju(x,v,O,xe,Y,p,l),ve=new Of(x,Y,Le),D=new Qf(R,Ve,Le,xe),ye=new Zu(R,Pe,Ve),Ge=new sh(R,Pe,Ve),Ve.programs=Se.programs,x.capabilities=Le,x.extensions=Pe,x.properties=_e,x.renderLists=ge,x.shadowMap=ve,x.state=xe,x.info=Ve}ue();const W=new Kf(x,R);this.xr=W,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const _=Pe.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=Pe.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(_){_!==void 0&&(V=_,this.setSize(j,te,!1))},this.getSize=function(_){return _.set(j,te)},this.setSize=function(_,I,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=_,te=I,t.width=Math.floor(_*V),t.height=Math.floor(I*V),z===!0&&(t.style.width=_+"px",t.style.height=I+"px"),this.setViewport(0,0,_,I)},this.getDrawingBufferSize=function(_){return _.set(j*V,te*V).floor()},this.setDrawingBufferSize=function(_,I,z){j=_,te=I,V=z,t.width=Math.floor(_*z),t.height=Math.floor(I*z),this.setViewport(0,0,_,I)},this.getCurrentViewport=function(_){return _.copy(L)},this.getViewport=function(_){return _.copy(T)},this.setViewport=function(_,I,z,H){_.isVector4?T.set(_.x,_.y,_.z,_.w):T.set(_,I,z,H),xe.viewport(L.copy(T).multiplyScalar(V).round())},this.getScissor=function(_){return _.copy(ie)},this.setScissor=function(_,I,z,H){_.isVector4?ie.set(_.x,_.y,_.z,_.w):ie.set(_,I,z,H),xe.scissor(q.copy(ie).multiplyScalar(V).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(_){xe.setScissorTest(ce=_)},this.setOpaqueSort=function(_){le=_},this.setTransparentSort=function(_){P=_},this.getClearColor=function(_){return _.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(_=!0,I=!0,z=!0){let H=0;if(_){let U=!1;if(F!==null){const re=F.texture.format;U=re===Xr||re===$r||re===Wr}if(U){const re=F.texture.type,fe=re===an||re===Ln||re===bi||re===ni||re===Gr||re===Vr,Me=Ce.getClearColor(),Ee=Ce.getClearAlpha(),Ie=Me.r,Ne=Me.g,we=Me.b;fe?(g[0]=Ie,g[1]=Ne,g[2]=we,g[3]=Ee,R.clearBufferuiv(R.COLOR,0,g)):(y[0]=Ie,y[1]=Ne,y[2]=we,y[3]=Ee,R.clearBufferiv(R.COLOR,0,y))}else H|=R.COLOR_BUFFER_BIT}I&&(H|=R.DEPTH_BUFFER_BIT),z&&(H|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ge.dispose(),He.dispose(),_e.dispose(),v.dispose(),O.dispose(),Y.dispose(),Qe.dispose(),D.dispose(),Se.dispose(),W.dispose(),W.removeEventListener("sessionstart",Qr),W.removeEventListener("sessionend",es),yn.stop()};function Z(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const _=Ve.autoReset,I=ve.enabled,z=ve.autoUpdate,H=ve.needsUpdate,U=ve.type;ue(),Ve.autoReset=_,ve.enabled=I,ve.autoUpdate=z,ve.needsUpdate=H,ve.type=U}function he(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Ue(_){const I=_.target;I.removeEventListener("dispose",Ue),at(I)}function at(_){ut(_),_e.remove(_)}function ut(_){const I=_e.get(_).programs;I!==void 0&&(I.forEach(function(z){Se.releaseProgram(z)}),_.isShaderMaterial&&Se.releaseShaderCache(_))}this.renderBufferDirect=function(_,I,z,H,U,re){I===null&&(I=Re);const fe=U.isMesh&&U.matrixWorld.determinant()<0,Me=Yo(_,I,z,H,U);xe.setMaterial(H,fe);let Ee=z.index,Ie=1;if(H.wireframe===!0){if(Ee=ee.getWireframeAttribute(z),Ee===void 0)return;Ie=2}const Ne=z.drawRange,we=z.attributes.position;let qe=Ne.start*Ie,et=(Ne.start+Ne.count)*Ie;re!==null&&(qe=Math.max(qe,re.start*Ie),et=Math.min(et,(re.start+re.count)*Ie)),Ee!==null?(qe=Math.max(qe,0),et=Math.min(et,Ee.count)):we!=null&&(qe=Math.max(qe,0),et=Math.min(et,we.count));const nt=et-qe;if(nt<0||nt===1/0)return;Qe.setup(U,H,Me,z,Ee);let yt,Ye=ye;if(Ee!==null&&(yt=K.get(Ee),Ye=Ge,Ye.setIndex(yt)),U.isMesh)H.wireframe===!0?(xe.setLineWidth(H.wireframeLinewidth*ze()),Ye.setMode(R.LINES)):Ye.setMode(R.TRIANGLES);else if(U.isLine){let Ae=H.linewidth;Ae===void 0&&(Ae=1),xe.setLineWidth(Ae*ze()),U.isLineSegments?Ye.setMode(R.LINES):U.isLineLoop?Ye.setMode(R.LINE_LOOP):Ye.setMode(R.LINE_STRIP)}else U.isPoints?Ye.setMode(R.POINTS):U.isSprite&&Ye.setMode(R.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ye.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Pe.get("WEBGL_multi_draw"))Ye.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ae=U._multiDrawStarts,Xt=U._multiDrawCounts,je=U._multiDrawCount,It=Ee?K.get(Ee).bytesPerElement:1,Un=_e.get(H).currentProgram.getUniforms();for(let Mt=0;Mt<je;Mt++)Un.setValue(R,"_gl_DrawID",Mt),Ye.render(Ae[Mt]/It,Xt[Mt])}else if(U.isInstancedMesh)Ye.renderInstances(qe,nt,U.count);else if(z.isInstancedBufferGeometry){const Ae=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Xt=Math.min(z.instanceCount,Ae);Ye.renderInstances(qe,nt,Xt)}else Ye.render(qe,nt)};function Ke(_,I,z){_.transparent===!0&&_.side===Gt&&_.forceSinglePass===!1?(_.side=gt,_.needsUpdate=!0,Ci(_,I,z),_.side=vn,_.needsUpdate=!0,Ci(_,I,z),_.side=Gt):Ci(_,I,z)}this.compile=function(_,I,z=null){z===null&&(z=_),u=He.get(z),u.init(I),E.push(u),z.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),_!==z&&_.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();const H=new Set;return _.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const re=U.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){const Me=re[fe];Ke(Me,z,U),H.add(Me)}else Ke(re,z,U),H.add(re)}),E.pop(),u=null,H},this.compileAsync=function(_,I,z=null){const H=this.compile(_,I,z);return new Promise(U=>{function re(){if(H.forEach(function(fe){_e.get(fe).currentProgram.isReady()&&H.delete(fe)}),H.size===0){U(_);return}setTimeout(re,10)}Pe.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Dt=null;function $t(_){Dt&&Dt(_)}function Qr(){yn.stop()}function es(){yn.start()}const yn=new Oo;yn.setAnimationLoop($t),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(_){Dt=_,W.setAnimationLoop(_),_===null?yn.stop():yn.start()},W.addEventListener("sessionstart",Qr),W.addEventListener("sessionend",es),this.render=function(_,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(I),I=W.getCamera()),_.isScene===!0&&_.onBeforeRender(x,_,I,F),u=He.get(_,E.length),u.init(I),E.push(u),se.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),B.setFromProjectionMatrix(se),ne=this.localClippingEnabled,$=ae.init(this.clippingPlanes,ne),m=ge.get(_,w.length),m.init(),w.push(m),W.enabled===!0&&W.isPresenting===!0){const re=x.xr.getDepthSensingMesh();re!==null&&ga(re,I,-1/0,x.sortObjects)}ga(_,I,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(le,P),Te=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Te&&Ce.addToRenderList(m,_),this.info.render.frame++,$===!0&&ae.beginShadows();const z=u.state.shadowsArray;ve.render(z,_,I),$===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,U=m.transmissive;if(u.setupLights(),I.isArrayCamera){const re=I.cameras;if(U.length>0)for(let fe=0,Me=re.length;fe<Me;fe++){const Ee=re[fe];ns(H,U,_,Ee)}Te&&Ce.render(_);for(let fe=0,Me=re.length;fe<Me;fe++){const Ee=re[fe];ts(m,_,Ee,Ee.viewport)}}else U.length>0&&ns(H,U,_,I),Te&&Ce.render(_),ts(m,_,I);F!==null&&(M.updateMultisampleRenderTarget(F),M.updateRenderTargetMipmap(F)),_.isScene===!0&&_.onAfterRender(x,_,I),Qe.resetDefaultState(),S=-1,b=null,E.pop(),E.length>0?(u=E[E.length-1],$===!0&&ae.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function ga(_,I,z,H){if(_.visible===!1)return;if(_.layers.test(I.layers)){if(_.isGroup)z=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(I);else if(_.isLight)u.pushLight(_),_.castShadow&&u.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||B.intersectsSprite(_)){H&&be.setFromMatrixPosition(_.matrixWorld).applyMatrix4(se);const fe=Y.update(_),Me=_.material;Me.visible&&m.push(_,fe,Me,z,be.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||B.intersectsObject(_))){const fe=Y.update(_),Me=_.material;if(H&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),be.copy(_.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),be.copy(fe.boundingSphere.center)),be.applyMatrix4(_.matrixWorld).applyMatrix4(se)),Array.isArray(Me)){const Ee=fe.groups;for(let Ie=0,Ne=Ee.length;Ie<Ne;Ie++){const we=Ee[Ie],qe=Me[we.materialIndex];qe&&qe.visible&&m.push(_,fe,qe,z,be.z,we)}}else Me.visible&&m.push(_,fe,Me,z,be.z,null)}}const re=_.children;for(let fe=0,Me=re.length;fe<Me;fe++)ga(re[fe],I,z,H)}function ts(_,I,z,H){const U=_.opaque,re=_.transmissive,fe=_.transparent;u.setupLightsView(z),$===!0&&ae.setGlobalState(x.clippingPlanes,z),H&&xe.viewport(L.copy(H)),U.length>0&&Ai(U,I,z),re.length>0&&Ai(re,I,z),fe.length>0&&Ai(fe,I,z),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function ns(_,I,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[H.id]===void 0&&(u.state.transmissionRenderTarget[H.id]=new Dn(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float")?xi:an,minFilter:Pn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const re=u.state.transmissionRenderTarget[H.id],fe=H.viewport||L;re.setSize(fe.z,fe.w);const Me=x.getRenderTarget();x.setRenderTarget(re),x.getClearColor(J),Q=x.getClearAlpha(),Q<1&&x.setClearColor(16777215,.5),x.clear(),Te&&Ce.render(z);const Ee=x.toneMapping;x.toneMapping=gn;const Ie=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),u.setupLightsView(H),$===!0&&ae.setGlobalState(x.clippingPlanes,H),Ai(_,z,H),M.updateMultisampleRenderTarget(re),M.updateRenderTargetMipmap(re),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let we=0,qe=I.length;we<qe;we++){const et=I[we],nt=et.object,yt=et.geometry,Ye=et.material,Ae=et.group;if(Ye.side===Gt&&nt.layers.test(H.layers)){const Xt=Ye.side;Ye.side=gt,Ye.needsUpdate=!0,is(nt,z,H,yt,Ye,Ae),Ye.side=Xt,Ye.needsUpdate=!0,Ne=!0}}Ne===!0&&(M.updateMultisampleRenderTarget(re),M.updateRenderTargetMipmap(re))}x.setRenderTarget(Me),x.setClearColor(J,Q),Ie!==void 0&&(H.viewport=Ie),x.toneMapping=Ee}function Ai(_,I,z){const H=I.isScene===!0?I.overrideMaterial:null;for(let U=0,re=_.length;U<re;U++){const fe=_[U],Me=fe.object,Ee=fe.geometry,Ie=H===null?fe.material:H,Ne=fe.group;Me.layers.test(z.layers)&&is(Me,I,z,Ee,Ie,Ne)}}function is(_,I,z,H,U,re){_.onBeforeRender(x,I,z,H,U,re),_.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),U.onBeforeRender(x,I,z,H,_,re),U.transparent===!0&&U.side===Gt&&U.forceSinglePass===!1?(U.side=gt,U.needsUpdate=!0,x.renderBufferDirect(z,I,H,U,_,re),U.side=vn,U.needsUpdate=!0,x.renderBufferDirect(z,I,H,U,_,re),U.side=Gt):x.renderBufferDirect(z,I,H,U,_,re),_.onAfterRender(x,I,z,H,U,re)}function Ci(_,I,z){I.isScene!==!0&&(I=Re);const H=_e.get(_),U=u.state.lights,re=u.state.shadowsArray,fe=U.state.version,Me=Se.getParameters(_,U.state,re,I,z),Ee=Se.getProgramCacheKey(Me);let Ie=H.programs;H.environment=_.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(_.isMeshStandardMaterial?O:v).get(_.envMap||H.environment),H.envMapRotation=H.environment!==null&&_.envMap===null?I.environmentRotation:_.envMapRotation,Ie===void 0&&(_.addEventListener("dispose",Ue),Ie=new Map,H.programs=Ie);let Ne=Ie.get(Ee);if(Ne!==void 0){if(H.currentProgram===Ne&&H.lightsStateVersion===fe)return rs(_,Me),Ne}else Me.uniforms=Se.getUniforms(_),_.onBeforeCompile(Me,x),Ne=Se.acquireProgram(Me,Ee),Ie.set(Ee,Ne),H.uniforms=Me.uniforms;const we=H.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(we.clippingPlanes=ae.uniform),rs(_,Me),H.needsLights=Ko(_),H.lightsStateVersion=fe,H.needsLights&&(we.ambientLightColor.value=U.state.ambient,we.lightProbe.value=U.state.probe,we.directionalLights.value=U.state.directional,we.directionalLightShadows.value=U.state.directionalShadow,we.spotLights.value=U.state.spot,we.spotLightShadows.value=U.state.spotShadow,we.rectAreaLights.value=U.state.rectArea,we.ltc_1.value=U.state.rectAreaLTC1,we.ltc_2.value=U.state.rectAreaLTC2,we.pointLights.value=U.state.point,we.pointLightShadows.value=U.state.pointShadow,we.hemisphereLights.value=U.state.hemi,we.directionalShadowMap.value=U.state.directionalShadowMap,we.directionalShadowMatrix.value=U.state.directionalShadowMatrix,we.spotShadowMap.value=U.state.spotShadowMap,we.spotLightMatrix.value=U.state.spotLightMatrix,we.spotLightMap.value=U.state.spotLightMap,we.pointShadowMap.value=U.state.pointShadowMap,we.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Ne,H.uniformsList=null,Ne}function as(_){if(_.uniformsList===null){const I=_.currentProgram.getUniforms();_.uniformsList=ra.seqWithValue(I.seq,_.uniforms)}return _.uniformsList}function rs(_,I){const z=_e.get(_);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function Yo(_,I,z,H,U){I.isScene!==!0&&(I=Re),M.resetTextureUnits();const re=I.fog,fe=H.isMeshStandardMaterial?I.environment:null,Me=F===null?x.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ri,Ee=(H.isMeshStandardMaterial?O:v).get(H.envMap||fe),Ie=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ne=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),we=!!z.morphAttributes.position,qe=!!z.morphAttributes.normal,et=!!z.morphAttributes.color;let nt=gn;H.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(nt=x.toneMapping);const yt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ye=yt!==void 0?yt.length:0,Ae=_e.get(H),Xt=u.state.lights;if($===!0&&(ne===!0||_!==b)){const At=_===b&&H.id===S;ae.setState(H,_,At)}let je=!1;H.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Xt.state.version||Ae.outputColorSpace!==Me||U.isBatchedMesh&&Ae.batching===!1||!U.isBatchedMesh&&Ae.batching===!0||U.isBatchedMesh&&Ae.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ae.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ae.instancing===!1||!U.isInstancedMesh&&Ae.instancing===!0||U.isSkinnedMesh&&Ae.skinning===!1||!U.isSkinnedMesh&&Ae.skinning===!0||U.isInstancedMesh&&Ae.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ae.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ae.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ae.instancingMorph===!1&&U.morphTexture!==null||Ae.envMap!==Ee||H.fog===!0&&Ae.fog!==re||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ae.numPlanes||Ae.numIntersection!==ae.numIntersection)||Ae.vertexAlphas!==Ie||Ae.vertexTangents!==Ne||Ae.morphTargets!==we||Ae.morphNormals!==qe||Ae.morphColors!==et||Ae.toneMapping!==nt||Ae.morphTargetsCount!==Ye)&&(je=!0):(je=!0,Ae.__version=H.version);let It=Ae.currentProgram;je===!0&&(It=Ci(H,I,U));let Un=!1,Mt=!1,li=!1;const it=It.getUniforms(),zt=Ae.uniforms;if(xe.useProgram(It.program)&&(Un=!0,Mt=!0,li=!0),H.id!==S&&(S=H.id,Mt=!0),Un||b!==_){xe.buffers.depth.getReversed()?(X.copy(_.projectionMatrix),Vl(X),Wl(X),it.setValue(R,"projectionMatrix",X)):it.setValue(R,"projectionMatrix",_.projectionMatrix),it.setValue(R,"viewMatrix",_.matrixWorldInverse);const sn=it.map.cameraPosition;sn!==void 0&&sn.setValue(R,pe.setFromMatrixPosition(_.matrixWorld)),Le.logarithmicDepthBuffer&&it.setValue(R,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&it.setValue(R,"isOrthographic",_.isOrthographicCamera===!0),b!==_&&(b=_,Mt=!0,li=!0)}if(U.isSkinnedMesh){it.setOptional(R,U,"bindMatrix"),it.setOptional(R,U,"bindMatrixInverse");const At=U.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),it.setValue(R,"boneTexture",At.boneTexture,M))}U.isBatchedMesh&&(it.setOptional(R,U,"batchingTexture"),it.setValue(R,"batchingTexture",U._matricesTexture,M),it.setOptional(R,U,"batchingIdTexture"),it.setValue(R,"batchingIdTexture",U._indirectTexture,M),it.setOptional(R,U,"batchingColorTexture"),U._colorsTexture!==null&&it.setValue(R,"batchingColorTexture",U._colorsTexture,M));const ci=z.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&De.update(U,z,It),(Mt||Ae.receiveShadow!==U.receiveShadow)&&(Ae.receiveShadow=U.receiveShadow,it.setValue(R,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(zt.envMap.value=Ee,zt.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(zt.envMapIntensity.value=I.environmentIntensity),Mt&&(it.setValue(R,"toneMappingExposure",x.toneMappingExposure),Ae.needsLights&&jo(zt,li),re&&H.fog===!0&&de.refreshFogUniforms(zt,re),de.refreshMaterialUniforms(zt,H,V,te,u.state.transmissionRenderTarget[_.id]),ra.upload(R,as(Ae),zt,M)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ra.upload(R,as(Ae),zt,M),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&it.setValue(R,"center",U.center),it.setValue(R,"modelViewMatrix",U.modelViewMatrix),it.setValue(R,"normalMatrix",U.normalMatrix),it.setValue(R,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const At=H.uniformsGroups;for(let sn=0,on=At.length;sn<on;sn++){const ss=At[sn];D.update(ss,It),D.bind(ss,It)}}return It}function jo(_,I){_.ambientLightColor.needsUpdate=I,_.lightProbe.needsUpdate=I,_.directionalLights.needsUpdate=I,_.directionalLightShadows.needsUpdate=I,_.pointLights.needsUpdate=I,_.pointLightShadows.needsUpdate=I,_.spotLights.needsUpdate=I,_.spotLightShadows.needsUpdate=I,_.rectAreaLights.needsUpdate=I,_.hemisphereLights.needsUpdate=I}function Ko(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(_,I,z){_e.get(_.texture).__webglTexture=I,_e.get(_.depthTexture).__webglTexture=z;const H=_e.get(_);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,I){const z=_e.get(_);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(_,I=0,z=0){F=_,A=I,C=z;let H=!0,U=null,re=!1,fe=!1;if(_){const Ee=_e.get(_);if(Ee.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(R.FRAMEBUFFER,null),H=!1;else if(Ee.__webglFramebuffer===void 0)M.setupRenderTarget(_);else if(Ee.__hasExternalTextures)M.rebindTextures(_,_e.get(_.texture).__webglTexture,_e.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const we=_.depthTexture;if(Ee.__boundDepthTexture!==we){if(we!==null&&_e.has(we)&&(_.width!==we.image.width||_.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(_)}}const Ie=_.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(fe=!0);const Ne=_e.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ne[I])?U=Ne[I][z]:U=Ne[I],re=!0):_.samples>0&&M.useMultisampledRTT(_)===!1?U=_e.get(_).__webglMultisampledFramebuffer:Array.isArray(Ne)?U=Ne[z]:U=Ne,L.copy(_.viewport),q.copy(_.scissor),G=_.scissorTest}else L.copy(T).multiplyScalar(V).floor(),q.copy(ie).multiplyScalar(V).floor(),G=ce;if(xe.bindFramebuffer(R.FRAMEBUFFER,U)&&H&&xe.drawBuffers(_,U),xe.viewport(L),xe.scissor(q),xe.setScissorTest(G),re){const Ee=_e.get(_.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ee.__webglTexture,z)}else if(fe){const Ee=_e.get(_.texture),Ie=I||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ee.__webglTexture,z||0,Ie)}S=-1},this.readRenderTargetPixels=function(_,I,z,H,U,re,fe){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=_e.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&fe!==void 0&&(Me=Me[fe]),Me){xe.bindFramebuffer(R.FRAMEBUFFER,Me);try{const Ee=_.texture,Ie=Ee.format,Ne=Ee.type;if(!Le.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=_.width-H&&z>=0&&z<=_.height-U&&R.readPixels(I,z,H,U,Be.convert(Ie),Be.convert(Ne),re)}finally{const Ee=F!==null?_e.get(F).__webglFramebuffer:null;xe.bindFramebuffer(R.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(_,I,z,H,U,re,fe){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=_e.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&fe!==void 0&&(Me=Me[fe]),Me){const Ee=_.texture,Ie=Ee.format,Ne=Ee.type;if(!Le.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=_.width-H&&z>=0&&z<=_.height-U){xe.bindFramebuffer(R.FRAMEBUFFER,Me);const we=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,we),R.bufferData(R.PIXEL_PACK_BUFFER,re.byteLength,R.STREAM_READ),R.readPixels(I,z,H,U,Be.convert(Ie),Be.convert(Ne),0);const qe=F!==null?_e.get(F).__webglFramebuffer:null;xe.bindFramebuffer(R.FRAMEBUFFER,qe);const et=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Gl(R,et,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,we),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,re),R.deleteBuffer(we),R.deleteSync(et),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(_,I=null,z=0){_.isTexture!==!0&&(gi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,_=arguments[1]);const H=Math.pow(2,-z),U=Math.floor(_.image.width*H),re=Math.floor(_.image.height*H),fe=I!==null?I.x:0,Me=I!==null?I.y:0;M.setTexture2D(_,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,fe,Me,U,re),xe.unbindTexture()},this.copyTextureToTexture=function(_,I,z=null,H=null,U=0){_.isTexture!==!0&&(gi("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,_=arguments[1],I=arguments[2],U=arguments[3]||0,z=null);let re,fe,Me,Ee,Ie,Ne,we,qe,et;const nt=_.isCompressedTexture?_.mipmaps[U]:_.image;z!==null?(re=z.max.x-z.min.x,fe=z.max.y-z.min.y,Me=z.isBox3?z.max.z-z.min.z:1,Ee=z.min.x,Ie=z.min.y,Ne=z.isBox3?z.min.z:0):(re=nt.width,fe=nt.height,Me=nt.depth||1,Ee=0,Ie=0,Ne=0),H!==null?(we=H.x,qe=H.y,et=H.z):(we=0,qe=0,et=0);const yt=Be.convert(I.format),Ye=Be.convert(I.type);let Ae;I.isData3DTexture?(M.setTexture3D(I,0),Ae=R.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(M.setTexture2DArray(I,0),Ae=R.TEXTURE_2D_ARRAY):(M.setTexture2D(I,0),Ae=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const Xt=R.getParameter(R.UNPACK_ROW_LENGTH),je=R.getParameter(R.UNPACK_IMAGE_HEIGHT),It=R.getParameter(R.UNPACK_SKIP_PIXELS),Un=R.getParameter(R.UNPACK_SKIP_ROWS),Mt=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,nt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,nt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ee),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ie),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ne);const li=_.isDataArrayTexture||_.isData3DTexture,it=I.isDataArrayTexture||I.isData3DTexture;if(_.isRenderTargetTexture||_.isDepthTexture){const zt=_e.get(_),ci=_e.get(I),At=_e.get(zt.__renderTarget),sn=_e.get(ci.__renderTarget);xe.bindFramebuffer(R.READ_FRAMEBUFFER,At.__webglFramebuffer),xe.bindFramebuffer(R.DRAW_FRAMEBUFFER,sn.__webglFramebuffer);for(let on=0;on<Me;on++)li&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_e.get(_).__webglTexture,U,Ne+on),_.isDepthTexture?(it&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_e.get(I).__webglTexture,U,et+on),R.blitFramebuffer(Ee,Ie,re,fe,we,qe,re,fe,R.DEPTH_BUFFER_BIT,R.NEAREST)):it?R.copyTexSubImage3D(Ae,U,we,qe,et+on,Ee,Ie,re,fe):R.copyTexSubImage2D(Ae,U,we,qe,et+on,Ee,Ie,re,fe);xe.bindFramebuffer(R.READ_FRAMEBUFFER,null),xe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else it?_.isDataTexture||_.isData3DTexture?R.texSubImage3D(Ae,U,we,qe,et,re,fe,Me,yt,Ye,nt.data):I.isCompressedArrayTexture?R.compressedTexSubImage3D(Ae,U,we,qe,et,re,fe,Me,yt,nt.data):R.texSubImage3D(Ae,U,we,qe,et,re,fe,Me,yt,Ye,nt):_.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,U,we,qe,re,fe,yt,Ye,nt.data):_.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,U,we,qe,nt.width,nt.height,yt,nt.data):R.texSubImage2D(R.TEXTURE_2D,U,we,qe,re,fe,yt,Ye,nt);R.pixelStorei(R.UNPACK_ROW_LENGTH,Xt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,je),R.pixelStorei(R.UNPACK_SKIP_PIXELS,It),R.pixelStorei(R.UNPACK_SKIP_ROWS,Un),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Mt),U===0&&I.generateMipmaps&&R.generateMipmap(Ae),xe.unbindTexture()},this.copyTextureToTexture3D=function(_,I,z=null,H=null,U=0){return _.isTexture!==!0&&(gi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,_=arguments[2],I=arguments[3],U=arguments[4]||0),gi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,I,z,H,U)},this.initRenderTarget=function(_){_e.get(_).__webglFramebuffer===void 0&&M.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?M.setTextureCube(_,0):_.isData3DTexture?M.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?M.setTexture2DArray(_,0):M.setTexture2D(_,0),xe.unbindTexture()},this.resetState=function(){A=0,C=0,F=null,xe.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}class tp extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wt,this.environmentIntensity=1,this.environmentRotation=new Wt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Kr extends In{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ca=new k,da=new k,ao=new tt,mi=new fa,Ki=new wi,qa=new k,ro=new k;class so extends dt{constructor(e=new St,t=new Kr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let a=1,r=t.count;a<r;a++)ca.fromBufferAttribute(t,a-1),da.fromBufferAttribute(t,a),n[a]=n[a-1],n[a]+=ca.distanceTo(da);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ki.copy(n.boundingSphere),Ki.applyMatrix4(a),Ki.radius+=r,e.ray.intersectsSphere(Ki)===!1)return;ao.copy(a).invert(),mi.copy(e.ray).applyMatrix4(ao);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){const p=Math.max(0,s.start),g=Math.min(d.count,s.start+s.count);for(let y=p,m=g-1;y<m;y+=c){const u=d.getX(y),w=d.getX(y+1),E=Zi(this,e,mi,l,u,w);E&&t.push(E)}if(this.isLineLoop){const y=d.getX(g-1),m=d.getX(p),u=Zi(this,e,mi,l,y,m);u&&t.push(u)}}else{const p=Math.max(0,s.start),g=Math.min(h.count,s.start+s.count);for(let y=p,m=g-1;y<m;y+=c){const u=Zi(this,e,mi,l,y,y+1);u&&t.push(u)}if(this.isLineLoop){const y=Zi(this,e,mi,l,g-1,p);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Zi(i,e,t,n,a,r){const s=i.geometry.attributes.position;if(ca.fromBufferAttribute(s,a),da.fromBufferAttribute(s,r),t.distanceSqToSegment(ca,da,qa,ro)>n)return;qa.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(qa);if(!(l<e.near||l>e.far))return{distance:l,point:ro.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class Xo extends In{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const oo=new tt,Br=new fa,Ji=new wi,Qi=new k;class np extends dt{constructor(e=new St,t=new Xo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere),Ji.applyMatrix4(a),Ji.radius+=r,e.ray.intersectsSphere(Ji)===!1)return;oo.copy(a).invert(),Br.copy(e.ray).applyMatrix4(oo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let g=h,y=p;g<y;g++){const m=c.getX(g);Qi.fromBufferAttribute(f,m),lo(Qi,m,l,a,e,t,this)}}else{const h=Math.max(0,s.start),p=Math.min(f.count,s.start+s.count);for(let g=h,y=p;g<y;g++)Qi.fromBufferAttribute(f,g),lo(Qi,g,l,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function lo(i,e,t,n,a,r,s){const o=Br.distanceSqToPoint(i);if(o<t){const l=new k;Br.closestPointToPoint(i,l),l.applyMatrix4(n);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class ip extends vt{constructor(e,t,n,a,r,s,o,l,c){super(e,t,n,a,r,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ap{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,a=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),r+=n.distanceTo(a),t.push(r),a=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let a=0;const r=n.length;let s;t?s=t:s=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(a=Math.floor(o+(l-o)/2),c=n[a]-s,c<0)o=a+1;else if(c>0)l=a-1;else{l=a;break}if(a=l,n[a]===s)return a/(r-1);const d=n[a],h=n[a+1]-d,p=(s-d)/h;return(a+p)/(r-1)}getTangent(e,t){let a=e-1e-4,r=e+1e-4;a<0&&(a=0),r>1&&(r=1);const s=this.getPoint(a),o=this.getPoint(r),l=t||(s.isVector2?new Xe:new k);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new k,a=[],r=[],s=[],o=new k,l=new tt;for(let p=0;p<=e;p++){const g=p/e;a[p]=this.getTangentAt(g,new k)}r[0]=new k,s[0]=new k;let c=Number.MAX_VALUE;const d=Math.abs(a[0].x),f=Math.abs(a[0].y),h=Math.abs(a[0].z);d<=c&&(c=d,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(a[0],n).normalize(),r[0].crossVectors(a[0],o),s[0].crossVectors(a[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(a[p-1],a[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(pt(a[p-1].dot(a[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}s[p].crossVectors(a[p],r[p])}if(t===!0){let p=Math.acos(pt(r[0].dot(r[e]),-1,1));p/=e,a[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(a[g],p*g)),s[g].crossVectors(a[g],r[g])}return{tangents:a,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function rp(i,e){const t=1-i;return t*t*e}function sp(i,e){return 2*(1-i)*i*e}function op(i,e){return i*i*e}function Ya(i,e,t,n){return rp(i,e)+sp(i,t)+op(i,n)}class lp extends ap{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){const n=t,a=this.v0,r=this.v1,s=this.v2;return n.set(Ya(e,a.x,r.x,s.x),Ya(e,a.y,r.y,s.y),Ya(e,a.z,r.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zr extends St{constructor(e=.5,t=1,n=32,a=1,r=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:a,thetaStart:r,thetaLength:s},n=Math.max(3,n),a=Math.max(1,a);const o=[],l=[],c=[],d=[];let f=e;const h=(t-e)/a,p=new k,g=new Xe;for(let y=0;y<=a;y++){for(let m=0;m<=n;m++){const u=r+m/n*s;p.x=f*Math.cos(u),p.y=f*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,d.push(g.x,g.y)}f+=h}for(let y=0;y<a;y++){const m=y*(n+1);for(let u=0;u<n;u++){const w=u+m,E=w,x=w+n+1,N=w+n+2,A=w+1;o.push(E,x,A),o.push(x,N,A)}}this.setIndex(o),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class _i extends St{constructor(e=1,t=32,n=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(s+o,Math.PI);let c=0;const d=[],f=new k,h=new k,p=[],g=[],y=[],m=[];for(let u=0;u<=n;u++){const w=[],E=u/n;let x=0;u===0&&s===0?x=.5/t:u===n&&l===Math.PI&&(x=-.5/t);for(let N=0;N<=t;N++){const A=N/t;f.x=-e*Math.cos(a+A*r)*Math.sin(s+E*o),f.y=e*Math.cos(s+E*o),f.z=e*Math.sin(a+A*r)*Math.sin(s+E*o),g.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),m.push(A+x,1-E),w.push(c++)}d.push(w)}for(let u=0;u<n;u++)for(let w=0;w<t;w++){const E=d[u][w+1],x=d[u][w],N=d[u+1][w],A=d[u+1][w+1];(u!==0||s>0)&&p.push(E,x,A),(u!==n-1||l<Math.PI)&&p.push(x,N,A)}this.setIndex(p),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(y,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cp extends In{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dp extends Kr{static get type(){return"LineDashedMaterial"}constructor(e){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class qo extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ja=new tt,co=new k,uo=new k;class up{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yr,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;co.setFromMatrixPosition(e.matrixWorld),t.position.copy(co),uo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uo),t.updateMatrixWorld(),ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hp extends up{constructor(){super(new zo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ho extends qo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new hp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fp extends qo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const fo=new tt;class pp{constructor(e,t,n=0,a=1/0){this.ray=new fa(e,t),this.near=n,this.far=a,this.camera=null,this.layers=new qr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return fo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fo),this}intersectObject(e,t=!0,n=[]){return Or(e,this,n,t),n.sort(po),n}intersectObjects(e,t=!0,n=[]){for(let a=0,r=e.length;a<r;a++)Or(e[a],this,n,t);return n.sort(po),n}}function po(i,e){return i.distance-e.distance}function Or(i,e,t,n){let a=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(a=!1),a===!0&&n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)Or(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zr);class mp{constructor(e,t={}){this.container=document.getElementById(e),this.container&&(this.options=Object.assign({autoRotate:!0,rotationSpeed:.002,onSelectPin:null},t),this.scene=null,this.camera=null,this.renderer=null,this.globeGroup=null,this.pins=[],this.raycaster=new pp,this.mouse=new Xe,this.isDragging=!1,this.previousMousePosition={x:0,y:0},this.targetRotation={x:.2,y:0},this.currentRotation={x:.2,y:0},this.init())}init(){const e=this.container.clientWidth||500,t=this.container.clientHeight||450;this.scene=new tp,this.camera=new Pt(45,e/t,.1,1e3),this.camera.position.z=240,this.renderer=new ep({antialias:!0,alpha:!0}),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.container.innerHTML="",this.container.appendChild(this.renderer.domElement);const n=new fp(14544639,1.2);this.scene.add(n);const a=new ho(3900150,2);a.position.set(200,150,200),this.scene.add(a);const r=new ho(440020,1);r.position.set(-200,-100,-100),this.scene.add(r),this.globeGroup=new yi,this.scene.add(this.globeGroup);const s=75,o=new _i(s,64,64),l=this.createStylizedGlobeTexture(),c=new cp({map:l,roughness:.7,metalness:.2,bumpScale:.05});this.globeMesh=new Tt(o,c),this.globeGroup.add(this.globeMesh);const d=new _i(s*1.15,64,64),f=new rn({vertexShader:`
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.6 - dot(vNormal, vec3(0, 0, 1.0)), 2.2);
          gl_FragColor = vec4(0.23, 0.51, 0.96, 1.0) * intensity * 1.4;
        }
      `,blending:Ka,side:gt,transparent:!0}),h=new Tt(d,f);this.globeGroup.add(h),this.createStarfield(),this.createPins(s),this.createFlightArcs(s),this.setupInteractions(),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate),window.addEventListener("resize",()=>this.onResize())}createStylizedGlobeTexture(){const e=document.createElement("canvas");e.width=2048,e.height=1024;const t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,e.height);n.addColorStop(0,"#0a1026"),n.addColorStop(.5,"#070b1a"),n.addColorStop(1,"#0a1026"),t.fillStyle=n,t.fillRect(0,0,e.width,e.height),t.strokeStyle="rgba(59, 130, 246, 0.12)",t.lineWidth=1.5;for(let r=0;r<=e.height;r+=64)t.beginPath(),t.moveTo(0,r),t.lineTo(e.width,r),t.stroke();for(let r=0;r<=e.width;r+=64)t.beginPath(),t.moveTo(r,0),t.lineTo(r,e.height),t.stroke();return t.fillStyle="#1e3a8a",this.drawStylizedContinents(t,e.width,e.height),new ip(e)}drawStylizedContinents(e,t,n){const a=[{cx:t*.72,cy:n*.42,rx:t*.18,ry:n*.2},{cx:t*.68,cy:n*.48,rx:t*.08,ry:n*.12},{cx:t*.52,cy:n*.32,rx:t*.09,ry:n*.12},{cx:t*.53,cy:n*.55,rx:t*.11,ry:n*.22},{cx:t*.24,cy:n*.32,rx:t*.16,ry:n*.18},{cx:t*.31,cy:n*.68,rx:t*.09,ry:n*.22},{cx:t*.83,cy:n*.72,rx:t*.08,ry:n*.12},{cx:t*.86,cy:n*.38,rx:t*.04,ry:n*.1}];e.fillStyle="rgba(56, 189, 248, 0.45)",a.forEach(r=>{for(let s=0;s<400;s++){const o=Math.random()*Math.PI*2,l=Math.pow(Math.random(),.6),c=r.cx+Math.cos(o)*r.rx*l,d=r.cy+Math.sin(o)*r.ry*l;e.beginPath(),e.arc(c,d,2+Math.random()*2,0,Math.PI*2),e.fill()}}),e.fillStyle="rgba(99, 102, 241, 0.8)",a.forEach(r=>{for(let s=0;s<80;s++){const o=Math.random()*Math.PI*2,l=r.cx+Math.cos(o)*r.rx*.75,c=r.cy+Math.sin(o)*r.ry*.75;e.beginPath(),e.arc(l,c,3,0,Math.PI*2),e.fill()}})}createStarfield(){const t=new St,n=new Float32Array(600*3),a=new Float32Array(600*3);for(let o=0;o<600*3;o+=3){n[o]=(Math.random()-.5)*800,n[o+1]=(Math.random()-.5)*800,n[o+2]=(Math.random()-.5)*800;const l=Math.random();a[o]=.6+l*.4,a[o+1]=.8+l*.2,a[o+2]=1}t.setAttribute("position",new Lt(n,3)),t.setAttribute("color",new Lt(a,3));const r=new Xo({size:2.2,vertexColors:!0,transparent:!0,opacity:.75}),s=new np(t,r);this.scene.add(s)}latLngToVector3(e,t,n){const a=(90-e)*(Math.PI/180),r=(t+180)*(Math.PI/180),s=-(n*Math.sin(a)*Math.cos(r)),o=n*Math.sin(a)*Math.sin(r),l=n*Math.cos(a);return new k(s,l,o)}createPins(e){[{id:"darjeeling",name:"Darjeeling",lat:27.041,lng:88.2663,color:440020},{id:"goa",name:"Goa",lat:15.2993,lng:74.124,color:3900150},{id:"tokyo",name:"Tokyo",lat:35.6762,lng:139.6503,color:15485081},{id:"paris",name:"Paris",lat:48.8566,lng:2.3522,color:11032055},{id:"bali",name:"Bali",lat:-8.4095,lng:115.1889,color:1096065},{id:"zurich",name:"Swiss Alps",lat:46.8182,lng:8.2275,color:16096779}].forEach(n=>{const a=this.latLngToVector3(n.lat,n.lng,e),r=new _i(2.4,16,16),s=new la({color:n.color}),o=new Tt(r,s);o.position.copy(a),o.userData=n;const l=new Zr(2.8,4.4,32),c=new la({color:n.color,side:Gt,transparent:!0,opacity:.8}),d=new Tt(l,c);d.position.copy(a.clone().multiplyScalar(1.01)),d.lookAt(new k(0,0,0));const f=[a,a.clone().multiplyScalar(.97)],h=new St().setFromPoints(f),p=new Kr({color:n.color,linewidth:2}),g=new so(h,p);this.globeGroup.add(o),this.globeGroup.add(d),this.globeGroup.add(g),this.pins.push({mesh:o,ring:d,loc:n})})}createFlightArcs(e){[{from:{lat:27.041,lng:88.2663},to:{lat:35.6762,lng:139.6503}},{from:{lat:15.2993,lng:74.124},to:{lat:27.041,lng:88.2663}},{from:{lat:48.8566,lng:2.3522},to:{lat:27.041,lng:88.2663}}].forEach(n=>{const a=this.latLngToVector3(n.from.lat,n.from.lng,e),r=this.latLngToVector3(n.to.lat,n.to.lng,e),s=a.clone().add(r).multiplyScalar(.5),o=a.distanceTo(r);s.normalize().multiplyScalar(e+o*.28);const c=new lp(a,s,r).getPoints(50),d=new St().setFromPoints(c),f=new dp({color:6333946,dashSize:3,gapSize:2,transparent:!0,opacity:.65}),h=new so(d,f);h.computeLineDistances(),this.globeGroup.add(h)})}setupInteractions(){const e=this.renderer.domElement;e.addEventListener("mousedown",t=>{this.isDragging=!0,this.previousMousePosition={x:t.clientX,y:t.clientY}}),window.addEventListener("mousemove",t=>{if(this.isDragging){const n=t.clientX-this.previousMousePosition.x,a=t.clientY-this.previousMousePosition.y;this.targetRotation.y+=n*.005,this.targetRotation.x+=a*.005,this.targetRotation.x=Math.max(-Math.PI/3,Math.min(Math.PI/3,this.targetRotation.x)),this.previousMousePosition={x:t.clientX,y:t.clientY}}}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),e.addEventListener("touchstart",t=>{t.touches.length===1&&(this.isDragging=!0,this.previousMousePosition={x:t.touches[0].clientX,y:t.touches[0].clientY})},{passive:!0}),window.addEventListener("touchmove",t=>{if(this.isDragging&&t.touches.length===1){const n=t.touches[0].clientX-this.previousMousePosition.x,a=t.touches[0].clientY-this.previousMousePosition.y;this.targetRotation.y+=n*.005,this.targetRotation.x+=a*.005,this.previousMousePosition={x:t.touches[0].clientX,y:t.touches[0].clientY}}},{passive:!0}),window.addEventListener("touchend",()=>{this.isDragging=!1}),e.addEventListener("click",t=>{const n=e.getBoundingClientRect();this.mouse.x=(t.clientX-n.left)/n.width*2-1,this.mouse.y=-((t.clientY-n.top)/n.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const a=this.pins.map(s=>s.mesh),r=this.raycaster.intersectObjects(a);if(r.length>0){const s=r[0].object.userData;this.options.onSelectPin&&this.options.onSelectPin(s)}})}focusOnLocation(e,t){const n=(90-e)*(Math.PI/180),a=(t+180)*(Math.PI/180);this.targetRotation.x=n-Math.PI/2,this.targetRotation.y=-(a-Math.PI/2)}onResize(){if(!this.container||!this.renderer||!this.camera)return;const e=this.container.clientWidth,t=this.container.clientHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}animate(){if(requestAnimationFrame(this.animate),this.globeGroup){this.options.autoRotate&&!this.isDragging&&(this.targetRotation.y+=this.options.rotationSpeed),this.currentRotation.x+=(this.targetRotation.x-this.currentRotation.x)*.08,this.currentRotation.y+=(this.targetRotation.y-this.currentRotation.y)*.08,this.globeGroup.rotation.x=this.currentRotation.x,this.globeGroup.rotation.y=this.currentRotation.y;const e=performance.now()*.003;this.pins.forEach((t,n)=>{const a=1+Math.sin(e+n)*.25;t.ring.scale.set(a,a,1)})}this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera)}destroy(){this.renderer&&this.renderer.domElement&&this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)}}class gp{constructor(e,t={}){this.containerId=e,this.options=Object.assign({center:[20.5937,78.9629],zoom:5,onMarkerClick:null},t),this.map=null,this.markersGroup=null,this.routeLayer=null,this.hazardLayer=null,this.userLocationMarker=null,this.init()}init(){const e=document.getElementById(this.containerId);!e||!window.L||(e._leaflet_id&&(e._leaflet_id=null),this.map=window.L.map(this.containerId,{zoomControl:!0,attributionControl:!0}).setView(this.options.center,this.options.zoom),window.L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",maxZoom:19}).addTo(this.map),this.markersGroup=window.L.layerGroup().addTo(this.map),this.hazardLayer=window.L.layerGroup().addTo(this.map),setTimeout(()=>{this.map.invalidateSize()},200))}loadDestinationItinerary(e,t=0){if(!this.map||!e)return;this.markersGroup.clearLayers(),this.hazardLayer.clearLayers(),this.routeLayer&&(this.map.removeLayer(this.routeLayer),this.routeLayer=null);const n=e.days[t]||e.days[0],a=[],r=[];if(n&&n.hours&&n.hours.forEach((s,o)=>{const l=s.lat||e.lat+(Math.random()-.5)*.04,c=s.lng||e.lng+(Math.random()-.5)*.04,d=[l,c];a.push(d),r.push(d);const f=`
          <div style="
            background: linear-gradient(135deg, #2563eb, #06b6d4);
            color: #fff;
            font-weight: 700;
            font-size: 11px;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #fff;
            box-shadow: 0 4px 10px rgba(0,0,0,0.5);
          ">${o+1}</div>
        `,h=window.L.divIcon({html:f,className:"custom-leaflet-pin",iconSize:[28,28],iconAnchor:[14,14]}),p=window.L.marker(d,{icon:h}).addTo(this.markersGroup),g=`
          <div style="font-family: 'Plus Jakarta Sans', sans-serif; min-width: 180px; color: #0f172a;">
            <div style="font-size: 10px; color: #2563eb; font-weight: 700; text-transform: uppercase;">
              ${s.time}
            </div>
            <strong style="font-size: 13px; display: block; margin: 2px 0;">${s.title}</strong>
            <p style="font-size: 11px; color: #475569; margin: 4px 0;">${s.description.slice(0,80)}...</p>
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 11px; font-weight: 600; border-top: 1px solid #e2e8f0; padding-top: 4px; margin-top: 4px;">
              <span style="color: #059669;">${s.cost}</span>
              <span style="color: #64748b;">⭐ ${s.rating}</span>
            </div>
          </div>
        `;p.bindPopup(g)}),a.length>1&&(this.routeLayer=window.L.polyline(a,{color:"#3b82f6",weight:4,opacity:.85,dashArray:"8, 8",lineCap:"round"}).addTo(this.map)),e.hazard){const s=[e.lat+.02,e.lng-.01],o=e.hazard.level==="High"?"#ef4444":"#f59e0b";window.L.circle(s,{color:o,fillColor:o,fillOpacity:.2,radius:3500}).addTo(this.hazardLayer).bindPopup(`
        <div style="color: #0f172a;">
          <strong style="color: ${o}; font-size: 12px;">⚠️ ${e.hazard.type}</strong>
          <p style="font-size: 11px; margin-top: 4px;">Risk Probability: <strong>${e.hazard.probability}%</strong></p>
          <p style="font-size: 10px; color: #475569;">${e.hazard.advisory.slice(0,90)}...</p>
        </div>
      `)}r.length>0?this.map.fitBounds(r,{padding:[40,40],maxZoom:14}):this.map.setView([e.lat,e.lng],12)}locateUser(e=null,t=null){if(!navigator.geolocation){t&&t("Geolocation not supported by device.");return}navigator.geolocation.getCurrentPosition(n=>{const a=[n.coords.latitude,n.coords.longitude];if(this.userLocationMarker)this.userLocationMarker.setLatLng(a);else{const r=window.L.divIcon({html:`<div style="
              width: 20px;
              height: 20px;
              background: #10b981;
              border: 3px solid #fff;
              border-radius: 50%;
              box-shadow: 0 0 15px #10b981;
              animation: userGlow 2s infinite;
            "></div>`,className:"user-live-pin",iconSize:[20,20],iconAnchor:[10,10]});this.userLocationMarker=window.L.marker(a,{icon:r}).addTo(this.map),this.userLocationMarker.bindPopup("<strong>You are here!</strong><br>GPS Coordinates Locked.")}this.map.flyTo(a,14),e&&e(n.coords)},n=>{console.warn("Geolocation warning, falling back to simulated lock:",n),e&&e({latitude:27.041,longitude:88.2663,accuracy:5})},{enableHighAccuracy:!0,timeout:8e3})}destroy(){this.map&&(this.map.remove(),this.map=null)}}class vp{constructor(e){this.canvas=document.getElementById(e),this.canvas&&(this.ctx=this.canvas.getContext("2d"),this.animationId=null,this.state="idle",this.barCount=64,this.phase=0,this.audioContext=null,this.analyser=null,this.dataArray=null,this.init())}init(){this.resize(),window.addEventListener("resize",()=>this.resize()),this.render=this.render.bind(this),this.render()}resize(){this.canvas&&(this.width=this.canvas.clientWidth||600,this.height=this.canvas.clientHeight||160,this.canvas.width=this.width*(window.devicePixelRatio||1),this.canvas.height=this.height*(window.devicePixelRatio||1),this.ctx.scale(window.devicePixelRatio||1,window.devicePixelRatio||1))}setState(e){this.state=e}render(){if(this.animationId=requestAnimationFrame(this.render),!this.ctx)return;this.ctx.clearRect(0,0,this.width,this.height),this.phase+=.05;const e=this.height/2,t=this.width/2,n=this.width/(this.barCount*1.5),a=this.ctx.createLinearGradient(0,0,this.width,0);a.addColorStop(0,"rgba(59, 130, 246, 0.2)"),a.addColorStop(.3,"rgba(6, 182, 212, 0.9)"),a.addColorStop(.5,"rgba(255, 255, 255, 1)"),a.addColorStop(.7,"rgba(168, 85, 247, 0.9)"),a.addColorStop(1,"rgba(236, 72, 153, 0.2)"),this.ctx.lineWidth=3,this.ctx.lineCap="round",this.ctx.strokeStyle=a;const r=Math.floor(this.barCount/2);for(let s=0;s<r;s++){let o=8;const l=s/r;if(this.state==="speaking"){const p=Math.sin(this.phase*2+s*.4)*Math.cos(this.phase*3-s*.2);o=15+Math.abs(p)*55*Math.pow(1-l,.7)}else if(this.state==="listening"){const p=Math.sin(this.phase*3+s*.5);o=10+Math.abs(p)*35*Math.pow(1-l,.8)}else{const p=Math.sin(this.phase*1.2+s*.3);o=6+Math.abs(p)*14*(1-l)}const c=Math.max(4,o),d=(s+1)*n*1.2,f=t+d;f<this.width-20&&this.drawBar(f,e,c);const h=t-d;h>20&&this.drawBar(h,e,c)}this.drawCenterGlow(t,e)}drawBar(e,t,n){this.ctx.beginPath(),this.ctx.moveTo(e,t-n),this.ctx.lineTo(e,t+n),this.ctx.stroke()}drawCenterGlow(e,t){const n=this.state==="speaking"?36+Math.sin(this.phase*4)*6:this.state==="listening"?32+Math.sin(this.phase*3)*5:28,a=this.ctx.createRadialGradient(e,t,4,e,t,n);a.addColorStop(0,"rgba(6, 182, 212, 0.4)"),a.addColorStop(.7,"rgba(59, 130, 246, 0.15)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.fillStyle=a,this.ctx.beginPath(),this.ctx.arc(e,t,n,0,Math.PI*2),this.ctx.fill()}destroy(){this.animationId&&cancelAnimationFrame(this.animationId)}}class yp{constructor(e={}){this.activePersona="alex",this.currentLanguage="en",this.visualizer=e.visualizer||null,this.onMessageCallback=e.onMessage||null,this.onSpeechStateCallback=e.onSpeechState||null,this.synth=window.speechSynthesis||null,this.voices=[],this.currentUtterance=null,this.recognition=null,this.isListening=!1,this.messages=[{id:"msg-init",sender:"alex",personaName:"Alex",avatar3d:"👨‍✈️",role:"bot",text:qt.alex.greeting,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}],this.initVoices(),this.initSpeechRecognition()}initVoices(){if(!this.synth)return;const e=()=>{this.voices=this.synth.getVoices()};e(),this.synth.onvoiceschanged!==void 0&&(this.synth.onvoiceschanged=e)}initSpeechRecognition(){const e=window.SpeechRecognition||window.webkitSpeechRecognition;e&&(this.recognition=new e,this.recognition.continuous=!1,this.recognition.interimResults=!1,this.recognition.onstart=()=>{this.isListening=!0,this.visualizer&&this.visualizer.setState("listening"),this.onSpeechStateCallback&&this.onSpeechStateCallback("listening")},this.recognition.onresult=t=>{const n=t.results[0][0].transcript;n&&n.trim()&&this.processUserInput(n.trim())},this.recognition.onerror=()=>{this.isListening=!1,this.visualizer&&this.visualizer.setState("idle"),this.onSpeechStateCallback&&this.onSpeechStateCallback("idle")},this.recognition.onend=()=>{this.isListening=!1,this.visualizer&&this.visualizer.state!=="speaking"&&this.visualizer.setState("idle"),this.onSpeechStateCallback&&this.onSpeechStateCallback("idle")})}startListening(){if(!this.recognition){const e=["Plan Kashmir 3-day trip hour by hour","What is the landslide hazard risk in Manali?","Suggest dress and clothes to carry for Ladakh","How does the offline SOS siren work without internet?"];this.processUserInput(e[Math.floor(Math.random()*e.length)]);return}try{this.currentLanguage==="bn"?this.recognition.lang="bn-BD":this.currentLanguage==="hi"?this.recognition.lang="hi-IN":this.recognition.lang="en-US",this.recognition.start()}catch(e){console.error(e)}}stopListening(){this.recognition&&this.isListening&&this.recognition.stop()}setPersona(e){if(qt[e]){this.activePersona=e;const t=qt[e];let n=t.greeting;this.currentLanguage==="bn"&&(n=t.greetingBn),this.currentLanguage==="hi"&&(n=t.greetingHi);const a={id:"msg-"+Date.now(),sender:t.id,personaName:t.name,avatar3d:t.avatar3d,role:"bot",text:n,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};this.messages.push(a),this.onMessageCallback&&this.onMessageCallback(a),this.speakText(n,e)}}setLanguage(e){this.currentLanguage=e;const t=qt[this.activePersona]||qt.alex;let n=t.greeting;e==="bn"&&(n=t.greetingBn),e==="hi"&&(n=t.greetingHi),this.speakText(n,this.activePersona)}speakText(e,t=this.activePersona){if(!this.synth)return;this.synth.cancel();const n=e.replace(/[*_#`[\]()]/g,"").replace(/₹/g," rupees ").replace(/★/g," stars ").replace(/[\u{1F600}-\u{1F6FF}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}]/gu,""),a=new SpeechSynthesisUtterance(n),r=qt[t]||qt.alex;if(a.pitch=r.voiceConfig.pitch,a.rate=r.voiceConfig.rate,this.voices.length>0){const s=this.currentLanguage==="bn"?"bn":this.currentLanguage==="hi"?"hi":"en";let o=null;r.gender==="female"?o=this.voices.find(l=>l.lang.startsWith(s)&&(l.name.toLowerCase().includes("female")||l.name.toLowerCase().includes("zira")||l.name.toLowerCase().includes("samantha"))):o=this.voices.find(l=>l.lang.startsWith(s)&&(l.name.toLowerCase().includes("male")||l.name.toLowerCase().includes("david"))),o||(o=this.voices.find(l=>l.lang.startsWith(s))||this.voices[0]),o&&(a.voice=o)}a.onstart=()=>{this.visualizer&&this.visualizer.setState("speaking"),this.onSpeechStateCallback&&this.onSpeechStateCallback("speaking")},a.onend=()=>{this.visualizer&&this.visualizer.setState("idle"),this.onSpeechStateCallback&&this.onSpeechStateCallback("idle")},a.onerror=()=>{this.visualizer&&this.visualizer.setState("idle"),this.onSpeechStateCallback&&this.onSpeechStateCallback("idle")},this.currentUtterance=a,this.synth.speak(a)}processUserInput(e){const t={id:"msg-user-"+Date.now(),sender:"user",role:"user",text:e,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};this.messages.push(t),this.onMessageCallback&&this.onMessageCallback(t),setTimeout(()=>{const n=this.generateResponse(e,this.activePersona),a={id:"msg-bot-"+Date.now(),sender:this.activePersona,personaName:qt[this.activePersona].name,avatar3d:qt[this.activePersona].avatar3d,role:"bot",text:n.text,action:n.action||null,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};this.messages.push(a),this.onMessageCallback&&this.onMessageCallback(a),this.speakText(n.spokenText||n.text,this.activePersona)},400)}generateResponse(e,t){const n=e.toLowerCase(),a=t==="alex";if(n.includes("hazard")||n.includes("landslide")||n.includes("cyclone")||n.includes("flood")||n.includes("danger")||n.includes("risk")||n.includes("ams")){let o="manali";n.includes("ladakh")?o="ladakh":n.includes("digha")?o="digha":n.includes("puri")?o="puri":n.includes("kashmir")?o="kashmir":n.includes("kerala")?o="kerala":n.includes("darjeeling")&&(o="darjeeling");const l=Fe[o];return{text:`⚠️ **Natural Hazard Risk Analysis: ${l.name}**

• **Primary Hazard Threat**: ${l.hazard.type}
• **Risk Probability**: **${l.hazard.probability}%** (${l.hazard.level} Threat Level)
• **High-Risk Zones**: ${l.hazard.dangerZones.join(", ")}

📋 **Official AI Safety Protocol**:
${l.hazard.advisory}

*You can dispatch an automated hazard alert email directly from the Hazard tab!*`,spokenText:`Natural hazard analysis for ${l.name}: Primary risk is ${l.hazard.type} with a ${l.hazard.probability} percent probability. ${l.hazard.advisory}`,action:{type:"switch_view",view:"hazard",destination:o}}}if(n.includes("dress")||n.includes("cloth")||n.includes("wear")||n.includes("pack")||n.includes("shoes")||n.includes("carry")){let o="ladakh";n.includes("kashmir")?o="kashmir":n.includes("kerala")?o="kerala":n.includes("varanasi")?o="varanasi":n.includes("ayodhya")?o="ayodhya":n.includes("manali")?o="manali":n.includes("rajasthan")?o="rajasthan":(n.includes("digha")||n.includes("puri"))&&(o="puri");const l=Fe[o],c=l.wardrobe;return{text:`👗 **AI Wardrobe & Packing Advisor for ${l.name}:**

• **Recommended Attire**: ${c.headline}
• **Optimal Fabrics**: ${c.fabrics}
• **Footwear**: ${c.footwear}
• **Sacred / Cultural Etiquette**: ${c.culturalEtiquette}

🎒 **Must-Carry Essentials Checklist**:
`+c.mustCarry.map(d=>`  ✓ ${d}`).join(`
`),spokenText:`For ${l.name}, I recommend ${c.headline}. Make sure to wear ${c.footwear} and adhere to local customs: ${c.culturalEtiquette}`,action:{type:"switch_view",view:"wardrobe",destination:o}}}if(n.includes("offline")||n.includes("no internet")||n.includes("siren")||n.includes("sms"))return{text:`📶 **Zero-Internet Smart SOS & Acoustic Siren Protocol**:

Even with **0% Internet or Mobile Data OFF**, TravelAI Pro protects you:
1. **Satellite GPS Hardware**: Direct chip-level coordinate locking (Lat, Lng, Altitude).
2. **Cellular Carrier Direct SMS**: Triggers native cellular text to **112** with your exact GPS link.
3. **Acoustic Loud Siren**: Uses browser Web Audio synthesizer to blast an emergency siren to guide local search & rescue teams!

*Tap below to open the Offline SOS Command Center.*`,spokenText:"Our offline SOS runs with zero internet using hardware satellite GPS, direct cellular SMS to 112, and an ear-piercing emergency acoustic siren.",action:{type:"switch_view",view:"offline-sos"}};const s=Object.keys(Fe).find(o=>n.includes(o));if(s||n.includes("plan")||n.includes("itinerary")||n.includes("hour")){const o=s||"kashmir",l=Fe[o];return a?{text:`🎯 **Tactical Day & Hour-Wise Schedule for ${l.name} Generated!**

Engineered around terrain, daylight hours, and weather safety:

`+l.days[0].hours.slice(0,4).map(c=>`• **${c.time}**: ${c.title} (${c.cost})`).join(`
`)+`

*Tap below to explore the complete interactive timeline with Leaflet 3D mapping!*`,spokenText:`Tactical plan for ${l.name} ready. Early morning departure, weather-optimized routing, and cultural waypoints mapped hour by hour.`,action:{type:"switch_view",view:"plan",destination:o}}:{text:`✨ **Curated Cultural & Sensory Journey: ${l.name}**

Experience ${l.tagline} with our hour-by-hour itinerary:

`+l.days[0].hours.slice(0,4).map(c=>`🌸 **${c.time}**: ${c.title} — *${c.categoryTag}*`).join(`
`)+`

*Shall we inspect your interactive map and day planner?*`,spokenText:`Here is your cultural itinerary for ${l.name}. Savor authentic local foods, sacred monuments, and stunning golden-hour vistas.`,action:{type:"switch_view",view:"plan",destination:o}}}return a?{text:"Alex here! I can coordinate your **Day & Hour plans for all 12 Indian destinations**, evaluate **Natural Hazard Risks**, test **Zero-Internet Cellular SOS**, or plot routes on our **Interactive Leaflet Map**. What is your objective?",spokenText:"Alex here. Ask me about India's top tourist destinations, landslide and cyclone alerts, or offline emergency tracking."}:{text:"Maya here! Tell me where in India you wish to wander — from Kashmir's floating gardens to Kerala's backwaters and Varanasi's ghats. I'll suggest what to wear, where to eat, and how to stay safe!",spokenText:"Maya here. I can recommend traditional outfits to pack, sacred temple etiquette, or personalized travel plans for all 12 destinations."}}}class _p{constructor(e={}){this.onAuthChange=e.onAuthChange||null,this.currentUser=this.loadUser()}loadUser(){try{const e=localStorage.getItem("travelai_user");if(e)return JSON.parse(e)}catch(e){console.error("Error loading user from localStorage:",e)}return{name:"Ananya Sharma",email:"ananya.sharma@travelai.in",phone:"+91 98765 43210",state:"West Bengal",role:"Incredible India Explorer",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",tripsPlanned:12,placesExplored:8,upcomingTrips:2,savedPlaces:15,authProvider:"system"}}saveUser(e){this.currentUser=e;try{localStorage.setItem("travelai_user",JSON.stringify(e))}catch(t){console.error("Error saving user to localStorage:",t)}this.onAuthChange&&this.onAuthChange(this.currentUser)}async loginWithOAuth(e,t={}){try{const s=await fetch("/api/auth/oauth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({provider:e,email:t.email,name:t.name,avatar:t.avatar})});if(s.ok){const o=await s.json();return this.saveUser(o.user),o.user}}catch(s){console.warn("Backend OAuth endpoint offline, falling back to client session:",s)}const n={google:{name:t.name||"Google Traveler",email:t.email||"user@gmail.com",role:"Google Verified Explorer",avatar:t.avatar||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80",badge:"Google Cloud"},github:{name:t.name||"GitHub Developer Traveler",email:t.email||"dev@github.com",role:"GitHub Open Source Explorer",avatar:t.avatar||"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80",badge:"GitHub Pro"},apple:{name:t.name||"Apple ID Traveler",email:t.email||"traveler@icloud.com",role:"Apple Verified Traveler",avatar:t.avatar||"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",badge:"Apple ID"},digilocker:{name:t.name||"Aadhaar Verified Citizen",email:t.email||"citizen@digilocker.gov.in",role:"DigiLocker Govt. ID Verified",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",badge:"Govt of India"}},r={...n[e]||n.google,authProvider:e,state:"National Explorer",tripsPlanned:14,placesExplored:9,upcomingTrips:2,savedPlaces:18};return this.saveUser(r),r}login(e,t,n=!0){if(!e||!t)throw new Error("कृपया ईमेल और पासवर्ड दर्ज करें (Please enter credentials).");if(!e.includes("@")&&e.length<3)throw new Error("Please enter a valid email address or IRCTC traveler ID.");if(t.length<4)throw new Error("Password must be at least 4 characters long.");const a=e.includes("@")?e.split("@")[0]:e,s={name:a.charAt(0).toUpperCase()+a.slice(1),email:e,role:"Verified Indian Traveler",avatar:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80",state:"West Bengal",tripsPlanned:12,placesExplored:8,upcomingTrips:2,savedPlaces:15,authProvider:"password"};return n?this.saveUser(s):(this.currentUser=s,this.onAuthChange&&this.onAuthChange(this.currentUser)),s}loginWithMobile(e,t="1234"){const n=e.replace(/[^0-9]/g,"");if(n.length!==10)throw new Error("कृपया 10 अंकों का वैध भारतीय मोबाइल नंबर दर्ज करें (Enter 10-digit Indian Mobile Number).");if(!t||t.length<4)throw new Error("कृपया 4 अंकों का वैध OTP दर्ज करें (Please enter 4-digit OTP).");const a={name:`Traveler (+91 ${n.slice(-4)})`,email:`user.${n}@travelai.in`,phone:`+91 ${n}`,role:"OTP Verified Traveler",avatar:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80",state:"India",tripsPlanned:8,placesExplored:5,upcomingTrips:1,savedPlaces:10,authProvider:"mobile_otp"};return this.saveUser(a),a}register(e,t,n,a,r="West Bengal"){if(!e||!t||!n)throw new Error("Please fill in all required fields.");if(!t.includes("@"))throw new Error("Please provide a valid email address.");if(n.length<6)throw new Error("Password must be at least 6 characters long.");if(n!==a)throw new Error("Passwords do not match. Please re-enter.");const s={name:e,email:t,state:r,role:`Explorer from ${r}`,avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",tripsPlanned:1,placesExplored:0,upcomingTrips:1,savedPlaces:3,authProvider:"registered"};return this.saveUser(s),s}logout(){this.currentUser=null;try{localStorage.removeItem("travelai_user")}catch(e){console.error(e)}this.onAuthChange&&this.onAuthChange(null)}}class bp{constructor(e={}){this.currentDestination=e.defaultDestination||"darjeeling",this.selectedDayIndex=0,this.weatherMode="rainy",this.currency=e.currency||"INR",this.currencyRate=1,this.currencySymbol="₹",this.activePlan=this.generatePlan(this.currentDestination)}setCurrency(e){this.currency=e,e==="USD"?(this.currencyRate=.012,this.currencySymbol="$"):e==="EUR"?(this.currencyRate=.011,this.currencySymbol="€"):(this.currencyRate=1,this.currencySymbol="₹")}formatCost(e){if(e===0)return"Free";const t=Math.round(e*this.currencyRate);return`${this.currencySymbol}${t.toLocaleString()}`}generatePlan(e){this.currentDestination=e;const t=Fe[e]||Fe.darjeeling,n=JSON.parse(JSON.stringify(t.days));return{destination:t.name,tagline:t.tagline,weather:t.weather,days:n}}getCurrentDay(){return!this.activePlan||!this.activePlan.days.length?null:this.activePlan.days[this.selectedDayIndex]||this.activePlan.days[0]}selectDay(e){return e>=0&&e<this.activePlan.days.length&&(this.selectedDayIndex=e),this.getCurrentDay()}toggleWeatherMode(){return this.weatherMode=this.weatherMode==="rainy"?"sunny":"rainy",this.weatherMode}addCustomActivity(e,t){return this.activePlan.days[e]?(this.activePlan.days[e].hours.push({time:t.time||"04:00 PM - 05:00 PM",title:t.title||"Custom Activity",description:t.description||"Personal exploration time.",category:t.category||"Leisure",categoryTag:"Custom",indoor:!0,cost:this.formatCost(t.costNum||0),costNum:t.costNum||0,location:t.location||"City Center",weatherSuitability:"All Weather",badgeColor:"purple",rating:5,custom:!0}),!0):!1}toggleHourCompleted(e,t){if(this.activePlan.days[e]&&this.activePlan.days[e].hours[t]){const n=this.activePlan.days[e].hours[t];return n.completed=!n.completed,n.completed}return!1}calculateDayTotalCost(e){const t=this.activePlan.days[e];if(!t)return 0;const n=t.hours.reduce((a,r)=>a+(r.costNum||0),0);return this.formatCost(n)}}class xp{constructor(e={}){this.currentCoords={latitude:27.041,longitude:88.2663,altitude:2042,accuracy:6,heading:0,speed:0,timestamp:Date.now()},this.isTracking=!1,this.watchId=null,this.audioCtx=null,this.sirenOscillator=null,this.sirenGain=null,this.isSirenPlaying=!1,this.sirenInterval=null,this.isStrobeActive=!1,this.strobeInterval=null,this.activeSosTicket=null,this.onLocationUpdate=e.onLocationUpdate||null,this.onStrobeChange=e.onStrobeChange||null,this.initHardwareGPS()}initHardwareGPS(){"geolocation"in navigator?this.watchId=navigator.geolocation.watchPosition(e=>{this.currentCoords={latitude:e.coords.latitude,longitude:e.coords.longitude,altitude:e.coords.altitude||2042,accuracy:Math.round(e.coords.accuracy),heading:e.coords.heading||0,speed:e.coords.speed||0,timestamp:e.timestamp};try{localStorage.setItem("travelai_last_gps",JSON.stringify(this.currentCoords))}catch{}this.onLocationUpdate&&this.onLocationUpdate(this.currentCoords)},e=>{console.warn("Satellite GPS offline warning (using cached lock):",e),this.loadCachedCoordinates()},{enableHighAccuracy:!0,maximumAge:5e3,timeout:1e4}):this.loadCachedCoordinates()}loadCachedCoordinates(){try{const e=localStorage.getItem("travelai_last_gps");e&&(this.currentCoords=JSON.parse(e))}catch{}}setManualCoordinates(e,t,n=2e3){this.currentCoords={...this.currentCoords,latitude:parseFloat(e)||this.currentCoords.latitude,longitude:parseFloat(t)||this.currentCoords.longitude,altitude:parseFloat(n)||this.currentCoords.altitude,accuracy:2,timestamp:Date.now()};try{localStorage.setItem("travelai_last_gps",JSON.stringify(this.currentCoords))}catch{}return this.onLocationUpdate&&this.onLocationUpdate(this.currentCoords),this.currentCoords}isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}isMobile(){return/Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent)||window.innerWidth<768}getSOSMessageText(e=""){const t=this.currentCoords,n=`https://maps.google.com/?q=${t.latitude.toFixed(5)},${t.longitude.toFixed(5)}`;return`🚨 EMERGENCY SOS ALERT! 🚨
Tourist in distress. Immediate rescue required!
GPS: Lat ${t.latitude.toFixed(5)}, Lng ${t.longitude.toFixed(5)}
Altitude: ~${Math.round(t.altitude)}m (Accuracy: ±${t.accuracy}m)
Map: ${n}
`+(e?`Emergency Note: ${e}
`:"")+`Time: ${new Date().toLocaleTimeString()} IST`}generateOfflineCellularSMS(e="112",t=""){const n=encodeURIComponent(this.getSOSMessageText(t)),a=this.isIOS()?"&body=":"?body=";return`sms:${e}${a}${n}`}generateWhatsAppSOS(e="",t=""){const n=encodeURIComponent(this.getSOSMessageText(t));return`https://wa.me/${e?e.replace(/[^0-9]/g,""):""}?text=${n}`}getEmergencyDialUrl(e="112"){return`tel:${e}`}async copyDistressToClipboard(e=""){const t=this.getSOSMessageText(e);if(navigator.clipboard&&navigator.clipboard.writeText)return await navigator.clipboard.writeText(t),t;const n=document.createElement("textarea");return n.value=t,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),t}async broadcastToCloud(e="Tourist in Distress",t="+91 98765 43210",n=""){try{const a={latitude:this.currentCoords.latitude,longitude:this.currentCoords.longitude,altitude:this.currentCoords.altitude,accuracy:this.currentCoords.accuracy,travelerName:e,phone:t,note:n},r=await fetch("/api/sos/broadcast",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(r.ok){const s=await r.json();return this.activeSosTicket=s.ticket,s}}catch(a){console.warn("Offline mode: Could not reach backend SOS broadcast endpoint directly:",a)}return this.activeSosTicket=`SOS-OFFLINE-${Date.now().toString().slice(-5)}`,{success:!0,ticket:this.activeSosTicket,offline:!0,message:"Offline emergency lock registered locally on device."}}async toggleAcousticSiren(){return this.isSirenPlaying?(this.stopAcousticSiren(),!1):await this.startAcousticSiren()}async startAcousticSiren(){try{const e=window.AudioContext||window.webkitAudioContext;this.audioCtx||(this.audioCtx=new e),this.audioCtx.state==="suspended"&&await this.audioCtx.resume(),this.sirenOscillator=this.audioCtx.createOscillator(),this.sirenGain=this.audioCtx.createGain(),this.sirenOscillator.type="sawtooth",this.sirenOscillator.frequency.setValueAtTime(850,this.audioCtx.currentTime),this.sirenGain.gain.setValueAtTime(.85,this.audioCtx.currentTime),this.sirenOscillator.connect(this.sirenGain),this.sirenGain.connect(this.audioCtx.destination),this.sirenOscillator.start(),this.isSirenPlaying=!0;let t=!1;return this.sirenInterval=setInterval(()=>{if(!this.isSirenPlaying||!this.audioCtx)return;const n=t?850:1450;this.sirenOscillator.frequency.exponentialRampToValueAtTime(n,this.audioCtx.currentTime+.35),t=!t},400),this.startVisualStrobe(),!0}catch(e){return console.error("AudioContext siren failed to initialize:",e),!1}}stopAcousticSiren(){if(this.sirenInterval&&(clearInterval(this.sirenInterval),this.sirenInterval=null),this.sirenOscillator){try{this.sirenOscillator.stop(),this.sirenOscillator.disconnect()}catch{}this.sirenOscillator=null}this.isSirenPlaying=!1,this.stopVisualStrobe()}startVisualStrobe(){this.isStrobeActive=!0;let e=!1;this.strobeInterval=setInterval(()=>{e=!e,this.onStrobeChange&&this.onStrobeChange(e?"#ef4444":"#ffffff")},250)}stopVisualStrobe(){this.isStrobeActive=!1,this.strobeInterval&&(clearInterval(this.strobeInterval),this.strobeInterval=null),this.onStrobeChange&&this.onStrobeChange(null)}getOfflineFirstAidGuide(e="ams"){const t={ams:{title:"Acute Mountain Sickness (High Altitude)",symptoms:"Throbbing headache, nausea, dizziness, insomnia above 8,000 ft (Leh, Manali, Kedarnath).",actions:["1. STOP immediate ascent immediately. Do NOT push higher.","2. Descend 1,500 - 3,000 feet if symptoms don't resolve in 12 hours.","3. Administer portable oxygen (2-4 L/min) or Diamox 250mg.","4. Force hydration with warm electrolytes; avoid alcohol and sleeping pills."]},hypothermia:{title:"Cold Exposure & Hypothermia",symptoms:"Uncontrollable shivering, slurred speech, clumsy fingers, lethargy in snow or rain.",actions:["1. Move out of the wind into tent/shelter immediately.","2. Remove wet clothing; replace with dry thermal fleece and down jacket.","3. Give warm sweet drinks (warm honey water, soup). NO alcohol.","4. Share body warmth in sleeping bag; insulate body from frozen ground."]},heatstroke:{title:"Desert Heatstroke & Dehydration",symptoms:"High body temperature (>103°F), rapid pulse, hot dry red skin, confusion in Rajasthan/Varanasi.",actions:["1. Move tourist to shade / air-conditioned vehicle immediately.","2. Cool skin with wet cloth/water mist and fan vigorously.","3. Sips of cool salted water or ORS packets.","4. Place ice/cold packs under armpits, groin, and neck."]}};return t[e]||t.ams}}class Sp{constructor(){this.selectedDate=new Date(Date.now()+864e5*7)}setDate(e){this.selectedDate=new Date(e)}calculateHazardRisk(e,t=null){const n=Fe[e]||Fe.darjeeling,a=t?new Date(t):this.selectedDate,r=a.getMonth()+1;let s=n.hazard?n.hazard.probability:20,o=[],l=n.hazard?n.hazard.level:"Low";const c=r>=6&&r<=9,d=r===5||r===10||r===11,f=r>=4&&r<=6,h=r===12||r===1||r===2;["darjeeling","gangtok","manali","kashmir","ladakh"].includes(e)?c?(s=Math.min(85,s+35),l="High Alert",o.push("High Monsoon Rainfall: Elevated threat of rockslides & river road breaches.")):h?(s=Math.min(75,s+25),l="Moderate Snow Advisory",o.push("Sub-Zero Winter: Ice formation, black ice on passes & heavy snowfall blocks.")):(s=Math.max(10,s-15),l="Low to Normal",o.push("Dry Clear Window: Ideal conditions for mountain trekking.")):["digha","puri","kerala"].includes(e)?d?(s=Math.min(80,s+30),l="High Tidal Advisory",o.push("Bay of Bengal Cyclone Window: Potential deep depressions & rough sea swells.")):c?(s=Math.min(70,s+20),l="Monsoon Surge",o.push("Continuous Monsoon Downpours: High tides & canal inundation risk.")):(s=15,l="Safe Shore Conditions",o.push("Mild Ocean Currents: Ideal for beach exploration.")):["rajasthan","varanasi","ayodhya"].includes(e)&&(f?(s=Math.min(80,s+30),l="Extreme Heatwave",o.push("Desert Loo Winds: Daytime temperatures exceeding 42°C. Dehydration risk.")):(s=10,l="Pleasant Cultural Weather",o.push("Mild sunny days with comfortable river breezes.")));let p=n.weather?n.weather.precipitationChance:20;return c&&(p=Math.min(95,p+40)),!c&&!d&&(p=Math.max(5,p-15)),{destinationName:n.name,state:n.state,targetDate:a.toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}),hazardType:n.hazard?n.hazard.type:"General Weather Advisory",baseLevel:l,probabilityPercent:s,estimatedRainChance:p,estimatedTemp:n.weather?n.weather.temp:25,seasonalNotes:o,dangerZones:n.hazard?n.hazard.dangerZones:["Mountain Highways","Riverbanks"],officialAdvisory:n.hazard?n.hazard.advisory:"Exercise general travel caution and monitor state disaster bulletins."}}generateHazardAlertEmail(e,t="emergency@hotel.com",n=""){const a=this.calculateHazardRisk(e),r=encodeURIComponent(`⚠️ Travel Hazard & Safety Advisory: ${a.destinationName} (${a.targetDate})`),s=encodeURIComponent(`Dear Safety Desk / Emergency Contact,

This is an automated safety advisory generated via TravelAI Pro for upcoming travel to ${a.destinationName}.

📍 Travel Date: ${a.targetDate}
🚨 Primary Hazard: ${a.hazardType}
📊 Risk Level: ${a.baseLevel} (${a.probabilityPercent}% Probability)
🌧️ Rain Probability: ${a.estimatedRainChance}%
🌡️ Estimated Temp: ${a.estimatedTemp}°C

⚠️ Monitored Danger Zones:
`+a.dangerZones.map(o=>` - ${o}`).join(`
`)+`

📋 Official Safety Advisory:
${a.officialAdvisory}

`+(n?`Additional Traveler Note: ${n}

`:"")+`Emergency Services in India:
National Emergency: 112 | Ambulance: 108 | Disaster Control: 1077

Generated by TravelAI Pro Autonomous Travel Companion.`);return`mailto:${t}?subject=${r}&body=${s}`}}class Mp{constructor(e={}){this.targetDate=new Date(Date.now()+864e5*5),this.destinationKey=e.defaultDestination||"darjeeling",this.onTick=e.onTick||null,this.intervalId=null,this.startCountdown()}setDestination(e){this.destinationKey=e}setTargetDate(e){this.targetDate=new Date(e)}getWardrobeAdvice(e=this.destinationKey){return(Fe[e]||Fe.darjeeling).wardrobe||{category:"All-Weather Casual",headline:"Comfortable Breathable Cotton + Walking Shoes",fabrics:"Cotton, linen, light denim",footwear:"Cushioned walking sneakers",culturalEtiquette:"Modest attire in sacred areas.",mustCarry:["Original ID","Phone Charger","Prescribed Medicines","Water Bottle"]}}startCountdown(){this.intervalId&&clearInterval(this.intervalId),this.intervalId=setInterval(()=>{const e=Date.now(),t=this.targetDate.getTime()-e;if(t<=0){this.onTick&&this.onTick({days:0,hours:0,minutes:0,seconds:0,isDeparted:!0});return}const n=Math.floor(t/(1e3*60*60*24)),a=Math.floor(t/(1e3*60*60)%24),r=Math.floor(t/(1e3*60)%60),s=Math.floor(t/1e3%60);this.onTick&&this.onTick({days:n,hours:a,minutes:r,seconds:s,isDeparted:!1})},1e3)}destroy(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)}}var Jr={};(function i(e,t,n,a){var r=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),s=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=(function(){if(!e.OffscreenCanvas)return!1;try{var P=new OffscreenCanvas(1,1),T=P.getContext("2d");T.fillRect(0,0,1,1);var ie=P.transferToImageBitmap();T.createPattern(ie,"no-repeat")}catch{return!1}return!0})();function l(){}function c(P){var T=t.exports.Promise,ie=T!==void 0?T:e.Promise;return typeof ie=="function"?new ie(P):(P(l,l),null)}var d=(function(P,T){return{transform:function(ie){if(P)return ie;if(T.has(ie))return T.get(ie);var ce=new OffscreenCanvas(ie.width,ie.height),B=ce.getContext("2d");return B.drawImage(ie,0,0),T.set(ie,ce),ce},clear:function(){T.clear()}}})(o,new Map),f=(function(){var P=Math.floor(16.666666666666668),T,ie,ce={},B=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(T=function($){var ne=Math.random();return ce[ne]=requestAnimationFrame(function X(se){B===se||B+P-1<se?(B=se,delete ce[ne],$()):ce[ne]=requestAnimationFrame(X)}),ne},ie=function($){ce[$]&&cancelAnimationFrame(ce[$])}):(T=function($){return setTimeout($,P)},ie=function($){return clearTimeout($)}),{frame:T,cancel:ie}})(),h=(function(){var P,T,ie={};function ce(B){function $(ne,X){B.postMessage({options:ne||{},callback:X})}B.init=function(X){var se=X.transferControlToOffscreen();B.postMessage({canvas:se},[se])},B.fire=function(X,se,pe){if(T)return $(X,null),T;var be=Math.random().toString(36).slice(2);return T=c(function(Re){function Te(ze){ze.data.callback===be&&(delete ie[be],B.removeEventListener("message",Te),T=null,d.clear(),pe(),Re())}B.addEventListener("message",Te),$(X,be),ie[be]=Te.bind(null,{data:{callback:be}})}),T},B.reset=function(){B.postMessage({reset:!0});for(var X in ie)ie[X](),delete ie[X]}}return function(){if(P)return P;if(!n&&r){var B=["var CONFETTI, SIZE = {}, module = {};","("+i.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{P=new Worker(URL.createObjectURL(new Blob([B])))}catch($){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",$),null}ce(P)}return P}})(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(P,T){return T?T(P):P}function y(P){return P!=null}function m(P,T,ie){return g(P&&y(P[T])?P[T]:p[T],ie)}function u(P){return P<0?0:Math.floor(P)}function w(P,T){return Math.floor(Math.random()*(T-P))+P}function E(P){return parseInt(P,16)}function x(P){return P.map(N)}function N(P){var T=String(P).replace(/[^0-9a-f]/gi,"");return T.length<6&&(T=T[0]+T[0]+T[1]+T[1]+T[2]+T[2]),{r:E(T.substring(0,2)),g:E(T.substring(2,4)),b:E(T.substring(4,6))}}function A(P){var T=m(P,"origin",Object);return T.x=m(T,"x",Number),T.y=m(T,"y",Number),T}function C(P){P.width=document.documentElement.clientWidth,P.height=document.documentElement.clientHeight}function F(P){var T=P.getBoundingClientRect();P.width=T.width,P.height=T.height}function S(P){var T=document.createElement("canvas");return T.style.position="fixed",T.style.top="0px",T.style.left="0px",T.style.pointerEvents="none",T.style.zIndex=P,T}function b(P,T,ie,ce,B,$,ne,X,se){P.save(),P.translate(T,ie),P.rotate($),P.scale(ce,B),P.arc(0,0,1,ne,X,se),P.restore()}function L(P){var T=P.angle*(Math.PI/180),ie=P.spread*(Math.PI/180);return{x:P.x,y:P.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:P.startVelocity*.5+Math.random()*P.startVelocity,angle2D:-T+(.5*ie-Math.random()*ie),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:P.color,shape:P.shape,tick:0,totalTicks:P.ticks,decay:P.decay,drift:P.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:P.gravity*3,ovalScalar:.6,scalar:P.scalar,flat:P.flat}}function q(P,T){T.x+=Math.cos(T.angle2D)*T.velocity+T.drift,T.y+=Math.sin(T.angle2D)*T.velocity+T.gravity,T.velocity*=T.decay,T.flat?(T.wobble=0,T.wobbleX=T.x+10*T.scalar,T.wobbleY=T.y+10*T.scalar,T.tiltSin=0,T.tiltCos=0,T.random=1):(T.wobble+=T.wobbleSpeed,T.wobbleX=T.x+10*T.scalar*Math.cos(T.wobble),T.wobbleY=T.y+10*T.scalar*Math.sin(T.wobble),T.tiltAngle+=.1,T.tiltSin=Math.sin(T.tiltAngle),T.tiltCos=Math.cos(T.tiltAngle),T.random=Math.random()+2);var ie=T.tick++/T.totalTicks,ce=T.x+T.random*T.tiltCos,B=T.y+T.random*T.tiltSin,$=T.wobbleX+T.random*T.tiltCos,ne=T.wobbleY+T.random*T.tiltSin;if(P.fillStyle="rgba("+T.color.r+", "+T.color.g+", "+T.color.b+", "+(1-ie)+")",P.beginPath(),s&&T.shape.type==="path"&&typeof T.shape.path=="string"&&Array.isArray(T.shape.matrix))P.fill(te(T.shape.path,T.shape.matrix,T.x,T.y,Math.abs($-ce)*.1,Math.abs(ne-B)*.1,Math.PI/10*T.wobble));else if(T.shape.type==="bitmap"){var X=Math.PI/10*T.wobble,se=Math.abs($-ce)*.1,pe=Math.abs(ne-B)*.1,be=T.shape.bitmap.width*T.scalar,Re=T.shape.bitmap.height*T.scalar,Te=new DOMMatrix([Math.cos(X)*se,Math.sin(X)*se,-Math.sin(X)*pe,Math.cos(X)*pe,T.x,T.y]);Te.multiplySelf(new DOMMatrix(T.shape.matrix));var ze=P.createPattern(d.transform(T.shape.bitmap),"no-repeat");ze.setTransform(Te),P.globalAlpha=1-ie,P.fillStyle=ze,P.fillRect(T.x-be/2,T.y-Re/2,be,Re),P.globalAlpha=1}else if(T.shape==="circle")P.ellipse?P.ellipse(T.x,T.y,Math.abs($-ce)*T.ovalScalar,Math.abs(ne-B)*T.ovalScalar,Math.PI/10*T.wobble,0,2*Math.PI):b(P,T.x,T.y,Math.abs($-ce)*T.ovalScalar,Math.abs(ne-B)*T.ovalScalar,Math.PI/10*T.wobble,0,2*Math.PI);else if(T.shape==="star")for(var R=Math.PI/2*3,Je=4*T.scalar,Pe=8*T.scalar,Le=T.x,xe=T.y,Ve=5,_e=Math.PI/Ve;Ve--;)Le=T.x+Math.cos(R)*Pe,xe=T.y+Math.sin(R)*Pe,P.lineTo(Le,xe),R+=_e,Le=T.x+Math.cos(R)*Je,xe=T.y+Math.sin(R)*Je,P.lineTo(Le,xe),R+=_e;else P.moveTo(Math.floor(T.x),Math.floor(T.y)),P.lineTo(Math.floor(T.wobbleX),Math.floor(B)),P.lineTo(Math.floor($),Math.floor(ne)),P.lineTo(Math.floor(ce),Math.floor(T.wobbleY));return P.closePath(),P.fill(),T.tick<T.totalTicks}function G(P,T,ie,ce,B){var $=T.slice(),ne=P.getContext("2d"),X,se,pe=c(function(be){function Re(){X=se=null,ne.clearRect(0,0,ce.width,ce.height),d.clear(),B(),be()}function Te(){n&&!(ce.width===a.width&&ce.height===a.height)&&(ce.width=P.width=a.width,ce.height=P.height=a.height),!ce.width&&!ce.height&&(ie(P),ce.width=P.width,ce.height=P.height),ne.clearRect(0,0,ce.width,ce.height),$=$.filter(function(ze){return q(ne,ze)}),$.length?X=f.frame(Te):Re()}X=f.frame(Te),se=Re});return{addFettis:function(be){return $=$.concat(be),pe},canvas:P,promise:pe,reset:function(){X&&f.cancel(X),se&&se()}}}function J(P,T){var ie=!P,ce=!!m(T||{},"resize"),B=!1,$=m(T,"disableForReducedMotion",Boolean),ne=r&&!!m(T||{},"useWorker"),X=ne?h():null,se=ie?C:F,pe=P&&X?!!P.__confetti_initialized:!1,be=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Re;function Te(R,Je,Pe){for(var Le=m(R,"particleCount",u),xe=m(R,"angle",Number),Ve=m(R,"spread",Number),_e=m(R,"startVelocity",Number),M=m(R,"decay",Number),v=m(R,"gravity",Number),O=m(R,"drift",Number),K=m(R,"colors",x),ee=m(R,"ticks",Number),Y=m(R,"shapes"),Se=m(R,"scalar"),de=!!m(R,"flat"),ge=A(R),He=Le,ae=[],ve=P.width*ge.x,Ce=P.height*ge.y;He--;)ae.push(L({x:ve,y:Ce,angle:xe,spread:Ve,startVelocity:_e,color:K[He%K.length],shape:Y[w(0,Y.length)],ticks:ee,decay:M,gravity:v,drift:O,scalar:Se,flat:de}));return Re?Re.addFettis(ae):(Re=G(P,ae,se,Je,Pe),Re.promise)}function ze(R){var Je=$||m(R,"disableForReducedMotion",Boolean),Pe=m(R,"zIndex",Number);if(Je&&be)return c(function(_e){_e()});ie&&Re?P=Re.canvas:ie&&!P&&(P=S(Pe),document.body.appendChild(P)),ce&&!pe&&se(P);var Le={width:P.width,height:P.height};X&&!pe&&X.init(P),pe=!0,X&&(P.__confetti_initialized=!0);function xe(){if(X){var _e={getBoundingClientRect:function(){if(!ie)return P.getBoundingClientRect()}};se(_e),X.postMessage({resize:{width:_e.width,height:_e.height}});return}Le.width=Le.height=null}function Ve(){Re=null,ce&&(B=!1,e.removeEventListener("resize",xe)),ie&&P&&(document.body.contains(P)&&document.body.removeChild(P),P=null,pe=!1)}return ce&&!B&&(B=!0,e.addEventListener("resize",xe,!1)),X?X.fire(R,Le,Ve):Te(R,Le,Ve)}return ze.reset=function(){X&&X.reset(),Re&&Re.reset()},ze}var Q;function j(){return Q||(Q=J(null,{useWorker:!0,resize:!0})),Q}function te(P,T,ie,ce,B,$,ne){var X=new Path2D(P),se=new Path2D;se.addPath(X,new DOMMatrix(T));var pe=new Path2D;return pe.addPath(se,new DOMMatrix([Math.cos(ne)*B,Math.sin(ne)*B,-Math.sin(ne)*$,Math.cos(ne)*$,ie,ce])),pe}function V(P){if(!s)throw new Error("path confetti are not supported in this browser");var T,ie;typeof P=="string"?T=P:(T=P.path,ie=P.matrix);var ce=new Path2D(T),B=document.createElement("canvas"),$=B.getContext("2d");if(!ie){for(var ne=1e3,X=ne,se=ne,pe=0,be=0,Re,Te,ze=0;ze<ne;ze+=2)for(var R=0;R<ne;R+=2)$.isPointInPath(ce,ze,R,"nonzero")&&(X=Math.min(X,ze),se=Math.min(se,R),pe=Math.max(pe,ze),be=Math.max(be,R));Re=pe-X,Te=be-se;var Je=10,Pe=Math.min(Je/Re,Je/Te);ie=[Pe,0,0,Pe,-Math.round(Re/2+X)*Pe,-Math.round(Te/2+se)*Pe]}return{type:"path",path:T,matrix:ie}}function le(P){var T,ie=1,ce="#000000",B='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof P=="string"?T=P:(T=P.text,ie="scalar"in P?P.scalar:ie,B="fontFamily"in P?P.fontFamily:B,ce="color"in P?P.color:ce);var $=10*ie,ne=""+$+"px "+B,X=new OffscreenCanvas($,$),se=X.getContext("2d");se.font=ne;var pe=se.measureText(T),be=Math.ceil(pe.actualBoundingBoxRight+pe.actualBoundingBoxLeft),Re=Math.ceil(pe.actualBoundingBoxAscent+pe.actualBoundingBoxDescent),Te=2,ze=pe.actualBoundingBoxLeft+Te,R=pe.actualBoundingBoxAscent+Te;be+=Te+Te,Re+=Te+Te,X=new OffscreenCanvas(be,Re),se=X.getContext("2d"),se.font=ne,se.fillStyle=ce,se.fillText(T,ze,R);var Je=1/ie;return{type:"bitmap",bitmap:X.transferToImageBitmap(),matrix:[Je,0,0,Je,-be*Je/2,-Re*Je/2]}}t.exports=function(){return j().apply(this,arguments)},t.exports.reset=function(){j().reset()},t.exports.create=J,t.exports.shapeFromPath=V,t.exports.shapeFromText=le})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Jr,!1);const bt=Jr.exports;Jr.exports.create;class Ep{constructor(){this.selectedAmount=100}renderDonationModal(e,t=null){const n=`
      <div class="modal-card" style="max-width: 480px; text-align: center;">
        <button class="modal-close-btn" id="m-close">✕</button>
        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">☕❤️</div>
        <h3 style="font-family: var(--font-display); font-size: 1.5rem; color: #fff; margin-bottom: 0.35rem;">
          Support TravelAI & Himalayan Disaster Relief
        </h3>
        <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.5rem;">
          TravelAI Pro is 100% free and open-source. Your voluntary support helps maintain offline rescue mapping and high-altitude emergency beacon servers.
        </p>

        <!-- Amount Chips -->
        <div style="display: flex; justify-content: center; gap: 0.6rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
          <button class="donation-chip active" data-amt="50">₹50 (Chai)</button>
          <button class="donation-chip" data-amt="100">₹100 (Meal)</button>
          <button class="donation-chip" data-amt="250">₹250 (Aid Kit)</button>
          <button class="donation-chip" data-amt="500">₹500 (Hero)</button>
        </div>

        <!-- Simulated UPI QR Code -->
        <div style="background: #fff; padding: 1.25rem; border-radius: 14px; display: inline-block; margin-bottom: 1.25rem; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=travelai.relief@okaxis&pn=TravelAI%20Relief%20Fund&am=100&cu=INR" 
               alt="UPI QR Code" id="donation-qr-img" style="width: 160px; height: 160px; display: block;" />
          <div style="font-size: 11px; font-weight: 700; color: #0f172a; margin-top: 6px; letter-spacing: 0.5px;">
            SCAN WITH ANY UPI APP
          </div>
          <div style="font-size: 9px; color: #64748b;">
            GPay · PhonePe · Paytm · BHIM
          </div>
        </div>

        <div style="color: #94a3b8; font-size: 0.8rem; margin-bottom: 1.25rem;">
          UPI ID: <strong style="color: #38bdf8;">travelai.relief@okaxis</strong>
        </div>

        <button class="btn-primary" id="btn-confirm-donation" style="background: linear-gradient(135deg, #10b981, #059669); margin-bottom: 0.75rem;">
          I Have Donated (Generate Receipt)
        </button>
        <button class="btn-secondary" id="btn-dismiss-donation" style="width: 100%; justify-content: center;">
          Maybe Later
        </button>
      </div>
    `;e.innerHTML=`
      <div class="modal-overlay" id="donation-modal">
        ${n}
      </div>
    `;const a=e.querySelector("#donation-modal"),r=a.querySelector("#m-close"),s=a.querySelector("#btn-dismiss-donation"),o=a.querySelector("#btn-confirm-donation"),l=a.querySelector("#donation-qr-img"),c=()=>{e.innerHTML="",t&&t()};r&&r.addEventListener("click",c),s&&s.addEventListener("click",c),a.addEventListener("click",d=>{d.target===a&&c()}),a.querySelectorAll(".donation-chip").forEach(d=>{d.addEventListener("click",()=>{a.querySelectorAll(".donation-chip").forEach(h=>h.classList.remove("active")),d.classList.add("active");const f=d.getAttribute("data-amt");this.selectedAmount=f,l.src=`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=travelai.relief@okaxis&pn=TravelAI%20Relief%20Fund&am=${f}&cu=INR`})}),o.addEventListener("click",()=>{bt({particleCount:80,spread:90,origin:{y:.6}}),alert(`🙏 Thank you so much for supporting the community with ₹${this.selectedAmount}! Your digital contribution receipt has been generated.`),c()})}}class wp{constructor(e={}){this.onPlanGenerated=e.onPlanGenerated||null,this.currency=e.currency||"INR",this.currencyRate=1,this.currencySymbol="₹",this.formData={destination:"manali",days:3,budgetTier:"moderate",totalBudget:16500,currency:"INR",foodPreference:"pure_veg",tripType:"startup_workation",pace:"balanced",teamSize:6,coworkingNeeded:!0,brainstormingNeeded:!0,galaDinner:!0}}setCurrency(e){this.currency=e,e==="USD"?(this.currencyRate=.012,this.currencySymbol="$"):e==="EUR"?(this.currencyRate=.011,this.currencySymbol="€"):(this.currencyRate=1,this.currencySymbol="₹"),this.formData.currency=e}async generateCustomItinerary(e={}){const t={...this.formData,...e};try{const n=await fetch("/api/itinerary/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(n.ok){const a=await n.json();return this.onPlanGenerated&&this.onPlanGenerated(a),a}}catch(n){console.warn("Backend offline, using client-side generator fallback:",n)}return this.generateLocalFallback(t)}generateLocalFallback(e){const{destination:t,days:n,budgetTier:a,foodPreference:r,tripType:s}=e,o=Math.min(Math.max(parseInt(n)||3,1),14),l=[];for(let d=1;d<=o;d++)l.push({day:d,theme:s==="startup_workation"?`Day ${d}: ${d===1?"Retreat Kickoff & Setup":d===o?"Demo Showcase & Celebration":"Sprint Block & Outdoor Ideation"}`:`Day ${d}: Iconic ${t} Wonders`,hours:[{time:"08:00 AM - 09:30 AM",title:`Morning Energy & ${r==="pure_veg"?"Pure Veg":r==="jain"?"Jain Sattvic":"Local"} Breakfast`,category:"Dining",categoryTag:"Dietary Verified",description:`Curated breakfast tailored for ${r} travelers.`,cost:`${this.currencySymbol}${Math.round(350*this.currencyRate)}`,costNum:350,location:`${t} Center`,rating:4.8},{time:"10:00 AM - 01:00 PM",title:s==="startup_workation"?"💻 Startup Co-Working Sprint Block":"Scenic Landmark Exploration",category:s==="startup_workation"?"Workation":"Exploration",categoryTag:s==="startup_workation"?"Startup Workation":"Sightseeing",description:s==="startup_workation"?"High-speed WiFi work session with team desks and power backups.":"Guided discovery of historical monuments and picturesque viewpoints.",cost:`${this.currencySymbol}${Math.round(800*this.currencyRate)}`,costNum:800,location:`${t} Landmark Zone`,badgeColor:"blue",rating:4.9},{time:"01:30 PM - 02:45 PM",title:`Curated Lunch with ${r} Standards`,category:"Dining",categoryTag:"Regional Dining",description:"Fresh, hygienic meals cooked according to your dietary instructions.",cost:`${this.currencySymbol}${Math.round(650*this.currencyRate)}`,costNum:650,location:`${t} Dining Corridor`,rating:4.7},{time:"03:30 PM - 05:30 PM",title:s==="startup_workation"?"🚀 Team Brainstorming & Whiteboard Session":"Local Bazaars & Cultural Handlooms",category:s==="startup_workation"?"Workation":"Culture",categoryTag:s==="startup_workation"?"Strategy":"Artisan Shopping",description:s==="startup_workation"?"Executive breakout session to map Q4 goals and product sprints.":"Shop directly from local artisans, handloom weavers, and spice markets.",cost:`${this.currencySymbol}${Math.round(500*this.currencyRate)}`,costNum:500,location:`${t} Hub`,badgeColor:"purple",rating:4.8},{time:"06:30 PM - 09:30 PM",title:s==="startup_workation"?"🥂 Team Dinner & Bonding Social":"Evening Cultural Aarti & Banquet",category:"Entertainment",categoryTag:"Evening Social",description:"Traditional music, dinner, and social evening.",cost:`${this.currencySymbol}${Math.round(1100*this.currencyRate)}`,costNum:1100,location:`${t} Grand Hall`,rating:4.9}]});const c={success:!0,destination:t,durationDays:o,budgetTier:a,currency:this.currency,foodPreference:r,tripType:s,estimatedTotalCost:`${this.currencySymbol}${Math.round(o*5500*this.currencyRate).toLocaleString()}`,days:l};return this.onPlanGenerated&&this.onPlanGenerated(c),c}}class Tp{constructor(){this.appContainer=document.getElementById("app"),this.modalRoot=document.getElementById("modal-root"),"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").catch(()=>{}),this.auth=new _p({onAuthChange:e=>this.handleAuthChange(e)}),this.itinerary=new bp({defaultDestination:"kashmir",currency:"INR"}),this.tripWizard=new wp({currency:"INR",onPlanGenerated:e=>this.handleCustomPlanGenerated(e)}),this.offlineSos=new xp({onLocationUpdate:()=>this.updateOfflineLocationUI(),onStrobeChange:e=>this.handleStrobeColorChange(e)}),this.hazardEngine=new Sp,this.wardrobePacker=new Mp({defaultDestination:"kashmir",onTick:e=>this.updateCountdownUI(e)}),this.donationManager=new Ep,this.currentTheme=localStorage.getItem("travelai_theme")||"obsidian",document.documentElement.setAttribute("data-theme",this.currentTheme),this.currentView=this.auth.currentUser?"dashboard":"auth",this.activeHotelTab="budget-stay",this.globeInstance=null,this.leafletMapInstance=null,this.visualizerInstance=null,this.aiEngine=new yp({onMessage:()=>this.renderChatMessages(),onSpeechState:e=>this.handleSpeechState(e)}),this.init()}init(){this.render()}handleAuthChange(e){this.currentView=e?"dashboard":"auth",this.render()}switchView(e,t={}){this.currentView=e,t.destination&&(this.itinerary.generatePlan(t.destination),this.wardrobePacker.setDestination(t.destination)),this.render(),window.scrollTo({top:0,behavior:"smooth"})}handleCustomPlanGenerated(e){if(e&&e.days){const t=e.destination.charAt(0).toUpperCase()+e.destination.slice(1);this.itinerary.activePlan={destination:t,tagline:`Custom AI Generated Itinerary (${e.foodPreference} · ${e.durationDays} Days · ${e.tripType})`,weather:{temp:"22°C",condition:"Pleasant & Clear",rainChance:"5%"},days:e.days},this.itinerary.selectedDayIndex=0}}handleStrobeColorChange(e){let t=document.getElementById("emergency-strobe-overlay");if(!e){t&&(t.style.display="none");return}t||(t=document.createElement("div"),t.id="emergency-strobe-overlay",t.className="emergency-strobe-overlay",document.body.appendChild(t)),t.style.display="block",t.style.backgroundColor=e}showOAuthModal(e){const t=this.modalRoot,a={google:{name:"Google",brand:"Google Workspace & Gmail"},github:{name:"GitHub",brand:"GitHub Developer Account"},apple:{name:"Apple",brand:"Apple ID & iCloud"}}[e]||{name:e},r=[{name:"Ananya Sharma",email:`ananya.sharma@${e==="apple"?"icloud.com":e==="github"?"github.dev":"gmail.com"}`,avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"},{name:"Vikram Malhotra",email:`vikram.malhotra@${e==="apple"?"icloud.com":e==="github"?"github.dev":"gmail.com"}`,avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"}];t.innerHTML=`
      <div class="oauth-modal-overlay" id="oauth-overlay">
        <div class="oauth-dialog-card">
          <div class="oauth-dialog-header">
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <span style="font-size: 1.3rem;">🔐</span>
              <div>
                <strong style="color: #fff; font-size: 1rem; display: block;">Sign in with ${a.name}</strong>
                <span style="color: #94a3b8; font-size: 0.78rem;">Choose an account to continue to TravelAI Bharat</span>
              </div>
            </div>
            <button type="button" id="btn-close-oauth" style="background: transparent; border: none; color: #94a3b8; font-size: 1.25rem; cursor: pointer;">✕</button>
          </div>

          <div class="oauth-account-list">
            ${r.map((o,l)=>`
              <button type="button" class="oauth-account-pill" data-idx="${l}">
                <img src="${o.avatar}" alt="${o.name}" class="oauth-account-avatar" />
                <div style="flex: 1; overflow: hidden;">
                  <strong style="color: #fff; font-size: 0.92rem; display: block;">${o.name}</strong>
                  <span style="color: #94a3b8; font-size: 0.78rem; text-overflow: ellipsis; overflow: hidden; display: block;">${o.email}</span>
                </div>
                <span style="color: #38bdf8; font-size: 0.85rem;">➔</span>
              </button>
            `).join("")}

            <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 0.85rem; margin-top: 0.25rem;">
              <form id="oauth-custom-form" style="display: flex; flex-direction: column; gap: 0.6rem;">
                <label style="color: #cbd5e1; font-size: 0.78rem;">Or sign in with custom ${a.name} email:</label>
                <input type="email" id="oauth-custom-email" class="form-control" placeholder="user@${e==="apple"?"icloud.com":e==="github"?"github.com":"gmail.com"}" required style="padding: 0.5rem 0.8rem; font-size: 0.85rem;" />
                <button type="submit" class="btn-primary" style="padding: 0.5rem; justify-content: center; font-size: 0.85rem;">
                  Authorize & Sign In ➔
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;const s=()=>{t.innerHTML=""};document.getElementById("btn-close-oauth").addEventListener("click",s),document.getElementById("oauth-overlay").addEventListener("click",o=>{o.target.id==="oauth-overlay"&&s()}),document.querySelectorAll(".oauth-account-pill").forEach(o=>{o.addEventListener("click",async()=>{const l=parseInt(o.getAttribute("data-idx")),c=r[l];s(),await this.auth.loginWithOAuth(e,c),bt({particleCount:75,spread:80,origin:{y:.6}})})}),document.getElementById("oauth-custom-form").addEventListener("submit",async o=>{o.preventDefault();const l=document.getElementById("oauth-custom-email").value.trim(),c=l.split("@")[0].replace(/[._]/g," "),d=c.charAt(0).toUpperCase()+c.slice(1);s(),await this.auth.loginWithOAuth(e,{email:l,name:d}),bt({particleCount:75,spread:80,origin:{y:.6}})})}render(){this.currentView==="auth"?this.renderAuthView():this.renderDashboardShell()}renderAuthView(){this.appContainer.innerHTML=`
      <div class="auth-screen">
        <!-- Left Hero Pane (Indian Heritage Aesthetics) -->
        <div class="auth-hero-pane" style="background: url('https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1600&auto=format&fit=crop&q=80') center/cover no-repeat;">
          <div class="auth-hero-content">
            <div class="auth-brand">
              <div class="brand-icon" style="background: linear-gradient(135deg, #ff9933, #138808); box-shadow: 0 4px 15px rgba(255, 153, 51, 0.5);">✈️</div>
              <div>
                <span style="font-family: var(--font-display); font-size: 1.85rem; color: #fff; font-weight: 800;">TravelAI Bharat</span>
                <span style="display: block; font-size: 0.8rem; color: #fbbf24; font-weight: 600; letter-spacing: 0.5px;">अतुल्य भारत · INCREDIBLE INDIA</span>
              </div>
            </div>
            <p class="auth-hero-tagline" style="color: #fef08a; margin-top: 0.75rem;">
              Your Intelligent AI Travel Companion across 28 States & 8 Union Territories
            </p>
          </div>

          <div class="hero-feature-badges">
            <div class="hero-feature-card" style="border-left: 4px solid #ff9933;">
              <span class="hero-badge-icon">🇮🇳</span>
              <div>
                <strong style="color: #fff; font-size: 0.95rem;">Ministry of Tourism Standard</strong>
                <p style="color: #cbd5e1; font-size: 0.82rem;">Curated day & hour itineraries covering all 12 iconic Indian tourist circuits.</p>
              </div>
            </div>

            <div class="hero-feature-card" style="border-left: 4px solid #ffffff;">
              <span class="hero-badge-icon">🛕</span>
              <div>
                <strong style="color: #fff; font-size: 0.95rem;">Sacred Yatra & Heritage Circuits</strong>
                <p style="color: #cbd5e1; font-size: 0.82rem;">Specialized guidelines for Kashi Vishwanath, Ayodhya Ram Mandir, Puri Jagannath & Kedarnath.</p>
              </div>
            </div>

            <div class="hero-feature-card" style="border-left: 4px solid #138808;">
              <span class="hero-badge-icon">📶</span>
              <div>
                <strong style="color: #fff; font-size: 0.95rem;">Zero-Internet Satellite SOS</strong>
                <p style="color: #cbd5e1; font-size: 0.82rem;">Direct satellite GPS coordinate locking & cellular 112 SMS for high Himalayas.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Form Pane (Indian Accent) -->
        <div class="auth-form-pane">
          <svg class="flight-doodle" viewBox="0 0 100 100" fill="none" stroke="#ff9933" stroke-width="2" stroke-dasharray="4 4">
            <path d="M10,90 Q50,10 90,30" />
          </svg>

          <div class="auth-card" style="border-top: 3px solid #ff9933; max-width: 460px;">
            <!-- Indian Tricolor Ribbon -->
            <div class="tricolor-ribbon"></div>

            <div class="auth-header" style="margin-bottom: 1.25rem;">
              <button type="button" class="namaste-greeting-pill" id="btn-namaste-audio" title="Click to hear traditional Indian welcome">
                <span class="namaste-speaker-icon">🔊</span>
                <span>नमस्ते! Listen Namaste Greeting</span>
              </button>
              <h2 id="auth-title" style="font-family: var(--font-display); font-size: 1.85rem; color: #fff;">
                नमस्ते! Welcome
              </h2>
              <p id="auth-sub" style="color: #94a3b8; font-size: 0.9rem;">
                शुभ यात्रा — Sign in to begin your journey across India
              </p>
            </div>

            <!-- Indian 3-Tab Switcher -->
            <div class="indian-auth-tabs">
              <button class="indian-tab-btn active" id="tab-otp-btn">📱 +91 Mobile OTP</button>
              <button class="indian-tab-btn" id="tab-login-btn">✉️ Email / Password</button>
              <button class="indian-tab-btn" id="tab-register-btn">📝 Register</button>
            </div>

            <!-- 1. Mobile OTP Form (MakeMyTrip / IRCTC Standard) -->
            <div id="pane-mobile-otp" style="display: block;">
              <div class="form-group">
                <label class="form-label">Indian Mobile Number (भारतीय मोबाइल नंबर)</label>
                <div class="phone-input-wrapper">
                  <div class="country-code-pill">
                    <span>🇮🇳</span>
                    <span>+91</span>
                  </div>
                  <input type="tel" id="input-phone" class="form-control" placeholder="98765 43210" value="9876543210" maxlength="10" style="padding-left: 1rem; font-size: 1.05rem; letter-spacing: 1px;" />
                </div>
              </div>

              <!-- OTP Section -->
              <div id="otp-input-section" style="margin-top: 1rem;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <label class="form-label" style="margin: 0;">Enter 4-Digit OTP (ओटीपी दर्ज करें)</label>
                  <button type="button" id="btn-autofill-otp" style="background: transparent; border: none; color: #38bdf8; font-size: 0.78rem; cursor: pointer; text-decoration: underline;">
                    Auto-Fill (1234)
                  </button>
                </div>
                <div class="otp-boxes-row">
                  <input type="text" maxlength="1" class="otp-digit-input" id="otp-1" value="1" />
                  <input type="text" maxlength="1" class="otp-digit-input" id="otp-2" value="2" />
                  <input type="text" maxlength="1" class="otp-digit-input" id="otp-3" value="3" />
                  <input type="text" maxlength="1" class="otp-digit-input" id="otp-4" value="4" />
                </div>
              </div>

              <div id="otp-error-msg" style="color: #ef4444; font-size: 0.85rem; margin-bottom: 0.75rem; display: none;"></div>

              <button type="button" class="btn-primary" id="btn-submit-otp" style="background: linear-gradient(135deg, #ff9933, #ea580c); box-shadow: 0 4px 15px rgba(234, 88, 12, 0.4);">
                <span>Verify OTP & Start Yatra (सत्यापित करें)</span>
                <span>➔</span>
              </button>
            </div>

            <!-- 2. Email / Password Form -->
            <form id="auth-form" style="display: none;">
              <div class="form-group" id="group-name" style="display: none;">
                <label class="form-label">Full Name (पूरा नाम)</label>
                <div class="input-wrapper">
                  <span class="input-icon">👤</span>
                  <input type="text" id="input-name" class="form-control" placeholder="e.g. Ananya Sharma" />
                </div>
              </div>

              <!-- State of Residence (for Indian Registration) -->
              <div class="form-group" id="group-state" style="display: none;">
                <label class="form-label">State of Residence (गृह राज्य)</label>
                <div class="input-wrapper">
                  <span class="input-icon">📍</span>
                  <select id="input-state" class="form-control" style="background: var(--bg-input); color: #fff; cursor: pointer;">
                    <option value="West Bengal">West Bengal (পশ্চিমবঙ্গ)</option>
                    <option value="Maharashtra">Maharashtra (महाराष्ट्र)</option>
                    <option value="Delhi NCR">Delhi NCR (दिल्ली)</option>
                    <option value="Uttar Pradesh">Uttar Pradesh (उत्तर प्रदेश)</option>
                    <option value="Kerala">Kerala (കേരളം)</option>
                    <option value="Karnataka">Karnataka (ಕರ್ನಾಟಕ)</option>
                    <option value="Gujarat">Gujarat (ગુજરાત)</option>
                    <option value="Rajasthan">Rajasthan (राजस्थान)</option>
                    <option value="Tamil Nadu">Tamil Nadu (தமிழ்நாடு)</option>
                    <option value="Odisha">Odisha (ଓଡ଼ିଶା)</option>
                    <option value="Punjab">Punjab (ਪੰਜਾਬ)</option>
                    <option value="Assam">Assam (অসম)</option>
                    <option value="Jammu & Kashmir">Jammu & Kashmir (जम्मू और कश्मीर)</option>
                    <option value="Ladakh">Ladakh (ལ་དྭགས)</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Goa">Goa</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Email or IRCTC / Traveler ID</label>
                <div class="input-wrapper">
                  <span class="input-icon">✉️</span>
                  <input type="text" id="input-email" class="form-control" placeholder="traveler@travelai.com" value="traveler@travelai.com" required />
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Password (पासवर्ड)</label>
                <div class="input-wrapper">
                  <span class="input-icon">🔒</span>
                  <input type="password" id="input-password" class="form-control" placeholder="••••••••" value="travel123" required />
                  <button type="button" class="pw-toggle-btn" id="pw-toggle">👁️</button>
                </div>
              </div>

              <div class="form-group" id="group-confirm-pw" style="display: none;">
                <label class="form-label">Confirm Password</label>
                <div class="input-wrapper">
                  <span class="input-icon">🛡️</span>
                  <input type="password" id="input-confirm-pw" class="form-control" placeholder="••••••••" />
                </div>
              </div>

              <div class="form-extras">
                <label class="remember-label">
                  <input type="checkbox" id="remember-me" checked />
                  <span>Remember Me</span>
                </label>
                <a href="#" class="forgot-link" id="forgot-pw-link">Forgot Password?</a>
              </div>

              <div id="auth-error-msg" style="color: #ef4444; font-size: 0.85rem; margin-bottom: 1rem; display: none;"></div>

              <button type="submit" class="btn-primary" id="auth-submit-btn">
                <span>Login</span>
                <span>➔</span>
              </button>
            </form>

            <!-- DigiLocker Govt ID Fast-Sign In -->
            <button type="button" class="digilocker-btn" id="btn-digilocker-auth">
              <span>🛡️</span>
              <span>Sign In with DigiLocker / Aadhaar</span>
            </button>

            <div class="auth-divider">
              <span>Or continue with Enterprise OAuth</span>
            </div>

            <!-- Professional Enterprise OAuth Sign In (Google, GitHub, Apple) -->
            <div class="oauth-brand-group">
              <button type="button" class="oauth-brand-btn oauth-btn-google" id="btn-oauth-google">
                <svg class="oauth-icon-svg" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>Continue with Google</span>
              </button>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.65rem;">
                <button type="button" class="oauth-brand-btn oauth-btn-github" id="btn-oauth-github">
                  <svg class="oauth-icon-svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </button>
                <button type="button" class="oauth-brand-btn oauth-btn-apple" id="btn-oauth-apple">
                  <svg class="oauth-icon-svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.07 1.72-.94 2.74 1 .08 2.03-.49 2.65-1.24z"/>
                  </svg>
                  <span>Apple ID</span>
                </button>
              </div>
            </div>

            <!-- Instant Desi Access Pill -->
            <div class="demo-guest-pill" id="btn-guest-login" style="background: rgba(255, 153, 51, 0.15); border-color: rgba(255, 153, 51, 0.4); color: #fbbf24;">
              ⚡ झटपट प्रवेश · Instant Demo Access (One-Click)
            </div>
          </div>
        </div>
      </div>
    `,this.bindAuthEvents()}bindAuthEvents(){const e=document.getElementById("auth-title"),t=document.getElementById("auth-sub"),n=document.getElementById("tab-otp-btn"),a=document.getElementById("tab-login-btn"),r=document.getElementById("tab-register-btn"),s=document.getElementById("pane-mobile-otp"),o=document.getElementById("auth-form"),l=document.getElementById("group-name"),c=document.getElementById("group-state"),d=document.getElementById("group-confirm-pw"),f=document.getElementById("auth-submit-btn"),h=document.getElementById("auth-error-msg"),p=document.getElementById("otp-error-msg"),g=document.getElementById("input-password"),y=document.getElementById("pw-toggle");let m="otp";const u=A=>{m=A,n.classList.remove("active"),a.classList.remove("active"),r.classList.remove("active"),A==="otp"?(n.classList.add("active"),s.style.display="block",o.style.display="none",e.textContent="नमस्ते! Welcome",t.textContent="Enter Indian mobile number for instant OTP verification"):A==="email"?(a.classList.add("active"),s.style.display="none",o.style.display="block",l.style.display="none",c.style.display="none",d.style.display="none",f.querySelector("span").textContent="Login with Password",e.textContent="Welcome Back!",t.textContent="Login with your registered Email or IRCTC ID"):A==="register"&&(r.classList.add("active"),s.style.display="none",o.style.display="block",l.style.display="block",c.style.display="block",d.style.display="block",f.querySelector("span").textContent="Create Traveler Account (पंजीकरण)",e.textContent="Join TravelAI Bharat",t.textContent="Register for personalized day & hour yatra plans"),h&&(h.style.display="none"),p&&(p.style.display="none")};n.addEventListener("click",()=>u("otp")),a.addEventListener("click",()=>u("email")),r.addEventListener("click",()=>u("register")),document.getElementById("btn-namaste-audio").addEventListener("click",()=>{const A=new SpeechSynthesisUtterance("नमस्ते! TravelAI Bharat में आपका स्वागत है। Welcome to Incredible India. We are excited to plan your journey across India!");A.pitch=1.05,A.rate=.95,window.speechSynthesis.speak(A)});const w=document.getElementById("otp-1"),E=document.getElementById("otp-2"),x=document.getElementById("otp-3"),N=document.getElementById("otp-4");[w,E,x,N].forEach((A,C,F)=>{A.addEventListener("keyup",S=>{S.key>="0"&&S.key<="9"?C<F.length-1&&F[C+1].focus():S.key==="Backspace"&&C>0&&F[C-1].focus()})}),document.getElementById("btn-autofill-otp").addEventListener("click",()=>{w.value="1",E.value="2",x.value="3",N.value="4"}),document.getElementById("btn-submit-otp").addEventListener("click",()=>{p.style.display="none";const A=document.getElementById("input-phone").value.trim(),C=`${w.value}${E.value}${x.value}${N.value}`;try{this.auth.loginWithMobile(A,C),bt({particleCount:60,spread:70,origin:{y:.6}})}catch(F){p.textContent=F.message,p.style.display="block"}}),document.getElementById("btn-digilocker-auth").addEventListener("click",()=>{this.auth.loginWithSocial("digilocker"),bt({particleCount:70,spread:80,origin:{y:.6}})}),y.addEventListener("click",()=>{g.type==="password"?(g.type="text",y.textContent="🙈"):(g.type="password",y.textContent="👁️")}),o.addEventListener("submit",A=>{A.preventDefault(),h.style.display="none";const C=document.getElementById("input-email").value.trim(),F=g.value,S=document.getElementById("remember-me").checked;try{if(m==="register"){const b=document.getElementById("input-name").value.trim(),L=document.getElementById("input-state").value,q=document.getElementById("input-confirm-pw").value;this.auth.register(b,C,F,q,L)}else this.auth.login(C,F,S);bt({particleCount:50,spread:60,origin:{y:.6}})}catch(b){h.textContent=b.message,h.style.display="block"}}),document.getElementById("btn-oauth-google").addEventListener("click",()=>this.showOAuthModal("google")),document.getElementById("btn-oauth-github").addEventListener("click",()=>this.showOAuthModal("github")),document.getElementById("btn-oauth-apple").addEventListener("click",()=>this.showOAuthModal("apple")),document.getElementById("btn-guest-login").addEventListener("click",()=>this.auth.login("traveler@travelai.com","travel123",!0))}renderDashboardShell(){const e=this.auth.currentUser||{name:"Traveler"};this.appContainer.innerHTML=`
      <div class="dashboard-layout">
        <!-- Sidebar Navigation -->
        <aside class="sidebar" id="sidebar">
          <div class="sidebar-header">
            <div class="brand-icon">✈️</div>
            <div>
              <strong style="font-family: var(--font-display); font-size: 1.35rem; color: #fff; display: block;">TravelAI Pro</strong>
              <span style="font-size: 0.72rem; color: #34d399; font-weight: 600;">● 100% Free & Unlimited</span>
            </div>
          </div>

          <nav class="sidebar-nav">
            <a class="nav-item ${this.currentView==="dashboard"?"active":""}" data-view="dashboard">
              <span class="nav-icon">📊</span>
              <span>Dashboard</span>
            </a>
            <a class="nav-item ${this.currentView==="wizard"?"active":""}" data-view="wizard">
              <span class="nav-icon">🚀</span>
              <span>Startup & Trip Wizard</span>
            </a>
            <a class="nav-item ${this.currentView==="plan"?"active":""}" data-view="plan">
              <span class="nav-icon">🗺️</span>
              <span>12 India Spots</span>
            </a>
            <a class="nav-item ${this.currentView==="interactive-map"?"active":""}" data-view="interactive-map">
              <span class="nav-icon">📍</span>
              <span>Interactive Map</span>
            </a>
            <a class="nav-item ${this.currentView==="hazard"?"active":""}" data-view="hazard">
              <span class="nav-icon">⚠️</span>
              <span>Hazard Alert & Mail</span>
            </a>
            <a class="nav-item ${this.currentView==="wardrobe"?"active":""}" data-view="wardrobe">
              <span class="nav-icon">👗</span>
              <span>Wardrobe & Countdown</span>
            </a>
            <a class="nav-item ${this.currentView==="offline-sos"?"active":""}" data-view="offline-sos">
              <span class="nav-icon">🚨</span>
              <span>Offline SOS (0% Net)</span>
            </a>
            <a class="nav-item ${this.currentView==="weather"?"active":""}" data-view="weather">
              <span class="nav-icon">🌦️</span>
              <span>Weather</span>
            </a>
            <a class="nav-item ${this.currentView==="hotels"?"active":""}" data-view="hotels">
              <span class="nav-icon">🏨</span>
              <span>Hotels & Dining</span>
            </a>
            <a class="nav-item ${this.currentView==="voice"?"active":""}" data-view="voice">
              <span class="nav-icon">🎙️</span>
              <span>Male/Female AI Bot</span>
            </a>
            <a class="nav-item" id="btn-sidebar-donate" style="color: #fbbf24; border: 1px dashed rgba(251, 191, 36, 0.4);">
              <span class="nav-icon">☕</span>
              <span>Support Relief Fund</span>
            </a>
          </nav>

          <div class="sidebar-footer">
            <a class="nav-item" id="btn-logout">
              <span class="nav-icon">🚪</span>
              <span>Logout</span>
            </a>
          </div>
        </aside>

        <!-- Main Workspace -->
        <main class="main-workspace">
          <!-- Topbar -->
          <!-- Topbar -->
          <header class="topbar">
            <div class="topbar-left">
              <button class="sidebar-toggle-btn" id="sidebar-toggle">☰</button>
              <div>
                <h2 class="topbar-title" id="page-title">${this.getViewTitle()}</h2>
                <div style="font-size: 0.72rem; color: #34d399; font-weight: 600; letter-spacing: 0.5px;">
                  अतुल्य भारत · INCREDIBLE INDIA · 12 TOP CIRCUITS
                </div>
              </div>
            </div>

            <div class="topbar-right">
              <!-- Live IST Digital Clock -->
              <div class="topbar-ist-clock" id="topbar-clock-container" title="Live Indian Standard Time (IST - UTC +5:30)">
                <span class="flag-dot"></span>
                <span id="live-ist-time">IST --:--:-- PM · New Delhi</span>
              </div>

              <!-- Emergency SOS Quick Pill -->
              <button class="topbar-sos-pill" id="btn-top-sos" title="Open Zero-Internet Satellite SOS Beacon">
                <span class="sos-pulse-dot"></span>
                <span>0% Net SOS (112)</span>
              </button>

              <!-- Destination Fast Selector -->
              <select class="header-select" id="quick-dest-select" title="Switch Destination">
                ${Object.keys(Fe).map(t=>`
                  <option value="${t}" ${this.itinerary.currentDestination===t?"selected":""}>
                    🇮🇳 ${Fe[t].name}
                  </option>
                `).join("")}
              </select>

              <!-- Executive Multi-Theme Selector -->
              <select class="header-select" id="theme-select" title="Switch Theme">
                <option value="obsidian" ${this.currentTheme==="obsidian"?"selected":""}>✨ Obsidian Luxe</option>
                <option value="heritage" ${this.currentTheme==="heritage"?"selected":""}>👑 Royal Heritage</option>
                <option value="cyber" ${this.currentTheme==="cyber"?"selected":""}>⚡ Cyber Azure</option>
                <option value="slate" ${this.currentTheme==="slate"?"selected":""}>🏔️ Himalayan Slate</option>
              </select>

              <!-- Currency Selector -->
              <select class="header-select" id="currency-select" title="Switch Currency">
                <option value="INR" ${this.itinerary.currency==="INR"?"selected":""}>₹ INR</option>
                <option value="USD" ${this.itinerary.currency==="USD"?"selected":""}>$ USD</option>
                <option value="EUR" ${this.itinerary.currency==="EUR"?"selected":""}>€ EUR</option>
              </select>

              <!-- Language Dropdown -->
              <select class="header-select" id="lang-select" title="Switch Language">
                <option value="en" ${this.aiEngine.currentLanguage==="en"?"selected":""}>🌐 English</option>
                <option value="hi" ${this.aiEngine.currentLanguage==="hi"?"selected":""}>🌐 हिंदी (Hindi)</option>
                <option value="bn" ${this.aiEngine.currentLanguage==="bn"?"selected":""}>🌐 বাংলা (Bengali)</option>
              </select>

              <!-- Support Coffee Button -->
              <button class="icon-btn" id="btn-top-donate" title="Donate & Support Bharat Relief Fund" style="color: #fbbf24;">
                ☕
              </button>

              <!-- Notification Bell -->
              <button class="icon-btn" id="notif-btn" title="Trip Notifications">
                🔔
                <span class="notification-badge"></span>
              </button>

              <!-- User Profile Dropdown -->
              <div class="user-dropdown-wrapper">
                <div class="user-profile-chip" id="user-chip" style="cursor: pointer;">
                  <img src="${e.avatar||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80"}" alt="${e.name}" />
                  <span>${e.name}</span>
                  <span style="font-size: 0.65rem; color: #34d399; margin-left: 2px;">▼</span>
                </div>
                <div class="user-dropdown-menu" id="user-dropdown-menu">
                  <div style="border-bottom: 1px solid var(--border-glass); padding-bottom: 0.75rem; margin-bottom: 0.75rem;">
                    <strong style="color: #fff; font-size: 0.95rem; display: block;">${e.name}</strong>
                    <span style="color: #38bdf8; font-size: 0.78rem; font-weight: 600;">🇮🇳 ${e.state||"West Bengal"} · Verified Explorer</span>
                    <span style="color: #94a3b8; font-size: 0.75rem; display: block; margin-top: 2px;">${e.email||"traveler@travelai.in"}</span>
                  </div>
                  <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 0.75rem; background: rgba(255,255,255,0.05); padding: 0.5rem 0.75rem; border-radius: 8px;">
                    <span style="color: #cbd5e1;">Circuits Unlocked</span>
                    <strong style="color: #34d399;">12 / 12</strong>
                  </div>
                  <button class="btn-secondary" id="btn-dropdown-logout" style="width: 100%; justify-content: center; font-size: 0.82rem; padding: 0.45rem;">
                    🚪 Sign Out
                  </button>
                </div>
              </div>
            </div>
          </header>

          <!-- Dynamic Body Content -->
          <div class="content-body" id="view-content">
            <!-- Sub-view loaded here -->
          </div>

          <!-- Floating AI Companion Launcher -->
          <button class="floating-ai-launcher" id="floating-ai-launcher" title="Ask Alex or Maya AI Companion">
            <span class="floating-ai-pulse"></span>
            <span id="floating-ai-icon">🤖</span>
          </button>

          <!-- Floating AI Companion Drawer -->
          <div class="floating-ai-drawer" id="floating-ai-drawer">
            <div class="floating-drawer-header">
              <div style="display: flex; align-items: center; gap: 0.6rem;">
                <span style="font-size: 1.3rem;">✈️</span>
                <div>
                  <strong style="color: #fff; font-size: 0.92rem; display: block;">TravelAI Companion</strong>
                  <span style="color: #34d399; font-size: 0.72rem; font-weight: 600;">● Online · Voice & Chat Ready</span>
                </div>
              </div>
              <button class="floating-drawer-close" id="btn-close-floating-ai">✕</button>
            </div>
            <div style="display: flex; gap: 0.4rem; padding: 0.5rem 1rem; background: rgba(0,0,0,0.2); border-bottom: 1px solid var(--border-glass);">
              <button class="dest-cat-btn ${this.aiEngine.activePersona==="alex"?"active":""}" id="f-persona-alex" style="padding: 0.25rem 0.75rem; font-size: 0.78rem;">👨‍✈️ Alex (Male)</button>
              <button class="dest-cat-btn ${this.aiEngine.activePersona==="maya"?"active":""}" id="f-persona-maya" style="padding: 0.25rem 0.75rem; font-size: 0.78rem;">👩‍💼 Maya (Female)</button>
            </div>
            <div id="floating-chat-messages" style="flex: 1; overflow-y: auto; padding: 1rem; display: flex; flex-direction: column; gap: 0.75rem;"></div>
            <form id="floating-chat-form" style="display: flex; gap: 0.5rem; padding: 0.75rem 1rem; background: rgba(15,23,42,0.9); border-top: 1px solid var(--border-glass);">
              <input type="text" id="floating-chat-input" class="form-control" placeholder="Ask about spots, weather, dress, SOS..." style="padding: 0.5rem 0.8rem; font-size: 0.85rem;" />
              <button type="submit" class="btn-primary" style="width: auto; padding: 0.5rem 0.9rem;">➔</button>
            </form>
          </div>
        </main>

        <!-- Mobile Bottom Navigation Dock (Phones & Small Tablets) -->
        <nav class="mobile-bottom-nav">
          <button type="button" class="mob-nav-item ${this.currentView==="dashboard"?"active":""}" data-view="dashboard">
            <span class="mob-nav-icon">📊</span>
            <span>Home</span>
          </button>
          <button type="button" class="mob-nav-item ${this.currentView==="wizard"?"active":""}" data-view="wizard">
            <span class="mob-nav-icon">🚀</span>
            <span>Wizard</span>
          </button>
          <button type="button" class="mob-nav-item ${this.currentView==="plan"?"active":""}" data-view="plan">
            <span class="mob-nav-icon">🗺️</span>
            <span>12 Spots</span>
          </button>
          <button type="button" class="mob-nav-item ${this.currentView==="interactive-map"?"active":""}" data-view="interactive-map">
            <span class="mob-nav-icon">📍</span>
            <span>Map</span>
          </button>
          <button type="button" class="mob-nav-item sos-item ${this.currentView==="offline-sos"?"active":""}" data-view="offline-sos">
            <span class="mob-nav-icon">🚨</span>
            <span>SOS</span>
          </button>
        </nav>
      </div>
    `,this.bindDashboardEvents(),this.renderActiveSubView(),this.startIstClock(),this.renderFloatingChatMessages()}getViewTitle(){switch(this.currentView){case"dashboard":return"Dashboard";case"wizard":return"🚀 Startup Retreat & Custom AI Trip Wizard";case"plan":return"12 Top Indian Spots (Day & Hour Plan)";case"interactive-map":return"Interactive Leaflet Route Map (Free & Unlimited)";case"hazard":return"Natural Hazard Predictor & Alert Mailer";case"wardrobe":return"AI Wardrobe Advisor & Departure Countdown";case"offline-sos":return"Offline SOS & Cellular Smart Tracking (0% Net)";case"weather":return"Live Weather Radar";case"hotels":return"Hotels & Dining";case"voice":return"Male & Female AI Companion Bot";default:return"Dashboard"}}startIstClock(){this.istClockInterval&&clearInterval(this.istClockInterval);const e=()=>{const t=document.getElementById("live-ist-time");if(!t)return;const n=new Date,a=n.getTime()+n.getTimezoneOffset()*6e4,r=new Date(a+36e5*5.5),s=r.getHours(),o=String(r.getMinutes()).padStart(2,"0"),l=String(r.getSeconds()).padStart(2,"0"),c=s>=12?"PM":"AM",d=String(s%12||12).padStart(2,"0");t.textContent=`IST ${d}:${o}:${l} ${c} · New Delhi`};e(),this.istClockInterval=setInterval(e,1e3)}bindDashboardEvents(){document.querySelectorAll(".sidebar-nav .nav-item").forEach(N=>{N.addEventListener("click",()=>{const A=N.getAttribute("data-view");A&&this.switchView(A)})}),document.querySelectorAll(".mobile-bottom-nav .mob-nav-item").forEach(N=>{N.addEventListener("click",()=>{const A=N.getAttribute("data-view");A&&this.switchView(A)})});const e=document.getElementById("quick-dest-select");e&&e.addEventListener("change",N=>{this.itinerary.generatePlan(N.target.value),this.wardrobePacker.setDestination(N.target.value),this.renderActiveSubView()});const t=document.getElementById("theme-select");t&&t.addEventListener("change",N=>{this.currentTheme=N.target.value,localStorage.setItem("travelai_theme",this.currentTheme),document.documentElement.setAttribute("data-theme",this.currentTheme)});const n=document.getElementById("currency-select");n&&n.addEventListener("change",N=>{this.itinerary.setCurrency(N.target.value),this.tripWizard.setCurrency(N.target.value),this.renderActiveSubView()});const a=document.getElementById("lang-select");a&&a.addEventListener("change",N=>{this.aiEngine.setLanguage(N.target.value)});const r=document.getElementById("btn-top-sos");r&&r.addEventListener("click",()=>this.switchView("offline-sos"));const s=document.getElementById("user-chip"),o=document.getElementById("user-dropdown-menu");s&&o&&(s.addEventListener("click",N=>{N.stopPropagation(),o.classList.toggle("show")}),document.addEventListener("click",N=>{!s.contains(N.target)&&!o.contains(N.target)&&o.classList.remove("show")}));const l=document.getElementById("btn-dropdown-logout");l&&l.addEventListener("click",()=>{confirm("Sign out of TravelAI Bharat?")&&this.auth.logout()});const c=document.getElementById("floating-ai-launcher"),d=document.getElementById("floating-ai-drawer"),f=document.getElementById("btn-close-floating-ai");c&&d&&c.addEventListener("click",()=>{if(d.classList.toggle("open"),d.classList.contains("open")){this.renderFloatingChatMessages();const N=document.getElementById("floating-chat-input");N&&N.focus()}}),f&&d&&f.addEventListener("click",()=>{d.classList.remove("open")});const h=document.getElementById("f-persona-alex"),p=document.getElementById("f-persona-maya");h&&p&&(h.addEventListener("click",()=>{this.aiEngine.setPersona("alex"),h.classList.add("active"),p.classList.remove("active"),this.renderFloatingChatMessages()}),p.addEventListener("click",()=>{this.aiEngine.setPersona("maya"),p.classList.add("active"),h.classList.remove("active"),this.renderFloatingChatMessages()}));const g=document.getElementById("floating-chat-form");g&&g.addEventListener("submit",N=>{N.preventDefault();const A=document.getElementById("floating-chat-input");A&&A.value.trim()&&(this.aiEngine.processUserInput(A.value.trim()),A.value="",this.renderFloatingChatMessages())});const y=document.getElementById("btn-logout");y&&y.addEventListener("click",()=>{confirm("Sign out of TravelAI Pro?")&&this.auth.logout()});const m=()=>this.donationManager.renderDonationModal(this.modalRoot),u=document.getElementById("btn-top-donate"),w=document.getElementById("btn-sidebar-donate");u&&u.addEventListener("click",m),w&&w.addEventListener("click",m);const E=document.getElementById("sidebar-toggle"),x=document.getElementById("sidebar");E&&x&&E.addEventListener("click",()=>x.classList.toggle("open"))}renderFloatingChatMessages(){const e=document.getElementById("floating-chat-messages");e&&(e.innerHTML=this.aiEngine.messages.slice(-6).map(t=>{const n=t.role==="bot";return`
        <div style="display: flex; gap: 0.5rem; align-items: flex-start; ${n?"":"flex-direction: row-reverse;"}">
          <span style="font-size: 1.15rem;">${n?t.avatar3d||"🤖":"🧑"}</span>
          <div style="max-width: 80%; background: ${n?"rgba(30,41,59,0.85)":"linear-gradient(135deg, #2563eb, #3b82f6)"}; padding: 0.6rem 0.85rem; border-radius: 12px; font-size: 0.84rem; color: #fff; line-height: 1.4; border: 1px solid rgba(255,255,255,0.08);">
            <strong style="font-size: 0.72rem; color: ${n?"#38bdf8":"#e0e7ff"}; display: block; margin-bottom: 2px;">
              ${n?t.personaName||"AI Guide":"You"}
            </strong>
            ${t.text.replace(/\n/g,"<br>")}
            ${n?`
              <div style="margin-top: 4px; display: flex; justify-content: flex-end;">
                <button class="bubble-speaker-btn" data-speak-id="${t.id}" style="font-size: 0.7rem; padding: 2px 6px;">🔊 Listen</button>
              </div>
            `:""}
          </div>
        </div>
      `}).join(""),e.scrollTop=e.scrollHeight,e.querySelectorAll(".bubble-speaker-btn").forEach(t=>{t.addEventListener("click",()=>{const n=this.aiEngine.messages.find(a=>a.id===t.getAttribute("data-speak-id"));n&&this.aiEngine.speakText(n.text,n.sender)})}))}renderActiveSubView(){const e=document.getElementById("view-content");if(e)switch(this.currentView){case"dashboard":this.renderDashboardOverview(e);break;case"wizard":this.renderWizardView(e);break;case"plan":this.renderItineraryPlanner(e);break;case"interactive-map":this.renderInteractiveMapView(e);break;case"hazard":this.renderHazardView(e);break;case"wardrobe":this.renderWardrobeView(e);break;case"offline-sos":this.renderOfflineSOSView(e);break;case"weather":this.renderWeatherView(e);break;case"hotels":case"restaurants":this.renderHotelsRestaurants(e);break;case"voice":this.renderVoiceAssistantView(e);break;default:this.renderDashboardOverview(e)}}renderDashboardOverview(e){const t=this.auth.currentUser||{name:"Traveler"},n=Fe[this.itinerary.currentDestination]||Fe.kashmir,a=new Date,r=a.getTime()+a.getTimezoneOffset()*6e4,o=new Date(r+36e5*5.5).getHours(),l=o<12?"शुभ प्रभात · Good Morning":o<17?"शुभ दोपहर · Good Afternoon":"शुभ संध्या · Good Evening";e.innerHTML=`
      <div class="welcome-banner" style="background: linear-gradient(135deg, rgba(37,99,235,0.2) 0%, rgba(255,153,51,0.15) 100%); border: 1px solid rgba(255,153,51,0.25);">
        <h1>${l}, ${t.name}! 🙏</h1>
        <p>Explore India's Top 12 destinations with curated hour-by-hour itineraries, dual AI voice guides, IMD hazard radar, and zero-internet satellite SOS.</p>
      </div>

      <!-- Departure Countdown Banner -->
      <div class="countdown-box">
        <div>
          <strong style="color: #fff; font-size: 1.05rem; display: block;">⏳ Departure Countdown to ${n.name}</strong>
          <span style="color: #93c5fd; font-size: 0.85rem;">Estimated Departure Date: ${this.wardrobePacker.targetDate.toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}</span>
        </div>
        <div class="countdown-digits" id="dash-countdown-digits">
          <div class="countdown-unit"><span class="number" id="cd-days">05</span><span class="lbl">Days</span></div>
          <div class="countdown-unit"><span class="number" id="cd-hours">14</span><span class="lbl">Hours</span></div>
          <div class="countdown-unit"><span class="number" id="cd-mins">32</span><span class="lbl">Mins</span></div>
          <div class="countdown-unit"><span class="number" id="cd-secs">48</span><span class="lbl">Secs</span></div>
        </div>
      </div>

      <!-- Startup Retreat & Custom Trip Planner CTA Banner -->
      <div class="wizard-hero-banner" id="dash-wizard-cta" style="cursor: pointer; margin-bottom: 1.5rem;">
        <div>
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
            <span style="background: rgba(255,153,51,0.25); border: 1px solid #ff9933; color: #fbbf24; padding: 2px 8px; border-radius: 6px; font-size: 0.75rem; font-weight: 700;">PRO STARTUP ENGINE</span>
            <span style="color: #38bdf8; font-size: 0.8rem; font-weight: 600;">Custom Tours & Team Workations</span>
          </div>
          <h3 style="font-family: var(--font-display); font-size: 1.35rem; color: #fff; margin-bottom: 0.35rem;">
            🚀 Plan Custom Startup Retreat & Travel Schedule
          </h3>
          <p style="color: #cbd5e1; font-size: 0.88rem; max-width: 620px;">
            Set your exact tour days (1–14), budget tier, verified food preferences (Pure Veg, Jain, Halal), and unlock high-speed fiber co-working hubs and team brainstorming slots.
          </p>
        </div>
        <button class="btn-primary" style="white-space: nowrap; background: linear-gradient(135deg, #ff9933, #ea580c); box-shadow: 0 4px 15px rgba(234, 88, 12, 0.4);">
          <span>Launch AI Trip Wizard</span>
          <span>➔</span>
        </button>
      </div>

      <!-- 4 High-Impact Stat Cards -->
      <div class="stats-grid">
        <div class="stat-card trips">
          <div class="stat-info">
            <span>India Circuits Unlocked</span>
            <h3>12 / 12</h3>
          </div>
          <div class="stat-icon">🇮🇳</div>
        </div>
        <div class="stat-card explored">
          <div class="stat-info">
            <span>Offline Satellite SOS</span>
            <h3 style="font-size: 1.25rem;">0% NET READY</h3>
          </div>
          <div class="stat-icon">📶</div>
        </div>
        <div class="stat-card upcoming">
          <div class="stat-info">
            <span>IMD Hazard Radar</span>
            <h3 style="font-size: 1.25rem;">${n.hazard?n.hazard.level.toUpperCase():"NORMAL"}</h3>
          </div>
          <div class="stat-icon">⚠️</div>
        </div>
        <div class="stat-card saved">
          <div class="stat-info">
            <span>Hosting & Open Maps</span>
            <h3 style="font-size: 1.25rem;">100% FREE</h3>
          </div>
          <div class="stat-icon">🌐</div>
        </div>
      </div>

      <!-- Quick Action Pills -->
      <div class="quick-pills-row">
        <div class="quick-pill" id="qp-map">
          <span class="quick-pill-icon">📍</span>
          <span class="quick-pill-text">Interactive Map</span>
        </div>
        <div class="quick-pill" id="qp-hazard">
          <span class="quick-pill-icon">⚠️</span>
          <span class="quick-pill-text">Hazard Predictor</span>
        </div>
        <div class="quick-pill" id="qp-sos">
          <span class="quick-pill-icon">🚨</span>
          <span class="quick-pill-text">Zero-Net SOS</span>
        </div>
        <div class="quick-pill" id="qp-wardrobe">
          <span class="quick-pill-icon">👗</span>
          <span class="quick-pill-text">Wardrobe Advisor</span>
        </div>
      </div>

      <!-- 3D Global Section -->
      <div class="dashboard-3d-section">
        <div class="section-header-row">
          <div>
            <h3>Planetary Trajectory & 3D Flight Corridor</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem;">Drag to orbit 3D coordinates and flight paths across the Indian subcontinent.</p>
          </div>
          <button class="btn-primary" id="btn-open-planner-cta" style="width: auto;">Explore Full Day Plan ➔</button>
        </div>
        <div class="globe-canvas-wrapper" id="dashboard-globe-box"></div>
      </div>

      <!-- Top 12 Indian Destinations Showcase -->
      <div class="destinations-showcase-section">
        <div class="dest-section-header">
          <div>
            <h2><span>🇮🇳</span> Iconic India Circuits · Top 12 Destinations</h2>
            <p style="color: var(--text-muted); font-size: 0.88rem;">
              Day-by-day & hour-by-hour verified itineraries, live weather, and natural hazard advisories across India.
            </p>
          </div>
          <div class="dest-category-tabs" id="dest-category-tabs">
            <button class="dest-cat-btn active" data-filter="all">All Circuits (12)</button>
            <button class="dest-cat-btn" data-filter="himalayas">🏔️ Himalayas & Hills (5)</button>
            <button class="dest-cat-btn" data-filter="spiritual">🛕 Spiritual & Yatras (3)</button>
            <button class="dest-cat-btn" data-filter="coastal">🏖️ Coastal & Backwaters (3)</button>
            <button class="dest-cat-btn" data-filter="heritage">🏰 Heritage & Palaces (2)</button>
          </div>
        </div>

        <div class="dest-showcase-grid" id="dest-showcase-grid">
          <!-- Populated dynamically via renderShowcaseGrid -->
        </div>
      </div>

      <!-- Regional Hazard & Safety Status Radar Table -->
      <div class="hazard-radar-card">
        <div class="section-header-row" style="margin-bottom: 0.75rem;">
          <div>
            <h3 style="font-family: var(--font-display); font-size: 1.3rem; color: #fff;">
              ⚠️ All-India Tourist Hazard & Safety Radar
            </h3>
            <p style="color: var(--text-muted); font-size: 0.85rem;">
              Real-time regional risk monitor calibrated with IMD (India Meteorological Dept) and State Disaster Management advisories.
            </p>
          </div>
          <button class="btn-secondary" id="btn-open-hazard-full" style="font-size: 0.82rem;">
            Open Emergency Mailer ➔
          </button>
        </div>

        <div class="hazard-table-responsive">
          <table class="hazard-status-table">
            <thead>
              <tr>
                <th>Circuit / Destination</th>
                <th>State / UT</th>
                <th>Current Weather</th>
                <th>Primary Hazard Threat</th>
                <th>Risk Level</th>
                <th>Tourist Helpline</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${Object.keys(Fe).map(f=>{const h=Fe[f],p=h.hazard?h.hazard.level:"Low",g=p==="High"?"hazard-badge-pill high":p==="Moderate"?"hazard-badge-pill moderate":"hazard-badge-pill low";return`
                  <tr>
                    <td><strong style="color: #fff;">${h.name}</strong></td>
                    <td><span style="color: #94a3b8;">${h.state}</span></td>
                    <td><span style="color: #38bdf8;">${h.weather.temp}°C · ${h.weather.condition}</span></td>
                    <td><span style="color: #fca5a5;">${h.hazard?h.hazard.type:"None"}</span></td>
                    <td><span class="${g}">${p}</span></td>
                    <td><span style="font-family: monospace; color: #34d399;">1363 / 112</span></td>
                    <td>
                      <button class="btn-secondary btn-table-plan" data-dest="${f}" style="padding: 0.3rem 0.7rem; font-size: 0.78rem;">
                        View Plan ➔
                      </button>
                    </td>
                  </tr>
                `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;const c=(f="all")=>{const h=document.getElementById("dest-showcase-grid");if(!h)return;const p=Object.keys(Fe).filter(g=>f==="all"?!0:Fe[g].category===f);h.innerHTML=p.map(g=>{const y=Fe[g],m=y.hazard||{level:"Low"},u=m.level==="High"?"high":m.level==="Moderate"?"moderate":"low";return`
          <div class="dest-card" data-key="${g}" style="cursor: pointer;">
            <div class="dest-card-media">
              <img src="${y.image}" alt="${y.name}" loading="lazy" />
              <div class="dest-media-gradient"></div>
              <span class="dest-badge-state">📍 ${y.state}</span>
              <span class="dest-badge-weather">🌦️ ${y.weather.temp}°C</span>
              <span class="dest-badge-hazard ${u}">⚠️ ${m.level} Risk</span>
            </div>
            <div class="dest-card-body">
              <div>
                <div class="dest-title-row">
                  <h3 class="dest-card-title">${y.name}</h3>
                </div>
                <p class="dest-card-tagline">${y.tagline}</p>
                <div class="dest-meta-chips">
                  <span class="dest-meta-chip">📅 ${y.bestSeason?y.bestSeason.split("/")[0].trim():"Oct - Mar"}</span>
                  <span class="dest-meta-chip">⏰ 3 Days · 18 Hours</span>
                  <span class="dest-meta-chip">📞 1363</span>
                </div>
              </div>
              <div class="dest-card-footer">
                <div>
                  <span class="dest-season-label">Best Season</span>
                  <span class="dest-season-val">${y.bestSeason?y.bestSeason.split("(")[0].trim():"Year Round"}</span>
                </div>
                <button class="btn-primary btn-explore-circuit" data-key="${g}" style="width: auto; padding: 0.5rem 1rem; font-size: 0.85rem;">
                  Explore Plan ➔
                </button>
              </div>
            </div>
          </div>
        `}).join(""),h.querySelectorAll(".btn-explore-circuit").forEach(g=>{g.addEventListener("click",y=>{y.stopPropagation();const m=g.getAttribute("data-key");this.itinerary.generatePlan(m),this.wardrobePacker.setDestination(m),this.switchView("plan",{destination:m})})}),h.querySelectorAll(".dest-card").forEach(g=>{g.addEventListener("click",()=>{const y=g.getAttribute("data-key");this.itinerary.generatePlan(y),this.wardrobePacker.setDestination(y),this.switchView("plan",{destination:y})})})};c("all"),e.querySelectorAll(".dest-cat-btn").forEach(f=>{f.addEventListener("click",()=>{e.querySelectorAll(".dest-cat-btn").forEach(h=>h.classList.remove("active")),f.classList.add("active"),c(f.getAttribute("data-filter"))})}),e.querySelectorAll(".btn-table-plan").forEach(f=>{f.addEventListener("click",()=>{const h=f.getAttribute("data-dest");this.itinerary.generatePlan(h),this.wardrobePacker.setDestination(h),this.switchView("plan",{destination:h})})}),document.getElementById("qp-map").addEventListener("click",()=>this.switchView("interactive-map")),document.getElementById("qp-hazard").addEventListener("click",()=>this.switchView("hazard")),document.getElementById("qp-sos").addEventListener("click",()=>this.switchView("offline-sos")),document.getElementById("qp-wardrobe").addEventListener("click",()=>this.switchView("wardrobe")),document.getElementById("btn-open-planner-cta").addEventListener("click",()=>this.switchView("plan")),document.getElementById("btn-open-hazard-full").addEventListener("click",()=>this.switchView("hazard"));const d=document.getElementById("dash-wizard-cta");d&&d.addEventListener("click",()=>this.switchView("wizard")),setTimeout(()=>{this.globeInstance&&this.globeInstance.destroy(),this.globeInstance=new mp("dashboard-globe-box",{autoRotate:!0,onSelectPin:f=>this.switchView("plan",{destination:f.id})})},100)}renderWizardView(e){const t=this.itinerary.currentDestination||"manali",n=this.itinerary.currencySymbol,a=this.itinerary.currencyRate;e.innerHTML=`
      <div class="wizard-container">
        <!-- Hero Banner -->
        <div class="wizard-hero-banner">
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
              <span style="background: rgba(255,153,51,0.25); border: 1px solid #ff9933; color: #fbbf24; padding: 2px 8px; border-radius: 6px; font-size: 0.75rem; font-weight: 700;">PRO STARTUP ENGINE</span>
              <span style="color: #38bdf8; font-size: 0.8rem; font-weight: 600;">Custom Tours & Team Workations</span>
            </div>
            <h2 style="font-family: var(--font-display); font-size: 1.6rem; color: #fff; margin-bottom: 0.35rem;">
              🚀 Startup Retreat & Custom AI Itinerary Wizard
            </h2>
            <p style="color: #cbd5e1; font-size: 0.9rem; max-width: 680px;">
              Design your dream tour: choose duration (1–14 days), budget tier, strictly verified food preferences (Pure Veg, Jain, Halal, etc.), and professional startup workation perks.
            </p>
          </div>
          <div style="background: rgba(0,0,0,0.3); border: 1px solid var(--border-glass); border-radius: 12px; padding: 0.85rem 1.25rem; text-align: center;">
            <span style="color: #94a3b8; font-size: 0.78rem; display: block;">Active Currency</span>
            <strong style="color: #34d399; font-size: 1.25rem;">${this.itinerary.currency} (${n})</strong>
          </div>
        </div>

        <form id="trip-wizard-form" class="wizard-form-card">
          <!-- Step 1: Destination Selection -->
          <div class="wizard-step-section">
            <h3 class="wizard-section-title"><span>1.</span> Select Destination Circuit (गंतव्य चुनें)</h3>
            <p class="wizard-section-desc">Choose from India's top 12 curated circuits or enter any custom Indian city/retreat hub.</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem;">
              <div>
                <label class="form-label">Circuit Destination</label>
                <select id="wiz-destination" class="form-control" style="background: var(--bg-input); color: #fff;">
                  ${Object.keys(Fe).map(r=>`
                    <option value="${r}" ${r===t?"selected":""}>
                      🇮🇳 ${Fe[r].name} (${Fe[r].state})
                    </option>
                  `).join("")}
                </select>
              </div>
              <div>
                <label class="form-label">Trip Style / Purpose</label>
                <select id="wiz-trip-type" class="form-control" style="background: var(--bg-input); color: #fff;">
                  <option value="startup_workation">🚀 Startup Team Workation / Retreat</option>
                  <option value="solo_founder">🧑‍💻 Solo Founder & Digital Nomad</option>
                  <option value="family_yatra">👨‍👩‍👧‍👦 Family Heritage & Sacred Yatra</option>
                  <option value="adventure_couples">🌄 Adventure & Leisure Couple</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Step 2: Duration & Number of Days -->
          <div class="wizard-step-section">
            <h3 class="wizard-section-title"><span>2.</span> Tour Duration (दिनों की संख्या)</h3>
            <p class="wizard-section-desc">Choose duration for day-by-day and hour-by-hour scheduled programming.</p>
            <div class="days-pills-row" id="wiz-days-pills">
              <button type="button" class="day-pill-btn" data-days="1">⚡ 1 Day (Express)</button>
              <button type="button" class="day-pill-btn" data-days="2">Weekend (2 Days)</button>
              <button type="button" class="day-pill-btn active" data-days="3">Sprint (3 Days)</button>
              <button type="button" class="day-pill-btn" data-days="5">Workation (5 Days)</button>
              <button type="button" class="day-pill-btn" data-days="7">Full Circuit (7 Days)</button>
              <button type="button" class="day-pill-btn" data-days="10">Deep Retreat (10 Days)</button>
              <button type="button" class="day-pill-btn" data-days="14">Grand Yatra (14 Days)</button>
            </div>
            <input type="hidden" id="wiz-days-input" value="3" />
          </div>

          <!-- Step 3: Budget Tier & Currency -->
          <div class="wizard-step-section">
            <h3 class="wizard-section-title"><span>3.</span> Tour Budget Tier (बजट सीमा)</h3>
            <p class="wizard-section-desc">Calculated per day including stay, transport, meals & co-working hubs.</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.85rem; margin-bottom: 1rem;">
              <label class="food-option-card active" id="card-budget-moderate">
                <input type="radio" name="wiz-budget" value="moderate" checked />
                <div>
                  <strong style="color: #fff; font-size: 0.95rem; display: block;">💼 Growth / Comfort Tier</strong>
                  <span style="color: #34d399; font-weight: 700; font-size: 0.9rem;">~${n}${Math.round(5500*a).toLocaleString()} / day</span>
                  <p style="color: #94a3b8; font-size: 0.8rem; margin-top: 4px;">Premium 3-4★ stays, AC cabs, verified dining & fiber co-working.</p>
                </div>
              </label>

              <label class="food-option-card" id="card-budget-budget">
                <input type="radio" name="wiz-budget" value="budget" />
                <div>
                  <strong style="color: #fff; font-size: 0.95rem; display: block;">🎒 Bootstrapped / Backpacker</strong>
                  <span style="color: #38bdf8; font-weight: 700; font-size: 0.9rem;">~${n}${Math.round(2e3*a).toLocaleString()} / day</span>
                  <p style="color: #94a3b8; font-size: 0.8rem; margin-top: 4px;">Hostels/Homestays, local transit, clean cafes & street food.</p>
                </div>
              </label>

              <label class="food-option-card" id="card-budget-luxury">
                <input type="radio" name="wiz-budget" value="luxury" />
                <div>
                  <strong style="color: #fff; font-size: 0.95rem; display: block;">👑 Royal / Luxury Tier</strong>
                  <span style="color: #fbbf24; font-weight: 700; font-size: 0.9rem;">~${n}${Math.round(16e3*a).toLocaleString()} / day</span>
                  <p style="color: #94a3b8; font-size: 0.8rem; margin-top: 4px;">5★ Heritage palaces/resorts, private chauffeur, executive lounges.</p>
                </div>
              </label>
            </div>
            <div style="background: rgba(255,255,255,0.04); padding: 0.75rem 1rem; border-radius: 8px; font-size: 0.85rem; color: #cbd5e1; display: flex; justify-content: space-between; align-items: center;">
              <span>Estimated Total Tour Allocation:</span>
              <strong id="wiz-total-budget-preview" style="color: #34d399; font-size: 1.05rem;">${n}${Math.round(16500*a).toLocaleString()}</strong>
            </div>
          </div>

          <!-- Step 4: Food & Dietary Preferences -->
          <div class="wizard-step-section">
            <h3 class="wizard-section-title"><span>4.</span> Food & Dining Preferences (खानपान प्राथमिकता)</h3>
            <p class="wizard-section-desc">Every single breakfast, lunch, and dinner recommendation is dynamically matched to your exact dietary code.</p>
            <div class="food-options-grid" id="wiz-food-grid">
              <label class="food-option-card active">
                <input type="radio" name="wiz-food" value="pure_veg" checked />
                <div>
                  <strong style="color: #fff; font-size: 0.92rem; display: block;">🥗 Pure Vegetarian (शुद्ध शाकाहारी)</strong>
                  <p style="color: #94a3b8; font-size: 0.78rem; margin-top: 3px;">100% vegetarian kitchens, separate preparation, sattvic & north/south thalis.</p>
                </div>
              </label>

              <label class="food-option-card">
                <input type="radio" name="wiz-food" value="jain" />
                <div>
                  <strong style="color: #fff; font-size: 0.92rem; display: block;">🌿 Jain Friendly (जैन भोजन)</strong>
                  <p style="color: #94a3b8; font-size: 0.78rem; margin-top: 3px;">Strictly NO root vegetables (potato, onion, garlic). Prepared before sunset.</p>
                </div>
              </label>

              <label class="food-option-card">
                <input type="radio" name="wiz-food" value="non_veg" />
                <div>
                  <strong style="color: #fff; font-size: 0.92rem; display: block;">🍗 Non-Vegetarian Connoisseur</strong>
                  <p style="color: #94a3b8; font-size: 0.78rem; margin-top: 3px;">Iconic local specialties: Kashmiri Wazwan, Malabar seafood, Kolkata Biryani.</p>
                </div>
              </label>

              <label class="food-option-card">
                <input type="radio" name="wiz-food" value="vegan" />
                <div>
                  <strong style="color: #fff; font-size: 0.92rem; display: block;">🌱 Vegan & Plant-Based</strong>
                  <p style="color: #94a3b8; font-size: 0.78rem; margin-top: 3px;">100% dairy-free, oat/almond milk coffees, organic wholesome bowls.</p>
                </div>
              </label>

              <label class="food-option-card">
                <input type="radio" name="wiz-food" value="street_food" />
                <div>
                  <strong style="color: #fff; font-size: 0.92rem; display: block;">🍲 Street Food & Chaat Explorer</strong>
                  <p style="color: #94a3b8; font-size: 0.78rem; margin-top: 3px;">Hygiene-rated legendary food alleys, puchkas, samosas, chole bhature.</p>
                </div>
              </label>

              <label class="food-option-card">
                <input type="radio" name="wiz-food" value="halal" />
                <div>
                  <strong style="color: #fff; font-size: 0.92rem; display: block;">🥩 Halal Certified Dining</strong>
                  <p style="color: #94a3b8; font-size: 0.78rem; margin-top: 3px;">Strictly 100% Halal certified meats and family-friendly dining halls.</p>
                </div>
              </label>
            </div>
          </div>

          <!-- Step 5: Extended Startup & Team Retreat Features -->
          <div class="wizard-step-section">
            <h3 class="wizard-section-title"><span>5.</span> Professional Features for Extended Startup Plans</h3>
            <p class="wizard-section-desc">Unlock specialized facilities tailored for high-growth tech teams, founders, and retreat organizers.</p>
            <div class="workation-perks-grid">
              <label class="workation-perk-card active">
                <input type="checkbox" id="wiz-chk-coworking" checked style="width: 18px; height: 18px; accent-color: #10b981;" />
                <div>
                  <strong style="color: #fff; font-size: 0.9rem; display: block;">💻 High-Bandwidth Co-Working Hub</strong>
                  <span style="color: #34d399; font-size: 0.78rem;">650+ Mbps fiber, backup generators, hot desks & soundproof booths</span>
                </div>
              </label>

              <label class="workation-perk-card active">
                <input type="checkbox" id="wiz-chk-sprints" checked style="width: 18px; height: 18px; accent-color: #10b981;" />
                <div>
                  <strong style="color: #fff; font-size: 0.9rem; display: block;">🧠 Team Brainstorming & Sprint Slots</strong>
                  <span style="color: #38bdf8; font-size: 0.78rem;">2-3 hour quiet strategy sessions with whiteboard breakout setups</span>
                </div>
              </label>

              <label class="workation-perk-card active">
                <input type="checkbox" id="wiz-chk-gala" checked style="width: 18px; height: 18px; accent-color: #10b981;" />
                <div>
                  <strong style="color: #fff; font-size: 0.9rem; display: block;">🥂 Gala Team Bonding Social</strong>
                  <span style="color: #fbbf24; font-size: 0.78rem;">Private dining hall, musical bonfire, and celebration demo day</span>
                </div>
              </label>
            </div>

            <!-- Pace Selection -->
            <div style="margin-top: 1.25rem;">
              <label class="form-label">Travel & Work Pace</label>
              <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                <label style="display: flex; align-items: center; gap: 0.4rem; color: #cbd5e1; font-size: 0.85rem; cursor: pointer;">
                  <input type="radio" name="wiz-pace" value="relaxed" />
                  <span>🌴 Relaxed (Focus on deep work & slow walks)</span>
                </label>
                <label style="display: flex; align-items: center; gap: 0.4rem; color: #cbd5e1; font-size: 0.85rem; cursor: pointer;">
                  <input type="radio" name="wiz-pace" value="balanced" checked />
                  <span>⚖️ Balanced (Work sprints + iconic sights)</span>
                </label>
                <label style="display: flex; align-items: center; gap: 0.4rem; color: #cbd5e1; font-size: 0.85rem; cursor: pointer;">
                  <input type="radio" name="wiz-pace" value="fast_paced" />
                  <span>⚡ High Energy (Cover maximum spots daily)</span>
                </label>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <div style="display: flex; gap: 1rem; align-items: center; justify-content: flex-end; margin-top: 1.5rem;">
            <button type="submit" class="btn-primary" id="btn-submit-wizard" style="padding: 0.85rem 2rem; font-size: 1rem; background: linear-gradient(135deg, #ff9933, #ea580c); box-shadow: 0 4px 20px rgba(234, 88, 12, 0.45);">
              <span>⚡ Generate Custom AI Tour Schedule</span>
              <span>➔</span>
            </button>
          </div>
        </form>

        <!-- Plan Result Box (Hidden until generated) -->
        <div id="wiz-result-box" style="display: none; margin-top: 1.5rem;"></div>
      </div>
    `,this.bindWizardEvents(e)}bindWizardEvents(e){const t=document.getElementById("wiz-days-input"),n=document.getElementById("wiz-total-budget-preview"),a=document.getElementById("trip-wizard-form"),r=document.getElementById("wiz-result-box"),s=()=>{var g;const l=parseInt(t.value)||3,c=((g=document.querySelector('input[name="wiz-budget"]:checked'))==null?void 0:g.value)||"moderate",f={budget:2e3,moderate:5500,luxury:16e3}[c]||5500,h=l*f,p=Math.round(h*this.itinerary.currencyRate);n&&(n.textContent=`${this.itinerary.currencySymbol}${p.toLocaleString()}`)},o=e.querySelectorAll("#wiz-days-pills .day-pill-btn");o.forEach(l=>{l.addEventListener("click",()=>{o.forEach(c=>c.classList.remove("active")),l.classList.add("active"),t.value=l.getAttribute("data-days"),s()})}),e.querySelectorAll('input[name="wiz-budget"]').forEach(l=>{l.addEventListener("change",()=>{e.querySelectorAll('label[id^="card-budget-"]').forEach(c=>c.classList.remove("active")),l.closest("label").classList.add("active"),s()})}),e.querySelectorAll("#wiz-food-grid .food-option-card").forEach(l=>{l.addEventListener("click",()=>{e.querySelectorAll("#wiz-food-grid .food-option-card").forEach(c=>c.classList.remove("active")),l.classList.add("active")})}),a.addEventListener("submit",async l=>{var m,u,w;l.preventDefault();const c=document.getElementById("btn-submit-wizard");c.disabled=!0,c.innerHTML="<span>⏳ Synthesizing Custom Schedule...</span>";const d=document.getElementById("wiz-destination").value,f=document.getElementById("wiz-trip-type").value,h=parseInt(t.value)||3,p=((m=document.querySelector('input[name="wiz-budget"]:checked'))==null?void 0:m.value)||"moderate",g=((u=document.querySelector('input[name="wiz-food"]:checked'))==null?void 0:u.value)||"pure_veg",y=((w=document.querySelector('input[name="wiz-pace"]:checked'))==null?void 0:w.value)||"balanced";try{const E=await this.tripWizard.generateCustomItinerary({destination:d,tripType:f,days:h,budgetTier:p,foodPreference:g,pace:y,currency:this.itinerary.currency});r.style.display="block",r.innerHTML=`
          <div class="wizard-form-card" style="border: 2px solid #34d399; box-shadow: 0 0 25px rgba(52, 211, 153, 0.25);">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem; border-bottom: 1px solid var(--border-glass); padding-bottom: 1rem;">
              <div>
                <span style="background: rgba(16, 185, 129, 0.2); color: #34d399; font-weight: 700; padding: 2px 10px; border-radius: 6px; font-size: 0.78rem;">
                  PLAN GENERATION SUCCESSFUL
                </span>
                <h3 style="font-family: var(--font-display); font-size: 1.45rem; color: #fff; margin-top: 0.35rem;">
                  🇮🇳 ${E.destination.toUpperCase()} · ${E.durationDays}-Day Customized Itinerary
                </h3>
                <p style="color: #cbd5e1; font-size: 0.88rem;">
                  Matched to <strong>${E.foodPreference}</strong> with ${E.estimatedTotalCost} estimated allocation.
                </p>
              </div>

              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button type="button" class="btn-primary" id="btn-load-into-planner" style="background: linear-gradient(135deg, #10b981, #059669); font-size: 0.85rem; padding: 0.55rem 1rem;">
                  📥 Load into Master Day/Hour Planner
                </button>
                <button type="button" class="btn-secondary" id="btn-view-wizard-map" style="font-size: 0.85rem; padding: 0.55rem 1rem;">
                  📍 View Route on Interactive Map
                </button>
              </div>
            </div>

            <!-- Day Selector Tabs -->
            <div style="display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 0.75rem; margin-bottom: 1rem;" id="wiz-result-day-tabs">
              ${E.days.map((A,C)=>`
                <button type="button" class="day-pill-btn ${C===0?"active":""}" data-day-index="${C}">
                  ${A.theme.split(":")[0]||`Day ${A.day}`}
                </button>
              `).join("")}
            </div>

            <!-- Hour-by-Hour Cards for Selected Day -->
            <div id="wiz-day-hours-container" style="display: flex; flex-direction: column; gap: 0.85rem;"></div>
          </div>
        `;const x=A=>{const C=E.days[A]||E.days[0],F=document.getElementById("wiz-day-hours-container");F&&(F.innerHTML=`
            <div style="background: rgba(255,255,255,0.05); padding: 0.75rem 1rem; border-radius: 8px; margin-bottom: 0.5rem;">
              <strong style="color: #fbbf24; font-size: 0.95rem;">${C.theme}</strong>
            </div>
            ${C.hours.map(S=>`
              <div class="hour-card" style="border-left: 4px solid ${S.badgeColor==="blue"?"#38bdf8":S.badgeColor==="purple"?"#a855f7":"#34d399"};">
                <div>
                  <span class="hour-time-badge">${S.time}</span>
                  <div style="margin-top: 0.5rem;">
                    <span style="font-size: 0.75rem; font-weight: 700; color: #94a3b8; text-transform: uppercase;">${S.categoryTag}</span>
                    <h4 style="color: #fff; font-size: 1.05rem; margin: 2px 0 6px;">${S.title}</h4>
                    <p style="color: #cbd5e1; font-size: 0.85rem; line-height: 1.4;">${S.description}</p>
                    <div style="display: flex; gap: 0.75rem; align-items: center; margin-top: 0.5rem; font-size: 0.8rem; color: #94a3b8;">
                      <span>📍 ${S.location}</span>
                      <span>⭐ ${S.rating}</span>
                    </div>
                  </div>
                </div>
                <div class="hour-action-col">
                  <div class="hour-cost-pill">${S.cost}</div>
                </div>
              </div>
            `).join("")}
          `)};x(0);const N=r.querySelectorAll("#wiz-result-day-tabs .day-pill-btn");N.forEach(A=>{A.addEventListener("click",()=>{N.forEach(C=>C.classList.remove("active")),A.classList.add("active"),x(parseInt(A.getAttribute("data-day-index")))})}),document.getElementById("btn-load-into-planner").addEventListener("click",()=>{this.switchView("plan",{destination:d}),bt({particleCount:70,spread:80,origin:{y:.6}})}),document.getElementById("btn-view-wizard-map").addEventListener("click",()=>{this.switchView("interactive-map",{destination:d})}),bt({particleCount:100,spread:90,origin:{y:.6}}),r.scrollIntoView({behavior:"smooth",block:"start"})}catch(E){alert(`Could not generate itinerary: ${E.message}`)}finally{c.disabled=!1,c.innerHTML="<span>⚡ Generate Custom AI Tour Schedule</span><span>➔</span>"}})}renderItineraryPlanner(e){const t=this.itinerary.activePlan,n=this.itinerary.getCurrentDay(),a=this.itinerary.selectedDayIndex,r=this.itinerary.weatherMode==="rainy",s=this.itinerary.calculateDayTotalCost(a),o=this.itinerary.currentDestination,l=Fe[o]||Fe.kashmir;e.innerHTML=`
      <!-- Destination Hero Banner -->
      <div class="itinerary-hero-banner" style="background-image: url('${l.image}');">
        <div class="itinerary-hero-overlay"></div>
        <div class="itinerary-hero-content">
          <div class="itinerary-hero-badges">
            <span class="dest-badge-state" style="position: static;">📍 ${l.state}</span>
            <span class="dest-badge-weather" style="position: static;">⛅ ${l.weather.temp}°C · ${l.weather.condition}</span>
            <span class="dest-meta-chip" style="background: rgba(16, 185, 129, 0.25); color: #6ee7b7; border-color: rgba(16, 185, 129, 0.4);">
              📅 Best: ${l.bestSeason?l.bestSeason.split("/")[0].trim():"Oct - Mar"}
            </span>
            <span class="dest-meta-chip" style="background: rgba(239, 68, 68, 0.25); color: #fca5a5; border-color: rgba(239, 68, 68, 0.4);">
              📞 Tourist Helpline: 1363 / 112
            </span>
          </div>
          <h2 class="itinerary-hero-title">${l.name}</h2>
          <p class="itinerary-hero-desc">${l.tagline}</p>
        </div>
      </div>

      <div class="itinerary-filter-bar">
        <div class="filter-group">
          <span style="font-size: 0.9rem; color: var(--text-muted); font-weight: 600;">Choose Destination:</span>
          <select class="destination-selector" id="plan-dest-select">
            ${Object.keys(Fe).map(c=>`
              <option value="${c}" ${this.itinerary.currentDestination===c?"selected":""}>
                🇮🇳 ${Fe[c].name} (${Fe[c].state})
              </option>
            `).join("")}
          </select>
        </div>

        <div class="filter-group">
          <button class="btn-secondary" id="btn-toggle-weather-sim">
            ${r?"🌧️ Rainy Weather Mode (Active)":"☀️ Sunny Weather Mode (Active)"}
          </button>
          <button class="btn-secondary" id="btn-open-map-direct">📍 View On Map</button>
          <button class="btn-secondary" id="btn-share-whatsapp" style="color: #22c55e;">
            💬 Share via WhatsApp
          </button>
          <button class="btn-primary" id="btn-print-itinerary" style="width: auto;">🖨️ Print / PDF</button>
        </div>
      </div>

      <!-- Day Tabs Nav -->
      <div class="day-tabs-nav">
        ${t.days.map((c,d)=>`
          <button class="day-tab-btn ${d===a?"active":""}" data-day-index="${d}">
            <span>${c.date}: ${c.title}</span>
            <span class="day-sub">${c.subtitle}</span>
          </button>
        `).join("")}
      </div>

      <!-- Day Header -->
      <div class="day-overview-header">
        <div>
          <h3>${n.title}</h3>
          <p style="color: var(--text-muted); font-size: 0.88rem;">${n.subtitle}</p>
        </div>
        <div class="day-cost-badge">Estimated Day Cost: ${s}</div>
      </div>

      <!-- Hour Timeline -->
      <div class="timeline-container">
        ${n.hours.map((c,d)=>`
          <div class="hour-card ${c.completed?"completed":""}" data-hour-index="${d}">
            <div class="hour-time-col">
              <div class="hour-time-badge">
                <span>⏰</span>
                <span>${c.time}</span>
              </div>
              <span class="hour-tag ${c.badgeColor||"blue"}">${c.categoryTag||c.category}</span>
            </div>

            <div class="hour-details-col">
              <h4>${c.title}</h4>
              <p>${c.description}</p>
              <div class="hour-meta-pills">
                <span>📍 ${c.location}</span>
                <span>⭐ ${c.rating}</span>
                <span>🛡️ ${c.weatherSuitability}</span>
                <span>👗 ${l.wardrobe?l.wardrobe.category:"Comfortable Travel Attire"}</span>
              </div>
            </div>

            <div class="hour-action-col">
              <span class="hour-cost">${this.itinerary.formatCost(c.costNum||0)}</span>
              <button class="btn-secondary btn-listen-hour" data-hour-speech="${encodeURIComponent(`${c.time}. ${c.title}. ${c.description}`)}" title="Listen with AI Voice" style="padding: 0.35rem 0.65rem; font-size: 0.78rem;">
                🔊 Listen
              </button>
              <button class="check-toggle-btn ${c.completed?"checked":""}" data-toggle-hour="${d}" title="Mark completed">
                ${c.completed?"✓":"○"}
              </button>
            </div>
          </div>
        `).join("")}
      </div>
    `,document.getElementById("plan-dest-select").addEventListener("change",c=>{this.itinerary.generatePlan(c.target.value),this.wardrobePacker.setDestination(c.target.value),this.renderItineraryPlanner(e)}),document.getElementById("btn-toggle-weather-sim").addEventListener("click",()=>{this.itinerary.toggleWeatherMode(),this.renderItineraryPlanner(e)}),document.getElementById("btn-open-map-direct").addEventListener("click",()=>this.switchView("interactive-map")),document.getElementById("btn-print-itinerary").addEventListener("click",()=>window.print()),document.getElementById("btn-share-whatsapp").addEventListener("click",()=>{const c=`TravelAI Bharat Itinerary for ${l.name} (${n.title}):
`+n.hours.map(d=>`• ${d.time}: ${d.title} (${this.itinerary.formatCost(d.costNum||0)})`).join(`
`)+`

Estimated Total: ${s}
Emergency Tourist Helpline: 1363
View: http://localhost:3000/`;window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(c)}`,"_blank")}),e.querySelectorAll(".day-tab-btn").forEach(c=>{c.addEventListener("click",()=>{const d=parseInt(c.getAttribute("data-day-index"));this.itinerary.selectDay(d),this.renderItineraryPlanner(e)})}),e.querySelectorAll(".btn-listen-hour").forEach(c=>{c.addEventListener("click",()=>{const d=decodeURIComponent(c.getAttribute("data-hour-speech"));this.aiEngine.speakText(d)})}),e.querySelectorAll(".check-toggle-btn").forEach(c=>{c.addEventListener("click",d=>{d.stopPropagation();const f=parseInt(c.getAttribute("data-toggle-hour"));this.itinerary.toggleHourCompleted(a,f)&&bt({particleCount:35,spread:55,origin:{y:.7}}),this.renderItineraryPlanner(e)})})}renderInteractiveMapView(e){const t=this.itinerary.currentDestination,n=Fe[t]||Fe.kashmir;e.innerHTML=`
      <div class="itinerary-filter-bar">
        <div class="filter-group">
          <span style="font-size: 0.9rem; color: var(--text-muted); font-weight: 600;">Destination:</span>
          <select class="destination-selector" id="map-dest-select">
            ${Object.keys(Fe).map(a=>`
              <option value="${a}" ${t===a?"selected":""}>
                🇮🇳 ${Fe[a].name} (${Fe[a].state})
              </option>
            `).join("")}
          </select>
        </div>

        <div class="filter-group">
          <button class="btn-secondary" id="btn-share-map-coords">
            📋 Copy Coordinates & Share Link
          </button>
          <button class="btn-primary" id="btn-locate-user-gps" style="width: auto;">
            📍 Locate My Device (GPS)
          </button>
        </div>
      </div>

      <div style="position: relative; width: 100%; height: 600px; border-radius: 16px; overflow: hidden; border: 1px solid var(--border-glass); box-shadow: var(--shadow-card);">
        <div id="leaflet-map-canvas" style="width: 100%; height: 100%;"></div>

        <!-- HUD Card overlay -->
        <div style="position: absolute; bottom: 20px; left: 20px; z-index: 1000; background: rgba(15,23,42,0.9); backdrop-filter: blur(14px); padding: 14px 20px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.12); color: #fff; max-width: 380px; box-shadow: 0 10px 25px rgba(0,0,0,0.6);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <strong style="font-size: 13px; color: #38bdf8;">📍 ${n.name} Route Corridor</strong>
            <span style="font-size: 11px; color: #34d399; font-weight: 600;">● Free OpenStreetMap</span>
          </div>
          <p style="font-size: 11px; color: #94a3b8; line-height: 1.4; margin: 0;">
            Sequential numbered markers (1, 2, 3...) connect each hourly experience. Amber/red radius displays monitored natural hazard zones.
          </p>
          <div style="margin-top: 8px; display: flex; gap: 6px; font-size: 11px;">
            <span style="color: #cbd5e1;">Lat: <strong>${n.lat.toFixed(4)}°N</strong></span>
            <span style="color: #cbd5e1;">Lng: <strong>${n.lng.toFixed(4)}°E</strong></span>
          </div>
        </div>
      </div>
    `,document.getElementById("map-dest-select").addEventListener("change",a=>{this.itinerary.generatePlan(a.target.value),this.renderInteractiveMapView(e)}),document.getElementById("btn-share-map-coords").addEventListener("click",()=>{const a=`https://www.google.com/maps?q=${n.lat},${n.lng}`,r=`TravelAI Bharat - ${n.name} (${n.state}): GPS Coordinates ${n.lat}, ${n.lng}. Live Map Link: ${a}`;navigator.clipboard.writeText(r).then(()=>{bt({particleCount:30,spread:50}),alert(`✅ Copied to clipboard!

${r}`)}).catch(()=>{alert(r)})}),document.getElementById("btn-locate-user-gps").addEventListener("click",()=>{this.leafletMapInstance&&this.leafletMapInstance.locateUser(a=>{bt({particleCount:40,spread:60}),alert(`🎯 GPS Locked! Lat: ${a.latitude.toFixed(4)}°N, Lng: ${a.longitude.toFixed(4)}°E (Precision ±${a.accuracy}m). Map centered on your device.`)})}),setTimeout(()=>{this.leafletMapInstance&&this.leafletMapInstance.destroy(),this.leafletMapInstance=new gp("leaflet-map-canvas"),this.leafletMapInstance.loadDestinationItinerary(n,this.itinerary.selectedDayIndex)},150)}renderHazardView(e){const t=this.itinerary.currentDestination,n=this.hazardEngine.calculateHazardRisk(t),a=n.probabilityPercent>50?"high":n.probabilityPercent>25?"moderate":"low";e.innerHTML=`
      <div class="itinerary-filter-bar">
        <div class="filter-group">
          <span style="font-size: 0.9rem; color: var(--text-muted); font-weight: 600;">Destination:</span>
          <select class="destination-selector" id="hazard-dest-select">
            ${Object.keys(Fe).map(r=>`
              <option value="${r}" ${t===r?"selected":""}>
                🇮🇳 ${Fe[r].name}
              </option>
            `).join("")}
          </select>
        </div>

        <div class="filter-group">
          <span style="font-size: 0.9rem; color: var(--text-muted);">Estimated Travel Date:</span>
          <input type="date" id="hazard-date-input" class="form-control" style="width: auto; padding: 0.5rem 1rem;" 
                 value="${this.hazardEngine.selectedDate.toISOString().split("T")[0]}" />
        </div>
      </div>

      <!-- Hazard Risk Card -->
      <div class="hazard-risk-card">
        <div class="hazard-header-row">
          <div>
            <h3 style="font-family: var(--font-display); font-size: 1.4rem; color: #fff;">
              ⚠️ ${n.hazardType} Risk Assessment
            </h3>
            <p style="color: var(--text-muted); font-size: 0.88rem;">Forecasted for ${n.targetDate} in ${n.destinationName}</p>
          </div>
          <span class="hazard-badge-pill ${a}">${n.baseLevel}</span>
        </div>

        <div class="hazard-meter-track">
          <div class="hazard-meter-fill" style="width: ${n.probabilityPercent}%;"></div>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-muted);">
          <span>Probability: <strong>${n.probabilityPercent}%</strong></span>
          <span>Rain Probability: <strong>${n.estimatedRainChance}%</strong></span>
          <span>Forecast Temp: <strong>${n.estimatedTemp}°C</strong></span>
        </div>

        <div style="margin-top: 1.25rem; background: rgba(0,0,0,0.25); padding: 1rem; border-radius: 8px;">
          <strong style="color: #cbd5e1; font-size: 0.9rem;">⚠️ Monitored Danger Zones:</strong>
          <p style="color: #94a3b8; font-size: 0.85rem; margin-top: 0.2rem;">${n.dangerZones.join(" · ")}</p>
          <strong style="color: #cbd5e1; font-size: 0.9rem; display: block; margin-top: 0.75rem;">Official Safety Protocol:</strong>
          <p style="color: #94a3b8; font-size: 0.85rem; margin-top: 0.2rem;">${n.officialAdvisory}</p>
        </div>
      </div>

      <!-- Automated Hazard Alert Mailing System -->
      <div class="wardrobe-card">
        <h3 style="font-family: var(--font-display); font-size: 1.25rem; color: #fff; margin-bottom: 0.5rem;">
          📧 Automated Hazard Advisory Mailing Dispatcher
        </h3>
        <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.25rem;">
          Notify your emergency family contacts, hotel reception, or local tour guides with 1 click about verified weather & hazard conditions.
        </p>

        <div class="form-group">
          <label class="form-label">Recipient Email (Hotel / Family Contact / Tour Guide)</label>
          <input type="email" id="hazard-mail-recipient" class="form-control" placeholder="hotel.manager@destination.com" value="emergency.contact@domain.com" style="padding-left: 1rem;" />
        </div>

        <div class="form-group">
          <label class="form-label">Optional Personal Traveler Note</label>
          <textarea id="hazard-mail-note" class="form-control" rows="2" placeholder="e.g. Traveling with 2 elderly family members, kindly keep room on ground floor..." style="padding-left: 1rem;"></textarea>
        </div>

        <button class="btn-primary" id="btn-dispatch-hazard-email" style="width: auto;">
          <span>Dispatch Hazard Advisory Email</span>
          <span>➔</span>
        </button>
      </div>
    `,document.getElementById("hazard-dest-select").addEventListener("change",r=>{this.itinerary.generatePlan(r.target.value),this.renderHazardView(e)}),document.getElementById("hazard-date-input").addEventListener("change",r=>{this.hazardEngine.setDate(r.target.value),this.renderHazardView(e)}),document.getElementById("btn-dispatch-hazard-email").addEventListener("click",()=>{const r=document.getElementById("hazard-mail-recipient").value,s=document.getElementById("hazard-mail-note").value,o=this.hazardEngine.generateHazardAlertEmail(t,r,s);window.location.href=o})}renderWardrobeView(e){const t=this.itinerary.currentDestination,n=Fe[t]||Fe.kashmir,a=this.wardrobePacker.getWardrobeAdvice(t);let r=[];try{const l=localStorage.getItem(`travelai_custom_pack_${t}`);l&&(r=JSON.parse(l))}catch{}const s=[...a.mustCarry,...r];e.innerHTML=`
      <div class="itinerary-filter-bar">
        <div class="filter-group">
          <span style="font-size: 0.9rem; color: var(--text-muted); font-weight: 600;">Destination:</span>
          <select class="destination-selector" id="wardrobe-dest-select">
            ${Object.keys(Fe).map(l=>`
              <option value="${l}" ${t===l?"selected":""}>
                🇮🇳 ${Fe[l].name} (${Fe[l].state})
              </option>
            `).join("")}
          </select>
        </div>
      </div>

      <div class="wardrobe-grid">
        <!-- AI Dress Recommendations -->
        <div class="wardrobe-card">
          <div style="display: flex; gap: 0.75rem; align-items: center; margin-bottom: 0.5rem;">
            <span style="font-size: 1.8rem;">👗</span>
            <div>
              <h3 style="font-family: var(--font-display); font-size: 1.3rem; color: #fff;">
                AI Wardrobe & Style Guide for ${n.name}
              </h3>
              <span style="color: #38bdf8; font-size: 0.85rem;">${a.category}</span>
            </div>
          </div>

          <div style="background: rgba(37,99,235,0.1); border: 1px solid rgba(59,130,246,0.3); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
            <strong style="color: #fff; font-size: 0.95rem;">Recommended Outfit:</strong>
            <p style="color: #93c5fd; font-size: 0.9rem; margin-top: 0.2rem;">${a.headline}</p>
          </div>

          <strong style="color: #cbd5e1; font-size: 0.88rem;">Optimal Fabrics:</strong>
          <div class="fabric-chips-row">
            ${a.fabrics.split(",").map(l=>`<span class="fabric-chip">${l.trim()}</span>`).join("")}
          </div>

          <strong style="color: #cbd5e1; font-size: 0.88rem;">Recommended Footwear:</strong>
          <p style="color: #94a3b8; font-size: 0.85rem; margin: 0.35rem 0 1rem;">👟 ${a.footwear}</p>

          <strong style="color: #cbd5e1; font-size: 0.88rem;">Sacred / Cultural Etiquette:</strong>
          <p style="color: #94a3b8; font-size: 0.85rem; margin-top: 0.35rem;">🛕 ${a.culturalEtiquette}</p>
        </div>

        <!-- Last-Minute Departure Checklist -->
        <div class="wardrobe-card">
          <h3 style="font-family: var(--font-display); font-size: 1.25rem; color: #fff; margin-bottom: 0.35rem;">
            🎒 Mandatory Luggage & Packing Checklist
          </h3>
          <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 1rem;">
            Verify and check off mandatory items before boarding your journey.
          </p>

          <!-- Packing Readiness Progress Bar -->
          <div class="checklist-progress-box">
            <div style="display: flex; justify-content: space-between; font-size: 0.82rem; font-weight: 600;">
              <span style="color: #cbd5e1;">Packing Readiness:</span>
              <span id="pack-progress-text" style="color: #34d399;">0 of ${s.length} packed (0%)</span>
            </div>
            <div class="checklist-progress-bar">
              <div class="checklist-progress-fill" id="pack-progress-fill" style="width: 0%;"></div>
            </div>
          </div>

          <div id="checklist-container">
            ${s.map((l,c)=>`
              <div class="checklist-item" data-idx="${c}">
                <input type="checkbox" id="chk-${c}" class="pack-checkbox" />
                <label for="chk-${c}">${l}</label>
              </div>
            `).join("")}
          </div>

          <!-- Add Custom Luggage Item -->
          <div style="display: flex; gap: 0.5rem; margin-top: 1.25rem;">
            <input type="text" id="custom-pack-input" class="form-control" placeholder="Add custom gear (e.g. DSLR Camera, Power bank)..." style="padding: 0.45rem 0.8rem; font-size: 0.85rem;" />
            <button class="btn-secondary" id="btn-add-custom-pack" style="padding: 0.45rem 0.9rem; font-size: 0.82rem; white-space: nowrap;">
              + Add Item
            </button>
          </div>

          <button class="btn-primary" id="btn-verify-all-packed" style="margin-top: 1.25rem; width: 100%;">
            Verify All Gear & Bag Locked
          </button>
        </div>
      </div>
    `;const o=()=>{const l=e.querySelectorAll(".pack-checkbox"),c=l.length;let d=0;l.forEach(g=>{g.checked&&d++});const f=c>0?Math.round(d/c*100):0,h=document.getElementById("pack-progress-fill"),p=document.getElementById("pack-progress-text");h&&(h.style.width=`${f}%`),p&&(p.textContent=`${d} of ${c} packed (${f}%)`)};e.querySelectorAll(".pack-checkbox").forEach(l=>{l.addEventListener("change",o)}),document.getElementById("wardrobe-dest-select").addEventListener("change",l=>{this.itinerary.generatePlan(l.target.value),this.wardrobePacker.setDestination(l.target.value),this.renderWardrobeView(e)}),document.getElementById("btn-add-custom-pack").addEventListener("click",()=>{const c=document.getElementById("custom-pack-input").value.trim();c&&(r.push(c),localStorage.setItem(`travelai_custom_pack_${t}`,JSON.stringify(r)),this.renderWardrobeView(e))}),document.getElementById("btn-verify-all-packed").addEventListener("click",()=>{bt({particleCount:55,spread:70,origin:{y:.6}}),alert("🎉 Great job! All essential travel gear confirmed. Safe travels across Incredible India!")})}renderOfflineSOSView(e){const t=this.offlineSos.currentCoords;this.offlineSos.isMobile();const n=this.offlineSos.activeSosTicket;e.innerHTML=`
      <div class="emergency-grid">
        <!-- Cellular SOS Card -->
        <div class="emergency-alert-card">
          <div class="sos-badge-header">
            <span>🚨</span>
            <span>Zero-Internet Cellular & Satellite SOS</span>
          </div>
          <p style="color: #cbd5e1; font-size: 0.9rem;">
            Engineered to operate with <strong>0% internet or data connection</strong>. Locks satellite GPS coordinates and generates direct cellular 112 distress dispatches.
          </p>

          <!-- Official NDRF Emergency Ticket Banner (If broadcasted) -->
          <div id="sos-ticket-banner" style="${n?"display: block;":"display: none;"}; margin: 1rem 0;">
            <div class="sos-official-ticket">
              <div>
                <span style="background: #10b981; color: #fff; font-weight: 700; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">
                  OFFICIAL DISPATCH TICKET
                </span>
                <strong id="sos-ticket-text" style="color: #fff; display: block; margin-top: 4px; font-size: 1.1rem; font-family: monospace;">
                  ${n||"SOS-NDRF-2026-ACTIVE"}
                </strong>
                <span style="color: #6ee7b7; font-size: 0.8rem;">NDRF Central Command & Tourist Safety Police Alerted</span>
              </div>
              <span style="font-size: 1.6rem;">🛰️</span>
            </div>
          </div>

          <!-- GPS Lock Status Display -->
          <div style="background: rgba(0,0,0,0.35); padding: 1rem; border-radius: 10px; margin: 1.25rem 0; font-family: monospace; font-size: 0.9rem; color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.2);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
              <strong style="color: #fff;">🛰️ SATELLITE GPS LOCK:</strong>
              <button type="button" id="btn-calibrate-gps" style="background: transparent; border: none; color: #fbbf24; font-size: 0.78rem; cursor: pointer; text-decoration: underline;">
                Calibrate Coords
              </button>
            </div>
            • Latitude: <span id="sos-lat">${t.latitude.toFixed(5)}</span>° N<br>
            • Longitude: <span id="sos-lng">${t.longitude.toFixed(5)}</span>° E<br>
            • Altitude: <span id="sos-alt">${t.altitude}</span> meters ASL<br>
            • Precision: ±<span id="sos-acc">${t.accuracy}</span> meters (HDOP 0.9)
          </div>

          <!-- Direct Emergency Phone Dialing (112 & 1363) -->
          <strong style="color: #fff; font-size: 0.95rem; display: block; margin-bottom: 0.5rem;">Direct Emergency Calling (No Internet):</strong>
          <div class="sos-call-grid">
            <a href="tel:112" class="sos-direct-call-btn sos-call-112">
              <span>📞</span>
              <span>Direct Call 112 (National Police/Medical)</span>
            </a>
            <a href="tel:1363" class="sos-direct-call-btn sos-call-1363">
              <span>🛡️</span>
              <span>Direct Call 1363 (Tourist Helpline)</span>
            </a>
          </div>

          <!-- Cellular SMS & WhatsApp Dispatches -->
          <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1.25rem;">
            <a href="${this.offlineSos.generateOfflineCellularSMS("112")}" class="btn-primary" style="background: linear-gradient(135deg, #ef4444, #dc2626); justify-content: center; text-decoration: none; min-height: 48px;">
              <span>📱</span>
              <span>Dispatch Cellular SMS to 112 (Zero Internet)</span>
            </a>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.65rem;">
              <button type="button" id="btn-copy-sos" class="btn-secondary" style="justify-content: center; min-height: 48px;">
                <span>📋</span>
                <span id="btn-copy-text">Copy Distress Note</span>
              </button>
              <a href="${this.offlineSos.generateWhatsAppSOS()}" target="_blank" class="btn-secondary" style="justify-content: center; text-decoration: none; min-height: 48px;">
                <span>💬</span>
                <span>WhatsApp SOS</span>
              </a>
            </div>

            <!-- Server SOS Broadcast (When data is available) -->
            <button type="button" id="btn-cloud-sos" class="btn-primary" style="background: linear-gradient(135deg, #10b981, #059669); justify-content: center; min-height: 48px;">
              <span>📡</span>
              <span>Broadcast to NDRF Safety Cloud (Generate Ticket)</span>
            </button>
          </div>

          <!-- Acoustic Distress Siren & Visual Strobe -->
          <div style="margin-top: 1.5rem; border-top: 1px solid var(--border-glass); padding-top: 1.25rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
              <strong style="color: #fff; font-size: 0.95rem;">Loud Acoustic Distress Siren:</strong>
              <span id="strobe-status-indicator" style="font-size: 0.75rem; color: #94a3b8;">Screen Strobe: Ready</span>
            </div>
            <button class="siren-btn" id="btn-toggle-siren" style="width: 100%; justify-content: center; font-size: 1.05rem; min-height: 52px;">
              <span>📢</span>
              <span id="siren-btn-text">Blast Emergency Siren & Strobe</span>
            </button>
            <span style="font-size: 0.8rem; color: #94a3b8; display: block; margin-top: 0.5rem; line-height: 1.4;">
              Generates high-penetration dual-frequency acoustic soundwaves (850Hz–1450Hz) directly through device hardware speakers to alert mountain QRT and rescue dog teams.
            </span>
          </div>
        </div>

        <!-- Offline Medical First-Aid Guides -->
        <div class="medical-list-card">
          <h4 style="font-size: 1.25rem; color: #fff; font-family: var(--font-display); margin-bottom: 1rem;">
            🩺 Offline Tourist Emergency First-Aid
          </h4>

          <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
            <button class="btn-secondary active" id="btn-fa-ams" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">Altitude AMS</button>
            <button class="btn-secondary" id="btn-fa-cold" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">Hypothermia</button>
            <button class="btn-secondary" id="btn-fa-heat" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">Heatstroke</button>
          </div>

          <div id="first-aid-body" style="background: rgba(255,255,255,0.05); padding: 1.25rem; border-radius: 10px;">
            <!-- Loaded dynamically -->
          </div>
        </div>
      </div>
    `;const a=document.getElementById("btn-toggle-siren"),r=document.getElementById("siren-btn-text"),s=document.getElementById("strobe-status-indicator");a.addEventListener("click",async()=>{await this.offlineSos.toggleAcousticSiren()?(a.classList.add("playing"),r.textContent="STOP Acoustic Siren & Strobe",s&&(s.textContent="🚨 Strobe ACTIVE (Visual Beacon)",s.style.color="#ef4444")):(a.classList.remove("playing"),r.textContent="Blast Emergency Siren & Strobe",s&&(s.textContent="Screen Strobe: Ready",s.style.color="#94a3b8"))});const o=document.getElementById("btn-copy-sos"),l=document.getElementById("btn-copy-text");o.addEventListener("click",async()=>{await this.offlineSos.copyDistressToClipboard(),l.textContent="✓ Copied to Clipboard!",o.style.borderColor="#10b981",setTimeout(()=>{l.textContent="Copy Distress Note",o.style.borderColor=""},2500),alert("📋 Emergency GPS distress note copied to clipboard! You can paste this in any SMS, email, or messaging app.")});const c=document.getElementById("btn-cloud-sos");c.addEventListener("click",async()=>{c.disabled=!0,c.innerHTML="<span>⏳ Dispatching to NDRF Cloud...</span>";const f=this.auth.currentUser||{},h=await this.offlineSos.broadcastToCloud(f.name||"Tourist in Distress",f.phone||"+91 98765 43210","Distress beacon activated from TravelAI Bharat Offline SOS Panel.");c.disabled=!1,c.innerHTML="<span>📡 Broadcast to NDRF Safety Cloud (Generate Ticket)</span>";const p=document.getElementById("sos-ticket-banner"),g=document.getElementById("sos-ticket-text");p&&g&&(g.textContent=h.ticket,p.style.display="block",p.scrollIntoView({behavior:"smooth",block:"center"})),bt({particleCount:70,spread:80,origin:{y:.6}}),alert(`🛰️ Distress Beacon Dispatched!
Official Incident Ticket: ${h.ticket}
Local QRT & Tourist Safety Cell notified.`)}),document.getElementById("btn-calibrate-gps").addEventListener("click",()=>{const f=prompt("Enter Current Latitude (e.g. 27.0410 for Darjeeling, 34.0837 for Srinagar):",t.latitude);if(f===null)return;const h=prompt("Enter Current Longitude (e.g. 88.2663 for Darjeeling, 74.7973 for Srinagar):",t.longitude);h!==null&&(this.offlineSos.setManualCoordinates(f,h),this.updateOfflineLocationUI())});const d=f=>{const h=this.offlineSos.getOfflineFirstAidGuide(f);document.getElementById("first-aid-body").innerHTML=`
        <strong style="color: #38bdf8; font-size: 1rem; display: block;">${h.title}</strong>
        <p style="color: #fbbf24; font-size: 0.85rem; margin: 0.4rem 0 0.8rem;"><strong>Symptoms:</strong> ${h.symptoms}</p>
        <strong style="color: #fff; font-size: 0.88rem;">Immediate Actions:</strong>
        <ul style="margin-left: 1.25rem; color: #cbd5e1; font-size: 0.85rem; margin-top: 0.3rem;">
          ${h.actions.map(p=>`<li style="margin-bottom: 4px;">${p}</li>`).join("")}
        </ul>
      `};d("ams"),document.getElementById("btn-fa-ams").addEventListener("click",()=>d("ams")),document.getElementById("btn-fa-cold").addEventListener("click",()=>d("hypothermia")),document.getElementById("btn-fa-heat").addEventListener("click",()=>d("heatstroke"))}updateOfflineLocationUI(){const e=document.getElementById("sos-lat"),t=document.getElementById("sos-lng"),n=document.getElementById("sos-alt"),a=document.getElementById("sos-acc");if(e&&t){const r=this.offlineSos.currentCoords;e.textContent=r.latitude.toFixed(5),t.textContent=r.longitude.toFixed(5),n&&(n.textContent=r.altitude),a&&(a.textContent=r.accuracy)}}updateCountdownUI(e){const t=document.getElementById("cd-days"),n=document.getElementById("cd-hours"),a=document.getElementById("cd-mins"),r=document.getElementById("cd-secs");t&&n&&a&&r&&(t.textContent=String(e.days).padStart(2,"0"),n.textContent=String(e.hours).padStart(2,"0"),a.textContent=String(e.minutes).padStart(2,"0"),r.textContent=String(e.seconds).padStart(2,"0"))}renderWeatherView(e){const t=this.itinerary.currentDestination,n=Fe[t]||Fe.kashmir,a=n.weather;e.innerHTML=`
      <div class="weather-view-grid">
        <div class="weather-current-card">
          <span style="font-size: 0.95rem; font-weight: 600; color: var(--text-muted);">${n.name} Weather</span>
          <div class="weather-icon-big">🌦️</div>
          <div class="weather-temp-huge">${a.temp}°C</div>
          <div class="weather-desc-label">${a.condition}</div>

          <div class="weather-stats-subgrid">
            <div class="substat-item">
              <span class="label">Humidity</span>
              <span class="val">${a.humidity}%</span>
            </div>
            <div class="substat-item">
              <span class="label">Wind</span>
              <span class="val">${a.wind}</span>
            </div>
            <div class="substat-item">
              <span class="label">Feels Like</span>
              <span class="val">${a.feelsLike}°C</span>
            </div>
            <div class="substat-item">
              <span class="label">Rain Chance</span>
              <span class="val">${a.precipitationChance}%</span>
            </div>
          </div>
        </div>

        <div class="weather-advisory-card" style="flex-direction: column;">
          <h4 style="font-size: 1.15rem; color: #38bdf8; margin-bottom: 0.5rem;">5-Day Forecast & Regional Highlights</h4>
          <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%;">
            ${a.forecast.map(r=>`
              <div style="background: rgba(15,23,42,0.6); padding: 0.85rem; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                <strong>${r.day}: ${r.temp}</strong>
                <span style="color: #cbd5e1; font-size: 0.85rem;">${r.note}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="route-overview-card">
          <h4 style="font-size: 1.1rem; color: #fff; margin-bottom: 1rem;">Navigation & Route Radar</h4>
          <button class="btn-primary" id="btn-open-map-weather">Open Interactive Leaflet Map</button>
        </div>
      </div>
    `,document.getElementById("btn-open-map-weather").addEventListener("click",()=>this.switchView("interactive-map"))}renderHotelsRestaurants(e){const t=this.activeHotelTab.includes("stay");e.innerHTML=`
      <div class="category-tabs-bar">
        <button class="cat-tab-btn ${this.activeHotelTab==="budget-stay"?"active":""}" data-cat="budget-stay">Budget Stay</button>
        <button class="cat-tab-btn ${this.activeHotelTab==="luxury-stay"?"active":""}" data-cat="luxury-stay">Luxury Stay</button>
        <button class="cat-tab-btn ${this.activeHotelTab==="budget-food"?"active":""}" data-cat="budget-food">Budget Food</button>
        <button class="cat-tab-btn ${this.activeHotelTab==="luxury-food"?"active":""}" data-cat="luxury-food">Luxury Dining</button>
      </div>

      <div class="cards-grid">
        ${t?Zo.map(n=>`
            <div class="listing-card">
              <div class="listing-img-box">
                <img src="${n.image}" alt="${n.name}" />
                <span class="rating-badge">★ ${n.rating}</span>
              </div>
              <div class="listing-content">
                <h4>${n.name}</h4>
                <p class="desc">${n.desc}</p>
                <div class="listing-footer-row">
                  <div class="price-tag">${this.itinerary.formatCost(n.priceNum)} <span class="unit">${n.unit}</span></div>
                  <button class="btn-secondary btn-reserve-instant" data-name="${n.name}">Reserve</button>
                </div>
              </div>
            </div>
          `).join(""):Jo.map(n=>`
            <div class="listing-card">
              <div class="listing-img-box">
                <img src="${n.image}" alt="${n.name}" />
                <span class="rating-badge">★ ${n.rating}</span>
              </div>
              <div class="listing-content">
                <h4>${n.name}</h4>
                <p class="desc">${n.desc}</p>
                <div class="listing-footer-row">
                  <div class="price-tag">${this.itinerary.formatCost(n.priceNum)} <span class="unit">${n.unit}</span></div>
                  <button class="btn-secondary btn-reserve-instant" data-name="${n.name}">Book Table</button>
                </div>
              </div>
            </div>
          `).join("")}
      </div>
    `,e.querySelectorAll(".cat-tab-btn").forEach(n=>{n.addEventListener("click",()=>{this.activeHotelTab=n.getAttribute("data-cat"),this.renderHotelsRestaurants(e)})}),e.querySelectorAll(".btn-reserve-instant").forEach(n=>{n.addEventListener("click",()=>{bt({particleCount:50,spread:60}),alert(`Booking confirmed for ${n.getAttribute("data-name")}! Added to your trip portfolio.`)})})}renderVoiceAssistantView(e){const t=this.aiEngine.activePersona==="alex";e.innerHTML=`
      <div class="assistant-view-wrapper">
        <div class="persona-switch-bar">
          <div class="persona-options">
            <button class="persona-pill-btn ${t?"active alex":""}" id="btn-select-alex">
              <span>👨‍✈️</span>
              <span>Alex (Male AI Guide)</span>
            </button>
            <button class="persona-pill-btn ${t?"":"active maya"}" id="btn-select-maya">
              <span>👩‍💼</span>
              <span>Maya (Female AI Guide)</span>
            </button>
          </div>

          <div class="lang-btn-group">
            <button class="lang-toggle-btn ${this.aiEngine.currentLanguage==="en"?"active":""}" data-lang="en">English</button>
            <button class="lang-toggle-btn ${this.aiEngine.currentLanguage==="bn"?"active":""}" data-lang="bn">বাংলা</button>
            <button class="lang-toggle-btn ${this.aiEngine.currentLanguage==="hi"?"active":""}" data-lang="hi">हिंदी</button>
          </div>
        </div>

        <div class="voice-stage-box">
          <canvas class="waveform-canvas" id="voice-waveform-canvas"></canvas>
          <button class="central-mic-btn" id="central-mic-btn">🎙️</button>
          <h3 class="voice-prompt-title">Ask Alex or Maya about India's Top Spots</h3>
          <p class="voice-prompt-sub">Ask for Kashmir hour-wise plans, Manali landslides, dress advice, or zero-net SOS!</p>
        </div>

        <div class="suggested-chips-row">
          <button class="suggest-chip" data-prompt="Plan Kashmir trip hour by hour">Plan Kashmir hour by hour</button>
          <button class="suggest-chip" data-prompt="What clothes should I pack for Ladakh?">What clothes to pack for Ladakh?</button>
          <button class="suggest-chip" data-prompt="What is the landslide hazard risk in Manali?">Landslide risk in Manali</button>
          <button class="suggest-chip" data-prompt="How does the offline SOS work without internet?">Offline SOS without internet</button>
        </div>

        <div class="chat-transcript-drawer" id="chat-drawer"></div>

        <form class="chat-input-row" id="chat-input-form">
          <input type="text" class="chat-text-input" id="chat-input-text" placeholder="Type your travel inquiry in English, Hindi, or Bengali..." />
          <button type="submit" class="btn-send">Send ➔</button>
        </form>
      </div>
    `,setTimeout(()=>{this.visualizerInstance&&this.visualizerInstance.destroy(),this.visualizerInstance=new vp("voice-waveform-canvas"),this.aiEngine.visualizer=this.visualizerInstance},100),document.getElementById("btn-select-alex").addEventListener("click",()=>{this.aiEngine.setPersona("alex"),this.renderVoiceAssistantView(e)}),document.getElementById("btn-select-maya").addEventListener("click",()=>{this.aiEngine.setPersona("maya"),this.renderVoiceAssistantView(e)}),e.querySelectorAll(".lang-toggle-btn").forEach(r=>{r.addEventListener("click",()=>{this.aiEngine.setLanguage(r.getAttribute("data-lang")),this.renderVoiceAssistantView(e)})});const n=document.getElementById("central-mic-btn");n.addEventListener("click",()=>{this.aiEngine.isListening?(this.aiEngine.stopListening(),n.classList.remove("active")):(n.classList.add("active"),this.aiEngine.startListening())}),e.querySelectorAll(".suggest-chip").forEach(r=>{r.addEventListener("click",()=>this.aiEngine.processUserInput(r.getAttribute("data-prompt")))}),document.getElementById("chat-input-form").addEventListener("submit",r=>{r.preventDefault();const s=document.getElementById("chat-input-text");s.value.trim()&&(this.aiEngine.processUserInput(s.value.trim()),s.value="")}),this.renderChatMessages()}renderChatMessages(){const e=document.getElementById("chat-drawer");e&&(e.innerHTML=this.aiEngine.messages.map(t=>{const n=t.role==="bot";return`
        <div class="chat-bubble-row ${n?"bot":"user"}">
          <div class="chat-bubble-avatar">${n?t.avatar3d||"🤖":"🧑"}</div>
          <div class="chat-bubble-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
              <strong style="color: ${n?"#38bdf8":"#fff"}; font-size: 0.85rem;">${n?t.personaName||"AI Guide":"You"}</strong>
              <span style="font-size: 0.72rem; color: var(--text-dim);">${t.timestamp}</span>
            </div>
            <div>${t.text.replace(/\n/g,"<br>")}</div>
            ${n?`
              <div style="margin-top: 0.5rem; display: flex; align-items: center; justify-content: flex-end;">
                <button class="bubble-speaker-btn" data-speak-id="${t.id}">🔊 Listen</button>
              </div>
            `:""}
            ${t.action?`
              <button class="btn-secondary" style="margin-top: 0.75rem; padding: 0.4rem 0.8rem; font-size: 0.82rem;" id="act-btn-${t.id}">
                Open In App ➔
              </button>
            `:""}
          </div>
        </div>
      `}).join(""),e.scrollTop=e.scrollHeight,e.querySelectorAll(".bubble-speaker-btn").forEach(t=>{t.addEventListener("click",()=>{const n=this.aiEngine.messages.find(a=>a.id===t.getAttribute("data-speak-id"));n&&this.aiEngine.speakText(n.text,n.sender)})}),this.aiEngine.messages.forEach(t=>{if(t.action){const n=e.querySelector(`#act-btn-${t.id}`);n&&n.addEventListener("click",()=>{this.switchView(t.action.view,{destination:t.action.destination})})}}))}handleSpeechState(e){const t=document.getElementById("central-mic-btn");t&&(e==="listening"?t.classList.add("active"):t.classList.remove("active"))}}document.addEventListener("DOMContentLoaded",()=>{new Tp});
