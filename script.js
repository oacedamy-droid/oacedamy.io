// script.js

document.addEventListener('DOMContentLoaded', () => {

    // ============== INTRO AUTO HIDE ==============
    const intro = document.getElementById('intro');
    
    // Extra safety: hide intro after 4 seconds even if animation fails
    setTimeout(() => {
        if (intro) {
            intro.style.opacity = '0';
            setTimeout(() => {
                intro.style.visibility = 'hidden';
                intro.style.pointerEvents = 'none';
                document.body.classList.remove('intro-lock');
            }, 700);
        }
    }, 4200);

    // ============== GALLERY SLIDER ==============
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Auto slide every 5 seconds
    let slideInterval = setInterval(nextSlide, 5000);

    // Pause on hover
    const slider = document.querySelector('.slider');
    if (slider) {
        slider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        slider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 5000);
        });
    }

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    if (slider) {
        slider.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            clearInterval(slideInterval);
        });

        slider.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            slideInterval = setInterval(nextSlide, 5000);
        });
    }

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swiped left → next slide
            nextSlide();
        } else if (touchEndX > touchStartX + 50) {
            // Swiped right → previous slide
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
    }

    // ============== SMOOTH SCROLL FOR NAVBAR ==============
    const navLinks = document.querySelectorAll('.navbar a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                e.preventDefault();
                const offset = 80; // space for sticky navbar
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

    // ============== KEYBOARD SUPPORT ==============
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && intro && intro.style.opacity !== '0') {
            intro.style.opacity = '0';
            setTimeout(() => {
                intro.style.visibility = 'hidden';
                document.body.classList.remove('intro-lock');
            }, 700);
        }
    });

    // ============== OPTIONAL: Add "Contact for Fee" text to all buttons ==============
    // Uncomment the lines below if you want to show fee info without showing actual price
    /*
    const allBtns = document.querySelectorAll('.btn');
    allBtns.forEach(btn => {
        btn.innerHTML = 'WhatsApp මගින් ලියාපදිංචි වන්න <span style="font-size:0.8rem;opacity:0.8;">(අයකිරීම් සඳහා අමතන්න)</span>';
    });
    */

    console.log('%cOacedamy website loaded successfully ✅', 'color: #38bdf8; font-weight: 600;');
});
