let num = 1; // {1}
num = 3; // {3} reinitialize num

let price = 1.5;
let myName = "Salipaul";
let trueValue = true;
let nullVar = null;
let und;

console.log("num: " + num);
console.log("myName: " + myName);
console.log("trueValue: " + trueValue);
console.log("price: " + price);
console.log("nullVar: " + nullVar);
console.log("und: " + und); // Undefined

let myVariable = "global";
let myOtherVariable = "global";

function myFunction() {
  let myVariable = "local";
  return myVariable;
}

function myOtherFunction() {
  let myOtherVariable = "local";
  return myOtherVariable;
}

console.log(myVariable);
console.log(myFunction());

console.log(myOtherVariable);
console.log(myOtherFunction());
console.log(myOtherVariable);
