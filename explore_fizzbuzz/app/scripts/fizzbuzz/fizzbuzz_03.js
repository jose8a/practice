
// Object Oriented Fizzbuzz
//
// Utilizes two NumberCheck objects, each of which checks a given
// number for it's multiple, and if the number matches, 
// generates it's proper 'slogan'
//
// Also utilizes a number generator object for the NumberCheck
// objects to use.

console.log("I am Object-Oriented FizzBuzz!");

function NumberCheck() {
  this.slogan = "";
  this.multiple = 1;

  this.isMultipleOf = function( num ) {
    return ((num % this.multiple == 0) ? true : false);
  };

  this.sloganForNumber = function( num ) {
    return (this.isMultipleOf(num) ? this.slogan : "");
  };
}

function ProgramRun() {
  this.interval = 200;     // run the program every 1000ms (1s)
  this.timerID = undefined;
  this.matchers = [];       // collection of NumberCheck objects
  this.currentCount = 1;
  this.maxCount = 20;
  this.message = "";

  this.checkMatches = function() {
    var self = this;
    this.clearMessage();
    _.forEach(this.matchers, function( checker ) {
      self.message += checker.sloganForNumber( self.currentCount );
    });
  };

  this.next = function() {
    if ( this.currentCount <= this.maxCount ) {
      // set new timeout and run checkers
      this.checkMatches();
      this.tryMessage();
      this.currentCount++;
    } else {
      this.stop()
    }
  };

  this.start = function() {
    var self = this;
    this.timerID = setInterval( function() { self.next(); }, this.interval );
    console.log(" Starting program runner ... ");
  };

  this.stop = function() {
    clearInterval(this.timerID);
    console.log(" Program runner is now stopped.");
  };

  this.clearMessage = function() {
    this.message = "";
  };

  this.tryMessage = function() {
    if( this.message !== "" ) {
      console.log( this.currentCount + " --> " + this.message );
    }
  };
};


// Instantiate objects, configure those objects, and
// start the program ... 
//
var fizzCheck = new NumberCheck();
var buzzCheck = new NumberCheck();
var progRunner = new ProgramRun();

fizzCheck.slogan = "fizz";
fizzCheck.multiple = 3;

buzzCheck.slogan = "buzz";
buzzCheck.multiple = 5;

progRunner.matchers.push( fizzCheck );
progRunner.matchers.push( buzzCheck );

//progRunner.start();

