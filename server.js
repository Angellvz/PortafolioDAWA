// Importa las dependencias necesarias
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


// Crea una instancia de la aplicación Express
const app = express();

app.use(express.static('public'));
// Configura el middleware body-parser para manejar las solicitudes POST
app.use(bodyParser.urlencoded({ extended: true }));

// Configura el directorio de vistas para que Express cargue los archivos EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Define la ruta de inicio
app.get('/', (req, res) => {
  res.render('index');
});

// Define la ruta de habilidades
app.get('/habilidades', (req, res) => {
  res.render('habilidades');
});

// Define la ruta de contacto
app.get('/contacto', (req, res) => {
  res.render('contacto');
});

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('El servidor está en ejecución en el puerto 3000');
});
