let Elementos;
const API = "";
let xd = [{
  nombre: "hola",
  marca: "ksa",
  cantidad: 10
},{
  nombre: "pelota",
  marca: "aguila roja",
  cantidad: 10
}]

const buscarPasante = async(id) => {
  const URL = ``
  const response = await fetch(URL)
  const dataDocente = await response.json()
  //sessionStorage.setItem("Docente", JSON.stringify(data))
}

const getInfoDocente = () => {
  let data = {
    nomDocente: (document.getElementById("codPasante").value)
  }
  buscarDocente(data);
}

const getElemen = async(Deporte) => {
  const response = await fetch(API)
  const dataElemen = await response.json()
  Elementos = data
}

let container = document.getElementById('cardElementos');

function crearCheckBox(){
    container.innerHTML +=`<form action="">`
    //console.log(objeto2);
    Object.entries(xd).forEach(([key, value])=> {
    container.innerHTML += `<input type="checkbox" class="casilla" id="objeto1" name="${value.nombre}" value="${value.nombre}">
                            <label class="nombreElem" for="${value.nombre}"> ${value.nombre} de marca ${value.marca}</label>
                            <label class="cantidadElem" for="${value.nombre}"> Cantidad: ${value.cantidad}</label>`
})

container.innerHTML+= ` <input class="botonRegistro" type="submit" value="Submit">
</form>`
}



crearCheckBox();

