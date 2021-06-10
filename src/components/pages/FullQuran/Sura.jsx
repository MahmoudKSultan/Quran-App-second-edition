import React from "react";
import "./Sura.css";
function Sura({ ayat }) {
	ayat = [...ayat];
	let ayahs = [...ayat];
	// console.log(...ayahs);
	return (
		<div className="fullQ">
			{ayahs.map((aya, index) => {
				return (
					<span
						key={aya.numberInSurah}
						style={{
							display: aya.text.includes(
								"بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ"
							)
								? ayahs.indexOf(aya) === 0
									? "block"
									: "inline-block"
								: "inline-block",
						}}
					>
						{" "}
						{aya.text} ﴿ {aya.numberInSurah} ﴾{" "}
					</span>
				);
			})}
		</div>
	);
}
// ﴿﴾
export default Sura;
// if (
// 	aya.text.includes("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ") &&
// 	index === 0
// ) {
// 	return (
// 		<span>
// 			<br /> {aya.text} ﴿ {aya.numberInSurah} ﴾{" "}
// 		</span>
// 	);
// }
// return `${" "}
// 	${aya.text} ﴿ ${aya.numberInSurah} ﴾${" "}`;
