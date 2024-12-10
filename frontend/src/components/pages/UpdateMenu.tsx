import React, { useRef, useEffect } from "react";
import axiosClient from "../client/axiosClient";
import Header from "../Header";
import { useNavigate, useParams } from "react-router-dom";

type FormElement = React.FormEvent<HTMLFormElement>;

function UpdateMenu() {
	const menu = useRef<HTMLInputElement>(null);
	const bebida = useRef<HTMLInputElement>(null);
	const dia = useRef<HTMLSelectElement>(null);
	const navigate = useNavigate();

	// Obtener id
	const { id_menu } = useParams<{ id_menu: string }>();

useEffect(() => {
	const fetchMenu = async () => {
		try {
			const response = await axiosClient.get(`/api/listar/${id_menu}`);
			const data = response.data;

			if (menu.current) menu.current.value = data.menu || "";
			if (bebida.current) bebida.current.value = data.bebida || "";
			if (dia.current) dia.current.value = data.dia || "";

		} catch (error) {
			alert("Error al cargar los datos del menú");
			console.log(error);
			
		}
	}
	fetchMenu()

}, [id_menu])
	const hangleSubmit = async (e: FormElement) => {
		e.preventDefault();
		const data = {
			menu: menu.current?.value,
			bebida: bebida.current?.value,
			dia: dia.current?.value,
		};
		try {
			const response = await axiosClient.put(`api/actualizar/${id_menu}`, data);
			if (response.status === 200) {
				alert("Menú actualizado con éxito");
				navigate("/");
			} else {
				alert("No se pudo actualizar el menú, Intente más tarde.");
			}
		} catch (error) {
			console.log("Error al actualizar el menu ", error);
		}
	};

	return (
		<>
			<Header />
			<div className="flex flex-col justify-center mt-10">
				<h1 className="text-2xl font-bold text-center pb-4">
					Actualizar Minuta ✏️
				</h1>
				<div className="md:flex md:justify-center">
					<div className="md:w-96 bg-white p-6 rounded-lg shadow-xl">
						<form onSubmit={hangleSubmit}>
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
									Actualizar
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default UpdateMenu;

