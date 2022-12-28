// --EVENTOS ---
// los eventos son la manera que tenemos en JS de controlar
// las acciones de los usuarios, y definir un comportamiento cuando se produzcan

// Utilizamos una herramiento : Manejador de eventos

// Hay varias formas de trabajarlo

// 1) 

const btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{
    console.log ("hola, me hiciste click!");
})

// 2) utilizando las propiedades del NODO
const btn2 = document.getElementById("btn2");
btn2.onclick = () => {
    console.log ("Usando propiedades!");
}

// 3) escribiendo la funcion en el HTML

function jsEnHtml(){
    console.log("Estoy llamando a la funcion desde el HTML")
}

//--- EVENTOS MAS COMUNES

    //MOUSE -
    //mouseover
    //mouseout

    const caja = document.getElementById("caja");
    caja.onmouseover = ()=>{
        console.log("mouse over event")
    }
 
    caja.onmouseout = ()=>{
        console.log("mouse out event")
    }

    //mousemove

    caja.onmousemove = ()=>{
        console.log("pasaste el mouse por la caja")
    }

    // TECLADO
    const campoTexto = document.getElementById("campoTexto");

// Keydown y keyup
campoTexto.onkeydown = () =>{
    console.log("presionaste una tecla")
}
campoTexto.onkeyup = () =>{
    console.log("soltaste la tecla")
}

// EVENTO CHANGE: se activa cuando cambia el valor de un elemento
const texto = document.getElementById("texto");
texto.addEventListener("change", () =>{
    console.log ("apretaste enter")
})


// EVENTO INPUT: Me permite ejecutar una funcion cada vez que se ingrese texto 
// la propiedad value me permite acceder al texto ingresado por el usuario
texto.addEventListener("input", ()=>{
    console.log ("Ingresaste texto")
    let contenido = texto.value;
    console.log(contenido)
})


// EVENTO SUBMIT
const formulario = document.getElementById("formulario");
class Cliente {
    constructor(nombre, apellido){
    this.nombre = nombre;
    this.apelllido = apellido;
    }
}
const arrayClientes = []

formulario.addEventListener("submit", ()=>{
    //Evito el comportamiento por default de formulario, de recargar la pagina
    event.preventDefault();

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    // Crear un objeto cliente
    const cliente = new Cliente(nombre.value,apellido.value);
    arrayClientes.push(cliente);
    console.log(arrayClientes);
    // reseteamos el formulario
    formulario.reset();
})

            