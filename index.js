// timeout - виконує функцію один раз після якоїсь затримки
// interval - виконуватиме функцію багато разів з якоюсь затримкою

// const intervalID = setInterval(() => {
//     console.log('Logging');
// }, 2000);

/*

Написати функцію, яка через кожну секунду буде виводити числа в консоль від 1 до 10
Виконати цю задачу через інтервали

*/

function counter() {
    let i = 1;
    const intervalID = setInterval(() => {
        console.log(i++);
        if(i > 10) {
            clearInterval(intervalID);
            console.timeEnd('1');
        }
    }, 1000);
}

console.time('1');
counter();