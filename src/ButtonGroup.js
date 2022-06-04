import React from "react";

class ButtonGroup extends React.Component {
	render() {
	return (<div>
		<button onClick={this.props.handler} value="React">React</button>
		<button onClick={this.props.handler} value="React Redux">React Redux</button>
		<button onClick={this.props.handler} value="React Native">React Native</button>
		</div>);
	}
}

export default ButtonGroup;