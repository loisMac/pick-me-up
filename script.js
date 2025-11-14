// Data
const messages = [
    "You're doing better than you think 💛",
    "Take a deep breath — in & out ☁️",
    "Tiny steps still count as progress 🌱",
    "You deserve all the softness in the world ✨",
    "You're allowed to rest, you know 🌿",
    "Your creativity is quietly brilliant 🎨",
    "Drink some water, stretch, be kind to yourself 💫",
    "Look at you existing and everything 🌼",
    "You’re allowed to slow down without losing momentum 🌿",
    "You deserve a life that feels soft and kind to you ✨",
    "Your existence already adds something good to the world 🌙",
    "You don’t have to earn rest — just rest ☁️",
    "Your pace is the right pace for you 🌱",
    "Even if today is messy, you are still growing 🌸",
    "You are worthy of good things without conditions 🌼",
    "It’s okay to do things imperfectly — it still counts 🌻",
    "Your softness is not a weakness; it’s your superpower 💛",
    "Momentum comes from tiny moments of courage ⭐",
    "You are not behind — you are on your path 💛",
    "Some things bloom slowly, and that's okay 🌸",
    "There is space for you to grow in your own direction 🌼",
    "Be as kind to yourself as you are to others 🫶",
    "The way you speak to yourself matters — be gentle 💗",
    "You’re allowed to outgrow things that once felt right 🌙",
    "You do not need everything figured out today 🌿",
    "Let yourself exist without performing for anyone 💛",
    "It’s okay to take up space — you're meant to 🤍"
  ];
  
  const emojis = ["🌼","🌙","⭐","🌸","☁️","🫶","🌿","✨","🍃","💛"];
  const colours = ["#f8e8e4","#e5f3ff","#f6f0c4","#e6ffe4","#fde2f3","#e8f0ff"];
  
  let previousMessage = "";
  let previousEmoji = "";
  
  const card = document.getElementById("card");
  const messageBox = document.getElementById("message");
  const emojiBox = document.getElementById("emoji");
  const btn = document.getElementById("generateBtn");
  const saveBtn = document.getElementById("saveBtn");
  const favouritesList = document.getElementById("favouritesList");
  
  // Load favourites
  let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
  renderFavourites();
  
  // Generate new message
  btn.addEventListener("click", () => {
  
    runConfetti();
  
    let newMsg, newEmoji;
  
    // ensure different message
    do {
      newMsg = messages[Math.floor(Math.random() * messages.length)];
    } while (newMsg === previousMessage);
  
    // ensure different emoji
    do {
      newEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    } while (newEmoji === previousEmoji);
  
    previousMessage = newMsg;
    previousEmoji = newEmoji;
  
    // restart animation
    messageBox.style.animation = "none";
    void messageBox.offsetWidth;
    messageBox.style.animation = "fadeIn 0.5s forwards";
  
    messageBox.textContent = newMsg;
    emojiBox.textContent = newEmoji;
  
    // pastel card colour + readable text
    const randomColour = colours[Math.floor(Math.random() * colours.length)];
    card.style.backgroundColor = randomColour;
    messageBox.style.color = "#475569";
  });
  
  // Save favourite
  saveBtn.addEventListener("click", () => {
    const text = `${emojiBox.textContent} ${messageBox.textContent}`;
    if (!favourites.includes(text)) {
      favourites.push(text);
      localStorage.setItem("favourites", JSON.stringify(favourites));
      renderFavourites();
    }
  });
  
  // Render favourites
  function renderFavourites() {
    favouritesList.innerHTML = "";
    favourites.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      favouritesList.appendChild(li);
    });
  }
  
  // Confetti
  function runConfetti() {
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 }
    });
  }
  