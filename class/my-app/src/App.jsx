import logo from "./logo.svg";
import "./App.css";
import Greeting from "./Greeting";

function App() {
	const anchor = (
		<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
			Learn React
		</a>
	);

	// console.log("anchor", anchor);

	const sampleUser = {
		name: "Tai",
		age: "18",
	};

	const greetingMessage = "Hi my name is";

	// A React component "returns" JSX

	// jsx is a templating language that React uses to describe the UI you are creating. JSX looks like html, but is NOT. Each component can only "return" 1 JSX parent element

	// Browser can understand JS, but not JSX. To make the browser understand JSX, we need a transpiler like "Babel" to convert JSX into JS. The React library does this for us using React.createElement() then React.createElement turns JSX into plain JS objects that the browser can understand

	return <div className="App"></div>;
}

export default App;
