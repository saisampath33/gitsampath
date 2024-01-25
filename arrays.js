// Defining an array
let fruits = ["apple", "banana", "orange", "grape"];
//              ^          ^        ^          ^
//index -       0          1        3          4

// Acessing elements from array ( array[index] )
console.log(fruits[0])

// Adding elements to an existing array at the end ( it is a destructive method )
fruits.push("kiwi");
console.log(fruits);

// Adding elements to an existing array at the front ( it is a destructive method )
fruits.unshift("mango");
console.log(fruits);

// Removing elements from an existing array at the end ( it is a destructive method )
fruits.pop();
console.log(fruits);

// Removing elements from an existing array at the front ( it is a destructive method )
fruits.shift(``);
console.log(fruits);

console.log(fruits.indexOf("apple"));

// Reverse an array ( it is a destructive method )
fruits.reverse();
console.log(fruits);

// Looping over an array using foreach
fruits.forEach(e => {
    console.log(e);
})
// splicing an array(modifying orginal array)
let removed = fruits.splice(1,2,"pear","melon");
//concanetating arrays


const multiply = function(a,b){
    return a*b;
}
//invocation
let product = mul(2,3);
console.log(`The product is: ${product}`);
//arrow function
const subtract = (a,b) => a - b;
//Invocation
const difference = subtract(8,3);
console.log('Arrow function - Difference:',difference);