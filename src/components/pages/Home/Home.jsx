import React from "react";
import { Consumer } from "../../../context";
import ReadersBody from "../../Reader/ReadersBody";
import "./Home.css";
import Sidebar from "../../Sidebar/Sidebar";
import Pagination from "../../Pagination/Pagination";
import Input from "../../Input/Input";
import getPaginatedReaders from "../../../paginationFunctionality";
import Loader from "../../Loader/Loader";
function Home({ history }) {
	return (
		<div className="home">
			<Consumer>
				{({
					page,
					readers,
					setReader,
					favReaders,
					readerSearch,
					readersLoader,
					readerPerPage,
					resetPlayedSura,
					lastListenedSura,
					handleHeartClick,
					handleDeleteClick,
					handleChangePage,
					handleInputChange,
				}) => {
					let searchedReaders = readers.filter((reader) => {
						if (readerSearch === "") return reader;
						else if (
							reader.name.includes(readerSearch) ||
							reader.rewaya.includes(readerSearch)
						)
							return reader;
					});
					return (
						<div className="container">
							<div className="row">
								<div className="right">
									{readersLoader ? (
										<Loader />
									) : (
										<React.Fragment>
											<Input
												type="text"
												value={readerSearch}
												placeHolder=" أدخل اسم القارئ/ الرواية"
												name="readerSearch"
												handleInputChange={handleInputChange}
											/>
											<div className="background">
												<ReadersBody
													readers={getPaginatedReaders(
														searchedReaders || readers,
														page,
														readerPerPage
													)}
													setReader={setReader}
													handleHeartClick={handleHeartClick}
													history={history}
													resetPlayedSura={resetPlayedSura}
													favReaders={favReaders}
												/>
												<Pagination
													totalNumber={
														readerSearch
															? searchedReaders
																? searchedReaders.length
																: 0
															: readers.length
													}
													readerPerPage={readerPerPage}
													page={page}
													handleChangePage={handleChangePage}
													placeholder="أبحث عن القارئ أو صاحب الرواية"
												/>
											</div>
										</React.Fragment>
									)}
								</div>
								<div className="left">
									<Sidebar
										lastSura={lastListenedSura}
										favReaders={favReaders}
										handleDeleteClick={handleDeleteClick}
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

export default Home;
