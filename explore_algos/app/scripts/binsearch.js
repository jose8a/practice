// BINARY SEARCH algorithm
//
// Prerequisite -- array is presorted
//
// Pseudocode:
//  * select array midpoint
//  * check element at midpoint
//  * if guess = target, search is done
//  * if min_index = max_index, target NOT_FOUND
//  * if guess < target, new subArray[0]_index = midpoint index
//  * if guess > target, new subArray[max]_index = midpoint index
//  * repeat using new subArray
//
var input_array = [1, 2, 3, 4, 6, 7, 8, 12, 23, 33, 34];

var BinSearch = function() {
  var this.initialize = function( target, list ) {
    this.target = target;
    this.array = list;
    this.size = this.array.length;
    this.minIndex = 0;
    this.maxIndex = this.size -1;
    this.midIndex = this.size / 2;
    this.result = -1;
    this.isfound = false;
  }
  
  var this.search = function() {
    if (this.minIndex == this.maxIndex) {
      if (this.target == this.array[minIndex]) {
        this.isFound = true;
        this.result = this.minIndex;
      } 
      return;
    }

    if ( this.target == this.array[this.midIndex] ) {
      this.isFound = true;
      this.result = this.minIndex;
      return;
    } else if ( this.target < this.array[this.midIndex] ) {
      this.maxIndex = this.midIndex
      this.midIndex = (this.maxIndex - this.minIndex)/2;
      return this.search();
    } else if ( this.target > this.array[this.midIndex] ) {
      this.minIndex = this.midIndex
      this.midIndex = (this.maxIndex - this.minIndex)/2;
      return this.search();
    }
  }
}

// Example Usage:
var bsearch = new BinSearch();
bsearch.initialize(3, input_array);
bsearch.search();
console.log("The input list of numbers: ");
console.log("    " + input_array);
if bsearch.isFound {
  console.log( bsearch.target + " found at index: " + bsearch.result);
} else {
  console.log( bsearch.target + " not in the list of numbers.");
}



