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

// Beach activity selector functionality
const activitySelector = document.getElementById('activity-selector');
const activityDisplay = document.getElementById('activity-display');

if (activitySelector && activityDisplay) {
  activitySelector.addEventListener('change', function() {
    const selectedActivity = this.value;
    activityDisplay.textContent = `You selected: ${selectedActivity}`;
    activityDisplay.style.opacity = '0';
    
    setTimeout(() => {
      activityDisplay.style.transition = 'opacity 0.5s';
      activityDisplay.style.opacity = '1';
    }, 100);
  });
}

// Water sports booking form functionality
const bookingForm = document.getElementById('booking-form');
const bookingMessage = document.getElementById('booking-message');

if (bookingForm) {
  bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const bookingDetails = Object.fromEntries(formData);
    
    bookingMessage.textContent = 'Booking successful!';
    bookingMessage.style.color = 'green';
    bookingMessage.style.opacity = '0';
    
    setTimeout(() => {
      bookingMessage.style.transition = 'opacity 0.5s';
      bookingMessage.style.opacity = '1';
    }, 100);
    
    this.reset();
  });
}

// Contact form functionality
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const contactDetails = Object.fromEntries(formData);
    
    contactMessage.textContent = 'Message sent successfully!';
    contactMessage.style.color = 'green';
    contactMessage.style.opacity = '0';
    
    setTimeout(() => {
      contactMessage.style.transition = 'opacity 0.5s';
      contactMessage.style.opacity = '1';
    }, 100);
    
    this.reset();
  });
}

// Social media buttons functionality
const socialButtons = document.querySelectorAll('.social-button');
socialButtons.forEach(button => {
  button.addEventListener('click', function() {
    const platform = this.dataset.platform;
    const url = this.dataset.url;
    
    window.open(url, '_blank');
    
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 100);
  });
});

// Newsletter signup functionality
const newsletterForm = document.getElementById('newsletter-form');
const newsletterMessage = document.getElementById('newsletter-message');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    
    if (email) {
      newsletterMessage.textContent = 'Thank you for subscribing!';
      newsletterMessage.style.color = 'green';
      newsletterMessage.style.opacity = '0';
      
      setTimeout(() => {
        newsletterMessage.style.transition = 'opacity 0.5s';
        newsletterMessage.style.opacity = '1';
      }, 100);
      
      this.reset();
    } else {
      newsletterMessage.textContent = 'Please enter a valid email address.';
      newsletterMessage.style.color = 'red';
      newsletterMessage.style.opacity = '0';
      
      setTimeout(() => {
        newsletterMessage.style.transition = 'opacity 0.5s';
        newsletterMessage.style.opacity = '1';
      }, 100);
    }
  });
}

// Beach weather widget functionality
const weatherWidget = document.getElementById('weather-widget');
const weatherInfo = document.getElementById('weather-info');

if (weatherWidget && weatherInfo) {
  weatherWidget.addEventListener('click', function() {
    const weatherData = {
      temperature: '75°F',
      condition: 'Sunny',
      humidity: '60%',
      wind: '5 mph'
    };
    
    weatherInfo.innerHTML = `
      <p>Temperature: ${weatherData.temperature}</p>
      <p>Condition: ${weatherData.condition}</p>
      <p>Humidity: ${weatherData.humidity}</p>
      <p>Wind: ${weatherData.wind}</p>
    `;
    
    weatherInfo.style.opacity = '0';
    
    setTimeout(() => {
      weatherInfo.style.transition = 'opacity 0.5s';
      weatherInfo.style.opacity = '1';
    }, 100);
  });
}

// Beach camera live stream functionality
const cameraButton = document.getElementById('camera-button');
const cameraStream = document.getElementById('camera-stream');

if (cameraButton && cameraStream) {
  cameraButton.addEventListener('click', function() {
    cameraStream.src = 'https://example.com/beach-cam.jpg';
    cameraStream.style.display = 'block';
    
    this.textContent = 'Stop Live Stream';
    this.dataset.action = 'stop';
    
    this.addEventListener('click', function() {
      if (this.dataset.action === 'stop') {
        cameraStream.style.display = 'none';
        this.textContent = 'Start Live Stream';
        this.dataset.action = 'start';
      }
    });
  });
}

// Beach event calendar functionality
const eventCalendar = document.getElementById('event-calendar');
const eventDetails = document.getElementById('event-details');

if (eventCalendar && eventDetails) {
  eventCalendar.addEventListener('change', function() {
    const selectedDate = this.value;
    const events = {
      '2024-06-15': 'Beach Party',
      '2024-06-20': 'Surf Competition',
      '2024-06-25': 'Yoga on the Beach',
      '2024-06-30': 'Fireworks Display'
    };
    
    const event = events[selectedDate];
    
    if (event) {
      eventDetails.textContent = `Event on ${selectedDate}: ${event}`;
      eventDetails.style.color = 'green';
    } else {
      eventDetails.textContent = 'No events scheduled for this date.';
      eventDetails.style.color = 'gray';
    }
    
    eventDetails.style.opacity = '0';
    
    setTimeout(() => {
      eventDetails.style.transition = 'opacity 0.5s';
      eventDetails.style.opacity = '1';
    }, 100);
  });
}

// Beach shop functionality
const shopItems = document.querySelectorAll('.shop-item');
const cart = document.getElementById('cart');
const cartCount = document.getElementById('cart-count');

let cartItems = 0;

shopItems.forEach(item => {
  item.addEventListener('click', function() {
    cartItems++;
    cartCount.textContent = cartItems;
    
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 100);
  });
});

