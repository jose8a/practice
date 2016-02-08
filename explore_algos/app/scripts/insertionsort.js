// INSERTION SORT algorithm
//
// Pseudocode:
//  * Start w/Array[0..1]
//    * N=i=1
//    * A[N] = A[1]
//    * if A[N] < A[N-x], 
//    *   slide subArray[N-x..N-1] right by 1
//    *   A[N-x] = A[N]
//    * else, increment x 
//    * repeat w/N=(i+1)
//    * stop when i=A.length && A[i] > A[i-1]
//
// The key to remember is that as idx increases, the subArray to it's left is
// always sorted.  The next element is always inserted into the proper place in
// the already-sorted subArray.
//
