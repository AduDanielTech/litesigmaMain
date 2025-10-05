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


document.addEventListener("DOMContentLoaded", () => {
    const words = [
      "INNOVATIVE TECH SOLUTIONS",
      "POWERFUL SAAS TOOLS",
      "SCALABLE SYSTEMS"
    ];

    const dynamicText = document.getElementById("dynamic-text");
    let index = 0;

    function changeWord() {
      dynamicText.style.animation = "fadeOutText 0.6s forwards";
      setTimeout(() => {
        dynamicText.textContent = words[index];
        dynamicText.style.animation = "fadeInText 0.6s forwards";
        index = (index + 1) % words.length;
      }, 600);
    }

    // Start 3 seconds after page load
    setTimeout(() => {
      changeWord(); // immediately show next
      setInterval(changeWord, 3000); // change every 3s
    }, 3000);
  });