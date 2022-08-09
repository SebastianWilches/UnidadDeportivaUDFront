//Variables globales
const API_URL = "http://localhost:8081/"
let globalData = {};

let principalContainer = document.getElementById('container-personal');
let updatePersonal = document.getElementById('modalContainerUpdatePersonal');



//Eventos de los botones
const onclickSubmitEmpleado = () => {
    postEmpleado(getData());
}



// Obtener información del form
const getData = () => {
    const idpersonal = document.getElementById("IDPersonalInput").value;
    const nom_personal = document.getElementById("NombreInput").value;
    const apellido1_personal = document.getElementById("PrimerApellidoInput").value;
    const apellido2_personal = document.getElementById("SegundoApellidoInput").value;
    const fechanacimiento_personal = document.getElementById("FechaNacimientoInput").value;
    const telefono_usuario = document.getElementById("TelefonoInput").value;


    let objetoForm = {
        idpersonal,
        idCargo: 1,
        idSede: 1,
        nom_personal,
        apellido1_personal,
        apellido2_personal,
        fechanacimiento_personal,
        telefono_usuario
    }

    return objetoForm;
}

//Mostrarlos en una tabla
const getPersonalTable = () => {
    let tablePersonal = document.getElementById('tablePersonal');

    console.log(globalData);

    globalData.forEach(empleado => {
        tablePersonal.innerHTML += `
        <tr>
            <td>${empleado.idpersonal}</td>
            <td>${empleado.nom_personal}</td>
        </tr>
        `
    });
    console.log(tablePersonal);
}

const getPersonalInfo = () => {
    
    globalData.forEach(empleado => {
        principalContainer.innerHTML += `<div class="col">
        <div class="card h-100" style="width: 18rem;" id="${empleado.idpersonal}">
            <div class="card-body">
                <h5 class="card-title">${empleado.nom_personal} ${empleado.apellido1_personal} ${empleado.apellido2_personal}</h5>
                <p class="card-text"> <span class="bold">IDPersonal: </span> ${empleado.idpersonal}</p>
                <p class="card-text"> <span class="bold">IDCargo: </span>${empleado.cargo.idcargo} - ${empleado.cargo.nom_cargo}</p>
                <p class="card-text"> <span class="bold">IDSede: </span>${empleado.sede.idsede} - ${empleado.sede.nom_sede}</p>
                <p class="card-text"> <span class="bold">Nombre: </span>${empleado.nom_personal}</p>
                <p class="card-text"> <span class="bold">Primer apellido: </span>${empleado.apellido1_personal}</p>
                <p class="card-text"> <span class="bold">Segundo apellido: </span>${empleado.apellido2_personal}</p>
                <p class="card-text"> <span class="bold">Fecha nacimiento: </span>${empleado.fechanacimiento_personal}</p>
                <p class="card-text"> <span class="bold">Telefono: </span>${empleado.telefono_usuario}</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modal${empleado.idpersonal}Update">Actualizar información</button>
            </div>
        </div>
    </div>`;

    updatePersonal.innerHTML += `
    <div class="modal fade" id="modal${empleado.idpersonal}Update" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${empleado.nom_personal}
                        ${empleado.apellido1_personal} ${empleado.apellido2_personal}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="${empleado.idpersonal}IDPersonalInputUpdate" class="form-label">ID Personal</label>
                        <input type="text" class="form-control" id="${empleado.idpersonal}IDPersonalInputUpdate" placeholder="IDPersonal" value="${empleado.idpersonal}" readonly>
                    </div>
                    <div class="mb-3">
                        <label for="${empleado.idpersonal}NombreInputUpdate" class="form-label">Nombre completo</label>
                        <input type="text" class="form-control" id="${empleado.idpersonal}NombreInputUpdate" placeholder="Nombre" value="${empleado.nom_personal}">
                    </div>
                    <div class="mb-3">
                        <label for="${empleado.idpersonal}PrimerApellidoInputUpdate" class="form-label">Primer apellido</label>
                        <input type="text" class="form-control" id="${empleado.idpersonal}PrimerApellidoInputUpdate" placeholder="PrimerApellido" value="${empleado.apellido1_personal}">
                    </div>
                    <div class="mb-3">
                        <label for="${empleado.idpersonal}SegundoApellidoInputUpdate" class="form-label">Segundo apellido</label>
                        <input type="text" class="form-control" id="${empleado.idpersonal}SegundoApellidoInputUpdate" placeholder="SegundoApellido" value="${empleado.apellido2_personal}">
                    </div>
                    <div class="mb-3">
                        <label for="${empleado.idpersonal}FechaNacimientoInputUpdate" class="form-label">Fecha de nacimiento</label>
                        <input type="text" class="form-control" id="${empleado.idpersonal}FechaNacimientoInputUpdate" placeholder="FechaNacimiento" value="${empleado.fechanacimiento_personal}">
                    </div>
                    <div class="mb-3">
                        <label for="${empleado.idpersonal}TelefonoInputUpdate" class="form-label">Telefono</label>
                        <input type="text" class="form-control" id="${empleado.idpersonal}TelefonoInputUpdate" placeholder="Telefono" value="${empleado.telefono_usuario}">
                    </div>
                </div>
                <div class="modal-footer">
                        <button type="button" class="btn btn-dark" onclick=eventUpdatePersonal('${empleado.idpersonal}IDPersonalInputUpdate','${empleado.idpersonal}NombreInputUpdate','${empleado.idpersonal}PrimerApellidoInputUpdate','${empleado.idpersonal}SegundoApellidoInputUpdate','${empleado.idpersonal}FechaNacimientoInputUpdate','${empleado.idpersonal}TelefonoInputUpdate')>Actualizar información</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    `

    })


}

