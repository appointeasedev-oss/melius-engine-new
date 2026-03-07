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
  console.log(quotes[currentQuoteIndex]);
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

// Particle system for cosmic background
class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.init();
  }

  init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.createParticles();
    this.animate();
  }

  createParticles() {
    for (let i = 0; i < 200; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.8 + 0.2
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.particles.forEach(particle => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      if (particle.x < 0 || particle.x > this.canvas.width) particle.speedX *= -1;
      if (particle.y < 0 || particle.y > this.canvas.height) particle.speedY *= -1;
      
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
      this.ctx.fill();
    });
    
    requestAnimationFrame(() => this.animate());
  }
}

// Black hole simulation
class BlackHoleSimulation {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.blackHole = { x: window.innerWidth / 2, y: window.innerHeight / 2, mass: 1000 };
    this.init();
  }

  init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.createParticles();
    this.animate();
    document.body.appendChild(this.canvas);
  }

  createParticles() {
    for (let i = 0; i < 500; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 2,
        color: `hsl(${Math.random() * 60 + 340}, 100%, 50%)`
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.particles.forEach(particle => {
      const dx = this.blackHole.x - particle.x;
      const dy = this.blackHole.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const force = (this.blackHole.mass / (distance * distance)) * 0.001;
      
      particle.vx += (dx / distance) * force;
      particle.vy += (dy / distance) * force;
      
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fillStyle = particle.color;
      this.ctx.fill();
      
      if (distance < 50) {
        particle.vx *= -0.5;
        particle.vy *= -0.5;
      }
    });
    
    // Draw black hole
    this.ctx.beginPath();
    this.ctx.arc(this.blackHole.x, this.blackHole.y, 50, 0, Math.PI * 2);
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    this.ctx.fill();
    
    this.ctx.beginPath();
    this.ctx.arc(this.blackHole.x, this.blackHole.y, 100, 0, Math.PI * 2);
    this.ctx.strokeStyle = 'rgba(255, 107, 107, 0.5)';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    
    requestAnimationFrame(() => this.animate());
  }
}

// Initialize particle systems and black hole simulation
document.addEventListener('DOMContentLoaded', function() {
  try {
    // Create particle system for background
    const particleSystem = new ParticleSystem(document.createElement('canvas'));
    particleSystem.canvas.style.position = 'fixed';
    particleSystem.canvas.style.top = '0';
    particleSystem.canvas.style.left = '0';
    particleSystem.canvas.style.zIndex = '-1';
    particleSystem.canvas.style.pointerEvents = 'none';
    document.body.appendChild(particleSystem.canvas);
    
    // Create black hole simulation
    const blackHoleSim = new BlackHoleSimulation();
    
    // Add event listeners for interactive elements
    enhanceAnimations();
    enhanceHoverEffects();
    enhanceClickEffects();
    enhanceKeyboardNavigation();
    enhanceTouchInteractions();
    enhanceParallaxEffect();
    
  } catch (error) {
    console.error('Error initializing black hole animations:', error);
  }
});

// Enhanced click effects for interactive elements
function enhanceClickEffects() {
  const interactiveElements = document.querySelectorAll('.planet, .slide-btn, .contact-btn, .black-hole');
  
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
  const interactiveElements = document.querySelectorAll('.planet, .slide-btn, .contact-btn, .black-hole');
  
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
  const interactiveElements = document.querySelectorAll('.planet, .slide-btn, .contact-btn, .black-hole');
  
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

// Enhanced animations for black hole elements
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
  const prevSlide = document.querySelector('.prev-slide');
  const nextSlide = document.querySelector('.next-slide');
  
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

// Enhanced animations for quote button
function animateQuoteButton() {
  const quoteBtn = document.getElementById('quote-btn');
  
  if (quoteBtn) {
    quoteBtn.style.animation = 'pulse 2s ease-in-out infinite';
    quoteBtn.style.animationDelay = '0s';
  }
}

// Enhanced animations for interactive elements
function enhanceAnimations() {
  animateSlideNavigation();
  animatePlanetGrid();
  animateQuoteButton();
  animateBlackHoleElements();
  animateBlackHoleIcons();
  animateBlackHoleCore();
}

// Enhanced performance optimization
function optimizePerformance() {
  const interactiveElements = document.querySelectorAll('.planet, .slide-btn, .contact-btn, .black-hole');
  
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
    
    // Initialize gravitational pull simulation
    simulateGravitationalPull();
  } catch (error) {
    console.error('Error initializing black hole animations:', error);
  }
});

