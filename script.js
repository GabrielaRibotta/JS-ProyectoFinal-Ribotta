let usuariosAPI = [];
fetch('./usuarios.json')
    .then( (response) => response.json())
    .then( (usuariosJSON) =>{
        usuariosAPI = localStorage.setItem("usuarios", JSON.stringify(usuariosJSON));
});

// Funciones
function obtenerUsuarios(){
    const usuariosLS = JSON.parse(localStorage.getItem("usuarios")) || [];
    return usuariosLS;
};

// Clases

class Usuario {
    constructor (nombre, obtenidas, repetidas, argentina){
        this.nombre = nombre;
        this.obtenidas = obtenidas;
        this.repetidas = repetidas;
        this.argentina = argentina;
    }
}

let listaUsuarios = obtenerUsuarios();
let argentina = [];

// DOM

const inicio = document.getElementById("inicio");
const bienvenida = document.getElementById("call");
const datosUsuarioDOM = document.getElementById("datosUsuario");
const lista = document.getElementById("lista");
const coleccion = document.getElementById("coleccion");
const divMensaje = document.getElementById("divMensaje");

// DOM-Inputs

const callButton = document.getElementById("callButton");
const inputNombreUsuario = document.getElementById("nombreUsuario");
const inputFiguritasObtenidas = document.getElementById("obtenidas");
const inputFiguritasRepetidas = document.getElementById("repetidas");

// Botones
const btnEscudo = document.getElementById("escudo");
const btnFigu1 = document.getElementById("f1");
const btnFigu2 = document.getElementById("f2");
const btnFigu3 = document.getElementById("f3");
const btnFigu4 = document.getElementById("f4");
const btnFigu5 = document.getElementById("f5");
const btnFigu6 = document.getElementById("f6");
const btnFigu7 = document.getElementById("f7");
const btnFigu8 = document.getElementById("f8");
const btnFigu9 = document.getElementById("f9");
const btnFigu10 = document.getElementById("f10");
const btnFigu11 = document.getElementById("f11");
const btnFigu12 = document.getElementById("f12");
const btnFigu13 = document.getElementById("f13");
const btnFigu14 = document.getElementById("f14");
const btnFigu15 = document.getElementById("f15");
const btnFigu16 = document.getElementById("f16");
const btnFigu17 = document.getElementById("f17");
const btnFigu18 = document.getElementById("f18");
const btnFormacion = document.getElementById("formacion");


// Eventos

inicio.addEventListener("click", () => {
    bienvenida.classList.remove('ocultar');
    datosUsuarioDOM.classList.add('ocultar');
    coleccion.classList.add('ocultar');
    lista.classList.add('ocultar');

    // limpiar inputs
    inputNombreUsuario.value = "";
    inputFiguritasObtenidas.value = "";
    inputFiguritasRepetidas.value = "";
    btnEscudo.classList.remove('buttonObtenida');
    btnFigu1.classList.remove('buttonObtenida');
    btnFigu2.classList.remove('buttonObtenida');
    btnFigu3.classList.remove('buttonObtenida');
    btnFigu4.classList.remove('buttonObtenida');
    btnFigu5.classList.remove('buttonObtenida');
    btnFigu6.classList.remove('buttonObtenida');
    btnFigu7.classList.remove('buttonObtenida');
    btnFigu8.classList.remove('buttonObtenida');
    btnFigu9.classList.remove('buttonObtenida');
    btnFigu10.classList.remove('buttonObtenida');
    btnFigu11.classList.remove('buttonObtenida');
    btnFigu12.classList.remove('buttonObtenida');
    btnFigu13.classList.remove('buttonObtenida');
    btnFigu14.classList.remove('buttonObtenida');
    btnFigu15.classList.remove('buttonObtenida');
    btnFigu16.classList.remove('buttonObtenida');
    btnFigu17.classList.remove('buttonObtenida');
    btnFigu18.classList.remove('buttonObtenida');
    btnFormacion.classList.remove('buttonObtenida');
});

callButton.addEventListener("click", () => {
    bienvenida.classList.add('ocultar');
    datosUsuarioDOM.classList.remove('ocultar')
    lista.classList.remove('ocultar');
});

// Botones-Evento -------------

