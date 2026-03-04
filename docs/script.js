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

// Enhanced interactive elements functionality
function initInteractiveElements() {
  // Planet interactions with hover effects
  const planets = document.querySelectorAll(".planet");
  const planetDetails = document.getElementById("planet-details");
  const planetDescription = document.getElementById("planet-description");

  planets.forEach((planet) => {
    // Add hover effect
    planet.addEventListener("mouseenter", () => {
      planet.style.transform = "scale(1.05)";
      planet.style.boxShadow = "0 8px 25px rgba(255, 107, 107, 0.4)";
    });

    planet.addEventListener("mouseleave", () => {
      planet.style.transform = "scale(1)";
      planet.style.boxShadow = "none";
    });

    // Click interaction
    planet.addEventListener("click", () => {
      const planetName = planet.dataset.planet;
      const descriptions = {
        mercury: "Mercury, being closest to the Sun, experiences extreme tidal forces when near a black hole, potentially leading to orbital instability.",
        venus: "Venus, with its thick atmosphere, would experience dramatic atmospheric changes near a black hole due to intense gravitational effects.",
        earth: "Earth would face catastrophic tidal forces near a black hole, potentially leading to spaghettification of the planet.",
        mars: "Mars, with its thin atmosphere, would experience rapid atmospheric loss when exposed to a black hole's intense radiation.",
        jupiter: "Jupiter, being a gas giant, would undergo extreme compression and potential disintegration near a supermassive black hole.",
        saturn: "Saturn's iconic rings would be torn apart by tidal forces when approaching a black hole.",
        uranus: "Uranus, with its unique axial tilt, would experience dramatic orbital perturbations near a black hole.",
        neptune: "Neptune, being farthest from the Sun, would still face catastrophic effects when near a black hole due to its strong gravitational pull.",
      };

      planetDescription.innerHTML = descriptions[planetName] || "Click on a planet to learn more about its interaction with black holes.";
      planetDetails.style.display = "block";
    });
  });

  // Enhanced black hole interactions with tooltips
  const blackHoles = document.querySelectorAll(".black-hole");
  const blackHoleDetails = document.getElementById("black-hole-details");
  const blackHoleDescription = document.getElementById("black-hole-description");

  blackHoles.forEach((blackHole) => {
    // Add tooltip functionality
    const tooltip = document.createElement("div");
    tooltip.className = "black-hole-tooltip";
    tooltip.style.cssText = `
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(10, 10, 10, 0.9);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
      z-index: 1000;
    `;

    // Set tooltip content based on black hole type
    const blackHoleType = blackHole.dataset.blackHole;
    const tooltipText = {
      stellar: "Stellar black holes form from the collapse of massive stars and typically have masses between 3 to 100 times that of our Sun.",
      supermassive: "Supermassive black holes are found at the centers of most galaxies and can have masses millions to billions times that of our Sun.",
      intermediate: "Intermediate black holes are theoretical objects with masses between stellar and supermassive black holes, yet to be confirmed.",
      micro: "Micro black holes are hypothetical black holes that could have been created during the Big Bang and might have masses smaller than our Sun.",
    };

    tooltip.textContent = tooltipText[blackHoleType] || "Click to learn more about this black hole.";
    blackHole.appendChild(tooltip);

    // Add hover effect
    blackHole.addEventListener("mouseenter", () => {
      blackHole.style.transform = "scale(1.05)";
      blackHole.style.boxShadow = "0 8px 25px rgba(139, 0, 0, 0.4)";
      tooltip.style.opacity = "1";
    });

    blackHole.addEventListener("mouseleave", () => {
      blackHole.style.transform = "scale(1)";
      blackHole.style.boxShadow = "none";
      tooltip.style.opacity = "0";
    });

    // Click interaction
    blackHole.addEventListener("click", () => {
      const descriptions = {
        stellar: "Stellar black holes form from the collapse of massive stars and typically have masses between 3 to 100 times that of our Sun.",
        supermassive: "Supermassive black holes are found at the centers of most galaxies and can have masses millions to billions times that of our Sun.",
        intermediate: "Intermediate black holes are theoretical objects with masses between stellar and supermassive black holes, yet to be confirmed.",
        micro: "Micro black holes are hypothetical black holes that could have been created during the Big Bang and might have masses smaller than our Sun.",
      };

      blackHoleDescription.innerHTML = descriptions[blackHoleType] || "Click on a black hole to learn more about its properties.";
      blackHoleDetails.style.display = "block";
    });
  });
}

