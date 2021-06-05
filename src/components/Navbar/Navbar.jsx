import React from "react";
// import Form from "../Form/Form";
import Navigate from "./Navigate";
import "./Navbar.css";
function Navbar() {
	return (
		<div className="nav">
			<div className="container">
				<div className="logo">
					<h1>قرآن</h1>
				</div>
				<Navigate />
				{/* <Form placeholder="ابحث" name="search" /> */}
			</div>
		</div>
	);
}

export default Navbar;
