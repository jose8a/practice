// RECURSIVE PALINDROME algorithm
//
// 2 base cases:
// Base case: A[min_idx] != A[max_idx]: return false
// Base case: if (min_idx + 1) > (max_idx - 1): return true
// 
// recursing case:  isPalindrome(A[min_idx+1 .. max_idx-1])
//
