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
