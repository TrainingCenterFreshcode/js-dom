// Серіалізація - процес перетворення JS об'єкта в JSON
// Десеріалізація - процес перетворення JSON в JS об'єкт

// Поверхнева копія об'єкту (shallow copy) - копія, де копіюються тільки посилання на елементи, а не самі значення

const originalObject = {
    users: [
        {
            name: 'John',
            age: 25
        },
        {
            name: 'Lucky',
            age: 33
        }
    ]
}

const shallowCopy = {...originalObject};


// Глибока копія (deep copy) - створення повноцінної копії об'єкта, де копіюються як посилання на його елементи, так і їхні значення

const deepCopy = JSON.parse(JSON.stringify(originalObject));