// Enhanced cleanup on page unload
window.addEventListener('beforeunload', function() {
  // Clean up event listeners
  const interactiveElements = document.querySelectorAll('.planet, .slide-btn, .contact-btn, .black-hole');
  
  interactiveElements.forEach(element => {
    element.removeEventListener('mouseenter', enhanceHoverEffects);
    element.removeEventListener('mouseleave', enhanceHoverEffects);
    element.removeEventListener('click', enhanceClickEffects);
    element.removeEventListener('keydown', enhanceKeyboardNavigation);
    element.removeEventListener('touchstart', enhanceTouchInteractions);
    element.removeEventListener('touchend', enhanceTouchInteractions);
  });
});

// Event listeners for slide navigation
const prevSlide = document.querySelector('.prev-slide');
const nextSlide = document.querySelector('.next-slide');
const slideIndicator = document.querySelector('.slide-indicator');
const slideContent = document.querySelector('.slide-content');

const slides = [
  {
    title: 'What is a Black Hole?',
    content: 'A black hole is a region of spacetime where gravity is so strong that nothing, not even light, can escape from it.',
    image: '⚫'
  },
  {
    title: 'Event Horizon',
    content: 'The event horizon is the boundary around a black hole from which nothing can escape.',
    image: '⬜'
  },
  {
    title: 'Singularity',
    content: 'The singularity is the point at the center of a black hole where density becomes infinite.',
    image: '⚫'
  },
  {
    title: 'Accretion Disk',
    content: 'An accretion disk is a structure formed by diffuse material in orbital motion around a massive central body.',
    image: '🌈'
  },
  {
    title: 'Gravitational Waves',
    content: 'Gravitational waves are ripples in spacetime caused by accelerating masses, such as merging black holes.',
    image: '💪'
  }
];

let currentSlideIndex = 0;
if (slideIndicator) {
  slideIndicator.textContent = `${currentSlideIndex + 1} of ${slides.length}`;
}

function showSlide(index) {
  const slide = slides[index];
  if (slideContent) {
    slideContent.innerHTML = `
      <div class='slide'>
        <h3>${slide.title}</h3>
        <p>${slide.content}</p>
        <div class='slide-image'>${slide.image}</div>
      </div>
    `;
  }
  if (slideIndicator) {
    slideIndicator.textContent = `${index + 1} of ${slides.length}`;
  }
}

if (prevSlide) {
  prevSlide.addEventListener('click', function() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
  });
}

if (nextSlide) {
  nextSlide.addEventListener('click', function() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
  });
}

// Show initial slide
showSlide(currentSlideIndex);

// Event listeners for interactive planets
const planets = document.querySelectorAll('.planet');
const planetDetails = document.getElementById('planet-details');
const planetDescription = document.getElementById('planet-description');

if (planets.length > 0 && planetDetails && planetDescription) {
  planets.forEach(planet => {
    planet.addEventListener('click', function() {
      const planetName = this.getAttribute('data-planet');
      const planetInfo = getPlanetInfo(planetName);
      
      // Update planet details
      planetDescription.innerHTML = planetInfo.description;
      
      // Add animation to planet details
      planetDetails.style.opacity = '0';
      setTimeout(() => {
        planetDetails.style.opacity = '1';
        planetDetails.style.transition = 'opacity 0.5s';
      }, 100);
    });
  });
}

// Event listeners for interactive black holes
const blackHoles = document.querySelectorAll('.black-hole');
const blackHoleDetails = document.getElementById('black-hole-details');
const blackHoleDescription = document.getElementById('black-hole-description');

if (blackHoles.length > 0 && blackHoleDetails && blackHoleDescription) {
  blackHoles.forEach(blackHole => {
    blackHole.addEventListener('click', function() {
      const blackHoleType = this.getAttribute('data-black-hole');
      const blackHoleInfo = getBlackHoleInfo(blackHoleType);
      
      // Update black hole details
      blackHoleDescription.innerHTML = blackHoleInfo.description;
      
      // Add animation to black hole details
      blackHoleDetails.style.opacity = '0';
      setTimeout(() => {
        blackHoleDetails.style.opacity = '1';
        blackHoleDetails.style.transition = 'opacity 0.5s';
      }, 100);
    });
  });
}

