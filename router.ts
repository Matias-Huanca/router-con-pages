import { initPageA } from "./pages/page-a";
import { initPageB } from "./pages/page-b";
import { initPageC } from "./pages/page-c";
// MAPA DE RUTAS
const routes = [
  {
    path: /\/welcome/,
    component: initPageA,
  },
  {
    path: /\/step-1/,
    component: initPageB,
  },
  {
    path: /\/thankyou/,
    component: initPageC,
  },
];

export function initRouter(container: Element) {
  console.log("Ruta en innitRouter", location.pathname);

  function goTo(path) {
    // El path, va a recibir como dato "/sit1" o "/sit2"
    // PushState --> cambia la url sin resfrescar la pagina / Cambia el state(url simbolica)
    history.pushState({}, "", path);
    // Llamamos a handleRoute
    handleRoute(path);
  }

  // Mapa para manejar las rutas y ue hacer en esas rutas (mostrar el contenido)
  function handleRoute(route) {
    //Recibe una ruta en el ROUTE
    console.log("El HandleRoute recibio una nueva Ruta:", route);

    for (const element of routes) {
      // .test --> es un metodo de la REGULAR EXPRESION
      if (element.path.test(route)) {
        console.log("Ruta encontrada:", element);
        const el = element.component({ goTo: goTo });

        // El container ue recibe del elemento. Lo vaciamos y luego hacemos un append para agregar/mostrar el componente
        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }
  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }
  // Para escuchar los cambios de la url/state y hacer un refresh y mostrar el contenido adecuado
  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
