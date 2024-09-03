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

// const arr = [1,2,3]
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
// const cars = ['Bmw', 'Audi', 'MB']
// console.log('✌️cars --->', cars);

//! додавання елемента в кінець масива push()
// cars.push('Skoda', 'Porshe')
// console.log('✌️cars push() --->', cars);

//! додавання елемента в початок масива unshift()

// cars.unshift('Renault')
// console.log('✌️cars unshift() --->', cars);

//*2 Видалення ЕЛЕМЕНТІВ з МАСИВі
//! видалення елемента з КІНЦЯ масива pop()

// cars.pop()
// console.log('✌️cars pop() --->', cars);

//! видалення елемента з ПОЧАТКУ масива shift()

// cars.shift()
// console.log('✌️cars shift() --->', cars);


// [1,2,3,4,5,6,99]+ 6(99) це в кінець 
// [1,2,3,4,5,6,99]- 6(99)

// [99,1,2,3,4,5,6,]+ 0(99) => 1(1) => 2(2) => 3(3)....це на початок
// [1,2,3,4,5,6,]- 0(99) => 0(1) => 1(2) => 2(3)....


//////////////////////////////////////// dz 4 ///////////////////////

// const array1 = [1,2,3]

// const array2 = [4,5,6,7,8]
// console.log('✌️array1 --->', array1);
// console.log('✌️array2 --->', array2);

// const addArraus = (arr1, arr2) => {
//   const generateArray = []
//   for(let i = 0; i < arr1.length; i++){
//     generateArray.push(arr1[i])
//   }
//   for(let i = 0; i < arr2.length; i++){
//     generateArray.push(arr2[i])
//   }
//   return generateArray
// }

// const test = addArraus(array1, array2)
// console.log('✌️test --->', test);
//////////////////////////////////////// the dz 4 ///////////////////////


//* заміна , видалення , додавання => в певний індекс

// const cars = ['Bmw', 'Audi', 'MB', 'Skoda', 'Porshe']
// console.log('✌️cars --->', cars);
// // заміна
// cars[2] = 1
// console.log('✌️cars заміна--->', cars);
// //видалення
// delete cars[2]//  не рекомендується => проблема empty index
// console.log('✌️cars видалення--->', cars);
// //додавання
// cars[cars.length] = 'the end'
// console.log('✌️cars  додавання--->', cars);


//! Метод масива splice()
//? ВИДАЛЕННЯ елементів з масиіва
// const cars = ['Bmw', 'Audi', 'MB', 'Skoda', 'Porshe']
// console.log('✌️cars --->', cars);
// cars.splice(0,3) //(start index, к-ть елементів після старта)
// console.log('✌️cars --->', cars);

// const deleteElements = cars.splice(2, 2)// retutn елементи які видалив
// console.log('✌️deleteElements --->', deleteElements);

//? ЗАМІНА елемента в  маcиві під певним індексом
// const cars = ['Bmw', 'Audi', 'MB', 'Skoda', 'Porshe']
// console.log('✌️cars --->', cars);
// const test = ['f1', 'Saab', 'Ford', 'Bankli']

// cars.splice(1, 2, 'Renault', 'Seat')
// cars.splice(1, 2, ...test) 

// console.log('✌️cars --->', cars);

//? ДОДАВАННЯ елементів в масив
// const cars = ['Bmw', 'Audi', 'MB', 'Skoda', 'Porshe']
// console.log('✌️cars --->', cars);

// cars.splice(3, 0, 'Saab', 'Ford', 'Renault')
// console.log('✌️cars --->', cars);


//? ДОДАВАННЯ ЗАМІНА ВИДАЛЕННЯ з кінця
// cars.splice(-1, 1)
// console.log('✌️cars revers--->', cars);

//! Метод масива slice() копіювання масива

// const cars = ['Bmw', 'Audi', 'MB', 'Skoda', 'Porshe']
// console.log('✌️cars --->', cars);

// const newCopyArray = cars.slice(0,3)
// console.log('✌️newCopyArray --->', newCopyArray);

//з кінця
// const newCopyArray1 = cars.slice(-3,-1)
// console.log('✌️newCopyArray1 --->', newCopyArray1);

//Весь масив
// const newCopyAllArray = cars.slice(0, cars.length)
// console.log('✌️newCopyAllArray --->', newCopyAllArray);

// const newCopyArray = cars.slice()
// console.log('✌️newCopyArray --->', newCopyArray);

//////////////////////
// cars[1] = 'TEST999'
// console.log('✌️cars --->', cars);
// console.log('✌️newCopyArray --->', newCopyArray);

//! Метод масива concat() копіювати масива з додаванням нових елементів в скопійований масив

const cars = ['Bmw', 'Audi', 'MB', 'Skoda', 'Porshe']
console.log('✌️cars --->', cars);

//! 1 варіант
// const copyArrayConcat = cars.concat('Ford', 'Saab')
// console.log('✌️copyArrayConcat --->', copyArrayConcat);
//! 2 варіант
const arr = ['Renault', 'Saab', 'Ferrari']
const arr2 = ['Citroen', 'Fiat', 'Subaro']

const copyArrayConcat = cars.concat(arr, arr2)
console.log('✌️copyArrayConcat --->', copyArrayConcat);