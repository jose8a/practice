// QUICK SORT algorithm
//
// Another divide and conquer recursive algorithm
//
// Divide-and=Conquer:
// by first partitioning:
//  * choose pivot (typically array's most-significant element)
//  * Groups G(gt), L(lt), U(unk), and R(pivot)
//  * g = u = subA_lsb
//  * while u < r 
//    ** check subA[u] < R
//      -- true ==> swap subA[g] <==> subA[u] && g++
//    ** u++
//  * swap subA[g] <==> subA[r]
//  * return g
//
// Invoked:
//  qSort(arr, lsb, msb)
//    pivot = partition(arr, lsb, msb)
//    qSort(arr, lsb, pivot-1)
//    qSort(arr, pivot, msb)
//
// Think about the Randomized Quicksort solution for improving
//  the worst-case upper-bound running scenario
// 
//
//
