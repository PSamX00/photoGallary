import logo from "./logo.svg";
import "./App.css";
import { Body } from "./components/Body";
import { Navbar } from "./components/Navbar";
import { Category } from "./components/Category";
import ImageState from "./context/contextState";

function App() {
	return (
		<ImageState>
			<div className='App'>
				<Navbar />
				<Category />
				<Body />
			</div>
		</ImageState>
	);
}

export default App;
