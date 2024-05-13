// Función para cargar el navbar
function cargarNavbar() {
    fetch("navbar.html")
      .then((response) => response.text())
      .then((html) => {
        document.querySelector("header").innerHTML = html;
  
        // Obtener la página actual (por ejemplo, index.html -> 'inicio')
        const paginaActual = window.location.pathname
          .split("/")
          .pop()
          .split(".")[0];
  
        // Remover la clase active de todos los enlaces
        document.querySelectorAll(".navbar ul li a").forEach((enlace) => {
          enlace.classList.remove("active");
        });
  
        // Añadir la clase active al enlace correspondiente
        document.getElementById(paginaActual).classList.add("active");
      });
  }
  
  // Llamar a la función para cargar el navbar cuando el DOM esté listo
  document.addEventListener("DOMContentLoaded", cargarNavbar);
  