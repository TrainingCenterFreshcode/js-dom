const button = document.querySelector('button');
const div = document.querySelector('#root');

function eventHandlerButton(event) {
    console.log('hi from button handler');
} 

const eventHandlerBody = (event) => {
    console.log('hi from body handler');
    event.stopPropagation();
    // таргет - той, на кому спрацювала подія
    // console.dir(event.currentTarget); // той, кому належав обробник події
    console.log(this);
    // Всередині Function Declaration та Function Expression, this -> body
    // Arrow Function, this -> Window
}

button.addEventListener('click', eventHandlerButton, {capture: true});
// div.addEventListener('click', eventHandler, {capture: true});
document.body.addEventListener('click', eventHandlerBody, {capture: true});
// window.addEventListener('click', eventHandler, {capture: true});


/*
3 фази події:

1. Фаза занурення.
Подія стається на рівні ОС, ОС передає подію браузеру (Window), той передає подію document -> body -> ..... -> елемент, на якому сталася подія


2. Фаза цілі.
Подія досягла елемента, елемент - це таргет

3. Фаза сплиття.
Подія починає спливати у зворотньому напрямку, тобто від елемента (таргета) до ОС.

*/