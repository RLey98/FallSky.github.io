function mostrarContenedor(idContenedor) {
  var contenedores = document.querySelectorAll(".container-character");
  for (var i = 0; i < contenedores.length; i++) {
    contenedores[i].classList.remove("active");
  }
  document.getElementById(idContenedor).classList.add("active");
}
