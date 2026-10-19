// Genera el HTML del "muro de proyectos" animado del hero y lo escribe en index.html,
// entre los comentarios <!-- MURO:INICIO --> y <!-- MURO:FIN -->.
//
// ¿Por qué un script? El muro tiene 5 columnas y cada proyecto se repite varias veces
// (cada columna lleva su lista dos veces para que el bucle no tenga corte). Escribir
// ~100 enlaces a mano sería fácil de romper; así solo se edita la lista de abajo.
//
// Uso (desde la carpeta de la landing):   node docs/generar-muro.js
//
// Para agregar un proyecto:
// 1. Crear su miniatura en assets/img/hero/muro/ (ver el comando en CLAUDE.md).
// 2. Sumarlo a GRUPO_A o GRUPO_B (los grupos van en columnas alternas, así un
//    proyecto nunca queda al lado de sí mismo).
// 3. Correr este script, y si tiene captura en inglés y español, agregar sus claves
//    img.wall.<nombre> e img.wall.<nombre>Movil en js/i18n.js.

const fs = require("fs");
const path = require("path");

const DIR = "./assets/img/hero/muro/";

// img: nombre de la miniatura (sin .jpg) · href: enlace (sin web → sección del portafolio)
// movil: tiene captura de celular · bilingue: tiene captura en inglés (-en) y en español
// ajuste: "contain" para logos y tarjetas (que no se corten)
const P = {
  pavlove: { href: "https://pavlovesat.com", movil: true, bilingue: true },
  acl: { href: "https://alecreativelab.com", movil: true, bilingue: true },
  imola: { href: "https://imolagoldjewelry.com", movil: true },
  mastermind: { href: "https://mastermind-team.com", movil: true, bilingue: true },
  "invitacion-xv": { href: "https://willnet-dev.github.io/invitacion-marcela/" },
  mesas: { href: "https://willnet-dev.github.io/assignacion_mesas/", movil: true },
  "invitacion-primer-anito": {},
  "mediakit-nicole": {},
  "tarjeta-dopicos": { ajuste: "contain" },
  "logo-alibel": { ajuste: "contain" },
  "logo-anto": { ajuste: "contain" },
  "logo-acl": { ajuste: "contain" },
  "simon-game": { href: "https://willnet-dev.github.io/simon-game/", movil: true },
  "drum-kit": { href: "https://willnet-dev.github.io/drum-kit/", movil: true },
  tindog: { href: "https://willnet-dev.github.io/tindog-project/", movil: true },
  "dice-game": { href: "https://willnet-dev.github.io/dice-game/", movil: true },
  "bootstrap-website": { href: "https://willnet-dev.github.io/boobstrap-website/", movil: true },
  "aprendiendo-a-programar": { href: "https://willnet-dev.github.io/website-structure/", movil: true },
  "login-form": { href: "https://willnet-dev.github.io/login-form/", movil: true },
};

// Columnas 1, 3 y 5 usan el grupo A; columnas 2 y 4, el grupo B (entre los dos están los 19)
const GRUPO_A = ["pavlove", "mastermind", "simon-game", "invitacion-xv", "logo-alibel", "bootstrap-website", "mesas", "tarjeta-dopicos", "dice-game", "aprendiendo-a-programar"];
const GRUPO_B = ["acl", "imola", "drum-kit", "mediakit-nicole", "tindog", "logo-anto", "login-form", "invitacion-primer-anito", "logo-acl"];

// Cada columna: su grupo, desde qué proyecto empieza, cuánto tarda en dar la vuelta
// (segundos, distinto en cada una = efecto de profundidad) y un desfase inicial.
const COLUMNAS = [
  { grupo: GRUPO_A, desde: 3, duracion: 32, desfase: -6 },
  { grupo: GRUPO_B, desde: 0, duracion: 27, desfase: -14 },
  { grupo: GRUPO_A, desde: 0, duracion: 30, desfase: -1 },
  { grupo: GRUPO_B, desde: 4, duracion: 35, desfase: -20 },
  { grupo: GRUPO_A, desde: 6, duracion: 28, desfase: -9 },
];

// Las imágenes no usan loading="lazy": las columnas se mueven, y el navegador creería que las
// capturas de abajo están "fuera de pantalla" y las dejaría en blanco al subir. Como cada
// miniatura pesa ~30 KB y se repite (se descarga una sola vez), se piden todas con
// fetchpriority="low": llegan después de lo importante (textos, estilos) sin frenar la página.
function tile(nombre) {
  const p = P[nombre];
  if (!p) throw new Error(`Proyecto desconocido: ${nombre}`);
  const en = p.bilingue ? "-en" : "";
  const img = `${DIR}${nombre}${en}.jpg`;
  const movil = p.movil ? `${DIR}${nombre}-movil${en}.jpg` : img;
  for (const archivo of [img, movil]) {
    if (!fs.existsSync(path.resolve(archivo))) throw new Error(`Falta la miniatura ${archivo}`);
  }
  const clave = nombre.replace(/-(\w)/g, (_, l) => l.toUpperCase());
  const i18nSource = p.bilingue ? ` data-i18n-attr="srcset:img.wall.${clave}Movil"` : "";
  const i18nImg = p.bilingue ? ` data-i18n-attr="src:img.wall.${clave}"` : "";
  const ajuste = p.ajuste ? ` wall-tile--${p.ajuste}` : "";
  const destino = p.href ? `href="${p.href}" target="_blank" rel="noopener"` : `href="#proyectos"`;
  return (
    `<a class="wall-tile${ajuste}" ${destino} tabindex="-1">` +
    `<picture><source media="(max-width: 639px)" srcset="${movil}"${i18nSource} />` +
    `<img src="${img}"${i18nImg} alt="" fetchpriority="low" decoding="async" /></picture></a>`
  );
}

const columnas = COLUMNAS.map(({ grupo, desde, duracion, desfase }) => {
  const lista = [...grupo.slice(desde), ...grupo.slice(0, desde)];
  // La lista va dos veces: la animación sube exactamente la mitad y vuelve a empezar sin salto
  const tiles = [...lista, ...lista].map(tile).join("\n                    ");
  return (
    `                <div class="wall-col" style="--dur: ${duracion}s; --delay: ${desfase}s">\n` +
    `                  <div class="wall-track">\n                    ${tiles}\n                  </div>\n` +
    `                </div>`
  );
}).join("\n");

const html = fs.readFileSync("index.html", "utf8");
const inicio = "<!-- MURO:INICIO -->";
const fin = "<!-- MURO:FIN -->";
const a = html.indexOf(inicio);
const b = html.indexOf(fin);
if (a === -1 || b === -1 || html.indexOf(inicio, a + 1) !== -1) {
  throw new Error("No encontré una sola pareja de marcas MURO:INICIO / MURO:FIN en index.html");
}
const nuevo = html.slice(0, a + inicio.length) + "\n" + columnas + "\n                " + html.slice(b);
fs.writeFileSync("index.html", nuevo);
console.log(`Muro generado: ${COLUMNAS.length} columnas, ${GRUPO_A.length + GRUPO_B.length} proyectos.`);
