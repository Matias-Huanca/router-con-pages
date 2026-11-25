export function initTextFieldComp() {
  class TextFieldComponent extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      // Con el atributo distinguimos el tipo de texto
      const label = this.getAttribute("label");

      // Creamos un shadow root
      const shadow = this.attachShadow({ mode: "open" });

      // Creamos una hoja de estilo para este componente
      const style = document.createElement("style");
      style.innerHTML = `
        *{
            box-sizing: border-box;
        }
        .label{
            display: block;
        }
        .input{
            font-size: 18px;
            border: solid 2px;
            border-radius: 4px;
            paddin: 17px 13px;
        }
        `;

      const div = document.createElement("div");
      div.innerHTML = `
        <label class="label">
            <text-comp variant="title">
                ${label}
            </text-comp>
        </label>
        <input type="text" class="input"/>
      `;

      // Agregamos las funciones a shadow
      shadow.appendChild(div);
      shadow.appendChild(style);
    }
  }

  //  Registramos un elemento personalizado en el DOM
  customElements.define("text-field-comp", TextFieldComponent);
}