// Enhanced quote functionality with animation
function initQuoteButton() {
  const quoteBtn = document.getElementById("quote-btn");
  const quotes = [
    "Black holes are where God divided by zero.",
    "A black hole is a region of spacetime where gravity is so strong that nothing, not even light, can escape from it.",
    "The black holes of nature are the most perfect macroscopic objects there are in the universe.",
    "Black holes ain't as black as they are painted.",
    "The event horizon is the boundary around a black hole from which nothing can escape.",
    "Time slows down near a black hole due to gravitational time dilation.",
    "Spaghettification is what happens to objects approaching a black hole.",
    "Gravitational waves are ripples in spacetime caused by accelerating masses, such as merging black holes.",
  ];

  if (quoteBtn) {
    quoteBtn.addEventListener("click", () => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      quoteBtn.style.opacity = "0";
      setTimeout(() => {
        quoteBtn.textContent = randomQuote;
        quoteBtn.style.opacity = "1";
        quoteBtn.style.transition = "opacity 0.3s ease";
      }, 300);
    });
  }
}

// Enhanced mobile menu functionality with animation
function initMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");
  const navToggle = document.querySelector(".nav-toggle");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      navToggle.classList.toggle("active");
      
      // Animate menu items
      if (navMenu.classList.contains("active")) {
        const navLinks = navMenu.querySelectorAll(".nav-link");
        navLinks.forEach((link, index) => {
          link.style.animation = `slideIn 0.3s ease forwards ${index * 0.1}s`;
        });
      }
    });
  }

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
    });
  });
}

// Enhanced smooth scrolling with active state
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove("active"));
        // Add active class to clicked link
        link.classList.add("active");
        
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}

// Enhanced parallax effect with mouse movement
function initParallax() {
  const parallaxElements = document.querySelectorAll(".parallax__layer");
  const speed = 0.5;

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    parallaxElements.forEach((element) => {
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });

  // Add mouse movement effect
  document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    parallaxElements.forEach((element, index) => {
      const layerSpeed = (index + 1) * 0.5;
      const moveX = (mouseX - 0.5) * layerSpeed;
      const moveY = (mouseY - 0.5) * layerSpeed;
      element.style.transform += ` translate(${moveX}px, ${moveY}px)`;
    });
  });
}

// Enhanced slide show functionality with swipe support
function initSlides() {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-slide");
  const nextBtn = document.querySelector(".next-slide");
  const indicator = document.querySelector(".slide-indicator");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      slide.style.animation = `fadeIn 0.5s ease ${i === index ? 'forwards' : 'backwards'}`;
    });
    currentSlide = index;
    indicator.textContent = `${index + 1} of ${slides.length}`;
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      showSlide((currentSlide - 1 + slides.length) % slides.length);
    });

    nextBtn.addEventListener("click", () => {
      showSlide((currentSlide + 1) % slides.length);
    });
  }

  // Auto-advance slides with pause on hover
  let autoAdvanceInterval;
  function startAutoAdvance() {
    autoAdvanceInterval = setInterval(() => {
      showSlide((currentSlide + 1) % slides.length);
    }, 5000);
  }

  function stopAutoAdvance() {
    clearInterval(autoAdvanceInterval);
  }

  const slideContainer = document.querySelector(".slide-container");
  if (slideContainer) {
    slideContainer.addEventListener("mouseenter", stopAutoAdvance);
    slideContainer.addEventListener("mouseleave", startAutoAdvance);
  }

  startAutoAdvance();

  // Add swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  slideContainer.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  slideContainer.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      showSlide((currentSlide + 1) % slides.length);
    }
    if (touchEndX > touchStartX + 50) {
      showSlide((currentSlide - 1 + slides.length) % slides.length);
    }
  }
}

