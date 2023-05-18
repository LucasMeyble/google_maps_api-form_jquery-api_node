import db from '../../db/dbconfig.js'

export class PontosService {

  getPontos() {
    const query = 'SELECT * FROM pontos';
    return new Promise((resolve, reject) => {
      db.query(query, (err, results) => {
        if(err) return reject(err)

        return resolve(results)
      });

    })
  }
}