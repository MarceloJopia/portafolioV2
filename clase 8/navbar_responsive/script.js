// Selección del elemento del menú desplegable
const hamburgerMenu = document.querySelector('.hamburger-menu');
// Selección del elemento de la lista de enlaces de navegación
const navLinks = document.querySelector('.nav-links');

// Evento de clic en el menú desplegable
hamburgerMenu.addEventListener('click', () => {
  // Alternar la clase 'active' en la lista de enlaces de navegación
  navLinks.classList.toggle('active');
});
