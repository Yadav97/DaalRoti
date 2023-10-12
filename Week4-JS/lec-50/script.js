// Arrays --> heterogenous collection of items

// ways to create arrays in jss
// 1. 
var array = new Array();
array[0] = "Yaakov";
array[1] = 2;
array[2] = function (name) {
  console.log("Hello " + name);
};
array[3] = {course: " HTML, CSS & JS"};

console.log(array); 
// Array(4) [ "Yaakov", 2, 2(name), {…} ]
// ​0: "Yaakov"
// ​
// 1: 2
// ​
// 2: function 2(name)  name of the funciton = index
// ​
// 3: Object { course: " HTML, CSS & JS" }
// ​
// length: 4


array[2](array[0]);   // hello yaakov
array[2]();  // hello undefined
array[2]("krishna");  // hello krishna
console.log(array[3].course);


//2.  Short hand array creation

var names = ["Yaakov", "John", "Joe"];
console.log(names);

// here length is property that js is set for every array and it is not the function.



// 3. Normal for loop
for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}

names[100] = "world";
for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}
// O/P --> 
// hello Yaakov
// hello john 
// hello joe
// hello undefined 97    (97 times names array is undefined from 3 to 98 )
// hello world




// 4. another for loop 
var names2 = ["Yaakov", "John", "Joe"];

var myObj = {
  name: "Yaakov",
  course: "HTML/CSS/JS",
  platform: "Coursera"
};
for (var prop in myObj) {
  console.log(prop + ": " + myObj[prop]);
//or we use dot notation   console.log(prop + ": " + myObj.prop);


}

// and we know that arrays in js are also object and indices are the properties of that object so we use this for loop also to traverse the array.
for (var name in names2) {
  console.log("Hello " + names2[name]);
}

names2.greeting = "Hi!";

for (var name in names2) {
  console.log("Hello " + names2[name]);
}

// O/P 
// hello Yaakov
// hello john 
// hello joe
// hello Hi because as we know the indices of arrays are the property of array object so we create another property called "greeting" instead of index and assign the value is "hi". because the greeting became a property of the array no different than a index zero, or number two, or number one, and so on. Greeting becomes a property of the array, and this for loop loops over the property names of the object. And since again, arrays are just objects in JavaScript, this for loop will loop over properties, even over properties that really have nothing to do with the core data that we want to loop over. 