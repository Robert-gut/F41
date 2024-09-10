// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json))

//? OBJECT 

//! СТВОРИТИ ОБЄКТ

// const obj1 = new Object()
// const obj2 = {}

// console.log('✌️obj1 --->', obj1);
// console.log('✌️obj2 --->', obj2);

//! синтаксис  object

//* const objName = {
//*   key: value,
//*   key: value,
//*   key: value,
//*   key: value,
//*   key: value,
//* }

// const car = {
//   name: 'BMW',
//   model: 'm5',
//   age: 2,
//   maxSpeed: 330,
// }

//! получіти дані з обєкта

// console.log(car);
// console.log(car.name + ' ' + car.model);//1 .
// console.log(car['age']);//2 []
// ///////////////////////

// const objKey = 'maxSpeed'

// console.log(car.objKey);//undefined
// console.log(car[objKey]);// 330

//! що ми можемо вложувати в object

// const obj = {
//   str: 'string',//властивості обєкта
//   number: 999,//властивості обєкта
//   boolean: true,//властивості обєкта
//   null: null,//властивості обєкта
//   und: undefined,//властивості обєкта
//   arr: [1,2,3],//властивості обєкта
//   obj: {name: 'test'},//властивості обєкта
//   fn: function(){console.log('ok')}// метод
// }
// console.log('✌️obj --->', obj);

// console.log('✌️obj --->', obj.null);
// console.log('✌️obj --->', obj.arr[1]);
// console.log('✌️obj --->', obj.obj.name);

// obj.fn()

//? МОДИФІКУВАННЯ ОБЄКТА
//! 1 ДОДАВАННЯ НОВИХ ВЛАСТИВОСТЕЙ

// const car = {
//   name: 'BMW',
//   model: 'm5',
//   age: 2,
//   maxSpeed: 330,
// }
// console.log('✌️car --->', car);

// // ВЛАСТИВІСЬТЬ +++
// car.kg = 2100
// console.log('✌️car ---kg>', car);

// // obj
// car.engine = {
//   name: 'm57',
//   type: 'disel',
//   power: 350
// }
// console.log('✌️car ---+obj>', car);

//!2 ВИДАЛЕННЯ ВЛАСТИВОСТЕЙ

// const car = {
//   name: 'BMW',
//   model: 'm5',
//   age: 2,
//   maxSpeed: 330,
// }
// console.log('✌️car --->', car);


// delete car.maxSpeed
// console.log('✌️car --->', car);

//!3 РЕДАГУВАННЯ ВЛАСТИВОСТЕЙ

// const car = {
//   name: 'BMW',
//   model: 'm5',
//   age: 2,
//   maxSpeed: 330,
// }
// console.log('✌️car --->', car);

// car.age = 3
// console.log('✌️car ---+1>', car);


//? КОПІЮВАННЯ ОБЄКТІВ

// const car = {
//   name: 'BMW',
//   model: 'm5',
//   age: 2,
//   maxSpeed: 330,
// }
// console.log('✌️car --->', car);

// const superCar = car
// superCar.age = 5
// console.log('✌️superCar --->', superCar);
// console.log('✌️car --->', car);

//! як правельно копіювати або метод assign()


// const car = {
//   name: 'BMW',
//   model: 'm5',
//   age: 2,
//   maxSpeed: 330,
// }
// console.log('✌️car --->', car);

// const superCar = Object.assign({}, car)
// superCar.age = 5
// console.log('✌️superCar --->', superCar);
// console.log('✌️car --->', car);

////////////////////////////////////////
// 1 може обєднати багато обєктів в один
// 2 він робить спарвжню копію обєкта

// const target = {a: 1, b: 2}
// const source = {b: 4, c: 5}
// const source2 = {d: 4, e: 5}

// const returnedTarget = Object.assign(target, source, source2, {name: 'test'}, ...[{name2: 'test1'},{name3: 'test2'},{name4: 'test3'}])

// console.log('✌️returnedTarget --->', returnedTarget);


//! перевірка на існування певного ключа(властивості)   in

// const car = {
//   name: 'BMW',
//   model: 'm5',
//   age: 2,
//   maxSpeed: 330,
// }
// console.log('✌️car --->', car);

// console.log('age' in car);//true
// console.log('engine' in car);//false

// if('age' in car){
//   console.log(car.age);
// }


//! перебрати обєкт 
// const car = {
//   name: 'BMW',
//   model: 'm5',
//   age: 2,
//   maxSpeed: 330,
// }

// for (const key in car) {
//   console.log(`${key}: ${car[key]}`);
// }


//! методи обєктів

// const car = {
//   name: 'BMW',
//   model: 'm5',
//   age: 2,
//   maxSpeed: 330,
//   showInfo: function(){
//     console.log(`${this.name} ${this.model} ${this.maxSpeed}`);
//   }
// }

// car.showInfo()