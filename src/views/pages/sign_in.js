let Signin = {
  render: async () => {
    let view = /*html*/ `
        <section title="Window-Register" class="section-register" id="section-register">
        <form id="form">
            <h1>Registro</h1>
            <input type="text" name="name" placeholder="Nombre" id="register-name" class="register-name">
            <input type="email" name="email" placeholder="e-mail" id="register-email" class="register-email">
            <input type="text" placeholder="Username" id="register-username" class="register-username">
            <input type="password" placeholder="Contraseña" id="register-password" class="register-password">
            <input type="password" placeholder="Confirmar Contraseña" id="register-cp" class="register-cp">

            <select name="Estado" size="1" class="register-select" id="register-select">
               
           </select>

            <input type="text" placeholder="Ciudad" class="register-city" id="register-city">
            <input type="text" placeholder="Unidad Habitacional" class="register-uhm" id="register-uhm">
            <input type="button" value="RegistrarMe" id="button-register" class="button-register">
        </form>

    </section>

        `;
    return view;
  },
  after_render: async () => {
    
      const boton = document.getElementById("button-register");

      const pruebas = () =>{
        console.log("hola");
      }

      boton.addEventListener("click", pruebas);
      
    }
};

export default Signin;
