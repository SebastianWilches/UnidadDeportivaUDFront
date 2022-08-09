const API = "http://localhost:8081/";
let globalDataAux = {};

// Variables html
resultNom = document.getElementById("resultNom");
resultApell = document.getElementById("resultApell");
resultCorreo = document.getElementById("resultCorreo");
resultCod = document.getElementById("resultCod");
resultFecha = document.getElementById("resultFecha");

resultCurso = document.getElementById("resultCurso");
resultEspacio = document.getElementById("resultEspacio");
resultDeporte = document.getElementById("resultDeporte");
resultNumInscritos = document.getElementById("resultNumInscritos");
resultNumCupos = document.getElementById("resultNumCupos");
resultHoraInicio = document.getElementById("resultHoraInicio");
resultHoraFin = document.getElementById("resultHoraFin");
resultDia = document.getElementById("resultDia");

cardElementos = document.getElementById("cardElementos");


let Elementos;
let arrayElemDepor = [{
  nombre: "hola",
  marca: "ksa",
  cantidad: 10
}, {
  nombre: "pelota",
  marca: "aguila roja",
  cantidad: 10
}]

const buscarDocente = async (nombre, apellido) => {
  const URL = `${API}Auxiliar/getAsistenciaDocente?nombre=${nombre}&apellido=${apellido}`;
  const response = await fetch(URL)
  const dataDocente = await response.json()
  // globalDataAux = dataDocente;
  console.log(dataDocente);


  //Actualizar información del docente
  resultNom.innerHTML = dataDocente.nomempleado;
  resultApell.innerHTML = dataDocente.apellempleado;
  resultCorreo.innerHTML = dataDocente.correoud;
  resultCod.innerHTML = dataDocente.codempleado;
  resultFecha.innerHTML = dataDocente.fecharegistro.substring(0, 10);

  //sessionStorage.setItem("Docente", JSON.stringify(data))
}

const buscarCursos = async (nombre, apellido) => {
  const URL = `${API}Auxiliar/consultarCursosPorDocente?nombre=${nombre}&apellido=${apellido}`;
  const response = await fetch(URL)
  const dataCursos = await response.json()
  console.log(dataCursos[0]);

  //Actualizar la informacion de los cursos
  resultCurso.innerHTML = dataCursos[0].programacion.actividad.descactividad;
  resultEspacio.innerHTML = dataCursos[0].programacion.espacio.idtipoespacio_FKESPACIO.desctipoespacio;
  resultDeporte.innerHTML = dataCursos[0].programacion.deporte.nomdeporte;
  resultNumInscritos.innerHTML = dataCursos[0].programacion.noinscrito;
  resultNumCupos.innerHTML = dataCursos[0].programacion.cupo;
  resultHoraInicio.innerHTML = dataCursos[0].programacion.horaInicio.idhora;
  resultHoraFin.innerHTML = dataCursos[0].programacion.horaFin.idhora;
  resultDia.innerHTML = dataCursos[0].programacion.dia.nomdia;

}

const buscarElementosDeportivos = async (nombre, apellido) => {
  const URL = `${API}Auxiliar/consultarElementosDeportivos?nombre=${nombre}&apellido=${apellido}`;
  const response = await fetch(URL)
  const dataElementosDeportivos = await response.json()

  cardElementos.innerHTML = `<input class="form-check-input" type="checkbox" value="${dataElementosDeportivos.consecelemento}" id="checkElemenDeportivo${dataElementosDeportivos.consecelemento}">
                            <label class="" > Elemento: ${dataElementosDeportivos.tipoElemento.desctipoelemento}</label>
                            <label class="" > Marca: ${dataElementosDeportivos.marca.nommarca}</label>
                            <label class="" > Estado: ${dataElementosDeportivos.estado.descestado}</label>`
// <input type="checkbox" class="casilla" id="elemenDepor${dataElementosDeportivos.consecelemento}" name="elemenDepor${dataElementosDeportivos.consecelemento}" value="elemenDepor${dataElementosDeportivos.consecelemento}">


  // arrayElemDepor.push({
  //   desctipoelemento: dataElementosDeportivos.tipoElemento.desctipoelemento,
  //   descestado: dataElementosDeportivos.estado.descestado,
  //   nommarca: dataElementosDeportivos.marca.nommarca,
  //   consecelemento: dataElementosDeportivos.consecelemento
  // })
  // console.log(arrayElemDepor);

}

const getInfoDocente = () => {
  nom = document.getElementById("nombreDocente").value;
  apell = document.getElementById("apellidoDocente").value;

  buscarDocente(nom, apell);
  buscarCursos(nom, apell);
  buscarElementosDeportivos(nom, apell);
}

const getElemen = async (Deporte) => {
  const response = await fetch(API)
  const dataElemen = await response.json()
  Elementos = data
}

let container = document.getElementById('cardElementos');

function crearCheckBox() {
  container.innerHTML += `<form action="">`
  //console.log(objeto2);
  Object.entries(arrayElemDepor).forEach(([key, value]) => {
    container.innerHTML += `<input type="checkbox" class="casilla" id="objeto1" name="${value.nombre}" value="${value.nombre}">
                            <label class="nombreElem" for="${value.nombre}"> ${value.nombre} de marca ${value.marca}</label>
                            <label class="cantidadElem" for="${value.nombre}"> Cantidad: ${value.cantidad}</label>`
  })

  container.innerHTML += ` <input class="botonRegistro" type="submit" value="Submit">
</form>`
}



crearCheckBox();

