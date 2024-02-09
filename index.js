const collection = document.getElementsByClassName('paragraph');

// for(let i = 0; i < collection.length; i++) {
//     collection[i].style.color = 'green';
// }

// for ... of - спеціальний цикл, який перебирає об'єкт по ключам

for(let p of collection) {
    p.style.color = 'green';
}

const btns = document.getElementsByTagName('button');
const arr = [...btns];

arr.forEach((button) => {
    button.style.color = 'red';
});

function hello(event) {
    console.log('Hello user');

    event.target.removeEventListener('click', hello);
}

for(let btn of btns) {
    btn.addEventListener('click', hello);
}