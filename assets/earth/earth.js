const earth = document.querySelector('.earth');
const parallaxContainer = document.querySelector('.parallax-container'); // Assuming this is your container

let isTouching = false; // Flag to track if touch or mouse is active
let lastX = 0;
let lastY = 0;

function updatePosition(x, y, centerX, centerY) {
  const offsetX = (x - centerX) / 20; // Adjust sensitivity for movement
  const offsetY = (y - centerY) / 20; // Adjust sensitivity for movement
  earth.style.transform = `translate(${offsetX}px, ${offsetY}px)`; // Move Earth image
}

// Mouse movement listener
document.addEventListener('mousemove', (event) => {
  if (isTouching) return; // If touch is active, skip mouse events
  const { clientX, clientY } = event;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  updatePosition(clientX, clientY, centerX, centerY);
});

// Touch movement listener
parallaxContainer.addEventListener('touchstart', (event) => {
  event.preventDefault(); // Prevent page from scrolling
  const touch = event.touches[0]; // Get the first touch point
  lastX = touch.clientX;
  lastY = touch.clientY;
  isTouching = true; // Mark touch as active
}, { passive: false }); // 'passive: false' to allow preventDefault()

parallaxContainer.addEventListener('touchmove', (event) => {
  event.preventDefault(); // Prevent page from scrolling
  const touch = event.touches[0]; // Get the first touch point
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  updatePosition(touch.clientX, touch.clientY, centerX, centerY);
}, { passive: false }); // 'passive: false' to allow preventDefault()

parallaxContainer.addEventListener('touchend', () => {
  isTouching = false; // Reset the touch flag when touch ends
});
