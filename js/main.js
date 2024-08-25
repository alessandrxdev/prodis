const dropdown = document.querySelector('.dropdown');
const dropdownButton = document.getElementById('editText');
const options = document.querySelectorAll('.dropdown-content a');
const hiddenInput = document.getElementById('selectedOption');

// Agrega un evento para mostrar/ocultar el contenido al hacer clic en el botón
dropdownButton.addEventListener('click', () => {
  dropdown.classList.toggle('active');
});

// Agrega eventos a las opciones del dropdown
options.forEach(option => {
  option.addEventListener('click', (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace
    dropdownButton.textContent = option.textContent; // Rellena el campo de texto con la opción seleccionada
    hiddenInput.value = option.dataset.value; // Establece el valor del campo oculto
    dropdown.classList.remove('active'); // Oculta el dropdown después de seleccionar una opción
  });
});

// Opcional: Ocultar el dropdown si se hace clic fuera de él
window.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('active');
  }
});