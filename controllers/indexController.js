function getHome(req, res) {
    const datos = {
        tituloPrincipal: 'Tu espacio de tareas',
        descripcion: 'Bienvenida a Disper, Organiza tus futuros o proyectos o tus tareas del dia a dia',
        nombreProyecto: 'disper',
        autor: 'JATeR',
        lista:['leer', 'escribir', 'programar', 'dormir', 'comer']
        };
    res.render('home', datos);
};

function getTareas(req, res) {
    const datos = {
        tituloPrincipal: 'Tu espacio de tareas',
        descripcion: 'Bienvenida a Disper, Organiza tus futuros o proyectos o tus tareas del dia a dia',
        nombreProyecto: 'disper',
        autor: 'JATeR',
        lista:['leer', 'escribir', 'programar', 'dormir', 'comer']
        };
  res.render('tareas', datos);
};

function getStatus(req, res) {
  res.json({
    status: 'ok',
    app: 'disper',
    autor: 'JATeR',
    timestamp: new Date().toISOString()
  });
};

module.exports = {
    getHome, 
    getTareas, 
    getStatus
};

