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

// Interactive elements functionality
function initInteractiveElements() {
  // Planet interactions
  const planets = document.querySelectorAll('.planet');
  const planetDetails = document.getElementById('planet-details');
  const planetDescription = document.getElementById('planet-description');

  planets.forEach((planet) => {
    planet.addEventListener('click', () => {
      const planetName = planet.dataset.planet;
      const descriptions = {
        mercury: 'Mercury, being closest to the Sun, experiences extreme tidal forces when near a black hole, potentially leading to orbital instability.',
        venus: 'Venus, with its thick atmosphere, would experience dramatic atmospheric changes near a black hole due to intense gravitational effects.',
        earth: 'Earth would face catastrophic tidal forces near a black hole, potentially leading to spaghettification of the planet.',
        mars: 'Mars, with its thin atmosphere, would experience rapid atmospheric loss when exposed to a black hole's intense radiation.',
        jupiter: 'Jupiter, being a gas giant, would undergo extreme compression and potential disintegration near a supermassive black hole.',
        saturn: 'Saturn's iconic rings would be torn apart by tidal forces when approaching a black hole.',
        uranus: 'Uranus, with its unique axial tilt, would experience dramatic orbital perturbations near a black hole.',
        neptune: 'Neptune, being farthest from the Sun, would still face catastrophic effects when near a black hole due to its strong gravitational pull.',
      };

      planetDescription.innerHTML = descriptions[planetName] || 'Click on a planet to learn more about its interaction with black holes.';
      planetDetails.style.display = 'block';
    });
  });

  // Black hole interactions
  const blackHoles = document.querySelectorAll('.black-hole');
  const blackHoleDetails = document.getElementById('black-hole-details');
  const blackHoleDescription = document.getElementById('black-hole-description');

  blackHoles.forEach((blackHole) => {
    blackHole.addEventListener('click', () => {
      const blackHoleType = blackHole.dataset.blackHole;
      const descriptions = {
        stellar: 'Stellar black holes form from the collapse of massive stars and typically have masses between 3 to 100 times that of our Sun.',
        supermassive: 'Supermassive black holes are found at the centers of most galaxies and can have masses millions to billions of times that of our Sun.',
        intermediate: 'Intermediate black holes are theoretical objects with masses between stellar and supermassive black holes, yet to be confirmed.',
        micro: 'Micro black holes are hypothetical black holes that could have been created during the Big Bang and might have masses smaller than our Sun.',
      };

      blackHoleDescription.innerHTML = descriptions[blackHoleType] || 'Click on a black hole to learn more about its properties.';
      blackHoleDetails.style.display = 'block';
    });
  });
}

// Quote functionality
function initQuoteButton() {
  const quoteBtn = document.getElementById('quote-btn');
  const quotes = [
    'Black holes are where God divided by zero.',
    'A black hole is a region of spacetime where gravity is so strong that nothing, not even light, can escape from it.',
    'The black holes of nature are the most perfect macroscopic objects there are in the universe.',
    'Black holes ain't as black as they are painted.',
    'The event horizon is the boundary around a black hole from which nothing can escape.',
    'Time slows down near a black hole due to gravitational time dilation.',
    'Spaghettification is what happens to objects approaching a black hole.',
    'Gravitational waves are ripples in spacetime caused by accelerating masses, such as merging black holes.',
  ];

  if (quoteBtn) {
    quoteBtn.addEventListener('click', () => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      quoteBtn.textContent = randomQuote;
    });
  }
}

// Mobile menu functionality
function initMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const navMenu = document.querySelector('.nav-menu');
  const navToggle = document.querySelector('.nav-toggle');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
  }

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Parallax effect
function initParallax() {
  const parallaxElements = document.querySelectorAll('.parallax__layer');
  const speed = 0.5;

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    parallaxElements.forEach((element) => {
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
}

// Slide show functionality
function initSlides() {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev-slide');
  const nextBtn = document.querySelector('.next-slide');
  const indicator = document.querySelector('.slide-indicator');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    currentSlide = index;
    indicator.textContent = `${index + 1} of ${slides.length}`;
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide((currentSlide - 1 + slides.length) % slides.length);
    });

    nextBtn.addEventListener('click', () => {
      showSlide((currentSlide + 1) % slides.length);
    });
  }

  // Auto-advance slides
  setInterval(() => {
    showSlide((currentSlide + 1) % slides.length);
  }, 5000);
}

// Contact form functionality
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');

      // Simple validation
      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }

      // Show success message
      alert('Thank you for your message! We will get back to you soon.');
      form.reset();
    });
  }
}

// Gallery functionality
function initGallery() {
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img) {
        // Create modal
        const modal = document.createElement('div');
        modal.className = 'gallery-modal';
        modal.innerHTML = `
          <div class="modal-content">
            <span class="close">&times;</span>
            <img src="${img.src}" alt="${img.alt}" />
            <div class="modal-caption">${img.alt}</div>
          </div>
        `;

        document.body.appendChild(modal);

        // Close modal
        const closeBtn = modal.querySelector('.close');
        closeBtn.addEventListener('click', () => {
          document.body.removeChild(modal);
        });

        // Close on click outside
        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            document.body.removeChild(modal);
          }
        });
      }
    });
  });
}

// Timeline functionality
function initTimeline() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  timelineItems.forEach((item) => {
    observer.observe(item);
  });
}

// Initialize all functionality
function initAll() {
  initInteractiveElements();
  initQuoteButton();
  initMobileMenu();
  initSmoothScrolling();
  initParallax();
  initSlides();
  initContactForm();
  initGallery();
  initTimeline();
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initAll);

// Add CSS for mobile menu and gallery modal
const style = document.createElement('style');
style.textContent = `
  .nav-menu.active {
    display: block !important;
  }
  
  .nav-toggle.active .bar:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
  }
  
  .nav-toggle.active .bar:nth-child(2) {
    opacity: 0;
  }
  
  .nav-toggle.active .bar:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
  }
  
  .gallery-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: fadeIn 0.3s ease-in;
  }
  
  .modal-content {
    position: relative;
    text-align: center;
  }
  
  .modal-content img {
    max-width: 90%;
    max-height: 80vh;
    border-radius: 8px;
  }
  
  .modal-caption {
    color: white;
    margin-top: 10px;
    font-size: 18px;
  }
  
  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    color: white;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    z-index: 1001;
  }
  
  .close:hover {
    color: #ccc;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  .timeline-item.active {
    animation: slideIn 0.5s ease-out;
  }
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

document.head.appendChild(style);