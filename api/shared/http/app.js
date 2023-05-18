import express  from 'express';
import cors from 'cors'
import pontosRouter from '../../modules/pontos/routes.js';
import formularioRouter from '../../modules/formulario/routes.js';

const app = express();
app.use(cors())
app.use(express.json())

app.use(pontosRouter)
app.use(formularioRouter)

// Iniciando o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});