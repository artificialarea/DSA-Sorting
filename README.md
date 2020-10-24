# Sorting algorithms

**[Thinkful Data Structures & Algorithms assignment](https://courses.thinkful.com/dsa-v1/checkpoint/10#assignment)**

To run any of these scripts, in terminal command line enter: `node script-name.js`



<br />


## 1. understanding merge sort

Given the following list of numbers `21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40`


<br />

What is the resulting list that will be sorted after 3 recursive calls to mergesort?

> `1,21,26,45`


<br />

What is the resulting list that will be sorted after 16 recursive calls to mergesort?

> `1,2,9,16,21,26,27,28,29,34,39,40,43,45,46,49`


<br />

What are the first 2 lists to be merged?

> `[1,21] + [26,45] = [1,21,26,45]` 


<br />

Which two lists would be merged on the 7th merge?

> `[1,21,26,45] + [2,9,28,29] = [1,2,9,21,26,28,29,45]`



<br />


## 2. understanding quicksort

1 ] Which of the following statements is correct about the partition step? Explain your answer.

> **The pivot could have been either 14 or 17.** Just ask, if I start with the number in the last index in the array and look left, at what point do I see a number that is lower? In both above cases, the point is at the number 20.


<br />

2 ] Given the following list of numbers `14, 17, 13, 15, 19, 10, 3, 16, 9, 12` show the resulting list after the second partitioning according to the quicksort algorithm.

init
    14, 17, 13, 15, 19, 10, 3,  16, 9,  12         
1st pass
    10, 3,  9,  12, 15, 19, 14, 17, 16, 13
2nd pass

2nd pass process
mine
                i
    3,  9,  10, 12, 15, 19, 14, 17, 16, 13
            j
                                        p

marius
                i
    3,  9,  10, 12, 15, 19, 14, 17, 16, 13
            j
                                        p



 
    j                
    10, 3, 9, 12, 15, 19, 14, 17, 16, 13
i                                  

               j                
    3, 9, 12, 10, 15, 19, 14, 17, 16, 13
          i                  


if (array[i] <= pivot) {
    swap(array, i, j);
    j++;
}


