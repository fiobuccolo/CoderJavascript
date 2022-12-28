/* TU ALMACEN. COM CARRITO DE COMPRAS **/

// FUNCIONALIDADES DE UN CARRITO DE COMPRAS

    // 1) Mostrar productos en el HTML de forma dinamica
        // -- lo hacemos a traves de javascrip modificando el DOM
    // 2) Agregar productos en el carrito 
    // 3) Evitar los items repetidos (se trabaja con cantidad)
    // 4) Mostrar el carrito en el HTML de forma dinamica
    // 5) Debe eliminar productos del carrito
    // 6) Calcular el total de la compra
    // 7) Vaciar el carrito
    // 8) Guardar el carrito en el local storage


// ---------------- --------- -------------- 


class Producto {
    constructor(id,nombre,precio,img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}

const arroz = new Producto (1,"Arroz",100,"img/arroz.png");
const azucar = new Producto (2,"Azucar",80,"img/azucar.png");
const yerba = new Producto (3,"Yerba",200,"img/yerba.png");
const fideos = new Producto (4,"Fideos",50,"img/fideos.png");
const mermelada = new Producto(5,"Mermelada",150,"img/mermelada.png"); 
const queso = new Producto (6,"Queso",450,"img/queso.png");
const sal = new Producto (7,"Sal",70,"img/sal.png");
const tomate = new Producto (8,"Tomate",130,"img/tomate.png");

// Creamos un array con todo nuestro catalogo de productos

const productos = [arroz,azucar,yerba,fideos,mermelada,queso,sal,tomate];

// Creamos el array del carrito

let carrito = [];
// cargar carrito desde el local storage
if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"))
}


// Modificamos el DOM mostrando los productos:

const contenedorProductos = document.getElementById("contenedorProductos");

// Creamos una función para mostrar los productos

const mostrarProductos = () => {
    productos.forEach (producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3","col-md-6","col-xs-12");
        card.innerHTML = `
        <div class= "card">
            <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
            <div class="card-body">
                <h5>${producto.nombre}</h5>
                <p>${producto.precio}</p>
                <button class="btn colorBoton" id="boton${producto.id}">Agregar al Carrito</button>
            </div>
        </div>
            `

    contenedorProductos.appendChild(card);

    // Agregar productos al carrito 
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            console.log("Agregaste el producto");
            agregarAlCarrito(producto.id);
        })
    })
}

mostrarProductos();

//creamos la Funcion agregar al carrito

const agregarAlCarrito = (id) => {
    // primero chequeo si ya existe en el carrito
    const productoEnCarrito = carrito.find(producto => producto.id === id);
        // dp agrego o sumo cantidad
        if(productoEnCarrito) {
            productoEnCarrito.cantidad++;
        } else { 
            const producto = productos.find(producto => producto.id === id);
            carrito.push(producto);
        }
         // TRABAJAMOS CON EL LOCAL STORAGE
         localStorage.setItem("carrito",JSON.stringify(carrito));
        calcularTotal();
        
}


// creamos funcion de ver cuantos productos hay en el carrito

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click",()=>{
    mostrarCarrito();
});

// Funcion para mostrar el carrito

const mostrarCarrito =()=>{
    // primero verificar que no lo estoy mostrando ya, asi no duplico los productos 
    //LIMPIAR HTML
    contenedorCarrito.innerHTML = "";

    carrito.forEach (producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3","col-md-6","col-xs-12");
        card.innerHTML = `
        <div class= "card">
            <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
            <div class="card-body">
                <h5>${producto.nombre}</h5>
                <p>${producto.precio}</p>
                <p>${producto.cantidad}</p>
                <button class="btn colorBoton" id="eliminar${producto.id}" >Eliminar Producto</button>
            </div>
        </div>
            `
    contenedorCarrito.appendChild(card);
    // ELIMINAR PRODUCTO
        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () =>{  
        console.log("Eliminar del carrito")
        eliminarDelCarrito(producto.id); 
        }) 
    })
    calcularTotal();

};

// FUNCION PARA ELIMINAR EL PRODUCTO DEL CARRITO

const eliminarDelCarrito = (id) => {
    const producto = carrito.find (producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice,1);
    mostrarCarrito();
       // TRABAJAMOS CON EL LOCAL STORAGE
       localStorage.setItem("carrito",JSON.stringify(carrito));
}


// VACIAMOS TODO EL CARRITO DE COMPRAS

const vaciarCarrito = document.getElementById("vaciarCarrito");
vaciarCarrito.addEventListener("click", () => {
    console.log("vaciar carrito")
    vaciarTodoElCarrito();
})

// FUNCION DE VACIAR TODO EL CARRITO

    const vaciarTodoElCarrito = () =>{
        carrito = [];
        mostrarCarrito();
           // TRABAJAMOS CON EL LOCAL STORAGE
           localStorage.clear();
    }


    // Mostramos el mensaje de total de la compra
    
    const total = document.getElementById("total");

    const calcularTotal = () => {
        let totalCompra = 0;
        carrito.forEach(producto =>{
            totalCompra += producto.precio * producto.cantidad;
            // += es igual a poner totalCompra = totalCompra+producto.precio*producto.cantidad
        })

        total.innerHTML = `Total: $${totalCompra}`;
    }

    // GUARDAR EN EL LOCAL STORAGE