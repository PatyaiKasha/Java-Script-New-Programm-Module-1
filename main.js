// Модуль 1 - Домашнее задание

// 1. Создать три
// const -строки, содержащие символы клавиатуры верхнего, среднего и нижнего ряда английского языка.Например для верхнего ряда русской раскладки строка будет выглядеть 'йцукенгшщзхъ'.
// 2. Создать три
// const переменные с числом, содержащим длинну строк, полученных ранее.
// 3. Используя charAt, для каждой строки получить первый и последний символ для каждой из трех строк, используйте имеющиеся константы.
// 4. Сделайте поиск позиции для символов[и] с помощью indexOf и сохраните результат в переменных.
// 5. Используя многострочную шаблонную строку, вывести названия всех переменных и полученные значения за один console.log.

// 1
var firstLine = 'qwertyuiop[]\\';
const secondLine = 'asdfghjkl;\'';
const thirdLine = 'zxcvbnm,./';

// 2
const fL = firstLine.length;
const sL = secondLine.length;
const tL = thirdLine.length;

// 3
const frstCharInLine1 = firstLine.charAt(0);
const lstCharInLine1 = firstLine.charAt(fL - 1);

const frstCharInLine2 = secondLine.charAt(0);
const lstCharInLine2 = secondLine.charAt(sL - 1);

const frstCharInLine3 = thirdLine.charAt(0);
const lstCharInLine3 = thirdLine.charAt(tL - 1);


// 4
const findChar = thirdLine.indexOf('b');

// 5
document.querySelector('.out').innerHTML =
    `
    <p>Верхний ряд клавишь: "${firstLine}"</p>
    <p>Средний ряд клавишь: "${secondLine}"</p>
    <p>Нижний ряд клавишь: "${thirdLine}"</p>
    <hr>
    <p>Кол-во клавишь в верхнем ряду: "${fL}"</p>
    <p>Кол-во клавишь в среднем ряду: "${sL}"</p>
    <p>Кол-во клавишь в нижнем ряду: "${tL}"</p>
    <hr>
    <p>Первая клавиша в верхнем ряду: "${frstCharInLine1}"</p>
    <p>Последняя клавиша в верхнем ряду: "${lstCharInLine1}"</p>
    <p>Первая клавиша в среднем ряду: "${frstCharInLine2}"</p>
    <p>Последняя клавиша в среднем ряду: "${lstCharInLine2}"</p>
    <p>Первая клавиша в нижнем ряду: "${frstCharInLine3}"</p>
    <p>Последняя клавиша в нижнем ряду: "${lstCharInLine3}"</p>
    <hr>
    <p>Позиция клавиши, на которой стоит символ "b" в нижнем ряду: "${findChar+1}"</p>
`;


console.log(`
Верхний ряд клавишь: "${firstLine}"
Средний ряд клавишь: "${secondLine}"
Нижний ряд клавишь: "${thirdLine}"
---
Кол-во клавишь в верхнем ряду: "${fL}"
Кол-во клавишь в среднем ряду: "${sL}"
Кол-во клавишь в нижнем ряду: "${tL}"
---
Первая клавиша в верхнем ряду: "${frstCharInLine1}"
Последняя клавиша в верхнем ряду: "${lstCharInLine1}"
Первая клавиша в среднем ряду: "${frstCharInLine2}"
Последняя клавиша в среднем ряду: "${lstCharInLine2}"
Первая клавиша в нижнем ряду: "${frstCharInLine3}"
Последняя клавиша в нижнем ряду: "${lstCharInLine3}"
---
Позиция клавиши, на которой стоит символ "b" в нижнем ряду: "${findChar+1}"
`);