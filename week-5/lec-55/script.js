// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    function sayHello (event) {
      console.log(event);  // click { target: button, buttons: 0, clientX: 327, clientY: 89, layerX: 327, layerY: 89 }
    //   return the what event happens basically return the event object. like above and that object have bunch of props
      this.textContent = "Said it!";
      var name = document.getElementById("name").value;
      var message = "<h2>Hello " + name + "!</h2>";

      document.getElementById("content").innerHTML = message;

      if (name === "student") {
        var title = document.querySelector("#title").textContent;
        title += " & Lovin' it!";
        document.querySelector("h1").textContent = title;
      }
    }

    // Unobtrusive event binding
    document.querySelector("button").addEventListener("click", sayHello);

    document.querySelector("body").addEventListener("mousemove",function (event) {
        // this event stores the mousemove event.
        // console.log(event.clientX);
        // console.log(evenet.clientY);

          if (event.shiftKey === true) {
            console.log("your mouse pointer is")
            alert("your mouse is moved see console for accurate coordinates")
            console.log("x: " + event.clientX);
            console.log("y: " + event.clientY);
            // go on event api documentation and see event called mousemove and click on that where you will see client x ad clirnty
            // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
        
          }
        }
      );

  }
);



// document.querySelector("button")
//   .onclick = sayHello;



// what is evenet?
// https://developer.mozilla.org/en-US/docs/Web/API/Event

// and this "event" object pass to every event handler .and it stored the what event happens in the browser or by user.
