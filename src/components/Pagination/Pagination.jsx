import React from "react";
import "./Pagination.css";
function Pagination({ totalNumber, readerPerPage, handleChangePage, page }) {
	let paginationNumber = Math.ceil(totalNumber / readerPerPage);
	let array = new Array(paginationNumber);
	array = [...array.keys()];
	console.log(totalNumber);
	console.log(paginationNumber);
	if (totalNumber === 0) {
		return <h3 style={{ color: "red" }}>لا يوجد نتيجة للبحث</h3>;
	}
	if (readerPerPage >= totalNumber) return null;
	return (
		<div className="pagination">
			<div className="cont">
				{array.map((obj) => {
					let pageNumber = obj + 1;
					return (
						<span
							className={page === pageNumber ? "pag active" : "pag"}
							key={obj}
							onClick={() => handleChangePage(pageNumber)}
						>
							{pageNumber}
						</span>
					);
				})}
			</div>
		</div>
	);
}

export default Pagination;
