Array.prototype.bubbleSort = function() {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i + 1] < this[i]) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        sorted = false;
      }
    }
  }
  return this;
};


array = [2, 5, 7, 1, 0];
console.log(array.bubbleSort());

String.prototype.subString = function() {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j <= this.length; j++) {
      arr.push(this.slice(i, j));
    }
  }
  return arr;
};

console.log("hello world".subString());