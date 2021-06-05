import React from "react";
import "./Audio.css";
function Audio({ src }) {
	return (
		<div className="audio">
			<audio controls src={src} autoPlay>
				Your browser does not support the audio tag.
			</audio>
		</div>
	);
}

export default Audio;
