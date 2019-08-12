let Login = {
  render: async () => {
    let view = /*html*/ `
        
<section class="login" id="login">
  <div class="login-body">

    <div class="info-user">
        <input type="button" name="close" value="X" id="close">
        <a id="loginFacebook" class="fb-button" href="#">Iniciar sesión con facebook</a>
        <a id="loginGoogle" class="google-button" href="#">Iniciar sesión con google</a>
    <div>
            <div class="line">&nbsp;</div>
            <div class="leyend"> O </div>
            <div class="line">&nbsp;</div>
    </div>
   </section>
`;
    return view;
  },
  // Esta es una llamada separada, ya que solo se pueden registrar después de pintar el DOM
  // Todo el código relacionado con las interacciones DOM y los controles entran aquí.
  after_render: async () => {
    // aqui exportaras las funciones que necesites
    // const loginButton = document.getElementById("login-button");
    // const registerButton = document.getElementById("register-button");
    // const closeButton = document.getElementById("close");
    const loginSession = document.getElementById("login-count");
    const btnGmail = document.getElementById("btn-gmail");
    const btnFacebook = document.getElementById("btn-facebook");
    // loginButton.addEventListener("click", goinglogin);
    // registerButton.addEventListener("click", goingregister);
    // closeButton.addEventListener("click", closelogin);
    loginSession.addEventListener("click", loginS);
    btnGmail.addEventListener("click", registerGmail);
    btnFacebook.addEventListener("click", signInFacebook);

    const boton = document.getElementById("enter-button");
    boton.addEventListener("click", loginS);

    const btnGoogle = document.getElementById("loginGoogle");
    btnGoogle.addEventListener("click", signGoogle);
  }
};

export default Login;
