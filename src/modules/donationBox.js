// ==========================================================================
// Voluntary Community & Disaster Relief Donation Box Module
// Supports UPI QR Code (GPay, PhonePe, Paytm), custom amounts & receipt
// ==========================================================================

import confetti from 'canvas-confetti';

export class DonationManager {
  constructor() {
    this.selectedAmount = 100;
  }

  renderDonationModal(containerElement, onDone = null) {
    const modalHtml = `
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
    `;

    containerElement.innerHTML = `
      <div class="modal-overlay" id="donation-modal">
        ${modalHtml}
      </div>
    `;

    const overlay = containerElement.querySelector('#donation-modal');
    const closeBtn = overlay.querySelector('#m-close');
    const dismissBtn = overlay.querySelector('#btn-dismiss-donation');
    const confirmBtn = overlay.querySelector('#btn-confirm-donation');
    const qrImg = overlay.querySelector('#donation-qr-img');

    const close = () => {
      containerElement.innerHTML = '';
      if (onDone) onDone();
    };

    if (closeBtn) closeBtn.addEventListener('click', close);
    if (dismissBtn) dismissBtn.addEventListener('click', close);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close();
    });

    // Chip click
    overlay.querySelectorAll('.donation-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        overlay.querySelectorAll('.donation-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const amt = chip.getAttribute('data-amt');
        this.selectedAmount = amt;
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=travelai.relief@okaxis&pn=TravelAI%20Relief%20Fund&am=${amt}&cu=INR`;
      });
    });

    // Confirm button
    confirmBtn.addEventListener('click', () => {
      confetti({ particleCount: 80, spread: 90, origin: { y: 0.6 } });
      alert(`🙏 Thank you so much for supporting the community with ₹${this.selectedAmount}! Your digital contribution receipt has been generated.`);
      close();
    });
  }
}
