import React from "react";
import { Link } from "react-router-dom";
import "./Huson.css";
import Loader from "./../../Loader/Loader";
import Input from "./../../Input/Input";
import { Consumer } from "../../../context";
function AzkarBody({ azkar, loader }) {
	return (
		<React.Fragment>
			{loader ? (
				<Loader />
			) : (
				<Consumer>
					{({ search, handleInputChange, zekrSearch }) => {
						return (
							<div className="azkarContent ">
								<div className="header">
									<div className="input">
										<Input
											type="text"
											value={zekrSearch}
											name="zekrSearch"
											placeHolder="ابحث عن ذكر معين"
											handleInputChange={handleInputChange}
										/>
									</div>
									<div className="hesnTitle">
										<h1>أذكار حصن المسلم</h1>
									</div>
								</div>
								<div className="row">
									{azkar
										.filter((zkr) => {
											if (zekrSearch === "") return zkr;
											else if (zkr.Title.includes(zekrSearch)) return zkr;
										})
										.map((zkr) => {
											return (
												<Link
													to={`/huson/${zkr.ID}`}
													className="anc"
													key={zkr.ID}
												>
													<div className="zkrBox">
														<div className="title">{zkr.Title}</div>
													</div>
												</Link>
											);
										})}
								</div>
							</div>
						);
					}}
				</Consumer>
			)}
		</React.Fragment>
	);
}

export default AzkarBody;
