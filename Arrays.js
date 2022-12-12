//que es un array?
// es un tipo de dato que sirve para almacenar valores en forma de lista. 
//seria como una colección de variables

//---SINTAXIS--

let primeraArray = [1,2,3]; //este array tiene tres valores
console.log (primerArray);

let arrayVacio = [];
console.log (arrayVacio); //ejemplo de uso: para un carrito de compra.

// Puedo ir agregando valores, a un array despues de declararlo. 

arrayVacio = [25,26,99];

// en los array se puede almacenar cualquier valor y 
//modificarlo en cualquier momente

let arrayCombinado = ["hola",99,true];

// los elementos de una array tienen un indice que los identifica
// comienza desde 0

const arrayLetras = ["A","B","C","D"];
//Mpstrar un eelemnto especficio del array

console.log(arrayLetras[2]); // me muestra C

// modificación de elemnto del array

arrayLetras[2] = 100;

// Usamos un bucle para Recorrer un array y acceder a cada elemento de forma individual

for (let i = 0; i < arrayLetras.length; i++){
    alert(arrayLetras[0])
}

// ---- METODOS MAS COMUNES -----

// 1- push(): me permite agregar elemntos por el final del array

let familia = ["Samuel", "Santiago", "victoria"];
console.log("Agrego a mi mascota");
familia.push("Pulga");
console.log(familia);

//2- Unshift(): Aggregar al comienzo del array

familia.unshift("Fatiga");

// 3- pop() me permite eliminar el ultimo elemento del array

familia.pop();

//puedo tener una variable que guarde al valor que elimine
let eliminado = familia.pop();

//4- shift(): para eliminar el primero

let eliminadoshift = familia.shift()

//5- splice: me permite eliminar uno o vsarios elementos de un array
// Funciona con dos parametros:
    // el primero es el indice
    // el segundo la cantidad de veces que tiene que eliminar

let integrantesEliminados = familia.splice(2,2);
console.log (familia);
console.log (integrantesEliminados);

// 6- Join : me permite generar un string con todos los elemntos del array
//le paso un valor por paramentro y ese valor es el elemento que separa

let stringFamilia = familia.join("-")
console.log ("Metodo Join");
console.log (stringFamilia, typeof stringFamilia);

// 7- Concat() : me permite unir dos arrays, retornando uno nuevo

let familaUnidaOtraVez = familia.concat(integrantesEliminados);
console.log (familaUnidaOtraVez, typeof familaUnidaOtraVez);

// 8- Slice() : me retorna una copia del array. yo puedo especificar que indice copia
// le paso por paramentro un valor de inicio y uno de fin (no inclusivo).

let slice = familaUnidaOtraVez.slice(0,2)
console.log (slice);

// 9- indexOf() : me retorna el indice de un elemento

let indiceSamuel = familaUnidaOtraVez.indexOf("Samuel");
console.log ("el indice de Samuel es: " + indiceSamuel);
//Si no encuentra retorna -1
//Si tengo varias "Samuel" me retorna el primero que encuentra


// 10- Includes() : retorna un booleano si encuentra lo que busco

let booleanoSamuel = familaUnidaOtraVez.includes("Samuel");
console.log (booleanoSamuel); //True

// 11 - Reverse() : invierte los elementos de un array
// (metodo destructivo!!) modifica el array original, no genera una copia. 

console.log("Metodo reverse");
console.log(familaUnidaOtraVez);
familaUnidaOtraVez.reverse();
console.log(familaUnidaOtraVez);











