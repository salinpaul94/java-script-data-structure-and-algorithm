function sayHello() {
  console.log("Hello!");
}

sayHello();

// Function with parameters
function output(text) {
  console.log(text);
}

output("Hello");

output("Hello!", "Other Text");

output();

// function using the return statement
function sum(num1, num2) {
  return num1 + num2;
}

let result = sum(1, 2);
output(result);
