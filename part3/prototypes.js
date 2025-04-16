// let computer = { cpu: 12 };
// let lenovo = {
//   screen: "HD",
//   __proto__: computer,
// };
// let tomHardware = {};
// console.log(`lenovo`, lenovo.__proto__);
/*let genriccar = { tyres: 4 };
let tesla = {
  driver: "AI",
};
Object.setPrototypeOf(tesla, genriccar);
console.log(`tesla`, tesla);
console.log(`genriccar`, genriccar);
console.log(`tesla`, tesla.tyres);
console.log(`tesla`, Object.getPrototypeOf(tesla));*/
/*
function Car(make, model) {
  this.make = make;
  this.model = model;
}
let myCar = new Car("toyota", "camry");
console.log(myCar);
*/
/*
function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a cup of ${this.type}`;
  };
}
let leamontea = new Tea("lemon tea");
console.log(leamontea.describe());
*/
// function Animal(species) {
//   this.species = species;
// }
// Animal.prototype.sound = function () {
//   return `${this.species} make a sound`;
// };
// let dog = new Animal("dog");
// console.log(dog.sound());
function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with new  keywords");
  }
  this.name = name;
}
let tea = Drink("tea");
