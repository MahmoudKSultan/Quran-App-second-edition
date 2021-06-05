import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import "./singleFav.css";
function SingleFavorite({
	reader,
	handleDeleteClick,
	history,
	resetPlayedSura,
}) {
	return (
		<div
			className="favBox row"
			onClick={() => {
				history.push(`/reader/${reader.id}`);
				resetPlayedSura();
			}}
		>
			<div className="readertitle">{reader.name}</div>
			<div
				onClick={(event) => {
					event.stopPropagation();
					handleDeleteClick(reader.id);
				}}
			>
				<FaRegTrashAlt className="trashIcon" />
			</div>
		</div>
	);
}

export default SingleFavorite;
