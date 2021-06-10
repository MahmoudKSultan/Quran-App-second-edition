import React from "react";
import "./Tafser.css";
function Tafser({ tafseer }) {
	const tafseerReversed = [...tafseer].reverse();
	return (
		<div>
			{tafseerReversed.map((obj) => {
				return (
					<p key={obj.ayah_number} style={{ marginBottom: "15px" }}>
						{" "}
						{obj.ayah_number}_ {obj.text}
					</p>
				);
			})}
		</div>
	);
}

export default Tafser;