// Enhanced contact form functionality with validation
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(form);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");

      // Enhanced validation
      let isValid = true;
      let errorMessage = "";

      if (!name || name.trim().length < 2) {
        isValid = false;
        errorMessage = "Please enter a valid name (at least 2 characters).";
      } else if (!email || !isValidEmail(email)) {
        isValid = false;
        errorMessage = "Please enter a valid email address.";
      } else if (!message || message.trim().length < 10) {
        isValid = false;
        errorMessage = "Please enter a message with at least 10 characters.";
      }

      if (!isValid) {
        showFormError(errorMessage);
        return;
      }

      // Show success message with animation
      showFormSuccess();
      form.reset();
    });
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^ @]+@[^ @]+.[^ @]+$/;
  return emailRegex.test(email);
}

function showFormError(message) {
  // Remove existing error message
  const existingError = document.querySelector(".form-error");
  if (existingError) {
    existingError.remove();
  }

  // Create error message
  const errorDiv = document.createElement("div");
  errorDiv.className = "form-error";
  errorDiv.textContent = message;
  errorDiv.style.cssText = `
    background: rgba(139, 0, 0, 0.9);
    color: white;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    animation: slideDown 0.3s ease;
  `;

  // Add to form
  const form = document.getElementById("contact-form");
  form.insertBefore(errorDiv, form.firstChild);

  // Remove after 5 seconds
  setTimeout(() => {
    errorDiv.style.animation = "slideUp 0.3s ease";
    setTimeout(() => errorDiv.remove(), 300);
  }, 5000);
}

function showFormSuccess() {
  // Remove existing success message
  const existingSuccess = document.querySelector(".form-success");
  if (existingSuccess) {
    existingSuccess.remove();
  }

  // Create success message
  const successDiv = document.createElement("div");
  successDiv.className = "form-success";
  successDiv.textContent = "Thank you for your message! We will get back to you soon.";
  successDiv.style.cssText = `
    background: rgba(46, 204, 113, 0.9);
    color: white;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    animation: slideDown 0.3s ease;
  `;

  // Add to form
  const form = document.getElementById("contact-form");
  form.insertBefore(successDiv, form.firstChild);

  // Remove after 5 seconds
  setTimeout(() => {
    successDiv.style.animation = "slideUp 0.3s ease";
    setTimeout(() => successDiv.remove(), 300);
  }, 5000);
}

// Enhanced gallery functionality with lightbox
function initGallery() {
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      if (img) {
        // Create modal
        const modal = document.createElement("div");
        modal.className = "gallery-modal";
        modal.innerHTML = `
          <div class='gallery-modal-content'>
            <span class='gallery-modal-close'>&times;</span>
            <img src='${img.src}' alt='${img.alt}' class='gallery-modal-img'>
            <div class='gallery-modal-caption'>${img.alt}</div>
          </div>
        `;
        modal.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10000;
          animation: fadeIn 0.3s ease;
        `;
        
        document.body.appendChild(modal);
        
        // Add close functionality
        const closeBtn = modal.querySelector(".gallery-modal-close");
        closeBtn.addEventListener("click", () => {
          modal.style.animation = "fadeOut 0.3s ease";
          setTimeout(() => modal.remove(), 300);
        });
        
        // Close on background click
        modal.addEventListener("click", (e) => {
          if (e.target === modal) {
            modal.style.animation = "fadeOut 0.3s ease";
            setTimeout(() => modal.remove(), 300);
          }
        });
      }
    });
  });
}

// Add animation keyframes
const style = document.createElement("style");
style.textContent = `
  @keyframes slideIn {
    0% { transform: translateY(-100%); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  
  @keyframes slideDown {
    0% { transform: translateY(-100%); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes slideUp {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-100%); opacity: 0; }
  }
  
  @keyframes fadeOut {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }
`;
document.head.appendChild(style);

// Initialize all functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initInteractiveElements();
  initQuoteButton();
  initMobileMenu();
  initSmoothScrolling();
  initParallax();
  initSlides();
  initContactForm();
  initGallery();
});

// Add mobile menu toggle functionality
function toggleMobileMenu() {
  const navMenu = document.querySelector(".nav-menu");
  const navToggle = document.querySelector(".nav-toggle");
  
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      navToggle.classList.toggle("active");
    });
  }
}

toggleMobileMenu();

// Fix the syntax error in the showSlide function
function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    slide.style.animation = `fadeIn 0.5s ease ${i === index ? 'forwards' : 'backwards'}`;
  });
}