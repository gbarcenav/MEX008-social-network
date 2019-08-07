// Se declara la expresión literal para indicar su ejecución
"use strict";

// SE IMPORTAN LAS RUTAS Y EL JS "UTILS"
// Páginas o main
import Home from "./vistas/paginas/home.js";
import Registry from "./vistas/paginas/registro.js";
import Profile from "./vistas/paginas/perfil.js";
import Timeline from "./vistas/paginas/timeline.js";

//Componentes o navbar y footer
import Navbar from "./vistas/componentes/navbar.js";
import Footer from "./vistas/componentes/footer.js";

// Archivo "utils"
import Utils from "./servicios/utils.js";

// SE ENLISTAN LAS RUTAS ADMITIDAS.
// Cualquier URL distinta de estas rutas arrojará un error 404
const routes = {
  "/": Home,
  "/registro": Registry,
  "/perfil": Profile,
  "/timeline": Timeline
};

// El código del enrutador.
// Toma una URL, verifica la lista de rutas admitidas y luego muestra la página de contenido correspondiente.
const router = async () => {
  // Elementos de vista de carga diferida:
  // Se visualizan solo los elementos en turno
  const header = null || document.getElementById("header-container");
  const main = null || document.getElementById("page-container");
  const footer = null || document.getElementById("footer-container");

  //Representa los elementos estático en la página
  header.innerHTML = await Navbar.render();
  await Navbar.after_render();
  footer.innerHTML = await Footer.render();
  await Footer.after_render();

  // Obtener el URL analizado de la barra de direcciones
  let request = Utils.parseRequestURL();

  // Analiza la URL y si tiene una parte de id, cámbiala con la cadena ": id"
  let parsedURL =
    (request.resource ? "/" + request.resource : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? "/" + request.verb : "");

  // Obtenga la página de nuestro hash de rutas compatibles.
  let page = routes[parsedURL] ? routes[parsedURL] : Error404;
  main.innerHTML = await page.render();
  await page.after_render();
};

// Escucha el cambio de hash
window.addEventListener("hashchange", router);

// Escuchar en la página cargar
window.addEventListener("load", router);
