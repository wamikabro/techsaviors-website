const navLinks = document.querySelectorAll(".nav-list li");

console.log(navLinks);

navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    // Add the animation classes
    link.classList.add("animate__animated", "animate__swing");
  });

  link.addEventListener("animationend", () => {
    // Remove the animation classes
    link.classList.remove("animate__animated", "animate__swing");
  });
});

// Array of text options to animate
const textOptions = ["Web Design", "Development", "Video Editing", "Marketing"];
let currentIndex = 0;

// Reference to the animated text element
const animatedText = document.getElementById("animated-text");

// Function to update text and reset animation
function updateText() {
  // Update the text content
  animatedText.textContent = textOptions[currentIndex];

  // Restart animation
  animatedText.style.animation = "none";
  void animatedText.offsetWidth; // Trigger reflow to restart the animation
  animatedText.style.animation = "slideUp 2s infinite";

  // Move to the next text option, loop back to the start if needed
  currentIndex = (currentIndex + 1) % textOptions.length;
}

// Initialize the first text option immediately
updateText();

// Start updating text every 2 seconds
setInterval(updateText, 2000);
