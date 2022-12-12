
//hasta la clase 4 
let nombreAlumno = "Samuel"; 
let apellidoAlumno = "Gonzalez";
let edadAlumno = 23;

//sintaxis objetos
let alumnoSamuel = {
    nombre :"samuel",
    apellido: "Gonzalez",
    edad:"23",
    carrera: "programación",
    cuota: true,
}

//caracteristicas objetos:
// Un objeto es una colección de datos relacionados como una entidad
//tienen propiedades y metodos (Acciones que puede realizar)

// las propiedades son datos que describen al objeto. ej nombre, apellido, carrera
//las propiedades se definen como pares de nombre y valor
// los metodos son las funciones que se ejecutan en el objeto
//
// ejemplos de objetos

let perro = {
nombre: "Coderdog",
edad: 5,
raza:"Bulldog",
color: "negro",
};

let auto = {
    marca:"Ford",
    modelo: "Ka",
    fabricación: 2008,
    km: 100000,
    precio: 23132222,
};

console.log (auto);
console.log (typeof auto);

//ACCEDER A CADA PROPIEDAD DEL OBJETO

// 1- utilizo el nombre del objeto luego el (punto)

console.log (auto.precio);

// 2- otra forma de hacerlo es con []

console.log (auto["precio"])

// ASIGNAR NUEVOS VALORES A ESTAS PROPIEDADES

    console.log ("Vamos a modificar el precio");
    auto.precio = 4000000;
    console.log (auto.precio);

// que pasa si trabajo con constantes?

const yerba = {
    nombre: "Andrecito",
    precio: 360,
    cantidad: 300,
};

console.log (yerba);
yerba.precio = 450;


// FUNCIONES CONSTRUCTRRAS ----
    // EN JS, el constructor de un objeto es una funcion 
    //que usamos para crear un nuevo objeto cada vez que sea necesario


    function Persona(nombre, apellido,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.eddad = edad;
    }

    const persona1 = new Persona("Carlos","Lopez", 30);
    console.log (persona1)

    // ejemplo crear una persona pidiendo datos por prompt

    let nombre = prompt("Ingrese su nombre: ");
    let apellido = prompt("Ingrese su apellido: ");
    let edad = prompt("Ingrese su edad: ");

    const personita = new (nombre,apellido,edad)
    console.log (personita);

    // DIFERENCIA ENTRE METODOS Y FUNCIONES
// las funciones son de acceso global 
// los metodos son funciones que utiliza un objeto especifico. (invocado por el objeto que la contiene)


function Persona(nombre, apellido,edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.eddad = edad;
    //metodo (funcion ejecutada a traves de un objeto)
    this.saludar = function(){
        console.log ("Hola, soy " + this.nombre);
    }
}

personita.saludar();

// CLASES
//proveen una sixtraxis mas clara y simple para
//crear objetos. son un equialente al empleo de la funcion constructora
//y permite definir distintos tipos de metodo

class Producto{
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
//metodo: (funcion ejecutada a traves de un objeto)
    sumaIva(){
        return this.precio * 1.21;
    }
}

const fideos = new Producto ("Fideos",90);
console.log ("El precio de los fideos es de: " + fideos.precio + 
"  y con el iva incluido es de: " + (fideos.sumaIva().toFixed(2)));


//METODOS EN OBJETOS JS (tolowercase() y to uppercase())

let frase = "Hola, soy un string";
console.log (frase.toUpperCase());

// Length es una propiedad que nos devuelve la cantidad
//de caracteres que tiene un string

console.log (frase.length);

// operador in y for ...in

let homero ={
    nombre: "Homero",
    apellido: "Simpson",
    edad: 39,
    profesion: "Inpector de seguridad nuclear",
};
// el operador IN nos permite saber si un objeto tiene una propiedad o no
// retorna true o false

console.log ("nombre" in homero); //true
console.log ("estado" in homero); // false

// For ...In
//permite recorrer las propiedades de un objeto
//propiedad es una variable auxiliar 
for (let propiedad in homero){
    console.log (propiedad);
}

//mostrar cada propiead con su valor
for (let propiedad in homero){
    console.log(propiedad + ": " + homero.propiedad);
}