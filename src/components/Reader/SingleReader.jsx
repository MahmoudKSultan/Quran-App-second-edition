import React from "react";
import "./SingleReader.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
function SingleReader({
	reader,
	handleHeartClick,
	history,
	resetPlayedSura,
	favReaders,
}) {
	return (
		<div
			className="singleReader"
			onClick={() => {
				history.push(`/reader/${reader.id}`);
				resetPlayedSura();
			}}
		>
			<div className="box">
				<div className="names">
					<h3>{reader.name}</h3>
					<h5>{reader.rewaya}</h5>
				</div>
				<div className="icon">
					{favReaders.find((r) => r.id === reader.id) ? (
						<AiFillHeart size="2rem" className="heart" />
					) : (
						<AiOutlineHeart
							size="2rem"
							className="heart"
							onClick={(event) => handleHeartClick(event, reader.id)}
						/>
					)}
					<h5> {reader.count} سورة</h5>
				</div>
			</div>
		</div>
	);
}

export default SingleReader;
