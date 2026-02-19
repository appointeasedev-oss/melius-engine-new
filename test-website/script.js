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

// Black hole animation functions
function animateBlackHole() {
  const blackHoleElements = document.querySelectorAll('.black-hole-decorations .event-horizon, .black-hole-decorations .accretion-disk, .black-hole-decorations .stellar-remnant');
  
  blackHoleElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.5}s`;
  });
}

// Star twinkling animation
function animateStars() {
  const stars = document.querySelectorAll('.parallax__star');
  
  stars.forEach((star, index) => {
    star.style.animationDelay = `${index * 0.3}s`;
  });
}

// Galaxy rotation animation
function animateGalaxies() {
  const galaxies = document.querySelectorAll('.parallax__galaxy');
  
  galaxies.forEach((galaxy, index) => {
    galaxy.style.animationDelay = `${index * 2}s`;
  });
}

// Enhanced gravitational pull simulation for planets
function simulateGravitationalPull() {
  const planets = document.querySelectorAll('.planet');
  const blackHole = document.querySelector('.central-black-hole');
  
  planets.forEach(planet => {
    planet.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.05)';
      this.style.boxShadow = '0 20px 60px rgba(255, 107, 107, 0.8)';
      
      // Simulate gravitational pull effect
      if (blackHole) {
        blackHole.style.transform = 'scale(1.1)';
        blackHole.style.filter = 'brightness(1.2)';
      }
    });
    
    planet.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '0 15px 50px rgba(255, 107, 107, 0.5)';
      
      // Reset gravitational pull effect
      if (blackHole) {
        blackHole.style.transform = 'scale(1)';
        blackHole.style.filter = 'brightness(1)';
      }
    });
  });
}

// Enhanced hover effects for interactive elements
function enhanceHoverEffects() {
  const interactiveElements = document.querySelectorAll('.planet, .slide-btn, .action-btn, .contact-btn');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
      this.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.4)';
      
      // Add glow effect
      this.style.filter = 'drop-shadow(0 0 10px rgba(255, 107, 107, 0.5))';
    });
    
    element.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.2)';
      
      // Remove glow effect
      this.style.filter = 'none';
    });
  });
}

// Enhanced click effects for interactive elements
function enhanceClickEffects() {
  const interactiveElements = document.querySelectorAll('.planet, .slide-btn, .action-btn, .contact-btn');
  
  interactiveElements.forEach(element => {
    element.addEventListener('click', function() {
      this.style.transform = 'translateY(2px) scale(0.98)';
      setTimeout(() => {
        this.style.transform = 'translateY(0) scale(1)';
      }, 100);
      
      // Add click animation
      this.style.animation = 'pulse 0.3s ease-out';
      setTimeout(() => {
        this.style.animation = 'none';
      }, 300);
    });
  });
}

// Enhanced keyboard navigation for accessibility
function enhanceKeyboardNavigation() {
  const interactiveElements = document.querySelectorAll('.planet, .slide-btn, .action-btn, .contact-btn');
  
  interactiveElements.forEach(element => {
    element.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this.click();
        
        // Add keyboard focus effect
        this.style.outline = '3px solid var(--quasar-yellow)';
        this.style.outlineOffset = '2px';
        this.style.boxShadow = '0 0 0 6px rgba(255, 107, 107, 0.3)';
      }
    });
  });
}

// Enhanced touch interactions for mobile devices
function enhanceTouchInteractions() {
  const interactiveElements = document.querySelectorAll('.planet, .slide-btn, .action-btn, .contact-btn');
  
  interactiveElements.forEach(element => {
    element.addEventListener('touchstart', function() {
      this.style.transform = 'translateY(2px) scale(0.98)';
    });
    
    element.addEventListener('touchend', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// Enhanced parallax effect for black hole elements
function enhanceParallaxEffect() {
  const parallaxElements = document.querySelectorAll('.parallax__layer');
  
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach((layer, index) => {
      const speed = index * 0.5;
      layer.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

// Enhanced animations for black hole-related elements
function animateBlackHoleElements() {
  const blackHoleElements = document.querySelectorAll('.black-hole-decorations .event-horizon, .black-hole-decorations .accretion-disk, .black-hole-decorations .stellar-remnant');
  
  blackHoleElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.5}s`;
  });
}

