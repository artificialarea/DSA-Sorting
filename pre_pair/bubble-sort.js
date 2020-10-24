function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function bubbleSort(array) {
    let swaps = 0;
    for (let i = 0; i < array.length - 1; i++) {
        console.log(JSON.stringify(array));
        
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++;
        }

    }
    
    console.log('swaps: ', swaps);

    if (swaps > 0) {
        return bubbleSort(array);
    }
    return array;
};


let data = [67, 23, 8, 6, 9, 45, 2];

console.log(bubbleSort(data));


/*
The best case is that the nodes are already in order, so it simply needs to check each pair 1 time; an O(n) operation. 

In the worst case, each value needs swapping with each other value, so that's O(n^2). And this is the same as the average case, which is also O(n^2).
*/