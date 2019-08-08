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
        <div id="authentication-form">
        <input type="text" name="email" id="email-login" placeholder="email" value="">
        <input type="password" name="password" id="password-login" placeholder="Contraseña" value = "">
        <button type="submit" class="enter-button">Iniciar</button>
        <!-- <input type="submit" class="enter-button" href="#" name="" value="Iniciar"> -->
        </div>
    </div>
</div>
</section>
`;
    return view;
  }
  // // Esta es una llamada separada, ya que solo se pueden registrar después de pintar el DOM
  // // Todo el código relacionado con las interacciones DOM y los controles entran aquí.
  // after_render: async () => {
  //   // aqui exportaras las funciones que necesites
  //   // const loginButton = document.getElementById("login-button");
  //   const registerButton = document.getElementById("register-button");
  //   const closeButton = document.getElementById("close");

  //   //function open or close sections
  //   const hideSection = id => {
  //     document.getElementById(id).classList.add("hide");
  //   };
  //   //Function that show section with id
  //   const showSection = id => {
  //     document.getElementById(id).classList.remove("hide");
  //   };

  //   //functions to change sections

  //   // const goinglogin = () => {
  //   //   hideSection("welcomepage");
  //   //   hideSection("section-register");
  //   //   showSection("login");
  //   // };
  //   // loginButton.addEventListener("click", goinglogin);

  //   const goingregister = () => {
  //     hideSection("welcomepage");
  //     hideSection("login");
  //     showSection("register");
  //   };

  //   registerButton.addEventListener("click", goingregister);

  //   const closelogin = () => {
  //     hideSection("login");
  //     showSection("welcomepage");
  //   };

  //   closeButton.addEventListener("click", closelogin);
  // }
};

export default Login;
