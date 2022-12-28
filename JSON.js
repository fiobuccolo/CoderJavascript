/* STORAGE **/

//Nos permite guardar datos de manera locan en el navegador

 /*  2 formas de guardar datos: 
  1) LocalStorage: lo guarda de manera indefinida, hasta borrarlo manualmente
  2/ SesionStorage: Lo guarda hasta que el usuario cierra el navegador */

  /* LOCAL STORAGE 
Para guardar datos en el local storage tengo que usar un metodo que se llama setItem

lo hacemos llamando a un objeto global que se llama localStorage*/

// localStorage.setItem();

/* Este metodo recibe dos paramentros 
 una clave y un valor*/


// EJEMPLO A

localStorage.setItem("saludo","Hola mundo");

// EJEMPLO B

localStorage.setItem("número",1234);

// EJEMPLO C

localStorage.setItem("booleano",true);

// ----  COMO RECUPERO ESTOS DATOS  -----

// metodo getItem()

let saludo = localStorage.getItem("saludo");
console.log(saludo);

// cuando recupero datos me lo pasa como string
// tengo que parseint

/// Trabajamos con el SessionStorage:
// Guardamos datos con el metodo setItem();


//almacenamos saludo en el sesion storage

sessionStorage.setItem("saludoNuevo", "Hola mundillo");

//Recupear

let saludo2 = sessionStorage.getItem("saludoNuevo");
console.log (saludo2);

// ELIMINAR datos del localStorage

localStorage.removeItem("saludo");

// Eliminar toda la información 

localStorage.clear();


// recorremos con un bucle el local storage

console.log("Recorremos el localstorgae");

for (let i= 0; i < localStorage.length; i++){
    let clave = localStorage.key(i);
    let valor = localStorage.getItem(clave);
    console.log(clave, valor);
}


// *---- ALMACENAR OBJETOS EN EL STORAGE -----


// Todo lo que se almacena en el storage esta en formato string
/**  por lo tanto, si queremos almacenar un objeto, tenemos que 
convertirlo en string */

// JSON: Javascript object Notation
// Es un formato de texto ligero para el intercambio de datos

const samuel ={
    nombre: "Samuel",
    apellido : "Tocaimaza",
    edad: 18,
    casado: false,
}

// Utilizamos el metodo JSON.stringify()

const samuelJSON = JSON.stringify(samuel);
console.log(samuelJSON), typeof samuelJSON;

// lo almaceno en el local storage

localStorage.setItem("samuel", samuelJSON);


// para recuperar un JSON del LocalStorage y convertirlo en objeto

const personaJSON = localStorage.getItem("samuel");
const persona = JSON.parse(personaJSON);

console.log(persona,typeof persona);

// EJEMPLO CAMBIAR EL MODO DARK

// 1) crear un boton que cambie el modo de la pagina
// 2) almacenamos el modo en el local storage
// 3) al recargar la pagina, recuperamos el modo del localStorage
// 4) Cambiar el modo de la pagina

// 


const botonFondo = document.getElementById("botonFondo");

botonFondo.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")) {
        localStorage.setItem("modo", "dark");
    } else {
        localStorage.setItem("modo", "light");
    }
});

//Recuperamos el modo del localStorage: 

const modo = localStorage.getItem("modo");

if(modo === "dark") {
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark");
}



// RECORDEMOS
// Document es el objeto que representa el documento HTML
// Body
// Classlist es una propiedad que nos devuelve una lista de las clases del elemento
// Toggle es un metodo que nos permite agregar o eliminar una clase del elemento



// EJEMPLO 2

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const producto1 = new Producto ("Camisa", 500);
const producto2 = new Producto ("Camisa2", 500);
const producto3 = new Producto ("Camisa3", 500);
const producto4 = new Producto ("Camisa4", 500);
const producto5 = new Producto ("Camisa5", 500);

const carrito = [];

carrito.push (producto1);
carrito.push (producto2);
carrito.push (producto3);
carrito.push (producto4);
carrito.push (producto5);

console.log(carrito);

// convertir carrito en JSON
const carritoJSON = JSON.stringify(carrito);

// almacenar en local storage
localStorage.setItem("carrito",carritoJSON);

// recuperar el carrito

const carritoRecuperado = localStorage.getItem("carrito");

// convertimos de json a objeto

const carritoObjeto = JSON.parse(carritoRecuperado);

// Imprimimos el carrito

const contenedorCarrito = document.getElementById("carrito");

carritoObjeto.forEach(producto => {
    contenedorCarrito.innerHTML += `<p>${producto.nombre} - ${producto.precio}</p>`;
});

