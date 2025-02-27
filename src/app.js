// Se declara la expresión literal para indicar su ejecución
"use strict";

// SE IMPORTAN LAS RUTAS Y EL JS "UTILS"
// Páginas o main
import Home from "./views/pages/home.js";
import Login from "./views/pages/login.js";
import Signin from "./views/pages/sign_in.js";
import Profile from "./views/pages/profile.js";
import Timeline from "./views/pages/timeline.js";
import Error404 from "./views/pages/error404.js";

//Componentes o navbar y footer
import navbarProfile from "./views/components/navbar.js";
import navbarTimeline from "./views/components/navbar-timeline.js";

// Archivo "utils"
import Utils from "./services/utils.js";
// import firebase from "./firebase.js";

// SE ENLISTAN LAS RUTAS ADMITIDAS.
// Cualquier URL distinta de estas rutas arrojará un error 404
const routes = {
  "/": Home,
  "/login": Login,
  "/register": Signin,
  "/profile": Profile,
  "/timeline": Timeline
};

// El código del enrutador.
// Toma una URL, verifica la lista de rutas admitidas y luego muestra la página de contenido correspondiente.
const router = async () => {
  // Elementos de vista de carga diferida:
  // Se visualizan solo los elementos en turno
  const header = null || document.getElementById("header-container");
  const main = null || document.getElementById("page-container");

  //Representa los elementos estático en la página
  header.innerHTML = await navbarProfile.render();
  await navbarProfile.after_render();
  header.innerHTML = await navbarTimeline.render();
  await navbarTimeline.after_render();

  // Obtener el URL analizado de la barra de direcciones
  let request = Utils.parseRequestURL();

  // Analiza la URL y si tiene una parte de id, cámbiala con la cadena ": id"
  let parsedURL =
    (request.resource ? "/" + request.resource : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? "/" + request.verb : "");

  // Proveé una navbar diferente para sección PROFILE y Timeline y la quita en las otras secciones
  if (parsedURL === "/") {
    header.style.display = "none";
  } else if (parsedURL === "/register") {
    header.style.display = "none";
  } else if (parsedURL === "/login") {
    header.style.display = "none";
  } else if (parsedURL === "/profile") {
    header.innerHTML = await navbarProfile.render();
    header.style.display = "block";
  } else if (parsedURL === "/timeline") {
    header.innerHTML = await navbarTimeline.render();
    header.style.display = "block";
  }
  // Obtenga la página de nuestro hash de rutas compatibles.
  let page = routes[parsedURL] ? routes[parsedURL] : Error404;
  main.innerHTML = await page.render();
  await page.after_render();
};

// Escucha el cambio de hash
window.addEventListener("hashchange", router);

// Escuchar en la página cargar
window.addEventListener("load", router);
