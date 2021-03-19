const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCb) {
  if (numsLeft > 0) {
    reader.question('Enter a Number: ', function(ans) {
      const num = parseInt(ans);
      sum += num;
      console.log(`Sum: ${sum}`);
      addNumbers(sum, numsLeft - 1, completionCb);
    });
  } else if (numsLeft === 0) {
    completionCb(sum);
    reader.close();
  }
}


addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
