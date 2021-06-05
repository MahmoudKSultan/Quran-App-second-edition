import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import SurasBody from "./components/Reader/SurasBody";
import Favorites from "./components/pages/favorites/favorites";
import Huson from "./components/pages/Huson/Huson";
import Zekr from "./components/pages/Huson/Zekr";
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
			</Switch>
		</div>
	);
}

export default App;