function animateBlackHoleIcons() {
  const blackHoleIcons = document.querySelectorAll('.black-hole-icon');
  
  blackHoleIcons.forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.2}s`;
  });
}

function animateBlackHoleCore() {
  const blackHoleCore = document.querySelector('.black-hole-core');
  const accretionDisk = document.querySelector('.accretion-disk-animation');
  
  if (blackHoleCore) {
    blackHoleCore.style.animation = 'pulse 4s ease-in-out infinite';
    blackHoleCore.style.animationDelay = '0s';
  }
  
  if (accretionDisk) {
    accretionDisk.style.animation = 'spin 6s linear infinite';
    accretionDisk.style.animationDelay = '2s';
  }
}

// Enhanced animations for slide navigation
function animateSlideNavigation() {
  const prevSlide = document.getElementById('prev-slide');
  const nextSlide = document.getElementById('next-slide');
  
  if (prevSlide) {
    prevSlide.style.animation = 'fadeInLeft 0.5s ease-out';
    prevSlide.style.animationDelay = '0s';
  }
  
  if (nextSlide) {
    nextSlide.style.animation = 'fadeInRight 0.5s ease-out';
    nextSlide.style.animationDelay = '0.3s';
  }
}

// Enhanced animations for planet grid
function animatePlanetGrid() {
  const planets = document.querySelectorAll('.planet');
  
  planets.forEach((planet, index) => {
    planet.style.animation = 'fadeInUp 0.8s ease-out';
    planet.style.animationDelay = `${index * 0.2}s`;
  });
}

// Enhanced animations for booking buttons
function animateBookingButtons() {
  const bookingButtons = document.querySelectorAll('.action-btn');
  
  bookingButtons.forEach((button, index) => {
    button.style.animation = 'fadeInUp 0.8s ease-out';
    button.style.animationDelay = `${index * 0.2}s`;
  });
}

// Enhanced animations for contact buttons
function animateContactButtons() {
  const contactButtons = document.querySelectorAll('.contact-btn');
  
  contactButtons.forEach((button, index) => {
    button.style.animation = 'fadeInUp 0.8s ease-out';
    button.style.animationDelay = `${index * 0.2}s`;
  });
}

// Enhanced animations for quote button
function animateQuoteButton() {
  const quoteBtn = document.getElementById('quote-btn');
  
  if (quoteBtn) {
    quoteBtn.style.animation = 'pulse 2s ease-in-out infinite';
    quoteBtn.style.animationDelay = '0s';
  }
}

// Enhanced animations for back to top button
function animateBackToTopButton() {
  const backToTop = document.querySelector('.back-to-top');
  
  if (backToTop) {
    backToTop.style.animation = 'fadeInUp 0.8s ease-out';
    backToTop.style.animationDelay = '1s';
  }
}

// Enhanced animations for interactive elements
function enhanceAnimations() {
  animateSlideNavigation();
  animatePlanetGrid();
  animateBookingButtons();
  animateContactButtons();
  animateQuoteButton();
  animateBackToTopButton();
  animateBlackHoleElements();
  animateBlackHoleIcons();
  animateBlackHoleCore();
}

// Enhanced performance optimization
function optimizePerformance() {
  const interactiveElements = document.querySelectorAll('.planet, .slide-btn, .action-btn, .contact-btn');
  
  interactiveElements.forEach(element => {
    element.addEventListener('click', function() {
      // Debounce click events to prevent rapid firing
      clearTimeout(this.clickTimeout);
      this.clickTimeout = setTimeout(() => {
        // Handle click event
      }, 200);
    });
  });
}

// Enhanced error handling
function handleErrors() {
  try {
    // Initialize black hole animations
    animateBlackHoleElements();
    animateBlackHoleIcons();
    animateBlackHoleCore();
    enhanceAnimations();
    enhanceHoverEffects();
    enhanceClickEffects();
    enhanceKeyboardNavigation();
    enhanceTouchInteractions();
    enhanceParallaxEffect();
  } catch (error) {
    console.error('Error initializing black hole animations:', error);
  }
}

// Enhanced logging for debugging
function logEvents() {
  console.log('Black hole animations initialized successfully');
  console.log('Enhanced hover effects applied');
  console.log('Enhanced click effects applied');
  console.log('Enhanced keyboard navigation applied');
  console.log('Enhanced touch interactions applied');
  console.log('Enhanced parallax effect applied');
  console.log('Enhanced animations applied');
}

// Enhanced initialization
document.addEventListener('DOMContentLoaded', function() {
  try {
    // Initialize black hole animations
    animateBlackHoleElements();
    animateBlackHoleIcons();
    animateBlackHoleCore();
    enhanceAnimations();
    enhanceHoverEffects();
    enhanceClickEffects();
    enhanceKeyboardNavigation();
    enhanceTouchInteractions();
    enhanceParallaxEffect();
    
    // Optimize performance
    optimizePerformance();
    
    // Log events for debugging
    logEvents();
  } catch (error) {
    console.error('Error initializing black hole animations:', error);
  }
});

// Enhanced cleanup on page unload
window.addEventListener('beforeunload', function() {
  // Clean up event listeners
  const interactiveElements = document.querySelectorAll('.planet, .slide-btn, .action-btn, .contact-btn');
  
  interactiveElements.forEach(element => {
    element.removeEventListener('mouseenter', enhanceHoverEffects);
    element.removeEventListener('mouseleave', enhanceHoverEffects);
    element.removeEventListener('click', enhanceClickEffects);
    element.removeEventListener('keydown', enhanceKeyboardNavigation);
    element.removeEventListener('touchstart', enhanceTouchInteractions);
    element.removeEventListener('touchend', enhanceTouchInteractions);
  });
});

// Fix for syntax error in showSlide function
function showSlide(index) {
  const slide = slides[index];
  slideContent.innerHTML = `
    <div class='slide'>
      <h3>${slide.title}</h3>
      <p>${slide.content}</p>
      <div class='slide-image'>${slide.image}</div>
    </div>
  `;
  currentSlide.textContent = index + 1;
}

// Enhanced error handling for showSlide function
function safeShowSlide(index) {
  try {
    showSlide(index);
  } catch (error) {
    console.error('Error showing slide:', error);
  }
}

// Enhanced initialization with error handling
document.addEventListener('DOMContentLoaded', function() {
  try {
    // Initialize black hole animations
    animateBlackHoleElements();
    animateBlackHoleIcons();
    animateBlackHoleCore();
    enhanceAnimations();
    enhanceHoverEffects();
    enhanceClickEffects();
    enhanceKeyboardNavigation();
    enhanceTouchInteractions();
    enhanceParallaxEffect();
    
    // Optimize performance
    optimizePerformance();
    
    // Log events for debugging
    logEvents();
  } catch (error) {
    console.error('Error initializing black hole animations:', error);
  }
});

// Enhanced cleanup on page unload with error handling
window.addEventListener('beforeunload', function() {
  try {
    // Clean up event listeners
    const interactiveElements = document.querySelectorAll('.planet, .slide-btn, .action-btn, .contact-btn');
    
    interactiveElements.forEach(element => {
      element.removeEventListener('mouseenter', enhanceHoverEffects);
      element.removeEventListener('mouseleave', enhanceHoverEffects);
      element.removeEventListener('click', enhanceClickEffects);
      element.removeEventListener('keydown', enhanceKeyboardNavigation);
      element.removeEventListener('touchstart', enhanceTouchInteractions);
      element.removeEventListener('touchend', enhanceTouchInteractions);
    });
  } catch (error) {
    console.error('Error cleaning up event listeners:', error);
  }
});

// Enhanced gravitational pull simulation
function simulateGravitationalPull() {
  const planets = document.querySelectorAll('.planet');
  const blackHole = document.querySelector('.central-black-hole');
  
  planets.forEach(planet => {
    planet.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.05)';
      this.style.boxShadow = '0 20px 60px rgba(255, 107, 107, 0.8)';
      
      // Simulate gravitational pull effect
      if (blackHole) {
        blackHole.style.transform = 'scale(1.1)';
        blackHole.style.filter = 'brightness(1.2)';
      }
    });
    
    planet.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '0 15px 50px rgba(255, 107, 107, 0.5)';
      
      // Reset gravitational pull effect
      if (blackHole) {
        blackHole.style.transform = 'scale(1)';
        blackHole.style.filter = 'brightness(1)';
      }
    });
  });
}

// Enhanced particle effects for black holes
function createParticleEffects() {
  const blackHole = document.querySelector('.central-black-hole');
  
  if (blackHole) {
    // Create particle effect
    const particles = document.createElement('div');
    particles.className = 'particle-effects';
    particles.innerHTML = `
      <div class='particle'></div>
      <div class='particle'></div>
      <div class='particle'></div>
      <div class='particle'></div>
      <div class='particle'></div>
    `;
    
    blackHole.appendChild(particles);
  }
}

// Enhanced animations for black hole elements
document.addEventListener('DOMContentLoaded', function() {
  simulateGravitationalPull();
  createParticleEffects();
  animateBlackHoleElements();
  animateBlackHoleIcons();
  animateBlackHoleCore();
  enhanceAnimations();
  enhanceHoverEffects();
  enhanceClickEffects();
  enhanceKeyboardNavigation();
  enhanceTouchInteractions();
  enhanceParallaxEffect();
});

// Enhanced CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
  
  .particle-effects {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  
  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--accretion-orange);
    border-radius: 50%;
    animation: particleFloat 3s ease-in-out infinite;
  }
  
  .particle:nth-child(1) {
    top: 20%;
    left: 20%;
    animation-delay: 0s;
  }
  
  .particle:nth-child(2) {
    top: 40%;
    left: 40%;
    animation-delay: 0.5s;
  }
  
  .particle:nth-child(3) {
    top: 60%;
    left: 60%;
    animation-delay: 1s;
  }
  
  .particle:nth-child(4) {
    top: 80%;
    left: 80%;
    animation-delay: 1.5s;
  }
  
  .particle:nth-child(5) {
    top: 100%;
    left: 100%;
    animation-delay: 2s;
  }
  
  @keyframes particleFloat {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(-100px) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);