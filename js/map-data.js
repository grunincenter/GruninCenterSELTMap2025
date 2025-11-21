// map-data.js - Social Enterprise Legislative Data (CORRECTED - No duplicate years)

const legislativeData = {
  "2008": {
    "VT": { "forms": ["L3C"], "failed": [], "rescinded": [] }
  },
  
  "2009": {
    "VT": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "UT": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "MI": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "WY": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "IL": { "forms": ["L3C"], "failed": [], "rescinded": [] }
  },
  
  "2010": {
    "VT": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "UT": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "MI": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "WY": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "IL": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "MD": { "forms": ["BCORP"], "failed": [], "rescinded": [] },
    "NC": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "LA": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "ME": { "forms": ["L3C"], "failed": [], "rescinded": [] }
  },
  
  "2011": {
    "VT": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "UT": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "MI": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "WY": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "IL": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "MD": { "forms": ["BCORP"], "failed": [], "rescinded": [] },
    "NC": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "LA": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "ME": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "CA": { "forms": ["SPC"], "failed": [], "rescinded": [] },
    "OR": { "forms": [], "failed": ["L3C"], "rescinded": [] }
  },
  
  "2012": {
    "UT": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "CA": { "forms": ["SPC", "BCORP"], "failed": [], "rescinded": [] },
    "MD": { "forms": ["BCORP"], "failed": [], "rescinded": [] }
  },
  
  "2013": {
    "UT": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "CA": { "forms": ["SPC", "BCORP"], "failed": [], "rescinded": [] },
    "DE": { "forms": ["BCORP"], "failed": [], "rescinded": [] },
    "MD": { "forms": ["BCORP", "BLLC"], "failed": [], "rescinded": [] },
    "WY": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "LA": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "MI": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "RI": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "VT": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "ME": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "WA": { "forms": ["SPC"], "failed": [], "rescinded": [] },
    "TX": { "forms": ["SPC"], "failed": [], "rescinded": [] }
  },
  
  "2014": {
    "UT": { "forms": ["L3C", "BCORP"], "failed": [], "rescinded": [] },
    "CA": { "forms": ["SPC", "BCORP"], "failed": [], "rescinded": [] },
    "DE": { "forms": ["BCORP"], "failed": [], "rescinded": [] },
    "FL": { "forms": ["SPC"], "failed": [], "rescinded": [] },
    "OR": { "forms": ["BLLC"], "failed": [], "rescinded": [] },
    "NC": { "forms": [], "failed": [], "rescinded": ["L3C"] }
  },
  
  "2015": {
    "UT": { "forms": ["L3C", "BCORP"], "failed": [], "rescinded": [] },
    "CA": { "forms": ["SPC", "BCORP"], "failed": [], "rescinded": [] },
    "DE": { "forms": ["BCORP"], "failed": [], "rescinded": [] }
  },
  
  "2016": {
    "PA": { "forms": ["BLLC"], "failed": [], "rescinded": [] }
  },
  
  "2017": {
    "NV": { "forms": [], "failed": ["L3C"], "rescinded": [] },
    "KS": { "forms": ["BCORP"], "failed": [], "rescinded": [] },
    "TX": { "forms": ["BCORP", "SPC"], "failed": [], "rescinded": [] },
    "WI": { "forms": ["BCORP"], "failed": [], "rescinded": [] },
    "KY": { "forms": ["BCORP"], "failed": [], "rescinded": [] },
    "MS": { "forms": [], "failed": ["BCORP"], "rescinded": [] },
    "NC": { "forms": [], "failed": ["BCORP"], "rescinded": [] },
    "OH": { "forms": [], "failed": ["BCORP"], "rescinded": [] }
  },
  
  "2018": {
    "VT": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "UT": { "forms": ["L3C", "BCORP", "BLLC"], "failed": [], "rescinded": [] },
    "CA": { "forms": ["SPC", "BCORP"], "failed": [], "rescinded": [] },
    "DE": { "forms": ["BCORP", "BLLC", "SPBLP"], "failed": [], "rescinded": [] },
    "MS": { "forms": [], "failed": ["BCORP"], "rescinded": [] },
    "NY": { "forms": [], "failed": ["L3C"], "rescinded": [] }
  },
  
  "2019": {
    "ND": { "forms": [], "failed": ["BCORP"], "rescinded": [] },
    "OK": { "forms": ["BCORP"], "failed": [], "rescinded": [] },
    "MS": { "forms": [], "failed": ["BCORP"], "rescinded": [] },
    "ME": { "forms": ["BCORP"], "failed": [], "rescinded": [] }
  },
  
  "2020": {
    "NM": { "forms": ["BCORP"], "failed": [], "rescinded": [] },
    "OK": { "forms": ["BCORP"], "failed": ["BLLC"], "rescinded": [] },
    "AL": { "forms": ["BCORP"], "failed": [], "rescinded": [] },
    "MS": { "forms": [], "failed": ["BCORP"], "rescinded": [] },
    "GA": { "forms": ["BCORP"], "failed": [], "rescinded": [] },
    "OH": { "forms": ["BCORP"], "failed": [], "rescinded": [] }
  },
  
  "2021": {
    "WY": { "forms": [], "failed": ["BCORP"], "rescinded": [] },
    "IA": { "forms": ["BCORP"], "failed": [], "rescinded": [] },
    "MS": { "forms": [], "failed": ["BCORP"], "rescinded": [] }
  },
  
  "2022": {
    "MS": { "forms": [], "failed": ["BCORP"], "rescinded": [] }
  },
  
  "2023": {
    "WY": { "forms": [], "failed": ["BCORP"], "rescinded": [] },
    "MI": { "forms": [], "failed": [], "rescinded": [], "underConsideration": ["BCORP"] },
    "MS": { "forms": [], "failed": ["BCORP"], "rescinded": [] }
  },
  
  "2024": {
    "VT": { "forms": ["L3C"], "failed": [], "rescinded": [] },
    "UT": { "forms": ["L3C", "BCORP", "BLLC"], "failed": [], "rescinded": [] },
    "CA": { "forms": ["SPC", "BCORP"], "failed": [], "rescinded": [] },
    "DE": { "forms": ["BCORP", "BLLC", "SPBLP"], "failed": [], "rescinded": [] },
    "MI": { "forms": [], "failed": [], "rescinded": [], "underConsideration": ["BCORP"] },
    "MS": { "forms": [], "failed": ["BCORP"], "rescinded": [] }
  }
};

