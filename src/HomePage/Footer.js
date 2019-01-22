import React, { Component } from "react";
import FooterSitemapSocial from "./FooterSitemapSocial";

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div className="footerMenuContainer">
					<FooterSitemapSocial />
					<div className="signUp">
						<div>Hear from us</div>
						<form className="signUpForm">
							<input type="text" name="email" value="email" />
							<input type="submit" value="sign up" />
						</form>
					</div>
				</div>

				<div className="footerBottom">
					<div className="footerContact">
						<div>3910 Lorcom Lane Arlington, Virginia 22207</div>
						<div>
							Phone: 111 - 222 - 3333 <br /> Email: email @email.com
						</div>
					</div>
					<div className="copyright">
						&copy; Thai Christian Church Washington DC 2019 <br />
						<span className="byBay"> Website by Bay </span>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
