const slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 4000);

// intro animation handling
window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const body = document.body;

  setTimeout(() => {
    intro.classList.add("intro-hide");
    body.classList.remove("intro-lock");
  }, 2500);

  setTimeout(() => {
    intro.remove();
  }, 3300);
});
