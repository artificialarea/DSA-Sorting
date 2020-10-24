const { LinkedList, linkedListHelpers } = require('./linked-list')

let brianSachaList = new LinkedList

brianSachaList.insertFirst(5)
brianSachaList.insertFirst(3)
brianSachaList.insertFirst(84)
brianSachaList.insertFirst(12)
brianSachaList.insertFirst(60)
brianSachaList.insertFirst(53)
brianSachaList.insertFirst(51)
brianSachaList.insertFirst(34)
brianSachaList.insertFirst(82)
brianSachaList.insertFirst(17)
brianSachaList.insertFirst(27)

// console.log(JSON.stringify(brianSachaList, null, 2))


function mergeSort(list) {
    const length = linkedListHelpers.size(list)
    if (length <= 1) {
        return list;
    }
   
    const middle = Math.floor(length / 2);
    // let left = array.slice(0, middle);
    // let right = array.slice(middle, array.length);
    const left = mergeSort(subList(list, 0, middle));
    const right = mergeSort(subList(list, middle, length));

    return merge(left, right);
};



let count = 0; // for console.log

function merge(left, right) {
    const result = new LinkedList
    let leftNode = left.head
    let rightNode = right.head
    
    while(leftNode && rightNode){
        if (leftNode.value < rightNode.value){
            result.insertLast(leftNode.value)
            leftNode = leftNode.next
        } else {
            result.insertLast(rightNode.value)
            rightNode = rightNode.next
        }
    }

    while (leftNode) {
        result.insertLast(leftNode.value)
        leftNode = leftNode.next
    }
    while(rightNode){
        result.insertLast(rightNode.value)
            rightNode = rightNode.next
    }

    return result;
};

function subList(list, start, stop){
    const result = new LinkedList
    let counter = start
    let currentNode = linkedListHelpers.findByIndex(list, start)

    while (counter < stop){
        if (!currentNode) {throw Error ('subList called out of bounds of linked list')}
        result.insertLast(currentNode.value)
        currentNode = currentNode.next
        counter++
    }
    return result;
}


let newList = mergeSort(brianSachaList)

linkedListHelpers.display(newList)