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
  "The black holes of nature are the most perfect macroscopic objects there are in the universe: the only elements in their construction are our concepts of space and time.",
  "Black holes are where God divided by zero.",
  "A black hole is a region of spacetime where gravity is so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from it.",
  "The event horizon is the point of no return; once crossed, the black hole's gravity is too strong to escape.",
  "Black holes are the most efficient engines in the universe, converting mass into energy with near-perfect efficiency."
];

let currentQuoteIndex = 0;

function showRandomQuote() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * quotes.length);
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

// Slide navigation
const slideContainer = document.querySelector('.slide-container');
const prevSlide = document.getElementById('prev-slide');
const nextSlide = document.getElementById('next-slide');
const currentSlide = document.getElementById('current-slide');
const totalSlides = document.getElementById('total-slides');
const slideContent = document.getElementById('slide-content');

const slides = [
  {
    title: 'Formation of Black Holes',
    content: 'Black holes are formed through the gravitational collapse of massive stars. When a star with a mass greater than about 20 times that of our Sun exhausts its nuclear fuel, it can no longer support itself against its own gravity and collapses under its own weight.',
    image: '🌀'
  },
  {
    title: 'Types of Black Holes',
    content: 'There are several types of black holes, each with unique characteristics and formation processes. Understanding these types helps us comprehend the diversity of these cosmic phenomena.',
    image: '⚫'
  },
  {
    title: 'Effects of Black Holes',
    content: 'Black holes have profound effects on their surroundings and the universe at large. Their immense gravitational pull influences the behavior of nearby matter and light.',
    image: '💫'
  }
];

let currentSlideIndex = 0;
totalSlides.textContent = slides.length;

function showSlide(index) {
  const slide = slides[index];
  slideContent.innerHTML = `
    <div class="slide">
      <h3>${slide.title}</h3>
      <p>${slide.content}</p>
      <div class="slide-image">${slide.image}</div>
    </div>
  `;
  currentSlide.textContent = index + 1;
}

prevSlide.addEventListener('click', function() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlide(currentSlideIndex);
});

nextSlide.addEventListener('click', function() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
});

showSlide(currentSlideIndex);

// Added functionality for the new buttons in test-website/index.html
// Book Activities button functionality
document.querySelector('[data-action="research"]').addEventListener('click', function() {
  // Handle access research papers action
  console.log('Research Papers button clicked');
  // Add your custom functionality here
  // Example: Show a modal or redirect to research page
  alert('Accessing research papers...');
});

// Simulations button functionality
document.querySelector('[data-action="simulations"]').addEventListener('click', function() {
  // Handle view simulations action
  console.log('Simulations button clicked');
  // Add your custom functionality here
  // Example: Show simulations or redirect to simulations page
  alert('Viewing simulations...');
});

// Webinars button functionality
document.querySelector('[data-action="webinars"]').addEventListener('click', function() {
  // Handle join webinars action
  console.log('Webinars button clicked');
  // Add your custom functionality here
  // Example: Show webinar schedule or redirect to webinars page
  alert('Joining webinars...');
});

// Send Message button functionality
document.querySelector('[data-action="message"]').addEventListener('click', function() {
  // Handle send message action
  console.log('Send Message button clicked');
  // Add your custom functionality here
  // Example: Show contact form or redirect to contact page
  alert('Sending message...');
});

// Discussion Forum button functionality
document.querySelector('[data-action="forum"]').addEventListener('click', function() {
  // Handle join discussion forum action
  console.log('Discussion Forum button clicked');
  // Add your custom functionality here
  // Example: Show discussion forum or redirect to forum page
  alert('Joining discussion forum...');
});

// FAQs button functionality
document.querySelector('[data-action="faqs"]').addEventListener('click', function() {
  // Handle view FAQs action
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
    this.style.outline = '2px solid var(--quasar-yellow)';
    this.style.outlineOffset = '2px';
  });
  
  button.addEventListener('blur', function() {
    this.style.outline = 'none';
  });
});

contactButtons.forEach(button => {
  button.addEventListener('focus', function() {
    this.style.outline = '2px solid var(--quasar-yellow)';
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
    element.style.outline = '2px solid var(--quasar-yellow)';
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
scrollTimeout;
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

// Slide navigation enhancements
const slides = [
  {
    title: 'Formation of Black Holes',
    content: 'Black holes are formed through the gravitational collapse of massive stars. When a star with a mass greater than about 20 times that of our Sun exhausts its nuclear fuel, it can no longer support itself against its own gravity and collapses under its own weight.',
    image: '🌀'
  },
  {
    title: 'Types of Black Holes',
    content: 'There are several types of black holes, each with unique characteristics and formation processes. Understanding these types helps us comprehend the diversity of these cosmic phenomena.',
    image: '⚫'
  },
  {
    title: 'Effects of Black Holes',
    content: 'Black holes have profound effects on their surroundings and the universe at large. Their immense gravitational pull influences the behavior of nearby matter and light.',
    image: '💫'
  }
];

// Add slide transition animations
const slideContent = document.getElementById('slide-content');
slideContent.style.transition = 'opacity 0.5s';

// Add slide navigation keyboard support
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' && currentSlideIndex > 0) {
    event.preventDefault();
    prevSlide.click();
  }
  if (event.key === 'ArrowRight' && currentSlideIndex < slides.length - 1) {
    event.preventDefault();
    nextSlide.click();
  }
});

// Add slide auto-advance feature
setInterval(() => {
  if (currentSlideIndex < slides.length - 1) {
    nextSlide.click();
  } else {
    currentSlideIndex = 0;
    showSlide(currentSlideIndex);
  }
}, 5000);