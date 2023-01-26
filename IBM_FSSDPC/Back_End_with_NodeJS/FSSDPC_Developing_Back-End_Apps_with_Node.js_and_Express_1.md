# Developing Back-End Apps with Node.js and Express - Week 1

## General

Node.js is a Runtime environment for Server-side JavaScript applications

Express is a Sever-side JavaScript web framework that runs on top of Node.js

Back-end developers write code to communicate with the browser's engine and back-end server

### Back-end technologies 

* Includes: servers, databased, web APIs, programing languages, frameworks, and runtimes
* Server can refer to hardware, software, or both
* Server communicate with and provide functionality to a client
* Server also communicate with and provide functionality to each other

### Application servers

* Host and deliver the application through HTTP
* They sit between a database server and a web server
* Transform data into content
* Run business logic
  * Data storage rules
  * Data transfer rules

### Web APIs

* How two pieces of software communicate

* Web services

  * Type of a web API
  * Communicate using HTTP

### Frameworks

* Provide structure for code
* Generates code that cannot be altered
* Back-end framework include:
  * Django (Python)
  * Ruby on Rails (Ruby)
  * Expresss.js (JavaScript)

* Express.js
  * Framework that runs on top of Node.js
  * Handles the HTTP requests made to a web server

### Runtime environments

* Like a mini operating system that provides the resources necessary for an application to run
* The infrastructure that supports the execution of a code base
* The environment in which an application gets executed
* Node.js is a back-end runtime environment

### Backend Responsibility: 

#### Scalability

##### Load:

* Number of concurrent users
* Number of concurrent transactions
* Amount of concurrent data transfer between clients and servers

##### Scalability

* Application's ability to handle changes in load without affecting performance
* Essential for client-server application success

#### Security

#### Authentication

#### Malware prevention

#### Performance

## Introduction to Node.js

Node.js definition

* Node.js is an open-source language that runs on V8
* V8 is an open-source engine developed by Google for the Google Chrome browser

Node.js functionality

* Developers frequently use JavaScript to code client-side capabilities. Node.js is the server component in the same language
* Node.js is event-driven and uses asynchronous, non-blocking I/O

Express.js

* Configurable framework for building applications on Node.js
* Abstract lower-level APIs in Node.js by using HTTP utility methods and middleware

## Import and Require

### Modules

* Related, encapsulated JavaScript code
* Serves a single purpose

* Can be a single file or a folder containing files

* Reusable
* Breaks down complex code into manageable chunks

#### Packages and specifications

* A directory with one or more modules

#### Module specifications

* Conventions and standards used to create packages
* CommonJS (.js)
* ES (.mjs)

#### Importing and exporting modules

* CommonJS import by require(), export by module.exports
* ES import by import(), export by export

#### Comparing require() and import()

require() Synchronous

* Can be called anywhere in the code

* Can be called within conditionals and functions

* Dynamic

* Binding error not identified until run-time

Eg.

```javascript
//export form a file named
//message.js
module.exports = 'Hello shits.';

//import from the message.js
//file
var msg =
	require('./message.js');
console.log(msg);
```

Import() Asynchronous

* Can only be called at the beginning of the file
* Cannot be called within conditionals or functions
* Static
* Binding errors identified at compile-time

 Eg.

```javascript
//export from file named module.mjs
const a =1; 
export {a as "myValue"};
//import from module.mjs
import {myValue} form 
	"module.mjs";
```

## Introduction to server-side JavaScript

Node.js is a server-side programming framework that uses JavaScript as its programming language

With server-side JavaScript, Node.js applications process and route web service requests from the client

Node.js is for developer who want to build scalable, concurrent server applications quickly with a minimal set of tools.

## Creating a Web Server with Node.js

Node.js is a single-threaded application environment that handles I/O operations through events

Every JavaScript file is a module in Node.js

With the http Node.js module, you can develop an application that listens to HTTP requests and return HTTP response messages

Eg.

```javascript
var server = http.createServer(function(request, response){
    var body = "Hello world!";
    response.writeHead( 200,{
    	'Content-Length':body.length,
        'Content-Type':'text/plain'
    });
	response.end(body);
});

server.listen(8080);
```

## Working with Node.js Modules

Package.json: the module manifest

* A package consists of one or more modules
* Every package has a package.json file that describes details about Node.js module

