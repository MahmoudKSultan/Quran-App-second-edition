import React, { useEffect, useState } from "react";
import "./Ayat.css";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";
function Ayat({
	match: {
		params: { id, suraname },
	},
}) {
	const [Ayat, setAyat] = useState([]);
	const [loader, setLoader] = useState(true);
	useEffect(() => {
		fetch(`http://api.alquran.cloud/v1/surah/${id}/ar.alafasy`)
			.then((res) => res.json())
			.then((res) => {
				setAyat(res.data.ayahs);
				setLoader(false);
			});
	}, []);
	console.log(Ayat);
	let ayahNumber = 0;

	return (
		<div className="ayat">
			<div className="container">
				<div className="suraBody">
					{loader ? (
						<Loader />
					) : (
						<div className="suraInfo">
							<div className="suraTitle">
								<h2>سورة {suraname}</h2>
							</div>
							{Ayat.map(
								(ayah, index) => (
									(ayahNumber = index + 1),
									(
										<Link
											to={`/tafser/${id}/${ayahNumber}`}
											key={ayah.number}
											className="ayaAnc"
										>
											<span>
												{ayah.text} {"\u00A0"} ﴿{ayahNumber}﴾ {"\u00A0"}
											</span>
										</Link>
									)
								)
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Ayat;
