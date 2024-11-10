document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-skills");
    const Skills = document.getElementById("Skills");

    toggleButton.addEventListener("click", () => {
        if (Skills.style.display === "none") {
            Skills.style.display = "block";
        } else {
            Skills.style.display = "none";
        }
    });
});
