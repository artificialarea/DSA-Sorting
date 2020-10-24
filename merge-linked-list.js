const {LinkedList} = require('./linked-list')

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

