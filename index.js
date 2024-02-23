const p = new Promise(executor); // pending

function executor(resolve, reject) {
    setTimeout(() => {
        resolve('It time'); // fulfielled
    }, 15000);
}

const h1 = document.querySelector('#root');

p.then((str) => {
    h1.append(str);
});