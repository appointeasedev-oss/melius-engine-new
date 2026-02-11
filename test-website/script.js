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
