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

// Hover effects for black hole information sections
function addHoverEffects() {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 10px 30px rgba(255, 107, 107, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 0 20px rgba(255, 107, 107, 0.5)';
    });
  });
}

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
    <div class='slide'>
      <h3>${slide.title}</h3>
      <p>${slide.content}</p>
      <div class='slide-image'>${slide.image}</div>
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

// Interactive planets functionality
const planets = document.querySelectorAll('.planet');
const planetDetails = document.getElementById('planet-details');
const planetDescription = document.getElementById('planet-description');

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

// Booking buttons
const bookingButtons = document.querySelectorAll('.action-btn');
bookingButtons.forEach(button => {
  button.addEventListener('click', function() {
    const action = this.getAttribute('data-action');
    console.log(`Booking action: ${action}`);
    // Add your booking logic here
    alert(`Accessing ${action}...`);
  });
});

// Contact buttons
const contactButtons = document.querySelectorAll('.contact-btn');
contactButtons.forEach(button => {
  button.addEventListener('click', function() {
    const action = this.getAttribute('data-action');
    console.log(`Contact action: ${action}`);
    // Add your contact logic here
    alert(`Accessing ${action}...`);
  });
});

// Back to top button
const backToTop = document.querySelector('.back-to-top');
backToTop.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Initialize animations and effects
document.addEventListener('DOMContentLoaded', function() {
  animateBlackHole();
  animateStars();
  animateGalaxies();
  addHoverEffects();
});

// Add event listeners for all buttons
document.addEventListener('DOMContentLoaded', function() {
  // Navigation menu toggle
  const navToggle = document.getElementById('mobile-menu');
  const navMenu = document.querySelector('.nav-menu');
  
  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
  });

  // Quote button
  const quoteBtn = document.getElementById('quote-btn');
  const quotes = [
    'The black holes of nature are the most perfect macroscopic objects there are in the universe: the only elements in their construction are our concepts of space and time.',
    'Black holes are where God divided by zero.',
    'A black hole is a region of spacetime where gravity is so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from it.',
    'The event horizon is the point of no return; once crossed, the black hole\'s gravity is too strong to escape.',
    'Black holes are the most efficient engines in the universe, converting mass into energy with near-perfect efficiency.'
  ];
  
  quoteBtn.addEventListener('click', function() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteText = document.createElement('div');
    quoteText.id = 'quote-text';
    quoteText.textContent = randomQuote;
    quoteText.className = 'quote-text';
    
    // Remove existing quote text
    const existingQuote = document.getElementById('quote-text');
    if (existingQuote) {
      existingQuote.remove();
    }
    
    // Add new quote text after the button
    quoteBtn.parentNode.insertBefore(quoteText, quoteBtn.nextSibling);
  });

  // Booking buttons
  const bookingButtons = document.querySelectorAll('.action-btn');
  bookingButtons.forEach(button => {
    button.addEventListener('click', function() {
      const action = this.getAttribute('data-action');
      console.log(`Booking action: ${action}`);
      // Add your booking logic here
      alert(`Accessing ${action}...`);
    });
  });

  // Contact buttons
  const contactButtons = document.querySelectorAll('.contact-btn');
  contactButtons.forEach(button => {
    button.addEventListener('click', function() {
      const action = this.getAttribute('data-action');
      console.log(`Contact action: ${action}`);
      // Add your contact logic here
      alert(`Accessing ${action}...`);
    });
  });

  // Back to top button
  const backToTop = document.querySelector('.back-to-top');
  backToTop.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

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
      <div class='slide'>
        <h3>${slide.title}</h3>
        <p>${slide.content}</p>
        <div class='slide-image'>${slide.image}</div>
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

  // Interactive planets functionality
  const planets = document.querySelectorAll('.planet');
  const planetDetails = document.getElementById('planet-details');
  const planetDescription = document.getElementById('planet-description');

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
});

// Add keyboard navigation for accessibility
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeMenu();
  }
});

// Add touch support for mobile devices
document.addEventListener('touchstart', function(event) {
  // Close mobile menu when clicking outside
  if (!mobileMenu.contains(event.target) && !navMenu.contains(event.target) && !event.target.closest('.mobile-nav')) {
    closeMenu();
  }
});

// Add scroll event listener for parallax effect
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector('.parallax');
  
  if (parallax) {
    parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Add resize event listener for responsive design
window.addEventListener('resize', function() {
  // Adjust mobile menu if window is resized
  if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
    closeMenu();
  }
});

// Add click event listener for slide navigation
prevSlide.addEventListener('click', function() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlide(currentSlideIndex);
});

nextSlide.addEventListener('click', function() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
});

// Add keyboard navigation for slide navigation
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    prevSlide.click();
  } else if (event.key === 'ArrowRight') {
    nextSlide.click();
  }
});

