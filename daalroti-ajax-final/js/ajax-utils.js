// we use IIFE
(function (global){

// Set up a fake namespace for our utility by setting empty object.
var ajaxUtils = {};


// Returns an HTTP request object created by XMLHttpRequest function--> The XMLHttpRequest(xhr) object can be used to exchange data with a server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.
function getRequestObject() {
    // global.XMLHttpRequest is a function so we check if it is the property of window object or not and if it is, please create new request object.and this current version of this http object.
  if (global.XMLHttpRequest) {
    return (new XMLHttpRequest());
  } 
 
//  this "else if" is for old IE browser or you can remove it altogeher------------
  else if (global.ActiveXObject) {
    // For very old IE browsers (optional)
    return (new ActiveXObject("Microsoft.XMLHTTP"));
  }
// -----------------------------------------------------------------  

  else {
    global.alert("Ajax is not supported!");
    return(null); 
  }
}
// - in this file we did not attach getRequestObject() function to ajaxutils because when we expose the ajaxutils outised the iife that is expose ajaxutils to window object then this function is not directly avalabale to the user thats why we did not attach this function to ajaxutils object.

// the above function is called from our main fucntion below so we spearete out the above function for readibility.


// Makes an Ajax GET request to 'requestUrl'

// here we make new property "sendGetRequest" of ajaxUtils object.and assign its value a function so ajaxUtils looks like this ajaxUtils = {sendHGetRequest:function()} and this function takes 2 parametrs and this main function is attach to ajaxutils  



// params -- requestUrl -- url to whcih we send get request like in ajax cwe we send request to fake json typoicode website.
// we'll need a response handler function. So after the server response, the response handler function is what is going to handle the result of what the server returns.

ajaxUtils.sendGetRequest = function(requestUrl, responseHandler,isJsonResponse) {
    var request = getRequestObject();
    // once we get the XMLHTTP request object (created by above getRequestObject() fucntion) we store in "request" variable.and that xhr object has property called "onreadystatechange" and we assign a function to that property.
    request.onreadystatechange = function() { 
        handleResponse(request, responseHandler, isJsonResponse); 
      // So we want to pre-process our response in instead of having to process JSON.parse() everytime inside of our custom script. 
      };
    request.open("GET", requestUrl, true);
    request.send(null); // for POST only   why we pass null read below
  };

  // Only calls user provided 'responseHandler'
// function if response is ready
// and not an error
function handleResponse(request, responseHandler,isJsonResponse) {
if ((request.readyState == 4) && (request.status == 200)) {
   // Default to isJsonResponse = true

  //  if noone passing the value true or false in sendgetrequest() the ijosnresonse value is undefined and using this if it become true.
   if (isJsonResponse == undefined) {
    isJsonResponse = true;
  }

  if (isJsonResponse) {
    responseHandler(JSON.parse(request.responseText));
  }
  else {
    responseHandler(request.responseText);
  }
}
}
// what is responseHandler() function.
// response handler function that our client david bisrto, meaning our user whoever is using this whole library, this whole ajaxUtil library, is providing for us. So we're kind of doing some, kind of nitty gritty work that they wouldn't have to do anymore. means 


// responseHandler() is not a built in function but responseHandler is a parameter of function handleResponse. It just happens to be a function definition.see script.js code in calling of sendGetRequest() function. where we pass the function
// source (https://www.coursera.org/learn/html-css-javascript-for-web-developers/discussions/weeks/5/threads/9cqrJvA9Eeamuwo9wEiniA)


// Expose utility to the global object
global.$ajaxUtils = ajaxUtils;
// here we just change the name of the property we create in window object "$ajaxutils" and it could be any name.

})(window);

// here we pass the global window object that is copied into "global" parameter above.


// The reason we're passing a "null" in send() is because if this were a POST request our request parameters would not be part of the request URL, as you remember from a previous lecture but it would actually be part of the message body of the request. And this is where you put the body of the request in send(). So if you wanted to have named value pairs for the request parameters, you would put that string right here, or probably save it in an object and then pass that object or string to send() funtion.


// now write your ajaxutils.js 