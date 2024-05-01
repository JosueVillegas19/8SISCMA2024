const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de la conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'juegos' // Nombre de la base de datos que creaste
});

// Conexión a la base de datos MySQL
db.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos MySQL establecida');
});

db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, password], (err, result) => {
    if (err) {
        console.error('Error al insertar usuario en la base de datos:', err);
        res.status(500).send('Error al registrar usuario');
    } else {
        res.send('Usuario registrado correctamente');
    }
});


// Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para la página de registro (formulario HTML)
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/register.html');
});


// Ruta para el registro de usuarios
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, password], (err, result) => {
        if (err) {
            res.status(500).send('Error al registrar usuario');
        } else {
            res.send('Usuario registrado correctamente');
        }
    });
});

// Ruta para la página de inicio de sesión (formulario HTML)
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

// Ruta para la autenticación de usuarios
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], (err, results) => {
        if (err) {
            res.status(500).send('Error de autenticación');
        } else if (results.length === 0) {
            res.status(401).send('Credenciales inválidas');
        } else {
            res.send('Inicio de sesión exitoso');
        }
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
