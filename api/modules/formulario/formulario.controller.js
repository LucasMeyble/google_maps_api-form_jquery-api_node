export class FormularioController {
  formularioService

  constructor(formularioService) {
    this.formularioService = formularioService
  }

  async createUser(req, res) {

    try {
      await this.formularioService.createUser(req, res)
      res.status(200).json({ message: 'Cadastro realizado com sucesso.' });
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: "Ocorreu um erro ao realizar o cadastro." })
    }
  }
}