import React from "react";
import { FcHeadset } from "react-icons/fc";
import "./Sidebar.css";
import Reader from "./Reader";

function Sidebar({ lastSura }) {
	console.log(lastSura);
	return (
		<div className="sidebar">
			<img src="quran_img.svg" alt="" />
			<div className="lastBox">
				<h3 className="title gr">آخر ما استمعت إليه</h3>
				<div className="row" style={{ alignItems: "center" }}>
					<div className="lastSura">
						<h4 style={{ color: "green" }}>
							{lastSura.name ? (
								<span>سورة {lastSura.name}</span>
							) : (
								"لم تستمع لسورة  بعد"
							)}{" "}
						</h4>
						<h5>{lastSura.readerName}</h5>
					</div>
					<div className="icon">
						<FcHeadset size="3rem" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
