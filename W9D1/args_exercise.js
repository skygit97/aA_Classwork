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

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true

