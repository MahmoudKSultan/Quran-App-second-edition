import "./App.css";
import Home from "./components/pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import SurasBody from "./components/Reader/SurasBody";
import Favorites from "./components/pages/favorites/favorites";
import Huson from "./components/pages/Huson/Huson";
import Zekr from "./components/pages/Huson/Zekr";
import Quran from "./components/pages/QuranText/Quran";
import Ayat from "./components/pages/QuranText/Ayat";
import Tafser from "./components/pages/Tafser/Tafser";
import FullQuran from "./components/pages/FullQuran/FullQuran";
function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route path="/" render={(props) => <Home {...props} />} exact />
				<Route path="/reader/:id" component={SurasBody} />
				<Route path="/favorites" render={(props) => <Favorites {...props} />} />
				<Route path="/huson" component={Huson} exact />
				<Route path="/huson/:id" component={Zekr} />
				<Route path="/qurantext" component={Quran} exact />
				<Route path="/qurantext/:suraname/:id" component={Ayat} />
				<Route path="/tafser/:suraNumber/:id" component={Tafser} exact />
				<Route path="/fullquran" component={FullQuran} exact />
			</Switch>
		</div>
	);
}

export default App;
