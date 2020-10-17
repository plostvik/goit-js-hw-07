// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const boxes = document.querySelector('#boxes');
const render = document.querySelector('[data-action="render"]');
const destroy = document.querySelector('[data-action="destroy"]');
const controls = document.querySelector('#controls');

const createBoxes = function (amount) {
  let size = 20;
  amount = controls.querySelector('input').value;
  amount > 50 ? alert('Да ты - псих!') : '';
  for (let i = 0; i < amount; i++) {
    size += 10;
    let random1 = Math.round(Math.random() * 255);
    let random2 = Math.round(Math.random() * 255);
    let random3 = Math.round(Math.random() * 255);
    let div = document.createElement('div');
    boxes.append(div);
    div.classList.add('beauty-box');
    div.style.height = `${size}px`;
    div.style.width = `${size}px`;
    div.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
    console.log(div.style);
  }
};

const destroyBoxes = function () {
  boxes.innerHTML = '';
};

controls.addEventListener('click', e => {
  if (e.target === render) {
    createBoxes();
  } else if (e.target === destroy) {
    destroyBoxes();
  }
});
