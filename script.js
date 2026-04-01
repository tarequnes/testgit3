const quotes = [
  "Master yourself, master the enemy.", // Lee Sin
  "Only a fool plays the hand he's dealt.", // Twisted Fate
  "Death is like the wind — always by my side.", // Yasuo
  "What is broken can be reforged.", // Riven
  "The darker the night, the brighter the stars.", // Braum
  "It is not why we fight, but who we fight for.", // Pantheon
  "We are what we overcome.", // Pantheon
  "They are not ready to face me.", // Mordekaiser
  "Iron stands eternal.", // Mordekaiser
  "Love is a curse that I will not endure alone.", // Viego
  "I am the reaper of my own destiny.", // Kayn (inspired tone)
  "The unseen blade is the deadliest.", // Zed
  "Balance is a fool’s master.", // Zed
  "Time is wasted on the weak.", // Ekko (tone-inspired)
  "It's not how much time you have, it's how you use it.", // Ekko
  "Art requires a certain cruelty.", // Jhin
  "In carnage, I bloom, like a flower in the dawn.", // Jhin
  "They fear me because I am a man, not a god.", // Pantheon
  "The world is cruel, but I choose to endure it.", // Kindred (inspired tone)
  "Every life ends. But how we live is what matters." // Kindred (inspired tone)
];

const quoteElement = document.getElementById("quote");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
});