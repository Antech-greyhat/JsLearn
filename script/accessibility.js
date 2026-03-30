// Accessibility: Tabbed Interface


const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // 1. Reset all tabs to unselected
    tabs.forEach(t => t.setAttribute("aria-selected", "false"));
    
    // 2. Hide all panels
    panels.forEach(p => p.hidden = true);

    // 3. Select the clicked tab
    tab.setAttribute("aria-selected", "true");
    
    // 4. Find the panel linked via aria-controls and show it
    const associatedPanel = tab.getAttribute("aria-controls");
    const panel = document.getElementById(associatedPanel);
    
    if (panel) {
      panel.hidden = false;
    }
  });
});