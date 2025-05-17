// Esperamos que la página cargue completamente
window.onload = function() {
  // Seleccionamos los elementos del DOM
  const btnMostrarCV = document.getElementById("mostrarCV");
  const modal = document.getElementById("cvModal");
  const cerrar = document.querySelector(".cerrar");

  // Evento para mostrar el modal
  btnMostrarCV.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // Evento para cerrar el modal al hacer clic en la "X"
  cerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Evento para cerrar el modal haciendo clic fuera del contenido
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
};
