const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, cb) {
  reader.question(`Is ${el1} > ${el2}? `, function(ans) {
    (ans === 'yes') ? cb(true) : cb(false);
  });
}

// askIfGreaterThan(3, 4, (bool) => console.log(bool));

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan) {
      if (isGreaterThan) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        madeAnySwaps = true;
      }

      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  }

  if (i == (arr.length - 1)) {
    outerBubbleSortLoop(madeAnySwaps);
    return;
  }
}

function absurdBubbleSort(arr, sortCompletionCb) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCb(arr);
    }
  }

  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 5, 1, 9, 11], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});