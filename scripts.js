/* =========================================
   scripts.js
   Rubric alignment:
   - External JS (HTML not cluttered)
   - Uniform style, comments linking HTML/JS
   - User input to call function
   - Browser events
   - Customization via user selection
   - Arrays
   - Dynamic text insertion
   - Conditionals (with simple validation)
   - Loop
   - Other JS (alert)
   ========================================= */

/* ====== Home (index.html) ====== */
// Browser event: highlight Gem of the Week on hover
function highlightGem() {
  const gem = document.getElementById("gem");
  if (gem) gem.style.backgroundColor = "#ffe066"; // accent color
}
function resetGem() {
  const gem = document.getElementById("gem");
  if (gem) gem.style.backgroundColor = "#e8f2ff"; // light blue from CSS
}

// Other JS: playful alert button
function surprise() {
  alert("🎉 You’ve unlocked a hidden gem: Eternal Flame Falls!");
}


/* ====== Regions (regions.html) ====== */
// Customize experience: show region-specific tip on selection/click
function showGem(region) {
  const el = document.getElementById("regionGem");
  if (!el) return;

  let message = "";
  if (region === "capital") {
    message = "Capital District tip: Stroll Washington Park at sunset.";
  } else if (region === "hudson") {
    message = "Hudson Valley tip: Pack a picnic for Storm King.";
  } else if (region === "western") {
    message = "Western NY tip: Try the brewery scene in Ellicottville.";
  } else if (region === "finger") {
    message = "Finger Lakes tip: Catch lake views after Taughannock Falls.";
  } else if (region === "north") {
    message = "North Country tip: Explore Ausable Chasm early to avoid crowds.";
  } else {
    message = "Select a region to see a local tip.";
  }

  el.textContent = message;
}


/* ====== Food (food.html) ====== */
// Array + dynamic text: pick a random dessert spot on load
const dessertSpots = [
  "Sweet Sue’s (Phoenicia)",
  "Vanilla Bean Bakery (Syracuse)",
  "A secret pie window near Taughannock"
];

window.addEventListener("load", () => {
  const dessertEl = document.getElementById("dessertSpot");
  if (dessertEl) {
    const choice = dessertSpots[Math.floor(Math.random() * dessertSpots.length)];
    dessertEl.textContent = `🍰 Featured Dessert: ${choice}`;
  }
});


/* ====== Events (events.html) ====== */
// Dynamic text: seasonal message
window.addEventListener("load", () => {
  const seasonalMsg = document.getElementById("seasonalMsg");
  if (seasonalMsg) {
    // Simple seasonal rotation (could be enhanced)
    const month = new Date().getMonth(); // 0-11
    let seasonText = "Explore year-round events across New York!";
    if ([11,0,1].includes(month)) seasonText = "❄️ Cozy winter events await!";
    else if ([2,3,4].includes(month)) seasonText = "🌸 Spring art walks and festivals!";
    else if ([5,6,7].includes(month)) seasonText = "☀️ Summer outdoor concerts and fairs!";
    else if ([8,9,10].includes(month)) seasonText = "🍁 Fall foliage hikes and harvest fests!";
    seasonalMsg.textContent = seasonText;
  }
});

// Loop: render a simple upcoming events list
window.addEventListener("load", () => {
  const eventList = document.getElementById("eventList");
  if (eventList) {
    const events = [
      "Winter Carnival (Saranac Lake)",
      "Hudson Valley Art Walk",
      "Maple Fest (Western NY)",
      "Finger Lakes Wine Weekend"
    ];
    let output = "<ul>";
    for (let i = 0; i < events.length; i++) {
      output += `<li>${events[i]}</li>`;
    }
    output += "</ul>";
    eventList.innerHTML = output;
  }
});


/* ====== Plan (plan.html) ====== */
// User input: personalized greeting
function greetUser() {
  const nameInput = document.getElementById("userName");
  const greeting = document.getElementById("greeting");
  if (!nameInput || !greeting) return;

  const name = nameInput.value.trim();
  // Conditional validation
  if (name.length === 0) {
    greeting.textContent = "Please enter your name to personalize your plan.";
    return;
  }
  greeting.textContent = `Hi ${name}, here’s a trip plan just for you!`;
}

// Conditionals + validation: budget-based suggestions
function checkBudget() {
  const budgetInput = document.getElementById("budget");
  const msg = document.getElementById("budgetMsg");
  if (!budgetInput || !msg) return;

  const raw = budgetInput.value.trim();
  const budget = Number(raw);

  // Validation
  if (raw.length === 0 || Number.isNaN(budget) || budget < 0) {
    msg.textContent = "Enter a valid non-negative budget amount.";
    return;
  }

  let suggestion = "";
  if (budget < 50) {
    suggestion = "Day trip: free parks, food trucks, and scenic walks.";
  } else if (budget < 150) {
    suggestion = "Weekend getaway: cozy stays and local eateries.";
  } else {
    suggestion = "Premium experience: boutique lodging and fine dining.";
  }
  msg.textContent = suggestion;
}