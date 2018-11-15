import React, { Component } from "react";

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div className="footerMenuContainer">
					<div className="footerSitemap">
						<a href="#" className="footerMenu">
							Home
						</a>
						<a href="#" className="footerMenu">
							Contact
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
							Worship Service
						</a>
					</div>
					<div className="footerSocialMedias">
						<div>Connect Facebook Instagram Youtube</div>
						<div>Hear from us ... SIGN UP</div>
					</div>
					<div className="footerContact1">
						<div>Thai Church DC Location:</div>
						<div>
							Phone
							<br /> Email
						</div>
					</div>
				</div>
				<div className="footerCopyright">
					<div>&copy; Thai Christian Church Washington DC 2017</div>

					<div className="byBay">Website by Bay</div>
				</div>
			</div>
		);
	}
}

export default Footer;
