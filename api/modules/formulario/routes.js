import { Router } from "express";
import { FormularioController } from "./formulario.controller.js";
import { FormularioService } from "./formulario.service.js";

const router = Router();

const service = new FormularioService();
const controller = new FormularioController(service);

router.post('/cadastro', (req, res) => controller.createUser(req, res))

export default router