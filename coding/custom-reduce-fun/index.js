function reduce({ arr, init = 0, myfun }) {
  if (!Array.isArray(arr)) throw new Error("Array must have values");

  let sum = init;

  arr.forEach((ele) => {
    return (sum = myfun(sum, ele));
  });

  return sum;
}

let res = reduce({
  arr: [1, 2, 3, 4, 5],
  init: 1,
  myfun: (sum, e) => (sum *= e),
});
console.log(" Res ", res);
