// Object literals and "this"
// So when an object literal(object using {}) gets created, this, instead of pointing to sthe global object, is actually pointing to the actual object that got created. 

// 1.

var literalCircle = {
    radius: 10,
    getArea:function (){
        console.log(this);  // Object literalCircle {radius:10,getArea:getArea()}
    }
};
literalCircle.getArea();
// here this referes to the object lieteral called literalCircle we created.


// 2.since this refers to the object iteral we can use this to create new properties in object literal and get the valuue from properties also

var literalCircle = {
    radius: 10,
    getArea:function (){
        console.log(this);  // Object literalCircle {radius:10,getArea:getArea()}
        return Math.PI * Math.pow(this.radius, 2);
    }
};
console.log(literalCircle.getArea()); // 314.15..........

// 3.   Why is it that this is working? Why is this keyword referring to the object instead of referring like any other regular function to the global object like window? 
// answerr --> because we know that the 
// var literalCircle = {}; == var literalCircle = new Object(); 

// So when this happens var litearlCircle = {}; , new Object()  is actually what's executed in the background. Well, you see that new keyword again. And when we see the new keyword, the this variable inside of that object is now referring to the actual object and not to the outside window or outside global object. So this in fact works exactly like function constructors in terms of the new keyword.

var literalCircle = {
    radius: 10,
  
    getArea: function () {
      
      console.log(this);
  
      var increaseRadius = function () {
        this.radius = 20;
      };
      increaseRadius();
      console.log(this.radius);  //10
  
      return Math.PI * Math.pow(this.radius, 2);
    }
  };

console.log(literalCircle.getArea());  // 314.15

// 4. problem with this  --> when we use "this" inside function called increaseRadius and this function is also defined in other functin called getArea() and this function is defined in object then "this" keyword inside the increaseRadius referes to global window object but not refere to the actual object litreralCircle.


var literalCircle = {
    radius: 10,
    getArea: function () {
      console.log(this);  //Object { radius: 10, getArea: getArea() }
      var increaseRadius = function () {
        console.log(this);  //Window about:newtab
      };
      increaseRadius();
      return Math.PI * Math.pow(this.radius, 2);
    }
  };
  
  console.log(literalCircle.getArea());

//   here inside getArea(), we create another function called increaseRadius().And I don't really need an argument here either. And inside the body of the function, I am going to go ahead and increase the radius to 20. So I'll say "this.radius = 20". So now when this method executes right here or this line executes right here, this radius should now be 20. So it shouldn't be 314, it should be a much larger area of the circle. because the radius is changed from 10 to 20 so area is 1256.63 now.

// but again it gives 314 because this.radius is set value 20 to window object so if we do this window.radius --> 20

// how to solve this situation so that this refers to object literal and not the window object.?
// ans see below 

var literalCircle = {
    radius: 10,
  
    getArea: function () {
      var self = this;
    //   now this refers to literalCircle object and so self var.
      console.log(this);   //object {radius:10,getArea:getArea()}
  
      var increaseRadius = function () {
        self.radius = 20;
      };
      increaseRadius();
      console.log(this.radius); // 20 not 10 cause we asiin radius is 20 
  
      return Math.PI * Math.pow(this.radius, 2);   
    }
  };

  console.log(literalCircle.getArea()) ;  // 1256.63

