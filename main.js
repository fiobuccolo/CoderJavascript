
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


    let comisionSuscripcion = 0.005;
    
    let comisionTarjetaFija = 0.25;
    let comisionSepaFija = 0.35;
    let comisionClearpayFija = 0;
    
    let comisionTarjetaVariable = 0.014;
    let comisionClearpayVariable = 0.06;
    let comisionSepaVariable = 0;
   
    let montoTarjetaSuscripcion = 0;
    let montoTarjetaUnico = 0;
    
    let montoSepaSuscripcion = 0;
    let montoSepaUnico = 0;

    let montoClearpaySuscripcion = 0;
    let montoClearpayUnico = 0;

    let montoTotalTarjeta = 0;
    let montoTotalSepa = 0;
    let montoTotalClearpay = 0;
    let montoTotal = 0;
  
    let cantidadCobrosSepa = 0;
    let cantidadCobrosTarjeta = 0;
    let cantidadCobrosClearpay = 0;

    let sumaComisionTarjetaVariable = 0; // comision por medio de pago variable
    let sumaComisionTarjetaSuscripcion = 0; // comision por suscripcion
    let sumaComisionTarjetaFijo = 0; // comision por medio de pago fijo

    let sumaComisionSepaVariable = 0; // comision por medio de pago variable
    let sumaComisionSepaSuscripcion = 0; // comision por suscripcion
    let sumaComisionSepaFijo = 0; // comision por medio de pago fijo

    let sumaComisionClearPayVariable = 0; // comision por medio de pago variable
    let sumaComisionClearpaySuscripcion = 0; // comision por suscripcion
    let sumaComisionClearypayFijo = 0; // comision por medio de pago fijo
    

  
// ---- 1) SELECCIONAR MEDIO DE COBRO ----
            let medioDeCobro1 = prompt("Ingrese el medio de cobro: (Tarjeta, Sepa, Clearpay) ");

// ---- 2) VALIDAR QUE SEA UN MEDIO DE COBRO EXISTENTE ----
            while ((medioDeCobro1 != "Tarjeta") && (medioDeCobro1 != "Sepa") && (medioDeCobro1 != "Clearpay")) {
                medioDeCobro1 = prompt("Medio de cobro inexistente. Ingreselo nuevamente: (Tarjeta, Sepa, Clearpay) ");
                } 
// ---- 3) INGRESAR MONTOS ----
                console.log (medioDeCobro1)
                    switch (medioDeCobro1){
                        case "Tarjeta":
                            //inputs
                        cantidadCobrosTarjeta = CantidadCobros (medioDeCobro1);
                        montoTarjetaSuscripcion = MontoSuscripcion (medioDeCobro1);
                        montoTarjetaUnico = MontoUnico (medioDeCobro1);
                         // --- CODIGO ANTERIOR SIN FUNCIONES ---
                            // CantidadCobrosTarjeta = parseInt(prompt("ingrese la cantidad de cobros realizados con tarjeta"));
                            // MontoTarjetaSucripcion = parseInt(prompt("ingrese el monto cobrado con tarjeta en ventas por suscripción"));
                            // MontoTarjetaUnico = parseInt(prompt("ingrese el monto cobrado con tarjeta en ventas Unicas"));   
                            break;
                        case "Sepa": 
                            //inputs
                        cantidadCobrosSepa = CantidadCobros (medioDeCobro1);
                        montoSepaSuscripcion = MontoSuscripcion (medioDeCobro1);
                        montoSepaUnico = MontoUnico (medioDeCobro1);                                      
                            break;
                        case "Clearpay": 
                          //inputs
                        // cantidadCobrosClearpay = CantidadCobros (medioDeCobro1);
                        // montoClearpaySuscripcion = MontoSuscripcion (medioDeCobro1);
                        montoClearpayUnico = MontoUnico (medioDeCobro1);                       
                            break;
                        default: 
                        alert ("Medio de cobro inexistente");
                        break;
                    }

// ---- 4) DECIDIR SI TIENE COBROS CON OTRO MEDIO DE COBRO ----
            let AgregarMedioCobro = prompt("¿Tiene cobros con otro medio de cobro? (Ingrese Si o No)");
            console.log (AgregarMedioCobro);
