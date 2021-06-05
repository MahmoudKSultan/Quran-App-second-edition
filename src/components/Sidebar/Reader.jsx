import React from "react";
import { MdCancel } from "react-icons/md";
import "./Sidebar.css";
function Reader({ reader, handleDeleteClick }) {
	return (
		<div className="wrapper">
			<div className="favReader">
				<div className="info">
					<h3>{reader.name}</h3>
					<h5>{reader.rewaya}</h5>
				</div>
				<div className="icon" onClick={() => handleDeleteClick(reader.id)}>
					<MdCancel size="3rem" />
				</div>
			</div>
		</div>
	);
}

export default Reader;
