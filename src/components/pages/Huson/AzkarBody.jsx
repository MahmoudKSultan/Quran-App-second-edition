import React from "react";
import { Link } from "react-router-dom";
import "./Huson.css";
import Loader from "./../../Loader/Loader";
function AzkarBody({ azkar, loader }) {
	return (
		<React.Fragment>
			{loader ? (
				<Loader />
			) : (
				<div className="azkarContent ">
					<div className="title">
						<h1>أذكار حصن المسلم</h1>
					</div>
					<div className="row">
						{azkar.map((zkr) => {
							return (
								<Link to={`/huson/${zkr.ID}`} className="anc">
									<div className="zkrBox" key={zkr.ID}>
										<div className="title">{zkr.Title}</div>
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			)}
		</React.Fragment>
	);
}

export default AzkarBody;
