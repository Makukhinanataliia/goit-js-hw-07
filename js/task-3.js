const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");


const divContainer = document.createElement("div");
divContainer.id = "input-container";
nameInput.parentNode.insertBefore(divContainer, nameInput);
divContainer.appendChild(nameInput);
divContainer.appendChild(document.querySelector("h1"));

nameInput.addEventListener("input", (event) => {
  const trimmedValue = event.currentTarget.value.trim();

  if (trimmedValue !== "") {
    nameOutput.textContent = trimmedValue;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});
