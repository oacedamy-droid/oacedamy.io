const slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 4000);

/* INTRO SAFE HANDLING */
window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const body = document.body;

  if (!intro) return;

  setTimeout(() => {
    intro.classList.add("intro-hide");
    body.classList.remove("intro-lock");
  }, 2500);

  /* FAILSAFE */
  setTimeout(() => {
    if (intro) intro.remove();
    body.classList.remove("intro-lock");
  }, 4000);
});
