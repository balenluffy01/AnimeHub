console.log("Welcome to AnimeHub!");

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", function () {
    alert("🎌 بەخێربێیت بۆ AnimeHub!");
  });
}

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", function () {
    const animeName = this.querySelector("h3").innerText;
    alert("تۆ هەڵتبژارد: " + animeName);
  });
});
