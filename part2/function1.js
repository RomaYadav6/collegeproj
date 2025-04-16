/*function makeTea(typeofTea) {
  return `Making ${typeofTea}`;
}
let teaOrder = makeTea("lemon tea");
console.log(teaOrder);*/
/*const calculatetotal = (price, quantity) => {
  return price * quantity;
};
let totalcost = calculatetotal(499, 100);*/

function makeTea(typeoftea) {
  return `maketea:${typeoftea}`;
}
function processTeaOrder(teafunction) {
  return teafunction("earl grey");
}
let order = processTeaOrder(makeTea);
console.log(order);
function makeTea(typeoftea) {
  return `make tea: ${typeoftea}`;
}

function processTeaOrder(teafunction) {
  return teafunction("earl grey");
}

let oder = processTeaOrder(makeTea);
console.log(oder); // Output: "make tea: earl grey"

// function createteamaker() {
//   return function (teatype) {
//     return `making ${teatype}`;
//   };
// }

// let teamaker = createteamaker();
// let result = teamaker("green tea");
// console.log(result);
