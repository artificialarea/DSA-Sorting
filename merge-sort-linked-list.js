const { LinkedList, linkedListHelpers } = require('./linked-list')

let list = new LinkedList;

list.insertFirst(5)
list.insertFirst(3)
list.insertFirst(84)
list.insertFirst(12)
list.insertFirst(60)
list.insertFirst(53)
list.insertFirst(51)
list.insertFirst(34)
list.insertFirst(82)
list.insertFirst(17)
list.insertFirst(27)

console.log('original linked list: ');
linkedListHelpers.display(list);
// console.log(JSON.stringify(list, null, 2));


function mergeSort(list) {
    const length = linkedListHelpers.size(list)
    if (length <= 1) {
        return list;
    }
   
    const middle = Math.floor(length / 2);
    const left = mergeSort(subList(list, 0, middle));
    const right = mergeSort(subList(list, middle, length));

    return merge(left, right);
};


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


let newList = mergeSort(list);

console.log('merged sorted linked list: ');
linkedListHelpers.display(newList)