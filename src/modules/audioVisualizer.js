// 3D-Style Holographic Audio Waveform Visualizer
export class AudioVisualizer {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.animationId = null;
    this.state = 'idle'; // 'idle' | 'listening' | 'speaking'
    this.barCount = 64;
    this.phase = 0;
    this.audioContext = null;
    this.analyser = null;
    this.dataArray = null;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.render = this.render.bind(this);
    this.render();
  }

  resize() {
    if (!this.canvas) return;
    this.width = this.canvas.clientWidth || 600;
    this.height = this.canvas.clientHeight || 160;
    this.canvas.width = this.width * (window.devicePixelRatio || 1);
    this.canvas.height = this.height * (window.devicePixelRatio || 1);
    this.ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
  }

  setState(newState) {
    this.state = newState;
  }

  render() {
    this.animationId = requestAnimationFrame(this.render);
    if (!this.ctx) return;

    this.ctx.clearRect(0, 0, this.width, this.height);
    this.phase += 0.05;

    const centerY = this.height / 2;
    const centerX = this.width / 2;
    const spacing = this.width / (this.barCount * 1.5);

    // Create vibrant gradient
    const grad = this.ctx.createLinearGradient(0, 0, this.width, 0);
    grad.addColorStop(0, 'rgba(59, 130, 246, 0.2)');
    grad.addColorStop(0.3, 'rgba(6, 182, 212, 0.9)');
    grad.addColorStop(0.5, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.7, 'rgba(168, 85, 247, 0.9)');
    grad.addColorStop(1, 'rgba(236, 72, 153, 0.2)');

    this.ctx.lineWidth = 3;
    this.ctx.lineCap = 'round';
    this.ctx.strokeStyle = grad;

    // Draw symmetrical audio bars radiating outwards from center
    const half = Math.floor(this.barCount / 2);

    for (let i = 0; i < half; i++) {
      let amp = 8;
      const distFromCenter = i / half;

      if (this.state === 'speaking') {
        // High energetic speech pattern
        const harmonic = Math.sin(this.phase * 2 + i * 0.4) * Math.cos(this.phase * 3 - i * 0.2);
        amp = 15 + Math.abs(harmonic) * 55 * Math.pow(1 - distFromCenter, 0.7);
      } else if (this.state === 'listening') {
        // Subtle listening pulse
        const wave = Math.sin(this.phase * 3 + i * 0.5);
        amp = 10 + Math.abs(wave) * 35 * Math.pow(1 - distFromCenter, 0.8);
      } else {
        // Idle gentle breathing glow
        const idleWave = Math.sin(this.phase * 1.2 + i * 0.3);
        amp = 6 + Math.abs(idleWave) * 14 * (1 - distFromCenter);
      }

      const barHeight = Math.max(4, amp);
      const xOffset = (i + 1) * spacing * 1.2;

      // Right side
      const rightX = centerX + xOffset;
      if (rightX < this.width - 20) {
        this.drawBar(rightX, centerY, barHeight);
      }

      // Left side (symmetric)
      const leftX = centerX - xOffset;
      if (leftX > 20) {
        this.drawBar(leftX, centerY, barHeight);
      }
    }

    // Central glowing ambient ring
    this.drawCenterGlow(centerX, centerY);
  }

  drawBar(x, centerY, height) {
    this.ctx.beginPath();
    this.ctx.moveTo(x, centerY - height);
    this.ctx.lineTo(x, centerY + height);
    this.ctx.stroke();
  }

  drawCenterGlow(centerX, centerY) {
    const glowRadius = this.state === 'speaking' ? 36 + Math.sin(this.phase * 4) * 6 : 
                       this.state === 'listening' ? 32 + Math.sin(this.phase * 3) * 5 : 28;

    const radial = this.ctx.createRadialGradient(centerX, centerY, 4, centerX, centerY, glowRadius);
    radial.addColorStop(0, 'rgba(6, 182, 212, 0.4)');
    radial.addColorStop(0.7, 'rgba(59, 130, 246, 0.15)');
    radial.addColorStop(1, 'rgba(0, 0, 0, 0)');

    this.ctx.fillStyle = radial;
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY, glowRadius, 0, Math.PI * 2);
    this.ctx.fill();
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}
