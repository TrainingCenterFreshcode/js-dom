function createDiv() {
    const div = document.createElement('div'); // 1. Створюємо елемент у пам'яті --> <div></div>
    div.classList.add('box'); // 2. До цього елементу приєднуємо стильовий клас --> <div class="box"></div>
    div.append('Hello world'); // 3. До цього елементу приєднуємо текстовий вузол --> <div class="box">Hello world</div>
    document.body.append(div); // 4. Приєднуємо створений елемент до body -->
    /*
        <body>
            <div class="box">Hello world</div>
        </body>
    */
}

const btn = document.querySelector('button');
btn.addEventListener('click', createDiv);

/*

Спробуйте створити декілька HTML елементів через JS. (document.createElement)
Спробуйте додати якісь стильові класи цим елементам. (element.classlist.add)
Спробуйте додати якийсь текстовий вузол для елементів. (  element.append('text....')  )
Причепіть створені елементи до body (  document.body.append(element)  )


*/