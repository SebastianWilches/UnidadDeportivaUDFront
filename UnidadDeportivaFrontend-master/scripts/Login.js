
const API = "http://localhost:8081/";
let globalDataAux = {};

const IngresarAux = async (id) => {
  try {
    const URL = `${API}Auxiliar/validarAuxiliar/${id}`;
    const response = await fetch(URL);
    const data = await response.json();
    if (data.cargo.idcargo === "1") {
      globalDataAux = obtenerData(data);
      localStorage.setItem("auxData", JSON.stringify(globalDataAux));
      console.log(globalDataAux);
      window.location.href = "../UnidadDeportivaFrontend-master/ingresoAuxiliar.html"
    } else {
      alert("No puede ingresar, codigo de empleado no existe");
    }
  } catch (error) {
    alert("No puede ingresar, codigo de empleado no existe");
  }
};

const getInfoAux = () => {
  const idcodigoAuxiliar = Number(document.getElementById("codAuxiliar").value); //mirar nom variables
  IngresarAux(idcodigoAuxiliar);

  // setTimeout(function () {
  //   window.location.href = "http://127.0.0.1:5500/Auxiliar/Auxiliar.html";
  // }, 2000);
};

const IngresarDir = async (id) => { //PENDIENTE
  const URL = ``;
  const response = await fetch(URL);
  const data = await response.json();
};

const getInfoDir = () => {
  let data = {
    idcodigoempleado: Number(document.getElementById("codDirector").value), //mirar nom variables
  };
  IngresarDir(idcodigoempleado);
};


const obtenerData = (data) => {
  const newData = {
    codigoEmpleado: data.empleado.codempleado,
    nombre: data.empleado.nomempleado,
    apellido: data.empleado.apellempleado,
    sede: data.espacio.nomespacio,
    ubicacion: data.espacio.esp_CODESPACIO_FKESPACIO.nomespacio,
    fecha: data.empleado.fecharegistro,
    correoUD: data.empleado.correoud
  };
  return newData;
};

