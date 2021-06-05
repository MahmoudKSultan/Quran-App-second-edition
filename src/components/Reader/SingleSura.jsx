import React from "react";
import "./SingleSura.css";
import { ImPlay2 } from "react-icons/im";
function SingleSura({ sura, number, handlePlaySura, readerName }) {
	return (
		<div className="singleSura">
			<h3>
				{number}_ {sura.name}
			</h3>
			<ImPlay2
				size="1.7rem"
				className="play"
				onClick={() => handlePlaySura(sura, readerName)}
			/>
		</div>
	);
}

export default SingleSura;
