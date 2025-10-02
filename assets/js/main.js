new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // Animate.css prefix
    offset:       0,          // distance from the bottom of the screen
    mobile:       true,       // trigger on mobile
    live:         true        // act on asynchronously loaded content
  }).init();

 




  document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("header nav");

  // Create overlay dynamically
  const overlay = document.createElement("div");
  overlay.classList.add("nav-overlay");
  document.body.appendChild(overlay);

  const toggleMenu = () => {
    nav.classList.toggle("active");
    overlay.classList.toggle("active");
  };

  hamburger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu); // close if overlay is clicked
});