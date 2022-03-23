function main() {
  const myFormEl = document.querySelector(".mi-form");
  myFormEl.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const formData = new FormData(evento.target);
    const objeto = Object.fromEntries(formData.entries());

    objeto["checkboxes"] = formData.getAll("checkboxes");
    console.log(objeto);
    // evento.preventDefault();
    // const form = evento.target;
    // console.log("Nombre: " + form.nombre.value);
    // console.log("Lo que mas le gustó fue " + form.temas.value);
    // console.log("Prefiere estudiar de " + form.radio.value);
  });
}
main();
