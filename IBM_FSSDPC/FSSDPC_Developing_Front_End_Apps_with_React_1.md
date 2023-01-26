# Developing Front End Apps with React - Week 1

I mean, if you really want to learn it well, why don't you use markdown to take notes. You already know the cost of screenshots.

## Angular, Vue and React is framework for front-end development

Angular

·    Open source from Google

·    Based on HTML and JavaScript

·    Directives to make HTML dynamic

Vue

·    Open source

·    Use virtual DOM

·    Lightweight and fast

React

·    A framework for building client-side dynamic web applications 

·    Dynamic data binding and virtual document object model (DOM)

## Introduction to ES6

Ecma Script 6

Ecma International is a nonprofit standards organization for information and communication systems. 

### Let and const

let and const are introduced in addition to var in JavaScript.

let allows you to restrict the scopoe of variables **within the block** where they are declared.

const allows you to declare constants whose values **cannot be changed.**

### Arrow functions

Arrow functions allow function to be declared like variables, which is a shorter and cleaner way to work with funcitons.

#### Calling arrow functions

Arrow functions can be called.

Arrow functions can be passed as parameters for callbacks.

#### Arrow function with parameters

Arrow functions also take parameters like normal functions.

They can return a data type or an object.

(if you need to return a value, the function have to be curly brackets {})

```javascript
const oneParamArrowFunc = name => {return "Hello "+ name}
const twoParamArrowFuncWithoutReturn = (first, last) => console.log("Hello " + first + " " + last);
const twoParamArrowFuncWithReturn = (first, last) => {return "Hello " + first + " " + last};
```

### Promise

The promise object represents the evnetual completion of an asynchronous operation and its return value.

When you invoke an asynchronous operation, a promise is in the pending state.

When the operation executes successfully, the promise is fulfilled.

When the operation fails, the promise is rejected.

Example of two way to build promise.

```javascript
let promiseArgument = (resolve, reject) => {
	setTimeout(() => {
		let currTime = new Data().getTime();
		if(currTime % 2 == 0) {
			resolve("Success!")
		} else {
			reject("Failed!")
		}
	}, 2000)
};

let myPromise = new Promise(promiseArgument);
```

```javascript
let myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		let currTime = new Data().getTime();
		if(currTime % 2 == 0) {
			resolve("Success!")
		} else {
			reject("Failed!")
		}
	}, 2000)
};
```

### Class

Class makes object-oriented programming feasible.

Class is a template or blueprint for creating objects.

Classes in JavaScript are built on prototypes.

Example for class

```javascript
class Rectangle {
	constructor(height, width) {
        this.height = height;
        this.width = width;
        console.log("Rectangle created")
    }
};

let myRectangle = new Rectangle(10,5)
```

Then, if there is class, there is inheritence.

```javascript
class Square extends Rectangle {
	constructor(height, width){
        // in js, === (strict equality) means the data have same data type and value.
        // that means, in js, '1' == 1 returns true actually.
		if(height === width){
			super(height,width)
		} else {
            super(height,height);
        }
	}
}

let mySquare = new Square(5,5)
```

## TypeScript

TypeScript is a **superset of JavaScript**, meaning all JavaScript is TypeScript, but not all TypeScript is JavaScript. React allows you to choose whether to use either JavaScript or TypeScript. Before we discuss why you may want to choose TypeScript over JavaScript, let’s learn a little more about TypeScript.

TypeScript is a compiled language that supports type-checking. TypeScript is statically typed. This means that variables are static. Once they are defined, **a variable's type, such as “num” or “string,” cannot be changed.** A variable that is declared a number cannot later take a string value. Using TypeScript can save a lot of headaches later to help avoid “run-time errors” when the code is being run or avoid hard-to-identify bugs during testing. With TypeScript many of these errors are identified as “type errors” during compilation rather than “undefined” bugs at run-time. During compilation of the Typescript code, this is called “type checking,” where the compiler ensures that once a variable is declared, it is not reassigned to another data type.

Now let’s explore the relationship between JSX and TypeScript. Recall that JSX provides additional syntax to JavaScript, allowing you to write HTML-like code for JavaScript. JSX requires a compiler to translate the JSX into JavaScript. Babel is a popular compiler for JSX. 

**TypeScript supports embedding. This means you can embed HTML directly into TypeScript, and the compiler will translate the HTML and the TypeScript into JavaScript at compile time, similarly to how the Babel compiler translates JSX into JavaScript.** 

