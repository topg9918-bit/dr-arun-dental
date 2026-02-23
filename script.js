// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}


// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// ===== STICKY HEADER SHADOW ON SCROLL =====
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
  } else {
    header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)";
  }
});


// ===== SCROLL FADE-IN ANIMATION =====
const fadeElements = document.querySelectorAll(".card, .review-card, .doctor-info");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.8s ease";
  observer.observe(el);
});


// ===== SIMPLE REVIEW AUTO GLOW EFFECT =====
setInterval(() => {
  document.querySelectorAll(".review-card").forEach(card => {
    card.style.boxShadow = "0 10px 35px rgba(37,99,235,0.2)";
    setTimeout(() => {
      card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.05)";
    }, 800);
  });
}, 5000);