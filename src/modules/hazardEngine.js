// ==========================================================================
// Natural Hazard Risk Predictor & Automated Hazard Mailing System
// Calculates rain, landslide, flood, cyclone & extreme weather probabilities
// ==========================================================================

import { DESTINATIONS } from '../data/mockData.js';

export class HazardEngine {
  constructor() {
    this.selectedDate = new Date(Date.now() + 86400000 * 7); // Default 7 days from now
  }

  setDate(dateString) {
    this.selectedDate = new Date(dateString);
  }

  calculateHazardRisk(destinationKey, customDate = null) {
    const dest = DESTINATIONS[destinationKey] || DESTINATIONS.darjeeling;
    const targetDate = customDate ? new Date(customDate) : this.selectedDate;
    const month = targetDate.getMonth() + 1; // 1-12

    let baseProbability = dest.hazard ? dest.hazard.probability : 20;
    let seasonalFactors = [];
    let adjustedRiskLevel = dest.hazard ? dest.hazard.level : "Low";

    // Dynamic Seasonal Hazard Physics based on India's climate calendar
    // Monsoon Peak: June (6) to September (9)
    const isMonsoon = month >= 6 && month <= 9;
    // Pre-Monsoon Cyclones: April-May (4-5), Post-monsoon Cyclones: Oct-Nov (10-11)
    const isCycloneSeason = month === 5 || month === 10 || month === 11;
    // Summer Heatwave: April to June (4-6)
    const isSummerPeak = month >= 4 && month <= 6;
    // Winter Chill: December to February (12, 1, 2)
    const isWinterSnow = month === 12 || month === 1 || month === 2;

    // Region-specific adaptations
    if (['darjeeling', 'gangtok', 'manali', 'kashmir', 'ladakh'].includes(destinationKey)) {
      if (isMonsoon) {
        baseProbability = Math.min(85, baseProbability + 35);
        adjustedRiskLevel = "High Alert";
        seasonalFactors.push("High Monsoon Rainfall: Elevated threat of rockslides & river road breaches.");
      } else if (isWinterSnow) {
        baseProbability = Math.min(75, baseProbability + 25);
        adjustedRiskLevel = "Moderate Snow Advisory";
        seasonalFactors.push("Sub-Zero Winter: Ice formation, black ice on passes & heavy snowfall blocks.");
      } else {
        baseProbability = Math.max(10, baseProbability - 15);
        adjustedRiskLevel = "Low to Normal";
        seasonalFactors.push("Dry Clear Window: Ideal conditions for mountain trekking.");
      }
    } else if (['digha', 'puri', 'kerala'].includes(destinationKey)) {
      if (isCycloneSeason) {
        baseProbability = Math.min(80, baseProbability + 30);
        adjustedRiskLevel = "High Tidal Advisory";
        seasonalFactors.push("Bay of Bengal Cyclone Window: Potential deep depressions & rough sea swells.");
      } else if (isMonsoon) {
        baseProbability = Math.min(70, baseProbability + 20);
        adjustedRiskLevel = "Monsoon Surge";
        seasonalFactors.push("Continuous Monsoon Downpours: High tides & canal inundation risk.");
      } else {
        baseProbability = 15;
        adjustedRiskLevel = "Safe Shore Conditions";
        seasonalFactors.push("Mild Ocean Currents: Ideal for beach exploration.");
      }
    } else if (['rajasthan', 'varanasi', 'ayodhya'].includes(destinationKey)) {
      if (isSummerPeak) {
        baseProbability = Math.min(80, baseProbability + 30);
        adjustedRiskLevel = "Extreme Heatwave";
        seasonalFactors.push("Desert Loo Winds: Daytime temperatures exceeding 42°C. Dehydration risk.");
      } else {
        baseProbability = 10;
        adjustedRiskLevel = "Pleasant Cultural Weather";
        seasonalFactors.push("Mild sunny days with comfortable river breezes.");
      }
    }

    // Rain probability calculation
    let rainChance = dest.weather ? dest.weather.precipitationChance : 20;
    if (isMonsoon) rainChance = Math.min(95, rainChance + 40);
    if (!isMonsoon && !isCycloneSeason) rainChance = Math.max(5, rainChance - 15);

    return {
      destinationName: dest.name,
      state: dest.state,
      targetDate: targetDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      hazardType: dest.hazard ? dest.hazard.type : "General Weather Advisory",
      baseLevel: adjustedRiskLevel,
      probabilityPercent: baseProbability,
      estimatedRainChance: rainChance,
      estimatedTemp: dest.weather ? dest.weather.temp : 25,
      seasonalNotes: seasonalFactors,
      dangerZones: dest.hazard ? dest.hazard.dangerZones : ["Mountain Highways", "Riverbanks"],
      officialAdvisory: dest.hazard ? dest.hazard.advisory : "Exercise general travel caution and monitor state disaster bulletins."
    };
  }

  // Generates Pre-Formatted Hazard Alert Email to Hotel / Emergency Contacts
  generateHazardAlertEmail(destinationKey, recipientEmail = "emergency@hotel.com", customNote = "") {
    const report = this.calculateHazardRisk(destinationKey);
    const subject = encodeURIComponent(`⚠️ Travel Hazard & Safety Advisory: ${report.destinationName} (${report.targetDate})`);
    
    const bodyText = encodeURIComponent(
      `Dear Safety Desk / Emergency Contact,\n\n` +
      `This is an automated safety advisory generated via TravelAI Pro for upcoming travel to ${report.destinationName}.\n\n` +
      `📍 Travel Date: ${report.targetDate}\n` +
      `🚨 Primary Hazard: ${report.hazardType}\n` +
      `📊 Risk Level: ${report.baseLevel} (${report.probabilityPercent}% Probability)\n` +
      `🌧️ Rain Probability: ${report.estimatedRainChance}%\n` +
      `🌡️ Estimated Temp: ${report.estimatedTemp}°C\n\n` +
      `⚠️ Monitored Danger Zones:\n` +
      report.dangerZones.map(z => ` - ${z}`).join('\n') + `\n\n` +
      `📋 Official Safety Advisory:\n${report.officialAdvisory}\n\n` +
      (customNote ? `Additional Traveler Note: ${customNote}\n\n` : '') +
      `Emergency Services in India:\n` +
      `National Emergency: 112 | Ambulance: 108 | Disaster Control: 1077\n\n` +
      `Generated by TravelAI Pro Autonomous Travel Companion.`
    );

    return `mailto:${recipientEmail}?subject=${subject}&body=${bodyText}`;
  }
}
