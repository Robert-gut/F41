// ? Оператори 

//! матиматичні оператори

// console.log('Додавання 1 + 1 =>', 1 + 1);
// console.log('Віднімання 2 - 1 =>', 2 - 1);
// console.log('Множення 2 * 2 =>', 2 * 2);
// console.log('Ділення 4 / 2 =>', 4 / 2);
// console.log('Остача від ділення 5 % 2 =>', 5 % 2);
// console.log('Степінь 3 ** 3 =>', 3 ** 3);

//! Матиматичні оператогри з різними типами даних



// console.log('Yes ' + 'or ' + 'not');
// console.log('Number ' + 3)//! приводить все до string
// console.log('4' - 2);
// console.log(2 + '4' + true);
// console.log(2 + true);
// console.log(2 * '10gfhdfg');//NaN

// ! Унарний оператор +

// console.log(+'245');
// console.log(+'400');
// console.log(+'test');
// console.log(+true);
// console.log(+false);
// console.log(+undefined);
// console.log(+null);

//! Оператора присвоєння

// const pi = 3 + 0.14
// console.log('✌️pi --->', pi);

//! скорочення

// let a = 1
// a = a + 2
// console.log('✌️a --->', a);

// let b = 10
// console.log(b += 1);//11// b = b + 1
// console.log(b -= 1);//10// b = b - 1
// console.log(b *= 2);//20// b = b * 2
// console.log(b /= 2);//10// b = b / 2

// console.log('✌️b --->', b);

//! інкремент і декремент 
//* інкремента ++1

// let c = 10
// c = c + 1
// c += 1
// console.log('✌️c --->', c);


// let d = 100
// d++
// console.log('✌️d --->', d);

//* декремент --1

// let i = 111
// i--
// console.log('✌️i --->', i);

//! постфіксний і префіксний розміщення інкремент і декремент 

//* посфіксне 

// let f = 999
// console.log(f++);
// console.log(f);

//* префіксний

// let g = 999
// console.log(++g);
// console.log(g);

//! оператори порівняння

//* >
//* <
//* <=
//* >=
//* == рівнісьть по значення
//* === сувора рівнісьть (по типах)
//* != НЕ рівнісьть по значенню
//* !== НЕ сувора рівнісьть (по типах)


//  1 == '1' => true
//  1 == 2 => false
//  1 === 1 => true
//  1 === '1' => false

//  1 != '1' => false
//  1 !== '1' => true

// console.log(1 > 2);
// console.log(1 < 2);

// console.log(1 === 2);
// console.log(2 === 2);

// console.log(1 !== 2);
// console.log(2 !== 2);

//! порівняння різних типів даних

// console.log('2' > 1);
// console.log('1' == 1);

// console.log(true == 1);
// console.log(false == 0);

// console.log(1 === true);
// console.log(1 !== true);

// console.log(undefined == null);
// console.log(undefined === null);

// console.log(undefined == 1);
// console.log(null == 1);


// console.log('a' === 'a'); //true
// console.log('A' < 'a'); //true
// console.log('b' > 'a'); //true
// console.log('abc' < 'abcd');//true


//! логічні оператори ||  &&
//!|| - або 

// console.log(true || true);//true
// console.log(false || true);//true
// console.log(false || false);//false
// console.log(false || false || true || false || false);

//!&& - і 

// console.log(true && true);//true
// console.log(true && true && true && false && true && true && true && true && true);


//! тернальний оператор

// let a = 1
// 1 === a ? console.log('1 === a') : console.log('1 !== a')

//!  if else

// let a = 1

// if (a === 1){
//   console.log('1')
// } else if(a === 2) {
//   console.log('2')
// }else{
//   console.log('9999'); 
// }

//! switch case
 
// const j = 1

// switch (j) {
//   case 1:
//     console.log(1);
//     break
//   case 2:
//     console.log(2);
//     break
//   default:
//     console.log(9999);     
// }



///////////////////////////////////////////////////////////////////

// function month() {
//   const monthNumber = +document.querySelector('.monthNumber').value
// console.log('✌️monthNumber --->', monthNumber);
  
//   if(monthNumber === 1 || monthNumber === 2 || monthNumber === 12 ){
//     console.log('Winter!!!');
//   }
//   else if(monthNumber === 3 || monthNumber === 4 || monthNumber === 5){
//     console.log('Spring!');
//   }
//   else if(monthNumber === 6 || monthNumber === 7 || monthNumber === 8){
//     console.log('Summer!');
//   }
//   else if(monthNumber === 9 || monthNumber === 10 || monthNumber === 11){
//     console.log('fall! autumn');
//   }
//   else{
//     console.log('Invalid input');
//   }
// }

///////////////////////////////////////////////////////////////////////////


function month() {
  const monthNumber = document.querySelector('.monthNumber').value

  switch (monthNumber) {
    case '1':
    case '2':
    case '12':
      console.log('Winter!');
      break
    case '3':
    case '4':
    case '5':
      console.log('Spring!');
      break
    case '6':
    case '7':
    case '8':
      console.log('Summer!');
      break
    case '9':
    case '10':
    case '11':
      console.log('Fall!');
      break
    default:
      console.error('error!!!');
  }
}

month()


// ///////////////////////////////////////////////////////////////////////

const select = document.getElementById('bgc')
const bg = document.querySelector('body')

select.addEventListener('change', function(){
  const selectedValue = select.value
  
  switch(selectedValue){
    case 'green':
      bg.style.backgroundColor = 'green'
      break
    case 'yellow':
      bg.style.backgroundColor = 'yellow'
      break
    case 'blue':
      bg.style.backgroundColor = 'blue'
      break
    default:
      bg.style.backgroundColor = 'red'
  }
})