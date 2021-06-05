import React from "react";

const context = React.createContext();
const Consumer = context.Consumer;

class Provider extends React.Component {
	state = {
		readers: [],
		reader: {},
		favReaders: JSON.parse(localStorage.getItem("favReaders")) || [],
		playingSura: {},
		lastListenedSura: {},
		readersLoader: true,
		page: 1,
		readerPerPage: 12,
		paginatedReaders: [],
		searchedReader: [],
		search: "",
	};

	componentDidMount = () => {
		fetch(
			"https://qurani-api.herokuapp.com/api/reciters?fbclid=IwAR1z-Hd4ZHS8Wf967RNvusdLlDY4gcjJAPitUx3KgOd1YcIMiarRlmT3ei4"
		)
			.then((res) => res.json())
			.then((data) => {
				this.setState({ readers: [...data] });
				this.getPaginatedReader(this.state.page);
			})
			.then(() => this.setState({ readersLoader: false }));
	};

	handleInputChange = (event) => {
		// const { readers, search } = this.state;
		let value = event.target.value;
		this.setState({ search: value });
		// let searchedreaders = readers.filter((reader) => {
		// 	if (search === "") return reader;
		// 	else if (reader.name.includes(search)) return reader;
		// });
		// this.setState({ searchedreaders });
		// this.getPaginatedReader(1);
		// let { paginatedReaders } = this.state;
		// let searchedReader = paginatedReaders.filter((reader) => {
		// 	if (value === "") {
		// 		return reader;
		// 	} else if (reader.name.includes(value)) return reader;
		// });
		// this.setState({ paginatedReaders: searchedReader });
		// // if (searchedReader) {
		// // 	this.setState({ paginatedReaders: [...searchedReader] });
		// // } else {
		// // 	this.setState({ paginatedReaders });
		// // }
		// console.log(paginatedReaders);
		// this.setState({ searchedReader });
	};

	getPaginatedReader = (page) => {
		const { readers, readerPerPage } = this.state;
		let startIndex = (page - 1) * readerPerPage;
		let endIndex = startIndex + readerPerPage;
		let paginatedReaders = readers.slice(startIndex, endIndex);
		this.setState({ paginatedReaders });
	};

	// reset the playing sura
	resetPlayedSura = () => this.setState({ playingSura: {} });

	// handle playing the sura when clicking on play icon
	handlePlaySura = (sura, readerName) => {
		this.setState({
			playingSura: sura,
			lastListenedSura: { readerName, name: sura.name },
		});
	};

	// when clicking on heart icon
	handleHeartClick = (event, id) => {
		console.log(id);
		event.stopPropagation();
		let { readers, favReaders } = this.state;
		// check if the reader exist in the favorits or not
		if (favReaders) {
			const isExist = favReaders.find((r) => r.id === id);
			if (isExist) return;
		}
		// if reader is not in favorits then add it
		const reader = readers.find((r) => r.id === id);
		favReaders = [...favReaders, reader];
		this.setFav(favReaders);
	};

	// deleteing a reader from favorit
	handleDeleteClick = (id) => {
		let { favReaders } = this.state;
		favReaders = favReaders.filter((reader) => reader.id !== id);
		this.setFav(favReaders);
	};
	setFav = (favReaders) => {
		this.setState({ favReaders });
		localStorage.setItem("favReaders", JSON.stringify(favReaders));
	};

	handleChangePage = (page) => {
		// this.getPaginatedReader(page);
		this.setState({ page });
	};
	render() {
		return (
			<context.Provider
				value={{
					...this.state,
					setReader: this.setReader,
					handlePlaySura: this.handlePlaySura,
					resetPlayedSura: this.resetPlayedSura,
					handleHeartClick: this.handleHeartClick,
					handleDeleteClick: this.handleDeleteClick,
					handleChangePage: this.handleChangePage,
					handleInputChange: this.handleInputChange,
				}}
			>
				{this.props.children}
			</context.Provider>
		);
	}
}

export { Provider, Consumer };
