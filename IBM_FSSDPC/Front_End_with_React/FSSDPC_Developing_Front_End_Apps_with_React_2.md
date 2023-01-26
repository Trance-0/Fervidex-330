# Developing Front End Apps with React - Week 2

## Introduction to States

States:

* Allows you to change data
* An object that specified different types of data
* A built-in state object sotres property balues belonging to the component
* Chage in state results in re-rendering of component

Type of state:

### Shared state

shared by multiple components such as in an oreder of application.

### Local state

present only in a single compoent that needs it such as hiding and showing information.

### States in React components

* A plain JavaScript object used to represent an information about the component's current situation.
* Determines how the componet renders and behaves.
* Allows you to create components that are dynamic and interactive.
* An instance of React Component Class that can be defined as an object with properties that control the behavior of the component.
* Managed and preserved in the React component.
* Holds some information that may change over the lifetime of the component.

Eg.

```javascript
//component
class TestComponent extends React.Component {
    constructor(props) {
        super(props);
    	this.state = {
            id: 1,
            name: "John",
            age: 28
        };
    }
    render() {
        return {
            <div>
            	<p>[this.state.name]</p>
                <p>[this.state.age]</p>    
            </div>
        };
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Testcomponent />)
```

### Props

* Short for properties used to pass data between React components
* Read-only components
* Behavior:
  * Store the value of attributes of a tag and work like the HTML attributes.
  * Function arguments that can be passed to the component.
  * Immutable and cannot be modified from inside the component.
  * Should not be changed in a child component.
  * Allow child components to access methods defined in the parent component.

```javascript
//component
class TestComponent extends React.component {
    render() {
        return <div> Hi{this.props.name</div>
                       }
    }
}
//passing the props as examples to the test component
<TestComponent name='John'/>
<TestComponent name='Jill'/>
```

Compare state and props

| State                                                        | Props                                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Can only be sued in class components natively, in function componets opt-in to useState hook to include stateful features | Can reuse the component by giving it an abilty to receive data as input from the parent component |
| Cannot be accessd or modified outside of the component       | Gives ability to receive data from the parent component in the form of props |
| Components can create and manage their own data with state   | Components receive data from outside with prop               |
| Used for managing data                                       | Used to pass data                                            |
| Data can be modified by its own component but is private     | Data is read-only and cannot be modified by a component that is receiving it from outside |
| Can modifiy state with the setState() method                 | Can only be passed from parent component to child (unidirectional flow) |

## Passing data and states between components (Component Lifecycle)

Component phrases:

### Mounting

Component creation

When a component is created, four methods are called in the same order

* Constructor()
* getDerivedStateFromProps()
* render()
* componentDidMount()

### Updating 

Component change

When a component is updated, five methods are called in the same order

* getDerivedStateFromProps()
* shouldComponentUpdate()
* render()
* getSnapshotBeforeUpdate()
* componentDidUpdate()

### Unmounting

Component removal

When a component is unmounted, the componentWillUnmount() method is called.

### Component Lifecycle

#### Initialization

Component is constructed with props and default state.

#### Mounting

JSX is renderd.

Eg.

```javascript
class Header extends React.Component {
	constructor(props) {
		super(props);
		console.log("Inside the constructor")
	}
	componentDidMount =()=> {
		console.log("Inside component did mount")
	}
	render() {
		console.log("Inside render method")
		return (
			The component is rendered
		)
	}
}
export default App
```

#### Updating

Component is changed.

```javascript
class App extends React.Component{
	state = {counter: "0"};
	incrementCounter = () => this.setState({counter:parseInt(this.state.counter)+1})
	shouldComponentUpdate(){
 	console.log("Inside shouldComponent update")
  	return true;
}
getSnapshotBeforeUpdate(prevProps,prevState){
	console.log("Inside getSnapshotBeforeUpdate")
	console.log("Prev counter is" +prevState.counter);
	console.log("New counter is" +this.state.counter);
	return prevState
}
componentDidUpdate(){
	console.log("Inside componentDidUpdate")
}
render(){
	console.log("Inside render")
	return(<button onClick={this.incrementCounter}>Click Me!</button>{this.state.counter}
)
}}
export default App;
```

#### Unmounting

Component is removed.

```javascript
import React from 'react';
class ComponentOne extends React.Component {
	componentWillUnmount() {
		console.log('The component is going to be unmounted');
	}
	render() {
		return Inner component;
	}
}
class App extends React.Component {
	state = { innerComponent:<AppInner/>};
	componentDidMount() {
		setTimerout(()=>{
		this.setState({ innerComponent:unmounted});
	},5000)
}
render() {
	console.log("Inside render")
	return (
		{this.state.innerComponent});
	}
}
export default App;
```



## Connnecting React to External Services

HTTP: GET(get remote data), POST(add remote data), UPDATE(change remote data), DELETE.

Done by promise server call.

## Tesing React Components

Testing of React components:

* Ensured appliation will work as intended.
* Verifies the code runs error-free.
* Tests functionality by replicating the actions of the end users.
* Validates any updates done do not effect the working of the overall application.
* Prevents regression that is reappearance of a previous fixed bug.

Approaches of React component testing

* Render component trees in a simple test environment and assert their output
* Run application in a realistic browser environment to do end-to-end testing.

Steps:

Arrange -> Act -> Assert

Choosing the right tool (Factors to consider when testing)

* Speed or realistic
* What to mock (units or integration)

React testing libraries/tools

* Mocha: Test runner
* Chai: Assertion library
* Sinon: Spies, stubs, mocks
* Enzyme: Render components

Jest: combined of Mocha, Chai, Sinon.

Other individual libraries

Example of usage of React Testing Library

```javascript
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import 'Fetch' from './fetch'

test('loads and displays greeting', async () => {
    //Arrange
    render(<Fetch url="/greeting" />)
    
    //Act
    await userEvent.click(screen.getByText('Load Greeting'))
    await screen.findByRole('heading')
    
    //Assert
    expect(screen.getByRole('heading')).toHaveTextContent('hello there')
    expect(screen.getByRole('button')).toBeDisabled()
})
```