btnEscudo.addEventListener("click", () => {
    if(btnEscudo.classList.contains('buttonObtenida')){
        btnEscudo.classList.remove('buttonObtenida');
        const indexFigu = argentina.indexOf("Escudo AFA");
        argentina.splice(indexFigu, 1);
    } else {
        btnEscudo.classList.add('buttonObtenida');
        argentina.splice(0, 0, "Escudo AFA");
    }
});
btnFigu1.addEventListener("click", () => {
    if(btnFigu1.classList.contains('buttonObtenida')){
        btnFigu1.classList.remove('buttonObtenida');
        const indexFigu = argentina.indexOf("Dibu Martínez");
        argentina.splice(indexFigu, 1);
    } else {
        btnFigu1.classList.add('buttonObtenida');
        argentina.splice(1, 0, "Dibu Martínez");
    }
});
btnFigu2.addEventListener("click", () => {
    if(btnFigu2.classList.contains('buttonObtenida')){
        btnFigu2.classList.remove('buttonObtenida');
        const indexFigu = argentina.indexOf("Franco Armani");
        argentina.splice(indexFigu, 1);
    } else {
        btnFigu2.classList.add('buttonObtenida');
        argentina.splice(2, 0, "Franco Armani");
    }
});
btnFigu3.addEventListener("click", () => {
    if(btnFigu3.classList.contains('buttonObtenida')){
        btnFigu3.classList.remove('buttonObtenida');
        const indexFigu = argentina.indexOf("Marcos Acuña");
        argentina.splice(indexFigu, 1);
    } else {
        btnFigu3.classList.add('buttonObtenida');
        argentina.splice(3, 0, "Marcos Acuña");
    }
});
btnFigu4.addEventListener("click", () => {
    if(btnFigu4.classList.contains('buttonObtenida')){
        btnFigu4.classList.remove('buttonObtenida');
        const indexFigu = argentina.indexOf("Nahuel Molina");
        argentina.splice(indexFigu, 1);
    } else {
        btnFigu4.classList.add('buttonObtenida');
        argentina.splice(4, 0, "Nahuel Molina");
    }
});
btnFigu5.addEventListener("click", () => {
    if(btnFigu5.classList.contains('buttonObtenida')){
        btnFigu5.classList.remove('buttonObtenida');
        const indexFigu = argentina.indexOf("Nicolás Otamendi");
        argentina.splice(indexFigu, 1);
    } else {
        btnFigu5.classList.add('buttonObtenida');
        argentina.splice(5, 0, "Nicolás Otamendi");
    }
});
btnFigu6.addEventListener("click", () => {
    if(btnFigu6.classList.contains('buttonObtenida')){
        btnFigu6.classList.remove('buttonObtenida');
        const indexFigu = argentina.indexOf("Germán Pezzella");
        argentina.splice(indexFigu, 1);
    } else {
        btnFigu6.classList.add('buttonObtenida');
        argentina.splice(6, 0, "Germán Pezzella");
    }
});
btnFigu7.addEventListener("click", () => {
    if(btnFigu7.classList.contains('buttonObtenida')){
        btnFigu7.classList.remove('buttonObtenida');
        const indexFigu = argentina.indexOf("Cristian Romero");
        argentina.splice(indexFigu, 1);
    } else {
        btnFigu7.classList.add('buttonObtenida');
        argentina.splice(7, 0, "Cristian Romero");
    }
});
btnFigu8.addEventListener("click", () => {
    if(btnFigu8.classList.contains('buttonObtenida')){
        btnFigu8.classList.remove('buttonObtenida');
        const indexFigu = argentina.indexOf("Rodrigo De Paul");
        argentina.splice(indexFigu, 1);
    } else {
        btnFigu8.classList.add('buttonObtenida');
        argentina.splice(8, 0, "Rodrigo De Paul");
    }
});
btnFigu9.addEventListener("click", () => {
    if(btnFigu9.classList.contains('buttonObtenida')){
        btnFigu9.classList.remove('buttonObtenida');
        const indexFigu = argentina.indexOf("Ángel Di María");
        argentina.splice(indexFigu, 1);
    } else {
        btnFigu9.classList.add('buttonObtenida');
        argentina.splice(9, 0, "Ángel Di María");
    }
});
btnFigu10.addEventListener("click", () => {
    if(btnFigu10.classList.contains('buttonObtenida')){
        btnFigu10.classList.remove('buttonObtenida');
        const indexFigu = argentina.indexOf("Giovanni Lo Celso");
        argentina.splice(indexFigu, 1);
    } else {
        btnFigu10.classList.add('buttonObtenida');
        argentina.splice(10, 0, "Giovanni Lo Celso");
    }
});
btnFigu11.addEventListener("click", () => {
    if(btnFigu11.classList.contains('buttonObtenida')){
        btnFigu11.classList.remove('buttonObtenida');
        const indexFigu = argentina.indexOf("Leandro Paredes");
        argentina.splice(indexFigu, 1);
    } else {
        btnFigu11.classList.add('buttonObtenida');
        argentina.splice(11, 0, "Leandro Paredes");
    }
});
btnFigu12.addEventListener("click", () => {
    if(btnFigu12.classList.contains('buttonObtenida')){
        btnFigu12.classList.remove('buttonObtenida');
        const indexFigu = argentina.indexOf("Guido Rodríguez");
        argentina.splice(indexFigu, 1);
    } else {
        btnFigu12.classList.add('buttonObtenida');
        argentina.splice(12, 0, "Guido Rodríguez");
    }
});
btnFigu13.addEventListener("click", () => {
    if(btnFigu13.classList.contains('buttonObtenida')){
        btnFigu13.classList.remove('buttonObtenida');
        const indexFigu = argentina.indexOf("Julián Álvarez");
        argentina.splice(indexFigu, 1);
    } else {
        btnFigu13.classList.add('buttonObtenida');
        argentina.splice(13, 0, "Julián Álvarez");
    }
});
btnFigu14.addEventListener("click", () => {
    if(btnFigu14.classList.contains('buttonObtenida')){
        btnFigu14.classList.remove('buttonObtenida');
        const indexFigu = argentina.indexOf("Joaquín Correa");
        argentina.splice(indexFigu, 1);
    } else {
        btnFigu14.classList.add('buttonObtenida');
        argentina.splice(14, 0, "Joaquín Correa");
    }
});
btnFigu15.addEventListener("click", () => {
    if(btnFigu15.classList.contains('buttonObtenida')){
        btnFigu15.classList.remove('buttonObtenida');
        const indexFigu = argentina.indexOf("Alejandro Gómez");
        argentina.splice(indexFigu, 1);
    } else {
        btnFigu15.classList.add('buttonObtenida');
        argentina.splice(15, 0, "Alejandro Gómez");
    }
});
btnFigu16.addEventListener("click", () => {
    if(btnFigu16.classList.contains('buttonObtenida')){
        btnFigu16.classList.remove('buttonObtenida');
        const indexFigu = argentina.indexOf("Nicolás González");
        argentina.splice(indexFigu, 1);
    } else {
        btnFigu16.classList.add('buttonObtenida');
        argentina.splice(16, 0, "Nicolás González");
    }
});
btnFigu17.addEventListener("click", () => {
    if(btnFigu17.classList.contains('buttonObtenida')){
        btnFigu17.classList.remove('buttonObtenida');
        const indexFigu = argentina.indexOf("Lautaro Martínez");
        argentina.splice(indexFigu, 1);
    } else {
        btnFigu17.classList.add('buttonObtenida');
        argentina.splice(17, 0, "Lautaro Martínez");
    }
});
btnFigu18.addEventListener("click", () => {
    if(btnFigu18.classList.contains('buttonObtenida')){
        btnFigu18.classList.remove('buttonObtenida');
        const indexFigu = argentina.indexOf("Lionel Messi");
        argentina.splice(indexFigu, 1);
    } else {
        btnFigu18.classList.add('buttonObtenida');
        argentina.splice(18, 0, "Lionel Messi");
    }
});
btnFormacion.addEventListener("click", () => {
    if(btnFormacion.classList.contains('buttonObtenida')){
        btnFormacion.classList.remove('buttonObtenida');
        const indexFigu = argentina.indexOf("Formación");
        argentina.splice(indexFigu, 1);
    } else {
        btnFormacion.classList.add('buttonObtenida');
        argentina.splice(19, 0, "Formación");
    }
});

// ----------------------------

submit.addEventListener("click", () => {
    Swal.fire({
        title: '¡Listo!',
        text: 'Tus datos fueron guardados',
        icon: 'success',
        confirmButtonText: 'Continuar'
    })

    datosUsuarioDOM.classList.add('ocultar');
    lista.classList.add('ocultar');
    coleccion.classList.remove('ocultar');

    // crear usuario
    if(inputNombreUsuario.value !== ""){
        const nombre = inputNombreUsuario.value;
        const obtenidas = parseInt(inputFiguritasObtenidas.value);
        const repetidas = parseInt(inputFiguritasRepetidas.value);
        listaUsuarios.push ({nombre: nombre, obtenidas: obtenidas, repetidas: repetidas, argentina: argentina});
    };

    // grabar datos en LS
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));

    // mostrar mensaje
    const ultimoUsuario = listaUsuarios.slice(-1);
    const ultimoUsuarioNombre = ultimoUsuario[0].nombre;

    const mensaje = document.createElement("p");
    mensaje.innerHTML = `¡Gracias por sumarte, ${ultimoUsuarioNombre}!`;
    divMensaje.append(mensaje);
});