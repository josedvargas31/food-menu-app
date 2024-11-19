import { useEffect, useState } from "react";
import Header from "../Header";
import axiosClient from "../client/axiosClient";
import { MenuItem } from "../models/MenuModel";

function Menu() {
	const [menus, setMenus] = useState<MenuItem[]>([]);

	useEffect(() => {
		const getMenus = async () => {
			await axiosClient.get("/api/listar").then((response) => {
				if (response.status == 200) {
					setMenus(response.data);
					console.log(response.data);
				}
			});
		};
		getMenus();
	});
	return (
		<>
			<div className="">
				<Header />
				<h1 className=""> Hola, soy la vista que tendra todo</h1>

				<div className="container flex justify-center rounded-xl shadow-2xl cursor-pointer">
					<div className="overflow-hidden rounded-lg shadow-lg border dark:bg-zinc-900 p-6">
						<div className="px-6">
							<ul>
								{menus.map((m) => (
									<li key={m.id_menu} className="text-zinc-300 list-disc">
										<li className="pb-2 dark:text-zinc-300 text-neutral-700 font-semibold">
											Bebida:
											<span className="pl-2 font-normal dark:text-zinc-300 text-slate-600">
												{m.id_menu}
											</span>
										</li>
										<li className="pb-2 dark:text-zinc-300 text-neutral-700 font-semibold">
											Bebida:
											<span className="pl-2 font-normal dark:text-zinc-300 text-slate-600">
												{m.menu}
											</span>
										</li>

										<li className="pb-2 dark:text-zinc-300 text-neutral-700 font-semibold">
											Bebida:
											<span className="pl-2 font-normal dark:text-zinc-300 text-slate-600">
												{m.bebida}
											</span>
										</li>

										<li className="pb-2 dark:text-zinc-300 text-neutral-700 font-semibold">
											Dia:
											<span className="pl-2 font-normal dark:text-zinc-300 text-slate-600">
												{m.dia}
											</span>
										</li>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Menu;
