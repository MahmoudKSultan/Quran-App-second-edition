import React, { useEffect, useState } from "react";

function useTafserHook(id, suraNumber) {
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
	return { tafser, ayah, loader };
}

export default useTafserHook;
