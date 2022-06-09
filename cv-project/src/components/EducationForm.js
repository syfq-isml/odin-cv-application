import React, { Component } from "react";

class EducationForm extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="form-container">
				<fieldset>
					<legend>Education</legend>
					<label htmlFor="full-name">Name of Institution</label>
					<input id="full-name"></input>
					<label htmlFor="email">Course Of Study</label>
					<input id="email"></input>
					<label htmlFor="phone-number">Duration Of Study</label>
					<div className="flex-row-container">
						<input placeholder="Start Year"></input>
						<p> - </p>
						<input placeholder="End Year"></input>
					</div>
					<label>Key Achievements (if any)</label>
					<textarea></textarea>
				</fieldset>
			</div>
		);
	}
}

export default EducationForm;
