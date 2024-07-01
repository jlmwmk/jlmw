const rectangle = document.getElementById('rectangle');
const text = document.getElementById('text');

rectangle.addEventListener('click', () => {
  if (text.textContent === "I miss you") {
    text.textContent = "today and tomorrow the same";
    rectangle.classList.add('clicked');
  } else {
    text.textContent = "I miss you";
    rectangle.classList.remove('clicked');
  }
});
