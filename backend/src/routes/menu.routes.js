import { Router } from "express";
import { listarMenus, registrarMenu, actualizarMenu, eliminarMenu } from "../controllers/menus.controller.js";

const MenuRoutes = Router();

MenuRoutes.get("/listar", listarMenus);
MenuRoutes.post("/registrar", registrarMenu);
MenuRoutes.put("/actualizar/:id_menu", actualizarMenu);
MenuRoutes.delete("/eliminar/:id_menu", eliminarMenu);

export default MenuRoutes;
