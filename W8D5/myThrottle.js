// Function.prototype.myThrottle = function(interval) {
//   let tooSoon = false; 
//   let that = this;

//   return function (...banana) {
//     if (!tooSoon) {
//       tooSoon = true; 
//       setTimeout(() => {tooSoon = false;}, interval);
//       that(...banana)
//     }
//   };
// };

Function.prototype.myThrottle = function(interval) {
  let tooSoon = false; 

  return (...args) => {
    if (!tooSoon) {
      tooSoon = true; 
      setTimeout(() => {tooSoon = false;}, interval);
      this(...args);
    }
  };
};

function test () {
  console.log('hello');
}

// const throttleTest = test.myThrottle(2000);

// setInterval (throttleTest, 500);

Function.prototype.myDebounce = function(interval) {
  let timeup = false; 

  return (...banana) => {
    timeup = false;
    setTimeout(() => {timeup = true;}, interval);
    this(...banana);
  }
}

const debounceTest = test.myDebounce(500);

setInterval (debounceTest, 2000);