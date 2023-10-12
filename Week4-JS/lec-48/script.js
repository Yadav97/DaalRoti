// this keyword
function test(){
  console.log(this);

  console.log("heello coursera");
}
test(); // heello cousera

// here "this" pointing to the global window  object --> That's the object that has all of these parameters, all of these properties(see console). And in fact, if I actually set a property on this object called "Window", say, this.myName, give it "Yaakov". So if I save that and if I output this again. I could say this or window.myName, and I could log that out, console.log(window.myName). And it will say Yaakov, because what I did here is, since this is pointing to the global object, myName property was created on the window object.


// --------------------------------------------------------------------
// Function constructors --> if we actually wanted to kind of encapsulate some data within a particular object and use a function for it, then we would need "this" to point to something else. And this is where "function constructors" come in. and functions construtors does not return anything cause it just initialize the object. and store it in new variable.


// Note --> capitalize function name represent the constructors instead of regular fucntions so here Circle() is a "constructor". but it is not compulsory.


function Circle(radius) {
  console.log(this);   //Circle {  }

  this.radius = radius;
  this.circleName = "Hello"
  console.log(this)
}

var myCircle = new Circle(10);
console.log(myCircle);  // Circle { }

// here "this" is pointing to the object created by Circle() constructor so here "this" and myCircle var point to same object see in console so we use this for creating new properties(name/val) in this circle object . see below

function Circle(radius) {
//  console.log(this);   //Circle {  }

  this.radius = radius;
  this.circleName = "Hello"
  console.log(this)  // Circle {radius:10,circelName:"Hello"}
}

var myCircle = new Circle(10);
console.log(myCircle);  //Object {radius:10,circelName:"Hello"}


// ---------------------------------------------------------
// methods --> methods in JavaScript are just functions that are set on objects.
function Circle(radius) {
  //  console.log(this);   //Object {  }
  
    this.radius = radius;
    this.circleName = "Hello"
    this.getArea = function(){
      // area of circle = pi*r^2;
      return Math.PI * Math.pow(this.radius,2);
    console.log(this); //  Object {radius:10,circleName:"Hello",getArea:getArea()}  

    }
  }
  
var myCircle = new Circle(10);
console.log(myCircle.getArea()) // 314.15.........
console.log(myCircle) // Circle {radius:10,circleName:"Hello",getArea:getArea()}  
// --------------------------------------------------------------------------

// The problem is, as we keep creating these Circle objects over and over in our code, we're going to keep creating this getArea() function over and over in our code. Because every time we say "new", this entire thing(code inside the constructor) gets created. Well, for radius, it's perfectly normal, because each circle should have its own radius. We really don't need our Objevt Circle to have its own getArea() on every object that's created we dont need getArea() for every object we created. It really should be just created once, and all the circles, all the instances of a Circle, should share it. we could do that using special property called  "Prototype".

// prototype -->

function Circle(radius) {
  //  console.log(this);   //Object {  }
  
    this.radius = radius;
    this.circleName = "Hello"
  
  }
  
Circle.prototype.getArea = function () {
      return Math.PI * Math.pow(this.radius, 2);
    };
    

var myCircle = new Circle(10);
console.log(myCircle); 
//Object { radius: 10, circleName: "Hello" }
// ​circleName: "Hello"
// ​radius: 10
// ​<prototype>: Object { getArea: getArea(), … }

// this prototype is sitting on every object we created.

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);
//Object { radius: 20, circleName: "Hello" }
// ​circleName: "Hello"
// ​radius: 20
// ​<prototype>: Object { getArea: getArea(), … }

// here both objects  are pointing to the same <prototype> variable that have a getArea, and this getArea is actually the same location in memory as this getArea. It's the same thing. So it doesn't get recreated over and over

// NOTES --> Circle.prototype.getArea is not something you should cut and put inside this function. You could certainly do that, but that would be a mistake. And the reason that would be a mistake is because this function is going to get executed every single time you create a new Circle. Well, every single time, you don't need to define a prototype. In other words, what you'll be doing is you'll be overriding the memory space of getArea every single time you're creating a Circle. So basically, that's wasted processing. It's not really wasted memory space, since it's going to put in the same memory space this function over and over again, but it's wasted processing. So you really should not be putting that inside of a function constructor. 

// 2. var myCircle = Circle(10) represent the regular function and this circle() function returs some vale we stored in var myCircle so dont forget to use "new"





  