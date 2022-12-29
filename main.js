
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
        constructor(cuit,medioDePago,monto,plan,fecha){
        this.cuit = parseInt(cuit);
        this.medioDePago = medioDePago;
        this.monto = parseInt(monto);
        this.plan = plan;
        this.fecha = fecha || new Date();
        }
    };
    // COMENTO LOS COBROS PORQUE EN PREENTREGA LOS CREAMOS DESDE input de datos
    // const cobro1 = new Cobro (12033229,"tarjeta",5000,"unico");
    // const cobro2 = new Cobro (12033229,"tarjeta",2000,"unico");
    // const cobro3 = new Cobro (12033229,"sepa",3500,"unico");
    // const cobro4 = new Cobro (12033229,"sepa",2500,"unico");
    // const cobro5 = new Cobro (32425202,"sepa",5600,"unico");
    // const cobro6 = new Cobro (32425202,"tarjeta",5700,"unico");
    // const cobro7 = new Cobro (32425202,"tarjeta",5080,"unico");
    // const cobro8 = new Cobro (29989213,"tarjeta",600,"unico");
    // const cobro9 = new Cobro (29989213,"tarjeta",7800,"unico");
    
    // Creamos el array de cobros 
    let arrayCobros = [];

    class Cliente {
        constructor(nombre, cuit,uelzPlan){
        this.nombre = nombre;
        this.cuit = parseInt(cuit);
        this.uelzplan = uelzPlan;
        }
    };
    // COMENTO LOS CLIENTES PORQUE EN PREENTREGA LOS CREAMOS DESDE input de datos
    // const cliente1 = new Cliente ("Empresa1",12033229,"Free");
    // const cliente2 = new Cliente ("Empresa 2",32425202,"Free");
    // const cliente3 = new Cliente ("Empresa 3",29989213,"Free");

     // Creamos el array de clientes 
    let arrayClientes = [];

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

// CARGAR COBROS y CLIENTES DESDE EL LOCAL STORAGE

    if(localStorage.getItem("clientes")){
        arrayClientes = JSON.parse(localStorage.getItem("clientes"))
    }
    if(localStorage.getItem("cobros")){
        arrayCobros = JSON.parse(localStorage.getItem("cobros"))
    }




