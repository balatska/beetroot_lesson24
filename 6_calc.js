// Зациклить калькулятор. 
// Запросить у пользователя 2 числа и знак, решить пример, вывести результат 
// и спросить, хочет ли он решить еще один пример. 
// И так до тех пор, пока пользователь не откажется.



do {
    let i = prompt("Введите первое число");
    let j = prompt("Введите второе число");
    let symbol = prompt("Какое действие совершить(+, -, *, /)?");
    let result = confirm(eval(`(${i} ${symbol} ${j})`) + " \n Хотите решить еще один пример?");   
    console.log(result);
} while (result = true);
