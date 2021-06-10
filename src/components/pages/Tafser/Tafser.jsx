import React, { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import "./Tafser.css";
import useTafserHook from "./useTafserHooks";
function Tafser({
	match: {
		params: { id, suraNumber },
	},
}) {
	// id is for ayah

	console.log(tafser);
	console.log(ayah);
	const { tafser, ayah, loader } = useTafserHook(id, suraNumber);
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
