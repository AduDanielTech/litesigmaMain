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



  /* Theme toggle logic: detect OS preference, persist choice, and react to changes. */
(function () {
  const storageKey = 'site-theme';
  const themeToggle = document.getElementById('theme-toggle');
  const icon = themeToggle ? themeToggle.querySelector('.icon') : null;
  const root = document.documentElement;

  // Return 'dark' or 'light'
  function detectOSTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  function applyTheme(theme) {
    // Apply to <html> so CSS selectors like html[data-theme="light"] work
    root.setAttribute('data-theme', theme);

    // Update accessible state & icon
    if (themeToggle) {
      const isDark = theme === 'dark';
      themeToggle.setAttribute('aria-pressed', String(isDark));
      if (icon) icon.textContent = isDark ? '🌙' : '☀️';
    }
  }

  // Load saved theme or detect and apply
  const saved = localStorage.getItem(storageKey);
  if (saved === 'light' || saved === 'dark') {
    applyTheme(saved);
  } else {
    // No saved choice — use OS preference
    applyTheme(detectOSTheme());
  }

  // Listen to toggle clicks
  if (themeToggle) {
    themeToggle.addEventListener('click', function (e) {
      e.preventDefault();
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem(storageKey, next);
      applyTheme(next);
    });
  }

  // If the user hasn't explicitly chosen a theme, follow OS changes in real time
  // Only auto-apply if there is no saved theme
  if (!saved && window.matchMedia) {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener
      ? mq.addEventListener('change', (e) => applyTheme(e.matches ? 'dark' : 'light'))
      : mq.addListener((e) => applyTheme(e.matches ? 'dark' : 'light'));
  }

  // Expose a tiny hook for devs (optional)
  window.__applyTheme = applyTheme;
})();
