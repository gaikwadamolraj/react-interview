// Array.from({ length: n })
// Genereates the undefined array element of the size
const fibonacci = (n) =>
  Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 2] + acc[i - 1] : i),
    []
  );

console.log(fibonacci(6));
// [ 0, 1, 1, 2, 3, 5 ]
