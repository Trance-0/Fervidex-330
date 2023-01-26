# Developing Back-End Apps with Node.js and Express - Week 3

## Extend with third-party packages

The default Node,js framework provides a limited set of features for building web applications

For example, Node.js does not provide parsing function for extensible markup language (XML) messages

* In simple messages, you can parse out an XML message with JavaScript string functions
* You can also use an XML document object, but the object is not efficient in parsing a stream of XML data

Developers rely on third-party packages to extend Node.js features

Parsing XML using sting is difficult and may not be robust as external packages

### Parsing XML elements to JavaScript

* The xml2js Node.js packages parses a string of XML elements into a JavaScript object
* Unlike other XML parsing Node.js packages, xml2js uses only JavaScript
* It does not require an XML parsing library that is written in another language
* Third-party packages might have a different software license than the Node.js framework
* Confirm that the licensing terms work with your company and your application before installing the package

## Introduction to Web Framework

### Runtime Environments

* Node.js is not a web framework but a runtime environment that executes JavaScript on a server
* Runtime environments are the hardware and software that can execute programs with a particular codebase.

### Node framework

Web frameworks are the skeletons on which an application is built

Fundamental structure that supports the application

Node.js requires a web framework to utilize it

Node.js framework are called node frameworks 

Two approaches to building back-ends

Application can use both MVC and REST APIs

They are not mutually exclusive

#### Model-View-Controller (MVC)

Application is divided into Model, View, and Controller.

* Model: Manages data and interacts with database and handles data logic.

* Controller: Regulates data flow and processes data provided by user.

* View: Renders presentation of the data.

Used for apps that need separation of the data, form the data presentation, and from the manipulation of data

(Koa, Django, Express, NestJS)

##### Express

* One of the most popular node frameworks
* Primarily used for routing and middleware
* Small learning curve because it uses JavaScript
* Easy to implement an MVC architecture pattern
* Provides debugging mechanisms

Advantages

* Handles multiple operation requests concurrently
* Has HTTP helpers for handling HTTP requests
* Helps facilitate communicational between client and server
* Efficiently provides HTTP headers to URLS to get needed data requested by the client

##### Koa

* Designed by the same team that designed Express
* More robust foundation for web applications and APIs
* Use Async functions such that callbacks are not necessary
* Increased error-handling ability
* Appropriate for applications that are
  * High-performance
  * Demanding
  * Complex 
  * Developed by large experienced teams

##### NestJS

* Appropriate for dynamic, scalable, enterprise applications
* Flexible 
* Multitude of libraries
* Easy to implement an MVC architecture
* Built on top of Express
* Compatible with TypeScript
* Works in conjunction with the Angular framework
* Combines object-oriented and functional reactive programming

#### Representational state transfer application programming interface (REST API)

Allow multiple web services to communicate with each other and the client

RESTful APIs:

* Client and server code are independent of each other
* Clients does not know the state of the server and vice versa (stateless)
* Communicate via operation on resources
* Communication does not rely on an implementation of the API

##### Socket.io

* Best for apps with real-time bidirectional data exchange between clients and servers
* Utilize WebSocket rather than HTTP for communication
* Server push data without a request from the client
* Works well for applications such as
  * Chat rooms
  * Texting
  * Video conferencing 
  * Multiplayer games

##### Hapi.js

* Open source
* Lots of built-in security
* Many built-in plugins so no need for unofficial middleware
* Good for developing
  * Proxy servers 
  * API servers
  * HTTP proxy applications 
  * REST APIs

## Express Web Application Framework

Express is a third-party module that provides a framework for building web applications

The Express web application framework is one of the most popular building blocks for web applications

### Two purposes of Express

#### As an API

* An Express API sets up an HTTP interface to interact with the data layer of the application
* Data is sent back to the client in JSON format using a response, or res, object
* The res.json() method: 
  * Notified the client of the content type being sent
  * Stringify data

#### Setup templates with server-side rendering (SSR)

* SSR is used to screate templates
* Data is sent from the client to the server
* Templates use that data to create HTML, CSS, JavaScript
* Use the res.render() method

