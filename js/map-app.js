// map-app.js - Main application logic for SELT Map

class SELTMap {
  constructor() {
    this.currentYear = 2024;
    this.map = null;
    this.stateLayer = null;
    this.init();
  }

  init() {
    this.initializeMap();
    this.setupControls();
    this.loadStateData();
    this.updateDisplay();
  }

  initializeMap() {
    // Initialize the map with completely locked interaction
    this.map = L.map('map', {
      center: [39.8283, -98.5795], // Center of US
      zoom: 4,
      minZoom: 4,
      maxZoom: 4,
      zoomControl: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      boxZoom: false,
      keyboard: false,
      dragging: false, // Disable dragging to make it completely static
      touchZoom: false,
      tap: false
    });

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  setupControls() {
    console.log('Setting up controls...');
    
    // Year dropdown
    const yearSelect = document.getElementById('yearSelect');
    
    // Check if the function exists
    if (typeof getAvailableYears !== 'function') {
      console.error('getAvailableYears function not found!');
      yearSelect.innerHTML = '<option value="">Error: Data not loaded</option>';
      return;
    }
    
    const years = getAvailableYears();
    console.log('Available years:', years);
    
    if (!years || years.length === 0) {
      console.error('No years found in data!');
      yearSelect.innerHTML = '<option value="">No years available</option>';
      return;
    }
    
    // Clear and populate dropdown
    yearSelect.innerHTML = '';
    years.forEach(year => {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      if (year === this.currentYear) option.selected = true;
      yearSelect.appendChild(option);
    });

    console.log('Dropdown populated with', years.length, 'years');

    yearSelect.addEventListener('change', (e) => {
      const newYear = parseInt(e.target.value);
      console.log('Year dropdown changed from', this.currentYear, 'to', newYear);
      this.currentYear = newYear;
      console.log('Current year is now:', this.currentYear);
      console.log('About to call updateDisplay...');
      this.updateDisplay();
      console.log('updateDisplay completed!');
    });
  }

  async loadStateData() {
    console.log('Loading state data...');
    // Skip trying to load GeoJSON and just use fallback markers
    this.createFallbackMarkers();
  }

  createStateLayer(geoJsonData) {
    if (this.stateLayer) {
      this.map.removeLayer(this.stateLayer);
    }

    this.stateLayer = L.geoJSON(geoJsonData, {
      style: (feature) => this.getStateStyle(feature),
      onEachFeature: (feature, layer) => this.onEachFeature(feature, layer)
    }).addTo(this.map);
  }

  createFallbackMarkers() {
    // Clear any existing markers first
    this.map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        this.map.removeLayer(layer);
      }
    });

    // Fallback state coordinates for major states
    const stateCoords = {
      'CA': [36.7783, -119.4179], 'TX': [31.9686, -99.9018], 'FL': [27.7663, -82.6404],
      'NY': [42.1657, -74.9481], 'PA': [40.5908, -77.2098], 'IL': [40.3495, -88.9861],
      'OH': [40.3888, -82.7649], 'GA': [33.0406, -83.6431], 'NC': [35.5557, -79.3877],
      'MI': [43.3266, -84.5361], 'NJ': [40.2989, -74.5210], 'VA': [37.7693, -78.2057],
      'WA': [47.0379, -120.8510], 'AZ': [33.7298, -111.4312], 'MA': [42.2373, -71.5314],
      'TN': [35.7478, -86.7123], 'IN': [39.8647, -86.2604], 'MO': [38.4561, -92.2884],
      'MD': [39.0639, -76.8021], 'WI': [44.2619, -89.6165], 'CO': [39.0598, -105.3111],
      'MN': [45.6945, -93.9002], 'SC': [33.8191, -80.9066], 'AL': [32.3668, -86.7999],
      'LA': [31.1695, -91.8678], 'KY': [37.6681, -84.6701], 'OR': [44.5672, -122.1269],
      'OK': [35.5653, -96.9289], 'CT': [41.5978, -72.7554], 'UT': [40.1135, -111.8535],
      'NV': [38.3135, -117.0554], 'AR': [34.9513, -92.3809], 'MS': [32.7673, -89.6812],
      'KS': [38.5111, -96.8005], 'NM': [34.8375, -106.2371], 'NE': [41.1254, -98.2681],
      'WV': [38.4680, -80.9696], 'ID': [44.2394, -114.5103], 'HI': [21.1098, -157.5311],
      'NH': [43.4108, -71.5653], 'ME': [44.6939, -69.3819], 'RI': [41.6762, -71.5562],
      'MT': [46.9048, -110.3261], 'DE': [39.3498, -75.5148], 'SD': [44.2853, -100.2263],
      'ND': [47.5362, -99.7930], 'AK': [61.3025, -152.7764], 'VT': [44.0407, -72.7093],
      'WY': [42.7475, -107.2085], 'DC': [38.9072, -77.0369], 'IA': [42.0115, -93.2105]
    };

    console.log(`Creating markers for year ${this.currentYear}`);

    Object.entries(stateCoords).forEach(([stateCode, coords]) => {
      const activity = getStateActivity(stateCode, this.currentYear);
      console.log(`${stateCode}: ${activity.emoji} - ${activity.forms.join(', ')}`);
      
      const marker = L.marker(coords, {
        icon: this.createCustomIcon(activity.emoji)
      }).addTo(this.map);

      marker.bindPopup(this.createPopupContent(stateCode, activity));
    });
  }

  createCustomIcon(emoji) {
    return L.divIcon({
      html: `<div style="font-size: 12px; text-align: center; line-height: 1;">${emoji}</div>`,
      iconSize: [18, 18],
      className: 'custom-emoji-icon'
    });
  }

  getStateStyle(feature) {
    const stateCode = this.getStateCode(feature);
    const activity = getStateActivity(stateCode, this.currentYear);
    
    return {
      fillColor: '#4a90e2', // Uniform state color as requested
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }

  onEachFeature(feature, layer) {
    const stateCode = this.getStateCode(feature);
    const activity = getStateActivity(stateCode, this.currentYear);
    
    // Add emoji overlay
    const center = layer.getBounds().getCenter();
    const emojiMarker = L.marker(center, {
      icon: this.createCustomIcon(activity.emoji)
    }).addTo(this.map);

    // Add popup
    const popupContent = this.createPopupContent(stateCode, activity);
    layer.bindPopup(popupContent);
    emojiMarker.bindPopup(popupContent);

    // Store reference for updates
    layer.emojiMarker = emojiMarker;
  }

  getStateCode(feature) {
    // Try different possible property names for state codes and return the 2-letter code
    const code = feature.properties.postal || 
                 feature.properties.state_code || 
                 feature.properties.STUSPS ||
                 feature.properties.STATE ||
                 feature.properties.name;
    
    // If we got a full state name, convert it back to 2-letter code
    if (code && code.length > 2) {
      const stateEntry = Object.entries(stateNames).find(([abbrev, name]) => 
        name.toLowerCase() === code.toLowerCase()
      );
      return stateEntry ? stateEntry[0] : code;
    }
    
    return code ? code.toUpperCase() : code;
  }

  createPopupContent(stateCode, activity) {
    const stateName = stateNames[stateCode] || stateCode;
    
    // Debug logging
    console.log('State Code:', stateCode);
    console.log('State Name:', stateName);
    
    let content = `
      <div class="popup-content">
        <h3>${stateName} ${activity.emoji}</h3>
        <p><strong>Year:</strong> ${this.currentYear}</p>
    `;

    if (activity.forms.length > 0) {
      content += `<p><strong>Enacted Forms:</strong></p>`;
      content += `<ul>`;
      activity.forms.forEach(form => {
        const formName = corporateForms[form] || form;
        content += `<li><strong>${form}</strong> - ${formName}</li>`;
      });
      content += `</ul>`;
    }

    if (activity.failed.length > 0) {
      content += `<p><strong>Failed Legislation:</strong></p>`;
      content += `<ul>`;
      activity.failed.forEach(form => {
        const formName = corporateForms[form] || form;
        content += `<li><strong>${form}</strong> - ${formName}</li>`;
      });
      content += `</ul>`;
    }

    if (activity.rescinded.length > 0) {
      content += `<p><strong>Rescinded Forms:</strong></p>`;
      content += `<ul>`;
      activity.rescinded.forEach(form => {
        const formName = corporateForms[form] || form;
        content += `<li><strong>${form}</strong> - ${formName}</li>`;
      });
      content += `</ul>`;
    }

    if (activity.forms.length === 0 && activity.failed.length === 0 && activity.rescinded.length === 0) {
      content += `<p><em>No legislative activity this year</em></p>`;
    }

    content += `
        <button onclick="console.log('Clicking for state: ${stateCode}'); window.open('states/${stateCode.toLowerCase()}.html', '_blank')" 
                class="history-btn"
                style="background: linear-gradient(135deg, #00abce, #73a535); color: white; border: none; padding: 8px 15px; border-radius: 20px; cursor: pointer; font-size: 12px; margin-top: 10px; font-family: 'Montserrat', sans-serif; font-weight: 500;">
          View Complete Legislative History
        </button>
      </div>
    `;

    return content;
  }

  updateDisplay() {
    console.log(`Updating display for year ${this.currentYear}`);
    
    // Update existing markers/layers
    if (this.stateLayer) {
      this.stateLayer.eachLayer((layer) => {
        const stateCode = this.getStateCode(layer.feature);
        const activity = getStateActivity(stateCode, this.currentYear);
        
        // Update emoji marker
        if (layer.emojiMarker) {
          layer.emojiMarker.setIcon(this.createCustomIcon(activity.emoji));
          const popupContent = this.createPopupContent(stateCode, activity);
          layer.emojiMarker.bindPopup(popupContent);
          layer.bindPopup(popupContent);
        }
      });
    } else {
      // If using fallback markers, recreate them
      this.map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          this.map.removeLayer(layer);
        }
      });
      this.createFallbackMarkers();
    }
    
    // Update any year display elements
    const yearElements = document.querySelectorAll('.current-year');
    yearElements.forEach(element => {
      element.textContent = this.currentYear;
    });
  }
}

// Initialize the map when the page loads
document.addEventListener('DOMContentLoaded', () => {
  new SELTMap();
});