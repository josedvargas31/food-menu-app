import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/pages/Menu";
import RegisterMenu from "./components/pages/RegisterMenu";
import UpdateMenu from "./components/pages/UpdateMenu";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Menu />} />
					<Route path="/register" element={<RegisterMenu />} />
					<Route path="/update/:id_menu" element={<UpdateMenu />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
