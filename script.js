// WAIT UNTIL DOM READY (safer than load)
document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     SLIDER (SAFE)
  ===================== */
  const slides = document.querySelectorAll(".slide");

  if (slides.length > 0) {
    let i = 0;

    setInterval(() => {
      slides[i].classList.remove("active");
      i = (i + 1) % slides.length;
      slides[i].classList.add("active");
    }, 4000);
  }

  /* =====================
     INTRO FIX (CRITICAL)
  ===================== */
  const intro = document.getElementById("intro");
  const body = document.body;

  if (intro) {
    // Remove lock immediately if something breaks
    body.classList.remove("intro-lock");

    // Fade out
    setTimeout(() => {
      intro.classList.add("intro-hide");
    }, 1800);

    // HARD REMOVE (no matter what)
    setTimeout(() => {
      intro.remove();
    }, 2600);
  }

});
