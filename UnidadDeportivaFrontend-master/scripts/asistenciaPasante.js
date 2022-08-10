const API = "http://localhost:8081/";
//          Variables HTML

//Consulta pasante
resultCod = document.getElementById("resultCod");
resultNom = document.getElementById("resultNom"); 
resultApell = document.getElementById("resultApell");
resultCorreo = document.getElementById("resultCorreo");
resultFechaIni = document.getElementById("resultFechaIni");
resultPeriodo = document.getElementById("resultPeriodo");
resultDia = document.getElementById("resultDia");
resultHoraIni = document.getElementById("resultHoraIni");
resultHoraFin = document.getElementById("resultHoraFin");
resultSede = document.getElementById("resultSede");

//Consultar practicasLibres
pasanteActividad = document.getElementById("pasanteActividad");
pasanteEspacio = document.getElementById("pasanteEspacio");
pasanteDeporte = document.getElementById("pasanteDeporte");
pasanteNoInscritos = document.getElementById("pasanteNoInscritos");
pasanteCupos = document.getElementById("pasanteCupos");


const buscarPasante = async(cod) => {
  const URL = `${API}Auxiliar/consultarPracticasPorEstudiante?codigo=${cod}`;
  const response = await fetch(URL)
  const dataPasante = await response.json()

  
  //Datos pasante
  resultCod.innerHTML = dataPasante[0].estudiante.codestudiante;
  resultNom.innerHTML = dataPasante[0].estudiante.nomestudiante;
  resultApell.innerHTML = dataPasante[0].estudiante.apellestudiante;
  resultCorreo.innerHTML = dataPasante[0].estudiante.correoudestudiante;
  resultFechaIni.innerHTML = dataPasante[0].estudiante.fecharegestudiante.substring(0, 10);;
  resultPeriodo.innerHTML = dataPasante[0].programacion.periodo.idperiodo;
  resultDia.innerHTML = dataPasante[0].programacion.dia.nomdia;
  resultHoraIni.innerHTML = dataPasante[0].programacion.horaInicio.idhora;
  resultHoraFin.innerHTML = dataPasante[0].programacion.horaFin.idhora;
  resultSede.innerHTML = dataPasante[0].programacion.espacio.esp_CODESPACIO_FKESPACIO.nomespacio;

  //Prácticas libres del pasante
  pasanteActividad.innerHTML = dataPasante[0].programacion.actividad.descactividad;
  pasanteEspacio.innerHTML = dataPasante[0].programacion.espacio.nomespacio;
  pasanteDeporte.innerHTML = dataPasante[0].programacion.deporte.nomdeporte;
  pasanteNoInscritos.innerHTML = dataPasante[0].programacion.noinscrito;
  pasanteCupos.innerHTML = dataPasante[0].programacion.cupo;

}


const buscarElementosDeportivos = async (cod) => {
  const URL = `${API}Auxiliar/consultarElementosDeportivosEstudiante?codigo=${cod}`;
  const response = await fetch(URL);
  const dataElementosDeportivos = await response.json();

  cardElementos.innerHTML = `<input class="form-check-input" type="checkbox" value="${dataElementosDeportivos.consecelemento}" id="checkElemenDeportivo">
                            <label class="" > Elemento: ${dataElementosDeportivos.tipoElemento.desctipoelemento}</label>
                            <label class="" > Marca: ${dataElementosDeportivos.marca.nommarca}</label>
                            <label class="" > Estado: ${dataElementosDeportivos.estado.descestado}</label>
                            `

  
}

const getInfoPasante = () => {
  // let sectionElementos = document.getElementById('sectionElementos');
  
  codPasante = document.getElementById("codigoPasante").value;
  

  buscarPasante(codPasante);

  // sectionElementos.style.visibility = "visible";
  // buscarElementosDeportivos(nom, apell);
}



