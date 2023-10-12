// Default values

function orderChickenWith(sideDish) {
    console.log("Chicken with " + sideDish);
  }
  
orderChickenWith("noodles");
// O/P --> chicken with noodles 

orderChickenWith();
// O/P --> chicken with undefined
  
// and we dont want that if user is not pass an argument is ouput become undefined so we use some default value when we did not pass any argument ti above function.


function orderChickenWith(sideDish) {
    if(sideDish == undefined)
    {
        sideDish = "whatever"
    }
    console.log("Chicken with " + sideDish);
  }
  
orderChickenWith("noodles");
// chicken with noodles

orderChickenWith();
// chicken with whatever  -> cause sidedish is undefined and if condition is true

// shortcut below of above logic of "if"


function orderChickenWith(sideDish) {
    sideDish = sideDish || "whatever!";
    console.log("Chicken with " + sideDish);
  }
  
  orderChickenWith("noodles");
//   chicken with noodles 
  orderChickenWith();
//   chicken with whatever