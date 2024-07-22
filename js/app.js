/*

    <div class="container">
    <div class="card">
        <p>Nombre: Moises Quintero</p>
        <p>Usuario: aguirrequinterogt</p>
        <p>Pass: GNC</p>
        <p>Ubicación: San Bernandino</p>
    </div>
    </div>

*/

// const btnMostrar = document.getElementById("buttonSearch");

function creardUsuarios(user) {
    const container = document.getElementById("userContainer");
    container.className = "userContainer";


    const card = document.createElement("div");
    card.className = "card";

    const nombre = document.createElement("p");
    nombre.innerText = `Nombre: ${user.nombre} ${user.apellido}`;

    const usuario = document.createElement("p");
    usuario.innerText = `Usuario: ${user.usuario}`;

    const pass = document.createElement("p");
    pass.innerText = `Contraseña: ${user.pass}`;

    const ubicacion = document.createElement("p");
    ubicacion.innerText = `Ubicación: ${user.ubicacion}`;

    card.append(nombre, usuario, pass, ubicacion);
    container.append(card);
}

function mostrarUsuarios(){


    const inputUsuario = document.getElementById("user").value;
    console.log(`El nombre a buscar es: ${inputUsuario}`);
    // const filterUsers = users.filter((u) => u.name.include(use))
    const userFilter = users.filter(el => el.nombre.includes(inputUsuario) || el.apellido.includes(inputUsuario) || el.usuario.includes(inputUsuario));

    if (userFilter.length >0) {
        Swal.fire({
            title: "Busqueda exitosa!",
            text: `Se encontró ${userFilter.length} usuarios`,
            icon: "success"
          });

          userFilter.forEach(element =>{
            console.log(element)
            creardUsuarios(element);
        });
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se encontraron usuarios!",
          });
    }
    
}

const btnSearch = document.getElementById("search");
btnSearch.addEventListener("click", mostrarUsuarios);
