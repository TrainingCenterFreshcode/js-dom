/*
https://api.openweathermap.org/data/2.5/weather?q=Dnipro&appid=f7c576ba3699bdd0b98ddcf196639992&units=metric



f7c576ba3699bdd0b98ddcf196639992


// Задача: зробити погодний віджет

Алгоритм вирішення:
+ 1. Зробити верстку елементів, які отримують від користувача дані про місто
+ 2. Отримати дані з апі і обробити їх (підготувати дані для відмалювання у верстці)
3. Зробити картку з погодою і відобразити її

*/

const API_KEY = 'f7c576ba3699bdd0b98ddcf196639992';
const API_BASE = 'https://api.openweathermap.org/data/2.5/weather';

const btn = document.querySelector('.btn');

btn.addEventListener('click', buttonClickHandler);

function buttonClickHandler({target}) {
    const selectValue = target.previousElementSibling.value;
    requestAPI(selectValue);
}

function requestAPI(cityName) {
    // 1. Готуємо URL
    const url = `${API_BASE}?q=${cityName}&appid=${API_KEY}&units=metric`;
    
    // 2. Робимо запит
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // 3. Відмальовуємо погоду
        displayWeather(data);
    })
}

/*

<article class="weather">
        <p>City name: Kyiv</p>
        <p>Temperature: 7°C</p>
        <p>Weather description: overcast clouds</p>
</article>

*/

function displayWeather(weatherObject) {
    const { name, main: {temp}, weather: [ { description } ] } = weatherObject;
    
    // 1. Створюємо article
    const article = document.createElement('article');
    article.classList.add('weather');

    // 2. Створюємо параграф з назвою міста
    const cityName = document.createElement('p');
    cityName.append(`City name: ${name}`);

    // 3. Створюємо параграф з температурою
    const temperature = document.createElement('p');
    temperature.append(`Temperature: ${temp}°C`);

    // 4. Створюємо параграф з описом погоди
    const weatherDescription = document.createElement('p');
    weatherDescription.append(`Weather description: ${description}`);

    // 5. До артікла чіпляємо парграфи, створені в п. [2-4]
    article.append(cityName, temperature, weatherDescription);

    // 6. Знаходимо секцію і чіпляємо до неї артікл
    const section = document.querySelector('.wrapper');
    section.append(article);
}