// fetch('./user.json')
// .then((response) => {
//     return response.json(); // перетворюємо нулі та одинички на JS об'єкт
// })
// .then((data) => {
//     console.log(data);
// });

fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5')
.then((response) => {
    return response.json(); // перетворюємо нулі та одинички на JS об'єкт
})
.then((data) => {
    console.log(data);
});