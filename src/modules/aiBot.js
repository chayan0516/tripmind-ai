// ==========================================================================
// Dual AI Bot Engine: Alex (Male) & Maya (Female) with 12 Indian Destinations,
// Natural Hazard Intelligence & Offline SOS Integration
// ==========================================================================

import { AI_PERSONAS, DESTINATIONS, HOTELS, RESTAURANTS, EMERGENCY_SERVICES } from '../data/mockData.js';

export class TravelAIEngine {
  constructor(options = {}) {
    this.activePersona = 'alex'; // 'alex' | 'maya'
    this.currentLanguage = 'en'; // 'en' | 'bn' | 'hi'
    this.visualizer = options.visualizer || null;
    this.onMessageCallback = options.onMessage || null;
    this.onSpeechStateCallback = options.onSpeechState || null;

    this.synth = window.speechSynthesis || null;
    this.voices = [];
    this.currentUtterance = null;
    this.recognition = null;
    this.isListening = false;

    this.messages = [
      {
        id: 'msg-init',
        sender: 'alex',
        personaName: 'Alex',
        avatar3d: '👨‍✈️',
        role: 'bot',
        text: AI_PERSONAS.alex.greeting,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];

    this.initVoices();
    this.initSpeechRecognition();
  }

  initVoices() {
    if (!this.synth) return;

    const updateVoices = () => {
      this.voices = this.synth.getVoices();
    };

    updateVoices();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = updateVoices;
    }
  }

  initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    this.recognition = new SpeechRecognition();
    this.recognition.continuous = false;
    this.recognition.interimResults = false;

    this.recognition.onstart = () => {
      this.isListening = true;
      if (this.visualizer) this.visualizer.setState('listening');
      if (this.onSpeechStateCallback) this.onSpeechStateCallback('listening');
    };

