// =====================================================================
// Sistema bilingüe (inglés / español) de la landing de WillNet
// =====================================================================
// Cómo funciona:
// 1. El INGLÉS está escrito directamente en index.html (es el idioma principal desde el
//    2026-10-16, el que ve Google y quien no tiene JavaScript).
// 2. Cada texto traducible tiene un atributo:
//      data-i18n="clave"                  → cambia el texto del elemento
//      data-i18n-attr="atributo:clave"    → cambia un atributo (alt, aria-label, href, content…)
//                                           (varias separadas por coma: "alt:a.b, title:c.d")
// 3. Aquí abajo, en `es`, está el ESPAÑOL de cada clave.
// 4. Al cargar, se guarda el inglés original de cada elemento; así, al volver a EN,
//    se restaura sin tener que escribirlo dos veces.
// 5. El idioma se elige en este orden: ?lang=es en la URL → elección guardada → inglés.
//    (No se usa el idioma del navegador: Willder quiere que todos entren en inglés.)
//
// Para agregar un texto nuevo: escríbelo en inglés en el HTML con data-i18n="seccion.algo"
// y agrega "seccion.algo" aquí en `es` con su español.

const translations = {
  es: {
    // Meta
    "meta.title": "WillNet | Diseño y desarrollo web",
    "meta.description":
      "WillNet: diseño y desarrollo de páginas web, tiendas online, portafolios, invitaciones digitales y logos. West Palm Beach, FL. Español e inglés.",
    "meta.ogDescription": "Páginas web, tiendas online, invitaciones digitales y logos para negocios, marcas y personas.",

    // Navegación
    "nav.label": "Principal",
    "nav.services": "Servicios",
    "nav.projects": "Proyectos",
    "nav.process": "Proceso",
    "nav.about": "Sobre mí",
    "nav.faq": "Preguntas",
    "nav.cta": "Cotiza tu proyecto",
    "nav.menu": "Abrir menú",
    "nav.backToTop": "Volver arriba",

    // Hero
    "hero.title1": "Hola, soy Will",
    "hero.roles": "Desarrollador web, diseñador web, creador de tiendas online y diseñador de marca",
    "hero.title2": "Creo tu presencia web",
    "hero.cta": "Cotiza tu proyecto",
    "hero.secondary": "Ver proyectos",
    "hero.imageAlt": "Collage de webs y proyectos hechos por WillNet",

    // Clientes
    "tech.title": "Tecnologías con las que trabajo",
    "tech.label": "Tecnologías",

    // Por qué WillNet
    "why.title": "¿Por qué WillNet?",
    "why.1.title": "Diseño para tu marca",
    "why.1.text": "Colores, textos y estructura pensados para tu negocio y para tus clientes.",
    "why.2.title": "Trato directo y bilingüe",
    "why.2.text": "Hablas directamente conmigo, en español o en inglés, desde la idea hasta el lanzamiento.",
    "why.3.title": "Lista para vender",
    "why.3.text": "Rápida, adaptada a celulares y conectada a WhatsApp, formularios, pagos o citas.",

    // Servicios
    "services.title": "Servicios",
    "services.subtitle": "Desarrollo y diseño web para negocios, marcas, creadores y eventos.",
    "services.1.title": "Tiendas y e-commerce",
    "services.1.text": "Tiendas online con catálogo, carrito, pagos con tarjeta y gestión de pedidos.",
    "services.2.title": "Webs para empresas y negocios",
    "services.2.text": "Sitios y landing pages que presentan tu negocio y convierten visitas en clientes.",
    "services.3.title": "Portafolios y webs personales",
    "services.3.text": "Tu trabajo y tu historia en una web profesional que te ayude a destacar.",
    "services.4.title": "Influencers y creadores",
    "services.4.text": "Media kits, páginas de enlaces y webs para mostrar tus números y conseguir marcas.",
    "services.5.title": "Invitaciones y eventos",
    "services.5.text": "Invitaciones web para bodas, cumpleaños, XV años y fiestas, con confirmación de asistencia, QR y mesas.",
    "services.6.title": "Logos y tarjetas de presentación",
    "services.6.text": "Identidad visual para marcas, empresas y negocios: logo, tarjetas y piezas para redes.",

    // Destacados
    "feature1.title": "Tiendas online que venden por ti",
    "feature1.1.title": "Pagos seguros",
    "feature1.1.text": "Cobra con tarjeta y otros métodos directamente desde tu web.",
    "feature1.2.title": "Fácil de administrar",
    "feature1.2.text": "Agrega productos, precios y fotos tú mismo desde un panel sencillo.",
    "feature1.imageAlt": "Tienda online de Pavlove (con Dopicos)",
    "feature2.title": "Webs que reflejan tu marca",
    "feature2.1.title": "Diseño a tu medida",
    "feature2.1.text": "Colores, fotos y estilo que hacen ver tu negocio profesional y confiable.",
    "feature2.2.title": "Catálogo organizado",
    "feature2.2.text": "Tus productos o servicios por categorías, fáciles de recorrer desde cualquier celular.",
    "feature2.imageAlt": "Web de Imola Gold Jewelry",
    "feature3.title": "Landing pages que consiguen clientes",
    "feature3.1.title": "Citas y formularios",
    "feature3.1.text": "Tus clientes agendan una cita o te escriben sin salir de la página.",
    "feature3.2.title": "Listas para tus campañas",
    "feature3.2.text": "Bilingües y preparadas para medir resultados de tus anuncios (Meta Pixel).",
    "feature3.imageAlt": "Landing page de Mastermind Hierarchy",

    // Proyectos
    "projects.title": "Proyectos ✨",
    "projects.subtitle": "Webs, invitaciones y diseños para clientes reales, más proyectos de práctica en GitHub.",
    "projects.filterLabel": "Filtrar proyectos",
    "projects.filter.all": "Todos",
    "projects.filter.web": "Webs",
    "projects.filter.events": "Eventos",
    "projects.filter.design": "Diseño",
    "projects.view": "Ver proyecto",
    "projects.play": "Probar",
    "projects.showAll": "Ver los",
    "projects.projectsWord": "proyectos",
    "projects.showLess": "Ver menos proyectos",
    "projects.moreHint": "Tiendas online, invitaciones, logos y proyectos de práctica",
    "projects.github": "Ver todo en GitHub",
    "projects.tag.store": "Tienda online",
    "projects.tag.dopicos": "Con Dopicos",
    "projects.tag.invitation": "Invitación web",
    "projects.tag.webapp": "App web",
    "projects.tag.digitalInvite": "Invitación digital",
    "projects.tag.card": "Tarjeta de presentación",
    "projects.tag.game": "Juego web",
    "projects.tag.website": "Sitio web",
    "projects.tag.form": "Formulario",
    "projects.pavlove":
      "Tienda de pavlovas artesanales en San Antonio, Texas: productos personalizables, pagos y políticas. WordPress + WooCommerce.",
    "projects.imola":
      "Tienda de joyería en oro de 18k en West Palm Beach: catálogo por categorías, carrito y pagos. WordPress + WooCommerce.",
    "projects.mastermind":
      "Landing bilingüe para una agencia de seguros en Doral, FL: videos, citas con Calendly, formularios y Meta Pixel. HTML, Tailwind y JavaScript.",
    "projects.xv.title": "Invitación de XV años",
    "projects.xv": "Invitación web con video, música, cuenta regresiva, confirmación por QR y pases digitales para cada familia.",
    "projects.tables.title": "Buscador de mesas",
    "projects.tables": "Cada invitado escanea un QR, escribe su nombre y encuentra su mesa al instante. HTML, CSS y JavaScript.",
    "projects.birthday.title": "Invitación de primer cumpleaños",
    "projects.birthday": "Invitación temática de carreras con pase personalizado para cada familia.",
    "projects.mediakit.title": "Media kit de Nicole Díaz",
    "projects.mediakit": "Media kit bilingüe para una influencer con millones de seguidores: audiencia, métricas y propuesta para marcas.",
    "projects.card.title": "Tarjeta de Dopicos",
    "projects.card": "Tarjeta bilingüe con QR e íconos de cada servicio para una agencia de software.",
    "projects.alibel.title": "Logo de Alibel Parra Insurance",
    "projects.alibel": "Identidad para una agente de seguros de salud, en versiones en español e inglés.",
    "projects.anto.title": "Logo de Anto Perfumes",
    "projects.anto": "Logo elegante para una marca de perfumes.",
    "projects.acl.title": "Logo de Ale Creative Lab",
    "projects.acl": "Identidad con ilustración propia para una creadora de contenido y agencia de marketing.",
    "projects.simon": "El clásico juego de memoria Simon. JavaScript y jQuery.",
    "projects.drum": "Batería que suena con el teclado, el mouse o el dedo. JavaScript.",
    "projects.tindog": "Landing de una app ficticia para perros, hecha con Bootstrap.",
    "projects.dice": "Juego de dados para dos jugadores que se lanza al recargar la página. JavaScript.",
    "projects.movewithjoy": "Sitio de ejemplo para una empresa de mudanzas, adaptable a celulares y hecho con Bootstrap.",
    "projects.firstsite": "Mi primera web: una página en español sobre aprender a programar, con HTML y CSS adaptable.",
    "projects.login": "Formulario de inicio de sesión con efecto de vidrio y botón para ver la contraseña. HTML, CSS y JavaScript.",

    // Proceso
    "process.title": "Cómo trabajo",
    "process.1.title": "Conversamos",
    "process.1.text": "Me cuentas tu idea por WhatsApp, mensaje, llamada o el formulario.",
    "process.2.title": "Cotización",
    "process.2.text": "Recibes una propuesta con lo que incluye, el precio y la fecha de entrega.",
    "process.3.title": "Diseño y desarrollo",
    "process.3.text": "Construyo tu proyecto y lo revisas antes de publicarlo.",
    "process.4.title": "Lanzamiento",
    "process.4.text": "Lo publicamos en tu dominio y te enseño a usarlo.",
    "process.note": "Cada proyecto es diferente, por eso todo va por cotización, sin compromiso.",
    "process.cta": "Pide tu cotización",

    // Sobre mí
    "about.title": "Sobre mí",
    "about.p1":
      "Soy Willder Gómez, desarrollador web en West Palm Beach, Florida. Ayudo a negocios, marcas y personas a tener una presencia profesional en internet: desde tiendas online hasta invitaciones para eventos.",
    "about.p2":
      "Me encargo de todo el proceso, del diseño a la publicación, para que tú solo te preocupes por tu negocio. Trabajo en español e inglés.",
    "about.skillsTitle": "Habilidades",
    "about.skills.web": "Web",
    "about.skills.design": "Diseño y marca",
    "about.skills.personal": "Personales",
    "about.skill.responsive": "Diseño responsive",
    "about.skill.seo": "SEO básico",
    "about.skill.performance": "Velocidad y rendimiento",
    "about.skill.hosting": "Dominios y hosting",
    "about.skill.payments": "Pagos online",
    "about.skill.maintenance": "Mantenimiento web",
    "about.skill.uiux": "Diseño UI/UX",
    "about.skill.branding": "Logos y branding",
    "about.skill.print": "Tarjetas e invitaciones",
    "about.skill.bilingual": "Bilingüe (EN/ES)",
    "about.skill.service": "Atención al cliente",
    "about.skill.pm": "Gestión de proyectos",
    "about.skill.learning": "Aprendizaje continuo",
    "about.eduTitle": "Formación",
    "about.edu.1": "Bootcamp de Desarrollo Web Full-Stack · Udemy (en curso)",
    "about.edu.2": "Programación Básica, JavaScript Básico e Introducción al Backend · Platzi (2024)",
    "about.edu.3": "Fundamentos de HTML · SoloLearn",

    // FAQ
    "faq.title": "Preguntas frecuentes",
    "faq.1.q": "¿Cuánto cuesta una página web?",
    "faq.1.a":
      "Depende de lo que necesites: cantidad de páginas, funciones y contenido. Cuéntame tu idea y te envío una cotización sin compromiso.",
    "faq.2.q": "¿Cuánto tiempo tarda?",
    "faq.2.a":
      "Depende del proyecto y de qué tan listo esté tu contenido (textos, fotos y logo). En la cotización te doy una fecha de entrega.",
    "faq.3.q": "¿Me ayudas con el dominio y el hosting?",
    "faq.3.a": "Sí. Te asesoro para elegirlos y dejo tu web publicada y funcionando en tu dominio.",
    "faq.4.q": "¿Puedo pedir cambios después?",
    "faq.4.a": "Sí. Antes de publicar revisamos todo juntos, y después puedo encargarme del mantenimiento y las actualizaciones.",
    "faq.4.support": "¿Ya eres cliente? Escribe a",
    "faq.5.q": "¿Trabajas con clientes fuera de Florida?",
    "faq.5.a": "Sí. Trabajo a distancia con clientes de todo Estados Unidos y Latinoamérica, en español o en inglés.",
    "faq.more": "¿Tienes más preguntas?",
    "faq.cta": "Escríbeme",

    // Contacto
    "contact.title": "Hablemos de tu proyecto",
    "contact.subtitle": "Elige cómo prefieres contactarme o déjame un mensaje con el formulario.",
    "contact.whatsappHref": "https://wa.me/17865575568?text=Hola%20WillNet%2C%20quiero%20cotizar%20un%20proyecto.",
    "contact.smsHref": "sms:+17865575568?&body=Hola%20WillNet%2C%20quiero%20cotizar%20un%20proyecto.",
    "contact.sms": "Mensaje (SMS)",
    "contact.call": "Llamada",
    "contact.email": "Correo",

    // Formulario
    "form.name": "Nombre",
    "form.email": "Correo electrónico",
    "form.phone": "Teléfono (opcional)",
    "form.service": "¿Qué necesitas?",
    "form.opt.store": "Tienda / e-commerce",
    "form.opt.business": "Web para negocio",
    "form.opt.portfolio": "Portafolio / web personal",
    "form.opt.influencer": "Influencer / creador",
    "form.opt.event": "Invitación / evento",
    "form.opt.logo": "Logo / tarjetas",
    "form.opt.other": "Otro",
    "form.message": "Cuéntame sobre tu proyecto",
    "form.submit": "Enviar mensaje",
    "form.invalid": "Completa tu nombre, un correo válido y tu mensaje.",
    "form.sending": "Enviando…",
    "form.success": "¡Gracias! Recibí tu mensaje y te responderé pronto.",
    "form.error": "No se pudo enviar. Escríbeme por WhatsApp o al correo.",
    "form.mailto": "Se abrirá tu app de correo con el mensaje listo para enviar.",

    // Footer
    "footer.remote": "Atención remota en EE. UU. y Latinoamérica",
    "footer.info": "Información general",
    "footer.support": "Soporte a clientes",
    "footer.follow": "Sígueme",
    "footer.services": "Servicios",
    "footer.explore": "Explora",
    "footer.contact": "Contacto",
    "footer.rights": "Todos los derechos reservados",
  },
};

