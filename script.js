// Intro animation control
window.addEventListener("load", () => {

  const intro = document.getElementById("intro");

  // After 2.5s → fade out
  setTimeout(() => {
    intro.classList.add("intro-hide");
  }, 2500);

});
