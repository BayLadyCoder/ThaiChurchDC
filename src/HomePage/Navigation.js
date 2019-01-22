import React, { Component } from "react";

// import "./App.css";

class Navigation extends Component {
	render() {
		return (
			<div className="navigationBar">
				<a href="#1" className="navLogo navBtn">
					TCCDC{" "}
				</a>{" "}
				<div class="navGroup">
					<a href="#1" className="navHome navBtn">
						Home{" "}
					</a>{" "}
					<a href="#1" className="navAbout navBtn">
						About{" "}
					</a>{" "}
					<a href="#1" className="navEvents navBtn">
						Events{" "}
					</a>{" "}
					<a href="#1" className="navTestimonials navBtn">
						Testimonials{" "}
					</a>{" "}
					<a href="#1" className="navContact navBtn">
						Contact{" "}
					</a>{" "}
				</div>{" "}
			</div>
		);
	}
}

export default Navigation;
