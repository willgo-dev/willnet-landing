// =====================================================================
// Sistema bilingüe (español / inglés) de la landing de WillNet
// =====================================================================
// Cómo funciona:
// 1. El ESPAÑOL está escrito directamente en index.html (es el idioma por defecto
//    y el que ve Google o quien no tiene JavaScript).
// 2. Cada texto traducible tiene un atributo:
//      data-i18n="clave"                  → cambia el texto del elemento
//      data-i18n-attr="atributo:clave"    → cambia un atributo (alt, aria-label, href, content…)
//                                           (varias separadas por coma: "alt:a.b, title:c.d")
// 3. Aquí abajo, en `en`, está el INGLÉS de cada clave.
// 4. Al cargar, se guarda el español original de cada elemento; así, al volver a ES,
//    se restaura sin tener que escribirlo dos veces.
// 5. El idioma se elige en este orden: ?lang=en en la URL → elección guardada → idioma del navegador → español.
//
// Para agregar un texto nuevo: ponle data-i18n="seccion.algo" en el HTML y agrega "seccion.algo" aquí en `en`.

const translations = {
  en: {
    // Meta
    "meta.title": "WillNet | Web design & development",
    "meta.description":
      "WillNet: web design and development for websites, online stores, portfolios, digital invitations and logos. West Palm Beach, FL. English and Spanish.",
    "meta.ogDescription": "Websites, online stores, digital invitations and logos for businesses, brands and people.",

    // Navegación
    "nav.label": "Main",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.process": "Process",
    "nav.about": "About me",
    "nav.faq": "FAQ",
    "nav.cta": "Get a quote",
    "nav.menu": "Open menu",

    // Hero
    "hero.title1": "Hi, I'm Willder",
    "hero.title2": "I build your web presence",
    "hero.subtitle":
      "I design and develop websites, online stores, digital invitations and logos for businesses, brands and people. In English and Spanish.",
    "hero.cta": "Get a quote",
    "hero.secondary": "See projects",
    "hero.imageAlt": "Pavlove online store, one of my projects",

    // Clientes
    "tech.title": "Technologies I work with",
    "tech.label": "Technologies",

    // Por qué WillNet
    "why.title": "Why WillNet?",
    "why.1.title": "Design for your brand",
    "why.1.text": "Colors, copy and structure built around your business and your customers.",
    "why.2.title": "Direct, bilingual service",
    "why.2.text": "You talk directly with me, in English or Spanish, from the first idea to launch.",
    "why.3.title": "Ready to sell",
    "why.3.text": "Fast, mobile-friendly and connected to WhatsApp, forms, payments or bookings.",

    // Servicios
    "services.title": "Services",
    "services.subtitle": "Web development and design for businesses, brands, creators and events.",
    "services.1.title": "Online stores & e-commerce",
    "services.1.text": "Online stores with a catalog, cart, card payments and order management.",
    "services.2.title": "Websites for companies & businesses",
    "services.2.text": "Websites and landing pages that present your business and turn visitors into customers.",
    "services.3.title": "Portfolios & personal websites",
    "services.3.text": "Your work and your story on a professional website that helps you stand out.",
    "services.4.title": "Influencers & creators",
    "services.4.text": "Media kits, link pages and websites to show your numbers and land brand deals.",
    "services.5.title": "Invitations & events",
    "services.5.text": "Web invitations for weddings, birthdays, quinceañeras and parties, with RSVP, QR codes and seating.",
    "services.6.title": "Logos & business cards",
    "services.6.text": "Visual identity for brands, companies and businesses: logo, business cards and social media pieces.",

    // Destacados
    "feature1.title": "Online stores that sell for you",
    "feature1.1.title": "Secure payments",
    "feature1.1.text": "Accept cards and other payment methods right on your website.",
    "feature1.2.title": "Easy to manage",
    "feature1.2.text": "Add products, prices and photos yourself from a simple dashboard.",
    "feature1.imageAlt": "Imola Gold Jewelry online store",
    "feature2.title": "Landing pages that bring customers",
    "feature2.1.title": "Bookings & forms",
    "feature2.1.text": "Your customers book an appointment or message you without leaving the page.",
    "feature2.2.title": "Ready for your campaigns",
    "feature2.2.text": "Bilingual and set up to measure your ad results (Meta Pixel).",
    "feature2.imageAlt": "Mastermind Hierarchy landing page",

    // Proyectos
    "projects.title": "Projects ✨",
    "projects.subtitle": "Websites, invitations and designs for real clients, plus practice projects on GitHub.",
    "projects.filterLabel": "Filter projects",
    "projects.filter.all": "All",
    "projects.filter.web": "Websites",
    "projects.filter.events": "Events",
    "projects.filter.design": "Design",
    "projects.view": "View project",
    "projects.play": "Try it",
    "projects.github": "See everything on GitHub",
    "projects.tag.store": "Online store",
    "projects.tag.dopicos": "With Dopicos",
    "projects.tag.invitation": "Web invitation",
    "projects.tag.webapp": "Web app",
    "projects.tag.digitalInvite": "Digital invitation",
    "projects.tag.card": "Business card",
    "projects.tag.game": "Web game",
    "projects.pavlove":
      "Online store for handmade pavlovas in San Antonio, Texas: customizable products, payments and policies. WordPress + WooCommerce.",
    "projects.imola":
      "18k gold jewelry store in West Palm Beach: catalog by category, cart and payments. WordPress + WooCommerce.",
    "projects.mastermind":
      "Bilingual landing page for an insurance agency in Doral, FL: videos, Calendly bookings, forms and Meta Pixel. HTML, Tailwind and JavaScript.",
    "projects.xv.title": "Quinceañera invitation",
    "projects.xv": "Web invitation with video, music, countdown, QR RSVP and digital passes for each family.",
    "projects.tables.title": "Table finder",
    "projects.tables": "Each guest scans a QR code, types their name and finds their table instantly. HTML, CSS and JavaScript.",
    "projects.birthday.title": "First birthday invitation",
    "projects.birthday": "Racing-themed invitation with a personalized pass for each family.",
    "projects.mediakit.title": "Nicole Díaz media kit",
    "projects.mediakit": "Bilingual media kit for an influencer with millions of followers: audience, metrics and brand pitch.",
    "projects.card.title": "Dopicos business card",
    "projects.card": "Bilingual business card with a QR code and an icon for each service, for a software agency.",
    "projects.alibel.title": "Alibel Parra Insurance logo",
    "projects.alibel": "Identity for a health insurance agent, in Spanish and English versions.",
    "projects.anto.title": "Anto Perfumes logo",
    "projects.anto": "Elegant logo for a perfume brand.",
    "projects.acl.title": "Ale Creative Lab logo",
    "projects.acl": "Identity with a custom illustration for a content creator and marketing agency.",
    "projects.simon": "The classic Simon memory game. JavaScript and jQuery.",
    "projects.drum": "A drum kit you play with your keyboard, mouse or finger. JavaScript.",
    "projects.tindog": "Landing page for a fictional dog app, built with Bootstrap.",
    "projects.dice": "Two-player dice game that rolls when you reload the page. JavaScript.",

    // Proceso
    "process.title": "How I work",
    "process.1.title": "Let's talk",
    "process.1.text": "Tell me your idea by WhatsApp, text message, phone call or the form.",
    "process.2.title": "Quote",
    "process.2.text": "You get a proposal with what's included, the price and the delivery date.",
    "process.3.title": "Design & development",
    "process.3.text": "I build your project and you review it before it goes live.",
    "process.4.title": "Launch",
    "process.4.text": "We publish it on your domain and I show you how to use it.",
    "process.note": "Every project is different, so everything is quoted individually, with no commitment.",
    "process.cta": "Request a quote",

    // Sobre mí
    "about.title": "About me",
    "about.p1":
      "I'm Willder Gómez, a web developer in West Palm Beach, Florida. I help businesses, brands and people build a professional online presence, from online stores to event invitations.",
    "about.p2":
      "I handle the whole process, from design to launch, so you can focus on your business. I work in English and Spanish.",
    "about.techLabel": "Technologies",

    // FAQ
    "faq.title": "Frequently asked questions",
    "faq.1.q": "How much does a website cost?",
    "faq.1.a":
      "It depends on what you need: number of pages, features and content. Tell me your idea and I'll send you a free, no-commitment quote.",
    "faq.2.q": "How long does it take?",
    "faq.2.a":
      "It depends on the project and on how ready your content is (copy, photos and logo). You'll get a delivery date with your quote.",
    "faq.3.q": "Can you help me with the domain and hosting?",
    "faq.3.a": "Yes. I'll help you choose them and leave your website live and working on your domain.",
    "faq.4.q": "Can I request changes later?",
    "faq.4.a": "Yes. We review everything together before launch, and afterwards I can take care of maintenance and updates.",
    "faq.5.q": "Do you work with clients outside Florida?",
    "faq.5.a": "Yes. I work remotely with clients across the United States and Latin America, in English or Spanish.",
    "faq.more": "Still have questions?",
    "faq.cta": "Message me",

    // Contacto
    "contact.title": "Let's talk about your project",
    "contact.subtitle": "Choose how you'd like to reach me, or leave me a message with the form.",
    "contact.whatsappHref": "https://wa.me/17865575568?text=Hi%20WillNet%2C%20I%27d%20like%20a%20quote%20for%20a%20project.",
    "contact.smsHref": "sms:+17865575568?&body=Hi%20WillNet%2C%20I%27d%20like%20a%20quote%20for%20a%20project.",
    "contact.sms": "Text (SMS)",
    "contact.call": "Call",
    "contact.email": "Email",

    // Formulario
    "form.name": "Name",
    "form.email": "Email",
    "form.phone": "Phone (optional)",
    "form.service": "What do you need?",
    "form.opt.store": "Store / e-commerce",
    "form.opt.business": "Business website",
    "form.opt.portfolio": "Portfolio / personal website",
    "form.opt.influencer": "Influencer / creator",
    "form.opt.event": "Invitation / event",
    "form.opt.logo": "Logo / business cards",
    "form.opt.other": "Other",
    "form.message": "Tell me about your project",
    "form.submit": "Send message",
    "form.invalid": "Please enter your name, a valid email and your message.",
    "form.sending": "Sending…",
    "form.success": "Thank you! I got your message and will reply soon.",
    "form.error": "The message couldn't be sent. Please reach me on WhatsApp or by email.",
    "form.mailto": "Your email app will open with the message ready to send.",

    // Footer
    "footer.remote": "Remote service across the US and Latin America",
    "footer.follow": "Follow me",
    "footer.services": "Services",
    "footer.explore": "Explore",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved",
  },
};

const SUPPORTED_LANGS = ["es", "en"];
const DEFAULT_LANG = "es";
const STORAGE_KEY = "willnet-lang";

// Español original de cada elemento (se guarda una sola vez al cargar)
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

  // Botones ES / EN
  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.langSwitch === lang));
  });

  // Recordar la elección y reflejarla en la URL (?lang=en se puede compartir)
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

  const browserLang = (navigator.languages || [navigator.language]).find((code) => code);
  if (browserLang && browserLang.toLowerCase().startsWith("en")) return "en";
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
