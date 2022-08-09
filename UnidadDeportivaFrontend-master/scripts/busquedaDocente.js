const API = "http://localhost:8081/";
let datosDocente;

const buscarDocente = async (docente) => {
  try {
    const URL = `${API}auxiliar/asistenciaDocente?nombre=${docente.nomDocente}&apellido=${docente.apeDocente}`;
    const response = await fetch(URL);
    const data = await response.json();
    datosDocente = data;
    //console.log(datosDocente);
    localStorage.setItem("datosDocente", JSON.stringify(datosDocente));
    window.location.href = "./AsistenciaDocente.html"
  } catch (error) {
    alert("No puede ingresar, empleado no valido");
  }
};



const getInfoDocente = () => {
  let datosFront = {
    nomDocente: (document.getElementById("nomDocente").value),
    apeDocente: (document.getElementById("apeDocente").value)
  }
  buscarDocente(datosFront);
}

