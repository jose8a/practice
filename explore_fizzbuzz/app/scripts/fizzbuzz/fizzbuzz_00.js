
// Purely imperative fizzbuzz -- wrapped in a function to make it callable from 
// outside files

function ImperativeFizzBuzz() {
  var MAX_NUM = 100

  var result = [];

  for(i=1; i<= MAX_NUM; i++) {
    result[i] = "";

    if(i%3 == 0) {
      result[i] += "fizz";
    }

    if(i%5 == 0) {
      result[i] += "buzz";
    }
  }

  return result
}
