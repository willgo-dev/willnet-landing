// Landing de WillNet: interacciones (adaptado de la plantilla portfolio_landing).

const RESPONSIVE_WIDTH = 1280; // por debajo de este ancho el menú es un panel lateral
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
    button.closest(".faq").classList.toggle("is-open", isOpen); // borde azul y barra a la izquierda (css/input.css)
    button.setAttribute("aria-expanded", String(isOpen));
    content.style.maxHeight = isOpen ? content.scrollHeight + "px" : null;
    content.style.padding = isOpen ? "0 18px 20px" : "0 18px";
  });
});

// ---------------------------------------------------------------
// 3) Portafolio: plegable + filtros
//    Al cargar se ven solo los proyectos con data-preview (los 3 primeros).
//    El botón "See all 18 projects" despliega el resto; elegir un filtro también lo despliega.
// ---------------------------------------------------------------
const projectsGrid = document.getElementById("projects-grid");
const projectCards = document.querySelectorAll("#projects-grid > article");
const filterButtons = document.querySelectorAll("[data-filter]");
const projectsToggle = document.getElementById("projects-toggle");
const projectsMore = document.getElementById("projects-more");
let isPortfolioCollapsed = true;
let currentFilter = "all";

document.getElementById("projects-count").textContent = projectCards.length;

function renderProjects(animate) {
  // Qué tarjetas se veían antes del cambio (offsetParent es null cuando están ocultas)
  const wasVisible = new Set([...projectCards].filter((card) => card.offsetParent !== null));
  projectsGrid.classList.toggle("is-collapsed", isPortfolioCollapsed);
  projectsMore.classList.toggle("is-expanded", !isPortfolioCollapsed);
  projectsToggle.setAttribute("aria-expanded", String(!isPortfolioCollapsed));
  projectsToggle.querySelector(".projects-toggle__open").hidden = !isPortfolioCollapsed;
  projectsToggle.querySelector(".projects-toggle__close").hidden = isPortfolioCollapsed;

  let delay = 0;
  projectCards.forEach((card) => {
    card.hidden = currentFilter !== "all" && card.dataset.category !== currentFilter;
    // Animación de entrada en cascada para los proyectos que aparecen al desplegar
    card.classList.remove("card-enter");
    if (animate && !card.hidden && !wasVisible.has(card)) {
      void card.offsetWidth; // reinicia la animación
      card.style.animationDelay = `${delay}ms`;
      card.classList.add("card-enter");
      delay += 60;
    }
  });
  if (window.ScrollTrigger) ScrollTrigger.refresh();
}

// Sube hasta el inicio de la sección Projects y, cuando llega, ejecuta `callback`.
function scrollToProjectsThen(callback) {
  const HEADER_OFFSET = 90; // alto del header fijo + un poco de aire
  const section = document.getElementById("proyectos");
  const target = section.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

  if (prefersReducedMotion || Math.abs(window.scrollY - target) < 40) {
    window.scrollTo({ top: target, behavior: "instant" });
    callback();
    return;
  }
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    callback();
  };
  window.addEventListener("scrollend", finish, { once: true }); // el scroll suave terminó
  setTimeout(finish, 1100); // respaldo para navegadores sin el evento "scrollend"
  window.scrollTo({ top: target, behavior: "smooth" });
}

projectsToggle.addEventListener("click", () => {
  if (isPortfolioCollapsed) {
    isPortfolioCollapsed = false;
    renderProjects(true);
    return;
  }
  // Plegar: PRIMERO subir al inicio de la sección y recién ahí ocultar los proyectos.
  // Si se ocultan antes, la página se acorta de golpe con el visitante más abajo
  // y el navegador lo deja en el footer (pasaba en el celular).
  scrollToProjectsThen(() => {
    isPortfolioCollapsed = true;
    renderProjects(false);
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    filterButtons.forEach((other) => other.setAttribute("aria-pressed", String(other === button)));
    const wasCollapsed = isPortfolioCollapsed;
    if (currentFilter !== "all") isPortfolioCollapsed = false; // un filtro muestra todos sus proyectos
    renderProjects(wasCollapsed && !isPortfolioCollapsed);
  });
});

renderProjects(false);

// ---------------------------------------------------------------
// 4) Año actual en el footer
// ---------------------------------------------------------------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------------------------------------------------------------
// 5) Máquina de escribir del hero: escribe y borra cada título en bucle, con sus llaves < >
// ---------------------------------------------------------------
const TYPEWRITER_WORDS = ["Web Developer", "Web Designer", "E-commerce Builder", "Brand Designer"];
const typewriter = document.getElementById("typewriter");

if (typewriter && !prefersReducedMotion) {
  let wordIndex = 0;
  const withBrackets = (word) => `<${word}>`; // las llaves también se escriben y se borran
  let charIndex = withBrackets(TYPEWRITER_WORDS[0]).length; // empieza con "<Web Developer>" ya escrito
  let isDeleting = true;

  function typeStep() {
    const word = withBrackets(TYPEWRITER_WORDS[wordIndex]);
    charIndex += isDeleting ? -1 : 1;
    typewriter.textContent = word.slice(0, charIndex);

    let wait = isDeleting ? 45 : 90; // borra más rápido de lo que escribe
    if (!isDeleting && charIndex === word.length) {
      wait = 1800; // pausa con la palabra completa
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % TYPEWRITER_WORDS.length;
      wait = 350;
    }
    setTimeout(typeStep, wait);
  }
  setTimeout(typeStep, 2200); // deja ver "<Web Developer>" un momento antes de empezar
}