There are a couple of compilation differences, though, if you choose to compile your JSX or JavaScript with Babel vs. the TypeScript compiler. First of all, Babel does not support type-checking. Secondly, the TypeScript compiler compiles the entire project simultaneously rather than one file at a time. This means that type errors are caught amongst different files rather than only within a single file. 

There are several advantages to using TypeScript rather than JavaScript in your React application and possibly a few drawbacks. Regarding advantages: 

- TypeScript makes it easy to define Prop types in React. This makes writing code with an IDE that supports code completion a breeze since the IDE automatically populates the Prop type. 
- Most common third-party libraries support TypeScript definitions.
- As mentioned, TypeScript has static type-checking, which enables you to help identify errors earlier in the development process.
- Refactoring code becomes easier since types are known.
- There will be fewer “undefined” errors at run-time due to type-checking at compile time.
- Code is easier to read and maintain than JavaScript due to typed variables.
- You can still write JavaScript and use the TypeScript compiler.

There are also possibly a few challenges with using TypeScript rather than JavaScript for React applications:

- There is a learning curve
- Compilation takes a little longer than using Babel with JSX
- Third-party libraries could be missing Type definitions, though this is rare because TypeScript has grown very popular

## Introduction to JSX

JSX or JavaScript Syntax Extension or JavaScript XML is:

* An extention to JavaScript.
* Easier way to create UI components in React.
* Produces React "elements".

JSX syntax

* Is liek an XML or HTML-like syntax used by React that extends ECMAScript.
* Allows XML or HTML-like test to co-exist with JavaScript or React code.
* To be used by preprocessors liek traspilers or compiler like Babel, to transform HTML-like text found in JavaScript files into standard JavaScript objects.

Example:

```jsx
const el1 = <h1>This is a sample JSX code snippet</h1>
```

### Benefits of using JSX

* Easily understood by less technical people.
* You can avoid learning of a templating language.
* Errors in the code are easily detected.
* It promotes inclusion of inline styles.
* It helps in keeping your code simple and elegant. 
* Most people find it helpful as a visual aid.
* It is faster than normal JavaScript.
* It takes care of output sanitization issues.

## Introduction to Components

Features of React component

* Represents a small chunk of user interface in a webpage.
* Renders its user interface and updates it whenever its internal state is modified.
* Manages the event that belong to its user interface.

State

* State is an object to describe the behavior of a componet.
* A React component can be either "stateful" (can be rerenderd) or "stateless" (cannot be rerender, like static).
  * A stateful componets are class type
  * A stateless components are function type.

Working of a component

* Properties enable the component to pass data. 
* Events enable the component to manage document object model (DOM) events and end-user interaction.
* States enable the component to stay stateful.

### Type of React components

React components are:

#### Functional

* Created by writing JavaScript function.

* May or may not receive data as parameters.

* Functions that take in props and return JSX .
* Do not natively have state or lifecycle methods, but they can be added by implementing React Hooks (a new feature).
* Used to display information that is easy to read, debug, and test.
* **They are stateless.**

Eg.

```javascript
const Democomponent = () => {
 	return <h1>This is a demo functional component</h1>;
}
```

#### Class

* More complex than functional components.
* Can pass data to other class components.
* Can be created using JavaScript ES6 classes.
* More frequently used than other components as they have some additional functions.
* Can used React funcitons like state, props, and lifecycle methods.
* **Stateful.**

Eg.

```javascript
class Democomponent extends React.Component
{
	render(){
		return <h1>This is a demo class component using render method.</h1>;
	}
}
```

#### Pure

* Better than functional components.
* Primarily used to provide optimizations.
* Simplest and fastest components to write.
* Do not depend on or modify the state of variables outside their scope.
* Can replace simple functional components.

#### High-order

* Advanced tecnique in React for reusing component logic.
* Not available in the API.
* A patter that emerged from React's compositional nature.
* A function that returns a components.
* Used to share logic with other components.

## Props and Event Handling for React componets

Two types: functional and class.

functional components can be used to handle static components where as class is more preferred because they can be rendered in real time.

## Summary

Congratulations! You have completed this module. At this point in the course, you know:

* React is an efficient, flexible JavaScript library for building user interfaces. 

*  New features introduced in JavaScript as a part of ES6 are let, const, arrow functions, promise, and class. 

*  The main benefits of using JSX are that you can leverage the full power of JavaScript in HTML and avoid learning or using a templating language. It allows React to show useful error and warning messages.

* The four types of React components are Functional, Class, Pure, and High-order component. 

*  Functional components are most useful when the lifecycle of the component doesn’t have to be managed. 

*  Class components are more versatile.