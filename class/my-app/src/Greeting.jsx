function Greeting(props) {
	// props are inputs to your components. It carries data that your components need (dependencies)
	// props are used to pass data from parent to child components as dependencies to the child component

	// props are just JS objects {}
	console.log("props", props);
	const {
		greetingMsg,
		user: { name, age },
	} = props;

	return (
		<div>
			{greetingMsg} {name} - He is {age} years old
			<br />
			<a href="#">My website</a>
		</div>
	);
}

export default Greeting;
