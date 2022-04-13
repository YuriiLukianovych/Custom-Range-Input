const rangeInput = document.querySelector('.range');
const progress = document.querySelector('.range-progress');
const label = document.querySelector('.range-label');

rangeInput.addEventListener('input', e => {
    let percent = e.target.value / e.target.max * 100;
    progress.style.width = `${percent}%`;
    label.style.left = `${percent}%`;
    label.firstElementChild.textContent = `${e.target.value}`;
})

// Якщо користувач використовує браузер Firefox, то приховувати для нього блок .range-progress
// Поверх нього не можливо поставити дефолтний повзунок(thumb) у Firefox
// Для прогрес-лінії в input:range у Firefox(-moz) існує псевдоелемент ::-moz-range-progress
// Саме відсутність такого псевдоелемента для -webkit змушує робити кастомний прогрес .range-progress
if (navigator.userAgent.indexOf('Firefox') !== -1) {
    progress.style.display = 'none';
}