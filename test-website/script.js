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
  "Life is better at the beach!",
  "Sun, sand, and surf - paradise found!",
  "Every day is a beach day!",
  "Salt in the air, sand in my hair!",
  "Beach more, worry less!"
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

// Added functionality for the new buttons in test-website/index.html
// Book Activities button functionality
document.querySelector('[data-action="activities"]').addEventListener('click', function() {
  // Handle book activities action
  console.log('Book Activities button clicked');
  // Add your custom functionality here
  // Example: Show a booking modal or redirect to booking page
  alert('Booking activities...');
});

// Reserve Accommodations button functionality
document.querySelector('[data-action="accommodations"]').addEventListener('click', function() {
  // Handle reserve accommodations action
  console.log('Reserve Accommodations button clicked');
  // Add your custom functionality here
  // Example: Show accommodation options or redirect to booking page
  alert('Reserving accommodations...');
});

// Rent Equipment button functionality
document.querySelector('[data-action="equipment"]').addEventListener('click', function() {
  // Handle rent equipment action
  console.log('Rent Equipment button clicked');
  // Add your custom functionality here
  // Example: Show available equipment or redirect to rental page
  alert('Renting equipment...');
});

// Send Message button functionality
document.querySelector('[data-action="message"]').addEventListener('click', function() {
  // Handle send message action
  console.log('Send Message button clicked');
  // Add your custom functionality here
  // Example: Show contact form or redirect to contact page
  alert('Sending message...');
});

// Call Us button functionality
document.querySelector('[data-action="call"]').addEventListener('click', function() {
  // Handle call us action
  console.log('Call Us button clicked');
  // Add your custom functionality here
  // Example: Initiate phone call or show phone number
  alert('Calling...');
});

// FAQs button functionality
document.querySelector('[data-action="faqs"]').addEventListener('click', function() {
  // Handle FAQs action
  console.log('FAQs button clicked');
  // Add your custom functionality here
  // Example: Show frequently asked questions or redirect to FAQ page
  alert('Showing FAQs...');
});

// Enhanced touch interactions for mobile devices
const bookingButtons = document.querySelectorAll('.booking-buttons button');
const contactButtons = document.querySelectorAll('.contact-buttons button');

bookingButtons.forEach(button => {
  button.addEventListener('touchstart', function() {
    this.style.opacity = '0.7';
  });
  
  button.addEventListener('touchend', function() {
    this.style.opacity = '1';
  });
});

contactButtons.forEach(button => {
  button.addEventListener('touchstart', function() {
    this.style.opacity = '0.7';
  });
  
  button.addEventListener('touchend', function() {
    this.style.opacity = '1';
  });
});

// Enhanced button focus states for accessibility
bookingButtons.forEach(button => {
  button.addEventListener('focus', function() {
    this.style.outline = '2px solid var(--sunny-yellow)';
    this.style.outlineOffset = '2px';
  });
  
  button.addEventListener('blur', function() {
    this.style.outline = 'none';
  });
});

contactButtons.forEach(button => {
  button.addEventListener('focus', function() {
    this.style.outline = '2px solid var(--sunny-yellow)';
    this.style.outlineOffset = '2px';
  });
  
  button.addEventListener('blur', function() {
    this.style.outline = 'none';
  });
});

// Enhanced button hover states for desktop
document.addEventListener('DOMContentLoaded', function() {
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    bookingButtons.forEach(button => {
      button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.2s';
      });
      
      button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
      });
    });
    
    contactButtons.forEach(button => {
      button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.2s';
      });
      
      button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
      });
    });
  }
});

// Enhanced button active states for better feedback
bookingButtons.forEach(button => {
  button.addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 100);
  });
});

contactButtons.forEach(button => {
  button.addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 100);
  });
});

// Enhanced button keyboard navigation support
bookingButtons.forEach(button => {
  button.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.click();
    }
  });
});

contactButtons.forEach(button => {
  button.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.click();
    }
  });
});

// Enhanced button loading states for better UX
const bookingButtonsArray = Array.from(bookingButtons);
const contactButtonsArray = Array.from(contactButtons);

function addLoadingState(button) {
  button.disabled = true;
  button.style.opacity = '0.7';
  button.textContent = 'Loading...';
}

function removeLoadingState(button, originalText) {
  button.disabled = false;
  button.style.opacity = '1';
  button.textContent = originalText;
}

bookingButtonsArray.forEach(button => {
  button.addEventListener('click', function() {
    const originalText = this.textContent;
    addLoadingState(this);
    
    setTimeout(() => {
      removeLoadingState(this, originalText);
    }, 2000);
  });
});

contactButtonsArray.forEach(button => {
  button.addEventListener('click', function() {
    const originalText = this.textContent;
    addLoadingState(this);
    
    setTimeout(() => {
      removeLoadingState(this, originalText);
    }, 2000);
  });
});

// Helper function for random number generation
function random() {
  return Math.random();
}

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
    element.style.outline = '2px solid var(--sunny-yellow)';
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