### Application framework for Node.js

* Express implements an app class that you map to a web resource path
* The standard Node.js framework treats HTTP requests at a lower network level
* The http.createServer() function relies on a custom callback function to parse through the web resource path

### How express works

1. Declare Express as a dependency in the package manifest of a Node.js project

   Create a package.json file in your project folder

   The package.json file stores information about the contents of a Node.js module

   * Name
   * Version
   * Description
   * Main
   * Dependencies

2. Run the npm command to download any missing modules

3. Import the Express module and create an Express application

4. Create a new route handler

5. Start an HTTP server on a given port number

## Introduction to Middleware & Routers

### Middleware

In this article, we will discuss the terms *middleware* and *routes*.

Middleware (set of functions that have access to the request and response objects and the next function) is software that sits between applications, databases, or services and allows those different technologies to communicate. It creates seamless interactions for the end user in a distributed system. 

Type of middleware:

#### Application-level middleware

* Bound with app.use();

* Mainly used for authentication;

#### Router-level middleware

* Bound with router.use();

#### Error-handling middleware

* Bound with app.use or router.use();

#### Built-in middleware

* Static files, cookie parser, JSON

#### Third-party middleware

* Open source, user defined.

Express is a messaging framework used to handle routes and write middleware. The front end of an application uses Express to facilitate communication between components on the back end without the front-end and back-end services needing to use the same language. The front end communicates with the middleware, not directly with the back end. 

Messaging frameworks like Express commonly contain JSON, REST APIs, and web services. Older messaging frameworks may contain extensible markup language (XML) and simple object access protocols (SOAP) instead of JSON and REST APIs, respectively. The messaging framework provides a standardized way to handle data transfer among different applications.

### Routing

A web server is an example of middleware that connects a website to a database. The web server handles the business logic and routes the data from the database based on the request. A *route* is the part of the code that associates an HTTP request, such as **GET, POST, or DELETE,** with a URL and the function that gets called that handles that URL. Routing is used in web development to split an application’s user interface based on rules identified by the browser’s URL. 

Router functions are called “middleware” collectively. Middleware is responsible for responding to an HTTP request or calling another function in the middleware chain. Express handles router functions through the Router class, such as Router.get(). As the name suggests, Router.get() handles HTTP GET requests. Other Router functions include Router.post(), Router.put(), Router.delete() in mostly the same way. These methods take two arguments, a URL path and a callback function. 

In addition to routing, middleware is also responsible for providing secure connections among services by encrypting and decrypting data, managing application loads by distributing traffic to different servers, and sorting or filtering data before the data is returned to the client.

### Template rendering

Rendering dynamic content

## Authentication and Authorization

The authentication process confirms a user’s identity using credentials by validating who they claim to be. Authentication assures an application’s security by guaranteeing that only those with valid credentials can access the system. Authentication is the responsibility of an application’s backend.

Three popular authentication methods in Node.js include:

1. Session-based
2. Token-based
3. Passwordless

Let’s explain a little bit about each of these methods and compare them.

### Session-based

Session-based authentication is the oldest form of authentication technology. Typically, the flow of a session is as follows:

1. The user uses their credentials to log in.
2. The login credentials are verified against the credentials in a database. The database is responsible for storing which resources can be accessed based on the session ID.
3. The server creates a session with a session ID that is a unique encrypted string. The session ID is stored in the database.
4. The session ID is also stored in the browser as a cookie.
5. When the user logs out or a specified amount of time has passed, the session ID is destroyed on both the browser and the database.

#### Token-based

Token-based security entails two parts: authentication and authorization. Authentication is the process of providing credentials and obtaining a token that proves the user’s credentials. Authorization refers to the process of using that token so the resource server knows which resources the user should have access to.

*Token-based Authentication*

Token-based authentication uses access tokens to validate users. An access token is a small piece of code that contains information about the user, their permissions, groups, and expirations that get passed from a server to the client. An ID token is an artifact that proves that the user has been authenticated.

