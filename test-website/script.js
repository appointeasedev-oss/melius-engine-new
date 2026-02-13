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
    <div class=