import React from "react";
import "./favoritesBody.css";
import SingleFavorite from "./singleFavorite";
function FavoritesBody({
	title,
	favReaders,
	history,
	handleDeleteClick,
	resetPlayedSura,
}) {
	return (
		<div className="favBody">
			<div className="favtitle">
				<span></span>
				<h4>{title}</h4>
			</div>
			<div className="favRow row ">
				{favReaders.map((reader) => {
					return (
						<SingleFavorite
							reader={reader}
							history={history}
							key={reader.id}
							handleDeleteClick={handleDeleteClick}
							resetPlayedSura={resetPlayedSura}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default FavoritesBody;
