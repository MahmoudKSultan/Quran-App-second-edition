import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";
import "./Quran.css";
import Input from "./../../Input/Input";
import { Consumer } from "../../../context";
function Quran() {
	const [suras, setSuras] = useState([]);
	const [loader, setLoader] = useState(true);
	useEffect(() => {
		fetch("http://api.quran-tafseer.com/quran/")
			.then((res) => res.json())
			.then((res) => {
				setSuras(res);
				setLoader(false);
			});
	}, []);
	return (
		<>
			{loader ? (
				<Loader />
			) : (
				<div className="quranText ">
					<Consumer>
						{({ suraSearchText, handleInputChange }) => {
							return (
								<div className="container">
									<Input
										type="search"
										value={suraSearchText}
										name="suraSearchText"
										placeHolder="ابحث عن سورة"
										handleInputChange={handleInputChange}
									/>
									<div className="swarBody">
										{suras
											.filter((sura) => {
												if (sura.name === "") return sura;
												else if (sura.name.includes(suraSearchText))
													return sura;
											})
											.map((sura) => {
												return (
													<Link
														to={`/qurantext/${sura.name.trim()}/${sura.index}`}
														className="sura"
														key={sura.index}
													>
														<div className="suraBox">
															<h4>سورة {sura.name} </h4>
														</div>
													</Link>
												);
											})}
									</div>
								</div>
							);
						}}
					</Consumer>
				</div>
			)}
		</>
	);
}

export default Quran;
