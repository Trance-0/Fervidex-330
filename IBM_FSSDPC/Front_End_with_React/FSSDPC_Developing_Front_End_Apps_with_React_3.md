# Developing Front End Apps with React - Week 3

## Hooks

Introduced in Feb 2019 as part of React 16.8.

Help you make your code clearer and better structured.

Are regulaer JavaScript functions.

Provide a way to use fucntionalities such as context or state.

Used without classes.

Use function components.

### Advantages

* Readable
* Lesser code
* Overall optimized component
* Writing a functional component with state
* Writing complex components became easier
* Handling events and logics in functional components
* Performance boost with functional components

### Best practices

* Can be called only from inside React function components
* Can only be called at the top level of component
* Cannot be conditonal
* Use Node version 6 or above.
* User NPM version 5.2 or above
* Use Create-react-app tool for running the React App

### Standard Hooks

useState: Add state to a function component

useEffect: Manages side effects

useContext: Manages context changes

useReducer: Manage Redux state changes

### Custom Hooks

```javascript
import React,{useState}from 'react';
function CntApp() { 
	const[count,setCount]=useState(0);
	return(
        <div>
        	<p>You clicked {count} many times</p>
			<buttononClick={()=>setCount(count+1)}>
                Clickme
			</button>
		</div>
);
}
export default CntApp;
```

### Forms

* Allow users to interact with web page
* Handle data using components
* Store data in component state
* Control changes and update the state of the variable using event handlers

For form elements liek <input>, <textarea>, and <select>

In HTML, the form elements maintain their own state.

In React, the form element are kept in the state property of components.

Form validation in react

* Get form values.
* Manage the form state.
* Validate the form on the fly.
* Show validation messages.

Types of inputs

* Uncontrolled input

  Allow the browser to handle most of the form elements and collect data through React's change events.

* Controlled input

  Use React to fully control the element by setting and updating the input value directly.

Example of form using React Hooks.

```javascript
import React, {Component} from "react";
export default functionApp() {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const handleSubmit = (event) => {
		console.log(`Email: ${email}Password: ${password}`);
		event.preventDefault();
	}
	return ( < form onSubmit = {handleSubmit} > 
	< h1 > Registration < /h1>
	<label> Email:< input 
            name="email" 
            type="email" 
            value={email}
			onChange={e => setEmail(e.target.value)} required/ > < /label>
	<label>Password:<input 
			name="password" 
			type="password" 
			value={password}
			onChange={e => setPassword(e.target.value)}required/></label>
	<button>Submit</button>
	</form>);
```

## Introduction to Redux (Real-time data manager)

Redux is:

* A state management library
* Follows a pattern known as Flux architecture
* Handles state changes
* Used when high number of components 
* Not specific to React and can be used with other libraries

Use of Redux:

* Manages state in SPAs (Single page applications), desktop apps via electron, React native apps
* Helps in catching page state
* Manages state in components/global components
* Refactors components
* Share state with multiple container components

### Essential concepts of Redux

Redux offers a centralized state management system - a single store

Component's properties are immutable.

### Redux concepts

#### Actions

Events fired by selecting a radio button, selecting a checkbox, or clicking a button

JSON objects that contain information about changes that need to be made to the state

Produced by functions called action creators

Contains type of Action, time of occurrence, and which states it aims to change

#### Store

Contains the Redux application state

An object that contains state, functions, and other objects

Can dispatch and receive actions

Provides subscriptions to Store updates

Holds the entire application list in the form of the 'state tree'

#### Reducers

Receive the Action from the Store

makes appropriate changes to the state

A pure function that receives current state and an Action

Acts as an event listener, reads the Action payloads, and updates Store

Takes two parameters, previous app state and Action, returns new app state

### Sync and Async for Redux

#### Sync 

* Runs in sequence from top to bottom
* Each operation waits for the previous to complete

#### Async

* Runs in parallel 
* An operation can occur while another is still being processed
* Preferable when execution can be blocked indefinitely
* Page remains responsive
* JavaScript code executes functions concurrently

#### Middleware

We need async because we need to provide fluent experience for users, while updating or requesting from API takes time.

* In Redux, Actions and Reducers complement your app's architecture
* To use asynchronous operations, Actions and Reducer are not enough

Middleware techniques

##### Thunk middleware (First choice)

Allows to pass functions within action creators to create async Redux

Allows writing action creators

Allows dispatch delay of action

Allows dispatching an action

Passed dispatch() and getState() as parameters to the function

###### Advantages

Suitable for simple applications

Enables async operations without a lot of boilerplate code

Easy to set up and implement - less learning curve

###### Disadvantages 

Cannot act in response to an action

Difficult to handle concurrency problems that may occur

Imperative - not very easy to test

Does not scale well

##### Saga middleware

Uses Generators to enable async operations

Expose a set of helper functions to create declarative JavaScript objects

Handles the objects yielded in the backend

###### Advantages

Allows expressing complex logic as pure functions

Easy to test because of predictability, allows separation of concerns

Sagas can be time-traveled

Makes it easier to scale complex applications

Easier to catch errors and handle failures

Well documented

###### Disadvantages 

Not very suitable for simple apps

More boilerplate code than other middleware

Need to have the knowledge of generators

Higher learning curve than other middleware

##### Promise-based middleware

##### Async/Await middleware

## Building Redux and Flow

State change

* Triggers the re-rendering of DOM in React
* Involves transfer of data and long chain of props
* Required state management done by Redux
* Manage in React Redux using a single Store and Reducers
* Is easier in Redux

Data-flow (unidirectional)

* Easier to manage state when actions on UI and update of state are separate
* Enable reuse of the containers, actions, and reducer in React Native





