//? цикли в js

// console.log('hello');
// console.log('hello');
// console.log('hello');
// console.log('hello');
// console.log('hello');


//! 1 FOR ЦИКЛ

//* for(початкове значення; умова(поки умова === true); крок){
//*   тіло нашого цикла
//* }

// for(let i = 1; i <= 5; i++){
//   console.log('hello ' + i);
// }


// /////////////////////////////////////////////////////////////////

// const arr = ['Bmw', 'MB', 'Renault', 'Audi', 'Citroen', 'Seat', 'Ferari']

// console.log(arr);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// console.log(arr.length);

// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }


///////////////////////////////////////////////////////////////
//! вічний цикл

// for(let i = 10; i >= 10; i++){
//   console.log(i);
// }

//! 2 WHILE 

  // while(умова === true){
  //   тіло циклу
  // }

  // let a = 1
  // while(a <= 5){
  //   console.log(a);
  //   a++
  // }

  ////////////////////////////////////////////////////////

  //! вічний цикл
  // let a = 1
  // while(true){
  //   console.log(a);
  //   a++
  // }

//! break - зупиняє цикл

// while(true){
//   let b = 0
//   b++
//   console.log(b);
//   break
// }


//////////////////////////////////////////////////////////

//! знайти факторіал за допомогою циклів

// const factorial = (n) => {
//   if(n < 0) {
//     return 'Факторіал визначається не для відємних чисел!'
//   }

//   let result = 1
//   while(n > 0){
//     result *= n
//     n--
//   }
//   return result
// }

// const number = 5
// const result = factorial(number)
// console.log(`Факторіал числа ${number} дорівнює: ${result}`);


//! do while (спочатку виконується а потім перевіряється)
// let y = 5

// do{
//   console.log(y);
//   y++
// }while(y < 5)

  //! do while - виконує і тоді перевіряє а while перевіряє і тоді виконує

// let x = 5
// while(x < 5){
//   console.log(x < 5);
//   x++
// }

// /////////////////////////////////////////////////////////////
//? ще 2 види цикла for

//! for of зручно працювати з масивом

// const arr = ['Bmw', 'MB', 'Renault', 'Audi', 'Citroen', 'Seat', 'Ferari']

// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }

// for(let auto of arr){
//   console.log('auto: ' + auto);
// }

// ! for in зручно працює з обєктами

// const person = {
//   name: 'Jon',
//   age: 30,
//   isMerried: true,
//   auto: 'VW'
// }

// console.log(person.age);
// console.log(person.name);

// for(let key in person){
//   console.log(`${key}: ${person[key]}`);
// }

////////////////////////////////////////////////////////////////////////

// const multiplicationTavle = () => {
//   const number = +prompt('Enter namber')
//   if(!isNaN(number)){
//     for (let i = 1; i <= 10; i++) {
//       console.log(`${number} * ${i} = ${i * number}`);
//     }
    
//   } else{
//     alert('Enter numbers, not symbols')
//     multiplicationTavle()
//   }
// }
// multiplicationTavle()

/////////////////////////////////////////////////////////////

// ігра вгадай число

// console.log(Math.random());
// console.log(Math.random() * 100);
// console.log(Math.floor(Math.random() * 100) + 1);


const namberGame = () => {
  const randomNumver = Math.floor(Math.random() * 100) + 1

  let guess
  let attempts = 0

  while(true){
    guess = +prompt('Guess the number between 1 and 100:')

    if (isNaN(guess)) {
      alert('Please enter a valid number.')
      continue
    }

    attempts++

    if(guess === randomNumver){
      alert(`Congratulations! You Guessed the numver ${randomNumver} correctly in ${attempts} attempts.`)
      break
    } else if (guess > randomNumver){
      alert('Too high! Try again.')
    } else {
      alert('Too low! Try again.')
    }
  }
}

namberGame()



const sum = (n) => {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) sum += i
  }
  return sum
}

sum(50)