let Login = {
  render: async () => {
    let view = /*html*/ `
<section class="login hide" id="login">
<div class="login-body">

    <div class="info-user">
        <input type="button" name="close" value="X" id="close">
        <a class="fb-button" href="#">Iniciar sesión con facebook</a>
        <a class="google-button" href="#">Iniciar sesión con google</a>
        <div>
            <div class="line">&nbsp;</div>
            <div class="leyend"> O </div>
            <div class="line">&nbsp;</div>
        </div>
        <form name="login" id="authentication-form">
            <input type="text" name="email" id="email-login" placeholder="email" value="">
            <input type="password" name="password" id="password-login" placeholder="Contraseña" value = "">
            <button type="submit" class="enter-button" id="enter-button">Iniciar</button>
        </form>
    </div>
</div>
</section>
`;
    return view;
  },
  // Esta es una llamada separada, ya que solo se pueden registrar después de pintar el DOM
  // Todo el código relacionado con las interacciones DOM y los controles entran aquí.
  after_render: async () => {
    const boton = document.getElementById("enter-button");

    //Firebase

    //Your web app's Firebase configuration
    var firebaseConfig = {
         apiKey: "AIzaSyBHUStouS-ebrZIAVA8rpkCHPTqpIi5k40",
         authDomain: "supporteme-147ea.firebaseapp.com",
         databaseURL: "https://supporteme-147ea.firebaseio.com",
         projectId: "supporteme-147ea",
         storageBucket: "",
         messagingSenderId: "1007267288966",
         appId: "1:1007267288966:web:ab035c27ed063a27"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    //Ingreso de usuario
    const loginS = () =>{
      const eMailA = document.getElementById("email-login").value;
      const passwordA = document.getElementById("password-login").value;
    
      firebase.auth().signInWithEmailAndPassword(eMailA, passwordA)
      .catch(function(error) {        
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
      });
      console.log("Bienvenido a supportMe");
    }

    //Verifica siempre la pagina Web
    
    const observador = () =>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log("Usuario activo")
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;

          console.log("------------------");
          console.log(user.emailVerified);
          console.log("------------------");

          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          // ...
          console.log("No existe el usuario activo")
        }
      });
  }  
  observador();

    boton.addEventListener("click", loginS);
    
 
    // aqui exportaras las funciones que necesites

      
  }
};

export default Login;
