// Object creation -- different ways to create
var company = new Object();
company.name = "Facebook";
console.log(company);   // --> Object {name:"facebook"}
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";

console.log(company);
console.log("Company CEO name is: " 
  + company.ceo.firstName);


// another way to create key/val pair of js objects using bracket notation 
console.log(company["name"]);
// why two notations ?
// // ans --> reason I can't always use the dot notation, is because the dot notation will only work with whatever is a valid JavaScript identifier, or valid JavaScript, either function name, or valid JavaScript variable name.

// company.stock = 110;  //valid
// company.stcok of company = 110;  //invalid
// company."stoc of cmpany" = 100;  // invalid so thats why we need to use the bracket notation sometimes
// company["stock of company"] =110;  //valid


var stockPropName = "stock of company";
company[stockPropName] = 110;

console.log("Stock price is: " + 
  company[stockPropName]);

// Better way: to create object literal
var facebook = {
  name: "Facebook",
  ceo: {
    firstName: "Mark",
    favColor: "blue"
  },
  "stock of company": 110
};

console.log(facebook.ceo.firstName);

// there is no difference between the object creation in above way and 1st way