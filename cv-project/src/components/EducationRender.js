import React, { Component } from "react";

class EducationRender extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="flex-column-container">
				<h1 className="cv-heading">Education</h1>
				{this.props.sendEducationDataSECOND.map((data) => {
					return (
						<div
							className="flex-row-container fl-jcsb cv-content"
							key={data.id}
						>
							<div>
								<h2>{data.institution}</h2>
								<p>{data.course}</p>
								<p>{data.achievements}</p>
							</div>
							<div>
								<p>
									{data.start} - {data.end}
								</p>
							</div>
						</div>
					);
				})}

				{/* <div className="flex-row-container fl-jcsb cv-content">
					<div>
						<h2>{this.props.institution}</h2>
						<p>{this.props.course}</p>
						<p>{this.props.desc}</p>
					</div>
					<div>
						<p>
							{this.props.start} - {this.props.end}
						</p>
					</div>
				</div> */}
			</div>
		);
	}
}

export default EducationRender;
