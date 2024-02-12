/*

+ 1. Маємо div
+ 2. Маємо дві кнопки: на одній написано "Зробити червоним", на другій - "Зробити зеленим"

+ 3. За натисненням на кнопку, фоновий колір div з п. 1 має змінитися на відповідний колір, вказаний на кнопці

*/

const div = document.querySelector('#box');

const [red, green] = document.querySelectorAll('.btn');

red.addEventListener('click', redBtnHandler);

function redBtnHandler(event) {
    // div.style.backgroundColor = 'red';
    div.classList.toggle('bg-color-red');
}

green.addEventListener('click', greenBtnHandler);

function greenBtnHandler(event) {
    // div.style.backgroundColor = 'green';
    div.classList.toggle('bg-color-green');
}