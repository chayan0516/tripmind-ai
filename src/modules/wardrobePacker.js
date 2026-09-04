// ==========================================================================
// AI Wardrobe Advisor, Departure Countdown & Last-Minute Carry Checklist
// ==========================================================================

import { DESTINATIONS } from '../data/mockData.js';

export class WardrobePacker {
  constructor(options = {}) {
    this.targetDate = new Date(Date.now() + 86400000 * 5); // 5 days from now
    this.destinationKey = options.defaultDestination || 'darjeeling';
    this.onTick = options.onTick || null;
    this.intervalId = null;

    this.startCountdown();
  }

  setDestination(key) {
    this.destinationKey = key;
  }

  setTargetDate(dateStr) {
    this.targetDate = new Date(dateStr);
  }

  getWardrobeAdvice(destKey = this.destinationKey) {
    const dest = DESTINATIONS[destKey] || DESTINATIONS.darjeeling;
    return dest.wardrobe || {
      category: "All-Weather Casual",
      headline: "Comfortable Breathable Cotton + Walking Shoes",
      fabrics: "Cotton, linen, light denim",
      footwear: "Cushioned walking sneakers",
      culturalEtiquette: "Modest attire in sacred areas.",
      mustCarry: ["Original ID", "Phone Charger", "Prescribed Medicines", "Water Bottle"]
    };
  }

  startCountdown() {
    if (this.intervalId) clearInterval(this.intervalId);

    this.intervalId = setInterval(() => {
      const now = Date.now();
      const diff = this.targetDate.getTime() - now;

      if (diff <= 0) {
        if (this.onTick) {
          this.onTick({ days: 0, hours: 0, minutes: 0, seconds: 0, isDeparted: true });
        }
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      if (this.onTick) {
        this.onTick({ days, hours, minutes, seconds, isDeparted: false });
      }
    }, 1000);
  }

  destroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
