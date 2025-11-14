// Data
const messages = [
    "Put down your fucking phone 📵",
    "Drink some water, you dehydrated raisin 💧",
    "You can do it, asshole 💪",
    "Stop doom scrolling. Go touch grass 🌱",
    "You're doing fine. Everyone else is lying too 🙂",
    "Get up. Yes now. I’m watching 👀",
    "Remember when you thought you'd have your life together by now? Cute 😂",
    "Your brain is tired, not broken 🧠",
    "You're hot and capable. Start acting like it 😘",
    "Stop being dramatic and eat a snack 🍿",
    "Whatever you're avoiding… yeah, go do that 💼",
    "Future you will thank you. Current you is a gremlin 🧌",
    "That thing you're overthinking? No one else cares 💛",
    "Go do the task. It’s smaller than your anxiety makes it ☕",
    "You're the problem AND the solution. Congrats 🎉",
    "Don't forget to fucking breathe 🧘",
    "You're allowed to rest, not rot. There’s a difference 😂",
    "Your vibe is 'tired but trying' and honestly iconic ⭐",
    "Get your shit together… lovingly 💗",
    "You're doing your best with the tiny brain cells you have 🐥",
    "Go drink water before you get a headache, dumbass 💧",
    "Your anxiety is lying. Again. Shocker 😒",
    "You're not failing — you're just overwhelmed 🍃",
    "Take the break before your body takes it for you ⚠️",
    "You are powerful, unhinged, and unstoppable 🔥",
    "Your past self would be proud. Your present self is confused, but that’s fine 🤷‍♀️",
    "Get some sun in those dead eyes 🌞"
    
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
  