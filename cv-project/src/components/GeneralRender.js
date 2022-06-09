import React, { Component } from "react";

class GeneralRender extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="flex-column-container flex-centered">
				<h1>{this.props.name}</h1>
				<p>
					{this.props.phone} &nbsp;|&nbsp; {this.props.email}
				</p>
				<p>{this.props.address}</p>
			</div>
		);
	}
}

export default GeneralRender;
