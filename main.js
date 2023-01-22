
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
        this.fecha = fecha ||  new Date();
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

   
    // COMENTO LOS CLIENTES PORQUE EN PREENTREGA LOS CREAMOS DESDE input de datos
    // const cliente1 = new Cliente ("Empresa1",12033229,"Free");
    // const cliente2 = new Cliente ("Empresa 2",32425202,"Free");
    // const cliente3 = new Cliente ("Empresa 3",29989213,"Free");

   

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
      const afterpay = new MedioDePago ("afterpay",0,0.06,0);

      
      const arrayMedioDePago = [tarjeta,sepa,afterpay];
      console.log (arrayMedioDePago);

// CARGAR COBROS y CLIENTES DESDE EL LOCAL STORAGE

    if(localStorage.getItem("clientes")){
        arrayClientes = JSON.parse(localStorage.getItem("clientes"))
    }
    if(localStorage.getItem("cobros")){
        arrayCobros = JSON.parse(localStorage.getItem("cobros"))
    }



    const welcomeMessage =document.getElementById("welcomeMessage");
    
    
    function welcome () {
        
        console.log("hola")
        const companyNameJSON = localStorage.getItem("clientes");
        const cliente = JSON.parse(companyNameJSON);
        console.log(cliente);

        cliente.forEach(cliente => {
            welcomeMessage.innerHTML=`
            <div>
                <h2>bienvenido <span>${cliente.companyName}</span></h2>
                <hr>
            </div>  
            `
        });

 
    
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
        
       
        // 2) Funcion REGISTRAR NUEVO COBRO 
        const NuevoCobro = document.getElementById("NuevoCobro");
       NuevoCobro.addEventListener("click",()=>{
            
            nuevoCobro();
        });
        // 3) Funcion CALCULAR COMISIONES
        const CalcularComisiones = document.getElementById("CalcularComisiones");
        CalcularComisiones.addEventListener("click",()=>{
            console.log(arrayCobros.length)
            if (arrayCobros.length === 0){
                const contenedorConsultarCobros = document.getElementById("contenedorConsultarCobros");
                contenedorConsultarCobros.innerText="";
                const mensajeDeError = document.createElement("mensajeDeError")
                mensajeDeError.innerHTML    =`<div><p>Aun no tenes cobros generados</p></div>`
                contenedorConsultarCobros.appendChild(mensajeDeError);
                console.log("error")}
                else{
                    console.log("else??") 
            consultarComisiones2()};
        });
        // 4) Funcion CONSULTAR COBROS 
        const ConsultarCobros = document.getElementById("ConsultarCobros");
        ConsultarCobros.addEventListener("click",()=>{    
            console.log(arrayCobros.length)
            if (arrayCobros.length === 0){
                const contenedorConsultarCobros = document.getElementById("contenedorConsultarCobros");
                contenedorConsultarCobros.innerText="";
                const mensajeDeError = document.createElement("mensajeDeError")
                mensajeDeError.innerHTML    =`<div><p>Aun no tenes cobros generados</p></div>`
                contenedorConsultarCobros.appendChild(mensajeDeError);
                console.log("error")}
                else{
                    console.log("else??") 
            consultarCobros()};
        });
        // 5) Funcion ELIMINAR COBRO 
        // const EliminarCobro = document.getElementById("EliminarCobro");
        // EliminarCobro.addEventListener("click",()=>{
             //llamar ala funcion que corresponda
        // });


         /**  ---------- LLAMADO A FUNCIONES DESDE CTA PRIMARIOS --------------- */


       
            // 2) Funcion REGISTRAR NUEVO COBRO        
            const nuevoCobro =()=>{
                  // ---- AGREGAR NODOS -----
                const contenedorNuevoCobro = document.getElementById("contenedorNuevoCobro");
                //LIMPIAR HTML
                const  tablecontainer = document.getElementById("example-table")
                tablecontainer.innerHTML = "";
                
                 contenedorNuevoCobro.innerHTML = "";
                 contenedorConsultarCobros.innerHTML = "";
                 contenedorConsultarComisiones.innerHTML = "";
                //Crear formulario
                const altaCobro = document.createElement("altaCobro");
                altaCobro.innerHTML =`<div>
                                    <p>Ingresa los datos del cobro</p>
                                    <form id="formularioCobro">
                                       
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
                                            <input type="number" id="monto" class="form-control" required>
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
                    
                    const medioDePago = document.getElementById("ValorMedioDePago").value;
                    const monto = document.getElementById("monto").value;
                    const plan = document.getElementById("ValorPlan").value; 
                    const companyNameJSON = localStorage.getItem("clientes");
                    const cliente = JSON.parse(companyNameJSON);
                    console.log(cliente[0].cuit);
                    cuit = cliente[0].cuit
                    console.log(cuit)                    
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
                Toastify({
                    text:"Cobro guardado con exito",
                    duration:3000,
                    gravity: "top",
                    position: "right",
                    style:{
                        background:"linear-gradient(to right, #00b09b, #96c93d)",
                    }
                }).showToast();
            })      
            }
            
             

            // 3) Funcion CONSULTAR COBROS                   
            const consultarCobros = () =>{
                  // ---- AGREGAR NODOS -----
                  const contenedorConsultarCobros = document.getElementById("contenedorConsultarCobros");
                  //LIMPIAR HTML
                   contenedorNuevoCobro.innerHTML = "";
                   contenedorConsultarCobros.innerHTML = "";
                   contenedorConsultarComisiones.innerHTML = "";
                // Obtener CUIT DE LA EMPRESA
                    const companyNameJSON = localStorage.getItem("clientes");
                    const cliente = JSON.parse(companyNameJSON);
                    console.log(cliente[0].cuit);
                    cuit = cliente[0].cuit
                    console.log(cuit)
                tablaDeCobros(cuit);
                //   let totalcobrado = retornarCobros(cuit);
                //   console.log(totalcobrado);
                  // reseteamos el formulario
                //    formulario.reset();     
                   
                }
            
        
                // function retornarCobros (cuit) {
                //     let arrayCobrosDelCliente = filtrarCobrosDelCliente (cuit); 
                //     let arrayCobrosDelClienteTarjeta = filtrarCobrosDelClienteMediodePago (arrayCobrosDelCliente,"tarjeta");
                //     let arrayCobrosDelClienteSepa = filtrarCobrosDelClienteMediodePago (arrayCobrosDelCliente,"sepa");
                //     let arrayCobrosDelClienteAfterPay= filtrarCobrosDelClienteMediodePago (arrayCobrosDelCliente,"afterpay");
                //     let arrayCobrosTarjetaSuscripcion = filtrarCobrosDelClienteMedioDePagoPlan(arrayCobrosDelClienteTarjeta,"suscripcion");
                //     let arrayCobrostarjetaUnico = filtrarCobrosDelClienteMedioDePagoPlan(arrayCobrosDelClienteTarjeta,"unico");
                //     let arrayCobrosDelClienteSepaSuscripcion = filtrarCobrosDelClienteMedioDePagoPlan (arrayCobrosDelClienteSepa,"suscripcion");
                //     let arrayCobrosDelClienteSepaUnico = filtrarCobrosDelClienteMedioDePagoPlan (arrayCobrosDelClienteSepa,"unico");
                //     let arrayCobrosDelClienteAfterPaySuscripcion = filtrarCobrosDelClienteMedioDePagoPlan (arrayCobrosDelClienteAfterPay,"suscripcion");
                //     let arrayCobrosDelClienteAfterPayaUnico = filtrarCobrosDelClienteMedioDePagoPlan (arrayCobrosDelClienteAfterPay,"unico");
                //     let totalcobrado = 0;
                // }

                function tablaDeCobros(cuit){
                    let arrayCobrosDelCliente = filtrarCobrosDelCliente (cuit); 
                    const tituloCliente =document.createElement("tituloCliente")
                    tituloCliente.innerHTML=`
                              <div>
                                  <hr>
                                  <h2>Tus cobros</h2>
                              </div>  
                         `
                      contenedorConsultarCobros.appendChild(tituloCliente);   
                    // Prueba tabulator
                        //define some sample data
                        tablecontainer = document.getElementById("example-table")
                       
                        var tabledata = arrayCobrosDelCliente
                        console.log(tabledata);
                        const downloadButton = document.createElement("downloadButton")
                        downloadButton.innerHTML =
                                    `<button id="download-xlsx">Download XLSX</button>`
                        contenedorConsultarCobros.appendChild(downloadButton);
                        downloadButton.addEventListener("click", function(){
                            table.download("xlsx", "data.xlsx", {sheetName:"My Data"});
                        });
                            //create Tabulator on DOM element with id "example-table"
                        var table = new Tabulator(tablecontainer, {
                            data:tabledata,           //load row data from array
                            layout:"fitColumns",      //fit columns to width of table
                            responsiveLayout:"hide",  //hide columns that dont fit on the table
                            addRowPos:"top",          //when adding a new row, add it to the top of the table
                            history:true,             //allow undo and redo actions on the table
                            // pagination:"local",       //paginate the data
                            // paginationSize:7,         //allow 7 rows per page of data
                            // paginationCounter:"rows", //display count of paginated rows in footer
                            movableColumns:true,      //allow column order to be changed
                            initialSort:[             //set the initial sort order of the data
                                {column:"fecha", dir:"desc"},
                            ],  
                            columnDefaults:{
                                tooltip:true,         //show tool tips on cells
                            },
                            // height:205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
                            maxHeight:"100%",
                            progressiveLoad:"load", 
                            columns:[ //Define Table Columns
                                {title:"Monto", field:"monto", width:150, sorter:"number", bottomCalc:"sum"},
                                {title:"Medio De Pago", field:"medioDePago", hozAlign:"lef", headerFilter:"input"},
                                {title:"Tipo de Plan", field:"plan", headerFilter:true, headerFilterParams:
                                                                                            {"suscripcion": "suscripcion",
                                                                                            "unico":"unico"}},
                                {title:"Fecha", field:"fecha", sorter:"date", hozAlign:"center"}
                                // {title:"Medio De Pago", field:"medioDePago", hozAlign:"left", formatter:"progress"},
                            ],
                        });
                        console.log(arrayCobrosDelCliente);
                        //trigger an alert message when the row is clicked
                        table.on("rowClick", function(e, row){ 
                            Swal.fire({
                                title: "Queres generar la factura de este cobro?",
                                confirmButtonText: "Aceptar",
                                showCancelButton: true,
                                cancelButtonText: "Cancelar",
                                 }).then((result) => { 
                                    if(result.isConfirmed){
                                       console.log("imprimir factura2")
                                       imprimirFactura2 (1,"nombre del cliente","Nombre de la empresa",`[{\"name\": \"My Service\", \"price\": \"30\", \"units\": \"Hours\", \"discount\": \"1000\", \"quantity\": \"1000\"}]`,21,"Eur","2022-01-01")
                                                            }
                                                        })
                                                        
                                    })
                                }
                        
                        
                        
                


      // 4) Funcion CONSULTAR COMISIONES 
      const consultarComisiones2 = () =>{
        // ---- AGREGAR NODOS -----
        const contenedorConsultarComisiones = document.getElementById("contenedorConsultarComisiones");
        //LIMPIAR HTML
         contenedorNuevoCobro.innerHTML = "";
         contenedorConsultarCobros.innerHTML = "";
         contenedorConsultarComisiones.innerHTML = "";  
         const  tablecontainer = document.getElementById("example-table")
                tablecontainer.innerHTML = "";
                   
         // Obtener CUIT DE LA EMPRESA
         const companyNameJSON = localStorage.getItem("clientes");
         const cliente = JSON.parse(companyNameJSON);
         console.log(cliente[0].cuit);
         cuit = cliente[0].cuit
         console.log(cuit)
         //Calculo y visualizacion de comisiones de tarjeta
                //Calculo
         let tarjetavariables= CalculoComisionesVariables(cuit,"tarjeta");
         let tarjetaSuscripcion = CalculoComisionesSuscripción(cuit,"tarjeta");
         let tarjetaFijas = CalculoComisionesfijas(cuit,"tarjeta");
         let totaltarjetas = tarjetaFijas+tarjetaSuscripcion+tarjetavariables
         //Calculo  de comisiones de Sepa
                let sepavariables= CalculoComisionesVariables(cuit,"sepa");
                let sepaSuscripcion = CalculoComisionesSuscripción(cuit,"sepa");
                let sepaFijas = CalculoComisionesfijas(cuit,"sepa");
                let totalsepa = sepavariables+sepaSuscripcion+sepaFijas;
        //Calculo  de comisiones de afterpay
        let afterPayVariables= CalculoComisionesVariables(cuit,"afterpay");
        let afterPaySuscripcion = CalculoComisionesSuscripción(cuit,"afterpay");
        let afterPayFijas = CalculoComisionesfijas(cuit,"afterpay");
        let totalafterPay = afterPayVariables+afterPaySuscripcion+afterPayFijas
                // Visualizacion 
         const HtmlComisioens = document.createElement("div");
         HtmlComisioens.innerHTML = 
            `<div class="list-group">
                <h5>Comisiones por cobros con tarjeta</h5>
                 <ul class="list-group list-group-flush">
                    <li class="list-group-item">Comisiones variables : $ ${tarjetavariables}</li>
                    <li class="list-group-item">Comisiones por cobros de suscripcióm :$ ${tarjetaSuscripcion}</li>
                    <li class="list-group-item">Comisiones por cobros totales :$ ${tarjetaFijas}</li>
                    <li class="list-group-item active">Total comisione de tarjeta :$ ${totaltarjetas}</li>
                 </ul>
                <br>
                <div class="list-group">
                       <h5>Comisiones por cobros con SEPA</h5>
                        <ul class="list-group list-group-flush">
                           <li class="list-group-item">Comisiones variables : $ ${sepavariables}</li>
                           <li class="list-group-item">Comisiones por cobros de suscripcióm :$ ${sepaSuscripcion}</li>
                           <li class="list-group-item">Comisiones por cobros totales :$ ${sepaFijas}</li>
                           <li class="list-group-item active">Total comisione de sepa :$ ${totalsepa}</li>
                        </ul>
                       </div>
                       <div class="list-group">
                       <h5>Comisiones por cobros con AfterPay</h5>
                        <ul class="list-group list-group-flush">
                           <li class="list-group-item">Comisiones variables : $ ${afterPayVariables}</li>
                           <li class="list-group-item">Comisiones por cobros de suscripcióm :$ ${afterPaySuscripcion}</li>
                           <li class="list-group-item">Comisiones por cobros totales :$ ${afterPayFijas}</li>
                           <li class="list-group-item active">Total comisione de AfterPay :$ ${totalafterPay}</li>
                        </ul>
                       </div>
                       
                       ` 
        
         contenedorConsultarComisiones.appendChild(HtmlComisioens);
         
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


// Calculo de comisiones Variables: Monto total cobrado por medio de pago * % de comisiones
function CalculoComisionesVariables (cuit,medioDePago){
    console.log(cuit);
    console.log(arrayCobros);
    const arrayMedioDePago2 = filtrarCobrosDelClienteMediodePago(arrayCobros,medioDePago)
    let totalCobrado2 = arrayMedioDePago2.reduce ((acumulador,elemento) => acumulador + elemento.monto,0)
    let comisionMedioDePagoVariable = arrayMedioDePago
    .filter (MedioDePago => MedioDePago.nombre == medioDePago) 
    .map (MedioDePago => MedioDePago.comisionVariable);
    console.log (comisionMedioDePagoVariable)
    let sumaComisionMedioDePagoVariable2 = comisionMedioDePagoVariable * totalCobrado2
    console.log(sumaComisionMedioDePagoVariable2)
    return sumaComisionMedioDePagoVariable2
}


// Calculo de comisiones Suscricion: Cantidad de cobros con medio de pago * % de comisiones
function CalculoComisionesfijas (cuit,medioDePago){
    console.log(cuit);
    console.log(arrayCobros);
    const arrayMedioDePago2 = filtrarCobrosDelClienteMediodePago(arrayCobros,medioDePago)
    let cantidadCobrosMedioDePago = arrayMedioDePago2.length
    let comisionMedioDePagoFija = arrayMedioDePago
    .filter (MedioDePago => MedioDePago.nombre == medioDePago) 
    .map (MedioDePago => MedioDePago.comisionFija);
    let sumaComisionTarjetaFija = comisionMedioDePagoFija * cantidadCobrosMedioDePago;
    console.log ("Comsiones fija");
    console.log (comisionMedioDePagoFija);
    console.log (sumaComisionTarjetaFija);
    return sumaComisionTarjetaFija;

}

// Calculo de comisiones Suscricion: Monto de suscripcion con medio de pago * % de comisiones
function CalculoComisionesSuscripción (cuit,medioDePago){
    console.log(cuit);
    console.log(arrayCobros);
    const arrayMedioDePago2 = filtrarCobrosDelClienteMediodePago(arrayCobros,medioDePago)
    const arraysuscripcion = filtrarCobrosDelClienteMedioDePagoPlan(arrayMedioDePago2,"suscripcion")
    let totalCobradoMedioDePagoSuscripcion = arraysuscripcion.reduce ((acumulador,elemento) => acumulador + elemento.monto,0)
    // let sumaComisionTarjetaSuscricion = comisionesPorSuscripcion(totalCobradoMedioDePagoSuscripcion);
    let comisionMedioDePagoSuscripción = arrayMedioDePago
    .filter (MedioDePago => MedioDePago.nombre == medioDePago)
    .map (MedioDePago => MedioDePago.comisionSuscripcion);
    let sumaComisionTarjetaSuscripcion = comisionMedioDePagoSuscripción * totalCobradoMedioDePagoSuscripcion;
    console.log ("Comisiones suscripcion");
    console.log (comisionMedioDePagoSuscripción);
    console.log (sumaComisionTarjetaSuscripcion);
    return sumaComisionTarjetaSuscripcion;
}



    //--- API FACTURA 1 ----

function imprimirFactura2(number,buyer_company_name,seller_company_name,services,tax,currency,date){
    const options1 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2cba9dff67mshf0648bf9f552783p16945ajsna0cdb96f6fa9',
            'X-RapidAPI-Host': 'invoices-generator.p.rapidapi.com',  
        }
     };

    fetch(`https://invoices-generator.p.rapidapi.com/generate-invoice?number=${number}&buyer_company_name=${buyer_company_name}&seller_company_name=${seller_company_name}&services=${services}&tax=${tax}&currency=${currency}&date=${date}&buyer_tax_number=Buyer%20Tax%20Number&buyer_vat_number=Buyer%20VAT%20Number&buyer_address=Buyer%20Address&seller_tax_number=Seller%20Tax%20Number&seller_vat_number=Seller%20VAT%20Number&seller_address=Seller%20Address&seller_bank_name=Seller%20Bank%20Name&seller_bank_account=Seller%20Bank%20Account&shipping=30&service_fee=10&due_date=2022-01-01&logo=https%3A%2F%2Fcdn.logo.com%2Fhotlink-ok%2Flogo-social.png&locale=en`, options1)
	.then(response => response.json())
	.then((response) => {
        const urlFactura = response 
        console.log(urlFactura, typeof urlFactura);
        console.log(urlFactura.url)
        window.open(urlFactura.url,"_blank");
    })          
	.catch(err => console.error(err));
        }
        
        

    