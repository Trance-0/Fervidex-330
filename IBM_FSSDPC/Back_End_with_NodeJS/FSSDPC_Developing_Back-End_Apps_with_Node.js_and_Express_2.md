# Developing Back-End Apps with Node.js and Express - Week 2

## Asynchronous I/O with Callback programming

Asynchronous I/O

* Network operations run in an asynchronous manner
* For example, the response from a web service call might not return immediately
* When an application blocks (or waits) for a network operation to complete, that application wastes processing time on the server
* Node.js makes all network operations in a non-blocking manner
* Every network operation returns immediately
* To handle the result from a network call, you can write a callback function that Node.js calls when the network operation completes

Eg. sending an HTTP request

```javascript
var options = {
	host:'w1.weather.gov',
    path:'/xml/current_obs./KSFO.xml'
};

http.request( options,
    // callback function, parameters passed to response
	function(response){
   		var buffer = '';
    	var result = '';
    
    	response.on('data',function(chunk){
            buffer += chunk;
        });
    
    	response.on('end',function(){
            console.log(buffer);
        });
    
    	// if there is an error, the error would also pass
    	response.on('error',function(e){
            resultCallback(e.message);
        });
}).end();
```

## Create Callback Functions

### Propagating errors

* Node.js makes extensive used of callback functions to return the result to the calling function

* Node.js modules pass an error object as the first parameter in a callback function

Eg. calling back with error handling

```javascript
weather.current( location, function(error, temp_f){
	if (error) {
		console.error(error);
		return;
	}
	
	console.log(
		"The current weather reading is %s degress.",
		temp_f
	);
});

// print the value in browser
response.end("... ${temp_f}...")
```

### One callback at each level

If the main application calls a function that call http.request(), two callback functions are involved:

* The custom module has a callback function to handle the HTTP response message from http.request()
* The main application has a callback function that processed the result that is captures in the first callback function

Eg. module with resultCallback.

Main application callback

```javascript
var weather = require('./weather');
var location = 'KSFO';

// the function( temp_f ) is linked to resultCallback in ./weather
weather.current( location, function( temp_f ){
    console.log( temp_f );
};
```

Module callback (module name: weather)

```javascript
exports.current =  function ( location, resultCallback ){
	var options = {
		host:'w1.weather.gov',
    	path:'/xml/current_obs./' + location + '.xml'
	};

	http.request( options,
    	// callback function, parameters passed to response
		function(response){
   			var buffer = '';
    
    	response.on('data',function(chunk){
            buffer += chunk;
        });
    
    	response.on('end',function(){
            parseString(buffer, function (error, result){
                // Node.js modules in the SDK pass an error object as the first parameter in a callback funciton
            	resultCallback(null, result.current_observation.temp_f[0])
            })
        });
}).end();
}
```

## Issues with Callbacks

### Callback functions

* A function passed as an argument to another function

* Used to ensure an action is executed only after a result is produces.
* Help develop asynchronous JavaScript

### "Callback hell"

nested callbacks stacked below one another, forming a pyramid structure.

```javascript
firstFunction(args, function(){
    secondFunction(args, function(){
        thirdFunction(args,function(){
            // and so on...
        });
    });
});
```

### Inversion of control (IoC)

* Execution is external to your code
* Callbacks hand over control to a third-party service
* That code may have errors
* Cause you to write additional code
* Ensure third-party code does not:
  * Get called too many or too few times
  * Get called too early or too late
  * Lose context
  * Pass back incorrect arguments

## Promises

* An object returned by an asynchronous method
* States: pending, resolved, rejected
* Uses: API requests, I/O operations

Axios package can be used to process http requests

```javascript
const axios = require('axios').default;

const connectToURL = (url)=>{
    const req = axios.get(url);
    console.log(req);
    req.then(resp => {
        console.log("Fulfilled")
        console.log(resp.data);
    })
    .catch(err => {
        console.log("Rejected for url "+url)
        console.log(err.toString())
    });
}
//Valid URL
connectToURL('https://raw.githubusercontent.com/ibm-developer-skills-network/lkpho-Cloud-applications-with-Node.js-and-React/master/CD220Labs/async_callback/sampleData.json');
//Invali URL
connectToURL('https://raw.githubusercontent.com/ibm-developer-skills-network/lkpho-Cloud-applications-with-Node.js-and-React/master/CD220Labs/async_callback/sampleDate.json');

```

## JSON

JSON is the standard format for application programming interface (API) data exchange

Because it is the standard representation of native JavaScript objects, Node.js handles JSON easily

Attribute-value pair

Method JSON.parse() parses a JSON string to a JavaScript object

```javascript
var json = '{"result":true, "count":42}';
obj = JSON.parse(json); 
console.log(obj.count);
// expected output: 42
console.log(obj.result);
// expected output: true
```

Method JSON.stringify() converts a JavaScript object to a JSON string

```javascript
console.log(JSON.stringify({ x:5,y: 6));
// expected output: "{"x":5,"y":6}"
```

Eg.

```javascript
const axios = require('axios').default;

const req = axios.get("https://raw.githubusercontent.com/ibm-developer-skills-network/lkpho-Cloud-applications-with-Node.js-and-React/master/CD220Labs/async_callback/courseDetails.json");
console.log(req);
req.then(resp => {
    let courseDetails = resp.data;
    console.log(JSON.stringify(courseDetails,null,4))
})
.catch(err => {
    console.log(err.toString())
    //This will console log the error withe the code. eg. Error: Request failed with status code 404
});

```



## Module Summary

Congratulations! You have completed this module. At this point in the course, you know:

- Asynchronous network operations can be handled using callback functions in order to prevent blocking JavaScript code 
- A callback function must invoke another callback function to pass a message from the Node.js module back to the main application after the Node.js module receives a response message 
- Nested callbacks can be difficult to read and debug. Inversion of control causes trust issues when dealing with third-party code 
- Promise objects are most useful for operations that are time-consuming and can block resources 
- JSON.parse() and JSON.stringify() are two methods used to parse JSON objects 