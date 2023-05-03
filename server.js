const express = require('express');
const app = express();

app.use(express.static('public'));
// Configurar el motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');


app.get('/'),(req)

// Iniciar el servidor en el puerto 5000
app.listen(5000, () => {
  console.log('Aplicación web dinámica ejecutándose en el puerto 5000');
});
