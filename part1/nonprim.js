// const username = {
//   firstname: "hitesh",
//   isLoggedin: true,
// };
// console.log(username);
// console.log(username.firstname);
// username.firstname = "Mr.H";
// console.log(username.firstname);
// console.log(username["isLoggedin"]);
// console.log(typeof username);
// let today = new Date();
// console.log(today.get());
// let isValue = true;
// console.log(isValue + 1);
// let citiyvis = ["mumbai", "delhi"];
// citiyvis.push("berlin");//adds obj at end
// console.log(citiyvis);
// let teaorder = ["chai", "iced tea"];
// teaorder.pop();
// console.log(teaorder);
let topcities = ["berlin", "singapore", "new york"];
let hardcopycity = [...topcities];
topcities.pop();
console.log([...hardcopycity]);
