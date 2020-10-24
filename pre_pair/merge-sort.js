function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right, array);
};

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }

    console.log('left: ', JSON.stringify(left), '\nright: ', JSON.stringify(right), '\narray: ', JSON.stringify(array));

    return array;
};

let data = [67, 23, 8, 6, 9, 45, 2];

console.log(mergeSort(data));


/*
Merge sort has a best, average, and worst-case performance of O(nlog(n)). 

This is probably the lower limit for a comparison sort's average case and is significantly better than bubble sort's O(n^2).
*/