const eventUpdatePersonal = (IDPersonalInput, NombreInput, PrimerApellidoInput, SegundoApellidoInput, FechaNacimientoInput, TelefonoInput)=>{
    const idpersonal = document.getElementById(IDPersonalInput).value;
    const nom_personal = document.getElementById(NombreInput).value;
    const apellido1_personal = document.getElementById(PrimerApellidoInput).value;
    const apellido2_personal = document.getElementById(SegundoApellidoInput).value;
    const fechanacimiento_personal = document.getElementById(FechaNacimientoInput).value;
    const telefono_usuario = document.getElementById(TelefonoInput).value;


    let objetoForm = {
        idpersonal,
        idCargo: 1,
        idSede: 1,
        nom_personal,
        apellido1_personal,
        apellido2_personal,
        fechanacimiento_personal,
        telefono_usuario
    }

    console.log(objetoForm);
    putEmpleado(objetoForm);
}




//                      Metodos para consumir el endpoint
//GET
const getAll = async () => {
    const response = await fetch(API_URL + "Personal/getPersonal", {
        method: 'GET',
        redirect: 'follow',
    });
    const data = await response.json();
    console.log(data);

    globalData = data;


    //Actualizar pag
    getPersonalInfo();

}

//POST Empleado
const postEmpleado = async (objetoEmpleado) => {
    const response = await fetch(API_URL + "Personal/save", {
        method: 'POST',
        body: JSON.stringify(objetoEmpleado),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);

    recargarPagina();
}

//PUT empleado
const putEmpleado = async (objetoEmpleado) => {
    const response = await fetch(API_URL + "Personal/update", {
        method: 'PUT',
        body: JSON.stringify(objetoEmpleado),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);

    // recargarPagina();
}



//POST sede
const postSede = async () => {
    const objeto = {
        idsede: "3",
        nom_sede: 'Macarena',
        direccion_sede: 'Cll algo con algo'
    }

    const response = await fetch(API_URL + "Sede/save", {
        method: 'POST',
        body: JSON.stringify(objeto),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);

    recargarPagina();
}

const recargarPagina = () => {
    location.reload();
}


getAll();