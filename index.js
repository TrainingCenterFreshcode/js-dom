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
        console.log(data);
        displayWeather(data);
    })
}

function displayWeather(weatherObject) {
    const { name, main: {temp}, weather: [ { description } ] } = weatherObject;

    const article = document.querySelector('#weather-box');
    article.classList.add('weather-display');
    
    const city = document.querySelector('#city');
    city.textContent = name;

    const temperature = document.querySelector('#temp');
    temperature.textContent = `${temp}°C`;

    const desc = document.querySelector('#description');
    desc.textContent = description;
}