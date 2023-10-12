// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button").addEventListener("click", function () {
        
        // Call server to get the name

        // we're getting as part of our response handler is not any longer a request, it's actually the response JSON text that was converted into an object. So this R-E-S, res, response is actually a JavaScript object.
        $ajaxUtils.sendGetRequest("data/name.json",  function (res) {
              var message =  res.firstname + " " + res.lastname
              if (res.likesIndianFood) {
                message += " likes Indian food";
              }
              else {
                message += " doesn't like Indian food";
              }
              message += " and uses ";
              message += res.numberOfDisplays + 1;
              message += " displays for coding.";

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });  //here we pass true or false as third argument of this  sendGetRequest function.
      });
  }
);