const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configuración de la conexión con la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Sustituye con tu usuario de MySQL
  password: 'root', // Sustituye con la contraseña de tu MySQL
  database: 'crm', // Asegúrate de que la base de datos 'crm' exista en MySQL
  port: 3307
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Rutas CRUD para la tabla 'vendes'
app.get('/vendes', (req, res) => {
  db.query('SELECT * FROM vendes', (err, result) => {
    if (err) {
      console.error('Error al obtener las ventas:', err);
      res.status(500).send('Error del servidor');
      return;
    }
    res.json(result);
  });
});

app.post('/vendes', (req, res) => {
  const { producte, quantitat, preu, data_venda } = req.body;
  const query = 'INSERT INTO vendes (producte, quantitat, preu, data_venda) VALUES (?, ?, ?, ?)';
  db.query(query, [producte, quantitat, preu, data_venda], (err, result) => {
    if (err) {
      console.error('Error al añadir una venta:', err);
      res.status(500).send('Error del servidor');
      return;
    }
    res.status(201).send('Venta añadida correctamente');
  });
});

app.put('/vendes/:id', (req, res) => {
  const { producte, quantitat, preu, data_venda } = req.body;
  const { id } = req.params;
  const query = 'UPDATE vendes SET producte = ?, quantitat = ?, preu = ?, data_venda = ? WHERE id = ?';
  db.query(query, [producte, quantitat, preu, data_venda, id], (err, result) => {
    if (err) {
      console.error('Error al actualizar la venta:', err);
      res.status(500).send('Error del servidor');
      return;
    }
    res.send('Venta actualizada correctamente');
  });
});

app.delete('/vendes/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM vendes WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error al eliminar la venta:', err);
      res.status(500).send('Error del servidor');
      return;
    }
    res.send('Venta eliminada correctamente');
  });
});

// Iniciar el servidor
app.listen(3001, () => {
  console.log('Servidor en funcionamiento en http://localhost:3001');
});
