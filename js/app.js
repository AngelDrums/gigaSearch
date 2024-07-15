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



// function crearCard(userArray){
//     const container = document.createElement("div");
//     container.className = "container";

//     const card = document.createElement("div");
//     card.className = "card";

//     const nombre = document.createElement("p");
//     nombre.innerText = `Nombre: ${userArray.nombre} ${userArray.apellido}`;

//     const usuario = document.createElement("p");
//     usuario.innerText = `Usuario: ${userArray.usuario}`;

//     const pass = document.createElement("p");
//     pass.innerText = `Usuario: ${userArray.pass}`;

//     const ubicacion = document.createElement("p");
//     ubicacion.innerText = `Usuario: ${userArray.ubicacion}`;

//     card.append(nombre, usuario, pass, ubicacion);
//     container.append(card);

// }

// function mostrarUsuarios(){
//     users.forEach(el => {
//         crearCard(el);
//     });
// }

// const buttonSearch = document.getElementById("buttonSearch");
// buttonSearch.onclick = () => mostrarUsuarios();


function crearCard(user) {
    const container = document.getElementById("userContainer"); // Asegúrate de tener un contenedor en el HTML con este ID
    container.className = "container";

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

function mostrarUsuarios() {
    users.forEach(el => {
        crearCard(el);
    });
}

const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.onclick = () => mostrarUsuarios();