class Cliente {
    constructor(companyName,cuit,email){
    this.companyName = companyName;
    this.cuit = parseInt(cuit);
    this.email = email;
    }
};

  // Creamos el array de clientes 
  let arrayClientes = [];

  function clearLocal() {
    localStorage.clear()
  }

 // 1) Funcion para Alta de cliente 
 const SingUp = document.getElementById("SingUp");
 SingUp.addEventListener("click",()=>{
    mostrarDarseDeAlta();
    console.log("SingUp")
 });

   // 1) Funcion para Alta de cliente          
   const mostrarDarseDeAlta =()=>{
    // ---- AGREGAR NODOS -----
   const SignUpForm = document.getElementById("SignUpForm");
    //LIMPIAR HTML
       // EVENTO SUBMIT
          SignUpForm.addEventListener("submit", ()=>{
         //Evito el comportamiento por default de formulario, de recargar la pagina
         event.preventDefault();
        const companyName = document.getElementById("companyName").value;
        const cuit = document.getElementById("cuit").value;
        const email = document.getElementById("email").value;
       // Crear un objeto cliente
       const cliente = new Cliente(companyName,cuit,email);
       arrayClientes.push(cliente);
        console.log(arrayClientes);
       // reseteamos el formulario
       SignUpForm.reset();     
       // ALMACENAR EN LOCAL STORAGE
       // Utilizamos el metodo JSON.stringify()
       const arrayClientesJSON = JSON.stringify(arrayClientes);
       console.log(arrayClientesJSON), typeof arrayClientesJSON;
       // lo almaceno en el local storage
       localStorage.setItem("clientes", arrayClientesJSON);
       // redirijo al index
          window.location.href="index.html"
         
        

           })
}

