import { useEffect, useState } from "react";
import Header from "../Header";
import axiosClient from "../client/axiosClient";
import { MenuItem } from "../models/MenuModel";

function Menu() {
	const [menus, setMenus] = useState<MenuItem[]>([]);

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
			<div className="flex justify-center rounded-xl cursor-pointer px-6 xl:px-60 lg:px-40 md:px-16 sm:px-10">
				<div className="overflow-hidden rounded-lg shadow-lg border px-4 py-4">
					<div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
						{menus.map((m) => (
							<div
								key={m.id_menu}
								className="w- bg-white rounded-lg shadow-md px-4 py-2"
							>
								{/* Aquí cada menú está en su propio contenedor */}
								<div className="text-neutral-700 font-semibold pb-2">
									<strong>Id:</strong>
									<span className="pl-2 font-normal text-slate-600">
										{m.id_menu}
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
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Menu;
