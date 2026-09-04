// Premium 3D Interactive Globe using Three.js
import * as THREE from 'three';

export class TravelGlobe {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.options = Object.assign({
      autoRotate: true,
      rotationSpeed: 0.002,
      onSelectPin: null
    }, options);

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.globeGroup = null;
    this.pins = [];
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.isDragging = false;
    this.previousMousePosition = { x: 0, y: 0 };
    this.targetRotation = { x: 0.2, y: 0 };
    this.currentRotation = { x: 0.2, y: 0 };

    this.init();
  }

  init() {
    const width = this.container.clientWidth || 500;
    const height = this.container.clientHeight || 450;

    // 1. Scene
    this.scene = new THREE.Scene();

    // 2. Camera
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.z = 240;

    // 3. Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.container.innerHTML = '';
    this.container.appendChild(this.renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xddeeff, 1.2);
    this.scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x3b82f6, 2.0);
    dirLight1.position.set(200, 150, 200);
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x06b6d4, 1.0);
    dirLight2.position.set(-200, -100, -100);
    this.scene.add(dirLight2);

    // 5. Globe Group
    this.globeGroup = new THREE.Group();
    this.scene.add(this.globeGroup);

    // 6. Earth Sphere with dynamic stylized canvas texture
    const globeRadius = 75;
    const globeGeo = new THREE.SphereGeometry(globeRadius, 64, 64);
    const globeTexture = this.createStylizedGlobeTexture();
    const globeMat = new THREE.MeshStandardMaterial({
      map: globeTexture,
      roughness: 0.7,
      metalness: 0.2,
      bumpScale: 0.05
    });
    this.globeMesh = new THREE.Mesh(globeGeo, globeMat);
    this.globeGroup.add(this.globeMesh);

    // 7. Atmosphere Halo
    const haloGeo = new THREE.SphereGeometry(globeRadius * 1.15, 64, 64);
    const haloMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.6 - dot(vNormal, vec3(0, 0, 1.0)), 2.2);
          gl_FragColor = vec4(0.23, 0.51, 0.96, 1.0) * intensity * 1.4;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true
    });
    const atmosphere = new THREE.Mesh(haloGeo, haloMat);
    this.globeGroup.add(atmosphere);

    // 8. Starfield Particles
    this.createStarfield();

    // 9. Location Pins
    this.createPins(globeRadius);

    // 10. Flight Arcs
    this.createFlightArcs(globeRadius);

    // 11. Event Listeners
    this.setupInteractions();

    // 12. Animation Loop
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);

    // Handle Resize
    window.addEventListener('resize', () => this.onResize());
  }

  createStylizedGlobeTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // Deep ocean gradient
    const oceanGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    oceanGrad.addColorStop(0, '#0a1026');
    oceanGrad.addColorStop(0.5, '#070b1a');
    oceanGrad.addColorStop(1, '#0a1026');
    ctx.fillStyle = oceanGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Longitude & Latitude glowing grid lines
    ctx.strokeStyle = 'rgba(59, 130, 246, 0.12)';
    ctx.lineWidth = 1.5;

    // Latitudes
    for (let y = 0; y <= canvas.height; y += 64) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
    // Longitudes
    for (let x = 0; x <= canvas.width; x += 64) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    // Stylized continent landmass dot matrices
    ctx.fillStyle = '#1e3a8a';
    this.drawStylizedContinents(ctx, canvas.width, canvas.height);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }

  drawStylizedContinents(ctx, w, h) {
    // Generates dot-cluster continent approximations for high-tech aesthetic
    const landClusters = [
      // Asia & India
      { cx: w * 0.72, cy: h * 0.42, rx: w * 0.18, ry: h * 0.2 },
      { cx: w * 0.68, cy: h * 0.48, rx: w * 0.08, ry: h * 0.12 }, // India
      // Europe
      { cx: w * 0.52, cy: h * 0.32, rx: w * 0.09, ry: h * 0.12 },
      // Africa
      { cx: w * 0.53, cy: h * 0.55, rx: w * 0.11, ry: h * 0.22 },
      // North America
      { cx: w * 0.24, cy: h * 0.32, rx: w * 0.16, ry: h * 0.18 },
      // South America
      { cx: w * 0.31, cy: h * 0.68, rx: w * 0.09, ry: h * 0.22 },
      // Australia
      { cx: w * 0.83, cy: h * 0.72, rx: w * 0.08, ry: h * 0.12 },
      // Japan / East Asia
      { cx: w * 0.86, cy: h * 0.38, rx: w * 0.04, ry: h * 0.1 }
    ];

    ctx.fillStyle = 'rgba(56, 189, 248, 0.45)';
    landClusters.forEach(cluster => {
      for (let i = 0; i < 400; i++) {
        const angle = Math.random() * Math.PI * 2;
        const rad = Math.pow(Math.random(), 0.6);
        const x = cluster.cx + Math.cos(angle) * cluster.rx * rad;
        const y = cluster.cy + Math.sin(angle) * cluster.ry * rad;
        ctx.beginPath();
        ctx.arc(x, y, 2 + Math.random() * 2, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    // Glowing shorelines
    ctx.fillStyle = 'rgba(99, 102, 241, 0.8)';
    landClusters.forEach(cluster => {
      for (let i = 0; i < 80; i++) {
        const angle = Math.random() * Math.PI * 2;
        const x = cluster.cx + Math.cos(angle) * cluster.rx * 0.75;
        const y = cluster.cy + Math.sin(angle) * cluster.ry * 0.75;
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  }

  createStarfield() {
    const starCount = 600;
    const starGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 800;
      positions[i + 1] = (Math.random() - 0.5) * 800;
      positions[i + 2] = (Math.random() - 0.5) * 800;

      // Subtle cyan/blue/white tint
      const tint = Math.random();
      colors[i] = 0.6 + tint * 0.4;
      colors[i + 1] = 0.8 + tint * 0.2;
      colors[i + 2] = 1.0;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.75
    });

    const stars = new THREE.Points(starGeo, starMat);
    this.scene.add(stars);
  }

  latLngToVector3(lat, lng, radius) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);

    return new THREE.Vector3(x, y, z);
  }

  createPins(radius) {
    const locations = [
      { id: 'darjeeling', name: 'Darjeeling', lat: 27.041, lng: 88.2663, color: 0x06b6d4 },
      { id: 'goa', name: 'Goa', lat: 15.2993, lng: 74.124, color: 0x3b82f6 },
      { id: 'tokyo', name: 'Tokyo', lat: 35.6762, lng: 139.6503, color: 0xec4899 },
      { id: 'paris', name: 'Paris', lat: 48.8566, lng: 2.3522, color: 0xa855f7 },
      { id: 'bali', name: 'Bali', lat: -8.4095, lng: 115.1889, color: 0x10b981 },
      { id: 'zurich', name: 'Swiss Alps', lat: 46.8182, lng: 8.2275, color: 0xf59e0b }
    ];

    locations.forEach(loc => {
      const pos = this.latLngToVector3(loc.lat, loc.lng, radius);
      
      // Pin head sphere
      const pinGeo = new THREE.SphereGeometry(2.4, 16, 16);
      const pinMat = new THREE.MeshBasicMaterial({ color: loc.color });
      const pinMesh = new THREE.Mesh(pinGeo, pinMat);
      pinMesh.position.copy(pos);
      pinMesh.userData = loc;

      // Glow beacon ring
      const ringGeo = new THREE.RingGeometry(2.8, 4.4, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: loc.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.copy(pos.clone().multiplyScalar(1.01));
      ringMesh.lookAt(new THREE.Vector3(0, 0, 0));

      // Pin stem
      const stemPoints = [pos, pos.clone().multiplyScalar(0.97)];
      const stemGeo = new THREE.BufferGeometry().setFromPoints(stemPoints);
      const stemMat = new THREE.LineBasicMaterial({ color: loc.color, linewidth: 2 });
      const stemLine = new THREE.Line(stemGeo, stemMat);

      this.globeGroup.add(pinMesh);
      this.globeGroup.add(ringMesh);
      this.globeGroup.add(stemLine);

      this.pins.push({ mesh: pinMesh, ring: ringMesh, loc: loc });
    });
  }

  createFlightArcs(radius) {
    const routes = [
      { from: { lat: 27.041, lng: 88.2663 }, to: { lat: 35.6762, lng: 139.6503 } }, // Darjeeling to Tokyo
      { from: { lat: 15.2993, lng: 74.124 }, to: { lat: 27.041, lng: 88.2663 } },   // Goa to Darjeeling
      { from: { lat: 48.8566, lng: 2.3522 }, to: { lat: 27.041, lng: 88.2663 } }    // Paris to Darjeeling
    ];

    routes.forEach(route => {
      const v1 = this.latLngToVector3(route.from.lat, route.from.lng, radius);
      const v2 = this.latLngToVector3(route.to.lat, route.to.lng, radius);

      // Great circle control point lifted into atmosphere
      const mid = v1.clone().add(v2).multiplyScalar(0.5);
      const distance = v1.distanceTo(v2);
      mid.normalize().multiplyScalar(radius + distance * 0.28);

      const curve = new THREE.QuadraticBezierCurve3(v1, mid, v2);
      const points = curve.getPoints(50);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);

      const material = new THREE.LineDashedMaterial({
        color: 0x60a5fa,
        dashSize: 3,
        gapSize: 2,
        transparent: true,
        opacity: 0.65
      });

      const line = new THREE.Line(geometry, material);
      line.computeLineDistances();
      this.globeGroup.add(line);
    });
  }

  setupInteractions() {
    const dom = this.renderer.domElement;

    dom.addEventListener('mousedown', e => {
      this.isDragging = true;
      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mousemove', e => {
      if (this.isDragging) {
        const deltaX = e.clientX - this.previousMousePosition.x;
        const deltaY = e.clientY - this.previousMousePosition.y;

        this.targetRotation.y += deltaX * 0.005;
        this.targetRotation.x += deltaY * 0.005;

        // Clamp x rotation to avoid flip
        this.targetRotation.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, this.targetRotation.x));

        this.previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    // Touch events for mobile/tablet
    dom.addEventListener('touchstart', e => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }, { passive: true });

    window.addEventListener('touchmove', e => {
      if (this.isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - this.previousMousePosition.x;
        const deltaY = e.touches[0].clientY - this.previousMousePosition.y;

        this.targetRotation.y += deltaX * 0.005;
        this.targetRotation.x += deltaY * 0.005;
        this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }, { passive: true });

    window.addEventListener('touchend', () => {
      this.isDragging = false;
    });

    // Pin click raycasting
    dom.addEventListener('click', e => {
      const rect = dom.getBoundingClientRect();
      this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);
      const pinMeshes = this.pins.map(p => p.mesh);
      const intersects = this.raycaster.intersectObjects(pinMeshes);

      if (intersects.length > 0) {
        const hitPin = intersects[0].object.userData;
        if (this.options.onSelectPin) {
          this.options.onSelectPin(hitPin);
        }
      }
    });
  }

  focusOnLocation(lat, lng) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);

    // Calculate target angles
    this.targetRotation.x = (phi - Math.PI / 2);
    this.targetRotation.y = -(theta - Math.PI / 2);
  }

  onResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  animate() {
    requestAnimationFrame(this.animate);

    if (this.globeGroup) {
      if (this.options.autoRotate && !this.isDragging) {
        this.targetRotation.y += this.options.rotationSpeed;
      }

      // Smooth interpolation (damping)
      this.currentRotation.x += (this.targetRotation.x - this.currentRotation.x) * 0.08;
      this.currentRotation.y += (this.targetRotation.y - this.currentRotation.y) * 0.08;

      this.globeGroup.rotation.x = this.currentRotation.x;
      this.globeGroup.rotation.y = this.currentRotation.y;

      // Pulse beacon rings
      const time = performance.now() * 0.003;
      this.pins.forEach((p, idx) => {
        const scale = 1 + Math.sin(time + idx) * 0.25;
        p.ring.scale.set(scale, scale, 1);
      });
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  destroy() {
    if (this.renderer && this.renderer.domElement && this.renderer.domElement.parentNode) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
    }
  }
}
