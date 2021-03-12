const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers (sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question('Number: ', function (answer) {
      let number = parseInt(answer);
      sum += number;
      console.log('Sum: ' + sum);
      addNumbers(sum, numsLeft-1, completionCallback);
    });
  } else if (numsLeft === 0){
    reader.close();
    completionCallback(sum);
  }
};

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
