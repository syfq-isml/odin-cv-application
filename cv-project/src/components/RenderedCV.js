import React, { Component } from "react";
import GeneralRender from "./GeneralRender";
import EducationRender from "./EducationRender";
import WorkRender from "./WorkRender";

class RenderedCV extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="flex-column-container" id="cv-div">
				<GeneralRender
					name="Syafiq Ismail"
					email="ok@gmail.com"
					phone="+65 77776666"
					address="111 Yishun St 1"
				/>
				<EducationRender
					institution="Nanyang University, Singapore"
					course="BSc. Mechanical Engineering"
					desc="CGPA: 5.0"
					start="2017"
					end="2021"
				/>
				<WorkRender
					company="Google Inc."
					title="Web Developer"
					desc="Designed multiple websites"
					start="2021"
					end="Present"
				/>
			</div>
		);
	}
}

export default RenderedCV;
