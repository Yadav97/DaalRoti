// see this slides (https://shorturl.at/fuxKU)

var message = "in global";
console.log("global: message = " + message);
// o/p --> global: message = in global

var a = function () {
  var message = "inside a";
  console.log("a: message = " + message);

  function b () {
    console.log("b: message = " + message); 
  }
//   now b is defined inside function a, which means b's outer reference is function a variable scope. 

  b();
}

// function b () {
//     console.log("b: message = " + message); 
//   }
// o/p --> b:message = in global because the the outer scope of function b is the global scope.

a();
// 