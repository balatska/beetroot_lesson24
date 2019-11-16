// Запросить 2 числа и найти только наибольший общий делитель.

let i = +prompt("Введите первое число");
while(isNaN(i)) {
    i = +prompt("Ошибка. Введите число");
}

let j = +prompt("Введите второе число");
while(isNaN(j)) {
    j = +prompt("Ошибка. Введите число");
}

function maxDivider(i, j) {
    while (j !== 0) j = i % (i = j);
    return i;
}

console.log(`Наибольший общий делитель: ${maxDivider(i, j)}`);