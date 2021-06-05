import React from "react";

let getPaginatedReaders = (readers, page, readerPerPage) => {
	let startIndex = (page - 1) * readerPerPage;
	let endIndex = startIndex + readerPerPage;
	let paginatedReaders = readers.slice(startIndex, endIndex);
	return paginatedReaders;
};
export default getPaginatedReaders;
