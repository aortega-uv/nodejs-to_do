// solicitamos el require file system para utilizar su funcion write y guardar las tareas en fisico
const fs = require('fs');


// creamos el arreglo que contendra las tareas por hacer
let listadoTareas = [];


// creamos la funcion para convertir el arreglo en JSON y guardarlo en el archivo data.json
let guardarTarea = () => {
    // pasamos como JSON el arreglo listadoTareas
    let data = JSON.stringify(listadoTareas);
    // guardamos el JSON
    fs.writeFile('db/data.json', data, (error) => {
        if (error) throw new Error('Error al guardar la tarea.');
    });
}


// traer los datos del JSON al arreglo
const cargarTareas = () => {
    try {
        listadoTareas = require('../db/data.json');
    } catch (error) {
        listadoTareas = [];
    }
}


// creamos la funcion que recibe como argumento la descripcion
const crearTarea = (descripcion) => {
    cargarTareas();
    // creamos el objeto por hacer
    let tarea = {
        descripcion,
        completado: false
    };

    listadoTareas.push(tarea);
    guardarTarea();
    return tarea;
}


// funcion para obtener las tareas creadas
const obtenerTareas = () => {
    cargarTareas();
    return listadoTareas;
}


// funcion para actualizar el estado de una tarea
const actualizarTarea = (descripcion, completado = true) => {
    cargarTareas();

    let index = listadoTareas.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoTareas[index].completado = completado;
        guardarTarea();
        return true
    } else {
        return false;
    }
}


// ffuncion para eliminar una tarea por hacer
const borrarTarea = (descripcion) => {
    cargarTareas();

    // validamos que la tarea escrita por el usuario sea igual a una ya guardada
    let index = listadoTareas.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoTareas.indexOf(index);
        if (index > -1) {
            listadoTareas.splice(index, 1);
        }
        guardarTarea();
        return true;
    } else {
        return false;
    }
}


// exportamos los modulos al resto de la app
module.exports = {
    crearTarea,
    obtenerTareas,
    actualizarTarea,
    borrarTarea
}