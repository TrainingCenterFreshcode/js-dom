function loadImage(src) {
    // 1. Створюємо саму картинку
    const img = document.createElement('img');
    img.setAttribute('src', src);

    // 2. Створюємо елемент у верстці, який буде слугувати нам для того, що вказує, чи вантажимо ми щось чи ні
    const h2 = document.createElement('h2');
    h2.id = 'loading-h2';
    h2.append('Loading image....');
    document.body.append(h2);

    // 3. Промісифікація - коли ми огортаємо якийсь асинхронний код в проміс, для того забезпечити собі зручну роботу
    return new Promise((resolve, reject) => {
        // Підписуємо створену картинку на подію load
        // Якщо картинка завантажиться - ми резолвимо проміс з елементом картинки
        img.addEventListener('load', () => {
            resolve(img);
        });

        // Підписуємо створену картинку на подію error
        // Якщо картинка не завантажиться - ми реджектимо з повідомленням про помилку
        img.addEventListener('error', () => {
            reject('Image can`t be loaded');
        });
    });
}

loadImage('https://hips.hearstapps.com/hmg-prod/images/group-portrait-of-adorable-puppies-royalty-free-image-1687451786.jpg?crop=0.89122xw:1xh;center,top&resize=1200:*')
.then((img) => {
    document.body.append(img);
}, (errorMessage) => {
    const h2 = document.createElement('h2');
    h2.append(errorMessage);
    document.body.append(h2);
})
.finally(() => {
    const loadingH2 = document.querySelector('#loading-h2');
    loadingH2.remove();
});