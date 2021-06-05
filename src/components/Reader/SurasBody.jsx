import React, { useEffect, useState } from "react";
import { Consumer } from "../../context";
import Audio from "../Audio/Audio";
import Loader from "../Loader/Loader";
import SingleSura from "./SingleSura";
import "./SurasBody.css";
function SurasBody({
	match: {
		params: { id },
	},
}) {
	const [suras, setSuras] = useState([]);
	const [reader, setReader] = useState({});
	const [surasLoader, setSurasLoader] = useState(true);
	useEffect(() => {
		const fetchSuras = () => {
			fetch(`https://qurani-api.herokuapp.com/api/reciters/${id}`)
				.then((res) => res.json())
				.then((r) => {
					setSuras(r.surasData);
					setReader(r);
					setSurasLoader(false);
				});
		};
		fetchSuras();
	}, [id]);

	return (
		<Consumer>
			{(value) => {
				return (
					<div className="suras">
						{surasLoader ? (
							<Loader />
						) : (
							<div className="container">
								<h3 className="readerName">{reader.name}</h3>
								<div className="row">
									<div className="surasBody">
										{suras.map((sura, index) => {
											return (
												<SingleSura
													sura={sura}
													key={sura.id}
													number={index + 1}
													handlePlaySura={value.handlePlaySura}
													readerName={reader.name}
												/>
											);
										})}
									</div>
									<div className="sidebar"></div>
								</div>
								<Audio src={value.playingSura.url} />
							</div>
						)}
					</div>
				);
			}}
		</Consumer>
	);
}

export default SurasBody;
