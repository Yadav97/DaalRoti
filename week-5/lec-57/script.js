// Event handling
// this below function is executed when all dom content is loaded before any css,images etc.
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button").addEventListener("click", function () {
        // var self = this;
        // var name = ""

        // Call server to get the name
    $ajaxUtils.sendGetRequest("data/name.txt", function (request) {
            // var self.name = request.responseText;

              var name = request.responseText;

              document.querySelector("#content").innerHTML = "<h2>Hello " + name + "!</h2>";
            });
            // now this funciton is a responseHandler function.

            // document.querySelector("#content").innerHTML = "<h2>Hello " + self.name + "!</h2>";
        
      });
  }
);

// why we put  document.querySelector("#content").innerHTML = "<h2>Hello " + name + "!</h2>"; inside the responseHandler() function instead of placing it ouside the sendgetrequest() function ?
// ans -->if we put  document.querySelector("#content").innerHTML = "<h2>Hello " + name + "!</h2>"; outside  $ajaxUtils.sendGetRequest() then this function sendGetrequest()runs async so it is not waited for response and turant hi yeh isko  document.querySelector("#content").innerHTML = "<h2>Hello " + name + "!</h2>"; execute karta and so due to this "name" variable empty hota tahts why we put inside sengetRequest() function. then we dont need self, name global vars 