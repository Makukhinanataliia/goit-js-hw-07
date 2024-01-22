function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener("DOMContentLoaded", function () {
  const bodyElement = document.body;
  const colorSpan = document.querySelector(".color");
  const changeColorButton = document.querySelector(".change-color");

  changeColorButton.addEventListener("click", function () {
    const randomColor = getRandomHexColor();

    // Setting the background color for <body>
    bodyElement.style.backgroundColor = randomColor;

    //Setting the text content for span.color
    colorSpan.textContent = randomColor;
  });
});
