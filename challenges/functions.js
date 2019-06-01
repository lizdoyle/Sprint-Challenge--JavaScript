// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

// #1 complete
// 2 arguments, x and y, callback is cb
function consume(x, y, cb) {

  // returns cb(callback), and both params
  return cb(x, y);

}



/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
const add =  (x, y) => {
  return x + y;
};


const multiply =  (x, y) => {
  return x * y;
};



const greeting = (x, y) => {
    return `Hello, ${x} ${y}, nice to meet you!`
}

console.log(consume(2,2,add));
console.log(consume(10,16,multiply));
console.log(consume("Mary","Poppins", greeting))

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: because the iternal function looks outside of it to access the variable, based on it's "nested" access to the scope of the external function. A function 10,000 levels deep will have access to elements on level 1.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();