// Event handling --

// event handler -->  event handlers are basically functions that you bind using specific methods to certain events that happen in the browser. 
// Now those events might be triggered by just a lifecycle. Meaning something like the page loaded. That's an event. Or it could be triggered by user interaction,like a user typed a character or user clipped something. So one of the most simplest ways to assign an event handler to a particular element is to just use the "onSomething=someFunc()"  attribute on that element.like onClick = sayHello() on button eleement
// there are multiple onSomething event handler 

// just google or go index.html and just type "on" in any element you will see many event handles like onPress,onBlur etc.

// NOTE --> 
//1. So placing an onclick or onblur or onsome event straight on the HTML is one option. 
// the problem with that is you kind of have to dirty up your HTML with these onclick, onblur, onkeydown and so on on these events.and typically and as we've been speaking about it before, HTML is really just for content it's not really there for behavior.

// 2. other way to do the same thing by binding this function sayHello() to click event. is called unobtrusive event binding
// because because the HTML doesn't really need to know anything about your JavaScript. 
// but in 1st method, html need to know the js code.


// here is one more event that is a life cycle event of the page, that will let us actually assign the events to the elements of the page, once they load, but before anything else loads. Before any images load, before any CSS loads, and so forth. And since we are going to be listening for that event, we no longer need to provide this script at the bottom of the page(see index.html). We can actually cut this script out of here from body tag, and place it very easily in the head tag . And let's save that. And now what we need to do is we need to actually listen for a particular event on the browser lifecycle. And that event is called,"DOMContentLoaded". 

// here "DOMContentLoaded" is the structure of html page that all html elements is loaded first then all css , iamges etc things loaded in that structure. 



//  This function which have event argument will get executed when this Event fires called, dom content loaded andthat will happen before any images, or any CSS, or any other script is loaded.    
document.addEventListener("DOMContentLoaded",
  function (event) { 
    function sayHello (event) {
        // here "this" points to the button element not the window object 
      console.log(this);

    //   since this point to button eleement we can change the button text "say it" easily using this
      this.textContent = "Said it!";
      var name = document.getElementById("name").value;
      var message = "<h2>Hello " + name + "!</h2>";

      document.getElementById("content").innerHTML = message;

      if (name === "student") {
        var title =  document.querySelector("#title").textContent;
        title += " & Lovin' it!";
        document.querySelector("h1").textContent = title;
      }
    }

    // Unobtrusive event binding
    document.querySelector("button").addEventListener("click", sayHello);
    // here the value of sayHello() is set that is whole function is placed here after "click" , here we 1st select the button elemetn then we pass the sayHello fucntion to the addEventListener() function and say "when we click on the button the please pass sayHello() function to addEventlistener() and in that sayHello funciton "this" point to button eleement because we call the addevenetlistener() function on the button element and pass sayHello to that button"


    // but if we use onClick=sayHello() in index.html so then "this" points to the global window obect becasuse sayHello() in script.js is defined in global scope.
 
  }
);



// document.querySelector("button").onclick = sayHello;
// again here "this" points to button object because we set the onClick on button and pass value of sayHello that button

