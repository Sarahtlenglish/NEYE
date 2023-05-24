// Hent alle de øverste ikoner
const icons = document.querySelectorAll('.box .heart-icon');

// Tilføj en klikhændelse til hver ikon
icons.forEach(icon => {
  icon.addEventListener('click', function() {
    // Det tomme hjerte
    this.src = 'billeder/hjerteu.png';

    // Få fat i kassen
    const box = this.closest('.box');

    // Forsinkelse (0.6 sekund)
    setTimeout(function() {
      box.remove();
    }, 600);
  });
});
