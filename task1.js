// Task1
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

const array = [3, 12, 34, 739, 3, 5, null, "Dog", 7];
let countZero = 0;
let countOdd = 0;
let countEven = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] === 0) {
    countZero += 1;
  } else if (typeof array[i] !== "number" || typeof array[i] === "NaN") {
    console.log(array[i] + " это не число");
  } else if (array[i] % 2 === 0) {
    countEven += 1;
  } else {
    countOdd += 1;
  }
}

console.log(countZero + " нулей");
console.log(countOdd + " нечетных чисел");
console.log(countEven + " четных чисел");
