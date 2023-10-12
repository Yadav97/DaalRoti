// ***** String concatination
var string = "Hello";
// string += " World";
string = string + " World";
console.log(string + "!");




// ***** Regular math operators: +, -, *, /
console.log((5 + 4) / 3);
console.log(undefined / 5);
// o/p --> NaN (not a number)

function test1 (a) {
  console.log( a / 5);
}
test1();




// ***** Equality 
var x = 4, y = 4;
if (x == y) {
  console.log("x=4 is equal to y=4");
}

x = "4";
if (x == y) {
  console.log("x='4' is equal to y=4");
}





// ***** Strict equality
if (x === y) {
  console.log("Strict: x='4' is equal to y=4");
}
else {
  console
  .log("Strict: x='4' is NOT equal to y=4");
}






// ***** If statement (all false)
if ( false || null || 
     undefined || "" || 0 || NaN) {
  console.log("This line won't ever execute");
}
else {
  console.log ("All false");
}

// ***** If statement (all true)
if (true && "hello" && 1 && -1 && "false") {
  console.log("All true");
}





// ***** Best practice for {} style
// Curly brace on the same or next line...
// Is it just a style?

// funtion a follows the style wher opening curly bracket is on new line
function a() 
{
  return
  { 
    name: "Hello"
  };
//   returning the object 
}
// funtion a follows the style wher opening curly bracket is on same line

function b() {
  return { 
      name: "Hello"
  };
}

console.log(a());   // return the undefined 
console.log(b());   //return  the object Object{name:"Hello"}


// For loop
var sum = 0;
for (var i = 0; i < 10; i++) {
  console.log(i);
  sum = sum + i;
}
console.log("sum of 0 through 9 is: " + sum);