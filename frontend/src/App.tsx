import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/pages/Menu";
import RegisterMenu from "./components/pages/RegisterMenu";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Menu />} />
					<Route path="Register" element={<RegisterMenu />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
