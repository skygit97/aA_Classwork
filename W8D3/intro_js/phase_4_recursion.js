function range(start, end) {
  if (start === end) return [start];

  let arr = range(start, end - 1);
  arr.push(end);
  return arr;
}

// console.log(range(1,5));

function sumRec(arr) {
  if (arr.length === 0) return 0;

  let lastNum = arr[arr.length - 1];
  return sumRec(arr.slice(0, arr.length - 1)) + lastNum;
}

// let nums = [1,2,3,4];
// console.log(sumRec(nums));

function exponent(base, exp) {
  if (exp < 0) return (1 / exponent(base, -exp));
  if (exp === 0) return 1;
  return base * exponent(base, exp - 1);
}

// console.log(exponent(2, 4));
// console.log(exponent(2, -4));

function exponent2(base, exp) {
  if (exp < 0) return (1 / exponent(base, -exp));
  if (exp === 0) return 1;

  if (exp % 2 === 0) {
    half = exponent2(base, exp / 2);
    return half * half;
  } else {
    half = exponent2(base, (exp - 1) / 2);
    return half * half * base;
  }
}

// console.log(exponent2(2, 4));
// console.log(exponent2(2, -4));

function fib(n) {
  if (n <= 0) return [];
  if (n === 1) return [1];
  if (n === 2) return [1, 1];

  let fibs = fib(n - 1);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  return fibs;
}

// console.log(fib(5));

function deepDup(arr) {
  if (!(arr instanceof Array)) return arr;

  return arr.map(el => deepDup(el));
}

// console.log(deepDup([[2], 3]));
// console.log(deepDup([1, 2, 3, 5]));

function bsearch(arr, target) {
  if (arr.length === 0) return -1;

  let midIdx = Math.floor(arr.length / 2);
  let mid = arr[midIdx];

  if (target === mid) {
    return midIdx;
  } else if (target < mid) {
    let left = arr.slice(0, midIdx);
    return bsearch(left, target);
  } else {
    let right = arr.slice(midIdx + 1);
    let index = bsearch(right, target);
    return (index === -1) ? -1 : index + midIdx + 1;
  }
}

// console.log(bsearch([1, 2, 3], 3));
// console.log(bsearch([1, 2, 3], 2.5));