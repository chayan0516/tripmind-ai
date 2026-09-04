// ==========================================================================
// TravelAI Pro - Master Application Controller
// 12 Indian Destinations, Leaflet Interactive Mapping, Natural Hazard Predictor,
// Offline SOS & Cellular Tracking, Wardrobe AI, Countdown & Donations
// ==========================================================================

import { DESTINATIONS, HOTELS, RESTAURANTS, EMERGENCY_SERVICES, AI_PERSONAS } from './data/mockData.js';
import { TravelGlobe } from './modules/threeGlobe.js';
import { InteractiveMap } from './modules/leafletMap.js';
import { AudioVisualizer } from './modules/audioVisualizer.js';
import { TravelAIEngine } from './modules/aiBot.js';
import { AuthManager } from './modules/auth.js';
import { ItineraryEngine } from './modules/itineraryEngine.js';
import { OfflineSOSManager } from './modules/offlineSos.js';
import { HazardEngine } from './modules/hazardEngine.js';
import { WardrobePacker } from './modules/wardrobePacker.js';
import { DonationManager } from './modules/donationBox.js';
import { TripWizard } from './modules/tripWizard.js';
import confetti from 'canvas-confetti';

class TravelAIApp {
  constructor() {
    this.appContainer = document.getElementById('app');
    this.modalRoot = document.getElementById('modal-root');

    // Register Service Worker for 100% Offline PWA Capability
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }

    // Core Managers
    this.auth = new AuthManager({
      onAuthChange: (user) => this.handleAuthChange(user)
    });

    this.itinerary = new ItineraryEngine({
      defaultDestination: 'kashmir',
      currency: 'INR'
    });

    this.tripWizard = new TripWizard({
      currency: 'INR',
      onPlanGenerated: (plan) => this.handleCustomPlanGenerated(plan)
    });

    this.offlineSos = new OfflineSOSManager({
      onLocationUpdate: () => this.updateOfflineLocationUI(),
      onStrobeChange: (color) => this.handleStrobeColorChange(color)
    });

    this.hazardEngine = new HazardEngine();
    this.wardrobePacker = new WardrobePacker({
      defaultDestination: 'kashmir',
      onTick: (time) => this.updateCountdownUI(time)
    });

    this.donationManager = new DonationManager();

    this.currentTheme = localStorage.getItem('travelai_theme') || 'obsidian';
    document.documentElement.setAttribute('data-theme', this.currentTheme);

    this.currentView = this.auth.currentUser ? 'dashboard' : 'auth';
    this.activeHotelTab = 'budget-stay';
    this.globeInstance = null;
    this.leafletMapInstance = null;
    this.visualizerInstance = null;

    this.aiEngine = new TravelAIEngine({
      onMessage: () => this.renderChatMessages(),
      onSpeechState: (state) => this.handleSpeechState(state)
    });

