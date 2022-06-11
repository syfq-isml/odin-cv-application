import React, { Component } from "react";
import "./styles/normalize.css";
import "./styles/styles.css";

import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";
import WorkForm from "./components/WorkForm";
import RenderedCV from "./components/RenderedCV";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			general: {},
			education: [],
			work: [],
		};

		this.handleGeneral = this.handleGeneral.bind(this);
		this.handleEducation = this.handleEducation.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleGeneral(obj) {
		this.setState({
			general: obj,
		});
	}

	handleEducation(obj) {
		// this.setState({
		// 	education: this.state.education.concat(obj),
		// });
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	render() {
		return (
			<div id="overall-wrapper">
				<section id="form-section">
					<form onSubmit={this.handleSubmit}>
						<GeneralForm getGeneralData={this.handleGeneral} />
						<EducationForm getEducationData={this.handleEducation} />
						<WorkForm />
					</form>
					<button id="generate-btn" type="submit">
						Generate CV
					</button>
				</section>
				<section id="render-section">
					<RenderedCV
						sendGeneralDataFIRST={this.state.general}
						sendEducationDataFIRST={this.state.education}
					/>
				</section>
			</div>
		);
	}
}

export default App;
