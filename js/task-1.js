//отримаємо список категорій 

const categoriesList = document.querySelectorAll(".item");

// Виведемо кількість категорій в консоль
console.log("Number of categories:", categoriesList.length);

// Пройдемося по кожній категорії та виведемо інформацію в консоль
categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("ul > li");

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});
