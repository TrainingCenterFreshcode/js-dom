/*

https://cdn.royalcanin-weshare-online.io/3CENa2QBaxEApS7Lqd5j/v6/yellow-labrador-lying-in-the-grass
https://petslike.net/media/cache/sylius_blog_item_image/35/6c/d35c891e94aeda634264c402088f.jpeg

1. В HTML маємо елемент img
2. В HTML маємо дві кнопки
Ці кнопки в data-атрибутах містять посилання на певну картинку (адреса картинки)

+ 3. Задача: За натисненням на кнопку має відобразитись в тезі img відповідна цій кнопці картинка

*/

const [btn1, btn2] = document.querySelectorAll('button');

btn1.addEventListener('click', clickHandler);
btn2.addEventListener('click', clickHandler);

function clickHandler({target}) {
    const img = target.parentNode.children[0];
    img.setAttribute('src', target.dataset.src);
}