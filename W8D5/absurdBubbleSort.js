const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}? `, function(answer) {
    if (answer === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
  });
};

// askIfGreaterThan(3, 4, (bool) => console.log(bool));

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {
      if (isGreaterThan) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });

  }

  if (i == arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  }
};

// innerBubbleSortLoop([1, 5, 6, 5], 0, true, () => console.log('This is the outer sort'));

function absurdBubbleSort(arr, sortCompletionCallback){
  function outerBubbleSortLoop(madeAnySwaps){
    if (madeAnySwaps){
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
};

absurdBubbleSort([3, 5, 1, 9, 11], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});