// ---------------------------------------------------------------
// 5b) Muro de proyectos del hero: las columnas solo se mueven mientras el muro está en pantalla
// ---------------------------------------------------------------
// El movimiento lo hace CSS (.wall-track en css/input.css). Aquí solo se enciende y se apaga
// con la clase .is-playing, para no gastar batería cuando el visitante ya bajó por la página.
// Con "reducir movimiento" nunca se enciende: el muro se queda quieto.

const heroWall = document.getElementById("dashboard");

if (heroWall && !prefersReducedMotion && "IntersectionObserver" in window) {
  new IntersectionObserver(([entry]) => {
    heroWall.classList.toggle("is-playing", entry.isIntersecting);
  }).observe(heroWall);
}

// ---------------------------------------------------------------
// 6) Header de vidrio y botón para volver arriba (ambos dependen del scroll)
// ---------------------------------------------------------------
const siteHeader = document.getElementById("site-header");
const backToTop = document.getElementById("back-to-top");
const backToTopProgress = document.getElementById("back-to-top-progress");
const RING_LENGTH = 131.95; // largo del círculo del anillo (2 × π × 21)
let scrollTicking = false;

function onScroll() {
  const scrollY = window.scrollY;
  siteHeader.classList.toggle("is-scrolled", scrollY > 24);

  // El botón aparece cuando ya se pasó buena parte del hero
  backToTop.classList.toggle("is-visible", scrollY > window.innerHeight * 0.6);
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;
  backToTopProgress.style.strokeDashoffset = String(RING_LENGTH * (1 - progress));
  scrollTicking = false;
}

window.addEventListener(
  "scroll",
  () => {
    // requestAnimationFrame: como máximo un cálculo por cuadro, para que el scroll vaya fluido
    if (!scrollTicking) {
      scrollTicking = true;
      requestAnimationFrame(onScroll);
    }
  },
  { passive: true }
);
onScroll();

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "instant" : "smooth" });
});

// ---------------------------------------------------------------
// 7) How I work: los pasos se iluminan solos, uno tras otro, en bucle.
//    En escritorio, si el visitante pone el mouse en un paso, se queda ahí hasta que se va.
//    En celular no se puede interactuar: el bucle siempre sigue (pedido de Willder).
// ---------------------------------------------------------------
const processSteps = Array.from(document.querySelectorAll(".process-step"));
const processBar = document.getElementById("process-progress-bar");
const STEP_TIME = 1800; // milisegundos en cada paso
const isPhone = window.matchMedia("(max-width: 639px)"); // mismo corte que el CSS
let activeStep = 0;
let processTimer = null;
let processVisible = false;

function setActiveStep(index) {
  activeStep = index;
  processSteps.forEach((step, i) => step.classList.toggle("is-active", i === index));
  processBar.style.width = `${((index + 1) / processSteps.length) * 100}%`;
}

function startProcessLoop() {
  stopProcessLoop();
  if (prefersReducedMotion || !processVisible) return;
  processTimer = setInterval(() => setActiveStep((activeStep + 1) % processSteps.length), STEP_TIME);
}

function stopProcessLoop() {
  clearInterval(processTimer);
  processTimer = null;
}

processSteps.forEach((step, index) => {
  const pauseOnStep = () => {
    if (isPhone.matches) return; // en celular el bucle no se detiene
    stopProcessLoop();
    setActiveStep(index);
  };
  const resumeLoop = () => {
    if (!isPhone.matches) startProcessLoop();
  };
  step.addEventListener("mouseenter", pauseOnStep);
  step.addEventListener("mouseleave", resumeLoop);
  step.addEventListener("focus", pauseOnStep);
  step.addEventListener("blur", resumeLoop);
});

if (processSteps.length) {
  setActiveStep(0);
  // Solo corre mientras la sección está en pantalla (no gasta batería si nadie la ve)
  new IntersectionObserver(
    ([entry]) => {
      processVisible = entry.isIntersecting;
      processVisible ? startProcessLoop() : stopProcessLoop();
    },
    { threshold: 0.3 }
  ).observe(document.getElementById("process-steps"));
}

// ---------------------------------------------------------------
// 8) Animaciones con GSAP (si cargó y si el usuario no pidió menos movimiento)
// ---------------------------------------------------------------

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

// ---------------------------------------------------------------
// 9) Íconos animados de "Why WillNet?" y "Services" (estilos en css/input.css)
// ---------------------------------------------------------------
// .is-armed  → los trazos empiezan ocultos (sin JavaScript se ven completos)
// .is-drawn  → se dibujan (una vez, al aparecer en pantalla)
// .is-playing → movimiento en bucle solo mientras se ven (no gasta batería fuera de pantalla)

const animIcons = document.querySelectorAll(".anim-icon");

if (animIcons.length && !prefersReducedMotion && "IntersectionObserver" in window) {
  const iconObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) target.classList.add("is-drawn");
        target.classList.toggle("is-playing", isIntersecting);
      });
    },
    { threshold: 0.6 }
  );

  animIcons.forEach((icon) => {
    icon.classList.add("is-armed");
    iconObserver.observe(icon);

    // Al pasar el mouse por la tarjeta, el ícono se vuelve a dibujar
    const card = icon.closest(".reveal-up");
    if (!card) return;
    card.addEventListener("mouseenter", () => {
      icon.classList.remove("is-drawn", "is-playing");
      void icon.getBoundingClientRect(); // obliga al navegador a aplicar el cambio antes de volver a dibujar
      icon.classList.add("is-drawn", "is-playing");
    });
  });
}
