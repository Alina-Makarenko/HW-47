//1
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.
// Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2) і кількість елементів в категорії (всіх вкладених в нього елементів li).
// Наприклад, для першої категорії вийде:
// Категорія: Тварини
// Кількість елементів: 4

const catEl = document.getElementById("categories");
const animals = catEl.querySelectorAll(".item");
console.log(`У списку ${animals.length} категорії.`);
animals.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  console.log(`Категорія: ${categoryTitle}`);
  const categoryItemsCount = item.querySelectorAll("li").length;
  console.log(`Кількість елементів: ${categoryItemsCount}`);
});
// 2
// 
// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li, після чого вставить всі li за одну операцію в список ul.ingredients. Для створення DOM-вузлів використовуй document.createElement().
const ingredients = [
 'Картопля',
 'Гриби',
 'Часник',
 'Помідори',
 'Зелень',
 'Приправи',
];
const listEl = document.querySelector("#ingredients");


const items = ingredients.map((item) => {
const liEl = document.createElement("li");
liEl.textContent = item
return liEl
})
listEl.append(... items)
console.log(items);

// 3
// Напиши скрипт для створення галереї зображень по масиву даних.
const images = [
 {
  url:
   'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'White and Black Long Fur Cat',
 },
 {
  url:
   'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
 },
 {
  url:
   'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Group of Horses Running',
 },
];




// 4
counterValue = 0;
