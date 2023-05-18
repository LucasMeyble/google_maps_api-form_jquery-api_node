import { Router } from "express";
import { PontosController } from "./pontos.controller.js";
import { PontosService } from "./pontos.service.js";

const router = Router();

const service = new PontosService();
const controller = new PontosController(service);

router.get('/pontos', (req, res) => controller.findAllPontos(req, res))

export default router