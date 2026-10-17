// Landing de WillNet: interacciones (adaptado de la plantilla portfolio_landing).

const RESPONSIVE_WIDTH = 1280; // por debajo de este ancho el menú es un panel lateral

// ---------------------------------------------------------------
// 1) Menú móvil: panel lateral que se abre con el botón ☰
// ---------------------------------------------------------------
const collapseBtn = document.getElementById("collapse-btn");
const collapseHeaderItems = document.getElementById("collapsed-header-items");
let isHeaderOpen = false;

function onHeaderClickOutside(event) {
  if (!collapseHeaderItems.contains(event.target)) toggleHeader();
}

function toggleHeader() {
  isHeaderOpen = !isHeaderOpen;
  collapseHeaderItems.classList.toggle("is-open", isHeaderOpen);
  collapseHeaderItems.style.width = isHeaderOpen ? "60vw" : "";
  collapseBtn.classList.toggle("bi-list", !isHeaderOpen);
  collapseBtn.classList.toggle("bi-x", isHeaderOpen);
  collapseBtn.classList.toggle("max-xl:fixed", isHeaderOpen);
  collapseBtn.setAttribute("aria-expanded", String(isHeaderOpen));

  if (isHeaderOpen) {
    setTimeout(() => window.addEventListener("click", onHeaderClickOutside), 1);
  } else {
    window.removeEventListener("click", onHeaderClickOutside);
  }
}

collapseBtn.addEventListener("click", toggleHeader);

// Al tocar un enlace del menú en móvil, se cierra el panel
collapseHeaderItems.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (isHeaderOpen) toggleHeader();
  });
});

// Si se agranda la ventana con el menú abierto, se reinicia
window.addEventListener("resize", () => {
  if (window.innerWidth > RESPONSIVE_WIDTH && isHeaderOpen) toggleHeader();
});

// ---------------------------------------------------------------
// 2) Preguntas frecuentes (acordeón)
// ---------------------------------------------------------------
document.querySelectorAll(".faq-accordion").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const isOpen = button.classList.toggle("active");
    button.setAttribute("aria-expanded", String(isOpen));
    content.style.maxHeight = isOpen ? content.scrollHeight + "px" : null;
    content.style.padding = isOpen ? "0 18px 20px" : "0 18px";
  });
});

// ---------------------------------------------------------------
// 3) Filtros del portafolio
// ---------------------------------------------------------------
const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll("#projects-grid > article");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((other) => other.setAttribute("aria-pressed", String(other === button)));
    projectCards.forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  });
});

// ---------------------------------------------------------------
// 4) Año actual en el footer
// ---------------------------------------------------------------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------------------------------------------------------------
// 5) Animaciones con GSAP (si cargó y si el usuario no pidió menos movimiento)
// ---------------------------------------------------------------
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (window.gsap && window.ScrollTrigger && !prefersReducedMotion) {
  gsap.registerPlugin(ScrollTrigger);

  // Los elementos .reveal-up empiezan ocultos y suben al aparecer
  gsap.set(".reveal-up", { opacity: 0, y: "100%" });

  // Sombra azul y enderezado de la imagen del hero al hacer scroll
  gsap.to("#dashboard", {
    boxShadow: "0px 15px 25px -5px #2563ebaa",
    duration: 0.3,
    scrollTrigger: { trigger: "#inicio", start: "60% 60%", end: "80% 80%" },
  });

  gsap.to("#dashboard", {
    scale: 1,
    translateY: 0,
    rotateX: "0deg",
    scrollTrigger: {
      trigger: "#inicio",
      start: window.innerWidth > RESPONSIVE_WIDTH ? "top 95%" : "top 70%",
      end: "bottom bottom",
      scrub: 1,
    },
  });

  // Cada sección revela sus elementos .reveal-up en cascada
  gsap.utils.toArray("section").forEach((section) => {
    const timeline = gsap.timeline({
      paused: true,
      scrollTrigger: { trigger: section, start: "10% 80%", end: "20% 90%" },
    });
    timeline.to(section.querySelectorAll(".reveal-up"), {
      opacity: 1,
      duration: 0.8,
      y: "0%",
      stagger: 0.2,
    });
  });

  // Al cambiar de idioma cambian los altos de los textos: recalcular posiciones
  document.addEventListener("languagechange", () => ScrollTrigger.refresh());
} else {
  // Sin animaciones: la imagen del hero se muestra recta
  const dashboard = document.getElementById("dashboard");
  if (dashboard) dashboard.style.transform = "none";
}
