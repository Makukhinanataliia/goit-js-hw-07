let size = 30; // Local variable for the box size
const deltaSize = 10;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.querySelector("input");
  const createButton = document.querySelector("[data-create]");
  const destroyButton = document.querySelector("[data-destroy]");
  const boxesContainer = document.getElementById("boxes");

  createButton.addEventListener("click", () => createBoxes(inputElement.value));
  destroyButton.addEventListener("click", destroyBoxes);

  function createBoxes(amount) {
    amount = parseInt(amount);

    if (isNaN(amount) || amount < 1 || amount > 100) {
      alert("Please enter a number between 1 and 100");
      return;
    }

    clearBoxes();

    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();

      boxesContainer.appendChild(box);
      size += deltaSize;
    }

    inputElement.value = "";
  }

  function destroyBoxes() {
    clearBoxes();
  }

  function clearBoxes() {
    boxesContainer.innerHTML = "";
    size = 30; // Resetting the size
  }
});
