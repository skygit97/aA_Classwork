function range(start, end) {
  if (start === end) {
    return [start];
  }

  let array = range(start, end - 1);
  array.push(end);
  return array;
};

// console.log(range(1,5));

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }

  // let sumNum = arr[0];
  // arr.shift();
  // return sumRec(arr) + sumNum;

  let sumNum = arr[arr.length - 1]
  arr.pop();
  return sumRec(arr) + sumNum;
  
};

arr = [1,2,3,4];

// console.log(sumRec(arr));

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  // if (exp > 0) {
  // return base * exponent(base, exp - 1);
  // } 
  // else {
  // return 1.0/(base * exponent(base, exp + 1));
  // }

  if (exp % 2 === 0) {
    let half = exponent(base, exp / 2);
    return half * half;
  }
  else {
    let half = exponent(base, (exp - 1) / 2);
    return half * half * base;
  }
};

console.log(exponent(2,4));
// console.log(exponent(2,-4));

