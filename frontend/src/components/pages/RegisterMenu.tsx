import React, { useRef } from "react";
import axiosClient from "../client/axiosClient";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

type FormElement = React.FormEvent<HTMLFormElement>;
function RegisterMenu() {
	const menu = useRef<HTMLInputElement>(null);
	const bebida = useRef<HTMLInputElement>(null);
	const dia = useRef<HTMLSelectElement>(null);

	const navigate = useNavigate();

	const handleSubmit = async (e: FormElement) => {
		e.preventDefault();
		const data = {
			menu: menu.current?.value,
			bebida: bebida.current?.value,
			dia: dia.current?.value,
		};
		axiosClient.post("/api/registrar", data).then((response) => {
			if (response.status == 200) {
				alert("Menu registrado con exito");
				navigate("/");
				// window.location.reload();
			} else {
				alert("No se pudo registrar el menu, intente mas tarde");
			}
		});
	};

	return (
		<>
			<Header />
			<div className="flex flex-col justify-center mt-10">
				<h1 className="text-2xl font-bold text-center pb-4">
					Agregar minuta 🤘🏻
				</h1>
				<div className="md:flex md:justify-center">
					<div className="md:w-96 bg-white p-6 rounded-lg shadow-xl">
						<form onSubmit={handleSubmit}>
							<label className="block text-gray-600 text-sm font-bold mb-2">
								Menu
							</label>
							<input
								type="text"
								placeholder="Ingrese el menu"
								className="rounded-lg border-2 p-2 border-gray-500 w-11/12"
								ref={menu}
								required
							/>
							<label className="block text-gray-600 text-sm font-bold mb-2">
								Bebida
							</label>
							<input
								type="text"
								placeholder="Ingrese bebida"
								className="rounded-lg border-2 p-2 border-gray-500 w-11/12"
								ref={bebida}
								required
							/>
							<label className="block text-gray-600 text-sm font-bold mb-2">
								Seleccione día
							</label>
							<select
								className="rounded-lg border-2 p-2 border-gray-500 w-11/12"
								ref={dia}
								required
							>
								<option value="" hidden>
									Seleccione dia
								</option>
								<option value="Lunes">Lunes</option>
								<option value="Martes">Martes</option>
								<option value="Miercoles">Miercoles</option>
								<option value="Jueves">Jueves</option>
								<option value="Viernes">Viernes</option>
								<option value="Sabado">Sabado</option>
								<option value="Domingo">Domingo</option>
							</select>
							<div className="flex justify-center">
								<button
									type="submit"
									className="transition ease-in-out delay-150 bg-stone-400 hover:-translate-y-1 hover:scale-110 hover:bg-zinc-600 duration-300 text-white rounded-lg px-2 py-2 m-2"
								>
									Crear minuta
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default RegisterMenu;
