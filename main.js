
// Necesito que el usuario ingrese un medio de cobro (Tarjeta, sepa, o clearpay)
// Necesito que el usuario ingrese un monto para ventas de suscripción y un monto para ventas unicas
// Variables definidas por el negocio
        // - Comisiones por pago de tarjeta
        //     1,4% + 0,25 fijo
        // - comisiones por sepa 
        //     0,35 fijo
        // - comisiones por clerpay 
        //     6%

        // comisiones para suscripciones independientemente del medio de cobro
        //     0,5%

//--------- CLASE OBJETOS ----------
        /// class Producto{
                //constructor (nombre, precio){
                //   this.nombre = nombre;
                //   this.precio = precio;
                // }
            //metodo: (funcion ejecutada a traves de un objeto)
            //  sumaIva(){
                //    return this.precio * 1.21;
            //  }
            // }


            // const fideos = new Producto ("Fideos",100);

    // ------- CLASE ARRAYS

    //      let primeraArray = [1,2,3]; 

    // Usamos un bucle para Recorrer un array y acceder a cada elemento de forma individual

            // for (let i = 0; i < arrayLetras.length; i++){
            //     alert(arrayLetras[0])
            // }

   
    class Cobro {
        constructor(cliente,medioDePago,monto,plan,fecha){
        this.cliente = cliente;
        this.medioDePago = medioDePago;
        this.monto = monto;
        this.plan = plan;
        this.fecha = fecha || new Date();
        }
    };

    const cobro1 = new Cobro (12033229,"tarjeta",5000,"unico");
    const cobro2 = new Cobro (12033229,"tarjeta",2000,"unico");
    const cobro3 = new Cobro (12033229,"sepa",3500,"unico");
    const cobro4 = new Cobro (12033229,"sepa",2500,"unico");
    const cobro5 = new Cobro (32425202,"sepa",5600,"unico");
    const cobro6 = new Cobro (32425202,"tarjeta",5700,"unico");
    const cobro7 = new Cobro (32425202,"tarjeta",5080,"unico");
    const cobro8 = new Cobro (29989213,"tarjeta",600,"unico");
    const cobro9 = new Cobro (29989213,"tarjeta",7800,"unico");
    let arrayCobros = [cobro1,cobro2,cobro3,cobro4,cobro5,cobro6,cobro7,cobro8,cobro9];

    class Cliente {
        constructor(nombre, cuit,uelzPlan){
        this.nombre = nombre;
        this.cuit = cuit;
        this.uelzplan = uelzPlan;
        }
    };

    const cliente1 = new Cliente ("Empresa1",12033229,"Free");
    const cliente2 = new Cliente ("Empresa 2",32425202,"Free");
    const cliente3 = new Cliente ("Empresa 3",29989213,"Free");

    let arrayClientes = [cliente1,cliente2,cliente3];

    class MedioDePago {
        constructor(nombre,comisionFija,comisionVariable,comisionSuscripcion){
            this.nombre = nombre;
            this.comisionFija = comisionFija;
            this.comisionVariable = comisionVariable;
            this.comisionSuscripcion = comisionSuscripcion;
        }
    };


      const tarjeta = new MedioDePago ("tarjeta",0.25,0.014,0.005);
      const sepa = new MedioDePago ("sepa",0.35,0,0);
      const afterclay = new MedioDePago ("afterclay",0,0.06,0);

      
      const arrayMedioDePago = [tarjeta,sepa,afterclay];
      console.log (arrayMedioDePago);


//--------- FUNCIONES -----------
        // Menu de opciones

         function menu(){
            alert("Bienvenido a Uelz")
            let opcion = parseInt(prompt("Ingrese una opcion: \n 1) Registrarse como cliente \n 2) Registrar un nuevo cobro \n 3) Consulta de cobros \n 4) Calculo de comisiones (in progress) \n 5) Eliminar un cobro (proximamente) \n 5) Salir"));
            return opcion;
        }
  
         // Funcion para dar de alta un cobro
        function altaCobro (){
            let cliente = parseInt(prompt("ingrese el cuit del cliente: "));
            let medioDePago = prompt("ingrese el medio de pago: ");
            let monto = parseInt(prompt("ingrese el monto: "));
            let plan =  prompt("ingrese si fue un cobro UNICO o de SUSCRIPCION: ");
            let fecha = new Date()
            let cobro = new Cobro (cliente,medioDePago,monto,plan,fecha);
            arrayCobros.push(cobro);
            console.log (arrayCobros);
            alert ("El cobro se ha registrado con exito")
            }

        // Funcion para Alta de cliente
        function altaCliente (){
            let nombre = prompt("ingrese el nombre del cliente: ");
            let cuit = parseInt(prompt("ingrese el cuit de la empresa: "));
            let uelzPlan = prompt("Ingrese el plan de Uelz contratado: \n 1) Free \n 2) Gold");
            let cliente = new Cliente (nombre,cuit,uelzPlan);
            arrayClientes.push(cliente);
            console.log (arrayClientes);
            alert ("El cliente se ha registrado con exito")
            }

        // Funcion para consultar cobros
        function consultarCobros (){
            let cuit = parseInt(prompt("ingrese el cuit del cliente: "));
             const arrayCobrosDelCliente = arrayCobros.filter(Cobro => Cobro.cliente === cuit);
                    console.log ("  Filter: ")
                    console.log (arrayCobrosDelCliente);
            let totalcobrado = arrayCobrosDelCliente.reduce ((acumulador,elemento) => acumulador + elemento.monto,0)
            console.log (cuit)
            console.log (totalcobrado);
        }


