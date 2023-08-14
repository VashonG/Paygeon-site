  document.addEventListener('DOMContentLoaded', function() {
  var card = document.querySelector('.card');

  // Apply the shimmering effect
  card.classList.add('shimmering');

  // Follow mouse effect
  document.addEventListener('mousemove', function(e) {
    var centerX = window.innerWidth / 2;
    var centerY = window.innerHeight / 2;

    // Calculate the difference between mouse position and center
    var deltaX = (e.clientX - centerX) / 30; // 30 controls the responsiveness
    var deltaY = (e.clientY - centerY) / 30;

    // Update the card's position
    card.style.transform = `translate(-50%, -50%) translate(${deltaX}px, ${deltaY}px)`;
  });
});
