const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
// Crear el servidor
const app = express();
app.use(cors());
app.use(express.json()); // Para parsear JSON
// Configurar la conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
	  port: '3307',
    database: 'escuela'
});

// Conectar a la base de datos
db.connect(err => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});
// 1. Obtener todos los estudiantes (GET)
app.get('/api/estudiantes', (req, res) => {
    const query = 'SELECT * FROM estudiantes';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});
// 2. Añadir un nuevo estudiante (POST)
app.post('/api/estudiantes', (req, res) => {
    const { nombre, edad } = req.body;
    const query = 'INSERT INTO estudiantes (nombre, edad) VALUES (?, ?)';
    db.query(query, [nombre, edad], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).send('Estudiante añadido');
    });
});
// 3. Modificar un estudiante (PUT)
app.put('/api/estudiantes/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, edad } = req.body;
    const query = 'UPDATE estudiantes SET nombre = ?, edad = ? WHERE id = ?';
    db.query(query, [nombre, edad, id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('Estudiante modificado');
    });
});
// 4. Eliminar un estudiante (DELETE)
app.delete('/api/estudiantes/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM estudiantes WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('Estudiante eliminado');
    });
});
// Iniciar el servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});