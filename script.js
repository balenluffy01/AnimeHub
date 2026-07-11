console.log("Welcome to AnimeHub!");

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", function () {
    alert("🎌 AnimeHubبەخێربێیت بۆ !");
  });
}

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", function () {
    const animeName = this.querySelector("h3").innerText;
    alert("تۆ هەڵتبژارد: " + animeName);
  });
});
const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", function () {
  const searchText = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const animeName = card.querySelector("h3").innerText.toLowerCase();

    if (animeName.includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
const hero = document.querySelector(".hero");

const images = [
  "images/IMG_0186.jpeg",
  "images/IMG_0187.jpeg",
  "images/IMG_0196.jpeg",
  "images/IMG_0221.webp"
];

let currentImage = 0;

setInterval(() => {
  currentImage++;

  if (currentImage >= images.length) {
    currentImage = 0;
  }

  hero.style.backgroundImage =
    `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('${images[currentImage]}')`;
}, 5000);
