import mysql from 'mysql2'

// Configurações do banco de dados
const connection = mysql.createConnection({
  host: 'containers-us-west-72.railway.app',
  user: 'root',
  password: '3V3qX67lQfGpxDL1BXzb',
  database: 'railway',
  port: 7439
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ' + err.stack);
    return;
  }
  console.log('Conexão estabelecida com o banco de dados.');
});

export default connection