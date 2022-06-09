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
			general: [],
			education: [],
			work: [],
		};
	}

	render() {
		return (
			<div id="overall-wrapper">
				<section id="form-section">
					<form>
						<GeneralForm />
						<EducationForm />
						<WorkForm />
					</form>
					<button id="generate-btn" type="submit">
						Generate CV
					</button>
				</section>
				<section id="render-section">
					<RenderedCV />
				</section>
			</div>
		);
	}
}

export default App;
