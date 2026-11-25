import { initRouter } from "./router";
import { initTextComp } from "./components/text";
import { initTextFieldComp } from "./components/text-field";
import { initButtonComp } from "./components/button";
(function () {
  // Inicializamos los componentes o los dejamos "listos/habilitados"
  initTextComp();
  initTextFieldComp();
  initButtonComp();
  const root = document.querySelector(".root");
  initRouter(root);
})();
