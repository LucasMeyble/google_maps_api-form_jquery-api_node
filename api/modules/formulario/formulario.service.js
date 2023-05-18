import db from '../../db/dbconfig.js'

export class FormularioService {

  createUser(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const birthday = req.body.birthday;
    const address = req.body.address;

    const query = `INSERT INTO users (name, email, phone, address, birthday) 
                  VALUES (?, ?, ?, ?, ?)`;

    return new Promise((resolve, reject) => {
      db.query(query, [name, email, phone, address, birthday], (err, results) => {
        if (err) return reject(err)
        return resolve(results)
      });
    })
  }
} 