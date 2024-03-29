// String
let string = "hello";

// Number
let num = 5;

// BOOL
let bool = true;

// undefined
var undef;
console.log(undef);

// NULL
let nullnum = null;

// Object
let  person = {
    name : "Alice",
    age : 30,
    isStudent : false
} 
// to access from objects
console.log(`${person.name} is ${person.age} years old`);
console.log(person.name + " is " + person.age + " years old");

// Array
let arr = [1, "banana", "orange"]
//         0      1         2
console.log(arr[1]);

// Function
function add(a, b){
    return a + b;
}
let a = add(2, 3);
console.log(a);

// TypeOf Operator
console.log(typeof(arr))

// Type Cohesion
console.log(5 + "5");
console.log(5 - "5");

// Logical Opeerators
console.log(true && false);
console.log(true || false);
console.log(!true);

// Assignment Operators
let n = 5;
console.log(n);
n += 1; // n = 6
console.log(n);
n -= 1; // n = 5
console.log(n);
n *= 2; // n = 10
console.log(n);
n /= 5; // n = 2
console.log(n);5
