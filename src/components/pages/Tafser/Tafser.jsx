import React, { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import "./Tafser.css";
function Tafser({
	match: {
		params: { id, suraNumber },
	},
}) {
	// id is for ayah

	const [tafser, setTafser] = useState({});
	const [ayah, setAyah] = useState({});
	const [loader, setLoader] = useState(true);
	useEffect(() => {
		fetch(`http://api.quran-tafseer.com/tafseer/1/${suraNumber}/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setTafser(data);
			});
	}, []);

	useEffect(() => {
		tafser.ayah_url &&
			fetch(`http://api.quran-tafseer.com/${tafser.ayah_url}`)
				.then((res) => res.json())
				.then((data) => {
					setAyah(data);
					setLoader(false);
				});
	}, [tafser]);

	console.log(tafser);
	console.log(ayah);
	return (
		<div className="tafser">
			{loader ? (
				<Loader />
			) : (
				<div className="container">
					<div className="row">
						<h3>
							آية رقم {ayah.ayah_number} من سورة {ayah.sura_name}
						</h3>
						<h3>{tafser.tafseer_name}</h3>
					</div>

					<div className="suraText">
						<h3>السورة : </h3>
						<h4 className="suraTextBox">{ayah.text}</h4>
					</div>
					<hr />
					<div className="suraTafser">
						<h3>التفسير : </h3>
						<h4 className="suraTextBox">{tafser.text}</h4>
					</div>
				</div>
			)}
		</div>
	);
}

export default Tafser;
