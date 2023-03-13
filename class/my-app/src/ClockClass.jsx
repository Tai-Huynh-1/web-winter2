import React from "react";

class ClockClass extends React.Component {
	constructor(props) {
		super(props); // super() is the constructor function for our super class (Component class from React);
		this.state = {
			date: new Date(),
		};
	}

	// React components also have lifecycles
	componentDidMount() {
		this.timerId = setInterval(() => this.tick(), 1000);
	}

	// clean up timers / subscriptions ... etc. before a component unmount with componentWillUnmount lifecycle
	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	// we want to internalize the tick function as well. Changes to a component state will cause React to re-render a component
	// tick() is only defined here and not invoked yet
	tick() {
		// DO NOT UPDATE STATE DIRECTLY LIKE THIS:
		// this.state = {date: new Date()} - DO NOT DO THIS!!!!

		// update the "date" state - NEED TO CALL THE "this.setState" method
		this.setState({
			date: new Date(),
		});
	}

	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}

export default ClockClass;
