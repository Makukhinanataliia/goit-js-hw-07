//-----------1------------
//отримаємо список категорій ul#categories
const categoriesList = document.getElementById("categories");
//отримаємо в наш список категорій усі li.item
const categoryItems = categoriesList.querySelectorAll("li.item");
//виведемо в консоль кількість категорій
console.log("Кількість категорій:", categoryItems.length);

//-----------2-------------
//виведемо назву та кількість елементів у кожній категорії пройшовшись по кожному елементу li.item методом forEach
categoryItems.forEach((category) => {
  //отримаємо тег h2 та усі li у вкладеному ul
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("ul li");

  //виведемо в консоль назву та кількість елементів у кожній категорії
  console.log(`Категорія: ${categoryName}`);
  console.log(`Кількість елементів: ${categoryElements.length}`);
});
