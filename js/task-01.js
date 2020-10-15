// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
let allList = document.getElementById('categories');

let listItemArr = [...allList.children];
console.log(`В списке: ${allList.children.length} категории`);

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

listItemArr.forEach(listItem => {
  console.log(`Категория: ${listItem.firstElementChild.innerText}`);
  console.log(
    `Количество элементов: ${listItem.lastElementChild.children.length}`,
  );
});

// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4
