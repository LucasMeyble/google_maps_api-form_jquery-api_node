// Rota principal
app.get('/pontos', (req, res) => {
  const query = 'SELECT * FROM pontos';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta: ' + err.stack);
      return;
    }
    return res.status(200).json({ data: results });
  });
});