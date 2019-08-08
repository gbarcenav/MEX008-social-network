let Signin = {
  render: async () => {
    let view = /*html*/ `
        <section title="Window-Register" class="section-register" id="section-register">
        <div>
            <h1>Registro</h1>
            <input type="text" placeholder="Nombre" id="register-name" class="register-name">
            <input type="email" placeholder="e-mail" id="register-email" class="register-email">
            <input type="text" placeholder="Username" id="register-username" class="register-username">
            <input type="password" placeholder="Contraseña" id="register-password" class="register-password">
            <input type="password" placeholder="Confirmar Contraseña" id="register-cp" class="register-cp">

            <select name="Estado" size="1" class="register-select" id="register-select">
               <option value="nothing">Elige tu estado</option>
               <option value="ags">Aguascalientes</option>
               <option value="bc">Baja California</option>
               <option value="bcs">Baja California Sur</option>
               <option value="camp">Campeche</option>
               <option value="chis">Chiapas</option>
               <option value="chih">Chihuahua</option>
               <option value="cdmx">Ciudad de México</option>
               <option value="coah">Coahuila</option>
               <option value="col">Colima</option>
               <option value="dgo">Durango</option>
               <option value="gto">Guanajautao</option>
               <option value="gro">Guerrero</option>
               <option value="hgo">Hidalgo</option>
               <option value="jal">Jalisco</option>
               <option value="edomex">México</option>
               <option value="mich">Michoacán</option>
               <option value="mor">Morelos</option>
               <option value="nay">Nayarit</option>
               <option value="nl">Nuevo León</option>
               <option value="oax">Oaxaca</option>
               <option value="pue">Puebla</option>
               <option value="qro">Querétaro</option>
               <option value="qroo">Quintana Roo</option>
               <option value="slp">San Luis Potosí</option>
               <option value="sin">Sinaloa</option>
               <option value="son">Sonora</option>
               <option value="tab">Tabasco</option>
               <option value="tamps">Tamaulipas</option>              
               <option value="tlax">Tlaxcala</option>
               <option value="ver">Veracruz</option>
               <option value="yuc">Yucatán</option>
               <option value="zac">Zacatecas</option>
           </select>

            <input type="text" placeholder="Ciudad" class="register-city" id="register-city">
            <input type="text" placeholder="Unidad Habitacional" class="register-uhm" id="register-uhm">

            <input type="button" value="RegistrarMe" id="button-register" class="button-register">
        </div>

    </section>
        `;
    return view;
  },
  // Esta es una llamada separada, ya que solo se pueden registrar después de pintar el DOM
  // Todo el código relacionado con las interacciones DOM y los controles entran aquí.
  after_render: async () => {
    document.getElementById("button-register").addEventListener("click", () => {
      let email = document.getElementById("register-email");
      let pass = document.getElementById("register-password");
      let repeatPass = document.getElementById("register-cp");
      if (pass.value != repeatPass.value) {
        alert(`The passwords dont match`);
      } else if (
        (email.value == "") |
        (pass.value == "") |
        (repeatPass == "")
      ) {
        alert(`The fields cannot be empty`);
      } else {
        alert(`User with email ${email.value} was successfully submitted!`);
      }
    });
  }
};

export default Signin;
