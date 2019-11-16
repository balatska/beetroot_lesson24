// Определить количество цифр в введенном числе.

let numbers = prompt("Введите число"); 
console.log(numbers);

while(isNaN(numbers)) {
    numbers = prompt("Ошибка. Введите число");
}

console.log(numbers.length);
