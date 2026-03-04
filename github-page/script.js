async function listFiles(folderPath) {
  const repo = detectGitHubRepo();

  if (repo) {
    const apiUrl = `https://api.github.com/repos/${repo.owner}/${repo.repo}/contents/${folderPath}`;
    const response = await fetch(apiUrl);
    if (!response.ok) return [];

    const payload = await response.json();
    return Array.isArray(payload)
      ? payload.filter((item) => item.type === "file").map((item) => ({
          name: item.name,
          path: item.path,
          size: item.size,
          downloadUrl: item.download_url,
        }))
      : [];
  }

  const fallback = ["1.json", "2.json", "3.json"];
  return fallback.map((name) => ({
    name,
    path: `${folderPath}/${name}`,
    size: 0,
    downloadUrl: `../${folderPath}/${name}`,
  }));
}

// Black Hole-themed animations and interactions
function animateBlackHoleElements() {
  const blackHoleElements = document.querySelectorAll('.black-hole-decorations .event-horizon, .black-hole-decorations .accretion-disk, .black-hole-decorations .stellar-remnant');
  
  blackHoleElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.5}s`;
  });
}

function animateStars() {
  const stars = document.querySelectorAll('.parallax__star');
  
  stars.forEach((star, index) => {
    star.style.animationDelay = `${index * 0.3}s`;
  });
}

function animateGalaxies() {
  const galaxies = document.querySelectorAll('.parallax__galaxy');
  
  galaxies.forEach((galaxy, index) => {
    galaxy.style.animationDelay = `${index * 2}s`;
  });
}

// Enhanced hover effects for interactive elements
function enhanceHoverEffects() {
  const interactiveElements = document.querySelectorAll('.card, .file, .pill, button');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px) scale(1.02)';
      this.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.4)';
      
      // Add glow effect
      this.style.filter = 'drop-shadow(0 0 10px rgba(255, 107, 107, 0.5))';
    });
    
    element.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.2)';
      
      // Remove glow effect
      this.style.filter = 'none';
    });
  });
}

// Enhanced click effects for interactive elements
function enhanceClickEffects() {
  const interactiveElements = document.querySelectorAll('.card, .file, .pill, button');
  
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
  const interactiveElements = document.querySelectorAll('.card, .file, .pill, button');
  
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
  const interactiveElements = document.querySelectorAll('.card, .file, .pill, button');
  
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
  animateBlackHoleCore();
}

// Enhanced performance optimization
function optimizePerformance() {
  const interactiveElements = document.querySelectorAll('.card, .file, .pill, button');
  
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
    animateBlackHoleCore();
    enhanceAnimations();
    enhanceHoverEffects();
    enhanceClickEffects();
    enhanceKeyboardNavigation();
    enhanceTouchInteractions();
    enhanceParallaxEffect();
    
    // Optimize performance
    optimizePerformance();
  } catch (error) {
    console.error('Error initializing black hole animations:', error);
  }
});

// Enhanced cleanup on page unload
window.addEventListener('beforeunload', function() {
  // Clean up event listeners
  const interactiveElements = document.querySelectorAll('.card, .file, .pill, button');
  
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
    image: '□'
  },
  {
    title: 'Singularity',
    content: 'The singularity is the point at the center of a black hole where density becomes infinite.',
    image: '⚫'
  },
  {
    title: 'Accretion Disk',
    content: 'An accretion disk is a structure formed by diffuse material in orbital motion around a massive central body.',
    image: '📀'
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