// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
let allList = document.getElementById('categories');

let listItemArr = [...allList.children];
console.log(
  '%cTASK-01',
  'color: white; background-color: tomato; font-weight: bold; padding: 5px;',
);
console.log(
  `%cВ списке: ${allList.children.length} категории`,
  'font-size: 14px',
);

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

listItemArr.forEach(listItem => {
  console.log(
    `%cКатегория: ${listItem.firstElementChild.innerText}\nКоличество элементов: ${listItem.lastElementChild.children.length}`,
    'font-size: 14px',
  );
});

// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4
