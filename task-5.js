'use strict';
// Напиши функцию formatString(string) принимающую строку в параметр string.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.
// Вызовы функции для проверки работоспособности твоей реализации.


const formatString = function(string) {
let str = string;

    if (str.length > value) {
let newAr= str.slice(0, value) + '...';
return newAr;

    } else {
        return string;
    }

}

let value = 40;

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // // вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// );
// вернется форматированная строка