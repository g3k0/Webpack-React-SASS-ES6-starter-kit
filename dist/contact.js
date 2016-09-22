var React = require('react');
var ReactDOM = require('react-dom');

class Contacts extends React.Component {
	constructor(props) {
	    super(props);
	}
	
	render() {
		return( <div>
					Contacts
			    </div>		
		);
	}
}

ReactDOM.render(<Contacts /> ,document.getElementById('react-container'));