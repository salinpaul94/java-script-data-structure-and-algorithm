function sum(x = 1, y = 2, z = 3) {
  return x + y + z;
}
console.log(sum(4, 2));

// function above is the same as
function sum2(x, y, z) {
  if (x === undefined) x = 1;
  if (y === undefined) y = 1;
  if (z === undefined) z = 3;
  return x + y + z;
}
console.log(sum2(4, 2));

// or
function sum3() {
  let x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  let y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  let z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

  return x + y + z;
}
console.log(sum3(4, 2));

let params = [3, 4, 5];
console.log(sum(...params));
console.log(sum.apply(undefined, params));

let numbers = [1, 2, ...params];
console.log(numbers);

function restParameterFunction(x, y, ...a) {
  return (x + y) * a.length;
}
console.log(restParameterFunction(1, 2, "hello", true, 7));

function restParameterFunction2(x, y) {
  let a = Array.prototype.slice.call(arguments, 2);
  return (x + y) * a.length;
}
console.log(restParameterFunction2(1, 2, "hello", true, 7));
