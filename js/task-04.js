// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let value = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueText = document.querySelector('#value');

decrementBtn.addEventListener('click', () => {
  value -= 1;
  valueText.textContent = value;
});

incrementBtn.addEventListener('click', () => {
  value += 1;
  valueText.textContent = value;
});
