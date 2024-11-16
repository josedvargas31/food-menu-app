import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import MenuRoutes from "./src/routes/menu.routes.js";

const servidor = express();

servidor.use(cors());
servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({ extended: false }));

servidor.use("/api", MenuRoutes);

servidor.listen(3000, () => {
	console.log("Funcionando en el puerto 3000 ^.^");
});
