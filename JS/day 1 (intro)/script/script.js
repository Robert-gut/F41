// console.log('Test!');

// ! 1 типи змінних або константи

//? глобальну зону видимості
var number = 1

//? блочні зони видимості
let number2 = 1 //! змінна
const number3 = 3.14//! константа

// console.log(number2);

// number2 = 111
// console.log(number2);


// console.log(number3);

// number3 = 3.99

// console.log(number3);

// function test (){
//   const a = 1
// }
// test()

// console.log('✌️a --->', a);



//! типи даних в js

//! 1 number

// const age = 20
// console.log('✌️age --->', age);
// console.log('✌️age --->', typeof age);

// const value = 3.14
// console.log('✌️value --->', value);
// console.log('✌️value --->', typeof value);

//! 2 string

// 'Bill'| "Bill" | `Bill`

// const name = 'Bill'
// console.log('✌️name --->', name);
// console.log('✌️name --->', typeof name);

// const email = "test@gmail.com"

// console.log('✌️email --->', email);
// console.log('✌️email --->', typeof email);

// const password = `1234567890test`

// console.log('✌️password --->', password);
// console.log('✌️password --->', typeof password);

// const test = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, aspernatur. Molestias voluptates totam, iure vel sit animi. Quo quod, ipsam libero dignissimos repellendus optio repellat enim non perferendis nam voluptates suscipit laborum distinctio, totam amet nobis ducimus? Eum beatae inventore quae est dolorum quaerat officiis ab commodi cum fugit. Reprehenderit accusamus veniam eaque voluptates, illum quidem soluta voluptatem! Voluptatibus, quaerat? Animi illo velit, quasi fugiat dignissimos cupiditate. Reiciendis iure optio nam, ullam quo, debitis excepturi eos laborum enim ipsam sequi eligendi eius exercitationem perferendis incidunt odit nulla alias iusto totam porro cum odio omnis. Hic neque ex optio eos velit?'
// console.log('✌️test --->', test);

// const numString = '10'
// console.log('✌️numString --->', numString);
// console.log('✌️numString --->', typeof numString);


// ! 3 boolean
// true|false

// let isActivate = false
// console.log('✌️isActivate --->', isActivate);
// console.log('✌️isActivate --->', typeof isActivate);

// isActivate = true
// console.log('✌️isActivate --->', isActivate);
// console.log('✌️isActivate --->', typeof isActivate);


//! 4 undefined - присвоює сам js коли в нас пуста змінна або константа


// let any
// console.log('✌️any --->', any);
// console.log('✌️any --->', typeof any);

// any = 'test'
// console.log('✌️any --->', any);
// console.log('✌️any --->', typeof any);

// let same = undefined
// same = 1

//! 5 null - що ми знаємо що дана змінна є пуста

// let port = null
// console.log('✌️port --->', port);
// console.log('✌️port --->',typeof port);

// /////////////////////////////////////////////////////////////

// матиматичні дії
const a = 5.2, b = 10, c = 2

let result = 0 

result = a + b
result = a - b
result = a * b
result = a / b
result = a % c
result = 5 % 2  

result = (2 + 2) * 2

console.log(result);

//////////////////////////////////////////////////////////////////////////

const hello = 'hello it`s my first app'
// alert(hello)

const num1 = +prompt('Enter number 1!')
const num2 = +prompt('Enter number 2!')
console.log('✌️num1 --->',typeof num1);
console.log('✌️num2 --->',typeof num2);

alert(num1 + num2)

