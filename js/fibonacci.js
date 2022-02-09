"use strict";

function fibNum(num) {

  const result = [0, 1];

  for (let i = 2; i < num; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }
  return result;
}

console.log(fibNum(50))
