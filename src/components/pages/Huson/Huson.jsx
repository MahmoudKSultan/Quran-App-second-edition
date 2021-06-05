import React, { useEffect, useState } from "react";

import "./Huson.css";
import AzkarBody from "./AzkarBody";
function Huson() {
	const [azkar, setAzkar] = useState([]);
	const [loader, setLoader] = useState(true);
	useEffect(() => {
		fetch("http://mp3quran.net/api/husn/ar/husn_ar.json")
			.then((res) => res.json())
			.then((data) => {
				setAzkar(data["العربية"]);
				setLoader(false);
			});
	}, []);
	console.log(azkar);
	return (
		<div className="Huson">
			<div className="container">
				<AzkarBody azkar={azkar} loader={loader} />
			</div>
		</div>
	);
}

export default Huson;
