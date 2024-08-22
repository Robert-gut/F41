//? ТИПИ ФУНКЦІЙ

//!1 Функції оголошення (Function Declaration)
//! всплиття - цей тип функцій доступний скрізь 

// console.log(add(1,1));// перед фун

// (a, b) це параметри функції
// function add(a, b){
//   return a + b
// }

// (1,1) це аргументи функції
// console.log(add(1,1));// після фун

// * arguments

// function logArguments(){
//   console.log(arguments);
//   console.log(arguments[0]);
//   console.log(arguments[8]);
//   console.log(arguments[10]);
//   console.log(arguments.length);//к-ть елементів
  
// }

// logArguments(1,2,3,4,8,true, null, undefined)

////////////////////////////////////////////////
// * return

// function logReturn(a){
//   console.log('Start');
//   if (a === 10) {
//     return
//   }

//   console.log('Finish');
//   return a
// }


// console.log(logReturn(10));


//! 2. функції вирази (Function Expression)

// sayHello()//---

const sayHello = function(){
  console.log('hello');
}

// sayHello()//+++

//! 3 Стрілкові функції (Arraw Functons)
// const nameFn = () => {}


// sayBye('Robert')//------

// const sayBye = (personName) => {
//   console.log('Bay ' + personName);
// }

// sayBye('Robert')
/////////////////////////////////////////////
const test = () => {
  // console.log(arguments);///------------------
  // return 1 + 2 //+++++++
}
// console.log(test(1,2));
/////////////////////////////////////////////

// const test2 = a => 1 + 2 + a 

// console.log('✌️test2 --->', test2(1));

//! 4. Самовикликаючий тип функцій (IIFE immediately invoked function expressions)

// (function (name){
//   console.log(`Hello ${name}!!!`);
// })('Robert')

// (function (name){
//   console.log(`Hello ${name}!!!`);
// }('Robert'))

// let iife = function(name) {
//   console.log(`Hello ${name}!!!`)
// }('Robert')

// iife()

//! РЕКУРСІЯ, РЕКУРСИВНІ ФУНКЦІЇ(Recursive functions)

// function logNum(num){
//   console.log(num);
//   if (num === 100) {
//     return
//   }
//   logNum(++num)
// }

// logNum(1)

/////////////////////////////////////////////

// 5! = 5 * 4 * 3 * 2 * 1 = 120

// function factorial(n) {
//   console.log(n);
//   if(n === 0){
//     return 1
//   } else {
//     return n * factorial(n - 1)
//   }
// }

// const number = 10
// const result = factorial(number)

// console.log(`${number}! = ${result}`);

// /////////////////////////////////////////////

// let conuter = 1
// function Recursion(number){
//   console.log(conuter);
//   if (conuter < number) {
//     console.log('Inside');
//     conuter++
//     Recursion(number)
//   }
// }

// Recursion(100)

// //////////////////////////////////////////////////

function generateNestedList(depth, items){
  if(depth === 0){
    return ''
  }

  const openTag = `<ul>`
  const closeTag = `</ul>`
  let listItems = ''

  for (let i = 0; i < items; i++) {
    listItems += `<li>${generateNestedList(depth - 1, items)}</li>`
  }
  return `${openTag}${listItems}${closeTag}`
}

const nestedList = generateNestedList(4, 3)
console.log(nestedList);

