let Profile = {
  render: async () => {
    let view = /*html*/ `
    <section id="" class="profile">
        
    <header>
      <div class="profile-container" id="">
        <div class="img-text-profile">
          <div class="shape-circule">
            <figure>
              <img
                src="./img/tikkho-maciel-Oed8cpob9VM-unsplash.jpg"
                alt="Foto de Alejandra Sánchez"
              />
            </figure>
          </div>
          <div class="text-profile">
            <h1>Alejandra Sánchez</h1>
            <h2>Ciudad de México</h2>
            <h3>Puebla #5</h3>
          </div>
        </div>
      </div>
    </header>

    <div class="container-post" id="">
          <button class="delete-btn" id="show-modal-delete">
            <img src="./img/delete.png" alt="eliminar" />
          </button>
          <div class="text-post">
          <h2>Alejandra Sánchez</h2>
          <p class="recommendation">Recomendación</p>
          <p class="type-company">Restaurante</p>
          <h3 class="company">Pizzas Elena</h3>
          <p class="commentary">
            Las pizzas de este lugar están muy ricas y a muy buen precio
          </p>
          <a href="" id="" class="contact">Contacto</a>
          <figure class="stars">
            <img src="./img/iconos.png" alt="Calificación 4 Estrellas " />
          </figure>
        </div>
        </div>
      </section>
      `;
    return view;
  },
  after_render: async () => {
    // GABY--------------------------
    // Initialize Cloud Firestore through Firebase
    // var db = firebase.firestore();
    // db.collection("users")
    //   .add({
    //     first: "Nadia",
    //     last: "Love",
    //     born: 1813
    //   })
    //   .then(function(docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    //   })
    //   .catch(function(error) {
    //     console.error("Error adding document: ", error);
    //   });

    // MODAL
    // Añadir un objeto de atributos a un elemento
    const addAttributes = (element, attrObj) => {
      for (let attr in attrObj) {
        if (attrObj.hasOwnProperty(attr))
          element.setAttribute(attr, attrObj[attr]);
      }
    };
    // Crear elementos con atributos e hijo
    const createCustomElement = (element, attributes, children) => {
      let customElement = document.createElement(element);
      if (children !== undefined)
        children.forEach(el => {
          if (el.nodeType) {
            if (el.nodeType === 1 || el.nodeType === 11)
              customElement.appendChild(el);
          } else {
            customElement.innerHTML += el;
          }
        });
      addAttributes(customElement, attributes);
      return customElement;
    };
    // Imprimir modal eliminar publicación
    const printModal = content => {
      // Crear contenedor interno
      const modalContentElement = createCustomElement(
          "div",
          {
            id: "modal-content-delete",
            class: "modal-content-delete"
          },
          [content]
        ),
        // Crear contenedor principal
        modalContainerElement = createCustomElement(
          "div",
          {
            id: "modal-container-delete",
            class: "modal-container-delete"
          },
          [modalContentElement]
        );

      document.body.appendChild(modalContainerElement);

      const removeModal = () =>
        document.body.removeChild(modalContainerElement);

      modalContainerElement.addEventListener("click", e => {
        const btnNo = document.getElementById("no-btn");
        if (e.target === modalContainerElement || e.target === btnNo)
          removeModal();
      });
    };

    const deleteQuestion = `<div class="elements-modal-delete">
    <p>¿Deseas eliminar<br>esta publicación?</p>
    <button class="btn-blue" id="yes-btn">Sí</button>
    <button class="btn-blue" id="no-btn">No</button>
  </div>`;
    document
      .getElementById("show-modal-delete")
      .addEventListener("click", () => {
        printModal(deleteQuestion);
      });

    // GABY--------------------------
  }
};
export default Profile;

// FORMULARIO NUEVA PUBLICACIÓN
/* <form class="container-newpost" id="form-newpost">
          
          <input
            type="text"
            id="name-company"
            placeholder="Nombre de la empresa o persona"
            class="form-name-company"
          />
          <textarea
          placeholder="Agrega un comentario"
            name="textarea"
            rows="3"
            cols="33"
            id="new-comment"
            class="form-new-comment"
          ></textarea>

          <input
            type="text"
            id="adress"
            placeholder="Dirección"
            class="form-adress"
          />

          <input
            type="number"
            id="telephone"
            placeholder="Teléfono"
            class="form-telephone"
          />

          <input
            type="number"
            id="score-stars"
            placeholder="Número de estrellas"
            class="form-stars" style="
            width: 145px;"
          />
        </form> */
