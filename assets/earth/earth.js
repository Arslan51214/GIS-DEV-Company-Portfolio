// index.js
const earth = document.querySelector('.earth');
let isTouching = false; // Flag to check if touch or mouse is active
let lastX = 0;
let lastY = 0;

function updatePosition(x, y, centerX, centerY) {
  const offsetX = (x - centerX) / 20; // Adjust sensitivity for movement
  const offsetY = (y - centerY) / 20; // Adjust sensitivity for movement
  earth.style.transform = `translate(${offsetX}px, ${offsetY}px)`; // Move Earth image
}

// Mouse movement listener
document.addEventListener('mousemove', (event) => {
  if (isTouching) return; // Prevent mouse events when touching
  const { clientX, clientY } = event;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  updatePosition(clientX, clientY, centerX, centerY);
});

// Touch movement listener
parallaxContainer.addEventListener('touchstart', (event) => {
  const touch = event.touches[0]; // Get the first touch point
  lastX = touch.clientX;
  lastY = touch.clientY;
  isTouching = true;
}, { passive: true });

parallaxContainer.addEventListener('touchmove', (event) => {
  const touch = event.touches[0]; // Get the first touch point
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  updatePosition(touch.clientX, touch.clientY, centerX, centerY);
}, { passive: true });

parallaxContainer.addEventListener('touchend', () => {
  isTouching = false;
});
