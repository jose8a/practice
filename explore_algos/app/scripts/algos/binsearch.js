
// Pseudocode for #Binsearch
// -- let min=1 and max=N
// -- set guess to the midpoint of min/max
// --   |--> if guess is correct, stop
// --   |--> if guess is too low, set min=guess+1
// --   |--> if guess is too high, set max=guess-1
// -- return to step#2
//

function BinSearch( maxNum, arbiter ) {
  this.min = 1;
  this.max = maxNum;

  this.midpoint = (this.max - this.min) / 2;
  this.guess = this.midpoint;

  if arbiter.checkAnswer(this.guess){
    return this.guess;
  } else if arbiter.checkLow(this.guess) {
    this.min = this.guess + 1;
  } else {
    this.max = this.guess - 1;
  }
}

function GuessArbiter() {
  this.answer = 0;

  this.initialize = function( answer ) {
    this.answer = answer;
  };

  this.checkAnswer = function( guess ) {
    return (this.answer === guess);
  };

  this.checkLow = function( guess ) {
    return this.answer > guess;
  };
}