// Beach restaurant menu functionality
const menuItems = document.querySelectorAll('.menu-item');
const orderList = document.getElementById('order-list');
const orderTotal = document.getElementById('order-total');

let total = 0;

menuItems.forEach(item => {
  item.addEventListener('click', function() {
    const itemName = this.dataset.name;
    const itemPrice = parseFloat(this.dataset.price);
    
    const listItem = document.createElement('li');
    listItem.textContent = `${itemName} - $${itemPrice.toFixed(2)}`;
    orderList.appendChild(listItem);
    
    total += itemPrice;
    orderTotal.textContent = `Total: $${total.toFixed(2)}`;
    
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 100);
  });
});

// Beach photo gallery functionality
const galleryImages = document.querySelectorAll('.gallery-image');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');

galleryImages.forEach(image => {
  image.addEventListener('click', function() {
    lightboxImage.src = this.src;
    lightbox.style.display = 'flex';
    
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 100);
  });
});

lightbox.addEventListener('click', function() {
  this.style.display = 'none';
});

// Beach donation functionality
const donationForm = document.getElementById('donation-form');
const donationMessage = document.getElementById('donation-message');

if (donationForm) {
  donationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const amount = parseFloat(this.querySelector('input[type="number"]').value);
    
    if (amount > 0) {
      donationMessage.textContent = 'Thank you for your donation!';
      donationMessage.style.color = 'green';
      donationMessage.style.opacity = '0';
      
      setTimeout(() => {
        donationMessage.style.transition = 'opacity 0.5s';
        donationMessage.style.opacity = '1';
      }, 100);
      
      this.reset();
    } else {
      donationMessage.textContent = 'Please enter a valid donation amount.';
      donationMessage.style.color = 'red';
      donationMessage.style.opacity = '0';
      
      setTimeout(() => {
        donationMessage.style.transition = 'opacity 0.5s';
        donationMessage.style.opacity = '1';
      }, 100);
    }
  });
}

// Beach feedback form functionality
const feedbackForm = document.getElementById('feedback-form');
const feedbackMessage = document.getElementById('feedback-message');

if (feedbackForm) {
  feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const feedback = this.querySelector('textarea').value;
    
    if (feedback) {
      feedbackMessage.textContent = 'Thank you for your feedback!';
      feedbackMessage.style.color = 'green';
      feedbackMessage.style.opacity = '0';
      
      setTimeout(() => {
        feedbackMessage.style.transition = 'opacity 0.5s';
        feedbackMessage.style.opacity = '1';
      }, 100);
      
      this.reset();
    } else {
      feedbackMessage.textContent = 'Please enter your feedback.';
      feedbackMessage.style.color = 'red';
      feedbackMessage.style.opacity = '0';
      
      setTimeout(() => {
        feedbackMessage.style.transition = 'opacity 0.5s';
        feedbackMessage.style.opacity = '1';
      }, 100);
    }
  });
}

// Beach volunteer signup functionality
const volunteerForm = document.getElementById('volunteer-form');
const volunteerMessage = document.getElementById('volunteer-message');

if (volunteerForm) {
  volunteerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[name="name"]').value;
    const email = this.querySelector('input[name="email"]').value;
    const skills = this.querySelector('input[name="skills"]').value;
    
    if (name && email && skills) {
      volunteerMessage.textContent = 'Thank you for volunteering!';
      volunteerMessage.style.color = 'green';
      volunteerMessage.style.opacity = '0';
      
      setTimeout(() => {
        volunteerMessage.style.transition = 'opacity 0.5s';
        volunteerMessage.style.opacity = '1';
      }, 100);
      
      this.reset();
    } else {
      volunteerMessage.textContent = 'Please fill in all fields.';
      volunteerMessage.style.color = 'red';
      volunteerMessage.style.opacity = '0';
      
      setTimeout(() => {
        volunteerMessage.style.transition = 'opacity 0.5s';
        volunteerMessage.style.opacity = '1';
      }, 100);
    }
  });
}

// Beach event countdown functionality
const eventDate = new Date('2024-07-01T00:00:00');
const countdownDisplay = document.getElementById('countdown-display');

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;
  
  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    countdownDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    countdownDisplay.textContent = 'Event Started!';
  }
}

updateCountdown();

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

// Helper function for random number generation
function random() {
  return Math.random();
}

// Added functionality for the new buttons in test-website/index.html
// Book Activities button functionality
document.querySelector('[data-action="activities"]').addEventListener('click', function() {
  // Handle book activities action
  console.log('Book Activities button clicked');
  // Add your custom functionality here
});

// Reserve Accommodations button functionality
document.querySelector('[data-action="accommodations"]').addEventListener('click', function() {
  // Handle reserve accommodations action
  console.log('Reserve Accommodations button clicked');
  // Add your custom functionality here
});

// Rent Equipment button functionality
document.querySelector('[data-action="equipment"]').addEventListener('click', function() {
  // Handle rent equipment action
  console.log('Rent Equipment button clicked');
  // Add your custom functionality here
});

// Send Message button functionality
document.querySelector('[data-action="message"]').addEventListener('click', function() {
  // Handle send message action
  console.log('Send Message button clicked');
  // Add your custom functionality here
});

// Call Us button functionality
document.querySelector('[data-action="call"]').addEventListener('click', function() {
  // Handle call us action
  console.log('Call Us button clicked');
  // Add your custom functionality here
});

// FAQs button functionality
document.querySelector('[data-action="faqs"]').addEventListener('click', function() {
  // Handle FAQs action
  console.log('FAQs button clicked');
  // Add your custom functionality here
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