Array.prototype.myEach = function(cb) {
  for (let i = 0; i < this.length; i ++) {
    cb(this[i]);
  }
};

Array.prototype.myMap = function(cb) {
  const mapped = [];
  this.myEach(el => mapped.push(cb(el)));
  return mapped;
};

let arr = [1,2,3];
console.log(arr.myMap(el => el * 2));

Array.prototype.myReduce = function(cb, initialValue) {
  let arr = this;

  if (initialValue === undefined) {
    initialValue = this[0];
    arr = this.slice(1);
  }

  let result = initialValue;
  arr.myEach(el => result = cb(result, el));
  return result;
};

console.log([1, 3, 3].myReduce((prod, el) => prod * el));
console.log([1, 2, 3].myReduce((sum, el) => sum * el));