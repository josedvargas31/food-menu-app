import { pool } from "../db/conexion.js";

// listar menus
export const listarMenus = async (req, res) => {
	try {
		const [result] = await pool.query("SELECT * FROM menus");
		if (result.length > 0) {
			res.status(200).json(result);
		} else {
			res.status(403).json({
				status: 403,
				message: "No hay menus para listar",
			});
		}
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: "Error en el servidor " + error.message,
		});
	}
};

// listar menu
export const listarMenu = async (req, res) => {
	try {
		const { id_menu } = req.params;
		const [result] = await pool.query("SELECT * FROM menus WHERE id_menu=?", [
			id_menu,
		]);

		if (result.length > 0) {
			res.status(200).json(result);
		} else {
			res.status(403).json({
				status: 403,
				message: "No hay menu para listar",
			});
		}
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: "Error en el servidor " + error,
		});
	}
};

// registrar menu
export const registrarMenu = async (req, res) => {
	try {
		const { menu, bebida, dia } = req.body;
		const [result] = await pool.query(
			"INSERT INTO menus (menu, bebida, dia) VALUES (?,?,?)",
			[menu, bebida, dia]
		);
		if (result.affectedRows > 0) {
			res.status(200).json({
				status: 200,
				message: "Menu registrado correctamente",
			});
		} else {
			res.status(403).json({
				status: 403,
				message: "No se pudo registrar el menu",
			});
		}
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: "Error en el servidor " + error.message,
		});
	}
};

// actualizar menu
export const actualizarMenu = async (req, res) => {
	try {
		const { id_menu } = req.params;
		const { menu, bebida, dia } = req.body;

		const [result] = await pool.query(
			"UPDATE menus SET menu=?, bebida=?, dia=? WHERE id_menu=?",
			[menu, bebida, dia, id_menu]
		);
		if (result.affectedRows > 0) {
			res.status(200).json({
				status: 200,
				message: "Menu actualizado correctamente",
			});
		} else {
			res.status(403).json({
				status: 403,
				message: "No se pudo actualizar el menu",
			});
		}
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: "Error en el servidor " + error.message,
		});
	}
};

// eliminar menu
export const eliminarMenu = async (req, res) => {
	try {
		const { id_menu } = req.params;
		const [row] = await pool.query("DELETE FROM menus WHERE id_menu=?", [
			id_menu,
		]);
		if (row.affectedRows > 0) {
			res.status(200).json({
				status: 200,
				message: "Menu eliminado con éxito",
			});
		} else {
			res.status(403).json({
				status: 403,
				message: "Menu no encontrado",
			});
		}
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: "Error en el servidor " + error.message,
		});
	}
};
