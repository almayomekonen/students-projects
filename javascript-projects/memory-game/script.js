const amount = 12;
const numbers = [];

const board = document.querySelector(".board");
board.style.gridTemplateColumns = `repeat(6, 1fr)`;

for (let i = 1; i <= amount; i++) {
  numbers.push(i, i);
}

for (let i = 1; i <= amount * 2; i++) {
  const rand = Math.floor(Math.random() * numbers.length);
  const div = document.createElement("div");
  div.innerHTML = `<span>${numbers[rand]}</span>`;

  board.appendChild(div);
  numbers.splice(rand, 1);

  div.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("hidden") ||
      event.target.classList.contains("showing")
    ) {
      return;
    }

    if (board.querySelectorAll(".showing").length === 2) {
      return;
    }

    event.target.classList.add("showing");
    check();
  });
}

function check() {
  const cards = board.querySelectorAll(".showing");

  if (cards.length === 2) {
    const first = cards[0];
    const last = cards[1];

    if (first.textContent === last.textContent) {
      setTimeout(() => {
        first.classList.remove("showing");
        last.classList.remove("showing");

        first.classList.add("hidden");
        last.classList.add("hidden");

        const audio = new Audio("win.wav"); // Or use `document.createElement("audio")` if preferred
        audio.play(); // Play the audio

        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
      }, 700);
    } else {
      setTimeout(() => {
        first.classList.remove("showing");
        last.classList.remove("showing");
      }, 700);
    }
  }
}

const resetButton = document.querySelector(".reset-btn");
resetButton.addEventListener("click", () => {
  location.reload();
});
