const colors = require('colors')
const argv = require('./config/yargs.js').argv;
const to_do = require('./to-do/to-do.js');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let crearTarea = to_do.crearTarea(argv.descripcion);
        console.log(crearTarea);
        break;

    case 'listar':
        let listarTareas = to_do.obtenerTareas();

        for (const [index, listado] of listarTareas.entries()) {
            console.log('\n');
            console.log('Tarea: '.cyan, index);
            console.log('Descripcion:'.cyan, listado.descripcion.brightBlue);

            if (listado.completado == false) {
                console.log('Completado:'.cyan, 'Pendiente'.red);
            } else {
                console.log('Completado:'.cyan, 'Completado'.green);
            }
        }
        break;

    case 'borrar':
        let borrarTarea = to_do.borrarTarea(argv.descripcion);
        console.log(borrarTarea);
        break;

    case 'actualizar':
        let actualizarTarea = to_do.actualizarTarea(argv.descripcion, argv.completado);
        console.log(actualizarTarea);
        break;

    default:
        console.log('Comando no reconocido.');
}