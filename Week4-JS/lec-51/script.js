// closures --> 

//1. makeMultiplier is return a function. 
function makeMultiplier (multiplier) {
    return (
        function (x) {
          return multiplier * x;
        }
  
    );
}
  
// doubleAll doubles everything
var doubleAll = makeMultiplier(2);   //returns the function -- function(x){return 2*x}
console.log(doubleAll(10)); // 20

// 2. how did this work out. The very first time we called makeMultiplier we passed it a value of 2. So now, when we get this portion right here it's really no different than saying "var multiplier = 2" inside the makeMultiplier function. That's really what's going on. So, according to our rules I should be able to use this multiplier inside of an inner function. So, before I even get to the return let's go ahead and create another function called b().

function makeMultiplier (multiplier) {
    // var multiplier = 2;
    function b()
    {
        console.log("Multiplier is " + multiplier);  // Multiplier is 2 
    }
    b();
    return (
        function (x) {
          return multiplier * x;
        }
  
    );
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));  //20   /// its own exec env

// O/P -->
// multiplier is 2 
// 20

// note -->  how does the inner function b() know that the multiplier is 2? 
// ans --> 

// When a function is executed it gets a few things.
// 1. it gets it's own execution context so it's isolated from everything else.
// 2. it gets a special "this" variable.
// 2. it gets a reference to its outer lexical environment. 

// So when a variable is used inside of a function the first thing it does is check whether or not this variable has been defined inside of it's local lexical environment or not, meaning has the multiplier variable been defined inside the B function or not ? And the answer is it's not, it's not defined. And if it's not defined it means the next thing that the JavaScript engine does it looks at the outside lexical environment of this function b(). Well the outside lexical environment of this function b(), meaning where it's defined the outside of b() , that is in the makeMultiplier function. And the makeMultiplier function has that variable, so once it finds it it goes ahead and uses it in the function B that we're executing right here.

// not --> now see the return statement 
// The problem is that our return statement doesn't really create its own execution environment(Aactivatin record), because this is not a function execution. This is just a function value. This is the object, a function that gets returned back to the caller of the makeMultiplier function. 

// so if this is not an execution of the function that means it doesn't get its own this variable. It means it does not get an out of reference. It simply gets returned to the caller. So now, when it gets returned to the caller, so the variable "doubleAll" is now equal to this function, and in the next line will be actually execute doubleAll() and pass it a ten. now then this function is execute and getting it's own execution environment and  it gets its own outer variable environment, and so on. 

//  So how then can it possibly know what the multiplier variable is in return statement? this question is occurs Because at the time that doubleAll() is executing ,the makeMultiplier function is no longer in the execution stack. It's done. It returned whatever we needed to return, and is no longer functioning.


// it still works that is return know the multiplier variable is becuase  of JavaScript closures.

// Since a function like this in return statment 
// return (
//     function (x) {
//       return multiplier * x;
//     }

// returned from inside of this function makeMultiplier(),  JavaScript preserves its outer lexical environment memory space for this function (in return stmt ), so this function can go ahead and produce what it needs to produce.

// So the multiplier is something that's still sitting in memory in lexical outside scope of this function. So even when we call doubleALL it will go ahead and execute this function. It will create its own execution environment. It will go ahead and look for the multiplier variable in its own execution environment. It will not find it and it will then try to look for for multiplier variable in its outer lexical environment, and the outer lexical environment memory space will still remain even though the makeMultiplier function no longer exists. 
