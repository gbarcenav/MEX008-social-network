let Login = {
    render: async() => {
        let view = /*html*/ `
<section class="login" id="login">
<div class="login-body">

    <div class="info-user">
        <input type="button" name="close" value="X" id="close">
        <a class="fb-button" href="#" id="btn-facebook">Iniciar sesión con facebook</a>
        <input type="button" id="btn-gmail" class="google-button" value="Iniciar sesión con Google">
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
    },
    // Esta es una llamada separada, ya que solo se pueden registrar después de pintar el DOM
    // Todo el código relacionado con las interacciones DOM y los controles entran aquí.
    after_render: async() => {
        // aqui exportaras las funciones que necesites
        // const loginButton = document.getElementById("login-button");
        // const registerButton = document.getElementById("register-button");
        // const closeButton = document.getElementById("close");
        const btnGmail = document.getElementById("btn-gmail");
        const btnFacebook = document.getElementById("btn-facebook");
        // loginButton.addEventListener("click", goinglogin);
        // registerButton.addEventListener("click", goingregister);
        // closeButton.addEventListener("click", closelogin);
        btnGmail.addEventListener("click", registerGmail);
        btnFacebook.addEventListener("click", signInFacebook);
    }
};

export default Login;