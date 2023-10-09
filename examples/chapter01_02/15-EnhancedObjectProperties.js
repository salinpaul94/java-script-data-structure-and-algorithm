let [x, y] = ["a", "b"];
let obj = { x, y };
console.log(obj);

[x, y] = [y, x];
let temp = x;
x = y;
y = temp;

// code above is the same as
let x2 = "a";
let y2 = "b";
let obj2 = { x2: x2, y2: y2 };
console.log(obj2);

// Method Properties
const hello = {
  name: "abcdef",
  printHello() {
    console.log("Hello");
  },
};
console.log(hello.printHello());

// code above is the same as:
let hello2 = {
  name: "abcdef",
  printHello: function printHello() {
    console.log("Hello");
  },
};
console.log(hello2.printHello());
