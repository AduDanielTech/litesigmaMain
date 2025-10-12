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
  console.log("im work")

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



/* Theme toggle + logo swap */
(function () {
  const storageKey = 'site-theme';
  const themeToggle = document.getElementById('theme-toggle');
  const icon = themeToggle ? themeToggle.querySelector('.icon') : null;
  const root = document.documentElement;
  const logo = document.getElementById('site-logo');
  const footerLogo = document.getElementById('site-logo-footer');

  const logoDark = 'assets/images/litesigma_logo.webp';
  const logoLight = 'assets/images/litesigma_logo_light.png';

  function detectOSTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);

    if (themeToggle) {
      const isDark = theme === 'dark';
      themeToggle.setAttribute('aria-pressed', String(isDark));
      if (icon) icon.textContent = isDark ? '🌙' : '☀️';
    }

    if (logo) {
      logo.src = theme === 'dark' ? logoDark : logoLight;
    }
    if (footerLogo) {
      footerLogo.src = theme === 'dark' ? logoDark : logoLight;
    }
  }

  // initial theme (saved > OS)
  const saved = localStorage.getItem(storageKey);
  if (saved === 'dark' || saved === 'light') {
    applyTheme(saved);
  } else {
    applyTheme(detectOSTheme());
  }

  // toggle click
  if (themeToggle) {
    themeToggle.addEventListener('click', function (e) {
      e.preventDefault();
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem(storageKey, next);
      applyTheme(next);
    });
  }

  // follow OS preference if no manual override
  if (!saved && window.matchMedia) {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener
      ? mq.addEventListener('change', (e) => applyTheme(e.matches ? 'dark' : 'light'))
      : mq.addListener((e) => applyTheme(e.matches ? 'dark' : 'light'));
  }
})();

