/*

Дан section, на якій треба клацати мишею
Дан div, який має переміститись на точку, в яку клацнули мишею

*/

const field = document.querySelector('#game-field');
const box = document.querySelector('#box');

field.addEventListener('click', clickHandler);

function clickHandler(event) {
    // якщо ми натискаємо НЕ на ігрове поле (тобто, на квадратик) - переміщення не відбувається
    // event.stopPropagation(); // це і є фікс помилки
    
    // target - на якому елементі фактично відбулася подія (на який саме клікнули)
    // currentTarget - якому елементу належав обробник події
    if(event.currentTarget === event.target) { // якщо ми натискаємо на ігрове поле - переміщенню бути; це і є фікс проблеми
        const {target: {children: {box}}, clientX, clientY} = event;

        box.style.top = `${clientY}px`;
        box.style.left = `${clientX}px`;
    }
}