/// ---- CLASE FUNCIONES DE ORDEN SUPERIOR ---------
            // 3) Filter: recibe una funcion comparadora por parametro
                // Retorna un nuevo array con los elementos que cumplan con la condicion
                // si no hay concidencia retorna una array vacio
                    // const arrayProductosMenos200 = arrayProductos.filter(producto => producto.precio < 200);
                    // console.log ("Filter: ")
                    // console.log (arrayProductosMenos200);


            // 6) REDUCE(): Nos permite obtener un unico valor despues de iterar sobre un array
                // por ejemplo el total de un carrito. 
                // podemos trabajar con dos paramentros: un acumulador y el elemento a operar
                // tambien debemos colocar el valor inicial del acumulador
                    // let totalPrecio = arrayProductos.reduce((acumulador, elemento) => acumulador + elemento.precio,0);
                    /// console.log (totalPrecio);

// -----------------------------------------------------------


        // Funcion para calcular comisiones
        function consultarComisiones(){
            let cuit = parseInt(prompt("ingrese el cuit del cliente: "));
            CalculoComisionesTarjeta (cuit);
        }

        // Funcion para eliminar cobro
        function bajaCobro (){
            let dni = ParseInt(prompt("ingrese el dni del cliente: "));
            let cliente = arrayClientes.find(cliente => cliente.dni === dni);
            let indice = arrayClientes.indexOf(cliente);
            arrayClientes.splice(indice,1);
            console.log (arrayClientes);
        }

        // FUncion para salir
        function Salir (){
            alert("Gracias por utilizar nuestros servicios")
        }



//// ------------  FUNCIONES CALCULO COMISIONES ----------

function CalculoComisionesTarjeta (cuit) {
        // FIltro y totalizador para cobros de suscripción con tarjeta
        const arrayCobrosTarjetaSuscripcion= arrayCobros.filter(Cobro => (Cobro.cliente === cuit)& (Cobro.medioDePago == "tarjeta")& (Cobro.plan == "suscripcion") );
        console.log ("  Filter: ")
        console.log (arrayCobrosTarjetaSuscripcion);
        let totalCobradoTarjetaSuscripcion = arrayCobrosTarjetaSuscripcion.reduce ((acumulador,elemento) => acumulador + elemento.monto,0)
        console.log (cuit)
        console.log (totalCobradoTarjetaSuscripcion);
        // FIltro y totalizador para cobros con tarjeta
        const arrayCobrosTarjeta= arrayCobros.filter(Cobro => (Cobro.cliente === cuit)& (Cobro.medioDePago == "tarjeta"));
        console.log ("  Filter: ")
        console.log (arrayCobrosTarjeta);
        let totalCobradoTarjeta = arrayCobrosTarjeta.reduce ((acumulador,elemento) => acumulador + elemento.monto,0)
        console.log (cuit)
        console.log (totalCobradoTarjeta);
        let cantidadCobrosTarjeta = arrayCobrosTarjeta.length
        console.log (cantidadCobrosTarjeta);
        let sumaComisionTarjetaSuscricion = comisionesPorSuscripcion(totalCobradoTarjetaSuscripcion);
        let sumaComisionTarjetaFijas = comisionesFijas(cantidadCobrosTarjeta);
        let sumaComisionTarjetaVariables = comisionesVariables (totalCobradoTarjeta);
       let comisionesTotales = sumaComisionTarjetaSuscricion + sumaComisionTarjetaFijas + sumaComisionTarjetaVariables
        console.log (comisionesTotales);
}


// ----- Calculo de comisiones tarjeta -----
    function comisionesPorSuscripcion (totalCobrado) {
        // Comisiones por suscripción
        let comisionTarjetaSuscripción = arrayMedioDePago
        .filter (MedioDePago => MedioDePago.nombre == "tarjeta")
        .map (MedioDePago => MedioDePago.comisionSuscripcion);
        let sumaComisionTarjetaSuscripcion = comisionTarjetaSuscripción * totalCobrado;
        console.log ("Comsiones suscripcion");
        console.log (comisionTarjetaSuscripción);
        console.log (sumaComisionTarjetaSuscripcion);
        return sumaComisionTarjetaSuscripcion;
    }        
        
    function comisionesFijas (cantidadDeCobros) {
        // Comisiones por comision fija por transacción
        let comisionTarjetaFija = arrayMedioDePago
        .filter (MedioDePago => MedioDePago.nombre == "tarjeta") 
        .map (MedioDePago => MedioDePago.comisionFija);
        let sumaComisionTarjetaFija = comisionTarjetaFija * cantidadDeCobros;
        console.log ("Comsiones fija");
        console.log (comisionTarjetaFija);
        console.log (sumaComisionTarjetaFija);
        return sumaComisionTarjetaFija;
    }

    function comisionesVariables (totalCobrado) {
        // Comisiones por comision variable por monto
        let comisionTarjetaVariable = arrayMedioDePago
        .filter (MedioDePago => MedioDePago.nombre == "tarjeta") 
        .map (MedioDePago => MedioDePago.comisionVariable);
        console.log (comisionTarjetaVariable)
        let sumaComisionTarjetaVariable = comisionTarjetaVariable * totalCobrado
        console.log ("Comisiones variable");
        console.log (comisionTarjetaVariable)
        console.log (sumaComisionTarjetaVariable);
        return sumaComisionTarjetaVariable;
    }






//  ----- EJECUCION DEL PROGRAMA-----

let opcion = menu ()
    switch(opcion){
        case 1:
            altaCliente()
            break;
        case 2:
            altaCobro();
            break;
        case 3:
            consultarCobros();
            break;
        case 4:
            consultarComisiones();
            break;
        case 5:
            Salir();
            break;
        default:
            alert("opcion incorrecta");
            break;
    }