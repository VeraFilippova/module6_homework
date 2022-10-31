
// Task3
// Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

function functionA(a) {
    function functionB(b) {
      return a + b;
    }
    return functionB(76);
  }
  
  let result = functionA(58);
  console.log(result);