// Scroll Reveal (Intersection Observer)
(function() {
  var reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  // Skip if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    reveals.forEach(function(el) { el.classList.add('revealed'); });
    return;
  }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(function(el) {
    // Elements already in viewport on load
    var rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('revealed');
    } else {
      observer.observe(el);
    }
  });
})();

// Mobile Nav Toggle
(function() {
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  if (!navToggle || !navLinks) return;

  navToggle.addEventListener('click', function() {
    navLinks.classList.toggle('open');
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      navLinks.classList.remove('open');
    });
  });
})();

// Nav background on scroll
(function() {
  var nav = document.querySelector('.nav');
  if (!nav) return;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      nav.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
    } else {
      nav.style.borderBottomColor = 'transparent';
    }
  }, { passive: true });

  // Initial state
  if (window.scrollY <= 50) {
    nav.style.borderBottomColor = 'transparent';
  }
})();
