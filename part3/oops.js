/*let car = {
  make: "toyota",
  model: "camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
console.log(car.start());*/
/*function Person(name, age) {
  this.name = name;
  this.age = age;
}
let john = new Person("john", 20);
console.log(john.name);*/
/*function Animal(type) {
  this.type = type;
}
Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};
Array.prototype.hitesh = function () {
  return `Custom method ${this}`;
};
let myarray = [1, 2, 3];

console.log(myarray.hitesh());
console.log(myarray);*/
/*class vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}
class car extends vehicle {
  drive() {
    return `${this.make}:this is an inheritance example`;
  }
}
let mycar = new car("toyota", "corolla");
console.log(mycar.start());
console.log(mycar.drive());*/
// class bankacct {
//   #balance = 0;
//   deposit(amount) {
//     this.#balance += amount;
//     return this.#balance;
//   }
//   getbalance() {
//     return `$ ${this.#balance}`;
//   }
// }
// let account = new bankacct();
// console.log(account.getbalance());
/*class coffeemachine {
  start() {
    return `starting the machine...`;
  }
  brewcoffee() {
    return `brewing coffee`;
  }
  pressstartbutton() {
    let msgone = this.start();
    let msgtwo = this.brewcoffee();
    return `${msgone}${msgtwo}`;
  }
}
let mymachine = new coffeemachine();
// console.log(mymachine.start());
// console.log(mymachine.brewcoffee());
console.log(mymachine.pressstartbutton());
*/
/*class calculator {
  static add(a, b) {
    return a + b;
  }
}
console.log(calculator.add(2, 3));
*/
class employ {
  #sal;
  constructor(name, sal) {
    this.name = name;
    this.sal = sal;
  }
  get salary() {
    return `yiu are not aalowed to see salary`;
  }
  set salary(value) {
    if (value < 0) {
      console.error("invalid salary");
    } else {
      this.sal = value;
    }
  }
}
let emp = new employ("krishna", -50000);
console.log(emp.salary);
emp.salary = 4000;
