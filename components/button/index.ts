export function initButtonComp() {
  class ButtonComponent extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      // Creamos un shadow root
      const shadow = this.attachShadow({ mode: "open" });

      // Creamos una hoja de estilo para este componente
      const style = document.createElement("style");
      style.innerHTML = `
        .root{
            font-size: 18px;
            border: solid 2px;
            border-radius: 4px;
            paddin: 17px 13px;
            background-color: #9CBBE9;
            width: 100%;

        }
        `;

      const button = document.createElement("button");
      button.className = "root";

      button.textContent = this.textContent;
      // Agregamos las funciones a shadow
      shadow.appendChild(button);
      shadow.appendChild(style);
    }
  }

  //  Registramos un elemento personalizado en el DOM
  customElements.define("button-comp", ButtonComponent);
}
