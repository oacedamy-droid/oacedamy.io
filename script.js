document.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro');

  setTimeout(() => {
    if (intro) {
      intro.style.opacity = '0';
      intro.style.transition = 'opacity 0.7s ease';
      setTimeout(() => {
        intro.style.visibility = 'hidden';
        intro.style.pointerEvents = 'none';
        document.body.classList.remove('intro-lock');
      }, 700);
    } else {
      document.body.classList.remove('intro-lock');
    }
  }, 3200);

  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  let slideInterval = null;

  function showSlide(index) {
    if (!slides.length) return;
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    if (!slides.length) return;
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  if (slides.length > 0) {
    showSlide(0);
    slideInterval = setInterval(nextSlide, 5000);
  }

  const slider = document.querySelector('.slider');
  if (slider && slides.length > 0) {
    slider.addEventListener('mouseenter', () => {
      if (slideInterval) clearInterval(slideInterval);
    });

    slider.addEventListener('mouseleave', () => {
      slideInterval = setInterval(nextSlide, 5000);
    });

    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      if (slideInterval) clearInterval(slideInterval);
    });

    slider.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;

      if (touchEndX < touchStartX - 50) {
        nextSlide();
      } else if (touchEndX > touchStartX + 50) {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
      }

      slideInterval = setInterval(nextSlide, 5000);
    });
  }

  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const targetSection = document.querySelector(href);
      if (targetSection) {
        e.preventDefault();
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition - bodyRect - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && intro && intro.style.visibility !== 'hidden') {
      intro.style.opacity = '0';
      setTimeout(() => {
        intro.style.visibility = 'hidden';
        intro.style.pointerEvents = 'none';
        document.body.classList.remove('intro-lock');
      }, 700);
    }
  });

  console.log('%cOacedamy website loaded successfully ✅', 'color: #38bdf8; font-weight: 600;');
});
