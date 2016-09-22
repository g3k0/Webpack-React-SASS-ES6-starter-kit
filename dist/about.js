var React = require('react');
var ReactDOM = require('react-dom');

class About extends React.Component {
	constructor(props) {
	    super(props);
	}
	
	render() {
		return( <div>
					About us
			    </div>		
		);
	}
}

ReactDOM.render(<About /> ,document.getElementById('react-container'));