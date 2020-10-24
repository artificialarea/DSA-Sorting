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
    let j = start;
    for (let i = start; i < end - 1; i++) {
        console.log(JSON.stringify(array));
        console.log('i: ', array[i], 'j: ', array[j]);
        console.log(`is ${array[i]} =< ${pivot} ?`)
        if (array[i] <= pivot) {
            console.log(`yes... ${array[i]} is less than ${pivot}`);
            console.log(`swap ${array[i]} with ${array[j]}`);
            console.log(JSON.stringify(array));
            swap(array, i, j);
            j++;
        }
    }
    console.log(`\nplace pivot in the middle, then start over\n`)
    swap(array, end-1, j);
    return j;
};

let data = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12];

console.log(quickSort(data));


/*  
Quicksort is another sorting algorithm with O(nlog(n)) best and average-case performance, like merge sort, although quicksort is O(n^2) in the worst case. 

Despite this, quicksort is more commonly used than merge sort, as it is more cache-efficient and can easily be performed in place (i.e., without additional memory allocations).
*/