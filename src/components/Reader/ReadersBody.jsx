import React from "react";
import SingleReader from "./SingleReader";
import Loader from "../Loader/Loader";
import "./ReadersBody.css";
function ReadersBody({
	readers,
	setReader,
	handleHeartClick,
	history,
	readersLoader,
	resetPlayedSura,
	favReaders,
}) {
	return (
		<div className="readersBody">
			{readers.map((reader) => {
				return (
					<SingleReader
						key={reader.id}
						reader={reader}
						onClick={() => setReader(reader.id)}
						handleHeartClick={handleHeartClick}
						history={history}
						resetPlayedSura={resetPlayedSura}
						favReaders={favReaders}
					/>
				);
			})}
		</div>
	);
}

export default ReadersBody;
