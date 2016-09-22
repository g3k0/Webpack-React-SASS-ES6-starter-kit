var React = require('react');
var ReactDOM = require('react-dom');

class App extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {title:'Webpack'};
	} 

	render() {
		return (
			<div>
				<h1>My {this.state.title} App</h1>
				<p>A extremely cool app build with React, Webpack, and Magic!</p>
			</div>);
	}
}

ReactDOM.render(<App  />,
	document.getElementById('react-container')
);