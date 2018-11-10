import React, { Component } from "react";

import "../App.css";

class HomeContent extends Component {
	render() {
		return (
			<div className="homeContent">
				<h1> Thai Christian Church DC </h1>
				<p className="content">
					Thai Christian Church Washington DC(TCCDC), is the church for our
					family to come and enjoy our blessing time from God our father. Our
					vision is “Building God’s family in the DC area“. We welcome everybody
					to our family, because we are God’s children. He loves us and he has
					prepares a way before us through His Son, Jesus Christ, we will
					rejoice happiness in this mortal life and be ready for the day to
					return to our Heavenly Father’s presence as eternal families for those
					who have faith in Jesus Christ.
				</p>
				<img
					className="collectionImg"
					src="https://thaichristianchurchdc.files.wordpress.com/2018/02/fe934912-6ffd-4714-a04b-8ecc1296c883_profile.jpg?w=455&h=341"
					alt="collection"
				/>
			</div>
		);
	}
}

export default HomeContent;