function getBlackHoleInfo(blackHoleType) {
  const blackHoleData = {
    stellar: {
      name: 'Stellar Black Hole',
      description: 'Stellar black holes form when a massive star runs out of fuel and collapses under its own gravity. They typically have masses ranging from 3 to 100 times that of our Sun.'
    },
    supermassive: {
      name: 'Supermassive Black Hole',
      description: 'Supermassive black holes are found at the centers of most galaxies, including our own Milky Way. They have masses millions to billions of times that of our Sun.'
    },
    intermediate: {
      name: 'Intermediate Black Hole',
      description: 'Intermediate black holes are thought to have masses between stellar and supermassive black holes. Their existence is still theoretical and has not been confirmed.'
    },
    micro: {
      name: 'Micro Black Hole',
      description: 'Micro black holes are hypothetical black holes that could have been created during the Big Bang. They would have masses smaller than our Sun and are yet to be observed.'
    }
  };
  
  return blackHoleData[blackHoleType] || { name: 'Unknown', description: 'No information available.' };
}

function getPlanetInfo(planetName) {
  const planetData = {
    mercury: {
      name: 'Mercury',
      description: 'Mercury, being the closest planet to the Sun, experiences extreme gravitational effects. If a black hole were to pass near Mercury, its intense gravity could potentially disrupt the planet\'s orbit or even tear it apart.'
    },
    venus: {
      name: 'Venus',
      description: 'Venus, with its thick atmosphere, would face catastrophic consequences if a black hole approached. The black hole\'s gravity could strip away Venus\'s atmosphere, exposing its surface to the harsh conditions of space.'
    },
    earth: {
      name: 'Earth',
      description: 'Earth\'s fate in the presence of a black hole would be dire. The black hole\'s immense gravity could cause massive tidal forces, leading to earthquakes, volcanic eruptions, and potentially even the destruction of our planet.'
    },
    mars: {
      name: 'Mars',
      description: 'Mars, with its thin atmosphere, would be vulnerable to the gravitational pull of a black hole. The black hole could strip away Mars\'s atmosphere, leaving it exposed to the vacuum of space.'
    },
    jupiter: {
      name: 'Jupiter',
      description: 'Jupiter, being a gas giant, would experience significant gravitational effects from a nearby black hole. The black hole\'s gravity could cause massive storms and potentially disrupt the planet\'s magnetic field.'
    },
    saturn: {
      name: 'Saturn',
      description: 'Saturn, with its iconic rings, would face a unique fate in the presence of a black hole. The black hole\'s gravity could disrupt the rings, causing them to break apart or form new structures.'
    },
    uranus: {
      name: 'Uranus',
      description: 'Uranus, with its tilted axis, would experience unusual gravitational effects from a black hole. The black hole\'s gravity could potentially alter Uranus\'s tilt, leading to changes in its seasons and climate.'
    },
    neptune: {
      name: 'Neptune',
      description: 'Neptune, being the farthest planet from the Sun, would still be affected by a nearby black hole. The black hole\'s gravity could disrupt Neptune\'s orbit, potentially sending it on a new trajectory through the solar system.'
    }
  };
  
  return planetData[planetName] || { name: 'Unknown', description: 'No information available.' };
}

// Event listeners for new buttons added in index.html
const playBtns = document.querySelectorAll('.play-btn');
playBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const animationType = this.getAttribute('data-animation');
    console.log('Playing animation:', animationType);
    // Add animation functionality here
    this.textContent = 'Playing...';
    setTimeout(() => {
      this.textContent = 'Play Animation';
    }, 2000);
  });
});

const submitBtn = document.querySelector('.submit-btn');
if (submitBtn) {
  submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Form submitted');
    // Add form submission functionality here
    alert('Message sent successfully!');
  });
}

const factsItems = document.querySelectorAll('.facts-item');
factsItems.forEach(item => {
  item.addEventListener('click', function() {
    console.log('Fact item clicked');
    // Add fact item functionality here
    this.style.backgroundColor = 'rgba(255, 107, 107, 0.1)';
    setTimeout(() => {
      this.style.backgroundColor = 'transparent';
    }, 200);
  });
});

