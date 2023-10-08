function testTruthy(val) {
  return val ? console.log("truthy") : console.log("falsy");
}

testTruthy(true); // true
testTruthy(false); // false
testTruthy(new Boolean(false)); // true (object is always true)

testTruthy(""); // false
testTruthy("a"); // true
testTruthy("Packt"); // true
testTruthy(new String("")); // true (object is always true)

testTruthy({}); // true (object is always true)

var obj = { name: "John" };
testTruthy(obj); // true
testTruthy(obj.name); // true
testTruthy(obj.age); // age (property does not exist)
