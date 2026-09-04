# TravelAI Bharat™ · अतुल्य भारत (Incredible India)
### Unlimited Free AI Travel Companion with 3D Globe, Offline Satellite SOS & Day-Hour Itineraries

TravelAI Bharat is a high-performance web application designed for exploring India's top 12 tourist destinations with zero API keys or monthly billing, 100% free hosting, authentic Indian cultural authentication (+91 Mobile OTP, Namaste greeting, DigiLocker sign-in), granular day-wise & hour-wise trip planning, dual male & female AI voice bots, real-time natural hazard forecasting with email advisories, and a zero-internet hardware GPS satellite SOS system.

---

## 🇮🇳 Covered Destinations (Top 12 Indian Circuits)
1. **Kashmir (Srinagar & Gulmarg)** — Dal Lake, Floating Markets, Snow Gondolas & Mughal Gardens
2. **Kerala (Alleppey & Kochi)** — Arabian Sea Coast, Houseboats, Spice Plantations & Kathakali
3. **Varanasi (Kashi Vishwanath)** — Ancient Ganga Ghats, Evening Maha Aarti & Sarnath
4. **Ayodhya (Ram Mandir)** — Saryu River Ghats, Kanak Bhavan & Heritage Sacred Circuit
5. **Manali (Solang & Rohtang)** — Snow Peaks, River Rafting, Old Manali & Atal Tunnel
6. **Rajasthan (Jaipur & Thar Desert)** — Hawa Mahal, Amber Fort, Chokhi Dhani & Sand Dunes
7. **Kolkata (City of Joy)** — Victoria Memorial, Howrah Bridge, Dakshineswar & Street Food
8. **Ladakh (Leh & Pangong Tso)** — High Mountain Passes, Monasteries & Magnetic Hill
9. **Gangtok (Sikkim Kanchenjunga)** — Rumtek Monastery, Tsomgo Lake & Himalayan Cable Car
10. **Darjeeling (Queen of the Hills)** — Tiger Hill Sunrise, Himalayan Toy Train & Tea Estates
11. **Digha (Bay of Bengal Beachfront)** — Marine Drive, Casuarina Groves & Coastal Seafood
12. **Puri (Jagannath Temple & Beach)** — Sacred Char Dham Yatra, Golden Beach & Konark Sun Temple

---

## ⚡ Key Features

- **🏛️ Indian-Accent Authentication**:
  - +91 Mobile OTP login with 4-digit auto-advancing input and 1-click test auto-fill (`1234`).
  - Traditional Namaste spoken greeting via Web Speech API.
  - Simulated DigiLocker / Aadhaar govt ID verification.
  - Citizen state selector across 28 Indian States & 8 UTs.
  - "झटपट प्रवेश · Instant Demo Access" 1-click guest login.

- **🕒 Real-Time Digital IST Clock**:
  - Live Indian Standard Time ticker (`IST hh:mm:ss AM/PM · New Delhi (UTC +5:30)`) in topbar.

- **🚨 0% Net Satellite SOS (Zero Internet Needed)**:
  - Hardware GPS chip coordinate locking (Lat, Lng, Altitude, Accuracy) running offline.
  - Direct 1-tap Cellular SMS generator to `112` with Google Maps coordinates.
  - Built-in 130dB Web Audio API acoustic emergency distress siren with visual screen strobe.
  - Offline Tourist Medical Handbook (AMS, Hypothermia, Heatstroke, Snakebites).

- **🗺️ 100% Free & Unlimited Interactive Leaflet Mapping**:
  - OpenStreetMap & CartoDB Dark Matter tiles (zero API keys, $0 forever).
  - Numbered hourly route waypoints with animated polylines and hazard danger overlays.
  - Live GPS device centering and 1-click coordinate sharing.

- **🤖 Dual Voice AI Bot (Alex & Maya)**:
  - Alex: Male AI travel strategist (pitch: 0.82, confident tone).
  - Maya: Female cultural guide (pitch: 1.18, warm melodic tone).
  - Voice recognition (speech-to-text) and speech synthesis in English, Hindi (हिन्दी), and Bengali (বাংলা).
  - Floating bottom-right quick-launcher companion available on all screens.

- **⚠️ Natural Hazard Predictor & Advisory Emailer**:
  - Seasonal risk radar (Monsoon landslides, winter avalanches, summer heatwaves, cyclones).
  - 1-click automated `mailto:` hazard advisory composer to family or tour operators.

- **👗 AI Wardrobe & Luggage Checklist**:
  - Real-time departure countdown clock (Days, Hours, Minutes, Seconds).
  - Destination fabric guide (Khadi, Linen, Woolen, Thermals) and temple dress etiquette.
  - Luggage packing progress bar with custom item adder saved in `localStorage`.

- **💝 Bharat Relief Fund & Donation Box**:
  - Dynamic UPI QR Code for Google Pay, PhonePe, Paytm, BHIM (`bharat.relief@upi`).
  - Instant downloadable 80G tax-exempt digital receipt with celebratory confetti.

---

## 🛠️ Tech Stack & Architecture

- **Build Tool**: [Vite](https://vitejs.dev/)
- **3D Graphics**: [Three.js](https://threejs.org/) (WebGL Earth Globe with flight corridors)
- **Mapping**: [Leaflet.js](https://leafletjs.com/) with OpenStreetMap & CartoDB
- **Offline Audio**: Web Audio API (`AudioContext`, `OscillatorNode`, `GainNode`)
- **Voice AI**: Web Speech API (`SpeechSynthesis`, `webkitSpeechRecognition`)
- **Celebrations**: Canvas Confetti
- **Offline PWA**: Service Worker (`public/sw.js`) & Web App Manifest (`public/manifest.json`)
- **Design System**: High-contrast glassmorphism with Google Fonts (*Outfit* & *Plus Jakarta Sans*)

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open **http://localhost:3000/** in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Free Hosting Options (100% Free Forever)
Since this project does not rely on any proprietary backend or paid API keys, it can be deployed for **$0 / month** on:
- **Vercel**: Push to GitHub and import the repository (Framework Preset: Vite).
- **Netlify**: Drag and drop the `dist/` folder into Netlify Drop.
- **GitHub Pages**: Deploy the `dist/` directory via `gh-pages` or GitHub Actions.
- **Firebase Hosting**: Run `firebase deploy`.
- **Cloudflare Pages**: Connect your Git repo with build command `npm run build` and publish directory `dist`.

---

© 2026 TravelAI Bharat™ · Incredible India (अतुल्य भारत)
