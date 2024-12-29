// QUITAR DESCRIPCIÓN DE CATEGORY EN PANTALLAS PEQUEÑAS
function ocultarTexto() {
    if (window.innerWidth <= 500) {
      const textElements = document.querySelectorAll('p.text-atraction');
      
      textElements.forEach(element => {
        element.style.display = 'none';
      });
    } else {
      const textElements = document.querySelectorAll('p.text-atraction');
      textElements.forEach(element => {
        element.style.display = ''; 
      });
    }
  }
  
  window.onload = ocultarTexto ();
  window.addEventListener('resize', ocultarTexto);
  