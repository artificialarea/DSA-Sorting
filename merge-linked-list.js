const { LinkedList, linkedListHelpers } = require('./linked-list')

let brianSachaList = new LinkedList

brianSachaList.insertFirst('5')
brianSachaList.insertFirst('3')
brianSachaList.insertFirst('84')
brianSachaList.insertFirst('12')
brianSachaList.insertFirst('60')
brianSachaList.insertFirst('53')
brianSachaList.insertFirst('51')
brianSachaList.insertFirst('34')
brianSachaList.insertFirst('82')
brianSachaList.insertFirst('17')
brianSachaList.insertFirst('27')

console.log(JSON.stringify(brianSachaList, null, 2))


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

let count = 0; // for console.log

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

    
    count++; // for console.log
    //console.log('count: ', count);
    // console.log('count: ', count, '\nleft: ', JSON.stringify(left), '\nright: ', JSON.stringify(right), '\narray: ', JSON.stringify(array));


    return array;
};