const animationItems = document.querySelectorAll('.animation-item');
animationItems.forEach(item => {
  item.addEventListener('click', function() {
    console.log('Animation item clicked');
    // Add animation item functionality here
    this.style.transform = 'scale(1.05)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 200);
  });
});

const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach(item => {
  item.addEventListener('click', function() {
    console.log('Timeline item clicked');
    // Add timeline item functionality here
    this.style.backgroundColor = 'rgba(255, 107, 107, 0.1)';
    setTimeout(() => {
      this.style.backgroundColor = 'transparent';
    }, 200);
  });
});

const formGroups = document.querySelectorAll('.form-group');
formGroups.forEach(group => {
  const input = group.querySelector('input, textarea');
  if (input) {
    input.addEventListener('focus', function() {
      group.style.borderColor = 'var(--quasar-yellow)';
    });
    
    input.addEventListener('blur', function() {
      group.style.borderColor = 'var(--stellar-white)';
    });
  }
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    // Add click functionality for navigation links
    console.log('Navigating to:', this.getAttribute('href'));
  });
});

const darkModeToggle = document.querySelector('.dark-mode-toggle');
if (darkModeToggle) {
  const darkModeCheckbox = document.getElementById('dark-mode-checkbox');
  darkModeCheckbox.addEventListener('change', function() {
    if (this.checked) {
      document.body.style.filter = 'invert(1) hue-rotate(180deg)';
    } else {
      document.body.style.filter = 'none';
    }
  });
}

// Black Hole Quiz functionality
const quizContainer = document.querySelector('.quiz-container');
const quizSubmit = document.querySelector('.quiz-submit');
const quizResults = document.getElementById('quiz-results');

if (quizContainer && quizSubmit && quizResults) {
  quizSubmit.addEventListener('click', function() {
    let score = 0;
    const answers = {
      q1: 'b',
      q2: 'b',
      q3: 'a'
    };
    
    // Check answers
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === answers.q1) {
      score++;
    }
    
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === answers.q2) {
      score++;
    }
    
    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === answers.q3) {
      score++;
    }
    
    // Display results
    quizResults.innerHTML = `<p>Your score: ${score} out of 3</p>`;
    quizResults.style.display = 'block';
  });
}

// Virtual tour of a black hole
function startVirtualTour() {
  console.log('Starting virtual tour of a black hole...');
  
  // Create a virtual tour experience
  const tourContainer = document.createElement('div');
  tourContainer.id = 'virtual-tour';
  tourContainer.className = 'virtual-tour';
  tourContainer.innerHTML = `
    <div class="tour-content">
      <h2>Virtual Tour: Journey to a Black Hole</h2>
      <p>Welcome to the virtual tour of a black hole! Click on the buttons below to explore different aspects of this cosmic phenomenon.</p>
      <div class="tour-buttons">
        <button class="tour-btn" data-section="event-horizon">Event Horizon</button>
        <button class="tour-btn" data-section="singularity">Singularity</button>
        <button class="tour-btn" data-section="accretion-disk">Accretion Disk</button>
        <button class="tour-btn" data-section="gravitational-time-dilation">Gravitational Time Dilation</button>
      </div>
      <div class="tour-section" id="event-horizon-section">
        <h3>Event Horizon</h3>
        <p>The event horizon is the boundary around a black hole from which nothing can escape. Once you cross this point, you are doomed to fall into the black hole.</p>
        <img src="event-horizon.jpg" alt="Event Horizon">
      </div>
      <div class="tour-section" id="singularity-section">
        <h3>Singularity</h3>
        <p>The singularity is the point at the center of a black hole where density becomes infinite. It is a place where our current understanding of physics breaks down.</p>
        <img src="singularity.jpg" alt="Singularity">
      </div>
      <div class="tour-section" id="accretion-disk-section">
        <h3>Accretion Disk</h3>
        <p>An accretion disk is a structure formed by diffuse material in orbital motion around a massive central body. In the case of a black hole, the accretion disk is a hot, glowing disk of gas and dust that orbits the black hole.</p>
        <img src="accretion-disk.jpg" alt="Accretion Disk">
      </div>
      <div class="tour-section" id="gravitational-time-dilation-section">
        <h3>Gravitational Time Dilation</h3>
        <p>Gravitational time dilation is a phenomenon where time passes more slowly in a stronger gravitational field. Near a black hole, time can pass much more slowly than it does for an observer far away.</p>
        <img src="time-dilation.jpg" alt="Gravitational Time Dilation">
      </div>
      <button class="tour-close" id="tour-close">Close Tour</button>
    </div>
  `;
  
  document.body.appendChild(tourContainer);
  
  // Add event listeners to tour buttons
  const tourBtns = document.querySelectorAll('.tour-btn');
  tourBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const section = this.getAttribute('data-section');
      const sections = document.querySelectorAll('.tour-section');
      sections.forEach(s => s.style.display = 'none');
      document.getElementById(`${section}-section`).style.display = 'block';
    });
  });
  
  // Add event listener to close button
  const tourClose = document.getElementById('tour-close');
  tourClose.addEventListener('click', function() {
    document.getElementById('virtual-tour').remove();
  });
}

