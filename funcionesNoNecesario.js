function filtrarCobrosDelClienteTarjetaSuscripcion (array) {
    // FILTRO COBROS tarjeta Suscripción
    const arrayCobrosDelClienteTarjetaSuscripcion = array.filter(cobro => cobro.plan === "suscripcion");
    console.log ("  Filter: arrayCobrosDelClienteTarjetaSuscripcion ")
    console.log (arrayCobrosDelClienteTarjetaSuscripcion);
    console.log(arrayCobrosDelClienteTarjetaSuscripcion.length)
    return arrayCobrosDelClienteTarjetaSuscripcion;
}       

function filtrarCobrosDelClienteTarjetaUnico (array) {
   // FILTRO COBROS tarjeta Unico
   const arrayCobrosDelClienteTarjetaUnico = array.filter(cobro => cobro.plan === "unico");
   console.log ("  Filter: arrayCobrosDelClienteTarjetaUnico ")
   console.log (arrayCobrosDelClienteTarjetaUnico);
   console.log(arrayCobrosDelClienteTarjetaUnico.length)
   return arrayCobrosDelClienteTarjetaUnico;
}      


function filtrarCobrosDelClienteTarjeta (array){
    // FILTRO COBROS TARJETA
    const arrayCobrosDelClienteTarjeta = array.filter(cobro => cobro.medioDePago === "tarjeta");
    console.log ("  Filter: arrayCobrosDelClienteTarjeta ")
    console.log (arrayCobrosDelClienteTarjeta);
    console.log(arrayCobrosDelClienteTarjeta.length)
    return arrayCobrosDelClienteTarjeta;
         }

    function filtrarCobrosDelClienteSepa(array){
            // FILTRO COBROS Sepa
            const arrayCobrosDelClienteSepa= array.filter(cobro => cobro.medioDePago === "sepa");
            console.log ("  Filter: arrayCobrosDelClienteSepa ")
            console.log (arrayCobrosDelClienteSepa);
            console.log(arrayCobrosDelClienteSepa.length)
            return arrayCobrosDelClienteSepa;
                 }
    
 function filtrarCobrosDelClienteAfterPay(array){
           // FILTRO COBROS AfterPay
            const arrayCobrosDelClienteAfterPay = array.filter(cobro => cobro.medioDePago === "afterpay");
                    console.log ("  Filter: arrayCobrosDelClienteAfterPay ")
                    console.log (arrayCobrosDelClienteAfterPay);
                    console.log(arrayCobrosDelClienteAfterPay.length)
            return arrayCobrosDelClienteAfterPay;
            }



   function filtrarCobrosDelClienteSepaSuscripcion (array) {
    // FILTRO COBROS Sepa Suscripción
    const arrayCobrosDelClienteSepaSuscripcion = array.filter(cobro => cobro.plan === "suscripcion");
    console.log ("  Filter: arrayCobrosDelClienteSepaSuscripcion ")
    console.log (arrayCobrosDelClienteSepaSuscripcion);
    console.log(arrayCobrosDelClienteSepaSuscripcion.length)
    return arrayCobrosDelClienteSepaSuscripcion;
}       

    function filtrarCobrosDelClienteSepaUnico (array) {
   // FILTRO COBROS Sepa Unico
   const arrayCobrosDelClienteSepaUnico = array.filter(cobro => cobro.plan === "unico");
   console.log ("  Filter: arrayCobrosDelClienteSepaUnico ")
   console.log (arrayCobrosDelClienteSepaUnico);
   console.log(arrayCobrosDelClienteSepaUnico.length)
   return arrayCobrosDelClienteSepaUnico;
}     
function filtrarCobrosDelClienteAfterPaySuscripcion (array) {
    // FILTRO COBROS AfterPay Suscripción
    const arrayCobrosDelClienteAfterPaySuscripcion = array.filter(cobro => cobro.plan === "suscripcion");
    console.log ("  Filter: arrayCobrosDelClienteAfterPaySuscripcion ")
    console.log (arrayCobrosDelClienteAfterPaySuscripcion);
    console.log(arrayCobrosDelClienteAfterPaySuscripcion.length)
    return arrayCobrosDelClienteAfterPaySuscripcion;
}       

function filtrarCobrosDelClienteAfterPayUnico (array) {
   // FILTRO COBROS AfterPay Unico
   const arrayCobrosDelClienteAfterPayUnico = array.filter(cobro => cobro.plan === "unico");
   console.log ("  Filter: arrayCobrosDelClienteAfterPayUnico ")
   console.log (arrayCobrosDelClienteAfterPayUnico);
   console.log(arrayCobrosDelClienteAfterPayUnico.length)
   return arrayCobrosDelClienteAfterPayUnico;
}     

