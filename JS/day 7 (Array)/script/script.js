//? Масиви , Array []

//! Створення масива

// const array = new Array()
// console.log('✌️array --->', array);

// const array2 = []
// console.log('✌️array2 --->', array2);

//! Синтаксис і наповнення масива

// const arrNumbers = [1, 2, 3]
// console.log('✌️arrNumbers --->', arrNumbers);

// const arrType = [
//   1,
//   'str',
//   true,
//   null,
//   undefined,
//   function(){
//     return 999
//   },
//   [1,2,3],
//   {name: 'Rob'}
// ]
// console.log('✌️arrType --->', arrType);

//! як получіти дані з масива

// console.log(arrType[0]);
// console.log(arrType[1]);
// console.log(arrType[2]);
// console.log(arrType[4]);

// console.log(arrType[5]());// виклик фун
// console.log(arrType[6][1]);
// console.log(arrType[7].name);

// console.log(arrType[8]);//undefined


//! індексація

// const matrix = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ]

// console.log(matrix[3][2]);

//! довжина масива .length

// console.log(matrix.length);

//! копіювання масивів

// const arr = [1,2,3]
// console.log('✌️arr --->', arr);

// const copyArr = arr
// copyArr.length = 2

// console.log('✌️arr --->', arr);
// console.log('✌️copyArr --->', copyArr);

//! змінювати значення масива

const arr = [1,2,3]
// console.log('✌️arr --->', arr);

// arr[0] = 99 
// console.log('✌️arr --->', arr);

// arr[arr.length - 1] += 11
// console.log('✌️arr --->', arr);

//! створення нових елементів в сасиві

// arr[3] = 4
// console.log('✌️arr --->', arr);

// arr[arr.length] = 5
// console.log('✌️arr --->', arr);


//? МЕТОДИ МАСИВІВ

//*1 ДОДАВАННЯ ЕЛЕМЕНТІВ В МАСИВ
const cars = ['Bmw', 'Audi', 'MB']
console.log('✌️cars --->', cars);

//! додавання елемента в кінець масива push()
cars.push('Skoda', 'Porshe')
console.log('✌️cars push() --->', cars);

//! додавання елемента в початок масива unshift()

cars.unshift('Renault')
console.log('✌️cars unshift() --->', cars);

//*2 Видалення ЕЛЕМЕНТІВ з МАСИВі
//! видалення елемента з КІНЦЯ масива pop()

cars.pop()
console.log('✌️cars pop() --->', cars);

//! видалення елемента з ПОЧАТКУ масива shift()

cars.shift()
console.log('✌️cars shift() --->', cars);












