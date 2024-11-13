// script.js
const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "Get busy living or get busy dying. – Stephen King",
  "You have within you right now, everything you need to deal with whatever the world can throw at you. – Brian Tracy",
  "Believe you can and you're halfway there. – Theodore Roosevelt"
]
function changeText() {
    const welcomeText = document.getElementById("welcome-text");
    const button = document.getElementById("change-text-btn");
    const introText = document.querySelector(".intro-text");
    const nameInput = document.getElementById("name-input");
    const quotesdisplay = document.getElementById("quote-display")
    // Change text content
    welcomeText.innerText="What is the name user ?";
    introText.innerText = "Am so glad to meet you, remind me your name";
    button.innerText = "Thank You for Clicking!";
    
    const userName = nameInput.value;
  if (userName) {
    welcomeText.innerText = `So glad to meet you, ${userName}!`;
    introText.innerText = `Hi, i know this is your first time here dont be so scared, ${userName}!` ;

} else {
    welcomeText.innerText = "No name :( !";

    
    // Change button color randomly
    button.style.backgroundColor = getRandomColor();

  }
  
}
quotesdisplay.innerText = getRandomQuote();
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

  
  
  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }