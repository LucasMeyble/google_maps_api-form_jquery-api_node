export class PontosController {
  pontosService

  constructor(pontosService) {
    this.pontosService = pontosService
  }

  async findAllPontos(req, res) {

    try {
      const results = await this.pontosService.getPontos()
      return res.json({ data: results })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: "Error ao obter as coordenadas" })
    }
  }
}