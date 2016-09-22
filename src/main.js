var React = require('react');
var ReactDOM = require('react-dom');
require('./style.sass');

class Message extends React.Component {
	constructor(props) {
	    super(props);
	}

	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<p>{this.props.message}</p>
			</div>);
	}
}

ReactDOM.render(<Message title="Email Joe" message="can you email him?" />,
	document.getElementById('react-container')
);