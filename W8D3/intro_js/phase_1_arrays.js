Array.prototype.uniq = function() {
  let arr = [];
  this.forEach(el => {
    if (!arr.includes(el)) {
      arr.push(el);
    }
  });

  return arr;
};

// console.log([1,2,2,3,3,3].uniq());

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

// console.log([0,2,3,-2,3].twoSum());

Array.prototype.transpose = function() {
  const length = this[0].length;
  const width = this.length;

  let transposed = [];
  for (i = 0; i < length; i++) {
    let row = [];
    for (j = 0; j < width; j++) {
      row.push(this[j][i]);
    }
    transposed.push(row);
  }

  return transposed;
};

let ex = [[1, 2, 3], [4, 5, 6]];
console.log(ex.transpose());
// [1, 2, 3], [4, 5, 6] => [1, 4], [2, 5], [3, 6]