    this.recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (transcript && transcript.trim()) {
        this.processUserInput(transcript.trim());
      }
    };

    this.recognition.onerror = () => {
      this.isListening = false;
      if (this.visualizer) this.visualizer.setState('idle');
      if (this.onSpeechStateCallback) this.onSpeechStateCallback('idle');
    };

    this.recognition.onend = () => {
      this.isListening = false;
      if (this.visualizer && this.visualizer.state !== 'speaking') {
        this.visualizer.setState('idle');
      }
      if (this.onSpeechStateCallback) this.onSpeechStateCallback('idle');
    };
  }

  startListening() {
    if (!this.recognition) {
      const simulated = [
        "Plan Kashmir 3-day trip hour by hour",
        "What is the landslide hazard risk in Manali?",
        "Suggest dress and clothes to carry for Ladakh",
        "How does the offline SOS siren work without internet?"
      ];
      this.processUserInput(simulated[Math.floor(Math.random() * simulated.length)]);
      return;
    }

    try {
      if (this.currentLanguage === 'bn') this.recognition.lang = 'bn-BD';
      else if (this.currentLanguage === 'hi') this.recognition.lang = 'hi-IN';
      else this.recognition.lang = 'en-US';
      this.recognition.start();
    } catch (err) {
      console.error(err);
    }
  }

  stopListening() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
    }
  }

  setPersona(personaKey) {
    if (AI_PERSONAS[personaKey]) {
      this.activePersona = personaKey;
      const persona = AI_PERSONAS[personaKey];
      let greeting = persona.greeting;
      if (this.currentLanguage === 'bn') greeting = persona.greetingBn;
      if (this.currentLanguage === 'hi') greeting = persona.greetingHi;

      const welcomeMsg = {
        id: 'msg-' + Date.now(),
        sender: persona.id,
        personaName: persona.name,
        avatar3d: persona.avatar3d,
        role: 'bot',
        text: greeting,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      this.messages.push(welcomeMsg);
      if (this.onMessageCallback) this.onMessageCallback(welcomeMsg);
      this.speakText(greeting, personaKey);
    }
  }

  setLanguage(langCode) {
    this.currentLanguage = langCode;
    const persona = AI_PERSONAS[this.activePersona] || AI_PERSONAS.alex;
    let text = persona.greeting;
    if (langCode === 'bn') text = persona.greetingBn;
    if (langCode === 'hi') text = persona.greetingHi;
    this.speakText(text, this.activePersona);
  }

  speakText(text, personaKey = this.activePersona) {
    if (!this.synth) return;
    this.synth.cancel();

    const clean = text
      .replace(/[*_#`[\]()]/g, '')
      .replace(/₹/g, ' rupees ')
      .replace(/★/g, ' stars ')
      .replace(/[\u{1F600}-\u{1F6FF}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}]/gu, '');

    const utterance = new SpeechSynthesisUtterance(clean);
    const persona = AI_PERSONAS[personaKey] || AI_PERSONAS.alex;

    utterance.pitch = persona.voiceConfig.pitch;
    utterance.rate = persona.voiceConfig.rate;

    if (this.voices.length > 0) {
      const targetLang = this.currentLanguage === 'bn' ? 'bn' : this.currentLanguage === 'hi' ? 'hi' : 'en';
      let match = null;
      if (persona.gender === 'female') {
        match = this.voices.find(v => v.lang.startsWith(targetLang) && (v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('zira') || v.name.toLowerCase().includes('samantha')));
      } else {
        match = this.voices.find(v => v.lang.startsWith(targetLang) && (v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('david')));
      }
      if (!match) match = this.voices.find(v => v.lang.startsWith(targetLang)) || this.voices[0];
      if (match) utterance.voice = match;
    }

    utterance.onstart = () => {
      if (this.visualizer) this.visualizer.setState('speaking');
      if (this.onSpeechStateCallback) this.onSpeechStateCallback('speaking');
    };

    utterance.onend = () => {
      if (this.visualizer) this.visualizer.setState('idle');
      if (this.onSpeechStateCallback) this.onSpeechStateCallback('idle');
    };

    utterance.onerror = () => {
      if (this.visualizer) this.visualizer.setState('idle');
      if (this.onSpeechStateCallback) this.onSpeechStateCallback('idle');
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  processUserInput(userInput) {
    const userMsg = {
      id: 'msg-user-' + Date.now(),
      sender: 'user',
      role: 'user',
      text: userInput,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    this.messages.push(userMsg);
    if (this.onMessageCallback) this.onMessageCallback(userMsg);

    setTimeout(() => {
      const reply = this.generateResponse(userInput, this.activePersona);
      const botMsg = {
        id: 'msg-bot-' + Date.now(),
        sender: this.activePersona,
        personaName: AI_PERSONAS[this.activePersona].name,
        avatar3d: AI_PERSONAS[this.activePersona].avatar3d,
        role: 'bot',
        text: reply.text,
        action: reply.action || null,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      this.messages.push(botMsg);
      if (this.onMessageCallback) this.onMessageCallback(botMsg);
      this.speakText(reply.spokenText || reply.text, this.activePersona);
    }, 400);
  }

  generateResponse(query, personaKey) {
    const q = query.toLowerCase();
    const isAlex = personaKey === 'alex';

    // 1. Natural Hazards & Disasters Query
    if (q.includes('hazard') || q.includes('landslide') || q.includes('cyclone') || q.includes('flood') || q.includes('danger') || q.includes('risk') || q.includes('ams')) {
      let destKey = 'manali';
      if (q.includes('ladakh')) destKey = 'ladakh';
      else if (q.includes('digha')) destKey = 'digha';
      else if (q.includes('puri')) destKey = 'puri';
      else if (q.includes('kashmir')) destKey = 'kashmir';
      else if (q.includes('kerala')) destKey = 'kerala';
      else if (q.includes('darjeeling')) destKey = 'darjeeling';

      const d = DESTINATIONS[destKey];
      return {
        text: `⚠️ **Natural Hazard Risk Analysis: ${d.name}**\n\n` +
              `• **Primary Hazard Threat**: ${d.hazard.type}\n` +
              `• **Risk Probability**: **${d.hazard.probability}%** (${d.hazard.level} Threat Level)\n` +
              `• **High-Risk Zones**: ${d.hazard.dangerZones.join(', ')}\n\n` +
              `📋 **Official AI Safety Protocol**:\n${d.hazard.advisory}\n\n` +
              `*You can dispatch an automated hazard alert email directly from the Hazard tab!*`,
        spokenText: `Natural hazard analysis for ${d.name}: Primary risk is ${d.hazard.type} with a ${d.hazard.probability} percent probability. ${d.hazard.advisory}`,
        action: { type: 'switch_view', view: 'hazard', destination: destKey }
      };
    }

    // 2. Dress & Wardrobe Query
    if (q.includes('dress') || q.includes('cloth') || q.includes('wear') || q.includes('pack') || q.includes('shoes') || q.includes('carry')) {
      let destKey = 'ladakh';
      if (q.includes('kashmir')) destKey = 'kashmir';
      else if (q.includes('kerala')) destKey = 'kerala';
      else if (q.includes('varanasi')) destKey = 'varanasi';
      else if (q.includes('ayodhya')) destKey = 'ayodhya';
      else if (q.includes('manali')) destKey = 'manali';
      else if (q.includes('rajasthan')) destKey = 'rajasthan';
      else if (q.includes('digha') || q.includes('puri')) destKey = 'puri';

      const d = DESTINATIONS[destKey];
      const w = d.wardrobe;

      return {
        text: `👗 **AI Wardrobe & Packing Advisor for ${d.name}:**\n\n` +
              `• **Recommended Attire**: ${w.headline}\n` +
              `• **Optimal Fabrics**: ${w.fabrics}\n` +
              `• **Footwear**: ${w.footwear}\n` +
              `• **Sacred / Cultural Etiquette**: ${w.culturalEtiquette}\n\n` +
              `🎒 **Must-Carry Essentials Checklist**:\n` +
              w.mustCarry.map(item => `  ✓ ${item}`).join('\n'),
        spokenText: `For ${d.name}, I recommend ${w.headline}. Make sure to wear ${w.footwear} and adhere to local customs: ${w.culturalEtiquette}`,
        action: { type: 'switch_view', view: 'wardrobe', destination: destKey }
      };
    }

    // 3. Offline SOS without internet
    if (q.includes('offline') || q.includes('no internet') || q.includes('siren') || q.includes('sms')) {
      return {
        text: `📶 **Zero-Internet Smart SOS & Acoustic Siren Protocol**:\n\n` +
              `Even with **0% Internet or Mobile Data OFF**, TravelAI Pro protects you:\n` +
              `1. **Satellite GPS Hardware**: Direct chip-level coordinate locking (Lat, Lng, Altitude).\n` +
              `2. **Cellular Carrier Direct SMS**: Triggers native cellular text to **112** with your exact GPS link.\n` +
              `3. **Acoustic Loud Siren**: Uses browser Web Audio synthesizer to blast an emergency siren to guide local search & rescue teams!\n\n` +
              `*Tap below to open the Offline SOS Command Center.*`,
        spokenText: `Our offline SOS runs with zero internet using hardware satellite GPS, direct cellular SMS to 112, and an ear-piercing emergency acoustic siren.`,
        action: { type: 'switch_view', view: 'offline-sos' }
      };
    }

    // 4. Destination Day & Hour Plan
    const destinationKeys = Object.keys(DESTINATIONS);
    const foundDest = destinationKeys.find(k => q.includes(k));

    if (foundDest || q.includes('plan') || q.includes('itinerary') || q.includes('hour')) {
      const destKey = foundDest || 'kashmir';
      const d = DESTINATIONS[destKey];

      if (isAlex) {
        return {
          text: `🎯 **Tactical Day & Hour-Wise Schedule for ${d.name} Generated!**\n\n` +
                `Engineered around terrain, daylight hours, and weather safety:\n\n` +
                d.days[0].hours.slice(0, 4).map(h => `• **${h.time}**: ${h.title} (${h.cost})`).join('\n') + `\n\n` +
                `*Tap below to explore the complete interactive timeline with Leaflet 3D mapping!*`,
          spokenText: `Tactical plan for ${d.name} ready. Early morning departure, weather-optimized routing, and cultural waypoints mapped hour by hour.`,
          action: { type: 'switch_view', view: 'plan', destination: destKey }
        };
      } else {
        return {
          text: `✨ **Curated Cultural & Sensory Journey: ${d.name}**\n\n` +
                `Experience ${d.tagline} with our hour-by-hour itinerary:\n\n` +
                d.days[0].hours.slice(0, 4).map(h => `🌸 **${h.time}**: ${h.title} — *${h.categoryTag}*`).join('\n') + `\n\n` +
                `*Shall we inspect your interactive map and day planner?*`,
          spokenText: `Here is your cultural itinerary for ${d.name}. Savor authentic local foods, sacred monuments, and stunning golden-hour vistas.`,
          action: { type: 'switch_view', view: 'plan', destination: destKey }
        };
      }
    }

    // Default
    if (isAlex) {
      return {
        text: `Alex here! I can coordinate your **Day & Hour plans for all 12 Indian destinations**, evaluate **Natural Hazard Risks**, test **Zero-Internet Cellular SOS**, or plot routes on our **Interactive Leaflet Map**. What is your objective?`,
        spokenText: `Alex here. Ask me about India's top tourist destinations, landslide and cyclone alerts, or offline emergency tracking.`
      };
    } else {
      return {
        text: `Maya here! Tell me where in India you wish to wander — from Kashmir's floating gardens to Kerala's backwaters and Varanasi's ghats. I'll suggest what to wear, where to eat, and how to stay safe!`,
        spokenText: `Maya here. I can recommend traditional outfits to pack, sacred temple etiquette, or personalized travel plans for all 12 destinations.`
      };
    }
  }
}
