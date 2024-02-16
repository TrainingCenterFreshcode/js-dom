/*

<article class="card-wrapper">
        <div class="image-wrapper">
          <img class="card-image" src="https://pm1.aminoapps.com/6750/dddd7fbf857879e7a4513d20a85c1c89d5d74a41v2_hq.jpg" alt="John avatar">
        </div>
        <h2 class="username">John</h2>
        <p class="description">Description for John</p>
</article>

*/

const root = document.querySelector('#root');

function createUserCard(user) {
    // 1. Створюємо обгортку для картинки
    const imgWrapper = createImageWrapper(user);
    
    // 2. Створення h2
    const h2 = createElement('h2', {classNames: ['username']}, user.name);

    // 3. Створення p
    const p = createElement('p', {classNames: ['description']}, user.description);

    // 4. Створюємо і повертаємо article, в який вкладені створені img, h2, p
    return createElement('article', {classNames: ['card-wrapper']}, imgWrapper, h2, p);
}

const cardArray = data.map(user => createUserCard(user));

root.append(...cardArray);

/**
 * @param {String} type - тег елемента, який нам треба створити
 * @param {String[]} classNames - список класів, які треба додати до елемента
 * @param {...Node} childNodes - список дочірніх вузлів
 * @returns {HTMLElement}
 */
function createElement(type, {classNames}, ...childNodes) {
    const elem = document.createElement(type);
    elem.classList.add(...classNames);
    elem.append(...childNodes);

    return elem;
}

function imageLoadHandler({target}) {
    console.log('image successfully loaded');
    const parentWrapper = document.querySelector(`#wrapper${target.dataset.id}`);
    parentWrapper.append(target);
}

function imageErrorHandler({target}) {
    target.remove();
    console.log('image loading has error');
}

function createUserImage(user) {
    const img = document.createElement('img');
    img.setAttribute('src', user.profilePicture);
    img.setAttribute('alt', user.name);
    img.dataset.id = user.id;
    img.classList.add('card-image');

    img.addEventListener('load', imageLoadHandler);
    img.addEventListener('error', imageErrorHandler);
    
    return img;
}

function createImageWrapper(user) {
    // 1. Створення заглушки
    const imgWrapper = createElement('div', {classNames: ['image-wrapper']});
    imgWrapper.setAttribute('id', `wrapper${user.id}`);

    // 2. Визначаємо bacground-color заглушки з урахуванням імені користувача
    imgWrapper.style.backgroundColor = stringToColour(user.name);

    // 3. Створення img
    const img = createUserImage(user);

    return imgWrapper;
}

function stringToColour(str) {
    let hash = 0;
    str.split('').forEach(char => {
      hash = char.charCodeAt(0) + ((hash << 5) - hash)
    })
    let colour = '#'
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff
      colour += value.toString(16).padStart(2, '0')
    }
    return colour
}