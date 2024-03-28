// Escucha el evento 'DOMContentLoaded' que se dispara cuando todo el HTML ha sido cargado y analizado.
document.addEventListener('DOMContentLoaded', function () {
  // Busca el botón que controla la expansión de la barra de navegación (navbar).
  let navbarToggler = document.querySelector('.navbar-toggler');
  // Hace referencia al elemento <body> del documento.
  let body = document.body;

  // Agrega un evento de clic al botón de la barra de navegación.
  navbarToggler.addEventListener('click', function () {
    // Imprime un mensaje en la consola para confirmar que el botón fue clickeado.
    console.log("El botón de la barra de navegación ha sido clickeado");

    // Espera 350 milisegundos para dar tiempo a que el menú de navegación se despliegue y así obtener su altura correcta.
    setTimeout(function () {
      // Revisa si el menú de navegación está actualmente visible.
      let menuVisible = document.getElementById('navbarNav').offsetHeight > 0;

      // Si el menú está visible, añade la clase 'navbar-expanded' al <body>.
      if (menuVisible) {
        console.log("La barra de navegación está expandida, añadiendo la clase");
        body.classList.add('navbar-expanded');
      } else {
        // Si el menú no está visible, elimina la clase 'navbar-expanded' del <body>.
        console.log("La barra de navegación no está expandida, eliminando la clase");
        body.classList.remove('navbar-expanded');
      }
    }, 350);
  });
});
