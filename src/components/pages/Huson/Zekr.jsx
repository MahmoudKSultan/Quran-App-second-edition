import React, { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import { ImPlay2 } from "react-icons/im";
import "./Zekr.css";
import Audio from "../../Audio/Audio";
function Zekr({
	match: {
		params: { id },
	},
}) {
	const [azkar, setAzkar] = useState([]);
	const [loader, setLoader] = useState(true);
	const [zekrName, setZekrName] = useState("");
	const [zekr, setZekr] = useState({});
	useEffect(() => {
		fetch(`http://www.mp3quran.net/api/husn/ar/${id}.json`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data[Object.keys(data)]);
				setLoader(false);
				setAzkar(data[Object.keys(data)]);
				setZekrName(Object.keys(data));
				setZekr();
			});
	}, []);

	return (
		<div className="zker">
			<div className="container">
				<div className="zekrTitle">
					{zekrName && (
						<h2>
							<span>{zekrName}</span>
							<span className="playIcon">
								<ImPlay2
									size="1.7rem"
									className="play"
									// onClick={() => handlePlaySura(sura, readerName)}
								/>
							</span>
						</h2>
					)}
				</div>
				<div className="zekrBody">
					{loader ? (
						<Loader />
					) : (
						azkar.map((zkr) => {
							return (
								<div className="zekrBox" key={zkr.ID}>
									{zkr.Text}
								</div>
							);
						})
					)}
				</div>
			</div>
			{/* <Audio src = {getSrc}/> */}
		</div>
	);
}

export default Zekr;
