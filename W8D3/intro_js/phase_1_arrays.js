Array.prototype.uniq = function() {
  let arr = [];

  this.forEach(el => {
    if (!arr.includes(el)) {
      arr.push(el);
    }
  });

  return arr;
};

console.log([1,2,2,3,3,3].uniq());

Array.prototype.twoSum = function() {
  let pairs = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        pairs.push([i, j]);
      }
    }
  }

  return pairs;
};



console.log([0,2,3,-2,3].twoSum());

Array.prototype.transpose = function() {
  let length = this.length;
  let width = this[0].length;

  let arr1 = [];
  for(let i = 0; i < width; i++) {

    let arr2 = [];
    for(let j = 0; j < length; j++) {
      arr2.push(this[j][i]);
    }
    arr1.push(arr2);
  }
  return arr1;
};

let variable = [[1, 2, 3], [4, 5, 6]];
console.log(variable.transpose());
//[1, 2, 3], [4, 5, 6] => [1, 4], [2, 5], [3, 6]