// ===============================
// SMOOTH SCROLL
// ===============================
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


// ===============================
// STICKY HEADER SHADOW
// ===============================
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
  } else {
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.05)";
  }
});


// ===============================
// FADE IN ON SCROLL
// ===============================
const elements = document.querySelectorAll(
  ".service-card, .review-card, .doctor-content"
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.8s ease";
  observer.observe(el);
});


// ===============================
// FLOATING WHATSAPP CLICK EFFECT
// ===============================
const whatsappBtn = document.querySelector(".whatsapp-float");

if (whatsappBtn) {
  whatsappBtn.addEventListener("click", () => {
    whatsappBtn.style.transform = "scale(0.9)";
    setTimeout(() => {
      whatsappBtn.style.transform = "scale(1)";
    }, 200);
  });
}


// ===============================
// OPTIONAL MOBILE MENU
// ===============================
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}