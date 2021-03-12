Array.prototype.myEach = function(funct) {
  for (let i = 0; i < this.length; i++) {
    funct(this[i]);
  }
}

debugger

let array = [1,2,3]
// array.myEach((ele) => {console.log(ele*2)});
// array.myEach(ele => console.log(ele*2))
Array.prototype.myMap = function(funct) {
  let arr = [];
  this.myEach(ele => arr.push(funct(ele)));
  return arr;
}


// array.myMap((ele) => {console.log(ele*0)});


Array.prototype.myReduce = function(funct, initialValue) {

  // check if no initialValue, then this[0]
  let arr = this;

  if (initialValue === undefined) {
    initialValue = arr[0];
    arr.shift();
  }

  let final = initialValue;
  arr.myEach(ele => final = funct(final, ele));

  return final;

}

// console.log([1, 2, 3].myReduce(function(acc, el) {
//   return acc + el;
// }));

// console.log([1, 2, 3].myReduce(function(acc, el) {
//   return acc + el;
// }, 25));