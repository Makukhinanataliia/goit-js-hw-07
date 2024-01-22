//Getting the list of categories.

const categoriesList = document.querySelectorAll(".item");

// Outputting the number of categories to the console.
console.log("Number of categories:", categoriesList.length);

// Iterating through each category and outputting information to the console.
categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("ul li");

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});
