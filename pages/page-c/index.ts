export function initPageC(params) {
  const div = document.createElement("div");
  div.innerHTML = `
    <h1>Pagina C</h1>
  `;
  div.addEventListener("click", () => {
    params.goTo("/welcome");
  });
  return div;
}