//--------- FUNCIONES -----------
        
 // COMENTO EL MENU DE OPCIONES PORQUE EN LA TERCERA PREENTREGA VAN LAS ACCIONES POR BOTTON
        // Menu de opciones

        //  function menu(){
        //     alert("Bienvenido a Uelz")
        //     let opcion = parseInt(prompt("Ingrese una opcion: \n 1) Registrarse como cliente \n 2) Registrar un nuevo cobro \n 3) Consulta de cobros \n 4) Calculo de comisiones (in progress) \n 5) Eliminar un cobro (proximamente) \n 5) Salir"));
        //     return opcion;
        // }

        // ---------- ACCIONES EN CTA ---------------
        
        // 1) Funcion para Alta de cliente 
        const DarseDeAlta = document.getElementById("DarseDeAlta");
        DarseDeAlta.addEventListener("click",()=>{
            mostrarDarseDeAlta();
        });
        // 2) Funcion REGISTRAR NUEVO COBRO 
        const NuevoCobro = document.getElementById("NuevoCobro");
       NuevoCobro.addEventListener("click",()=>{
            nuevoCobro();
        });
        // 3) Funcion CALCULAR COMISIONES
        const CalcularComisiones = document.getElementById("CalcularComisiones");
        DarseDeAlta.addEventListener("click",()=>{
            //llamar ala funcion que corresponda
        });
        // 4) Funcion CONSULTAR COBROS 
        const ConsultarCobros = document.getElementById("ConsultarCobros");
        ConsultarCobros.addEventListener("click",()=>{
            consultarCobros();
        });
        // 5) Funcion ELIMINAR COBRO 
        const EliminarCobro = document.getElementById("EliminarCobro");
        DarseDeAlta.addEventListener("click",()=>{
             //llamar ala funcion que corresponda
        });


         /**  ---------- LLAMADO A FUNCIONES DESDE CTA PRIMARIOS --------------- */


        // 1) Funcion para Alta de cliente          
            const mostrarDarseDeAlta =()=>{
                 // ---- AGREGAR NODOS -----
                const contenedorDarseDeAlta = document.getElementById("contenedorDarseDeAlta");
                 //LIMPIAR HTML
                contenedorDarseDeAlta.innerHTML = "";  
                contenedorNuevoCobro.innerHTML = "";   
                contenedorConsultarCobros.innerHTML = "";
                    //Crear formulario
                    const alta = document.createElement("alta");
                    alta.innerHTML =`<div>
                                        <p>Ingresa tus datos</p>
                                        <form id="formulario">
                                            <div class="mb-3">
                                                <label for="nombre" class="form-label">Nombre</label>
                                                <input type="text" id="nombre" class="form-control" required>
                                            </div>
                                            <div class="mb-3">
                                                <label for="cuit" class="form-label">Numero Fiscal</label>
                                                <input type="text" id="cuit" class="form-control" required>

                                            </div>
                                            <button class="btn btn-primary">Enviar</button>
                                            </form>     
                                    </div>
                                        `
                    // Asociar el formulario al padre 
                    contenedorDarseDeAlta.appendChild(alta);
                    // EVENTO SUBMIT
                       formulario.addEventListener("submit", ()=>{
                      //Evito el comportamiento por default de formulario, de recargar la pagina
                      event.preventDefault();
                     const nombre = document.getElementById("nombre").value;
                     const cuit = document.getElementById("cuit").value;
                    // Crear un objeto cliente
                    const cliente = new Cliente(nombre,cuit);
                    arrayClientes.push(cliente);
                     console.log(arrayClientes);
                    // reseteamos el formulario
                     formulario.reset();     
                    // ALMACENAR EN LOCAL STORAGE
                    // Utilizamos el metodo JSON.stringify()
                    const arrayClientesJSON = JSON.stringify(arrayClientes);
                    console.log(arrayClientesJSON), typeof arrayClientesJSON;
                    // lo almaceno en el local storage
                    localStorage.setItem("clientes", arrayClientesJSON);
                        })
             }
               
        /**   COMENTO ESTA FUNCION DE ALTA PORQUE EN LA TERCERA PREENTREGA VA DENTRO DEL FORM 
                     function altaCliente (){
                         let nombre = prompt("ingrese el nombre del cliente: ");
                         let cuit = parseInt(prompt("ingrese el cuit de la empresa: "));
                         let uelzPlan = prompt("Ingrese el plan de Uelz contratado: \n 1) Free \n 2) Gold");
                        let cliente = new Cliente (nombre,cuit,uelzPlan);
                         arrayClientes.push(cliente);
                        console.log (arrayClientes);
                        alert ("El cliente se ha registrado con exito")
                       }
        */

       
            // 2) Funcion REGISTRAR NUEVO COBRO        
            const nuevoCobro =()=>{
                  // ---- AGREGAR NODOS -----
                const contenedorNuevoCobro = document.getElementById("contenedorNuevoCobro");
                //LIMPIAR HTML
                 contenedorDarseDeAlta.innerHTML = "";
                 contenedorNuevoCobro.innerHTML = "";
                 contenedorConsultarCobros.innerHTML = "";
                //Crear formulario
                const altaCobro = document.createElement("altaCobro");
                altaCobro.innerHTML =`<div>
                                    <p>Ingresa los datos del cobro</p>
                                    <form id="formularioCobro">
                                        <div class="mb-3">
                                            <label for="cuit" class="form-label">Cuit de la empresa</label>
                                            <input type="text" id="cuit" class="form-control" required>
                                        </div>
                                        <div class="mb-3">
                                            <label for="medioDePago" class="form-label">Medio de cobro</label>
                                            <select  id="ValorMedioDePago" class="form-select" aria-label="Default select example" required>
                                                <option value="tarjeta">Tarjeta</option>
                                                <option value="sepa">Sepa</option>
                                                <option value="afterpay">AfterPay</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label for="monto" class="form-label">Monto cobrado</label>
                                            <input type="text" id="monto" class="form-control" required>
                                        </div>
                                        <div class="mb-3">
                                            <label for="plan" class="form-label">Tipo de cobro</label>
                                            <select id="ValorPlan" class="form-select" aria-label="Default select example" required>
                                                <option value="suscripcion">Suscripción</option>
                                                <option value="unico">Pago Único</option>
                                            </select>
                                        </div>
                                        <button class="btn btn-primary">Enviar</button>
                                        </form>     
                                </div>
                                ` 
                    
                                                
                // Asociar el formulario al padre 
                contenedorNuevoCobro.appendChild(altaCobro);
                // EVENTO SUBMIT
                formularioCobro.addEventListener("submit", ()=>{
                    //Evito el comportamiento por default de formulario, de recargar la pagina
                    event.preventDefault();
                    const cuit = document.getElementById("cuit").value;
                    const medioDePago = document.getElementById("ValorMedioDePago").value;
                    const monto = document.getElementById("monto").value;
                    const plan = document.getElementById("ValorPlan").value;               
                // Crear un objeto cobro
                console.log(cuit, typeof cuit)
                console.log(monto, typeof monto)
                let fecha = new Date()
                const cobro = new Cobro (cuit,medioDePago,monto,plan);
                console.log(cobro.cuit, typeof cobro.cuit)
                arrayCobros.push(cobro);
                console.log (arrayCobros);
                // reseteamos el formulario
                formularioCobro.reset();     
                // ALMACENAR EN LOCAL STORAGE
                // Utilizamos el metodo JSON.stringify()
                const arrayCobrosJSON = JSON.stringify(arrayCobros);
                console.log(arrayCobrosJSON), typeof arrayCobrosJSON;
                // lo almaceno en el local storage
                localStorage.setItem("cobros", arrayCobrosJSON);
                    })
            }
            
             
        /**  COMENTO ESTA FUNCION DE ALTA PORQUE EN LA TERCERA PREENTREGA VA DENTRO DEL FORM 
                        Funcion para dar de alta un cobro
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
         */

            // 3) Funcion CONSULTAR COBROS                   
            const consultarCobros = () =>{
                  // ---- AGREGAR NODOS -----
                  const contenedorConsultarCobros = document.getElementById("contenedorConsultarCobros");
                  //LIMPIAR HTML
                   contenedorDarseDeAlta.innerHTML = "";
                   contenedorNuevoCobro.innerHTML = "";
                   contenedorConsultarCobros.innerHTML = "";
                  //Crear formulario
                  const consultaCobros = document.createElement("consultaCobros");
                  consultaCobros.innerHTML =`<div>
                                      <p>Ingrese el cuit del cliente</p>
                                      <form id="formulario">
                                          <div class="mb-3">
                                              <label for="cuit" class="form-label">Cuit de la empresa</label>
                                              <input type="text" id="cuit" class="form-control" required>
                                          </div>
                                          <button id="consultarCobrosConCuit" class="btn btn-primary">Consultar</button>
                                        </form>
                                          `
                // Asociar el formulario al padre 
                contenedorConsultarCobros.appendChild(consultaCobros);
                 // EVENTO SUBMIT
                 formulario.addEventListener("submit", ()=>{
                    //Evito el comportamiento por default de formulario, de recargar la pagina
                    event.preventDefault();  
                   const cuit = document.getElementById("cuit").value;
                  console.log(cuit);
                  let totalcobrado = retornarCobros(cuit);
                  console.log(totalcobrado);
                  // reseteamos el formulario
                   formulario.reset();     
                   
                })   
            }
        
                function retornarCobros (cuit) {
                    let arrayCobrosDelCliente = filtrarCobrosDelCliente (cuit); 
                    let arrayCobrosDelClienteTarjeta = filtrarCobrosDelClienteMediodePago (arrayCobrosDelCliente,"tarjeta");
                    let arrayCobrosDelClienteSepa = filtrarCobrosDelClienteMediodePago (arrayCobrosDelCliente,"sepa");
                    let arrayCobrosDelClienteAfterPay= filtrarCobrosDelClienteMediodePago (arrayCobrosDelCliente,"afterpay");
                    let arrayCobrosTarjetaSuscripcion = filtrarCobrosDelClienteMedioDePagoPlan(arrayCobrosDelClienteTarjeta,"suscripcion");
                    let arrayCobrostarjetaUnico = filtrarCobrosDelClienteMedioDePagoPlan(arrayCobrosDelClienteTarjeta,"unico");
                    let arrayCobrosDelClienteSepaSuscripcion = filtrarCobrosDelClienteMedioDePagoPlan (arrayCobrosDelClienteSepa,"suscripcion");
                    let arrayCobrosDelClienteSepaUnico = filtrarCobrosDelClienteMedioDePagoPlan (arrayCobrosDelClienteSepa,"unico");
                    let arrayCobrosDelClienteAfterPaySuscripcion = filtrarCobrosDelClienteMedioDePagoPlan (arrayCobrosDelClienteAfterPay,"suscripcion");
                    let arrayCobrosDelClienteAfterPayaUnico = filtrarCobrosDelClienteMedioDePagoPlan (arrayCobrosDelClienteAfterPay,"unico");
                    let totalcobrado = 0;
                    

                    const tituloCliente =document.createElement("tituloCliente")
                    tituloCliente.innerHTML=`
                              <div>
                                  <hr>
                                  <h2>Cobros del cliente <span>${cuit}</span> </h2>
                        
                              </div>  
                              `
                      contenedorConsultarCobros.appendChild(tituloCliente);   
                       
                    arrayCobrosDelCliente.forEach(cobro =>{
                            totalcobrado += cobro.monto;
                            // += es igual a poner totalCompra = totalCompra+producto.precio*producto.cantidad
                            const TablaCobros =document.createElement("TablaCobros")
                            TablaCobros.innerHTML=`
                                     <div>
                                     <ul class="list-group list-group-horizontal">
                                            <li class="list-group-item">${cobro.monto}</li>
                                            <li class="list-group-item">${cobro.medioDePago}</li>
                                            <li class="list-group-item">${cobro.plan}</li>
                                    </ul>
                                     </div>             `
                            contenedorConsultarCobros.appendChild(TablaCobros);                    
                       })
                       const totalCobradoHtml =document.createElement("totalCobradoHtml")
                      totalCobradoHtml.innerHTML=`
                                <div>
                                    <h3>El total de cobros es de <span>$${totalcobrado}</span></h3>
                                    <hr>
                                </div>  
                                `
                        contenedorConsultarCobros.appendChild(totalCobradoHtml);   
                    return totalcobrado
                    
                }


          
      // 4) Funcion CONSULTAR COMISIONES 
      const consultarComisiones2 = () =>{
        // ---- AGREGAR NODOS -----
        const contenedorConsultarComisiones = document.getElementById("contenedorConsultarComisiones");
        //LIMPIAR HTML
         contenedorDarseDeAlta.innerHTML = "";
         contenedorNuevoCobro.innerHTML = "";
         contenedorConsultarCobros.innerHTML = "";
         contenedorConsultarComisiones.innerHTML = "";
        //Crear formulario
        const consultaComisiones = document.createElement("consultaComisiones");
        consultaComisiones.innerHTML =`<div>
                            <p>Ingrese el cuit del cliente</p>
                            <form id="formulario">
                                <div class="mb-3">
                                    <label for="cuit" class="form-label">Cuit de la empresa</label>
                                    <input type="text" id="cuit" class="form-control" required>
                                </div>
                               
                                <button id="consultarCobrosConCuit" class="btn btn-primary">Consultar</button>
                              </form>
                                `
      // Asociar el formulario al padre 
      contenedorConsultarComisiones.appendChild(consultaComisiones);
       // EVENTO SUBMIT
       formulario.addEventListener("submit", ()=>{
          //Evito el comportamiento por default de formulario, de recargar la pagina
          event.preventDefault();  
         const cuit = document.getElementById("cuit").value;
        console.log(cuit);
        let totalcomisiones = retornarComisiones(cuit);
        console.log(totalcomisiones);
        // reseteamos el formulario
         formulario.reset();     
      })   
  }


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

