const person = {
  name: "hitesh",
  greet() {
    console.log(`hi,i am ${this.name}`);
  },
};
person.greet();
const freetfunc = person.greet;
freetfunc();
const boundgreet = person.greet({ name: "john" });
boundgreet;
