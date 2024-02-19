/*


Регулярні вирази - своєрідний фільтр для текстових даних.

Регулярні вирази - інструмент порівняння якогось рядка із заданим шаблоном.

За допомогою регулярки ми описуємо, як має виглядати рядок, який ми очікуємо від користувача.


^ - початок рядка
$ - кінець рядка
[] - послідовність символів
[a-z] - діапазон
[a-zA-Z] - два діапазони одночасно
[abcdef] - перерахувати вручну

/^[a-zA-Z]{2,5}/         // шукаємо слово з 2-5 літер (великих чи маленьких)
/^[a-zA-Z]{2,}[0-9]+$/   // шукаємо слово будь-якої довжини більше двох літер, в кінці має бути мінімум 1 цифра
/^[a-zA-Z]{2,}[0-9]+\.$/    //  шукаємо слово будь-якої довжини більше двох літер, в кінці має бути мінімум 1 цифра і після цифри має бути точка
*/

//const regexp = /^Test$/;

const str1 = 'hello';
const str2 = new String('hello');

// Regexp

const reg1 = /^[a-zA-Z]{2,5}$/;
//console.dir(reg1);

const reg2 = new RegExp('^[a-zA-Z]{2,5}$');
//console.dir(reg2);

// Еспереминтуємо: валідуємо email черех регулярки

const testString = 'sunnyday56@gmail.com';
const emailRegExp = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

emailRegExp.exec(testString); // array
emailRegExp.test(testString); // true

testString.match(emailRegExp); // array -- спрацює як exec

let str = 'Blue SKY';
console.log(str.replace(new RegExp('[A-Z]{3}'), 'test123')); // Blue test123