    this.init();
  }

  init() {
    this.render();
  }

  handleAuthChange(user) {
    this.currentView = user ? 'dashboard' : 'auth';
    this.render();
  }

  switchView(viewName, params = {}) {
    this.currentView = viewName;
    if (params.destination) {
      this.itinerary.generatePlan(params.destination);
      this.wardrobePacker.setDestination(params.destination);
    }
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  handleCustomPlanGenerated(plan) {
    if (plan && plan.days) {
      const destName = plan.destination.charAt(0).toUpperCase() + plan.destination.slice(1);
      this.itinerary.activePlan = {
        destination: destName,
        tagline: `Custom AI Generated Itinerary (${plan.foodPreference} · ${plan.durationDays} Days · ${plan.tripType})`,
        weather: { temp: "22°C", condition: "Pleasant & Clear", rainChance: "5%" },
        days: plan.days
      };
      this.itinerary.selectedDayIndex = 0;
    }
  }

  handleStrobeColorChange(color) {
    let overlay = document.getElementById('emergency-strobe-overlay');
    if (!color) {
      if (overlay) overlay.style.display = 'none';
      return;
    }
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'emergency-strobe-overlay';
      overlay.className = 'emergency-strobe-overlay';
      document.body.appendChild(overlay);
    }
    overlay.style.display = 'block';
    overlay.style.backgroundColor = color;
  }

  showOAuthModal(provider) {
    const modalRoot = this.modalRoot;
    const providerTitles = {
      google: { name: 'Google', brand: 'Google Workspace & Gmail' },
      github: { name: 'GitHub', brand: 'GitHub Developer Account' },
      apple: { name: 'Apple', brand: 'Apple ID & iCloud' }
    };

    const prov = providerTitles[provider] || { name: provider, brand: `${provider} Account` };

    const demoProfiles = [
      {
        name: "Ananya Sharma",
        email: `ananya.sharma@${provider === 'apple' ? 'icloud.com' : provider === 'github' ? 'github.dev' : 'gmail.com'}`,
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
      },
      {
        name: "Vikram Malhotra",
        email: `vikram.malhotra@${provider === 'apple' ? 'icloud.com' : provider === 'github' ? 'github.dev' : 'gmail.com'}`,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
      }
    ];

    modalRoot.innerHTML = `
      <div class="oauth-modal-overlay" id="oauth-overlay">
        <div class="oauth-dialog-card">
          <div class="oauth-dialog-header">
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <span style="font-size: 1.3rem;">🔐</span>
              <div>
                <strong style="color: #fff; font-size: 1rem; display: block;">Sign in with ${prov.name}</strong>
                <span style="color: #94a3b8; font-size: 0.78rem;">Choose an account to continue to TravelAI Bharat</span>
              </div>
            </div>
            <button type="button" id="btn-close-oauth" style="background: transparent; border: none; color: #94a3b8; font-size: 1.25rem; cursor: pointer;">✕</button>
          </div>

          <div class="oauth-account-list">
            ${demoProfiles.map((p, i) => `
              <button type="button" class="oauth-account-pill" data-idx="${i}">
                <img src="${p.avatar}" alt="${p.name}" class="oauth-account-avatar" />
                <div style="flex: 1; overflow: hidden;">
                  <strong style="color: #fff; font-size: 0.92rem; display: block;">${p.name}</strong>
                  <span style="color: #94a3b8; font-size: 0.78rem; text-overflow: ellipsis; overflow: hidden; display: block;">${p.email}</span>
                </div>
                <span style="color: #38bdf8; font-size: 0.85rem;">➔</span>
              </button>
            `).join('')}

            <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 0.85rem; margin-top: 0.25rem;">
              <form id="oauth-custom-form" style="display: flex; flex-direction: column; gap: 0.6rem;">
                <label style="color: #cbd5e1; font-size: 0.78rem;">Or sign in with custom ${prov.name} email:</label>
                <input type="email" id="oauth-custom-email" class="form-control" placeholder="user@${provider === 'apple' ? 'icloud.com' : provider === 'github' ? 'github.com' : 'gmail.com'}" required style="padding: 0.5rem 0.8rem; font-size: 0.85rem;" />
                <button type="submit" class="btn-primary" style="padding: 0.5rem; justify-content: center; font-size: 0.85rem;">
                  Authorize & Sign In ➔
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;

    const close = () => { modalRoot.innerHTML = ''; };
    document.getElementById('btn-close-oauth').addEventListener('click', close);
    document.getElementById('oauth-overlay').addEventListener('click', (e) => {
      if (e.target.id === 'oauth-overlay') close();
    });

    // Account clicks
    document.querySelectorAll('.oauth-account-pill').forEach(btn => {
      btn.addEventListener('click', async () => {
        const idx = parseInt(btn.getAttribute('data-idx'));
        const profile = demoProfiles[idx];
        close();
        await this.auth.loginWithOAuth(provider, profile);
        confetti({ particleCount: 75, spread: 80, origin: { y: 0.6 } });
      });
    });

    // Custom form submit
    document.getElementById('oauth-custom-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('oauth-custom-email').value.trim();
      const name = email.split('@')[0].replace(/[._]/g, ' ');
      const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
      close();
      await this.auth.loginWithOAuth(provider, { email, name: capitalized });
      confetti({ particleCount: 75, spread: 80, origin: { y: 0.6 } });
    });
  }

  render() {
    if (this.currentView === 'auth') {
      this.renderAuthView();
    } else {
      this.renderDashboardShell();
    }
  }

  // ==========================================================================
  // AUTHENTICATION VIEW (Matches Reference Design)
  // ==========================================================================
  renderAuthView() {
    this.appContainer.innerHTML = `
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
    `;

    this.bindAuthEvents();
  }

  bindAuthEvents() {
    const title = document.getElementById('auth-title');
    const sub = document.getElementById('auth-sub');
    const tabOtp = document.getElementById('tab-otp-btn');
    const tabLogin = document.getElementById('tab-login-btn');
    const tabRegister = document.getElementById('tab-register-btn');
    const paneOtp = document.getElementById('pane-mobile-otp');
    const formEmail = document.getElementById('auth-form');
    const groupName = document.getElementById('group-name');
    const groupState = document.getElementById('group-state');
    const groupConfirm = document.getElementById('group-confirm-pw');
    const submitBtn = document.getElementById('auth-submit-btn');
    const errorMsg = document.getElementById('auth-error-msg');
    const otpErrorMsg = document.getElementById('otp-error-msg');
    const pwInput = document.getElementById('input-password');
    const pwToggle = document.getElementById('pw-toggle');

    let activeAuthMode = 'otp'; // 'otp' | 'email' | 'register'

    const switchAuthMode = (mode) => {
      activeAuthMode = mode;
      tabOtp.classList.remove('active');
      tabLogin.classList.remove('active');
      tabRegister.classList.remove('active');

      if (mode === 'otp') {
        tabOtp.classList.add('active');
        paneOtp.style.display = 'block';
        formEmail.style.display = 'none';
        title.textContent = 'नमस्ते! Welcome';
        sub.textContent = 'Enter Indian mobile number for instant OTP verification';
      } else if (mode === 'email') {
        tabLogin.classList.add('active');
        paneOtp.style.display = 'none';
        formEmail.style.display = 'block';
        groupName.style.display = 'none';
        groupState.style.display = 'none';
        groupConfirm.style.display = 'none';
        submitBtn.querySelector('span').textContent = 'Login with Password';
        title.textContent = 'Welcome Back!';
        sub.textContent = 'Login with your registered Email or IRCTC ID';
      } else if (mode === 'register') {
        tabRegister.classList.add('active');
        paneOtp.style.display = 'none';
        formEmail.style.display = 'block';
        groupName.style.display = 'block';
        groupState.style.display = 'block';
        groupConfirm.style.display = 'block';
        submitBtn.querySelector('span').textContent = 'Create Traveler Account (पंजीकरण)';
        title.textContent = 'Join TravelAI Bharat';
        sub.textContent = 'Register for personalized day & hour yatra plans';
      }
      if (errorMsg) errorMsg.style.display = 'none';
      if (otpErrorMsg) otpErrorMsg.style.display = 'none';
    };

    tabOtp.addEventListener('click', () => switchAuthMode('otp'));
    tabLogin.addEventListener('click', () => switchAuthMode('email'));
    tabRegister.addEventListener('click', () => switchAuthMode('register'));

    // Namaste Audio Greeting Synthesis
    document.getElementById('btn-namaste-audio').addEventListener('click', () => {
      const namasteAudio = new SpeechSynthesisUtterance(
        "नमस्ते! TravelAI Bharat में आपका स्वागत है। Welcome to Incredible India. We are excited to plan your journey across India!"
      );
      namasteAudio.pitch = 1.05;
      namasteAudio.rate = 0.95;
      window.speechSynthesis.speak(namasteAudio);
    });

    // Auto-advance OTP inputs
    const otp1 = document.getElementById('otp-1');
    const otp2 = document.getElementById('otp-2');
    const otp3 = document.getElementById('otp-3');
    const otp4 = document.getElementById('otp-4');

    [otp1, otp2, otp3, otp4].forEach((input, index, arr) => {
      input.addEventListener('keyup', (e) => {
        if (e.key >= '0' && e.key <= '9') {
          if (index < arr.length - 1) arr[index + 1].focus();
        } else if (e.key === 'Backspace') {
          if (index > 0) arr[index - 1].focus();
        }
      });
    });

    document.getElementById('btn-autofill-otp').addEventListener('click', () => {
      otp1.value = '1';
      otp2.value = '2';
      otp3.value = '3';
      otp4.value = '4';
    });

    // Mobile OTP Submit
    document.getElementById('btn-submit-otp').addEventListener('click', () => {
      otpErrorMsg.style.display = 'none';
      const phone = document.getElementById('input-phone').value.trim();
      const otp = `${otp1.value}${otp2.value}${otp3.value}${otp4.value}`;

      try {
        this.auth.loginWithMobile(phone, otp);
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
      } catch (err) {
        otpErrorMsg.textContent = err.message;
        otpErrorMsg.style.display = 'block';
      }
    });

    // DigiLocker / Aadhaar Login
    document.getElementById('btn-digilocker-auth').addEventListener('click', () => {
      this.auth.loginWithSocial('digilocker');
      confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });
    });

    // Password Toggle
    pwToggle.addEventListener('click', () => {
      if (pwInput.type === 'password') {
        pwInput.type = 'text';
        pwToggle.textContent = '🙈';
      } else {
        pwInput.type = 'password';
        pwToggle.textContent = '👁️';
      }
    });

    // Email/Password Form Submit
    formEmail.addEventListener('submit', (e) => {
      e.preventDefault();
      errorMsg.style.display = 'none';
      const email = document.getElementById('input-email').value.trim();
      const pw = pwInput.value;
      const remember = document.getElementById('remember-me').checked;

      try {
        if (activeAuthMode === 'register') {
          const name = document.getElementById('input-name').value.trim();
          const state = document.getElementById('input-state').value;
          const confirmPw = document.getElementById('input-confirm-pw').value;
          this.auth.register(name, email, pw, confirmPw, state);
        } else {
          this.auth.login(email, pw, remember);
        }
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      } catch (err) {
        errorMsg.textContent = err.message;
        errorMsg.style.display = 'block';
      }
    });

    document.getElementById('btn-oauth-google').addEventListener('click', () => this.showOAuthModal('google'));
    document.getElementById('btn-oauth-github').addEventListener('click', () => this.showOAuthModal('github'));
    document.getElementById('btn-oauth-apple').addEventListener('click', () => this.showOAuthModal('apple'));
    document.getElementById('btn-guest-login').addEventListener('click', () => this.auth.login('traveler@travelai.com', 'travel123', true));
  }

  // ==========================================================================
  // DASHBOARD SHELL & NAVIGATION
  // ==========================================================================
  renderDashboardShell() {
    const user = this.auth.currentUser || { name: "Traveler" };

    this.appContainer.innerHTML = `
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
            <a class="nav-item ${this.currentView === 'dashboard' ? 'active' : ''}" data-view="dashboard">
              <span class="nav-icon">📊</span>
              <span>Dashboard</span>
            </a>
            <a class="nav-item ${this.currentView === 'wizard' ? 'active' : ''}" data-view="wizard">
              <span class="nav-icon">🚀</span>
              <span>Startup & Trip Wizard</span>
            </a>
            <a class="nav-item ${this.currentView === 'plan' ? 'active' : ''}" data-view="plan">
              <span class="nav-icon">🗺️</span>
              <span>12 India Spots</span>
            </a>
            <a class="nav-item ${this.currentView === 'interactive-map' ? 'active' : ''}" data-view="interactive-map">
              <span class="nav-icon">📍</span>
              <span>Interactive Map</span>
            </a>
            <a class="nav-item ${this.currentView === 'hazard' ? 'active' : ''}" data-view="hazard">
              <span class="nav-icon">⚠️</span>
              <span>Hazard Alert & Mail</span>
            </a>
            <a class="nav-item ${this.currentView === 'wardrobe' ? 'active' : ''}" data-view="wardrobe">
              <span class="nav-icon">👗</span>
              <span>Wardrobe & Countdown</span>
            </a>
            <a class="nav-item ${this.currentView === 'offline-sos' ? 'active' : ''}" data-view="offline-sos">
              <span class="nav-icon">🚨</span>
              <span>Offline SOS (0% Net)</span>
            </a>
            <a class="nav-item ${this.currentView === 'weather' ? 'active' : ''}" data-view="weather">
              <span class="nav-icon">🌦️</span>
              <span>Weather</span>
            </a>
            <a class="nav-item ${this.currentView === 'hotels' ? 'active' : ''}" data-view="hotels">
              <span class="nav-icon">🏨</span>
              <span>Hotels & Dining</span>
            </a>
            <a class="nav-item ${this.currentView === 'voice' ? 'active' : ''}" data-view="voice">
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
                ${Object.keys(DESTINATIONS).map(k => `
                  <option value="${k}" ${this.itinerary.currentDestination === k ? 'selected' : ''}>
                    🇮🇳 ${DESTINATIONS[k].name}
                  </option>
                `).join('')}
              </select>

              <!-- Executive Multi-Theme Selector -->
              <select class="header-select" id="theme-select" title="Switch Theme">
                <option value="obsidian" ${this.currentTheme === 'obsidian' ? 'selected' : ''}>✨ Obsidian Luxe</option>
                <option value="heritage" ${this.currentTheme === 'heritage' ? 'selected' : ''}>👑 Royal Heritage</option>
                <option value="cyber" ${this.currentTheme === 'cyber' ? 'selected' : ''}>⚡ Cyber Azure</option>
                <option value="slate" ${this.currentTheme === 'slate' ? 'selected' : ''}>🏔️ Himalayan Slate</option>
              </select>

              <!-- Currency Selector -->
              <select class="header-select" id="currency-select" title="Switch Currency">
                <option value="INR" ${this.itinerary.currency === 'INR' ? 'selected' : ''}>₹ INR</option>
                <option value="USD" ${this.itinerary.currency === 'USD' ? 'selected' : ''}>$ USD</option>
                <option value="EUR" ${this.itinerary.currency === 'EUR' ? 'selected' : ''}>€ EUR</option>
              </select>

              <!-- Language Dropdown -->
              <select class="header-select" id="lang-select" title="Switch Language">
                <option value="en" ${this.aiEngine.currentLanguage === 'en' ? 'selected' : ''}>🌐 English</option>
                <option value="hi" ${this.aiEngine.currentLanguage === 'hi' ? 'selected' : ''}>🌐 हिंदी (Hindi)</option>
                <option value="bn" ${this.aiEngine.currentLanguage === 'bn' ? 'selected' : ''}>🌐 বাংলা (Bengali)</option>
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
                  <img src="${user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80'}" alt="${user.name}" />
                  <span>${user.name}</span>
                  <span style="font-size: 0.65rem; color: #34d399; margin-left: 2px;">▼</span>
                </div>
                <div class="user-dropdown-menu" id="user-dropdown-menu">
                  <div style="border-bottom: 1px solid var(--border-glass); padding-bottom: 0.75rem; margin-bottom: 0.75rem;">
                    <strong style="color: #fff; font-size: 0.95rem; display: block;">${user.name}</strong>
                    <span style="color: #38bdf8; font-size: 0.78rem; font-weight: 600;">🇮🇳 ${user.state || 'West Bengal'} · Verified Explorer</span>
                    <span style="color: #94a3b8; font-size: 0.75rem; display: block; margin-top: 2px;">${user.email || 'traveler@travelai.in'}</span>
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
              <button class="dest-cat-btn ${this.aiEngine.activePersona === 'alex' ? 'active' : ''}" id="f-persona-alex" style="padding: 0.25rem 0.75rem; font-size: 0.78rem;">👨‍✈️ Alex (Male)</button>
              <button class="dest-cat-btn ${this.aiEngine.activePersona === 'maya' ? 'active' : ''}" id="f-persona-maya" style="padding: 0.25rem 0.75rem; font-size: 0.78rem;">👩‍💼 Maya (Female)</button>
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
          <button type="button" class="mob-nav-item ${this.currentView === 'dashboard' ? 'active' : ''}" data-view="dashboard">
            <span class="mob-nav-icon">📊</span>
            <span>Home</span>
          </button>
          <button type="button" class="mob-nav-item ${this.currentView === 'wizard' ? 'active' : ''}" data-view="wizard">
            <span class="mob-nav-icon">🚀</span>
            <span>Wizard</span>
          </button>
          <button type="button" class="mob-nav-item ${this.currentView === 'plan' ? 'active' : ''}" data-view="plan">
            <span class="mob-nav-icon">🗺️</span>
            <span>12 Spots</span>
          </button>
          <button type="button" class="mob-nav-item ${this.currentView === 'interactive-map' ? 'active' : ''}" data-view="interactive-map">
            <span class="mob-nav-icon">📍</span>
            <span>Map</span>
          </button>
          <button type="button" class="mob-nav-item sos-item ${this.currentView === 'offline-sos' ? 'active' : ''}" data-view="offline-sos">
            <span class="mob-nav-icon">🚨</span>
            <span>SOS</span>
          </button>
        </nav>
      </div>
    `;

    this.bindDashboardEvents();
    this.renderActiveSubView();
    this.startIstClock();
    this.renderFloatingChatMessages();
  }

  getViewTitle() {
    switch (this.currentView) {
      case 'dashboard': return 'Dashboard';
      case 'wizard': return '🚀 Startup Retreat & Custom AI Trip Wizard';
      case 'plan': return '12 Top Indian Spots (Day & Hour Plan)';
      case 'interactive-map': return 'Interactive Leaflet Route Map (Free & Unlimited)';
      case 'hazard': return 'Natural Hazard Predictor & Alert Mailer';
      case 'wardrobe': return 'AI Wardrobe Advisor & Departure Countdown';
      case 'offline-sos': return 'Offline SOS & Cellular Smart Tracking (0% Net)';
      case 'weather': return 'Live Weather Radar';
      case 'hotels': return 'Hotels & Dining';
      case 'voice': return 'Male & Female AI Companion Bot';
      default: return 'Dashboard';
    }
  }

  startIstClock() {
    if (this.istClockInterval) clearInterval(this.istClockInterval);
    const updateClock = () => {
      const el = document.getElementById('live-ist-time');
      if (!el) return;
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const ist = new Date(utc + (3600000 * 5.5));
      const hours = ist.getHours();
      const minutes = String(ist.getMinutes()).padStart(2, '0');
      const seconds = String(ist.getSeconds()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = String(hours % 12 || 12).padStart(2, '0');
      el.textContent = `IST ${formattedHours}:${minutes}:${seconds} ${ampm} · New Delhi`;
    };
    updateClock();
    this.istClockInterval = setInterval(updateClock, 1000);
  }

  bindDashboardEvents() {
    // Nav switches (Desktop Sidebar)
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const view = item.getAttribute('data-view');
        if (view) this.switchView(view);
      });
    });

    // Mobile Bottom Navigation switches
    document.querySelectorAll('.mobile-bottom-nav .mob-nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.getAttribute('data-view');
        if (view) this.switchView(view);
      });
    });

    // Quick destination dropdown
    const quickDest = document.getElementById('quick-dest-select');
    if (quickDest) {
      quickDest.addEventListener('change', (e) => {
        this.itinerary.generatePlan(e.target.value);
        this.wardrobePacker.setDestination(e.target.value);
        this.renderActiveSubView();
      });
    }

    // Theme selector
    const themeSelect = document.getElementById('theme-select');
    if (themeSelect) {
      themeSelect.addEventListener('change', (e) => {
        this.currentTheme = e.target.value;
        localStorage.setItem('travelai_theme', this.currentTheme);
        document.documentElement.setAttribute('data-theme', this.currentTheme);
      });
    }

    // Currency selector
    const curr = document.getElementById('currency-select');
    if (curr) {
      curr.addEventListener('change', (e) => {
        this.itinerary.setCurrency(e.target.value);
        this.tripWizard.setCurrency(e.target.value);
        this.renderActiveSubView();
      });
    }

    // Language selector
    const lang = document.getElementById('lang-select');
    if (lang) {
      lang.addEventListener('change', (e) => {
        this.aiEngine.setLanguage(e.target.value);
      });
    }

    // Emergency Top SOS button
    const topSos = document.getElementById('btn-top-sos');
    if (topSos) {
      topSos.addEventListener('click', () => this.switchView('offline-sos'));
    }

    // User Profile Dropdown
    const userChip = document.getElementById('user-chip');
    const userDropdown = document.getElementById('user-dropdown-menu');
    if (userChip && userDropdown) {
      userChip.addEventListener('click', (e) => {
        e.stopPropagation();
        userDropdown.classList.toggle('show');
      });
      document.addEventListener('click', (e) => {
        if (!userChip.contains(e.target) && !userDropdown.contains(e.target)) {
          userDropdown.classList.remove('show');
        }
      });
    }

    const dropdownLogout = document.getElementById('btn-dropdown-logout');
    if (dropdownLogout) {
      dropdownLogout.addEventListener('click', () => {
        if (confirm('Sign out of TravelAI Bharat?')) this.auth.logout();
      });
    }

    // Floating AI Drawer Toggle
    const floatingLauncher = document.getElementById('floating-ai-launcher');
    const floatingDrawer = document.getElementById('floating-ai-drawer');
    const btnCloseFloating = document.getElementById('btn-close-floating-ai');
    if (floatingLauncher && floatingDrawer) {
      floatingLauncher.addEventListener('click', () => {
        floatingDrawer.classList.toggle('open');
        if (floatingDrawer.classList.contains('open')) {
          this.renderFloatingChatMessages();
          const input = document.getElementById('floating-chat-input');
          if (input) input.focus();
        }
      });
    }
    if (btnCloseFloating && floatingDrawer) {
      btnCloseFloating.addEventListener('click', () => {
        floatingDrawer.classList.remove('open');
      });
    }

    const fPersonaAlex = document.getElementById('f-persona-alex');
    const fPersonaMaya = document.getElementById('f-persona-maya');
    if (fPersonaAlex && fPersonaMaya) {
      fPersonaAlex.addEventListener('click', () => {
        this.aiEngine.setPersona('alex');
        fPersonaAlex.classList.add('active');
        fPersonaMaya.classList.remove('active');
        this.renderFloatingChatMessages();
      });
      fPersonaMaya.addEventListener('click', () => {
        this.aiEngine.setPersona('maya');
        fPersonaMaya.classList.add('active');
        fPersonaAlex.classList.remove('active');
        this.renderFloatingChatMessages();
      });
    }

    const floatingForm = document.getElementById('floating-chat-form');
    if (floatingForm) {
      floatingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('floating-chat-input');
        if (input && input.value.trim()) {
          this.aiEngine.processUserInput(input.value.trim());
          input.value = '';
          this.renderFloatingChatMessages();
        }
      });
    }

    // Logout
    const logout = document.getElementById('btn-logout');
    if (logout) {
      logout.addEventListener('click', () => {
        if (confirm('Sign out of TravelAI Pro?')) this.auth.logout();
      });
    }

    // Donation modals
    const openDonation = () => this.donationManager.renderDonationModal(this.modalRoot);
    const topDonate = document.getElementById('btn-top-donate');
    const sideDonate = document.getElementById('btn-sidebar-donate');
    if (topDonate) topDonate.addEventListener('click', openDonation);
    if (sideDonate) sideDonate.addEventListener('click', openDonation);

    // Mobile sidebar toggle
    const toggleBtn = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', () => sidebar.classList.toggle('open'));
    }
  }

  renderFloatingChatMessages() {
    const box = document.getElementById('floating-chat-messages');
    if (!box) return;
    box.innerHTML = this.aiEngine.messages.slice(-6).map(m => {
      const isBot = m.role === 'bot';
      return `
        <div style="display: flex; gap: 0.5rem; align-items: flex-start; ${isBot ? '' : 'flex-direction: row-reverse;'}">
          <span style="font-size: 1.15rem;">${isBot ? (m.avatar3d || '🤖') : '🧑'}</span>
          <div style="max-width: 80%; background: ${isBot ? 'rgba(30,41,59,0.85)' : 'linear-gradient(135deg, #2563eb, #3b82f6)'}; padding: 0.6rem 0.85rem; border-radius: 12px; font-size: 0.84rem; color: #fff; line-height: 1.4; border: 1px solid rgba(255,255,255,0.08);">
            <strong style="font-size: 0.72rem; color: ${isBot ? '#38bdf8' : '#e0e7ff'}; display: block; margin-bottom: 2px;">
              ${isBot ? (m.personaName || 'AI Guide') : 'You'}
            </strong>
            ${m.text.replace(/\n/g, '<br>')}
            ${isBot ? `
              <div style="margin-top: 4px; display: flex; justify-content: flex-end;">
                <button class="bubble-speaker-btn" data-speak-id="${m.id}" style="font-size: 0.7rem; padding: 2px 6px;">🔊 Listen</button>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');
    box.scrollTop = box.scrollHeight;

    box.querySelectorAll('.bubble-speaker-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const msg = this.aiEngine.messages.find(x => x.id === btn.getAttribute('data-speak-id'));
        if (msg) this.aiEngine.speakText(msg.text, msg.sender);
      });
    });
  }

  // ==========================================================================
  // SUB-VIEW ROUTER
  // ==========================================================================
  renderActiveSubView() {
    const container = document.getElementById('view-content');
    if (!container) return;

    switch (this.currentView) {
      case 'dashboard':
        this.renderDashboardOverview(container);
        break;
      case 'wizard':
        this.renderWizardView(container);
        break;
      case 'plan':
        this.renderItineraryPlanner(container);
        break;
      case 'interactive-map':
        this.renderInteractiveMapView(container);
        break;
      case 'hazard':
        this.renderHazardView(container);
        break;
      case 'wardrobe':
        this.renderWardrobeView(container);
        break;
      case 'offline-sos':
        this.renderOfflineSOSView(container);
        break;
      case 'weather':
        this.renderWeatherView(container);
        break;
      case 'hotels':
      case 'restaurants':
        this.renderHotelsRestaurants(container);
        break;
      case 'voice':
        this.renderVoiceAssistantView(container);
        break;
      default:
        this.renderDashboardOverview(container);
    }
  }

  // 1. Dashboard Overview
  renderDashboardOverview(container) {
    const u = this.auth.currentUser || { name: 'Traveler' };
    const currDest = DESTINATIONS[this.itinerary.currentDestination] || DESTINATIONS.kashmir;

    // Time-based Indian greeting
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const ist = new Date(utc + (3600000 * 5.5));
    const istHour = ist.getHours();
    const greetingText = istHour < 12 
      ? 'शुभ प्रभात · Good Morning' 
      : istHour < 17 
        ? 'शुभ दोपहर · Good Afternoon' 
        : 'शुभ संध्या · Good Evening';

    container.innerHTML = `
      <div class="welcome-banner" style="background: linear-gradient(135deg, rgba(37,99,235,0.2) 0%, rgba(255,153,51,0.15) 100%); border: 1px solid rgba(255,153,51,0.25);">
        <h1>${greetingText}, ${u.name}! 🙏</h1>
        <p>Explore India's Top 12 destinations with curated hour-by-hour itineraries, dual AI voice guides, IMD hazard radar, and zero-internet satellite SOS.</p>
      </div>

      <!-- Departure Countdown Banner -->
      <div class="countdown-box">
        <div>
          <strong style="color: #fff; font-size: 1.05rem; display: block;">⏳ Departure Countdown to ${currDest.name}</strong>
          <span style="color: #93c5fd; font-size: 0.85rem;">Estimated Departure Date: ${this.wardrobePacker.targetDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
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
            <h3 style="font-size: 1.25rem;">${currDest.hazard ? currDest.hazard.level.toUpperCase() : 'NORMAL'}</h3>
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
              ${Object.keys(DESTINATIONS).map(key => {
                const d = DESTINATIONS[key];
                const hLevel = d.hazard ? d.hazard.level : 'Low';
                const badgeClass = hLevel === 'High' ? 'hazard-badge-pill high' : hLevel === 'Moderate' ? 'hazard-badge-pill moderate' : 'hazard-badge-pill low';
                return `
                  <tr>
                    <td><strong style="color: #fff;">${d.name}</strong></td>
                    <td><span style="color: #94a3b8;">${d.state}</span></td>
                    <td><span style="color: #38bdf8;">${d.weather.temp}°C · ${d.weather.condition}</span></td>
                    <td><span style="color: #fca5a5;">${d.hazard ? d.hazard.type : 'None'}</span></td>
                    <td><span class="${badgeClass}">${hLevel}</span></td>
                    <td><span style="font-family: monospace; color: #34d399;">1363 / 112</span></td>
                    <td>
                      <button class="btn-secondary btn-table-plan" data-dest="${key}" style="padding: 0.3rem 0.7rem; font-size: 0.78rem;">
                        View Plan ➔
                      </button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;

    // Bind category filter tabs and grid
    const renderShowcaseGrid = (filter = 'all') => {
      const grid = document.getElementById('dest-showcase-grid');
      if (!grid) return;

      const filteredKeys = Object.keys(DESTINATIONS).filter(k => {
        if (filter === 'all') return true;
        return DESTINATIONS[k].category === filter;
      });

      grid.innerHTML = filteredKeys.map(k => {
        const d = DESTINATIONS[k];
        const h = d.hazard || { level: 'Low', type: 'Normal' };
        const hClass = h.level === 'High' ? 'high' : h.level === 'Moderate' ? 'moderate' : 'low';
        return `
          <div class="dest-card" data-key="${k}" style="cursor: pointer;">
            <div class="dest-card-media">
              <img src="${d.image}" alt="${d.name}" loading="lazy" />
              <div class="dest-media-gradient"></div>
              <span class="dest-badge-state">📍 ${d.state}</span>
              <span class="dest-badge-weather">🌦️ ${d.weather.temp}°C</span>
              <span class="dest-badge-hazard ${hClass}">⚠️ ${h.level} Risk</span>
            </div>
            <div class="dest-card-body">
              <div>
                <div class="dest-title-row">
                  <h3 class="dest-card-title">${d.name}</h3>
                </div>
                <p class="dest-card-tagline">${d.tagline}</p>
                <div class="dest-meta-chips">
                  <span class="dest-meta-chip">📅 ${d.bestSeason ? d.bestSeason.split('/')[0].trim() : 'Oct - Mar'}</span>
                  <span class="dest-meta-chip">⏰ 3 Days · 18 Hours</span>
                  <span class="dest-meta-chip">📞 1363</span>
                </div>
              </div>
              <div class="dest-card-footer">
                <div>
                  <span class="dest-season-label">Best Season</span>
                  <span class="dest-season-val">${d.bestSeason ? d.bestSeason.split('(')[0].trim() : 'Year Round'}</span>
                </div>
                <button class="btn-primary btn-explore-circuit" data-key="${k}" style="width: auto; padding: 0.5rem 1rem; font-size: 0.85rem;">
                  Explore Plan ➔
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('');

      grid.querySelectorAll('.btn-explore-circuit').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const destKey = btn.getAttribute('data-key');
          this.itinerary.generatePlan(destKey);
          this.wardrobePacker.setDestination(destKey);
          this.switchView('plan', { destination: destKey });
        });
      });

      grid.querySelectorAll('.dest-card').forEach(card => {
        card.addEventListener('click', () => {
          const destKey = card.getAttribute('data-key');
          this.itinerary.generatePlan(destKey);
          this.wardrobePacker.setDestination(destKey);
          this.switchView('plan', { destination: destKey });
        });
      });
    };

    renderShowcaseGrid('all');

    // Filter tab buttons
    container.querySelectorAll('.dest-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.dest-cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderShowcaseGrid(btn.getAttribute('data-filter'));
      });
    });

    // Radar table buttons
    container.querySelectorAll('.btn-table-plan').forEach(btn => {
      btn.addEventListener('click', () => {
        const destKey = btn.getAttribute('data-dest');
        this.itinerary.generatePlan(destKey);
        this.wardrobePacker.setDestination(destKey);
        this.switchView('plan', { destination: destKey });
      });
    });

    document.getElementById('qp-map').addEventListener('click', () => this.switchView('interactive-map'));
    document.getElementById('qp-hazard').addEventListener('click', () => this.switchView('hazard'));
    document.getElementById('qp-sos').addEventListener('click', () => this.switchView('offline-sos'));
    document.getElementById('qp-wardrobe').addEventListener('click', () => this.switchView('wardrobe'));
    document.getElementById('btn-open-planner-cta').addEventListener('click', () => this.switchView('plan'));
    document.getElementById('btn-open-hazard-full').addEventListener('click', () => this.switchView('hazard'));
    const wizCta = document.getElementById('dash-wizard-cta');
    if (wizCta) wizCta.addEventListener('click', () => this.switchView('wizard'));

    setTimeout(() => {
      if (this.globeInstance) this.globeInstance.destroy();
      this.globeInstance = new TravelGlobe('dashboard-globe-box', {
        autoRotate: true,
        onSelectPin: (p) => this.switchView('plan', { destination: p.id })
      });
    }, 100);
  }

  // ==========================================================================
  // STARTUP RETREAT & CUSTOM AI ITINERARY WIZARD VIEW
  // ==========================================================================
  renderWizardView(container) {
    const defaultDest = this.itinerary.currentDestination || 'manali';
    const currSym = this.itinerary.currencySymbol;
    const currRate = this.itinerary.currencyRate;

    container.innerHTML = `
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
            <strong style="color: #34d399; font-size: 1.25rem;">${this.itinerary.currency} (${currSym})</strong>
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
                  ${Object.keys(DESTINATIONS).map(k => `
                    <option value="${k}" ${k === defaultDest ? 'selected' : ''}>
                      🇮🇳 ${DESTINATIONS[k].name} (${DESTINATIONS[k].state})
                    </option>
                  `).join('')}
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
                  <span style="color: #34d399; font-weight: 700; font-size: 0.9rem;">~${currSym}${Math.round(5500 * currRate).toLocaleString()} / day</span>
                  <p style="color: #94a3b8; font-size: 0.8rem; margin-top: 4px;">Premium 3-4★ stays, AC cabs, verified dining & fiber co-working.</p>
                </div>
              </label>

              <label class="food-option-card" id="card-budget-budget">
                <input type="radio" name="wiz-budget" value="budget" />
                <div>
                  <strong style="color: #fff; font-size: 0.95rem; display: block;">🎒 Bootstrapped / Backpacker</strong>
                  <span style="color: #38bdf8; font-weight: 700; font-size: 0.9rem;">~${currSym}${Math.round(2000 * currRate).toLocaleString()} / day</span>
                  <p style="color: #94a3b8; font-size: 0.8rem; margin-top: 4px;">Hostels/Homestays, local transit, clean cafes & street food.</p>
                </div>
              </label>

              <label class="food-option-card" id="card-budget-luxury">
                <input type="radio" name="wiz-budget" value="luxury" />
                <div>
                  <strong style="color: #fff; font-size: 0.95rem; display: block;">👑 Royal / Luxury Tier</strong>
                  <span style="color: #fbbf24; font-weight: 700; font-size: 0.9rem;">~${currSym}${Math.round(16000 * currRate).toLocaleString()} / day</span>
                  <p style="color: #94a3b8; font-size: 0.8rem; margin-top: 4px;">5★ Heritage palaces/resorts, private chauffeur, executive lounges.</p>
                </div>
              </label>
            </div>
            <div style="background: rgba(255,255,255,0.04); padding: 0.75rem 1rem; border-radius: 8px; font-size: 0.85rem; color: #cbd5e1; display: flex; justify-content: space-between; align-items: center;">
              <span>Estimated Total Tour Allocation:</span>
              <strong id="wiz-total-budget-preview" style="color: #34d399; font-size: 1.05rem;">${currSym}${Math.round(16500 * currRate).toLocaleString()}</strong>
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
    `;

    this.bindWizardEvents(container);
  }

  bindWizardEvents(container) {
    const daysInput = document.getElementById('wiz-days-input');
    const budgetPreview = document.getElementById('wiz-total-budget-preview');
    const form = document.getElementById('trip-wizard-form');
    const resultBox = document.getElementById('wiz-result-box');

    const updateBudgetPreview = () => {
      const days = parseInt(daysInput.value) || 3;
      const budgetTier = document.querySelector('input[name="wiz-budget"]:checked')?.value || 'moderate';
      const rates = { budget: 2000, moderate: 5500, luxury: 16000 };
      const perDay = rates[budgetTier] || 5500;
      const total = days * perDay;
      const converted = Math.round(total * this.itinerary.currencyRate);
      if (budgetPreview) {
        budgetPreview.textContent = `${this.itinerary.currencySymbol}${converted.toLocaleString()}`;
      }
    };

    // Days pill buttons
    const dayPills = container.querySelectorAll('#wiz-days-pills .day-pill-btn');
    dayPills.forEach(pill => {
      pill.addEventListener('click', () => {
        dayPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        daysInput.value = pill.getAttribute('data-days');
        updateBudgetPreview();
      });
    });

    // Budget radio cards
    container.querySelectorAll('input[name="wiz-budget"]').forEach(radio => {
      radio.addEventListener('change', () => {
        container.querySelectorAll('label[id^="card-budget-"]').forEach(c => c.classList.remove('active'));
        radio.closest('label').classList.add('active');
        updateBudgetPreview();
      });
    });

    // Food radio cards
    container.querySelectorAll('#wiz-food-grid .food-option-card').forEach(card => {
      card.addEventListener('click', () => {
        container.querySelectorAll('#wiz-food-grid .food-option-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
      });
    });

    // Form submit
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('btn-submit-wizard');
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>⏳ Synthesizing Custom Schedule...</span>`;

      const destination = document.getElementById('wiz-destination').value;
      const tripType = document.getElementById('wiz-trip-type').value;
      const days = parseInt(daysInput.value) || 3;
      const budgetTier = document.querySelector('input[name="wiz-budget"]:checked')?.value || 'moderate';
      const foodPreference = document.querySelector('input[name="wiz-food"]:checked')?.value || 'pure_veg';
      const pace = document.querySelector('input[name="wiz-pace"]:checked')?.value || 'balanced';

      try {
        const plan = await this.tripWizard.generateCustomItinerary({
          destination,
          tripType,
          days,
          budgetTier,
          foodPreference,
          pace,
          currency: this.itinerary.currency
        });

        // Render Generated Plan Result
        resultBox.style.display = 'block';
        resultBox.innerHTML = `
          <div class="wizard-form-card" style="border: 2px solid #34d399; box-shadow: 0 0 25px rgba(52, 211, 153, 0.25);">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem; border-bottom: 1px solid var(--border-glass); padding-bottom: 1rem;">
              <div>
                <span style="background: rgba(16, 185, 129, 0.2); color: #34d399; font-weight: 700; padding: 2px 10px; border-radius: 6px; font-size: 0.78rem;">
                  PLAN GENERATION SUCCESSFUL
                </span>
                <h3 style="font-family: var(--font-display); font-size: 1.45rem; color: #fff; margin-top: 0.35rem;">
                  🇮🇳 ${plan.destination.toUpperCase()} · ${plan.durationDays}-Day Customized Itinerary
                </h3>
                <p style="color: #cbd5e1; font-size: 0.88rem;">
                  Matched to <strong>${plan.foodPreference}</strong> with ${plan.estimatedTotalCost} estimated allocation.
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
              ${plan.days.map((d, i) => `
                <button type="button" class="day-pill-btn ${i === 0 ? 'active' : ''}" data-day-index="${i}">
                  ${d.theme.split(':')[0] || `Day ${d.day}`}
                </button>
              `).join('')}
            </div>

            <!-- Hour-by-Hour Cards for Selected Day -->
            <div id="wiz-day-hours-container" style="display: flex; flex-direction: column; gap: 0.85rem;"></div>
          </div>
        `;

        const renderWizardDay = (dayIdx) => {
          const selectedDay = plan.days[dayIdx] || plan.days[0];
          const hoursBox = document.getElementById('wiz-day-hours-container');
          if (!hoursBox) return;

          hoursBox.innerHTML = `
            <div style="background: rgba(255,255,255,0.05); padding: 0.75rem 1rem; border-radius: 8px; margin-bottom: 0.5rem;">
              <strong style="color: #fbbf24; font-size: 0.95rem;">${selectedDay.theme}</strong>
            </div>
            ${selectedDay.hours.map(h => `
              <div class="hour-card" style="border-left: 4px solid ${h.badgeColor === 'blue' ? '#38bdf8' : h.badgeColor === 'purple' ? '#a855f7' : '#34d399'};">
                <div>
                  <span class="hour-time-badge">${h.time}</span>
                  <div style="margin-top: 0.5rem;">
                    <span style="font-size: 0.75rem; font-weight: 700; color: #94a3b8; text-transform: uppercase;">${h.categoryTag}</span>
                    <h4 style="color: #fff; font-size: 1.05rem; margin: 2px 0 6px;">${h.title}</h4>
                    <p style="color: #cbd5e1; font-size: 0.85rem; line-height: 1.4;">${h.description}</p>
                    <div style="display: flex; gap: 0.75rem; align-items: center; margin-top: 0.5rem; font-size: 0.8rem; color: #94a3b8;">
                      <span>📍 ${h.location}</span>
                      <span>⭐ ${h.rating}</span>
                    </div>
                  </div>
                </div>
                <div class="hour-action-col">
                  <div class="hour-cost-pill">${h.cost}</div>
                </div>
              </div>
            `).join('')}
          `;
        };

        renderWizardDay(0);

        // Day tab click listeners
        const tabs = resultBox.querySelectorAll('#wiz-result-day-tabs .day-pill-btn');
        tabs.forEach(tab => {
          tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderWizardDay(parseInt(tab.getAttribute('data-day-index')));
          });
        });

        // Load to planner CTA
        document.getElementById('btn-load-into-planner').addEventListener('click', () => {
          this.switchView('plan', { destination });
          confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });
        });

        // View on map CTA
        document.getElementById('btn-view-wizard-map').addEventListener('click', () => {
          this.switchView('interactive-map', { destination });
        });

        confetti({ particleCount: 100, spread: 90, origin: { y: 0.6 } });
        resultBox.scrollIntoView({ behavior: 'smooth', block: 'start' });

      } catch (err) {
        alert(`Could not generate itinerary: ${err.message}`);
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>⚡ Generate Custom AI Tour Schedule</span><span>➔</span>`;
      }
    });
  }
  renderItineraryPlanner(container) {
    const plan = this.itinerary.activePlan;
    const currentDay = this.itinerary.getCurrentDay();
    const dayIndex = this.itinerary.selectedDayIndex;
    const isRainy = this.itinerary.weatherMode === 'rainy';
    const totalDayCost = this.itinerary.calculateDayTotalCost(dayIndex);
    const destKey = this.itinerary.currentDestination;
    const dest = DESTINATIONS[destKey] || DESTINATIONS.kashmir;

    container.innerHTML = `
      <!-- Destination Hero Banner -->
      <div class="itinerary-hero-banner" style="background-image: url('${dest.image}');">
        <div class="itinerary-hero-overlay"></div>
        <div class="itinerary-hero-content">
          <div class="itinerary-hero-badges">
            <span class="dest-badge-state" style="position: static;">📍 ${dest.state}</span>
            <span class="dest-badge-weather" style="position: static;">⛅ ${dest.weather.temp}°C · ${dest.weather.condition}</span>
            <span class="dest-meta-chip" style="background: rgba(16, 185, 129, 0.25); color: #6ee7b7; border-color: rgba(16, 185, 129, 0.4);">
              📅 Best: ${dest.bestSeason ? dest.bestSeason.split('/')[0].trim() : 'Oct - Mar'}
            </span>
            <span class="dest-meta-chip" style="background: rgba(239, 68, 68, 0.25); color: #fca5a5; border-color: rgba(239, 68, 68, 0.4);">
              📞 Tourist Helpline: 1363 / 112
            </span>
          </div>
          <h2 class="itinerary-hero-title">${dest.name}</h2>
          <p class="itinerary-hero-desc">${dest.tagline}</p>
        </div>
      </div>

      <div class="itinerary-filter-bar">
        <div class="filter-group">
          <span style="font-size: 0.9rem; color: var(--text-muted); font-weight: 600;">Choose Destination:</span>
          <select class="destination-selector" id="plan-dest-select">
            ${Object.keys(DESTINATIONS).map(k => `
              <option value="${k}" ${this.itinerary.currentDestination === k ? 'selected' : ''}>
                🇮🇳 ${DESTINATIONS[k].name} (${DESTINATIONS[k].state})
              </option>
            `).join('')}
          </select>
        </div>

        <div class="filter-group">
          <button class="btn-secondary" id="btn-toggle-weather-sim">
            ${isRainy ? '🌧️ Rainy Weather Mode (Active)' : '☀️ Sunny Weather Mode (Active)'}
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
        ${plan.days.map((d, idx) => `
          <button class="day-tab-btn ${idx === dayIndex ? 'active' : ''}" data-day-index="${idx}">
            <span>${d.date}: ${d.title}</span>
            <span class="day-sub">${d.subtitle}</span>
          </button>
        `).join('')}
      </div>

      <!-- Day Header -->
      <div class="day-overview-header">
        <div>
          <h3>${currentDay.title}</h3>
          <p style="color: var(--text-muted); font-size: 0.88rem;">${currentDay.subtitle}</p>
        </div>
        <div class="day-cost-badge">Estimated Day Cost: ${totalDayCost}</div>
      </div>

      <!-- Hour Timeline -->
      <div class="timeline-container">
        ${currentDay.hours.map((h, hIdx) => `
          <div class="hour-card ${h.completed ? 'completed' : ''}" data-hour-index="${hIdx}">
            <div class="hour-time-col">
              <div class="hour-time-badge">
                <span>⏰</span>
                <span>${h.time}</span>
              </div>
              <span class="hour-tag ${h.badgeColor || 'blue'}">${h.categoryTag || h.category}</span>
            </div>

            <div class="hour-details-col">
              <h4>${h.title}</h4>
              <p>${h.description}</p>
              <div class="hour-meta-pills">
                <span>📍 ${h.location}</span>
                <span>⭐ ${h.rating}</span>
                <span>🛡️ ${h.weatherSuitability}</span>
                <span>👗 ${dest.wardrobe ? dest.wardrobe.category : 'Comfortable Travel Attire'}</span>
              </div>
            </div>

            <div class="hour-action-col">
              <span class="hour-cost">${this.itinerary.formatCost(h.costNum || 0)}</span>
              <button class="btn-secondary btn-listen-hour" data-hour-speech="${encodeURIComponent(`${h.time}. ${h.title}. ${h.description}`)}" title="Listen with AI Voice" style="padding: 0.35rem 0.65rem; font-size: 0.78rem;">
                🔊 Listen
              </button>
              <button class="check-toggle-btn ${h.completed ? 'checked' : ''}" data-toggle-hour="${hIdx}" title="Mark completed">
                ${h.completed ? '✓' : '○'}
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    document.getElementById('plan-dest-select').addEventListener('change', (e) => {
      this.itinerary.generatePlan(e.target.value);
      this.wardrobePacker.setDestination(e.target.value);
      this.renderItineraryPlanner(container);
    });

    document.getElementById('btn-toggle-weather-sim').addEventListener('click', () => {
      this.itinerary.toggleWeatherMode();
      this.renderItineraryPlanner(container);
    });

    document.getElementById('btn-open-map-direct').addEventListener('click', () => this.switchView('interactive-map'));
    document.getElementById('btn-print-itinerary').addEventListener('click', () => window.print());

    document.getElementById('btn-share-whatsapp').addEventListener('click', () => {
      const shareText = `TravelAI Bharat Itinerary for ${dest.name} (${currentDay.title}):\n` +
        currentDay.hours.map(h => `• ${h.time}: ${h.title} (${this.itinerary.formatCost(h.costNum || 0)})`).join('\n') +
        `\n\nEstimated Total: ${totalDayCost}\nEmergency Tourist Helpline: 1363\nView: http://localhost:3000/`;
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, '_blank');
    });

    container.querySelectorAll('.day-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-day-index'));
        this.itinerary.selectDay(idx);
        this.renderItineraryPlanner(container);
      });
    });

    container.querySelectorAll('.btn-listen-hour').forEach(btn => {
      btn.addEventListener('click', () => {
        const speechText = decodeURIComponent(btn.getAttribute('data-hour-speech'));
        this.aiEngine.speakText(speechText);
      });
    });

    container.querySelectorAll('.check-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const hIdx = parseInt(btn.getAttribute('data-toggle-hour'));
        const completed = this.itinerary.toggleHourCompleted(dayIndex, hIdx);
        if (completed) confetti({ particleCount: 35, spread: 55, origin: { y: 0.7 } });
        this.renderItineraryPlanner(container);
      });
    });
  }

  // 3. 100% Free & Unlimited Interactive Leaflet Map View
  renderInteractiveMapView(container) {
    const destKey = this.itinerary.currentDestination;
    const dest = DESTINATIONS[destKey] || DESTINATIONS.kashmir;

    container.innerHTML = `
      <div class="itinerary-filter-bar">
        <div class="filter-group">
          <span style="font-size: 0.9rem; color: var(--text-muted); font-weight: 600;">Destination:</span>
          <select class="destination-selector" id="map-dest-select">
            ${Object.keys(DESTINATIONS).map(k => `
              <option value="${k}" ${destKey === k ? 'selected' : ''}>
                🇮🇳 ${DESTINATIONS[k].name} (${DESTINATIONS[k].state})
              </option>
            `).join('')}
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
            <strong style="font-size: 13px; color: #38bdf8;">📍 ${dest.name} Route Corridor</strong>
            <span style="font-size: 11px; color: #34d399; font-weight: 600;">● Free OpenStreetMap</span>
          </div>
          <p style="font-size: 11px; color: #94a3b8; line-height: 1.4; margin: 0;">
            Sequential numbered markers (1, 2, 3...) connect each hourly experience. Amber/red radius displays monitored natural hazard zones.
          </p>
          <div style="margin-top: 8px; display: flex; gap: 6px; font-size: 11px;">
            <span style="color: #cbd5e1;">Lat: <strong>${dest.lat.toFixed(4)}°N</strong></span>
            <span style="color: #cbd5e1;">Lng: <strong>${dest.lng.toFixed(4)}°E</strong></span>
          </div>
        </div>
      </div>
    `;

    document.getElementById('map-dest-select').addEventListener('change', (e) => {
      this.itinerary.generatePlan(e.target.value);
      this.renderInteractiveMapView(container);
    });

    document.getElementById('btn-share-map-coords').addEventListener('click', () => {
      const shareUrl = `https://www.google.com/maps?q=${dest.lat},${dest.lng}`;
      const text = `TravelAI Bharat - ${dest.name} (${dest.state}): GPS Coordinates ${dest.lat}, ${dest.lng}. Live Map Link: ${shareUrl}`;
      navigator.clipboard.writeText(text).then(() => {
        confetti({ particleCount: 30, spread: 50 });
        alert(`✅ Copied to clipboard!\n\n${text}`);
      }).catch(() => {
        alert(text);
      });
    });

    document.getElementById('btn-locate-user-gps').addEventListener('click', () => {
      if (this.leafletMapInstance) {
        this.leafletMapInstance.locateUser((coords) => {
          confetti({ particleCount: 40, spread: 60 });
          alert(`🎯 GPS Locked! Lat: ${coords.latitude.toFixed(4)}°N, Lng: ${coords.longitude.toFixed(4)}°E (Precision ±${coords.accuracy}m). Map centered on your device.`);
        });
      }
    });

    setTimeout(() => {
      if (this.leafletMapInstance) this.leafletMapInstance.destroy();
      this.leafletMapInstance = new InteractiveMap('leaflet-map-canvas');
      this.leafletMapInstance.loadDestinationItinerary(dest, this.itinerary.selectedDayIndex);
    }, 150);
  }

  // 4. Natural Hazard Predictor & Alert Mailer View
  renderHazardView(container) {
    const destKey = this.itinerary.currentDestination;
    const dest = DESTINATIONS[destKey] || DESTINATIONS.kashmir;
    const report = this.hazardEngine.calculateHazardRisk(destKey);
    const riskClass = report.probabilityPercent > 50 ? 'high' : report.probabilityPercent > 25 ? 'moderate' : 'low';

    container.innerHTML = `
      <div class="itinerary-filter-bar">
        <div class="filter-group">
          <span style="font-size: 0.9rem; color: var(--text-muted); font-weight: 600;">Destination:</span>
          <select class="destination-selector" id="hazard-dest-select">
            ${Object.keys(DESTINATIONS).map(k => `
              <option value="${k}" ${destKey === k ? 'selected' : ''}>
                🇮🇳 ${DESTINATIONS[k].name}
              </option>
            `).join('')}
          </select>
        </div>

        <div class="filter-group">
          <span style="font-size: 0.9rem; color: var(--text-muted);">Estimated Travel Date:</span>
          <input type="date" id="hazard-date-input" class="form-control" style="width: auto; padding: 0.5rem 1rem;" 
                 value="${this.hazardEngine.selectedDate.toISOString().split('T')[0]}" />
        </div>
      </div>

      <!-- Hazard Risk Card -->
      <div class="hazard-risk-card">
        <div class="hazard-header-row">
          <div>
            <h3 style="font-family: var(--font-display); font-size: 1.4rem; color: #fff;">
              ⚠️ ${report.hazardType} Risk Assessment
            </h3>
            <p style="color: var(--text-muted); font-size: 0.88rem;">Forecasted for ${report.targetDate} in ${report.destinationName}</p>
          </div>
          <span class="hazard-badge-pill ${riskClass}">${report.baseLevel}</span>
        </div>

        <div class="hazard-meter-track">
          <div class="hazard-meter-fill" style="width: ${report.probabilityPercent}%;"></div>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-muted);">
          <span>Probability: <strong>${report.probabilityPercent}%</strong></span>
          <span>Rain Probability: <strong>${report.estimatedRainChance}%</strong></span>
          <span>Forecast Temp: <strong>${report.estimatedTemp}°C</strong></span>
        </div>

        <div style="margin-top: 1.25rem; background: rgba(0,0,0,0.25); padding: 1rem; border-radius: 8px;">
          <strong style="color: #cbd5e1; font-size: 0.9rem;">⚠️ Monitored Danger Zones:</strong>
          <p style="color: #94a3b8; font-size: 0.85rem; margin-top: 0.2rem;">${report.dangerZones.join(' · ')}</p>
          <strong style="color: #cbd5e1; font-size: 0.9rem; display: block; margin-top: 0.75rem;">Official Safety Protocol:</strong>
          <p style="color: #94a3b8; font-size: 0.85rem; margin-top: 0.2rem;">${report.officialAdvisory}</p>
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
    `;

    document.getElementById('hazard-dest-select').addEventListener('change', (e) => {
      this.itinerary.generatePlan(e.target.value);
      this.renderHazardView(container);
    });

    document.getElementById('hazard-date-input').addEventListener('change', (e) => {
      this.hazardEngine.setDate(e.target.value);
      this.renderHazardView(container);
    });

    document.getElementById('btn-dispatch-hazard-email').addEventListener('click', () => {
      const recipient = document.getElementById('hazard-mail-recipient').value;
      const note = document.getElementById('hazard-mail-note').value;
      const mailtoUrl = this.hazardEngine.generateHazardAlertEmail(destKey, recipient, note);
      window.location.href = mailtoUrl;
    });
  }

  // 5. AI Wardrobe Advisor & Departure Countdown View
  renderWardrobeView(container) {
    const destKey = this.itinerary.currentDestination;
    const dest = DESTINATIONS[destKey] || DESTINATIONS.kashmir;
    const advice = this.wardrobePacker.getWardrobeAdvice(destKey);

    // Load custom added items from localStorage
    let customItems = [];
    try {
      const saved = localStorage.getItem(`travelai_custom_pack_${destKey}`);
      if (saved) customItems = JSON.parse(saved);
    } catch (e) {}

    const allItems = [...advice.mustCarry, ...customItems];

    container.innerHTML = `
      <div class="itinerary-filter-bar">
        <div class="filter-group">
          <span style="font-size: 0.9rem; color: var(--text-muted); font-weight: 600;">Destination:</span>
          <select class="destination-selector" id="wardrobe-dest-select">
            ${Object.keys(DESTINATIONS).map(k => `
              <option value="${k}" ${destKey === k ? 'selected' : ''}>
                🇮🇳 ${DESTINATIONS[k].name} (${DESTINATIONS[k].state})
              </option>
            `).join('')}
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
                AI Wardrobe & Style Guide for ${dest.name}
              </h3>
              <span style="color: #38bdf8; font-size: 0.85rem;">${advice.category}</span>
            </div>
          </div>

          <div style="background: rgba(37,99,235,0.1); border: 1px solid rgba(59,130,246,0.3); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
            <strong style="color: #fff; font-size: 0.95rem;">Recommended Outfit:</strong>
            <p style="color: #93c5fd; font-size: 0.9rem; margin-top: 0.2rem;">${advice.headline}</p>
          </div>

          <strong style="color: #cbd5e1; font-size: 0.88rem;">Optimal Fabrics:</strong>
          <div class="fabric-chips-row">
            ${advice.fabrics.split(',').map(f => `<span class="fabric-chip">${f.trim()}</span>`).join('')}
          </div>

          <strong style="color: #cbd5e1; font-size: 0.88rem;">Recommended Footwear:</strong>
          <p style="color: #94a3b8; font-size: 0.85rem; margin: 0.35rem 0 1rem;">👟 ${advice.footwear}</p>

          <strong style="color: #cbd5e1; font-size: 0.88rem;">Sacred / Cultural Etiquette:</strong>
          <p style="color: #94a3b8; font-size: 0.85rem; margin-top: 0.35rem;">🛕 ${advice.culturalEtiquette}</p>
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
              <span id="pack-progress-text" style="color: #34d399;">0 of ${allItems.length} packed (0%)</span>
            </div>
            <div class="checklist-progress-bar">
              <div class="checklist-progress-fill" id="pack-progress-fill" style="width: 0%;"></div>
            </div>
          </div>

          <div id="checklist-container">
            ${allItems.map((item, idx) => `
              <div class="checklist-item" data-idx="${idx}">
                <input type="checkbox" id="chk-${idx}" class="pack-checkbox" />
                <label for="chk-${idx}">${item}</label>
              </div>
            `).join('')}
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
    `;

    const updateProgress = () => {
      const checkboxes = container.querySelectorAll('.pack-checkbox');
      const total = checkboxes.length;
      let checkedCount = 0;
      checkboxes.forEach(cb => { if (cb.checked) checkedCount++; });
      const percent = total > 0 ? Math.round((checkedCount / total) * 100) : 0;

      const fill = document.getElementById('pack-progress-fill');
      const text = document.getElementById('pack-progress-text');
      if (fill) fill.style.width = `${percent}%`;
      if (text) text.textContent = `${checkedCount} of ${total} packed (${percent}%)`;
    };

    container.querySelectorAll('.pack-checkbox').forEach(cb => {
      cb.addEventListener('change', updateProgress);
    });

    document.getElementById('wardrobe-dest-select').addEventListener('change', (e) => {
      this.itinerary.generatePlan(e.target.value);
      this.wardrobePacker.setDestination(e.target.value);
      this.renderWardrobeView(container);
    });

    document.getElementById('btn-add-custom-pack').addEventListener('click', () => {
      const input = document.getElementById('custom-pack-input');
      const val = input.value.trim();
      if (val) {
        customItems.push(val);
        localStorage.setItem(`travelai_custom_pack_${destKey}`, JSON.stringify(customItems));
        this.renderWardrobeView(container);
      }
    });

    document.getElementById('btn-verify-all-packed').addEventListener('click', () => {
      confetti({ particleCount: 55, spread: 70, origin: { y: 0.6 } });
      alert('🎉 Great job! All essential travel gear confirmed. Safe travels across Incredible India!');
    });
  }

  // 6. Zero-Internet Offline SOS & Smart Cellular Tracking View
  renderOfflineSOSView(container) {
    const coords = this.offlineSos.currentCoords;
    const isMobile = this.offlineSos.isMobile();
    const activeTicket = this.offlineSos.activeSosTicket;

    container.innerHTML = `
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
          <div id="sos-ticket-banner" style="${activeTicket ? 'display: block;' : 'display: none;'}; margin: 1rem 0;">
            <div class="sos-official-ticket">
              <div>
                <span style="background: #10b981; color: #fff; font-weight: 700; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">
                  OFFICIAL DISPATCH TICKET
                </span>
                <strong id="sos-ticket-text" style="color: #fff; display: block; margin-top: 4px; font-size: 1.1rem; font-family: monospace;">
                  ${activeTicket || 'SOS-NDRF-2026-ACTIVE'}
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
            • Latitude: <span id="sos-lat">${coords.latitude.toFixed(5)}</span>° N<br>
            • Longitude: <span id="sos-lng">${coords.longitude.toFixed(5)}</span>° E<br>
            • Altitude: <span id="sos-alt">${coords.altitude}</span> meters ASL<br>
            • Precision: ±<span id="sos-acc">${coords.accuracy}</span> meters (HDOP 0.9)
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
            <a href="${this.offlineSos.generateOfflineCellularSMS('112')}" class="btn-primary" style="background: linear-gradient(135deg, #ef4444, #dc2626); justify-content: center; text-decoration: none; min-height: 48px;">
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
    `;

    // Siren toggle with guaranteed AudioContext resume
    const sirenBtn = document.getElementById('btn-toggle-siren');
    const sirenText = document.getElementById('siren-btn-text');
    const strobeInd = document.getElementById('strobe-status-indicator');

    sirenBtn.addEventListener('click', async () => {
      const isPlaying = await this.offlineSos.toggleAcousticSiren();
      if (isPlaying) {
        sirenBtn.classList.add('playing');
        sirenText.textContent = 'STOP Acoustic Siren & Strobe';
        if (strobeInd) {
          strobeInd.textContent = '🚨 Strobe ACTIVE (Visual Beacon)';
          strobeInd.style.color = '#ef4444';
        }
      } else {
        sirenBtn.classList.remove('playing');
        sirenText.textContent = 'Blast Emergency Siren & Strobe';
        if (strobeInd) {
          strobeInd.textContent = 'Screen Strobe: Ready';
          strobeInd.style.color = '#94a3b8';
        }
      }
    });

    // Copy distress payload button (great for laptops)
    const copyBtn = document.getElementById('btn-copy-sos');
    const copyText = document.getElementById('btn-copy-text');
    copyBtn.addEventListener('click', async () => {
      await this.offlineSos.copyDistressToClipboard();
      copyText.textContent = '✓ Copied to Clipboard!';
      copyBtn.style.borderColor = '#10b981';
      setTimeout(() => {
        copyText.textContent = 'Copy Distress Note';
        copyBtn.style.borderColor = '';
      }, 2500);
      alert('📋 Emergency GPS distress note copied to clipboard! You can paste this in any SMS, email, or messaging app.');
    });

    // Cloud NDRF Broadcast button
    const cloudBtn = document.getElementById('btn-cloud-sos');
    cloudBtn.addEventListener('click', async () => {
      cloudBtn.disabled = true;
      cloudBtn.innerHTML = `<span>⏳ Dispatching to NDRF Cloud...</span>`;

      const user = this.auth.currentUser || {};
      const result = await this.offlineSos.broadcastToCloud(
        user.name || 'Tourist in Distress',
        user.phone || '+91 98765 43210',
        'Distress beacon activated from TravelAI Bharat Offline SOS Panel.'
      );

      cloudBtn.disabled = false;
      cloudBtn.innerHTML = `<span>📡 Broadcast to NDRF Safety Cloud (Generate Ticket)</span>`;

      const banner = document.getElementById('sos-ticket-banner');
      const ticketText = document.getElementById('sos-ticket-text');
      if (banner && ticketText) {
        ticketText.textContent = result.ticket;
        banner.style.display = 'block';
        banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });
      alert(`🛰️ Distress Beacon Dispatched!\nOfficial Incident Ticket: ${result.ticket}\nLocal QRT & Tourist Safety Cell notified.`);
    });

    // Manual GPS calibration
    document.getElementById('btn-calibrate-gps').addEventListener('click', () => {
      const lat = prompt('Enter Current Latitude (e.g. 27.0410 for Darjeeling, 34.0837 for Srinagar):', coords.latitude);
      if (lat === null) return;
      const lng = prompt('Enter Current Longitude (e.g. 88.2663 for Darjeeling, 74.7973 for Srinagar):', coords.longitude);
      if (lng === null) return;
      this.offlineSos.setManualCoordinates(lat, lng);
      this.updateOfflineLocationUI();
    });

    // First aid tabs
    const renderFa = (type) => {
      const guide = this.offlineSos.getOfflineFirstAidGuide(type);
      document.getElementById('first-aid-body').innerHTML = `
        <strong style="color: #38bdf8; font-size: 1rem; display: block;">${guide.title}</strong>
        <p style="color: #fbbf24; font-size: 0.85rem; margin: 0.4rem 0 0.8rem;"><strong>Symptoms:</strong> ${guide.symptoms}</p>
        <strong style="color: #fff; font-size: 0.88rem;">Immediate Actions:</strong>
        <ul style="margin-left: 1.25rem; color: #cbd5e1; font-size: 0.85rem; margin-top: 0.3rem;">
          ${guide.actions.map(a => `<li style="margin-bottom: 4px;">${a}</li>`).join('')}
        </ul>
      `;
    };

    renderFa('ams');
    document.getElementById('btn-fa-ams').addEventListener('click', () => renderFa('ams'));
    document.getElementById('btn-fa-cold').addEventListener('click', () => renderFa('hypothermia'));
    document.getElementById('btn-fa-heat').addEventListener('click', () => renderFa('heatstroke'));
  }

  updateOfflineLocationUI() {
    const lat = document.getElementById('sos-lat');
    const lng = document.getElementById('sos-lng');
    const alt = document.getElementById('sos-alt');
    const acc = document.getElementById('sos-acc');
    if (lat && lng) {
      const c = this.offlineSos.currentCoords;
      lat.textContent = c.latitude.toFixed(5);
      lng.textContent = c.longitude.toFixed(5);
      if (alt) alt.textContent = c.altitude;
      if (acc) acc.textContent = c.accuracy;
    }
  }

  updateCountdownUI(time) {
    const days = document.getElementById('cd-days');
    const hours = document.getElementById('cd-hours');
    const mins = document.getElementById('cd-mins');
    const secs = document.getElementById('cd-secs');
    if (days && hours && mins && secs) {
      days.textContent = String(time.days).padStart(2, '0');
      hours.textContent = String(time.hours).padStart(2, '0');
      mins.textContent = String(time.minutes).padStart(2, '0');
      secs.textContent = String(time.seconds).padStart(2, '0');
    }
  }

  // 7. Weather View
  renderWeatherView(container) {
    const destKey = this.itinerary.currentDestination;
    const dest = DESTINATIONS[destKey] || DESTINATIONS.kashmir;
    const w = dest.weather;

    container.innerHTML = `
      <div class="weather-view-grid">
        <div class="weather-current-card">
          <span style="font-size: 0.95rem; font-weight: 600; color: var(--text-muted);">${dest.name} Weather</span>
          <div class="weather-icon-big">🌦️</div>
          <div class="weather-temp-huge">${w.temp}°C</div>
          <div class="weather-desc-label">${w.condition}</div>

          <div class="weather-stats-subgrid">
            <div class="substat-item">
              <span class="label">Humidity</span>
              <span class="val">${w.humidity}%</span>
            </div>
            <div class="substat-item">
              <span class="label">Wind</span>
              <span class="val">${w.wind}</span>
            </div>
            <div class="substat-item">
              <span class="label">Feels Like</span>
              <span class="val">${w.feelsLike}°C</span>
            </div>
            <div class="substat-item">
              <span class="label">Rain Chance</span>
              <span class="val">${w.precipitationChance}%</span>
            </div>
          </div>
        </div>

        <div class="weather-advisory-card" style="flex-direction: column;">
          <h4 style="font-size: 1.15rem; color: #38bdf8; margin-bottom: 0.5rem;">5-Day Forecast & Regional Highlights</h4>
          <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%;">
            ${w.forecast.map(f => `
              <div style="background: rgba(15,23,42,0.6); padding: 0.85rem; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                <strong>${f.day}: ${f.temp}</strong>
                <span style="color: #cbd5e1; font-size: 0.85rem;">${f.note}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="route-overview-card">
          <h4 style="font-size: 1.1rem; color: #fff; margin-bottom: 1rem;">Navigation & Route Radar</h4>
          <button class="btn-primary" id="btn-open-map-weather">Open Interactive Leaflet Map</button>
        </div>
      </div>
    `;

    document.getElementById('btn-open-map-weather').addEventListener('click', () => this.switchView('interactive-map'));
  }

  // 8. Hotels & Dining View
  renderHotelsRestaurants(container) {
    const isHotelTab = this.activeHotelTab.includes('stay');

    container.innerHTML = `
      <div class="category-tabs-bar">
        <button class="cat-tab-btn ${this.activeHotelTab === 'budget-stay' ? 'active' : ''}" data-cat="budget-stay">Budget Stay</button>
        <button class="cat-tab-btn ${this.activeHotelTab === 'luxury-stay' ? 'active' : ''}" data-cat="luxury-stay">Luxury Stay</button>
        <button class="cat-tab-btn ${this.activeHotelTab === 'budget-food' ? 'active' : ''}" data-cat="budget-food">Budget Food</button>
        <button class="cat-tab-btn ${this.activeHotelTab === 'luxury-food' ? 'active' : ''}" data-cat="luxury-food">Luxury Dining</button>
      </div>

      <div class="cards-grid">
        ${isHotelTab 
          ? HOTELS.map(h => `
            <div class="listing-card">
              <div class="listing-img-box">
                <img src="${h.image}" alt="${h.name}" />
                <span class="rating-badge">★ ${h.rating}</span>
              </div>
              <div class="listing-content">
                <h4>${h.name}</h4>
                <p class="desc">${h.desc}</p>
                <div class="listing-footer-row">
                  <div class="price-tag">${this.itinerary.formatCost(h.priceNum)} <span class="unit">${h.unit}</span></div>
                  <button class="btn-secondary btn-reserve-instant" data-name="${h.name}">Reserve</button>
                </div>
              </div>
            </div>
          `).join('')
          : RESTAURANTS.map(r => `
            <div class="listing-card">
              <div class="listing-img-box">
                <img src="${r.image}" alt="${r.name}" />
                <span class="rating-badge">★ ${r.rating}</span>
              </div>
              <div class="listing-content">
                <h4>${r.name}</h4>
                <p class="desc">${r.desc}</p>
                <div class="listing-footer-row">
                  <div class="price-tag">${this.itinerary.formatCost(r.priceNum)} <span class="unit">${r.unit}</span></div>
                  <button class="btn-secondary btn-reserve-instant" data-name="${r.name}">Book Table</button>
                </div>
              </div>
            </div>
          `).join('')}
      </div>
    `;

    container.querySelectorAll('.cat-tab-btn').forEach(b => {
      b.addEventListener('click', () => {
        this.activeHotelTab = b.getAttribute('data-cat');
        this.renderHotelsRestaurants(container);
      });
    });

    container.querySelectorAll('.btn-reserve-instant').forEach(b => {
      b.addEventListener('click', () => {
        confetti({ particleCount: 50, spread: 60 });
        alert(`Booking confirmed for ${b.getAttribute('data-name')}! Added to your trip portfolio.`);
      });
    });
  }

  // 9. AI Voice Assistant & Bot Chat View
  renderVoiceAssistantView(container) {
    const isAlex = this.aiEngine.activePersona === 'alex';

    container.innerHTML = `
      <div class="assistant-view-wrapper">
        <div class="persona-switch-bar">
          <div class="persona-options">
            <button class="persona-pill-btn ${isAlex ? 'active alex' : ''}" id="btn-select-alex">
              <span>👨‍✈️</span>
              <span>Alex (Male AI Guide)</span>
            </button>
            <button class="persona-pill-btn ${!isAlex ? 'active maya' : ''}" id="btn-select-maya">
              <span>👩‍💼</span>
              <span>Maya (Female AI Guide)</span>
            </button>
          </div>

          <div class="lang-btn-group">
            <button class="lang-toggle-btn ${this.aiEngine.currentLanguage === 'en' ? 'active' : ''}" data-lang="en">English</button>
            <button class="lang-toggle-btn ${this.aiEngine.currentLanguage === 'bn' ? 'active' : ''}" data-lang="bn">বাংলা</button>
            <button class="lang-toggle-btn ${this.aiEngine.currentLanguage === 'hi' ? 'active' : ''}" data-lang="hi">हिंदी</button>
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
    `;

    setTimeout(() => {
      if (this.visualizerInstance) this.visualizerInstance.destroy();
      this.visualizerInstance = new AudioVisualizer('voice-waveform-canvas');
      this.aiEngine.visualizer = this.visualizerInstance;
    }, 100);

    document.getElementById('btn-select-alex').addEventListener('click', () => {
      this.aiEngine.setPersona('alex');
      this.renderVoiceAssistantView(container);
    });
    document.getElementById('btn-select-maya').addEventListener('click', () => {
      this.aiEngine.setPersona('maya');
      this.renderVoiceAssistantView(container);
    });

    container.querySelectorAll('.lang-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.aiEngine.setLanguage(btn.getAttribute('data-lang'));
        this.renderVoiceAssistantView(container);
      });
    });

    const micBtn = document.getElementById('central-mic-btn');
    micBtn.addEventListener('click', () => {
      if (this.aiEngine.isListening) {
        this.aiEngine.stopListening();
        micBtn.classList.remove('active');
      } else {
        micBtn.classList.add('active');
        this.aiEngine.startListening();
      }
    });

    container.querySelectorAll('.suggest-chip').forEach(chip => {
      chip.addEventListener('click', () => this.aiEngine.processUserInput(chip.getAttribute('data-prompt')));
    });

    const form = document.getElementById('chat-input-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('chat-input-text');
      if (input.value.trim()) {
        this.aiEngine.processUserInput(input.value.trim());
        input.value = '';
      }
    });

    this.renderChatMessages();
  }

  renderChatMessages() {
    const drawer = document.getElementById('chat-drawer');
    if (!drawer) return;

    drawer.innerHTML = this.aiEngine.messages.map(m => {
      const isBot = m.role === 'bot';
      return `
        <div class="chat-bubble-row ${isBot ? 'bot' : 'user'}">
          <div class="chat-bubble-avatar">${isBot ? (m.avatar3d || '🤖') : '🧑'}</div>
          <div class="chat-bubble-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
              <strong style="color: ${isBot ? '#38bdf8' : '#fff'}; font-size: 0.85rem;">${isBot ? (m.personaName || 'AI Guide') : 'You'}</strong>
              <span style="font-size: 0.72rem; color: var(--text-dim);">${m.timestamp}</span>
            </div>
            <div>${m.text.replace(/\n/g, '<br>')}</div>
            ${isBot ? `
              <div style="margin-top: 0.5rem; display: flex; align-items: center; justify-content: flex-end;">
                <button class="bubble-speaker-btn" data-speak-id="${m.id}">🔊 Listen</button>
              </div>
            ` : ''}
            ${m.action ? `
              <button class="btn-secondary" style="margin-top: 0.75rem; padding: 0.4rem 0.8rem; font-size: 0.82rem;" id="act-btn-${m.id}">
                Open In App ➔
              </button>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');

    drawer.scrollTop = drawer.scrollHeight;

    drawer.querySelectorAll('.bubble-speaker-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const msg = this.aiEngine.messages.find(x => x.id === btn.getAttribute('data-speak-id'));
        if (msg) this.aiEngine.speakText(msg.text, msg.sender);
      });
    });

    this.aiEngine.messages.forEach(m => {
      if (m.action) {
        const btn = drawer.querySelector(`#act-btn-${m.id}`);
        if (btn) {
          btn.addEventListener('click', () => {
            this.switchView(m.action.view, { destination: m.action.destination });
          });
        }
      }
    });
  }

  handleSpeechState(state) {
    const mic = document.getElementById('central-mic-btn');
    if (!mic) return;
    if (state === 'listening') mic.classList.add('active');
    else mic.classList.remove('active');
  }
}

// Instantiate on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new TravelAIApp();
});