The token contains three parts, the header, the payload, and the signature. The header contains information about the type of token and the algorithm used to create it. The payload contains user attributes, called claims, such as permissions, groups, and expirations. The signature verifies the token’s integrity, meaning that the token hasn’t changed during transit. A JSON web token, pronounced “jot” but spelled JWT, is an internet standard for creating encrypted payload data in JSON format.

A user's browser makes a call to an authentication server and gets access to a web application. The authentication server then passes back an ID token which is stored by the client as an encrypted cookie. The ID token is then passed to the app on the web server as proof that the user has been authenticated.

The authorization process gets executed when the web application wants to access a resource, for example, an API that is protected from unauthorized access. The user authenticates against the Authorization server. The Authorization server creates an access token (note that the ID token and access token are two separate objects) and sends the access token back to the client, where the access token is stored. Then when the user makes requests or resources, the token is passed to the resource, also called an API server. The token gets passed with every HTTP request. The token contains embedded information about the user’s permissions without the need to access those permissions from the authorization server. Even if the token is stolen, the hacker doesn’t have access to the user’s credentials because the token is encrypted.

Advantages: Scalable, Flexible, Secure

Functionality summary:

1. API endpoint: signin
2. Reads username and password from the request body
3. Validates against the database
4. If there is a match, use the jsonwebtoken.sign() method to generate the token
5. Send the token as a response

#### Passwordless

With passwordless authentication, the user does not need login credentials, but rather, they gain access to the system by demonstrating they possess a factor that proves their identity. Common factors include biometrics such as a fingerprint, a “magic link” sent to their email address, or a one-time passcode sent to a mobile device. Password recovery systems now commonly use passwordless authentication.

Passwordless authentication is achieved using Public Key and Private Key Encryption. In this method, when a user registers for the app, the user’s device generates a private key/public key pair that utilizes a factor that proves their identity, as noted above.

The public key is used to encrypt messages, and the private key is used to decrypt them. The private key is stored on the user’s device, and the public key is stored with the application and registered with a registration service.

Anyone may access the public key, but the private key is only known to the client. When the user signs into the application, the application generates a login challenge, such as requesting biometrics, sending a “magic link,” or sending a special code via SMS, encrypting it with the public key. The private key allows the message to be decrypted. The app then verifies the sign-in challenge and accepts the response to authorize the user.

### HTTP Methods and REST APIs

Status code range Meaning 

200-299 Everything is OK 

300-399 Resource has moved 

400-499 Client-side error 

500-599 Server-side error

## Express Best Practices

Web framework directory structures

* Most web frameworks have required directory structures
* Express does not have require a particular directory structure
* Best to define a structure in advance for growth and maintenance

### Suggested Express folder structure

Project

* node_modules

  Contains application's modules and packages. It is automatically created after running the npm install command

* config

  Contains configuration files such as

  * Database connections
  * Environment variables
  * Credential files including API keys for external services

* models

  Contains data models which specify the type of data store defined by an ORM library

* routes

  Specified routes for all entities. One file for each logical set of routes

* views

  Contains templates which dynamically write HTML, CSS, and JavaScript for the client

* public

  Contains static content such as images, CSS, and JavaScript

  Helpful to have a sub-folder for each type of content

* app.js

  Main configuration file for your application

* routes.js

  Central location to access routes

  Imports all files from routes folder

  Exports them as a single module to app.js

  Creates a single point of entry for all routes

* package.json

  Contains metadata used to manage dependencies

### API directory structure

Project

* node_modules
* config
* models
* routes
* app.js
* route.js
* package.json

Testing REST APIs

* Black-box test REST APIs
* Test as a whole without stubbed dependencies
* Mocha framework contains a module called SuperTest

### API authentication

Use JWT based stateless authentication

User properties are provided on the client-side

### API documentation

Provide appropriate documentation for your REST APIs

Documentation open-source projects:

* API Blueprint
* Swagger

### Naming conventions

Use camel case for file names -> myFile.js

Use camel case for variables -> myVariable

Use lowercase separated by dashed for npm modules - > my-npm-modules

Use camel case when requiring npm modules -> require('myModule')