// ---- 5) AGREGAR NUEVO MEDIO DE COBRO ----
            if ((AgregarMedioCobro == "Si") || (AgregarMedioCobro == "SI") || (AgregarMedioCobro == "si")){
                console.log (AgregarMedioCobro);
                let medioDeCobro2 = prompt("Ingrese el medio de cobro: (Tarjeta, Sepa, Clearpay) ");
// ---- 2) VALIDAR QUE SEA UN MEDIO DE COBRO EXISTENTE 
                while ((medioDeCobro2 != "Tarjeta") && (medioDeCobro2 != "Sepa") && (medioDeCobro2 != "Clearpay")){
                    medioDeCobro2 = prompt("Medio de cobro inexistente. Ingreselo nuevamente: (Tarjeta, Sepa, Clearpay) ");
                }
// ---- 7) VALIDAR QUE SEA UN MEDIO DE COBRO NO INGRESADO CON ANTERIORIDAD --
                while (medioDeCobro1 === medioDeCobro2){
                medioDeCobro2 = prompt("Medio de cobro ya ingresado. Seleccione otro: (Tarjeta, Sepa, Clearpay) ");
                }
// ---- 3) INGRESAR MONTOS ----
        console.log ("switch 2")
                switch (medioDeCobro2){
                    case "Tarjeta":
                        cantidadCobrosTarjeta = CantidadCobros (medioDeCobro2);
                        montoTarjetaSuscripcion = MontoSuscripcion (medioDeCobro2);
                        montoTarjetaUnico = MontoUnico (medioDeCobro2);
                        break;
                    case "Sepa": 
                        cantidadCobrosSepa = CantidadCobros (medioDeCobro2);
                        montoSepaSuscripcion = MontoSuscripcion (medioDeCobro2);
                        montoSepaUnico = MontoUnico (medioDeCobro2);  
                        break;
                    case "Clearpay": 
                    // cantidadCobrosClearpay = CantidadCobros (medioDeCobro2);
                     // montoClearpaySuscripcion = MontoSuscripcion (medioDeCobro2);
                        montoClearpayUnico = MontoUnico (medioDeCobro2);       
                    
                    break;
                    default: 
                    alert ("Medio de cobro inexistente");
                    break;
                }
// ---- 4) DECIDIR SI TIENE COBROS CON OTRO MEDIO DE COBRO ----
                AgregarMedioCobro = prompt("¿Tiene cobros con otro medio de cobro? (Ingrese Si o No)");
// ---- 5) AGREGAR NUEVO MEDIO DE COBRO ----
                if ((AgregarMedioCobro == "Si") || (AgregarMedioCobro == "SI") || (AgregarMedioCobro == "si")){
                    console.log (AgregarMedioCobro);
                    let medioDeCobro3 = prompt("Ingrese el medio de cobro: (Tarjeta, Sepa, Clearpay) ");
// ---- 2) VALIDAR QUE SEA UN MEDIO DE COBRO EXISTENTE ----     
                while ((medioDeCobro3 != "Tarjeta") && (medioDeCobro3 != "Sepa") && (medioDeCobro3 != "Clearpay")){
                    medioDeCobro3 = prompt("Medio de cobro inexistente. Ingreselo nuevamente: (Tarjeta, Sepa, Clearpay) ");
                }
 // ---- 7) VALIDAR QUE SEA UN MEDIO DE COBRO NO INGRESADO CON ANTERIORIDAD ----
                while ((medioDeCobro3 === medioDeCobro2) || (medioDeCobro3 === medioDeCobro1)){
                    medioDeCobro3 = prompt("Medio de cobro ya ingresado. Seleccione otro: (Tarjeta, Sepa, Clearpay) ");
                    }
 // ---- 3) INGRESAR MONTOS Y CALCULAR COMISION PARA EL SEGUNDO MEDIO SELECCIONADO ----
        console.log ("switch 3")
        switch (medioDeCobro3){
            case "Tarjeta":
            cantidadCobrosTarjeta = CantidadCobros (medioDeCobro3);
            montoTarjetaSuscripcion = MontoSuscripcion (medioDeCobro3);
            montoTarjetaUnico = MontoUnico (medioDeCobro3);
            break;
            case "Sepa": 
            cantidadCobrosSepa = CantidadCobros (medioDeCobro3);
            montoSepaSuscripcion = MontoSuscripcion (medioDeCobro3);
            montoSepaUnico = MontoUnico (medioDeCobro3); 
            break;
            case "Clearpay": 
             // cantidadCobrosClearpay = CantidadCobros (medioDeCobro3);
            // montoClearpaySuscripcion = MontoSuscripcion (medioDeCobro3);
            montoClearpayUnico = MontoUnico (medioDeCobro3);  
            break;
            default: 
            alert ("Medio de cobro inexistente");
            break;
         }
        } }
         //calculos tarjeta
                montoTotalTarjeta = SumaMontoTotal (montoTarjetaSuscripcion,montoTarjetaUnico,0)
                sumaComisionTarjetaVariable = CalculoComisiones (montoTotalTarjeta,comisionTarjetaVariable)
                console.log (sumaComisionTarjetaVariable)
                sumaComisionTarjetaSuscripcion = CalculoComisiones (montoTarjetaSuscripcion,comisionSuscripcion)
                console.log (sumaComisionTarjetaSuscripcion)
                sumaComisionTarjetaFijo = CalculoComisiones (cantidadCobrosTarjeta,comisionTarjetaFija)  
                console.log (sumaComisionTarjetaFijo)    
                let comisionesCobrarTarjeta = SumaMontoTotal (sumaComisionTarjetaVariable, sumaComisionTarjetaSuscripcion, sumaComisionTarjetaFijo)
                console.log (comisionesCobrarTarjeta)

                    //calculoss sepa
                montoTotalSepa = SumaMontoTotal (montoSepaSuscripcion,montoSepaUnico,0)
                sumaComisionSepaVariable = CalculoComisiones (montoTotalSepa,comisionSepaVariable)
                sumaComisionSepaSuscripcion = CalculoComisiones (montoSepaSuscripcion,0)
                sumaComisionSepaFijo = CalculoComisiones (cantidadCobrosSepa,comisionSepaFija)
                let comisionesCobrarSepa = SumaMontoTotal (sumaComisionSepaVariable, sumaComisionSepaSuscripcion, sumaComisionSepaFijo)
                console.log (comisionesCobrarSepa)
                
                //calculos clearpay
                montoTotalClearpay = SumaMontoTotal (montoClearpaySuscripcion,montoClearpayUnico,0)
                sumaComisionClearPayVariable = CalculoComisiones (montoTotalClearpay,comisionClearpayVariable)
                sumaComisionClearpaySuscripcion = CalculoComisiones (montoClearpaySuscripcion,0)
                sumaComisionClearypayFijo = CalculoComisiones (cantidadCobrosClearpay,comisionClearpayFija)
                let comisionesCobrarClearypay= SumaMontoTotal (sumaComisionClearPayVariable, sumaComisionClearpaySuscripcion, sumaComisionClearypayFijo)
                console.log (comisionesCobrarClearypay)

                let comisionesCobrarTotal = SumaMontoTotal (comisionesCobrarClearypay, comisionesCobrarSepa, comisionesCobrarTarjeta)
                console.log (comisionesCobrarTotal)
                alert ("El total de las comisiones es de " + comisionesCobrarTotal.toFixed(2))
               
                

    //    --- Calculo comisiones --- 
    //   ----- CODIGO ANTERIOR -----
    //     let comisionesTarjeta = (MontoTarjetaSucripcion*comisionTarjetaVariable)+(MontoTarjetaSucripcion*comisionSuscripcion)+(CantidadCobrosTarjeta*comisionTarjetaFija);
    //     console.log (comisionesTarjeta);
    //     let comisionesSepa = ((MontoSepaSuscripcion*comisionSuscripcion)+(CantidadCobrosSepa*comisionSepaFija));
    //     console.log (comisionesSepa);
    //     let comisionesClearpay = (MontoClearpayUnico*comisionClearpayVariable);
    //     console.log (comisionesClearpay);
    //     let comisionesTotales = (comisionesTarjeta+comisionesClearpay+comisionesSepa);


        //  alert ("el total de las comisiones es de " + comisionesTotales)
        
            


  // ---- Tengo que corregir:
    //  1) Hacer los while 2 y 7 juntos, porque ahora si pasa el while 2 y dp en el 7 ingreso uno no existente me pasa al switch directo
    //  2) Agregar una opcion de ingresar "salir" para cerrar el programa


    
function CantidadCobros (valorA){
  return parseInt(prompt("Ingrese la cantidad de cobros realizados con " + valorA));
}
        
function MontoSuscripcion (valorA){
     return parseInt(prompt("ingrese el monto cobrado con " + valorA + " en ventas por suscripción"));
}
function MontoUnico (valorA) {
 return parseInt(prompt("ingrese el monto cobrado con " + valorA + " en ventas unicas"));
 }
 
 function SumaMontoTotal (valorA,valorB,valorC) {
   return valorA + valorB + valorC
 }

 function CalculoComisiones (valorA,valorB) {
   return valorA * valorB
  }



  
 