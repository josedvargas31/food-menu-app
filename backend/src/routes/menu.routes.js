import { Router } from "express";
import { listarMenus,  listarMenu, registrarMenu, actualizarMenu, eliminarMenu } from "../controllers/menus.controller.js";

const MenuRoutes = Router();

MenuRoutes.get("/listar", listarMenus);
MenuRoutes.get("/listar/:id_menu", listarMenu);
MenuRoutes.post("/registrar", registrarMenu);
MenuRoutes.put("/actualizar/:id_menu", actualizarMenu);
MenuRoutes.delete("/eliminar/:id_menu", eliminarMenu);

export default MenuRoutes;
