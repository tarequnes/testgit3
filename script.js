const quotes = [
  "Success starts with discipline.",
  "Small steps every day lead to big results.",
  "Je fleuris dans le carnage comme une fleur à l'aube.",
  "Do not wait for motivation. Build habits.",
  "Hard times create strong people.",
  "Your future is created by what you do today.",
  "Confidence comes from keeping promises to yourself.",
  "Dream big, start small, stay consistent."
];

const quoteElement = document.getElementById("quote");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
});