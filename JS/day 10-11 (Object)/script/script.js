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


//! ///////////////////////////// DAY 2 //////////////////////

// ? /////////////////////// DZ //////////////////////

// function isEmptyObj(obj){
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//      return false
//     }
//   }
//   return true
// }

// function isEmptyObj(obj){
//   return Object.keys(obj).length === 0
// }

// const anyObj = {name: 'test'}
// console.log(isEmptyObj(anyObj));
// ? ///////////////////////the end DZ //////////////////////


//? методи  і копіювання обєктів

// const car = {
//   name: 'MB',
//   model: 'gla',
//   maxSpeed: 340
// }

//* не працює
// const car2 = car
// console.log('✌️car --->', car);
// console.log('✌️car2 --->', car2);

// car2.maxSpeed = 200
// console.log('✌️car --->', car);


//! 1 Object.assign()

// const car2 = Object.assign({}, car)

// console.log('✌️car --->', car);
// console.log('✌️car2 --->', car2);

// car2.maxSpeed = 200
// console.log('✌️car --->', car);
// console.log('✌️car2 --->', car2);

//! 2 ...{}

// const car2 = {...car}

// console.log('✌️car --->', car);
// console.log('✌️car2 --->', car2);

// car2.maxSpeed = 200
// console.log('✌️car --->', car);
// console.log('✌️car2 --->', car2);

//! мінуси ціх 2 варянтів
// const car = {
//   name: 'MB',
//   model: 'gla',
//   maxSpeed: {
//     km: 400,
//     ml:250,
//   },
//   engine: [1,2,3]
// }

//! 1 Object.assign() ---------------
// const car2 = Object.assign({}, car)

// console.log('✌️car --->', car);
// console.log('✌️car2 --->', car2);

// car2.model = 'w211'
// car.maxSpeed.km
// car2.maxSpeed.km = 200
// car2.engine.push('444')
// console.log('✌️car --->', car);
// console.log('✌️car2 ---up>', car2);



//! 2 ...{} --------------------

// const car2 = {...car}

// car2.model = 'w211'

// car2.maxSpeed.km = 200
// car2.engine.push('444')

// console.log('✌️car --->', car);
// console.log('✌️car2 ---up>', car2);

//! глибоке копіювання 

// const car = {
//   name: 'MB',
//   model: 'gla',
//   maxSpeed: {
//     km: 400,
//     ml:250,
//   },
//   engine: [1,2,3],
//   fn: function (){console.log('this is function');},
//   productionYear: new Date()
// }

// const newCarJson = JSON.stringify(car)//string
// console.log('✌️newCarJson --->', newCarJson);
// console.log('✌️newCarJson --->',typeof newCarJson);

// const newCar = JSON.parse(newCarJson)//{}
// console.log('✌️newCar --->', newCar);

//* скорочена запис
// const newCar = JSON.parse(JSON.stringify(car))

// newCar.maxSpeed.km = 500
// newCar.engine.push('444')
// console.log('✌️car --->', car);
// console.log('✌️newCar --->', newCar);


// ! обмеження JSON.parse(JSON.stringify(car))

// car.fn()

// newCar.fn()//error
// newCar.productionYear().getFullYear()
// console.log(newCar);
// console.log(car.productionYear.getTime());


//! srtucturedColone()

// const car = {
//   name: 'MB',
//   model: 'gla',
//   maxSpeed: {
//     km: 400,
//     ml:250,
//   },
//   engine: [1,2,3],
//   // fn: function(){},
//   productionYear: new Date()
// }

// const newCar = structuredClone(car)
// newCar.maxSpeed.km = 1000
// console.log('✌️newCar --->', newCar);
// console.log('✌️car --->', car);

// console.log(car.productionYear.getTime());
// console.log(newCar.productionYear.getTime());


//? МЕТОДИ Object()

//! Object.keys() => масив ключів обєкта [key,key,key]
 
// const car = {
//   name: 'MB',
//   model: 'gla',
//   maxSpeed: 250
// }
// console.log('✌️car --->', car);

// const objKey = Object.keys(car)
// console.log('✌️objKey --->', objKey);

//! Object.values() => масив значень обєкта [val,val,val]

// const objValues = Object.values(car)
// console.log('✌️objValues --->', objValues);

// //! Object.entries() => масив масивів з ключами і значеннями


// const objEntries = Object.entries(car)
// console.log('✌️objEntries --->', objEntries);

// //! Object.defineProperty()

// const objProperty = Object.defineProperty(car, 'clearance',{
//   value: 35,
//   enumerable: false
// })
// console.log('✌️objProperty --->', objProperty);
// console.log('✌️objProperty --->', objProperty.clearance);


