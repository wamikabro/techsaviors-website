const navLinks = document.querySelectorAll(".nav-list li");

navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.classList.add("animate__animated", "animate__swing");
  });

  link.addEventListener("animationend", () => {
    link.classList.remove("animate__animated", "animate__swing");
  });
});

// Array of text options to animate
const textOptions = [
  "Web Design",
  "Development",
  "Video Editing",
  "Marketing",
  "SEO",
  "Logo Design",
  "Branding",
  "Product Design",
  "Management",
];
let currentIndex = 0;

// Reference to the animated text element and container
const animatedText = document.getElementById("animated-text");
const container = animatedText.parentElement;

// Function to update text and reset animation
function updateText() {
  // Update the text content
  animatedText.textContent = textOptions[currentIndex];

  // Measure the new width and update container width
  const newWidth = animatedText.offsetWidth + 20 + "px";
  container.style.width = newWidth; // Set the width based on the new text

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

//Swiper Script

new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
