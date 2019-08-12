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

  const register = (email, password) => {
         //Usamos la función de firebase para crear un usuario con contraseña
         firebase.auth().createUserWithEmailAndPassword(email, password)
         .then(function(){
           console.log("Se ha enviado un e-mail a tu correo")
        //    sendEmailVerification();
         })
         .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          console.log(error);
          console.log(errorMessage);
        });
        return firebase;
  };
 
  window.register = register;


