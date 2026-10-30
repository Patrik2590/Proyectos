document.addEventListener("DOMContentLoaded", () => {
  // === 1. GESTIÓN DEL TEMA (MODO CLARO/OSCURO) ===
  const themeToggle = document.getElementById("theme-toggle");
  const htmlDoc = document.documentElement;
  const themeIcon = themeToggle ? themeToggle.querySelector("i") : null;

  const savedTheme = localStorage.getItem("tema-portfolio");
  if (savedTheme) {
    htmlDoc.setAttribute("data-theme", savedTheme);
    updateIcon(savedTheme);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = htmlDoc.getAttribute("data-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";
      htmlDoc.setAttribute("data-theme", newTheme);
      localStorage.setItem("tema-portfolio", newTheme);
      updateIcon(newTheme);
    });
  }

  function updateIcon(theme) {
    if (!themeIcon) return;
    if (theme === "dark") {
      themeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
      themeIcon.classList.replace("fa-sun", "fa-moon");
    }
  }

  // === 2. EFECTO TYPING (MÁQUINA DE ESCRIBIR) ===
  const roles = ["Desarrollador .NET", "Especialista Soporte TI", "Resolviendo problemas con código"];
  let count = 0;
  let index = 0;
  let currentText = "";
  let isDeleting = false;
  const typingElement = document.getElementById("typing-text");

  function type() {
    if (count === roles.length) { count = 0; }
    currentText = roles[count];

    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, index - 1);
      index--;
    } else {
      typingElement.textContent = currentText.substring(0, index + 1);
      index++;
    }

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && index === currentText.length) {
      typingSpeed = 2000; // Pausa al terminar
      isDeleting = true;
    } else if (isDeleting && index === 0) {
      isDeleting = false;
      count++;
      typingSpeed = 500; // Pausa antes de la siguiente palabra
    }
    setTimeout(type, typingSpeed);
  }
  
  // Solo ejecuta si existe el elemento (para no dar error en info.html)
  if (typingElement) {
    type();
  }

  // === 3. LÓGICA DEL MODAL DEL PDF ===
  const btnCV = document.getElementById("mostrarCV");
  const modal = document.getElementById("cvModal");
  const btnCerrar = document.querySelector(".cerrar");

  if (btnCV && modal) {
    btnCV.addEventListener("click", () => {
      modal.classList.add("activo");
      document.body.style.overflow = "hidden";
    });
  }

  if (btnCerrar && modal) {
    btnCerrar.addEventListener("click", () => {
      modal.classList.remove("activo");
      document.body.style.overflow = "auto";
    });
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("activo");
        document.body.style.overflow = "auto";
      }
    });
  }

// === 4. COPIAR CORREO AL PORTAPAPELES ===
  const btnCorreo = document.getElementById("btnCorreo");
  
  if (btnCorreo) {
    btnCorreo.addEventListener("click", () => {
      // Copia el correo al portapapeles
      navigator.clipboard.writeText("patrik-remache@hotmail.com").then(() => {
        // Guarda el contenido original
        const contenidoOriginal = btnCorreo.innerHTML;
        // Cambia el texto temporalmente
        btnCorreo.innerHTML = '<i class="fa-solid fa-check" style="color: #10b981;"></i> ¡Copiado!';
        
        // Vuelve a la normalidad después de 2 segundos
        setTimeout(() => {
          btnCorreo.innerHTML = contenidoOriginal;
        }, 2000);
      });
    });
  }

});