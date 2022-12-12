// -- FUNCIONES DE ORDEN SUPERIOR ----

// Una funcion de orden superior es una funcion que puede recibir
//por parámetro una funcion o retornar una funcion. 

//EJEMPLO

// 1- function estoEsUnaFuncion(otraFuncion){}
// 2- function estoEsUnaFuncion(){
//      return otraFuncion()
//        }


//METODOS DE BUSQUEDA Y TRANSFORMACIÓN

//JS incluye de forma nativa varias funciones de orden superior. 
//Hay metodos de busqueda y transformación que nos permite operar sobre los arrays

class Producto {
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const fideos = new Producto ("Fideos",100);
const harina = new Producto ("Harina",250);
const gaseosa = new Producto ("Coca Cola",1000);
const pan = new Producto ("Pan",120);

const arrayProductos = [fideos, harina, gaseosa, pan];
console.log("Productos en stock");
console.log (arrayProductos);

// 1) ForEach : recorre el array y ejecuta una funcion por cada elemento 

console.log("For each: ");
//EJEMPLO A
//nombramosalarray.llamamosalmetodo ((funcionflecha))
//la funcion flecha, cada objeto lo muestro por consola
arrayProductos.forEach((producto)=> {
    console.log(producto);
})


//EJEMPLO B: recorrer el mismo array pero mostra el valor precio
arrayProductos.forEach((producto)=> {
    console.log(producto.precio);
})

// 2) Find: buscamos un elemento del array y retorna el primer elemento que
// cumpla con una condicion -- sino encuentra devuelve undefined. 

//EJEMPLO A:
//primero necesito una variable que almacene el valor buscado

const buscado = arrayProductos.find(producto => producto.nombre === "Coca Cola");
console.log ("FIND ");
console.log(buscado); // retorna rodo el objeto 


// 3) Filter: recibe una funcion comparadora por parametro
// Retorna un nuevo array con los elementos que cumplan con la condicion
// si no hay concidencia retorna una array vacio
const arrayProductosMenos200 = arrayProductos.filter(producto => producto.precio < 200);
console.log ("Filter: ")
console.log (arrayProductosMenos200);


// 4) Some(): funciona igual que el filter, con la diferencia que retorna true o false si encuentra o no elementos

const hayFideos = arrayProductos.some(producto => producto.nombre === "Fideos");
console.log("¿Hay fideos? lo averiguamos con el método some: " + hayFideos);

// 5) Map(): me permite crear un nuevo array con todos los elemntos
// del original pero transformados. 

// Ejemplo si quiero crear un array de productos como el original, pero ahora
//que tenga el IVA incluido. 

const arrayProductosConIva = arrayProductos.map((producto) => {
    return{
        nombre : producto.nombre,
        precio : (producto.precio * 1,21)
    }
})

console.log (arrayProductosConIva)

// EJEMPLO 2- crear un array pero tomando solo ciertos datos del original. 

const arrayNombreProductos = arrayProductos.map(producto => producto.nombre);
console.log (arrayNombreProductos);

// 6) REDUCE(): Nos permite obtener un unico valor despues de iterar sobre un array
// por ejemplo el total de un carrito. 

// podemos trabajar con dos paramentros: un acumulador y el elemento a operar
// tambien debemos colocar el valor inicial del acumulador

let totalPrecio = arrayProductos.reduce((acumulador, elemento) => acumulador + elemento.precio,0);
console.log (totalPrecio);

// 7) Sort(): permite reordenar un array segun un criterio que definimos.
// (METODO DESTRUCTIVO!!)

// EJEMPLO A: Ordeno un array de numero, de menor a mayor

const numeros = [99,50,74,8,23];
numeros.sort ((a,b) => a - b);
console.log (numeros);

// EJEMPLO B - DE MAYOR A MENOR

numeros.sort ((a,b) => b -a);
console.log (numeros);

// EJEMPLO C - Ordeno precios en un array de objetos

arrayProductos.sort((a,b) => a.precio - b.precio);
console.log (arrayProductos);


// ----- EJEMPLO BANCO: ALTA, BAJA Y MODIFICACION DE CLIENTES-----

class Cliente {
    constructror(nombre, apellido, dni, saldo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.saldo = saldo;
    }
}

const clienteSamuel = new Cliente ("Samuel","Tocaimaza",32425202, 10000);
const clienteJuan = new Cliente ("Juan","Perez",29989213, 100);
const clienteMaria = new Cliente ("Maria","Perez",120333229, 79800);
const clienteAdriana = new Cliente ("Adriana","Gonzalez",11734432, 100);
// iniciar el array de clientes con valores existentes
const arrayClientes = [clienteSamuel,clienteJuan,clienteAdriana,clienteMaria];
// o agregarlos dp con push 
// arrayClientes.push(clienteSamuel);
// arrayClientes.push(clienteJuan);
// arrayClientes.push(clienteMaria);
// arrayClientes.push(clienteAdriana);
console.log (arrayClientes);

// menu de opciones

function menu(){
    alert("Bienvenido al Banco Coder")
    let opcion = ParseInt(prompt("Ingrese una opcion: \n 1) alta de clientes \n 2) Baja de clientes \n 3) Modificación de clientes \n 4) Consulta de clientes \n 5) Salir"));
    return opcion;
}

// funcion para dar de alta

function altaCliente (){
    let nombre = prompt("ingrese el nombre del cliente: ");
    let apellido = prompt("ingrese el apellido del cliente: ");
    let dni = ParseInt(prompt("ingrese el dni del cliente: "));
    let cliente = new Cliente(nombre,apellido,dni,0);
    arrayClientes.push(cliente);
    console.log (arrayClientes);
}

// funcion para dar de baja

function bajaCliente (){
    let dni = ParseInt(prompt("ingrese el dni del cliente: "));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    let indice = arrayClientes.indexOf(cliente);
    arrayClientes.splice(indice,1);
    console.log (arrayClientes);
}

// funcion para modificar

function modificarCliente (){
    let dni = ParseInt(prompt("ingrese el dni del cliente: "));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    let indice = arrayClientes.indexOf(cliente);
    let nombre = prompt("ingrese el nuevo nombre del cliente: ");
    let apellido = prompt("ingrese el nuevo apellido del cliente: ");
    let clienteModificado = new Cliente (nombre,apellido,dni,0);
    //splice-- tercer parametro: sirve para eliminar el original y sustittuir por tercer parametro. 
    arrayClientes.splice(indice,1,clienteModificado);
    console.log(arrayClientes)
}

// funcion para consultar

function consultarCliente (){
    let dni = ParseInt(prompt("ingrese el dni del cliente: "));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    console.log (cliente);
}

// funcion para salir

function Salir (){
    alert("Gracias por utilizar nuestros servicios")
}

//  ----- EJECUCION DEL PROGRAMA BANCOOOOO -----

let opcion = menu ()
    switch(opcion){
        case 1:
            altaCliente()
            break;
        case 2:
            bajaCliente();
            break;
        case 3:
            consultarCliente();
            break;
        case 4:
            modificarCliente();
            break;
        case 5:
            Salir();
            break;
        default:
            alert("opcion incorrecta");
            break;
    }