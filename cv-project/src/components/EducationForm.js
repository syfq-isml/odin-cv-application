import React, { Component } from "react";

import uniqid from "uniqid";

class EducationForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: uniqid(),
			name: "",
			course: "",
			start: "",
			end: "",
			achievements: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.sendEducationData = this.handleChange.bind(this);
	}

	handleChange(e) {
		let prop = e.target.getAttribute("data-item");
		this.setState({
			[prop]: e.target.value,
		});
	}

	sendEducationData() {
		this.setState({
			arr: this.state.arr.concat,
		});
		// this.props.getEducationData(this.state);
		this.setState({
			id: uniqid(),
		});
	}

	render() {
		return (
			<div className="form-container">
				<fieldset>
					<legend>Education</legend>
					<label htmlFor="school-name">Name of Institution</label>
					<input
						id="school-name"
						value={this.state.name}
						data-item="name"
						onChange={this.handleChange}
					></input>
					<label htmlFor="school-course">Course Of Study</label>
					<input
						id="school-course"
						value={this.state.course}
						data-item="course"
						onChange={this.handleChange}
					></input>
					<label htmlFor="school-duration">Duration Of Study</label>
					<div className="flex-row-container">
						<input
							placeholder="Start Year"
							value={this.state.start}
							data-item="start"
							onChange={this.handleChange}
						></input>
						<p> - </p>
						<input
							placeholder="End Year"
							value={this.state.end}
							data-item="end"
							onChange={this.handleChange}
						></input>
					</div>
					<label htmlFor="school-achievements">Key Achievements (if any)</label>
					<textarea
						id="school-achievements"
						value={this.state.achievements}
						data-item="achievements"
						onChange={this.handleChange}
					></textarea>
				</fieldset>
			</div>
		);
	}
}

export default EducationForm;
