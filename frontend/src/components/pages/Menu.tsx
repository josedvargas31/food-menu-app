import { useEffect, useState } from "react";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import axiosClient from "../client/axiosClient";
import { MenuItem } from "../models/MenuModel";

function Menu() {
	const [menus, setMenus] = useState<MenuItem[]>([]);
	const navigate = useNavigate();

	// lista los datos de mi api
	useEffect(() => {
		const getMenus = async () => {
			await axiosClient.get("/api/listar").then((response) => {
				if (response.status == 200) {
					setMenus(response.data);
					// console.log(response.data);
				}
			});
		};
		getMenus();
	});
	return (
		<>
			<Header />
			<div className="flex justify-center pb-10">
				<button
					className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white rounded-lg px-3 py-2 m-2"
					onClick={() => navigate("register")}
				>
					Registrar menu
				</button>
			</div>
			<div className="flex justify-center rounded-xl px-6 xl:px-60 lg:px-40 md:px-16 sm:px-10">
				<div className="overflow-hidden rounded-lg shadow-lg border px-4 py-4">
					<div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
						{menus.map((m) => (
							<div
								key={m.id_menu}
								className="bg-white rounded-lg shadow-md px-4 py-2 cursor-pointer"
							>
								<div className="text-neutral-700 font-semibold pb-4">
									<span className="font-bold text-slate-950 text-xl underline underline-offset-4">
										Minuta {m.id_menu} 👀
									</span>
								</div>

								<div className="text-neutral-700 font-semibold pb-2">
									<strong>Menu:</strong>
									<span className="pl-2 font-normal text-slate-600">
										{m.menu}
									</span>
								</div>

								<div className="text-neutral-700 font-semibold pb-2">
									<strong>Bebida:</strong>
									<span className="pl-2 font-normal text-slate-600">
										{m.bebida}
									</span>
								</div>
								<div className="text-neutral-700 font-semibold pb-2">
									<strong>Día:</strong>
									<span className="pl-2 font-normal text-slate-600">
										{m.dia}
									</span>
								</div>
								<div className="flex justify-between">
									<button type="button" className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white rounded-lg px-2 py-2 m-2" onClick={() => navigate(`update/${m.id_menu}`)}>Editar</button>
									<button type="button" className="transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 hover:bg-amber-600 duration-300 text-white rounded-lg px-2 py-2 m-2">Eliminar</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Menu;
