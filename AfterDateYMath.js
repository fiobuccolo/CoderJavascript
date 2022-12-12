// after class

// --- OBJETO MATH-----

// Me permite acceder a conjunto de metodos que ayuda con las cuentas matematicas

// PROPIEDADES:

// Valor PI

let pi = Math.PI;
console.log ((pi).toFixed(4));

// constante Euler

let euler = Math.E;
console.log (euler);

// min y max

let minimo = Math.min(76,23,87,1);
console.log (minimo);

let maximo = Math.max (76,23,87,1);
console.log (maximo);

// ceil, floor, round -- sirven para redondear valores

        // ceil: me devuelve el entero mayor o igual mas proximo

        console.log(Math.ceil(1.5)); //2

        //floor: me duevele el entero menor mas proximo

        console.log(Math.floor(1.5)); //1 

        // round: me redondea al entero mas cercarno

        console.log(Math.round(1.4)); // 1
        console.log(Math.round(1.7)); // 2

// square root : calcular raiz cuadrada de un numero

console.log (Math.sqrt(9)) // 3

// random -- trae numero aleatorio. entre 0 y 1

console.log (Math.random());

// SI lo quiero entre  0 y 10 multiplico por 10. 
// entre 0 y 50 -- multimplico por 50

/// --- CLASE DATE --- 
// Me permite trabajar con fechas

//Date - fecha actual
let fechaActual = new Date();

// le puedo pasar parametros para configurar una fecha diferente 

//año, mes, dia
// ATENTO -- Enero es el mes 0 y diciembre es el mes 11

let fechaConFormato = new Date(2021,11,2);
console.log (fechaConFormato);

// guarde con string

let fechaString = new Date ("December 2, 2022 10:00");
console.log(fechaString);


let fecha = new Date();
console.log (fecha.getday());

console.log("Mes: " + fecha.getMonth());

// diferentes formatos para mostrar las fechas

console.log (fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log (fecha.toTimeString());


// --- PROYECTO BLOCKBUSTER -----

class cliente {
        constructor(nombre, edad, membresia){
                this.nombre= nombre;
                this.edad = edad;
                this.membresia = membresia;
        }
}

class pelicula{
        constructor (nombre, genero){
                this.nombre = nombre;
                this.genero = genero;
        }
}

class alquiler{
        constructor(pelicula, cliente,costo,fecha){
                this.pelicula = pelicula;
                this.cliente = cliente;
                this.costo = Math.round(costo);
                this.fecha = fecha || new Date();
        }
}

// si el cliente tiene membresia Gold puede demorar 3 dias en devolver la peli
// si tiene memnbresia normal, puede demorar 2 dias en devolver la peli

const clienteUno = new Cliente ("juan",20,"Gold");
const clienteDos = new Cliente ("Nacho",20,"Normal");

const arrayCliente = [clienteUno,clienteDos];

const peliculaUno = new Pelicula ("El señor de los anillos","Fantasias");
const peliculaDos = new Pelicula ("Padrino","Drama");

const arrayPeliculas = [peliculaUno, peliculaDos];

const alquilerUno = new Alquiler (peliculaUno,clienteUno, 3.80);
const alquilerDos = new Alquiler (peliculaDos,clienteDos,3.28, new Date ("December 1,2022 10:00"));


const arrayAlquileres = [alquilerUno,alquilerDos];

// funcion para saber si hay peliculas que se deven devolver hoy

function diasAlquilerSegunMembresia(cliente){
        if(cliente.membresia = "Gold"){
                return 3;
        } else {
                return 2
        }
}

function peliculasDevolverHoy (alquiler){
        let fechaAlquiler = alquiler.fecha;
        let fechaActual= new Date();
        let diasAlquiler = diasAlquilerSegunMembresia(alquiler.cliente);
        fechaAlquiler.Setdate(fechaAlquiler.getdate()+diasAlquier);
        if (fechaAlquier < fechaActual){
                return `La Pelicula ${alquiler.pelicula.nombre} debe devolverse hoy, su costo es de: $ ${alquiler.costo}`;
        } else {
                return `La Pelicula ${alquiler.pelicula.nombre} no debe devolverse hoy, su costo es de: $ ${alquiler.costo}`;
        }
}

console.log (peliculasDevolverHoy(alquilerUno));
console.log (peliculasDevolverHoy(alquilerDos));









