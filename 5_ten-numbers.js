// Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. 
// При этом также посчитать, сколько четных и нечетных. 
// Вывести статистику на экран. 
// Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

let stats = {
    zero: 0,
    positive: 0,
    negative: 0,
    even: 0,
    odd: 0,
  };
  let numbers = [];
  for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`N${i+1}:`));
  
    if (num == 0) {
      stats.zero++;
    } else if (num > 0) {
      stats.positive++;
    } else {
      stats.negative++;
    }
  
    if (num % 2 == 0) {
      stats.even++;
    } else {
      stats.odd++;
    }
  
    numbers.push(num);
  }
  
  console.log(numbers);
  console.log(stats);