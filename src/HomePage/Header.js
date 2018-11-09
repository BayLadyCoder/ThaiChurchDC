import React, { Component } from "react";
import Navigation from "./Navigation";
import WelcomeText from "./WelcomeText";

import "../App.css";

class Header extends Component {
	render() {
		return (
			<section className="header">
				<Navigation />
				<WelcomeText />
			</section>
		);
	}
}

export default Header;
