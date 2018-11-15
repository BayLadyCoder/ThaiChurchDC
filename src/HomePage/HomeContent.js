import React, { Component } from "react";

import "../App.css";

class HomeContent extends Component {
	render() {
		return (
			<div className="homeContent">
				<h1> Thai Christian Church Washington DC </h1>{" "}
				<p className="content">
					Thai Christian Church Washington DC(TCCDC), is the church for our
					family to come and enjoy our blessing time from God our father.Our
					vision is“ Building God’ s family in the DC area“.We welcome everybody
					to our family, because we are God’ s children.He loves us and he has
					prepares a way before us through His Son, Jesus Christ, we will
					rejoice happiness in this mortal life and be ready for the day to
					return to our Heavenly Father’ s presence as eternal families for
					those who have faith in Jesus Christ.{" "}
				</p>{" "}
				<img
					className="collectionImg"
					src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/13007138_937271276387267_3526701871251750726_n.jpg?_nc_cat=110&_nc_ht=scontent-lga3-1.xx&oh=7245efe41d2bb2e70d28b1e9f3c5aa8b&oe=5C72CB2B"
					alt="collection"
				/>
				<h2> จุดมุ่งหมายของคริสตจักรไทยวอชิงตันดีซี (Mission Statement) </h2>
				<p className="content">
					1. สรรเสริญและถวายเกียรติพระเจ้า (Praise and glorify God) <br />
					2. สั่งสอนและสร้างคนให้เป็นสาวกของพระเยซูคริสต์ (Preparing and
					equipping Christ’ s disciples) <br />
					3. ส่งเสริมให้ทุกคนปฏิบัติตามพระมหาบัญชาขององค์พระเยซูคริสต์
					ซึ่งได้บันทึกไว้ <br />
					ในพระกิตติคุณมัทธิว 28: 19 - 20 (Promote the obedience of Jesus
					command in Matthew 28: 19 - 20){" "}
				</p>{" "}
			</div>
		);
	}
}

export default HomeContent;
