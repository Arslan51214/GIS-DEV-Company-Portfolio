// script.js
const earth = document.querySelector('.earth');

document.addEventListener('mousemove', (event) => {
  const { clientX, clientY } = event;

  // Get the center of the screen
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  // Calculate the offset
  const offsetX = (clientX - centerX) / 20; // Adjust divisor to control sensitivity
  const offsetY = (clientY - centerY) / 20;

  // Apply transform
  earth.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});
