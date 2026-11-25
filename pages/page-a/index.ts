export function initPageA(params) {
  const div = document.createElement("div");
  div.className = "page-a";
  div.innerHTML = `
    <text-comp variant="title">Te damos la bienvenida a esta página</text-comp>
    <text-comp variant="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?</text-comp>
    <div>
        <text-field-comp label="nombre"></text-field-comp>
    <div>
    <div>
        <button-comp class="start-button">Comenzar</button-comp>
    <div>
    `;
  console.log("Params:", params);

  const startButtonEl = div.querySelector(".start-button");
  startButtonEl.addEventListener("click", () => {
    params.goTo("/step-1");
  });
  return div;
}
