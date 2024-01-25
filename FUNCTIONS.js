
const multiply = function(a,b){
    return a*b;
}
//invocation
let product = multiply(2,3);
console.log(`The product is: ${product}`);
//arrow function
const subtract = (a,b) => a - b;
//Invocation
const difference = subtract(8,3);
console.log('Arrow function - Difference:',difference); 

//error handling
try{
    //code that may throw
}