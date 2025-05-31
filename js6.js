const input = document.getElementById('userInput');

input.addEventListener('input', () => {
  console.log('Current input value:', input.value);
  // You could also validate, enable buttons, show suggestions, etc.
});
