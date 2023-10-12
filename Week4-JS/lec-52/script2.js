// var name = "yadav";
// function sayHi()
// {
// console.log("Hi, " + name);
// }


(function(window){
var yadavGreeter = {};
yadavGreeter.name = "yadav";

yadavGreeter.sayHi  = function (){
    console.log("Hi, " + yadavGreeter.name);
    }
    window.yadavGreeternew = yadavGreeter;


})(window);