// Simulation of black hole effects on nearby objects
function simulateBlackHoleEffects() {
  console.log('Starting simulation of black hole effects...');
  
  // Create a simulation of black hole effects
  const simContainer = document.createElement('div');
  simContainer.id = 'black-hole-simulation';
  simContainer.className = 'black-hole-simulation';
  simContainer.innerHTML = `
    <div class="sim-content">
      <h2>Black Hole Effects Simulation</h2>
      <p>Click on the objects below to see how they would be affected by a nearby black hole.</p>
      <div class="sim-objects">
        <div class="sim-object" data-object="star">
          <img src="star.jpg" alt="Star">
          <p>Star</p>
        </div>
        <div class="sim-object" data-object="planet">
          <img src="planet.jpg" alt="Planet">
          <p>Planet</p>
        </div>
        <div class="sim-object" data-object="spaceship">
          <img src="spaceship.jpg" alt="Spaceship">
          <p>Spaceship</p>
        </div>
      </div>
      <div class="sim-info" id="sim-info">
        Click on an object to see how it would be affected by a black hole.
      </div>
    </div>
  `;
  
  document.body.appendChild(simContainer);
  
  // Add event listeners to objects
  const simObjects = document.querySelectorAll('.sim-object');
  simObjects.forEach(obj => {
    obj.addEventListener('click', function() {
      const object = this.getAttribute('data-object');
      const info = document.getElementById('sim-info');
      
      let effect;
      switch (object) {
        case 'star':
          effect = 'The star would be stretched into a long, thin shape due to tidal forces. This process is known as spaghettification.';
          break;
        case 'planet':
          effect = 'The planet would experience massive tidal forces, leading to earthquakes, volcanic eruptions, and potentially even the destruction of the planet.';
          break;
        case 'spaceship':
          effect = 'The spaceship would be stretched into a long, thin shape due to tidal forces. The crew would experience extreme gravitational forces, potentially leading to their demise.';
          break;
        default:
          effect = 'No information available.';
      }
      
      info.innerHTML = effect;
    });
  });
}

// Enhanced quiz functionality with real-time feedback
function enhanceQuiz() {
  console.log('Enhancing quiz functionality...');
  
  // Add real-time feedback to quiz
  const quizQuestions = document.querySelectorAll('.quiz-question');
  quizQuestions.forEach(question => {
    const options = question.querySelectorAll('input[type="radio"]');
    options.forEach(option => {
      option.addEventListener('change', function() {
        const selected = this.checked;
        const label = this.nextElementSibling;
        
        if (selected) {
          label.style.color = 'var(--quasar-yellow)';
          label.style.fontWeight = 'bold';
        } else {
          label.style.color = 'var(--stellar-white)';
          label.style.fontWeight = 'normal';
        }
      });
    });
  });
}

// Initialize enhanced features
document.addEventListener('DOMContentLoaded', function() {
  try {
    // Initialize enhanced features
    enhanceAnimations();
    enhanceHoverEffects();
    enhanceClickEffects();
    enhanceKeyboardNavigation();
    enhanceTouchInteractions();
    enhanceParallaxEffect();
    
    // Add event listeners for new features
    const virtualTourBtn = document.getElementById('virtual-tour-btn');
    if (virtualTourBtn) {
      virtualTourBtn.addEventListener('click', startVirtualTour);
    }
    
    const simulationBtn = document.getElementById('simulation-btn');
    if (simulationBtn) {
      simulationBtn.addEventListener('click', simulateBlackHoleEffects);
    }
    
    // Enhance quiz functionality
    enhanceQuiz();
    
  } catch (error) {
    console.error('Error initializing enhanced features:', error);
  }
});

