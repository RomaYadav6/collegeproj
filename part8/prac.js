var x = 5;
let obj = {
  x: 10,
  func: (x) => {
    this.x = x;
  },
};
obj.func(20);
console.log(x, "and", obj.x);
