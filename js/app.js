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

const btnMostrar = document.getElementById("buttonSearch");

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
    users.forEach(el => {
        creardUsuarios(el);
    });
}
;

btnMostrar.onclick = () => mostrarUsuarios();