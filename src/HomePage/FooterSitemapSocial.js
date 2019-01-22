import React, { Component } from "react";

import "../App.css";

class FooterSitemapSocial extends Component {
	render() {
		return (
			<div className="sitemapSocial">
				<div className="sitemap">
					<a href="#" className="footerMenu">
						Home
					</a>
					<a href="#" className="footerMenu">
						Worship Service
					</a>

					<a href="#" className="footerMenu">
						Events
					</a>
					<a href="#" className="footerMenu">
						Become a Member
					</a>
					<a href="#" className="footerMenu">
						Prayer Request
					</a>
					<a href="#" className="footerMenu">
						Donations
					</a>
					<a href="#" className="footerMenu">
						Contact
					</a>
				</div>
				<div className="socialMedia">
					<i class="fab fa-facebook-square" />
					<i class="fab fa-instagram" />
					<i class="fab fa-youtube-square" />
				</div>
			</div>
		);
	}
}

export default FooterSitemapSocial;
