const API = "http://localhost:8081/";
let globalDataAux = {};

//Variables del html
codigo = document.getElementById("codDirector");
nombre = document.getElementById("nombreDirector");
apellido = document.getElementById("apellidosDirector");
sede = document.getElementById("sede");
ubicacion = document.getElementById("ubicacion");
fecha = document.getElementById("fecha");


const getLocalStorage = () => {
    globalDataAux = JSON.parse(localStorage.getItem("auxData"));
    console.log(globalDataAux);
    codigo.innerHTML = JSON.parse(globalDataAux.codigoEmpleado)
    nombre.innerHTML = globalDataAux.nombre
    apellido.innerHTML = globalDataAux.apellido
    sede.innerHTML = globalDataAux.sede
    ubicacion.innerHTML = globalDataAux.ubicacion
    fecha.innerHTML = globalDataAux.fecha
}

const asistenciaDocente = () => {
    window.location.href = "../UnidadDeportivaFrontend-master/asistenciaDocente.html"
}

const asistenciaPasante = () => {
    window.location.href = "../UnidadDeportivaFrontend-master/asistenciaPasante.html"
}

getLocalStorage();