const SUPPORTED_LANGS = ["en", "es"];
const DEFAULT_LANG = "en";
const STORAGE_KEY = "willnet-lang";

// Inglés original de cada elemento (se guarda una sola vez al cargar)
const originalTexts = new Map();
const originalAttrs = new Map();

function parseAttrList(value) {
  // "alt:hero.imageAlt, aria-label:nav.menu" → [["alt","hero.imageAlt"], ["aria-label","nav.menu"]]
  return value.split(",").map((pair) => pair.trim().split(":").map((part) => part.trim()));
}

function saveOriginals() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    originalTexts.set(element, element.textContent);
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    const values = {};
    parseAttrList(element.dataset.i18nAttr).forEach(([attr]) => {
      values[attr] = element.getAttribute(attr);
    });
    originalAttrs.set(element, values);
  });
}

function translate(key, lang) {
  const text = translations[lang] && translations[lang][key];
  if (text === undefined) {
    console.warn(`[i18n] Falta la traducción "${key}" en "${lang}"`);
  }
  return text;
}

function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;

  // Textos
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const text = lang === DEFAULT_LANG ? originalTexts.get(element) : translate(element.dataset.i18n, lang);
    if (text !== undefined) element.textContent = text;
  });

  // Atributos
  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    parseAttrList(element.dataset.i18nAttr).forEach(([attr, key]) => {
      const value = lang === DEFAULT_LANG ? originalAttrs.get(element)[attr] : translate(key, lang);
      if (value !== undefined && value !== null) element.setAttribute(attr, value);
    });
  });

  // Idioma de la página (lectores de pantalla y Google)
  document.documentElement.lang = lang;

  // Botones EN / ES
  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.langSwitch === lang));
  });

  // Recordar la elección y reflejarla en la URL (?lang=es se puede compartir)
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (error) {
    // Navegación privada: no pasa nada si no se puede guardar
  }
  const url = new URL(window.location.href);
  if (lang === DEFAULT_LANG) url.searchParams.delete("lang");
  else url.searchParams.set("lang", lang);
  history.replaceState(null, "", url);

  // Avisar a los demás scripts (por ejemplo, para recalcular animaciones)
  document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
}

function getInitialLanguage() {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (SUPPORTED_LANGS.includes(fromUrl)) return fromUrl;

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED_LANGS.includes(saved)) return saved;
  } catch (error) {
    // Sin acceso a localStorage
  }

  // Sin elección previa: siempre inglés (no se mira el idioma del navegador)
  return DEFAULT_LANG;
}

// Arranque
saveOriginals();
setLanguage(getInitialLanguage());

document.querySelectorAll("[data-lang-switch]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.langSwitch));
});

// Disponible para otros scripts: window.WillNetI18n.getLanguage()
window.WillNetI18n = {
  setLanguage,
  getLanguage: () => document.documentElement.lang,
};