// Enhanced cleanup on page unload
window.addEventListener('beforeunload', function() {
  // Clean up event listeners
  const interactiveElements = document.querySelectorAll('.planet, .slide-btn, .contact-btn, .black-hole');
  
  interactiveElements.forEach(element => {
    element.removeEventListener('mouseenter', enhanceHoverEffects);
    element.removeEventListener('mouseleave', enhanceHoverEffects);
    element.removeEventListener('click', enhanceClickEffects);
    element.removeEventListener('keydown', enhanceKeyboardNavigation);
    element.removeEventListener('touchstart', enhanceTouchInteractions);
    element.removeEventListener('touchend', enhanceTouchInteractions);
  });
});

// Additional utility functions
function showRandomQuote() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * quotes.length);
  } while (newIndex === currentQuoteIndex);
  
  currentQuoteIndex = newIndex;
  console.log(quotes[currentQuoteIndex]);
}

function getPlanetInfo(planetName) {
  const planetData = {
    mercury: {
      name: 'Mercury',
      description: 'Mercury, being the closest planet to the Sun, experiences extreme gravitational effects. If a black hole were to pass near Mercury, its intense gravity could potentially disrupt the planet\'s orbit or even tear it apart.'
    },
    venus: {
      name: 'Venus',
      description: 'Venus, with its thick atmosphere, would face catastrophic consequences if a black hole approached. The black hole\'s gravity could strip away Venus\'s atmosphere, exposing its surface to the harsh conditions of space.'
    },
    earth: {
      name: 'Earth',
      description: 'Earth\'s fate in the presence of a black hole would be dire. The black hole\'s immense gravity could cause massive tidal forces, leading to earthquakes, volcanic eruptions, and potentially even the destruction of our planet.'
    },
    mars: {
      name: 'Mars',
      description: 'Mars, with its thin atmosphere, would be vulnerable to the gravitational pull of a black hole. The black hole could strip away Mars\'s atmosphere, leaving it exposed to the vacuum of space.'
    },
    jupiter: {
      name: 'Jupiter',
      description: 'Jupiter, being a gas giant, would experience significant gravitational effects from a nearby black hole. The black hole\'s gravity could cause massive storms and potentially disrupt the planet\'s magnetic field.'
    },
    saturn: {
      name: 'Saturn',
      description: 'Saturn, with its iconic rings, would face a unique fate in the presence of a black hole. The black hole\'s gravity could disrupt the rings, causing them to break apart or form new structures.'
    },
    uranus: {
      name: 'Uranus',
      description: 'Uranus, with its tilted axis, would experience unusual gravitational effects from a black hole. The black hole\'s gravity could potentially alter Uranus\'s tilt, leading to changes in its seasons and climate.'
    },
    neptune: {
      name: 'Neptune',
      description: 'Neptune, being the farthest planet from the Sun, would still be affected by a nearby black hole. The black hole\'s gravity could disrupt Neptune\'s orbit, potentially sending it on a new trajectory through the solar system.'
    }
  };
  
  return planetData[planetName] || { name: 'Unknown', description: 'No information available.' };
}

function getBlackHoleInfo(blackHoleType) {
  const blackHoleData = {
    stellar: {
      name: 'Stellar Black Hole',
      description: 'Stellar black holes form when a massive star runs out of fuel and collapses under its own gravity. They typically have masses ranging from 3 to 100 times that of our Sun.'
    },
    supermassive: {
      name: 'Supermassive Black Hole',
      description: 'Supermassive black holes are found at the centers of most galaxies, including our own Milky Way. They have masses millions to billions of times that of our Sun.'
    },
    intermediate: {
      name: 'Intermediate Black Hole',
      description: 'Intermediate black holes are thought to have masses between stellar and supermassive black holes. Their existence is still theoretical and has not been confirmed.'
    },
    micro: {
      name: 'Micro Black Hole',
      description: 'Micro black holes are hypothetical black holes that could have been created during the Big Bang. They would have masses smaller than our Sun and are yet to be observed.'
    }
  };
  
  return blackHoleData[blackHoleType] || { name: 'Unknown', description: 'No information available.' };
}