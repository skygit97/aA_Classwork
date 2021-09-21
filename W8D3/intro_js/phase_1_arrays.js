// Array#uniq - returns a new array containing each individual element of the original array only once (creating all unique elements)
// the elements should be in the order in which they first appear in the original array
// should not mutate the original array

Array.prototype.uniq = function () {
	let arr = [];
	this.forEach((el) => {
		if (!arr.includes(el)) arr.push(el);
	});

	return arr;
};

// console.log([1,2,2,3,3,3].uniq());

// Array#twoSum - returns an array of position pairs where the elements sum to zero

Array.prototype.twoSum = function() {
  let hash = {};
  for (let i = 0; i < this.length; i++) {
    let diff = 0 - this[i];
    if (hash.hasOwnProperty(diff) && hash[diff] !== i) {
      return [hash[diff], i]
    }
    hash[this[i]] = i;
  }
  return [];
}

// console.log([0, 2, 3, -2, 3].twoSum());

// Array#transpose - where we have a two-dimensional array representing a matrix. returns the transpose
// should not mutate the original array

Array.prototype.transpose = function () {
	let transposed = [];

  let i = 0;
  let j = 0;

  this[i].forEach((el => transposed.push[el])
  

  // while (j < this.length) {
  //   transposed[j].push(this[j])
  //   j++;
  // }
  // for (let i = 0; i < cols; i++) {
  //   transposed.push(this[i])
  // }
  // for (let i = 0; i < this.length; i++) {
	// 	transposed[i].push(this[i][i]);
	// }


	return transposed;
};


let example = [[1, 2, 3], [4, 5, 6]];
console.log(example.transpose());
// [1, 2, 3], [4, 5, 6] => [1, 4], [2, 5], [3, 6]
