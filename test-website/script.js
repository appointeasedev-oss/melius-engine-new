// Mobile menu toggle functionality
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
function toggleMenu() {
  navMenu.classList.toggle('active');
  mobileMenu.setAttribute('aria-expanded', navMenu.classList.contains('active'));
  
  // Animate hamburger icon with smooth transitions
  const bars = mobileMenu.querySelectorAll('.bar');
  bars.forEach((bar, index) => {
    if (navMenu.classList.contains('active')) {
      if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
      if (index === 1) bar.style.opacity = '0';
      if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
      bar.style.transform = 'none';
      bar.style.opacity = '1';
    }
  });
}

// Close mobile menu when clicking on a link
function closeMenu() {
  navMenu.classList.remove('active');
  mobileMenu.setAttribute('aria-expanded', 'false');
  
  // Reset hamburger icon
  const bars = mobileMenu.querySelectorAll('.bar');
  bars.forEach((bar, index) => {
    bar.style.transform = 'none';
    bar.style.opacity = '1';
  });
}

// Event listeners
mobileMenu.addEventListener('click', toggleMenu);
navLinks.forEach(link => link.addEventListener('click', closeMenu));

// Close mobile menu when clicking outside with improved detection
document.addEventListener('click', (event) => {
  if (!mobileMenu.contains(event.target) && !navMenu.contains(event.target) && !event.target.closest('.mobile-nav')) {
    closeMenu();
  }
});

// Keyboard navigation support
mobileMenu.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    toggleMenu();
  }
});

navLinks.forEach(link => {
  link.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      link.click();
    }
  });
});

// Smooth scroll for navigation links with better error handling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Quote button functionality with enhanced UX
const quoteBtn = document.getElementById('quote-btn');
const quoteText = document.getElementById('quote-text');

const quotes = [
  "You have power over your mind — not outside events. Realize this, and you will find strength.",
  "The happiness of your life depends upon the quality of your thoughts.",
  "Waste no more time arguing about what a good man should be. Be one.",
  "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
  "If it is not right, do not do it; if it is not true, do not say it."
];

let currentQuoteIndex = 0;

function showRandomQuote() {
  let newIndex;
  do {
    newIndex = Math.floor(random() * quotes.length);
  } while (newIndex === currentQuoteIndex);
  
  currentQuoteIndex = newIndex;
  quoteText.textContent = quotes[currentQuoteIndex];
  quoteText.style.opacity = '0';
  
  setTimeout(() => {
    quoteText.style.transition = 'opacity 0.5s';
    quoteText.style.opacity = '1';
  }, 100);
}

quoteBtn.addEventListener('click', showRandomQuote);

// Keyboard support for quote button
quoteBtn.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    showRandomQuote();
  }
});

// Initial quote with loading state
showRandomQuote();

// Accessibility improvements with better focus management
navMenu.setAttribute('aria-hidden', 'true');
navLinks.forEach(link => {
  link.setAttribute('tabindex', '-1');
});

// Update aria attributes when menu opens/closes with transition handling
navMenu.addEventListener('transitionend', () => {
  const isOpen = navMenu.classList.contains('active');
  navMenu.setAttribute('aria-hidden', !isOpen);
  navLinks.forEach(link => {
    link.setAttribute('tabindex', isOpen ? '0' : '-1');
  });
});

// Mobile menu auto-close on window resize with debounce
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
      closeMenu();
    }
  }, 250);
});

// Loading state for better UX with improved timing
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s';
    document.body.style.opacity = '1';
  }, 100);
});

// Enhanced button interactions
const buttons = document.querySelectorAll('button, [role="button"]');
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.05)';
    button.style.transition = 'transform 0.2s';
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
  });
  
  button.addEventListener('click', () => {
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 100);
  });
});

// Improved touch support for mobile devices
document.addEventListener('touchstart', (event) => {
  if (event.target.closest('.nav-link')) {
    event.target.closest('.nav-link').style.opacity = '0.7';
  }
});

document.addEventListener('touchend', (event) => {
  if (event.target.closest('.nav-link')) {
    event.target.closest('.nav-link').style.opacity = '1';
  }
});

// Console error handling for better debugging
window.addEventListener('error', (event) => {
  console.error('JavaScript error:', event.error);
});

// Performance optimization: Debounce scroll events
let scrollTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    // Scroll-related operations can go here
  }, 100);
});

// Enhanced mobile menu with improved accessibility
const mobileNav = document.querySelector('.mobile-nav');
mobileNav.setAttribute('aria-label', 'Main navigation menu');

// Enhanced focus management for better accessibility
const focusableElements = navMenu.querySelectorAll('a, button, input, select, textarea');
focusableElements.forEach(element => {
  element.addEventListener('focus', () => {
    element.style.outline = '2px solid var(--hieroglyph-gold)';
    element.style.outlineOffset = '2px';
  });
  
  element.addEventListener('blur', () => {
    element.style.outline = 'none';
  });
});

// Enhanced keyboard navigation support
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navMenu.classList.contains('active')) {
    closeMenu();
  }
});

// Enhanced loading state with better UX
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s';
    document.body.style.opacity = '1';
  }, 100);
});

// Enhanced button interactions with better feedback
const allButtons = document.querySelectorAll('button, [role="button"]');
allButtons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.05)';
    button.style.transition = 'transform 0.2s';
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
  });
  
  button.addEventListener('click', () => {
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 100);
  });
});

// Enhanced touch support for mobile devices
document.addEventListener('touchstart', (event) => {
  if (event.target.closest('.nav-link')) {
    event.target.closest('.nav-link').style.opacity = '0.7';
  }
});

document.addEventListener('touchend', (event) => {
  if (event.target.closest('.nav-link')) {
    event.target.closest('.nav-link').style.opacity = '1';
  }
});

// Enhanced console error handling for better debugging
window.addEventListener('error', (event) => {
  console.error('JavaScript error:', event.error);
});

// Enhanced performance optimization: Debounce scroll events
let scrollTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    // Scroll-related operations can go here
  }, 100);
});

// Enhanced mobile menu auto-close on window resize with debounce
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
      closeMenu();
    }
  }, 250);
});

// Helper function for random number generation
function random() {
  return Math.random();
}