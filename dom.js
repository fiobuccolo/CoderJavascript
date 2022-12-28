// -- PLANTILLAS LITERALES ---

// Hasta el momento si queriamos concatenar datos haciamos:

let cliente =  "Ricky Ford";
let montoCompra = 10000000;

let mensaje = cliente + " realizo una compra por " + montoCompra;
// ``backsticks

let mensajePlantillaLitelar = `El cliente ${cliente} realizo una compra por $${montoCompra}`;

console.log (mensajePlantillaLitelar);

// ----- DOM: document object model

// El dom es una estructura de objetos generdo por el navegador
// la cual representa la pagina HTML actual
// con JS ahora vamos a poder acceder a esa estructura y modificarla de forma dinamica

// cada etiqueta pasa a ser un objeto llamado nodo. 

// todos estos nodos son accesibles para JS a traves del objeto 
//global "document"


// ACCESO A DOM - hay 5 formas:
    // 1) ID: getElementByID

    const tituloPrincipal = document.getElementById("tituloPrincipal");
    console.log(tituloPrincipal);

    // 2) CLASES: getElementByClassName
    const nombres = document.getElementsByClassName("nombres");
    console.log (nombres);

    // 3) nombre de etiqueta getElementsByTagName

    const meses = document.getElementsByTagName("li");
    console.log(meses);
   
    // 4) querySelector: este método nos permite seleccionar nodos con la misma sintaxis que usamos en CSS
        // me trae el primer elemento que encuentra que coincida
    const queryNombres = document.querySelector(".nombres");
    console.log (queryNombres)
   
    // 5) querySelectorAll 

    const queryNombresAll = document.querySelectorAll(".nombres");
    console.log (queryNombresAll)
   

// el htmlcollection lo puedo trabajar como un array:
for (let mes of meses) {
    console.log(mes)
};


// --- MODIFICAR NODOS ---

// innerText = me permite acceder al contenido textual de algun elemento del DOM

// ej. Modificar texto del H1
console.log (tituloPrincipal)
tituloPrincipal.innerText = "Modificamos el titulo con JS"


// innerHtml =  me permite agregar Html dentro del nodo 
const divContenedor = document.getElementById("divConteneder");
divContenedor.innerHTML = `<p>Esto es un párrafo</p>`

// ClassName: me permite agregar un nombre de clase

tituloPrincipal.className = "titulo";

// ---- AGREGAR NODOS -----

const conteneder = document.getElementById("contenedor");

    //Crear elemento
const parrafo = document.createElement("p");
parrafo.innerText = "Este es un párrafo agregado desde JS"
parrafo.className = "titulo";
    // Asociar ese elemento al padre 
conteneder.appendChild(parrafo);


// ---- ELIMINAR NODOS --- 

// remove () 
parrafo.remove();


// --- CREAMOS OBJETOS DE FORMA DINAMICA:

class Producto {
    constructor(nombre, precio,url){
        this.nombre = nombre;
        this.precio = precio;
        this.url = url;
    }
}

const yerba = new Producto("Yerba",500,"yerba.jpeg");
const harina = new Producto("Harina",400,"yerba.jpeg");
const pan = new Producto("Pan",200,"yerba.jpeg");
const leche = new Producto("Leche",350);

const arrayProductos = [yerba,harina,pan,leche];

const contenedorProductos = document.getElementById("contenedorProductos");

arrayProductos.forEach(producto =>{
    const div = document.createElement("div");
    div.className = "caja";
    div.innerHTML = `<p>Nombre: ${producto.nombre} </p>
                     <p>Precio: ${producto.precio} </p>
                     <img class="imagen" src = "${producto.url}" alt = "${producto.nombre}">
                      <button>Agregar al carrito</button>`
    contenedorProductos.appendChild(div);
})