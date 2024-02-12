// const event = new Event('click');
// console.log(event.composedPath());

const button = document.querySelector('button');

window.addEventListener('click', btnClickHandler);

function btnClickHandler(event) {
    //console.log(event.composedPath());
    console.log(event.target); // той, на кому спрацювала подія
    // target - елемент на якому сталася подія
    // target - елемент, доя кого буде подія занурюватись
    console.log(event.currentTarget); // той, кому належить eventListener
    // currentTarget - елемент, якому належав обробник події
}

const clickEvent = new MouseEvent('click');

// button.dispatchEvent(clickEvent);


/*
3 фази події:

1. Фаза занурення.
Подія стається на рівні ОС, ОС передає подію браузеру (Window), той передає подію document -> body -> ..... -> елемент, на якому сталася подія


2. Фаза цілі.
Подія досягла елемента, елемент - це таргет

3. Фаза сплиття.
Подія починає спливати у зворотньому напрямку, тобто від елемента (таргета) до ОС.

*/