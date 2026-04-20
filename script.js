document.addEventListener("DOMContentLoaded", () => {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const intro = document.getElementById("intro");
  const body = document.body;

  // Slider
  if (slides.length > 1) {
    let index = 0;

    setInterval(() => {
      slides[index].classList.remove("active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
    }, 4000);
  }

  // Intro safety
  let introRemoved = false;

  const removeIntro = () => {
    if (introRemoved || !intro) return;
    introRemoved = true;

    intro.classList.add("intro-hide");
    body.classList.remove("intro-lock");

    window.setTimeout(() => {
      if (intro.isConnected) intro.remove();
    }, 750);
  };

  if (intro) {
    // normal hide
    window.setTimeout(removeIntro, 2200);

    // hard fallback in case anything delays
    window.setTimeout(removeIntro, 4000);
  } else {
    body.classList.remove("intro-lock");
  }
});
