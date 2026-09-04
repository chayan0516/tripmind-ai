// ==========================================================================
// Offline SOS & Smart Cellular Tracking System (Runs with 0% Internet)
// Hardware Satellite GPS + Cellular SMS + Web Audio Acoustic Siren + NDRF Dispatch
// ==========================================================================

export class OfflineSOSManager {
  constructor(options = {}) {
    this.currentCoords = {
      latitude: 27.0410,
      longitude: 88.2663,
      altitude: 2042, // meters
      accuracy: 6,
      heading: 0,
      speed: 0,
      timestamp: Date.now()
    };

    this.isTracking = false;
    this.watchId = null;
    this.audioCtx = null;
    this.sirenOscillator = null;
    this.sirenGain = null;
    this.isSirenPlaying = false;
    this.sirenInterval = null;
    this.isStrobeActive = false;
    this.strobeInterval = null;
    this.activeSosTicket = null;

    this.onLocationUpdate = options.onLocationUpdate || null;
    this.onStrobeChange = options.onStrobeChange || null;

    this.initHardwareGPS();
  }

  initHardwareGPS() {
    if ('geolocation' in navigator) {
      this.watchId = navigator.geolocation.watchPosition(
        (pos) => {
          this.currentCoords = {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
            altitude: pos.coords.altitude || 2042,
            accuracy: Math.round(pos.coords.accuracy),
            heading: pos.coords.heading || 0,
            speed: pos.coords.speed || 0,
            timestamp: pos.timestamp
          };
          try {
            localStorage.setItem('travelai_last_gps', JSON.stringify(this.currentCoords));
          } catch (e) {}

          if (this.onLocationUpdate) this.onLocationUpdate(this.currentCoords);
        },
        (err) => {
          console.warn('Satellite GPS offline warning (using cached lock):', err);
          this.loadCachedCoordinates();
        },
        { enableHighAccuracy: true, maximumAge: 5000, timeout: 10000 }
      );
    } else {
      this.loadCachedCoordinates();
    }
  }

  loadCachedCoordinates() {
    try {
      const saved = localStorage.getItem('travelai_last_gps');
      if (saved) {
        this.currentCoords = JSON.parse(saved);
      }
    } catch (e) {}
  }

  setManualCoordinates(lat, lng, alt = 2000) {
    this.currentCoords = {
      ...this.currentCoords,
      latitude: parseFloat(lat) || this.currentCoords.latitude,
      longitude: parseFloat(lng) || this.currentCoords.longitude,
      altitude: parseFloat(alt) || this.currentCoords.altitude,
      accuracy: 2,
      timestamp: Date.now()
    };
    try {
      localStorage.setItem('travelai_last_gps', JSON.stringify(this.currentCoords));
    } catch (e) {}
    if (this.onLocationUpdate) this.onLocationUpdate(this.currentCoords);
    return this.currentCoords;
  }

