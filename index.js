require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

const PORT = process.env.PORT || 3000;

// Configuración del motor de plantillas
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

// Helper para convertir la primera letra en mayúscula
hbs.registerHelper('capitalize', function(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
});

//Manejo de datos hardcodeados para plantilla
const datos = {
  tituloPrincipal: 'Tu espacio de tareas',
  descripcion: 'Bienvenida a Disper, Organiza tus futuros o proyectos o tus tareas del dia a dia',
  nombreProyecto: 'disper',
  autor: 'JATeR',
  lista:['leer', 'escribir', 'programar', 'dormir', 'comer']

};

// Rutas
app.get('/', (req, res) => {
  res.render('home', datos);
});

app.get('/Tareas', (req, res) => {
  res.render('tareas', datos);
});

app.get('/status', (req, res) => {
  res.json({
    status: 'ok',
    app: datos.nombreProyecto,
    autor: datos.autor,
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});