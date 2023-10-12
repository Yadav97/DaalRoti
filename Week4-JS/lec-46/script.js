// Functions are First-Class Data Types -- means is, is that whatever you could do with the variable, whatever you could do with an object you could also do with the function. You could pass that around, assign it to a variable which as you've seen before, you could pass it as an argument to another function, you could return it as a return result from a function. 
// Functions ARE objects --> They're regular objects that have some special properties to them. So since they're regular objects, I should be able to set properties on them just like I set properties on the other object.   see example version


function multiply(x, y) {
    return x * y;
  }
// console.log(multiply(10,10));  --> 100
  multiply.version = "v.1.0.0";

  console.log(multiply);   //function multiply(x, y)
//   see in browser for details 
  console.log(multiply.version);
  
//   So our function is nothing more than an object. Now the fact that it's an object allow us to do quite a number of interesting things that are so useful in every application. see below applications of this


  //1. Function factory --> factory that creates functions 
  function makeMultiplier(multiplier) {
    var myFunc = function (x) {
      return multiplier * x;
    };
  
    return myFunc;  //it returns the function itself that is myfunc(x) { return multipier * x} basically it returns the refernce to the function itself or return the address of the function 
  }
  
  var multiplyBy3 = makeMultiplier(3);  // it returns myFunc(x){return  3*x }  basically it returns the refernce to the function itself or return the address of the function  and stored in multiplyBy3 it is like that  "var multiplyBy3 = function (x){return 3 * x}"
  console.log(multiplyBy3);  
  console.log(multiplyBy3(10));
  var doubleAll = makeMultiplier(2);
  console.log(doubleAll(100));
  
  
  
  //2. Passing functions as arguments
  function doOperationOn(x, operation) {
    return operation(x);
  }
  
  var result = doOperationOn(5, multiplyBy3);
  console.log(result);
  result = doOperationOn(100, doubleAll);
  console.log(result);