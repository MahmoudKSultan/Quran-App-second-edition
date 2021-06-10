import { useState, useEffect } from "react";
let Quran = () => {
	const [ayatInPage, setAyatInPage] = useState({});
	const [tafseerAyat, setTafseerAyat] = useState([]);
	const [page, setPage] = useState(1);
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		fetch(`http://api.alquran.cloud/v1/page/${page}/quran-uthmani`)
			.then((res) => res.json())
			.then((res) => {
				setAyatInPage(res.data);
				const suraNumber =
					res.data.surahs[Object.keys(res.data.surahs)[0]].number;
				const firstIndex = 0;
				const lastIndex = res.data.ayahs.length + 1;
				fetch(
					`http://api.quran-tafseer.com/tafseer/1/${suraNumber}/${firstIndex}/${lastIndex}`
				)
					.then((res) => res.json())
					.then((data) => setTafseerAyat(data));
				setLoader(false);
			});
	}, [page]);

	let handleInputChange = (event, name) => {
		let value = event.target.value;
		if (value === "") setPage(1);
		else setPage(value);
	};

	return { ayatInPage, tafseerAyat, page, loader, handleInputChange };
};

export default Quran;
// ﴿﴾
