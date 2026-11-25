export function initTextComp() {
  class TextComponent extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      // Con el atributo distinguimos el tipo de texto
      const variant = this.getAttribute("variant") || "body";

      // Creamos un shadow root
      const shadow = this.attachShadow({ mode: "open" });

      // Creamos una hoja de estilo para este componente
      const style = document.createElement("style");
      style.innerHTML = `
            .title{
            font-size: 52px;
            font-weight: bold;
            }
            .body{
            font-size: 18px;
            }
        `;

      const div = document.createElement("div");
      div.className = variant;

      // Escuchamos el contenido que viene como parametro
      div.textContent = this.textContent;

      // Agregamos las funciones a shadow
      shadow.appendChild(div);
      shadow.appendChild(style);
    }
  }

  //  Registramos un elemento personalizado en el DOM
  customElements.define("text-comp", TextComponent);
}
