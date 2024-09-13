function actualizarReloj() {
  const ahora = new Date();
  let horas = ahora.getHours();
  let minutos = ahora.getMinutes();
  let segundos = ahora.getSeconds();
  
  // Convertir de 24 horas a 12 horas
  if (horas >= 12) {
    horas = horas > 12 ? horas - 12 : horas;
  }
  
  // Ajustar para mostrar 12 en vez de 0 en medianoche
  horas = horas === 0 ? 12 : horas;

  // Añadir un 0 delante si el número es menor a 10
  horas = horas < 10 ? "0" + horas : horas;
  minutos = minutos < 10 ? "0" + minutos : minutos;
  segundos = segundos < 10 ? "0" + segundos : segundos;

  const horaActual = horas + ":" + minutos + ":" + segundos;
  
  document.getElementById("clock").innerText = horaActual;
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);

// Ejecutar la función al cargar la página
actualizarReloj();


const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('image-animation');
    }
  });
});

const viewbox = document.querySelectorAll('.image');
viewbox.forEach(image => {
  observer.observe(image);
});