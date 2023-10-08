// Packt == true
console.log("packt" ? true : false);
// outputs true
console.log("packt" == true);
// 1 - converts boolean using toNumber
// 'packt' == 1
// 2 = converts string using toNumber
// NaN == 1
// outputs false

console.log([0] == true);
// 1 - converts boolean using toNumber
// [0] == 1
// 2 - converts object using toPrimitive
// 2.1 - [0].valueOf() is not primitive
// 2.2 - [0].toString is 0
// 0 == 1
// outputs false

console.log("packt" === true); // false
console.log("packt" === "packt"); // true

let person1 = { name: "John" };
let person2 = { name: "John" };
console.log(person1 === person2); // false, different objects
