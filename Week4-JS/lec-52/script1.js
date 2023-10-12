// var name = "krishna";
// function sayHello()
// {
// console.log("hello, " + name);
// }

(function(window){
var krishnaGreeter = {};
krishnaGreeter.name = "krishna"
krishnaGreeter.sayHello = function ()
{
console.log("hello, " + krishnaGreeter.name);
}

window.krishnaGreeternew = krishnaGreeter;

})(window);