// Corporate form definitions
const corporateForms = {
  "SPC": "Social Purpose Corporation",
  "L3C": "Low-profit Limited Liability Company", 
  "BLLC": "Benefit Limited Liability Company",
  "SPBLP": "Social Purpose Benefit Limited Partnership",
  "BCORP": "Benefit Corporation"
};

// State name mappings
const stateNames = {
  "AL": "Alabama", "AK": "Alaska", "AZ": "Arizona", "AR": "Arkansas", "CA": "California",
  "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware", "FL": "Florida", "GA": "Georgia",
  "HI": "Hawaii", "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa",
  "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MD": "Maryland",
  "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi", "MO": "Missouri",
  "MT": "Montana", "NE": "Nebraska", "NV": "Nevada", "NH": "New Hampshire", "NJ": "New Jersey",
  "NM": "New Mexico", "NY": "New York", "NC": "North Carolina", "ND": "North Dakota", "OH": "Ohio",
  "OK": "Oklahoma", "OR": "Oregon", "PA": "Pennsylvania", "RI": "Rhode Island", "SC": "South Carolina",
  "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah", "VT": "Vermont",
  "VA": "Virginia", "WA": "Washington", "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming",
  "DC": "District of Columbia"
};

// Function to get activity status for a state in a given year
function getStateActivity(stateCode, year) {
  const yearData = legislativeData[year.toString()];
  if (!yearData || !yearData[stateCode]) {
    return { 
      status: "none", 
      emoji: "⚪", 
      forms: [], 
      failed: [], 
      rescinded: [],
      underConsideration: [],
      availableForms: calculateAvailableForms(stateCode, year)
    };
  }
  
  const stateData = yearData[stateCode];
  const formsCount = stateData.forms ? stateData.forms.length : 0;
  const failedCount = stateData.failed ? stateData.failed.length : 0;
  const rescindedCount = stateData.rescinded ? stateData.rescinded.length : 0;
  const underConsiderationCount = stateData.underConsideration ? stateData.underConsideration.length : 0;
  
  // Determine status and emoji based on THIS YEAR'S activity
  let status, emoji;
  
  if (rescindedCount > 0) {
    status = "rescinded";
    emoji = "⛔";
  } else if (underConsiderationCount > 0) {
    status = "underConsideration";
    emoji = "⏳";
  } else if (failedCount > 0 && formsCount === 0) {
    status = "failed";
    emoji = "❌";
  } else if (formsCount > 0) {
    status = "enacted";
    emoji = "✅";
  } else {
    status = "none";
    emoji = "⚪";
  }
  
  return {
    status: status,
    emoji: emoji,
    forms: stateData.forms || [],
    failed: stateData.failed || [],
    rescinded: stateData.rescinded || [],
    underConsideration: stateData.underConsideration || [],
    availableForms: calculateAvailableForms(stateCode, year)
  };
}

// Function to calculate what forms are available as of a given year
function calculateAvailableForms(stateCode, targetYear) {
  const availableForms = new Set();
  
  // Go through all years up to and including target year
  for (let year = 2008; year <= parseInt(targetYear); year++) {
    const yearData = legislativeData[year.toString()];
    if (yearData && yearData[stateCode]) {
      const stateData = yearData[stateCode];
      
      // Add enacted forms
      if (stateData.forms) {
        stateData.forms.forEach(form => availableForms.add(form));
      }
      
      // Remove rescinded forms
      if (stateData.rescinded) {
        stateData.rescinded.forEach(form => availableForms.delete(form));
      }
    }
  }
  
  return Array.from(availableForms);
}

// Function to get all available years
function getAvailableYears() {
  return Object.keys(legislativeData).map(year => parseInt(year)).sort((a, b) => a - b);
}

console.log("Map data loaded successfully");
console.log("Available years:", getAvailableYears());
