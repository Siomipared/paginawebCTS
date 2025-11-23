// script.js

/**
 * Redirige al usuario a la página indicada.
 * @param {string} pagina - Nombre del archivo HTML al que se desea ir.
 */
function irAPagina(pagina) {
    window.location.href = pagina;
  }
  
  // Efecto visual para los botones al hacer clic
  document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.paper-btn');
    
    botones.forEach(boton => {
      boton.addEventListener('click', () => {
        boton.classList.add('activo');
        setTimeout(() => boton.classList.remove('activo'), 300);
      });
    });
  });
// =============================
// Mostrar el nombre en el saludo y ocultar el formulario
// =============================
document.addEventListener('DOMContentLoaded', () => {
  const botonBienvenida = document.getElementById('boton-bienvenida');
  const inputNombre = document.getElementById('nombre-usuario');
  const nombreMostrado = document.getElementById('nombre-mostrado');

  if (botonBienvenida && inputNombre && nombreMostrado) {
    botonBienvenida.addEventListener('click', () => {
      const nombre = inputNombre.value.trim();

      if (nombre) {
        // Mostrar el nombre junto al "Hola"
        nombreMostrado.textContent = nombre;

        // Ocultar el campo de texto y el botón
        inputNombre.style.display = "none";
        botonBienvenida.style.display = "none";
      } else {
        alert("Por favor, ingrese su nombre antes de continuar.");
      }
    });
  }
});

