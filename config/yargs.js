// configuracion de yargs para el proyecto
const descripcion = {
    demand: true,
    alias: 'd',
    descr: 'Descripccion de la tarea por hacer.'
};

const completado = {
    default: true,
    alias: 'c',
    descr: 'Marca como completado una tarea pendiente.'
}

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea por hacer.', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea por hacer.', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea por hacer.', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}