* If there is no package.json, the browser would assumes that the main class is index.js

#### Importing Node.js modules

Use the require function to import a Node.js module

```javascript
var today = require('./today');
```

#### Export functions and properties

Eg. 

```javascript
var date = new Date();
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

exports.dayOfWeek = function (){
	return days[ date.getDay() - 1];
};
```

* Each Node.js module has an implicit export object
* To make a function or a value available to Node.js applications that import your module, add a property to exports

## Advanced Node.js Modules

The most important of the core modules are http, path, fs, os, util, url, and querystring. Let's briefly discuss each of these and provide code examples.

### http

The http module provides methods to transfer data over HTTP. To include the http module in your application, you should require it.

Here is sample code that creates an instance of a server using the http module. This code makes use of the http.createServer() method to create the server instance.
````javascript
var http = require('http'); 
http.createServer(function (req, res) { 
	res.write('hello from server');
	//write a response to the client res.end();
	//end of response from server 
}).listen(6000);
//the server instance listens for http requests on port 6000
````

### fs

The fs module is used to interact with a file system. It does not need to be installed because it is part of the Node.js core and can simply be required. The following code sample reads a local file synchronously using the fs module and prints the file contents to the console.

```javascript
// sample code to read a file synchronously using the fs.readFile() method
const fs = require('fs');
const data = fs.readFile('sample.txt', 'utf8');
// print contents of the file "sample.txt" to console
console.log(data);
```

The fs module can also be used for input and output, known as I/O. The fs module methods can be used to retrieve information from or write data to an external file.

```javascript
const fs = require(‘fs’);
const data = fs.readFileSync(‘/content.md’); // blocks here until file is read
console.log(data);//writes data in the content.md file to the console
```

### os

The OS module provides methods to retrieve information from the operating system that the application is running on and interact with it. This is sample code from the OS module that gets the computer's platform and architecture.

```javascript
var os = require('os');
console.log("Computer OS Platform Info : " + os.platform());
console.log("Computer OS Architecture Info: " + os.arch());
```

### path

The path module allows you to retrieve and manipulate directory and file paths.
The following code retrieves the last portion of a given file path and prints that value to the console:

```javascript
const path = require('path');
let result = path.basename('/content/index/home.html');
console.log(result); 
//outputs home.html to the console
```

### util

The Node.js util module is intended for internal use for accomplishing such tasks as debugging and deprecating functions. Say you want to debug a program to count the number of iterations in a loop. You could use util.format() method as follows:

```javascript
var util = require('util');
var str = 'The loop has executed %d time(s).';
for (let i = 1; i <= 10; i++) {
    console.log(util.format(str, i)); 
    //outputs "The loop has executed <i> time(s)
}
```

### URL

The URL module is used to divide up a web address into readable parts. Here is sample code used to return a hostname given a URL.
````javascript
const url = require('url'); 
let webAddress = 'http://localhost:2000/index.html?lastName=Kent&firstName=Clark'; 
var qry = url.parse(webAddress, true); 
var qrydata = qry.query; 
//returns an object: {lastName: 'Kent', firstName: 'Clark'} 
console.log(qrydata.firstName); //returns Clark
````

### querystring

The querystring module provides methods to parse through the query string of a URL.
For example,

```javascript
var qry = require('querystring');
var qryParams = qry.parse('lastName=Kent&firstName=Clark');
console.log(qryParams.firstName); 
//returns Clark
```

### Node Package Manager (npm)

Package manager

* Set of tools to deal with modules and packages containing dependencies
* Also refer to package-management system

Dependencies

* Code in the form of a library or a package reused in a program
* Libraries and packaged contain many dependencies
* A library does not depend on code outside of it to function

package.json file

* File located in a project's root direcotry
* NPM uses package.json to determine dependencies
* Contains key-value pairs that identify the project
* Must contian
  * Project name
  * Project verison

Local install (in ./npm_modules)

* NPM packages can be installed locally or globlally
* Use local install for use with packages within your application
* Run the local install command from the directory you want the package installed in
* Local install is NPM's default behavior

```bash
npm install <pacakge_name>
```

Global install

* Packages can also be installed globally 
* A globally installed package will be used by all applications on the machine
* Use judiciously
* If you have different version of the project on your machine, they will all use the globally installed packages
* Might break compatibility with other dependencies

```bash
npm install -g <package_name>
```

