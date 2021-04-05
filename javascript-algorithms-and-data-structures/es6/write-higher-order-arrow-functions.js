const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  const squaredIntegers = arr.filter((x) => x > 0 && Number.isInteger(x));
  return squaredIntegers.map((x) => x * x);
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
