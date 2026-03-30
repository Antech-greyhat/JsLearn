const themeButton = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const themeStatus = document.getElementById("theme-message");
const themeItems = document.querySelectorAll("#theme-dropdown li");

const themes = [
  { name: "light", message: "Light theme applied" },
  { name: "dark", message: "Dark theme applied" },
  { name: "ocean", message: "Ocean theme applied" }
];

// Toggle Logic
themeButton.addEventListener("click", () => {
  const isExpanded = themeButton.getAttribute("aria-expanded") === "true";
  themeButton.setAttribute("aria-expanded", !isExpanded);
  themeDropdown.hidden = isExpanded;
});

// Selection Logic
themeItems.forEach((item) => {
  item.addEventListener("click", () => {
    const selectedText = item.textContent; // e.g. "Light"
    
    // Find matching object (case-insensitive check)
    const themeData = themes.find(t => t.name.toLowerCase() === selectedText.toLowerCase());

    if (themeData) {
      // 1. Remove ANY existing theme classes from the body
      document.body.className = ""; 
      
      // 2. Add the specific theme-<name> class
      document.body.classList.add(`theme-${selectedText}`);

      // 3. Update the aria-live message
      themeStatus.textContent = themeData.message;

      // 4. Close the menu
      themeDropdown.hidden = true;
      themeButton.setAttribute("aria-expanded", "false");
    }
  });
});
