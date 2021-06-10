import React, { useState, useEffect } from "react";
import "./FullQuran.css";
import Sura from "./Sura";
import Tafser from "./Tafser";
import Loader from "./../../Loader/Loader";
import Input from "./../../Input/Input";
import Quran from "./useQuranHook";
function FullQuran() {
	const { ayatInPage, tafseerAyat, page, loader, handleInputChange } = Quran();
	const { ayahs } = ayatInPage;
	return (
		<div className="fullquran">
			<div className="container">
				<Input
					type="text"
					name="quranPage"
					placeHolder="أدخل رقم الصفحة "
					handleInputChange={handleInputChange}
				/>
				{loader ? (
					<Loader />
				) : (
					<div className="book row">
						<div className="suraBox">
							<Sura ayat={ayahs} />
						</div>
						<div className="tafserbox">
							<Tafser tafseer={tafseerAyat} />
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default FullQuran;