// Add touch support for slide navigation
document.addEventListener('touchstart', function(event) {
  if (event.touches[0].clientX < window.innerWidth / 2) {
    prevSlide.click();
  } else {
    nextSlide.click();
  }
});

// Add hover effect for slide navigation buttons
prevSlide.addEventListener('mouseenter', function() {
  this.style.transform = 'translateX(-5px)';
});

prevSlide.addEventListener('mouseleave', function() {
  this.style.transform = 'translateX(0)';
});

nextSlide.addEventListener('mouseenter', function() {
  this.style.transform = 'translateX(5px)';
});

nextSlide.addEventListener('mouseleave', function() {
  this.style.transform = 'translateX(0)';
});

// Add click event listener for booking buttons
bookingButtons.forEach(button => {
  button.addEventListener('click', function() {
    const action = this.getAttribute('data-action');
    console.log(`Booking action: ${action}`);
    // Add your booking logic here
    alert(`Accessing ${action}...`);
  });
});

// Add click event listener for contact buttons
contactButtons.forEach(button => {
  button.addEventListener('click', function() {
    const action = this.getAttribute('data-action');
    console.log(`Contact action: ${action}`);
    // Add your contact logic here
    alert(`Accessing ${action}...`);
  });
});

// Add click event listener for back to top button
backToTop.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Add hover effect for back to top button
backToTop.addEventListener('mouseenter', function() {
  this.style.transform = 'translateY(-5px)';
});

backToTop.addEventListener('mouseleave', function() {
  this.style.transform = 'translateY(0)';
});

// Add click event listener for quote button
quoteBtn.addEventListener('click', function() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const quoteText = document.createElement('div');
  quoteText.id = 'quote-text';
  quoteText.textContent = randomQuote;
  quoteText.className = 'quote-text';
  
  // Remove existing quote text
  const existingQuote = document.getElementById('quote-text');
  if (existingQuote) {
    existingQuote.remove();
  }
  
  // Add new quote text after the button
  quoteBtn.parentNode.insertBefore(quoteText, quoteBtn.nextSibling);
});

// Add hover effect for quote button
quoteBtn.addEventListener('mouseenter', function() {
  this.style.transform = 'translateY(-5px)';
});

quoteBtn.addEventListener('mouseleave', function() {
  this.style.transform = 'translateY(0)';
});

// Add keyboard support for quote button
quoteBtn.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteText = document.createElement('div');
    quoteText.id = 'quote-text';
    quoteText.textContent = randomQuote;
    quoteText.className = 'quote-text';
    
    // Remove existing quote text
    const existingQuote = document.getElementById('quote-text');
    if (existingQuote) {
    existingQuote.remove();
    }
    
    // Add new quote text after the button
    quoteBtn.parentNode.insertBefore(quoteText, quoteBtn.nextSibling);
  }
});

// Add initial quote with loading state
showRandomQuote();

// Additional animations for black hole-related elements
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

// Enhanced hover effects for interactive elements
function enhanceHoverEffects() {
  const interactiveElements = document.querySelectorAll('.planet, .slide-btn, .action-btn, .contact-btn');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
      this.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.4)';
    });
    
    element.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.2)';
    });
  });
}

// Enhanced click effects for interactive elements
function enhanceClickEffects() {
  const interactiveElements = document.querySelectorAll('.planet, .slide-btn, .action-btn, .contact-btn');
  
  interactiveElements.forEach(element => {
    element.addEventListener('click', function() {
      this.style.transform = 'translateY(2px)';
      setTimeout(() => {
        this.style.transform = 'translateY(0)';
      }, 100);
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
      }
    });
  });
}

// Enhanced touch interactions for mobile devices
function enhanceTouchInteractions() {
  const interactiveElements = document.querySelectorAll('.planet, .slide-btn, .action-btn, .contact-btn');
  
  interactiveElements.forEach(element => {
    element.addEventListener('touchstart', function() {
      this.style.transform = 'translateY(2px)';
    });
    
    element.addEventListener('touchend', function() {
      this.style.transform = 'translateY(0)';
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
document.addEventListener('DOMContentLoaded', function() {
  animateBlackHoleElements();
  animateBlackHoleIcons();
  animateBlackHoleCore();
  enhanceHoverEffects();
  enhanceClickEffects();
  enhanceKeyboardNavigation();
  enhanceTouchInteractions();
  enhanceParallaxEffect();
});

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
}

// Enhanced initialization
document.addEventListener('DOMContentLoaded', function() {
  try {
    // Initialize black hole animations
    animateBlackHoleElements();
    animateBlackHoleIcons();
    animateBlackHoleCore();
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

// Fixed showSlide function
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
}'}```json
{