//// ------------  FUNCIONES PARA FILTRAR y SUMAR COBROS ----------
          
    function filtrarCobrosDelCliente (cuit){
                cuit = parseInt(cuit)
                const arrayCobrosJSON = localStorage.getItem("cobros");
                const arrayCobros = JSON.parse(arrayCobrosJSON); 
                console.log(arrayCobros)
                const arrayCobrosDelCliente = arrayCobros.filter(cobro => cobro.cuit === cuit);
                        console.log ("  Filter: arrayCobrosDelCliente")
                        console.log (arrayCobrosDelCliente);
                        console.log(arrayCobrosDelCliente.length)
                return arrayCobrosDelCliente;
                }
     function  filtrarCobrosDelClienteMediodePago(array,medioDePago){
         // FILTRO COBROS por Medio de apgo
         const arrayCobrosDelClienteMedioDePago= array.filter(cobro => cobro.medioDePago === medioDePago);
         console.log ("  Filter: arrayCobrosDelClienteMedioDEPAGO")
         console.log (arrayCobrosDelClienteMedioDePago);
         console.log(arrayCobrosDelClienteMedioDePago.length)
         return arrayCobrosDelClienteMedioDePago;
     }

              
     function filtrarCobrosDelClienteMedioDePagoPlan (array,plan) {
                    // FILTRO COBROS tarjeta Suscripción
                    const arrayCobrosDelClienteTarjetaPlan = array.filter(cobro => cobro.plan === plan);
                    console.log ("  Filter: arrayCobrosDelClienteTarjetaPlan ")
                    console.log (arrayCobrosDelClienteTarjetaPlan);
                    console.log(arrayCobrosDelClienteTarjetaPlan.length)
                    return arrayCobrosDelClienteTarjetaPlan;
               }       
    
               



//// ------------  FUNCIONES CALCULO COMISIONES ----------

//function calculoComisiones(cuit)
// array cobros del cliente
//array cobros del cliente con tarjeta
//array cobros del cliente con sepa
//array cobros del cliente con after pay
// Sumarizar montos de los 4 array
// contar transacciones de 4 array
//llamar a las fuciones de calculo de comisiones por medio de pago




function CalculoComisionesTarjeta (cuit) {
        // Filtro y totalizador para cobros de suscripción con tarjeta
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
        console.log ("Comisiones suscripcion");
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

// let opcion = menu ()
//     switch(opcion){
//         case 1:
//             altaCliente()
//             break;
//         case 2:
//             altaCobro();
//             break;
//         case 3:
//             consultarCobros();
//             break;
//         case 4:
//             consultarComisiones();
//             break;
//         case 5:
//             Salir();
//             break;
//         default:
//             alert("opcion incorrecta");
//             break;
//     }












    // COMENTARIOS DE CLASESSS

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

// ----------------------------------------------------------