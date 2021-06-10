import React from "react";
import { Consumer } from "../../../context";
import "./favorites.css";
import Sidebar from "./../../Sidebar/Sidebar";
import FavoritesBody from "./favoritesBody";
function Favorites({ history }) {
	return (
		<div className="favorites">
			<Consumer>
				{(value) => {
					return (
						<div className="container">
							<div className="row">
								<div className="right">
									<div className="content">
										<div className="overlay"></div>
										<div className="favs">
											<Consumer>
												{(value) => {
													return (
														<React.Fragment>
															<div className="readers">
																<FavoritesBody
																	title={"القراء المفضلين"}
																	favReaders={value.favReaders}
																	handleDeleteClick={value.handleDeleteClick}
																	history={history}
																	resetPlayedSura={value.resetPlayedSura}
																/>
															</div>
														</React.Fragment>
													);
												}}
											</Consumer>
										</div>
									</div>
								</div>
								<div className="left">
									<Sidebar
										lastSura={value.lastListenedSura}
										favReaders={value.favReaders}
										handleDeleteClick={value.handleDeleteClick}
									/>
								</div>
							</div>
						</div>
					);
				}}
			</Consumer>
		</div>
	);
}

export default Favorites;
