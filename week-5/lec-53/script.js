// 1.DOM --> this special object is called document. And the document object represents the entire HTML document, the document object model. So we know that there is an object called window, otherwise known as "this", and it contains a whole bunch of things. One of the things it contains is a "document" property. 

// >window
// >window.document --> we get the whole html page as document object -->document object contains the whole html page.and This document object is the stepping stone for us to be able to get at individual elements within our webpage. 


// DOM manipulation - the reason we're able to use document here is because we're in the global scope. And global scope is window. And window has an attribute, has a property called document in it. So when we say document, this will obviously go ahead and look on the window object to see if document is one of its properties. And, in fact, it is. 
// and the name of that  document object is called HTMLDocument t's a special js object that has a whole bunch of different methods that you could call in the document. 



console.log("hellp world")
console.log(document.getElementById("title"));   //-->  null 
// because we incude js in head tag(so it is like we paste this loc in head tag itself) so when you are calling and asking the document to retrieve for you something that has an id title, at this point of the rendering of the HTML page, the h1 with an id title doesn't exist yet. So, therefore, you get null.

// So how do we solve that?
// Well, there's actually a couple of ways of solving it.
// One is to have a special method that listens for an event in the life cycle
// over the page loading, and says, when page is loaded, go ahead and execute this line.
// However, there's even a simpler way to fix that. is put the script tag in body tag at last so that whole page is loaded then js script included. 



console.log(document instanceof HTMLDocument);  // --> true  

// means the document object is  the instance of the js object called HTMLDocument object.

function sayHello () {
    var name = document.getElementById("name").value;
    //  it takes the value we type in the box here value property is only for input tags

    var message = "<h2>Hello " + name + "!</h2>";
  
    document.getElementById("content").textContent = message;  //<h2>Hello krishna !</h2>
    //  textContent is a property for sets or returns the text content of the specified node/Element, and all its descendants.inthis case it sets the mesage in the elemnt whose id is "content"
  
    document.getElementById("content").innerHTML = message;
    // innerHtml property sets or returns the HTML content/code  (inner HTML) of an element.here message variable value is assign to innerHtml as html code and render.
    // ex --> <div id="content"><h1>Hello Krishna !</h1></div> so using this propperty h1 is rendered as html and sets the hello Krishna as heading 2 inside div. 
  
    if (name === "student") {
      var title = document.querySelector("#title").textContent;
        // here we use querySelectir because hum id se select nhi karna chhate balki css selector use karna chahte hai or direct element names to select the element, thats why in order to sleect elements using css sselctors or directly by element name we need to use this method.because getElementById really just restricts you to be able to select things within your page by ID, but you might want to be able to select it by other things. 


      title += " & Lovin' it!";
      document.querySelector("h1").textContent = title;
    //   here it selects the first occurence of h1 eleemnt.so If you wanted a list of elements that matches a particular query selection, you would use a different method,
        // called querySelectorAll()
}
  }