// Sum 
// Write a sum function that takes any number of arguments:
// Solve it first using the arguments keyword, then rewrite your solution to use the ... rest operator.

function sum() {
  let sum = 0;
  // let args = Array.prototype.slice.call(arguments);
  let args = Array.from(arguments);
  args.forEach(num => sum += num);
  return sum;
}

// console.log(sum(1, 2, 3, 4)); //=== 10;
// console.log(sum(1, 2, 3, 4, 5)); // === 15;

function sum2(...args) {
  let sum = 0;
  args.forEach(num => sum += num);
  return sum;
}

// console.log(sum2(1, 2, 3, 4)); //=== 10;
// console.log(sum2(1, 2, 3, 4, 5)); // === 15;

// myBind

Function.prototype.myBind = function(context) {
  let bindArgs = Array.from(arguments);
  let variables = bindArgs.slice(1);
  let that = this;

  return function() {
    let callArgs = Array.from(arguments);
    return that.apply(context, variables.concat(callArgs));
  };
};

Function.prototype.myBind2 = function(context, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(context, bindArgs.concat(callArgs));
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true


// ---- Curried Sum --------

function curriedSum(numArgs) {
  let numbers = [];
  return function _curriedSum(num) {
    numbers.push(num)
    if(numbers.length === numArgs) {
      return numbers.reduce((acc,ele) => acc + ele, 0);
    } else {
      return _curriedSum;
    }
  }
}

// const curried = curriedSum(4);
// console.log(curried(5)(30)(20)(1));


// ---- Function.prototype.curry --------


Function.prototype.curry = function(numArgs) {
  let numbers = [];
  let that = this;
  return function _curry(num) {
    numbers.push(num);
    console.log(numbers);
    if(numbers.length === numArgs) {
      return that.apply(null, numbers);
    } else {
      return _curry;
    }
  }
}


Function.prototype.curry2 = function(numArgs) {
  let numbers = [];
  let that = this;
  return function _curry(...nums) {
    numbers = numbers.concat(nums); // concat does not mutate in javascript
    if(numbers.length === numArgs) {
      return that.apply(null, numbers);
    } else {
      return _curry;
    }
  }
}


console.log(sum.curry2(2)(7, 8));

