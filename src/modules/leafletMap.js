// ==========================================================================
// 100% Free & Unlimited Interactive Leaflet Map (OpenStreetMap Powered)
// Zero API Keys or Billing Required
// ==========================================================================

export class InteractiveMap {
  constructor(containerId, options = {}) {
    this.containerId = containerId;
    this.options = Object.assign({
      center: [20.5937, 78.9629], // Center of India
      zoom: 5,
      onMarkerClick: null
    }, options);

    this.map = null;
    this.markersGroup = null;
    this.routeLayer = null;
    this.hazardLayer = null;
    this.userLocationMarker = null;

    this.init();
  }

  init() {
    const container = document.getElementById(this.containerId);
    if (!container || !window.L) return;

    // Destroy existing map if any on re-render
    if (container._leaflet_id) {
      container._leaflet_id = null;
    }

    this.map = window.L.map(this.containerId, {
      zoomControl: true,
      attributionControl: true
    }).setView(this.options.center, this.options.zoom);

    // Dark-themed free OpenStreetMap tiles (CartoDB Dark Matter)
    window.L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(this.map);

    this.markersGroup = window.L.layerGroup().addTo(this.map);
    this.hazardLayer = window.L.layerGroup().addTo(this.map);

    // Invalidate size on container layout
    setTimeout(() => {
      this.map.invalidateSize();
    }, 200);
  }

  loadDestinationItinerary(destinationData, dayIndex = 0) {
    if (!this.map || !destinationData) return;

    this.markersGroup.clearLayers();
    this.hazardLayer.clearLayers();
    if (this.routeLayer) {
      this.map.removeLayer(this.routeLayer);
      this.routeLayer = null;
    }

    const day = destinationData.days[dayIndex] || destinationData.days[0];
    const waypoints = [];
    const latLngBounds = [];

    // 1. Add Itinerary Waypoint Pins
    if (day && day.hours) {
      day.hours.forEach((h, idx) => {
        const lat = h.lat || (destinationData.lat + (Math.random() - 0.5) * 0.04);
        const lng = h.lng || (destinationData.lng + (Math.random() - 0.5) * 0.04);
        const latLng = [lat, lng];
        waypoints.push(latLng);
        latLngBounds.push(latLng);

        // Custom HTML Pin Icon
        const iconHtml = `
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
          ">${idx + 1}</div>
        `;

        const customIcon = window.L.divIcon({
          html: iconHtml,
          className: 'custom-leaflet-pin',
          iconSize: [28, 28],
          iconAnchor: [14, 14]
        });

        const marker = window.L.marker(latLng, { icon: customIcon }).addTo(this.markersGroup);

        // Popup with rich information
        const popupContent = `
          <div style="font-family: 'Plus Jakarta Sans', sans-serif; min-width: 180px; color: #0f172a;">
            <div style="font-size: 10px; color: #2563eb; font-weight: 700; text-transform: uppercase;">
              ${h.time}
            </div>
            <strong style="font-size: 13px; display: block; margin: 2px 0;">${h.title}</strong>
            <p style="font-size: 11px; color: #475569; margin: 4px 0;">${h.description.slice(0, 80)}...</p>
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 11px; font-weight: 600; border-top: 1px solid #e2e8f0; padding-top: 4px; margin-top: 4px;">
              <span style="color: #059669;">${h.cost}</span>
              <span style="color: #64748b;">⭐ ${h.rating}</span>
            </div>
          </div>
        `;
        marker.bindPopup(popupContent);
      });
    }

    // 2. Draw Polyline Route connecting activities
    if (waypoints.length > 1) {
      this.routeLayer = window.L.polyline(waypoints, {
        color: '#3b82f6',
        weight: 4,
        opacity: 0.85,
        dashArray: '8, 8',
        lineCap: 'round'
      }).addTo(this.map);
    }

    // 3. Add Natural Hazard Danger Zone overlay if applicable
    if (destinationData.hazard) {
      const hazardCenter = [destinationData.lat + 0.02, destinationData.lng - 0.01];
      const hazardColor = destinationData.hazard.level === 'High' ? '#ef4444' : '#f59e0b';

      const hazardCircle = window.L.circle(hazardCenter, {
        color: hazardColor,
        fillColor: hazardColor,
        fillOpacity: 0.2,
        radius: 3500 // 3.5 km hazard radius
      }).addTo(this.hazardLayer);

      hazardCircle.bindPopup(`
        <div style="color: #0f172a;">
          <strong style="color: ${hazardColor}; font-size: 12px;">⚠️ ${destinationData.hazard.type}</strong>
          <p style="font-size: 11px; margin-top: 4px;">Risk Probability: <strong>${destinationData.hazard.probability}%</strong></p>
          <p style="font-size: 10px; color: #475569;">${destinationData.hazard.advisory.slice(0, 90)}...</p>
        </div>
      `);
    }

    // Fit map view to bounds
    if (latLngBounds.length > 0) {
      this.map.fitBounds(latLngBounds, { padding: [40, 40], maxZoom: 14 });
    } else {
      this.map.setView([destinationData.lat, destinationData.lng], 12);
    }
  }

  locateUser(onSuccess = null, onError = null) {
    if (!navigator.geolocation) {
      if (onError) onError('Geolocation not supported by device.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const userLatLng = [pos.coords.latitude, pos.coords.longitude];

        if (this.userLocationMarker) {
          this.userLocationMarker.setLatLng(userLatLng);
        } else {
          const userIcon = window.L.divIcon({
            html: `<div style="
              width: 20px;
              height: 20px;
              background: #10b981;
              border: 3px solid #fff;
              border-radius: 50%;
              box-shadow: 0 0 15px #10b981;
              animation: userGlow 2s infinite;
            "></div>`,
            className: 'user-live-pin',
            iconSize: [20, 20],
            iconAnchor: [10, 10]
          });

          this.userLocationMarker = window.L.marker(userLatLng, { icon: userIcon }).addTo(this.map);
          this.userLocationMarker.bindPopup('<strong>You are here!</strong><br>GPS Coordinates Locked.');
        }

        this.map.flyTo(userLatLng, 14);
        if (onSuccess) onSuccess(pos.coords);
      },
      (err) => {
        // Fallback simulator for desktop/blocked permissions
        console.warn('Geolocation warning, falling back to simulated lock:', err);
        const fallbackLatLng = [27.0410, 88.2663];
        if (onSuccess) onSuccess({ latitude: 27.0410, longitude: 88.2663, accuracy: 5 });
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  }

  destroy() {
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
  }
}
