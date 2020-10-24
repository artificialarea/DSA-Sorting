# Sorting algorithms

**[Thinkful Data Structures & Algorithms assignment](https://courses.thinkful.com/dsa-v1/checkpoint/10#assignment)**

To run any of these scripts, in terminal command line enter: `node script-name.js`



<br />


## 1. understanding merge sort

Given the following list of numbers `21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40`


What is the resulting list that will be sorted after 3 recursive calls to mergesort?

> `1,21,26,45`


What is the resulting list that will be sorted after 16 recursive calls to mergesort?

> `1,2,9,16,21,26,27,28,29,34,39,40,43,45,46,49`


What are the first 2 lists to be merged?

> `[1,21] + [26,45] = [1,21,26,45]` 


Which two lists would be merged on the 7th merge?

> `[1,21,26,45] + [2,9,28,29] = [1,2,9,21,26,28,29,45]`