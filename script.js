/* =========================
   APPLE-STYLE SCROLL REVEAL
========================= */
const elements = document.querySelectorAll(".glass");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

elements.forEach(el => revealObserver.observe(el));
