let Signin = {
  render: async () => {
    let view = /*html*/ `
        <section title="Window-Register" class="section-register" id="section-register">
        <form id="form-sign">
            <h1>Registro</h1>
            <input type="text" name="name" placeholder="Nombre" id="register-name" class="register-name">
            <input type="email" name="email" placeholder="e-mail" id="register-email" class="register-email">
            <input type="text" name="username" placeholder="Username" id="register-username" class="register-username">
            <input type="password" name="password" placeholder="Contraseña" id="register-password" class="register-password">
            <input type="password" name="cpassword" placeholder="Confirmar Contraseña" id="register-cp" class="register-cp">

            <select name="Estado" name="select-state" size="1" class="register-select" id="register-select">
            </select>

            <input type="text" name="city" placeholder="Ciudad" class="register-city" id="register-city">
            <input type="text" name="uhm" placeholder="Unidad Habitacional" class="register-uhm" id="register-uhm">
            <input type="button" name="btn-register" value="RegistrarMe" id="button-register" class="button-register">
        </form>

    </section>

        `;
    return view;
  },
  after_render: async () => {
      const formOne = document.getElementById("form-sign");
      const select = document.getElementById("register-select");
      const statesList = ["Elige un estado", "Aguascalientes", "Baja California", "Baja California Sur","Campeche", "Chihuahua", "Chiapas",
                          "Ciudad de México", "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo", 
                          "Jalisco", "Estado de México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla",
                          "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", 
                          "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"]           
      const boton = document.getElementById("button-register");

      //For que rellena el select con los nombres de los estados.
      for(let index=0; index<statesList.length; index ++){
        select.options[select.options.length]=new Option(statesList[index], index);
      }

    //firebase

    //Archivos que se necesitan para usar firebase
    // Your web app's Firebase configuration
    var firebaseConfig = {
    apiKey: "AIzaSyBHUStouS-ebrZIAVA8rpkCHPTqpIi5k40",
    authDomain: "supporteme-147ea.firebaseapp.com",
    databaseURL: "https://supporteme-147ea.firebaseio.com",
    projectId: "supporteme-147ea",
    storageBucket: "supporteme-147ea.appspot.com",
    messagingSenderId: "1007267288966",
    appId: "1:1007267288966:web:ab035c27ed063a27"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    const registerUser = () => {

        //Guardan los datos que ingresa el usuario para registrarse
     const eMail = formOne.email.value;
     const password = formOne.password.value;
     const confirmPassword = formOne.cpassword.value;
   
     //Usamos la función de firebase para crear un usuario con contraseña y verificamos que su contraseña y su confirmación coincidan para poder registrarlo.

     if(password === confirmPassword){
       firebase.auth().createUserWithEmailAndPassword(eMail, password)
        .then(function(){
          console.log("Se ha enviado un e-mail a tu correo")
        //sendEmailVerification();
        .catch(function(error){
          // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
          // ...
            alert(error);
            alert(errorMessage);
         })
        })
     }else{
       alert("La confirmación de contraseña no coincide");
     }

    

  }

      boton.addEventListener("click", registerUser);
  
  }
};

export default Signin;
