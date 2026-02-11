const quotes = [
  '“The impediment to action advances action. What stands in the way becomes the way.”',
  '“Waste no more time arguing what a good man should be. Be one.”',
  '“If it is not right, do not do it; if it is not true, do not say it.”',
  '“Very little is needed to make a happy life; it is all within yourself, in your way of thinking.”',
  '“Dwell on the beauty of life. Watch the stars, and see yourself running with them.”'
];

const quoteText = document.getElementById('quote-text');
const quoteButton = document.getElementById('quote-btn');

if (quoteText && quoteButton) {
  quoteButton.addEventListener('click', () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.textContent = randomQuote;
  });
}

// Mobile navigation toggle functionality
const navToggle = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', navToggle.classList.contains('active'));
  });
  
  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', false);
    });
  });
}

// Christmas countdown timer
const christmasCountdown = () => {
  const currentDate = new Date();
  const christmasDate = new Date(currentDate.getFullYear(), 11, 25);
  if (currentDate.getMonth() === 11 && currentDate.getDate() > 25) {
    christmasDate.setFullYear(christmasDate.getFullYear() + 1);
  }
  const diffTime = christmasDate - currentDate;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  const countdownElement = document.createElement('div');
  countdownElement.className = 'christmas-countdown';
  countdownElement.textContent = `🎄 ${diffDays} days until Christmas! 🎄`;
  countdownElement.style.position = 'fixed';
  countdownElement.style.top = '80px';
  countdownElement.style.left = '50%';
  countdownElement.style.transform = 'translateX(-50%)';
  countdownElement.style.fontSize = '16px';
  countdownElement.style.color = '#ff0000';
  countdownElement.style.fontWeight = 'bold';
  countdownElement.style.zIndex = '10001';
  countdownElement.style.animation = 'greetingFadeIn 3s ease-in-out 2s forwards';
  document.body.appendChild(countdownElement);
};

christmasCountdown();

// Enhanced snowfall animation
const createSnowflake = () => {
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  snowflake.style.position = 'absolute';
  snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
  snowflake.style.color = '#ffffff';
  snowflake.style.opacity = '0.8';
  snowflake.style.left = Math.random() * 100 + '%';
  snowflake.style.animation = 'snowflakeFall ' + (5 + Math.random() * 10) + 's linear infinite';
  snowflake.innerHTML = '❄️';
  return snowflake;
};

const snowflakes = [];
const snowflakeCount = 50;
const snowContainer = document.createElement('div');
snowContainer.className = 'snow-container';
snowContainer.style.position = 'fixed';
snowContainer.style.top = '0';
snowContainer.style.left = '0';
snowContainer.style.width = '100%';
snowContainer.style.height = '100%';
snowContainer.style.pointerEvents = 'none';
snowContainer.style.zIndex = '9999';
document.body.appendChild(snowContainer);

for (let i = 0; i < snowflakeCount; i++) {
  const snowflake = createSnowflake();
  snowflakes.push(snowflake);
  snowContainer.appendChild(snowflake);
}

// Add snowfall animation
const style = document.createElement('style');
style.textContent = `
  @keyframes snowflakeFall {
    0% {
      transform: translateY(-100px) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: 0.8;
    }
    90% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(calc(100vh + 100px)) rotate(360deg);
      opacity: 0;
    }
  }
  .snowflake {
    pointer-events: none;
  }
`;
document.head.appendChild(style);

// Christmas-themed button interaction
const christmasButton = document.createElement('button');
christmasButton.id = 'christmas-btn';
christmasButton.type = 'button';
christmasButton.textContent = '🎄 Toggle Christmas Mode 🎄';
christmasButton.style.position = 'fixed';
christmasButton.style.bottom = '20px';
christmasButton.style.right = '20px';
christmasButton.style.padding = '10px 20px';
christmasButton.style.fontSize = '14px';
christmasButton.style.border = '2px solid #ff0000';
christmasButton.style.backgroundColor = 'transparent';
christmasButton.style.color = '#ff0000';
christmasButton.style.borderRadius = '25px';
christmasButton.style.cursor = 'pointer';
christmasButton.style.zIndex = '10000';
christmasButton.style.transition = 'all 0.3s ease';
christmasButton.style.boxShadow = '0 4px 10px rgba(255, 0, 0, 0.3)';
document.body.appendChild(christmasButton);

christmasButton.addEventListener('click', () => {
  document.body.classList.toggle('christmas-mode');
  christmasButton.style.backgroundColor = document.body.classList.contains('christmas-mode') ? '#ff0000' : 'transparent';
  christmasButton.style.color = document.body.classList.contains('christmas-mode') ? '#ffffff' : '#ff0000';
});

// Mobile touch interactions
if ('ontouchstart' in window) {
  const touchStart = (e) => {
    e.target.style.transform = 'scale(0.95)';
  };
  
  const touchEnd = (e) => {
    e.target.style.transform = 'scale(1)';
  };
  
  document.addEventListener('touchstart', (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
      touchStart(e);
    }
  });
  
  document.addEventListener('touchend', (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
      touchEnd(e);
    }
  });
}

// Christmas greeting animation
const christmasGreeting = document.createElement('div');
christmasGreeting.className = 'christmas-greeting';
christmasGreeting.textContent = 'Merry Christmas from Marcus Aurelius!';
christmasGreeting.style.position = 'fixed';
christmasGreeting.style.top = '20px';
christmasGreeting.style.left = '50%';
christmasGreeting.style.transform = 'translateX(-50%)';
christmasGreeting.style.fontSize = '18px';
christmasGreeting.style.color = '#ff0000';
christmasGreeting.style.fontWeight = 'bold';
christmasGreeting.style.zIndex = '10001';
christmasGreeting.style.opacity = '0';
christmasGreeting.style.animation = 'greetingFadeIn 3s ease-in-out 2s forwards';
document.body.appendChild(christmasGreeting);

const greetingStyle = document.createElement('style');
greetingStyle.textContent = `
  @keyframes greetingFadeIn {
    0% {
      opacity: 0;
      transform: translateX(-50%) translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
`;
document.head.appendChild(greetingStyle);

// Christmas music toggle (optional)
const christmasMusic = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
christmasMusic.loop = true;

const musicToggle = document.createElement('button');
musicToggle.id = 'music-toggle';
musicToggle.type = 'button';
musicToggle.textContent = '🎵 Toggle Christmas Music 🎵';
musicToggle.style.position = 'fixed';
musicToggle.style.bottom = '70px';
musicToggle.style.right = '20px';
musicToggle.style.padding = '10px 20px';
musicToggle.style.fontSize = '14px';
musicToggle.style.border = '2px solid #00ff00';
musicToggle.style.backgroundColor = 'transparent';
musicToggle.style.color = '#00ff00';
musicToggle.style.borderRadius = '25px';
musicToggle.style.cursor = 'pointer';
musicToggle.style.zIndex = '10000';
musicToggle.style.transition = 'all 0.3s ease';
musicToggle.style.boxShadow = '0 4px 10px rgba(0, 255, 0, 0.3)';
document.body.appendChild(musicToggle);

musicToggle.addEventListener('click', () => {
  if (christmasMusic.paused) {
    christmasMusic.play();
    musicToggle.style.backgroundColor = '#00ff00';
    musicToggle.style.color = '#ffffff';
  } else {
    christmasMusic.pause();
    musicToggle.style.backgroundColor = 'transparent';
    musicToggle.style.color = '#00ff00';
  }
});

// Smooth scroll for mobile
const smoothScroll = () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
};

smoothScroll();