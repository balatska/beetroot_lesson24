// Запросить у пользователя число и вывести все делители этого числа.

let i = +prompt("Введите число");
while(isNaN(i)) {
    i = +prompt("Ошибка. Введите число");
}

// for (j = 1; j <= Math.floor(Math.sqrt(i)); j++) {
//     if (j % i == 0) {
//         console.log(j);
//     }
// }


// do {console.log(i);
//     i--;
// } while (i < Math.floor(Math.sqrt(i)));

// for (let j = i; j <= Math.floor(Math.sqrt(i)); j--) {
//     console.log(j);
// }

let j=i;
while (j>=1) {
  i%j;
  if (i%j==0) {
    console.log(j);
  }
j--;
}
