/* =========================
   INTRO LOADER (SMOOTH FADE)
========================= */
window.addEventListener("load", () => {
  const intro = document.getElementById("intro");

  setTimeout(() => {
    if (intro) {
      intro.style.opacity = "0";
      intro.style.transition = "opacity 0.6s ease";
    }

    document.body.classList.remove("intro-lock");

    setTimeout(() => {
      if (intro) intro.style.display = "none";
    }, 600);
  }, 1500);
});


/* =========================
   SMOOTH SCROLL
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


/* =========================
   APPLE-STYLE SCROLL REVEAL
========================= */
const revealElements = document.querySelectorAll(".glass");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach(el => revealObserver.observe(el));


/* =========================
   PARALLAX EFFECT (HERO)
========================= */
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const hero = document.querySelector(".cover");

  if (hero) {
    hero.style.backgroundPositionY = scrollY * 0.4 + "px";
  }
});


/* =========================
   NAVBAR SCROLL EFFECT
========================= */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


/* =========================
   ACTIVE NAV LINK
========================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


/* =========================
   GALLERY AUTO SLIDER
========================= */
const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3000);
}


/* =========================
   MOBILE MENU (READY)
========================= */
// Requires a button with class="menu-btn"
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".navbar ul");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}