  // Detects iOS vs Android for proper SMS URI delimiter
  isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) || 
           (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  }

  isMobile() {
    return /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent) || window.innerWidth < 768;
  }

  getSOSMessageText(customMessage = "") {
    const coords = this.currentCoords;
    const mapsLink = `https://maps.google.com/?q=${coords.latitude.toFixed(5)},${coords.longitude.toFixed(5)}`;
    return (
      `🚨 EMERGENCY SOS ALERT! 🚨\n` +
      `Tourist in distress. Immediate rescue required!\n` +
      `GPS: Lat ${coords.latitude.toFixed(5)}, Lng ${coords.longitude.toFixed(5)}\n` +
      `Altitude: ~${Math.round(coords.altitude)}m (Accuracy: ±${coords.accuracy}m)\n` +
      `Map: ${mapsLink}\n` +
      (customMessage ? `Emergency Note: ${customMessage}\n` : '') +
      `Time: ${new Date().toLocaleTimeString()} IST`
    );
  }

  // Generates Cellular Carrier SMS URL (Requires ZERO Internet Data)
  generateOfflineCellularSMS(targetNumber = "112", customMessage = "") {
    const textBody = encodeURIComponent(this.getSOSMessageText(customMessage));
    // iOS uses &body=, standard/Android uses ?body=
    const separator = this.isIOS() ? '&body=' : '?body=';
    return `sms:${targetNumber}${separator}${textBody}`;
  }

  // Generates WhatsApp Link for when internet is available
  generateWhatsAppSOS(phone = "", customMessage = "") {
    const textBody = encodeURIComponent(this.getSOSMessageText(customMessage));
    return `https://wa.me/${phone ? phone.replace(/[^0-9]/g, '') : ''}?text=${textBody}`;
  }

  // Direct Emergency Dialers (Works on all mobile phones)
  getEmergencyDialUrl(number = "112") {
    return `tel:${number}`;
  }

  // Copy distress payload to clipboard (especially for laptops & desktop computers)
  async copyDistressToClipboard(customMessage = "") {
    const text = this.getSOSMessageText(customMessage);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return text;
    }
    // Fallback
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    return text;
  }

  // Dispatch SOS Distress Beacon to Backend & NDRF Cell
  async broadcastToCloud(travelerName = "Tourist in Distress", phone = "+91 98765 43210", note = "") {
    try {
      const payload = {
        latitude: this.currentCoords.latitude,
        longitude: this.currentCoords.longitude,
        altitude: this.currentCoords.altitude,
        accuracy: this.currentCoords.accuracy,
        travelerName,
        phone,
        note
      };

      const res = await fetch('/api/sos/broadcast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        const data = await res.json();
        this.activeSosTicket = data.ticket;
        return data;
      }
    } catch (e) {
      console.warn('Offline mode: Could not reach backend SOS broadcast endpoint directly:', e);
    }
    // Return offline local ticket if offline
    this.activeSosTicket = `SOS-OFFLINE-${Date.now().toString().slice(-5)}`;
    return {
      success: true,
      ticket: this.activeSosTicket,
      offline: true,
      message: 'Offline emergency lock registered locally on device.'
    };
  }

  // ==========================================================================
  // Web Audio Acoustic Siren (Guaranteed AudioContext.resume() on click)
  // ==========================================================================
  async toggleAcousticSiren() {
    if (this.isSirenPlaying) {
      this.stopAcousticSiren();
      return false;
    } else {
      return await this.startAcousticSiren();
    }
  }

  async startAcousticSiren() {
    try {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (!this.audioCtx) {
        this.audioCtx = new AudioCtxClass();
      }

      // CRITICAL FIX: Ensure AudioContext is actively running (not suspended by browser policy)
      if (this.audioCtx.state === 'suspended') {
        await this.audioCtx.resume();
      }

      this.sirenOscillator = this.audioCtx.createOscillator();
      this.sirenGain = this.audioCtx.createGain();

      this.sirenOscillator.type = 'sawtooth';
      this.sirenOscillator.frequency.setValueAtTime(850, this.audioCtx.currentTime);

      this.sirenGain.gain.setValueAtTime(0.85, this.audioCtx.currentTime);
      this.sirenOscillator.connect(this.sirenGain);
      this.sirenGain.connect(this.audioCtx.destination);

      this.sirenOscillator.start();
      this.isSirenPlaying = true;

      // High-penetration mountain sweep: 850 Hz to 1450 Hz
      let isHigh = false;
      this.sirenInterval = setInterval(() => {
        if (!this.isSirenPlaying || !this.audioCtx) return;
        const targetFreq = isHigh ? 850 : 1450;
        this.sirenOscillator.frequency.exponentialRampToValueAtTime(
          targetFreq, 
          this.audioCtx.currentTime + 0.35
        );
        isHigh = !isHigh;
      }, 400);

      this.startVisualStrobe();
      return true;
    } catch (e) {
      console.error('AudioContext siren failed to initialize:', e);
      return false;
    }
  }

  stopAcousticSiren() {
    if (this.sirenInterval) {
      clearInterval(this.sirenInterval);
      this.sirenInterval = null;
    }
    if (this.sirenOscillator) {
      try {
        this.sirenOscillator.stop();
        this.sirenOscillator.disconnect();
      } catch (e) {}
      this.sirenOscillator = null;
    }
    this.isSirenPlaying = false;
    this.stopVisualStrobe();
  }

  // Visual Emergency Beacon Strobe (High-contrast red/white pulse)
  startVisualStrobe() {
    this.isStrobeActive = true;
    let isRed = false;
    this.strobeInterval = setInterval(() => {
      isRed = !isRed;
      if (this.onStrobeChange) {
        this.onStrobeChange(isRed ? '#ef4444' : '#ffffff');
      }
    }, 250);
  }

  stopVisualStrobe() {
    this.isStrobeActive = false;
    if (this.strobeInterval) {
      clearInterval(this.strobeInterval);
      this.strobeInterval = null;
    }
    if (this.onStrobeChange) {
      this.onStrobeChange(null);
    }
  }

  // Offline First Aid Quick Reference
  getOfflineFirstAidGuide(type = 'ams') {
    const guides = {
      ams: {
        title: "Acute Mountain Sickness (High Altitude)",
        symptoms: "Throbbing headache, nausea, dizziness, insomnia above 8,000 ft (Leh, Manali, Kedarnath).",
        actions: [
          "1. STOP immediate ascent immediately. Do NOT push higher.",
          "2. Descend 1,500 - 3,000 feet if symptoms don't resolve in 12 hours.",
          "3. Administer portable oxygen (2-4 L/min) or Diamox 250mg.",
          "4. Force hydration with warm electrolytes; avoid alcohol and sleeping pills."
        ]
      },
      hypothermia: {
        title: "Cold Exposure & Hypothermia",
        symptoms: "Uncontrollable shivering, slurred speech, clumsy fingers, lethargy in snow or rain.",
        actions: [
          "1. Move out of the wind into tent/shelter immediately.",
          "2. Remove wet clothing; replace with dry thermal fleece and down jacket.",
          "3. Give warm sweet drinks (warm honey water, soup). NO alcohol.",
          "4. Share body warmth in sleeping bag; insulate body from frozen ground."
        ]
      },
      heatstroke: {
        title: "Desert Heatstroke & Dehydration",
        symptoms: "High body temperature (>103°F), rapid pulse, hot dry red skin, confusion in Rajasthan/Varanasi.",
        actions: [
          "1. Move tourist to shade / air-conditioned vehicle immediately.",
          "2. Cool skin with wet cloth/water mist and fan vigorously.",
          "3. Sips of cool salted water or ORS packets.",
          "4. Place ice/cold packs under armpits, groin, and neck."
        ]
      }
    };
    return guides[type] || guides.ams;
  }
}
