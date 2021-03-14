Array.prototype.bubbleSort = function() {
  let sorted = false;

  while (!sorted) {
    sorted = true; 

    for (let i = 0; i < this.length - 1; i++) {
      if ((this[i]) > (this[i + 1])) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        sorted = false;
      }
    }
  }

  return this;
};

const array = [2, 5, 7, 1, 0];
console.log(array.bubbleSort());

Array.prototype.bubbleSort2 = function(cb) {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < this.length - 1; i++) {
      if ( cb(this[i]) > cb(this[i + 1]) ) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        sorted = false;
      }
    }
  }

  return this;
};

console.log(array.bubbleSort2(el => el ** -1));

String.prototype.subStrings = function() {
  let subs = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j <= this.length; j++) {
      subs.push(this.slice(i, j));
    }
  }

  return subs;
};

console.log("hello world".subStrings());