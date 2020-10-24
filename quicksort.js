function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};


function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};

// There are different partitioning algorithms. 
// A common in-place algorithm is Lomuto's algorithm:
function partition(array, start, end) {
    const pivot = array[end - 1];
    // console.log('pivot: ', pivot);
    let j = start;
    for (let i = start; i < end - 1; i++) {
        // console.log(JSON.stringify(array));
        // console.log('i: ', array[i], 'j: ', array[j]);
        // console.log(`is ${array[i]} =< ${pivot} ?`)
        if (array[i] <= pivot) {
            // console.log(`yes... ${array[i]} is less than ${pivot}`);
            // console.log(`swap ${array[i]} with ${array[j]}`);
            // console.log(JSON.stringify(array));
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};

// let data = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12];
let data = [
    89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5
];
console.log(data);
console.log(quickSort(data));


/*
Quicksort is another sorting algorithm with O(nlog(n)) best and average-case performance, like merge sort, although quicksort is O(n^2) in the worst case. 

Despite this, quicksort is more commonly used than merge sort, as it is more cache-efficient and can easily be performed in place (i.e., without additional memory allocations).
*/