import React, { Component } from "react";
import Header from "./HomePage/Header";
import HomeContent from "./HomePage/HomeContent";
import Footer from "./HomePage/Footer";

import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<HomeContent />
				<Footer />
			</div>
		);
	}
}

export default App;
