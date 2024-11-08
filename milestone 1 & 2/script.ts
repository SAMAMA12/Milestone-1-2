document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggleSkills") as HTMLButtonElement | null;
    const skill = document.getElementById("skills") as HTMLElement | null;
  
    if (toggleBtn && skill) {
      toggleBtn.addEventListener("click", () => {
        // Check current display state of the skills section
        if (skill.style.display === "none" || skill.style.display === "") {
          skill.style.display = "block";
          toggleBtn.textContent = "Hide Skills"; // Update button text
        } else {
          skill.style.display = "none";
          toggleBtn.textContent = "Show Skills"; // Update button text
        }
      });
    } else {
      console.error("Button or skills section not found.");
    }
  });
  