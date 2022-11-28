
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
    let comisionTarjetaVariable = 0.014;
    let comisionClearpay = 0.06;
    let MontoTarjetaSucripcion = 0;
    let MontoTarjetaUnico = 0;
    let MontoSepaSuscripcion = 0;
    let MontoSepaUnico = 0;
    let MontoClearpayUnico = 0;
    let CantidadCobrosSepa = 0;
    let CantidadCobrosTarjeta = 0;

    
  
// ---- 1) SELECCIONAR MEDIO DE COBRO ----
            let medioDeCobro1 = prompt("Ingrese el medio de cobro: (Tarjeta, Sepa, Clearpay) ");

// ---- 2) VALIDAR QUE SEA UN MEDIO DE COBRO EXISTENTE ----
            while ((medioDeCobro1 != "Tarjeta") && (medioDeCobro1 != "Sepa") && (medioDeCobro1 != "Clearpay")) {
                medioDeCobro1 = prompt("Medio de cobro inexistente. Ingreselo nuevamente: (Tarjeta, Sepa, Clearpay) ");
                } 
// ---- 3) INGRESAR MONTOS Y CALCULAR COMISION PARA EL MEDIO SELECCIONADO ----
                console.log (medioDeCobro1)
                    switch (medioDeCobro1){
                        case "Tarjeta":
                            CantidadCobrosTarjeta = parseInt(prompt("ingrese la cantidad de cobros realizados con tarjeta"));
                            MontoTarjetaSucripcion = parseInt(prompt("ingrese el monto cobrado con tarjeta en ventas por suscripción"));
                            MontoTarjetaUnico = parseInt(prompt("ingrese el monto cobrado con tarjeta en ventas Unicas"));                    
                            break;
                        case "Sepa": 
                        CantidadCobrosSepa = parseInt(prompt("ingrese la cantidad de cobros realizados con Sepa"));
                        MontoSepaSucripcion = parseInt(prompt("ingrese el monto cobrado con Sepa en ventas por suscripción"));
                        MontoSepaUnico = parseInt(prompt("ingrese el monto cobrado con Sepa en ventas Unicas"));
                            break;
                        case "Clearpay": 
                        MontoClearPayUnico = parseInt(prompt("ingrese el monto cobrado con Clearpay en ventas Unicas"));
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
// ---- 3) INGRESAR MONTOS Y CALCULAR COMISION PARA EL SEGUNDO MEDIO SELECCIONADO ----
        console.log ("switch 2")
                switch (medioDeCobro2){
                    case "Tarjeta":
                        CantidadCobrosTarjeta = parseInt(prompt("ingrese la cantidad de cobros realizados con tarjeta"));
                        MontoTarjetaSucripcion = parseInt(prompt("ingrese el monto cobrado con tarjeta en ventas por suscripción"));
                        MontoTarjetaUnico = parseInt(prompt("ingrese el monto cobrado con tarjeta en ventas Unicas"));
                        break;
                    case "Sepa": 
                    CantidadCobrosSepa = parseInt(prompt("ingrese la cantidad de cobros realizados con Sepa"));
                    MontoSepaSucripcion = parseInt(prompt("ingrese el monto cobrado con Sepa en ventas por suscripción"));
                    MontoSepaUnico = parseInt(prompt("ingrese el monto cobrado con Sepa en ventas Unicas"));
                        break;
                    case "Clearpay": 
                    MontoClearPayUnico = parseInt(prompt("ingrese el monto cobrado con Clearpay en ventas Unicas"));
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
                CantidadCobrosTarjeta = parseInt(prompt("ingrese la cantidad de cobros realizados con tarjeta"));
                MontoTarjetaSucripcion = parseInt(prompt("ingrese el monto cobrado con tarjeta en ventas por suscripción"));
                MontoTarjetaUnico = parseInt(prompt("ingrese el monto cobrado con tarjeta en ventas Unicas"));
                break;
            case "Sepa": 
            CantidadCobrosSepa = parseInt(prompt("ingrese la cantidad de cobros realizados con Sepa"));
            MontoSepaSucripcion = parseInt(prompt("ingrese el monto cobrado con Sepa en ventas por suscripción"));
            MontoSepaUnico = parseInt(prompt("ingrese el monto cobrado con Sepa en ventas Unicas"));
                break;
            case "Clearpay": 
            MontoClearPayUnico = parseInt(prompt("ingrese el monto cobrado con Clearpay en ventas Unicas"));
            break;
            default: 
            alert ("Medio de cobro inexistente");
            break;
         }
        } }

    //    --- Calculo comisiones --- 
        let comisionesTarjeta = (MontoTarjetaSucripcion*comisionTarjetaVariable)+(MontoTarjetaSucripcion*comisionSuscripcion)+(CantidadCobrosTarjeta*comisionTarjetaFija);
        console.log (comisionesTarjeta);
        let comisionesSepa = ((MontoSepaSuscripcion*comisionSuscripcion)+(CantidadCobrosSepa*comisionSepaFija));
        console.log (comisionesSepa);
        let comisionesClearpay = (MontoClearpayUnico*comisionClearpay);
        console.log (comisionesClearpay);
        let comisionesTotales = (comisionesTarjeta+comisionesClearpay+comisionesSepa);
         alert ("el total de las comisiones es de " + comisionesTotales)
        
            


  // ---- Tengo que corregir:
    //  1) Hacer los while 2 y 7 juntos, porque ahora si pasa el while 2 y dp en el 7 ingreso uno no existente me pasa al switch directo
    //  2) Agregar una opcion de ingresar "salir" para cerrar el programa