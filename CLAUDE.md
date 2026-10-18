# Proyecto: landing de WillNet

Landing **bilingüe (ES/EN)** que vende los servicios de diseño y desarrollo web de **WillNet** (Willder Gómez, West Palm Beach, FL). La marca se llamaba **Willdev** hasta el 2026-10-16.
Contexto general de la marca, los clientes y la formación: `../../../CONTEXTO_WILLNET.md`. Guía de marca: `../../README.md`.

## Decisiones de Willder
| Tema | Decisión |
|---|---|
| Nombre | **WillNet** en los textos y **WILLNET** en mayúsculas junto a la W del menú (2026-10-16). No se explica su significado en la web. El logo (la W) y los colores no cambian por ahora |
| Usuario de GitHub | **willnet-dev** desde el 2026-10-17 (antes willgo-dev y, en 2024, willgomez22). GitHub redirige los enlaces viejos a repos mientras nadie registre `willgo-dev`, pero **no** redirige el perfil ni GitHub Pages (`willgo-dev.github.io` ya no funciona). Willder decidió no reservar el nombre viejo |
| Lo que NO cambia de nombre | El correo **willdevgo@gmail.com**, el proyecto (Worker) de Cloudflare **`willdev-landing`** y el logotipo PNG `willdev-logotipo-*` (la imagen todavía dice WILLDEV) |
| Idioma | **Bilingüe**, con el **inglés como idioma principal** desde el 2026-10-16 y sin detección del navegador (ver "Sistema bilingüe" abajo) |
| Marca | La landing es **solo de WillNet**. En el portafolio también entran los proyectos y clientes de **Dopicos** (con la etiqueta "Con Dopicos") |
| Precios | **No se muestran.** Todo va por cotización |
| Contacto | **WhatsApp, SMS, llamada, correo y formulario.** Más adelante: agendar videollamadas |
| Dominio | **https://willnet.dev** (registrado en Cloudflare el 2026-10-16). Va en `canonical`, `hreflang`, `og:url` y `og:image`. También responden `www.willnet.dev` y la URL vieja `willdev-landing.willdev-landing.workers.dev` (se deja activa para no romper enlaces) |
| Diseño | **Plantilla `../_plantilla-portfolio_landing`** y su estilo (negro, textos en degradado gris, tipografía Ubuntu, GSAP), pero con **azul `#2563eb` en lugar del morado** |
| Carrusel | **Tecnologías** que usa Willder (no logos de clientes): frontend, backend, CMS/e-commerce y herramientas, **incluido Claude Code**. Sacadas de su CV, cursos y proyectos |
| Capturas | Las webs del portafolio se muestran **desde su inicio (hero)** |
| Imagen del hero | **"Muro de proyectos"** (2026-10-16): collage en perspectiva de las capturas del portafolio con la W y WILLNET al centro, en `assets/img/hero/willnet-proyectos.jpg` (1920×1080). Willder eligió esta entre 6 propuestas; la fuente HTML está en `docs/hero-muro.html` (se convierte en imagen con puppeteer). La misma imagen recortada es la **imagen OG** (`assets/img/og/willnet-og.jpg`, 1200×630). A Willder no le gustó la captura sola de Pavlove en el hero |
| Destacados | 3 secciones que alternan imagen y lista: **1 · Pavlove** ("Tiendas online que venden por ti", `feature1`), **2 · Imola** ("Webs que reflejan tu marca", `feature2`) y **3 · Mastermind** ("Landing pages que consiguen clientes", `feature3`) |
| Correos | Todo llega a la bandeja de **will.gomez@willnet.dev** (alias de Google Workspace) y Willder responde siempre desde will.gomez@. En la landing: **contact@willnet.dev** en Contacto, el botón de correo y el formulario (Web3Forms entrega a contact@); **info@willnet.dev** y **support@willnet.dev** en el footer; **support@** también en la pregunta frecuente de cambios/soporte. En GitHub: contact@. En LinkedIn: will.gomez@ |
| Portafolio | Solo proyectos que estén en local (`Clientes/`) o en su GitHub (`willnet-dev`). Del portafolio de 2024 se trajeron Move With Joy, Aprendiendo a Programar, Login Form y la **formación** (en "Sobre mí"); **no** sus fotos (Willder mandará fotos nuevas). **No usar** airseausa.com, cejasperfectasmedellin.com, jcpconsult.net ni tendaigroup.com |
| Foto | Va a poner una foto suya más adelante. Hoy hay un espacio listo en "Sobre mí" y un texto genérico |
| Redes | LinkedIn **https://www.linkedin.com/in/will-net/** (Willder cambió la URL; la vieja `willgo-dev` redirige por ahora) y GitHub **https://github.com/willnet-dev** |
| Servicios | Tiendas y e-commerce, webs para empresas y negocios, portafolios y webs personales, influencers, invitaciones y eventos (bodas, cumpleaños, XV, fiestas), logos y tarjetas de presentación |

## Stack (fase actual)
- **HTML + JavaScript vanilla + Tailwind CSS v4** (CLI).
- Librerías externas por CDN que vienen de la plantilla: **GSAP 3.12 + ScrollTrigger** (animaciones) y **Bootstrap Icons 1.11** (íconos). **No agregar** frameworks ni otras librerías sin consultarlo.
- Se edita `css/input.css`. **`css/styles.css` es GENERADO** (`npm run dev` / `npm run build`).
- Tailwind v4 se configura en CSS (`@theme`): **no hay `tailwind.config.js`**. Clases **sin prefijo** (la plantilla usaba `tw-`).
- El menú de escritorio aparece desde **1280 px** (`xl`). Por debajo es un panel lateral (`RESPONSIVE_WIDTH` en `js/main.js` y la media query de `css/input.css`).
- Willder es junior: **explicar el porqué de cada cambio** y dejar el código simple y comentado en español.

## Sistema bilingüe (`js/i18n.js`)
- Desde el 2026-10-16 el **inglés** es el idioma principal: está escrito en `index.html` (el que indexa Google y el que se ve sin JavaScript). `<html lang="en">`.
- Cada texto lleva `data-i18n="clave"`. Los atributos usan `data-i18n-attr="alt:clave, aria-label:clave2"`.
- El **español** está en el objeto `translations.es` de `js/i18n.js`. Al cargar, el script guarda el inglés original de cada elemento y lo restaura al volver a EN, así que el inglés no se escribe dos veces.
- Idioma inicial: `?lang=es` en la URL → elección guardada (`localStorage`, clave `willnet-lang`) → **inglés**. **No** se usa el idioma del navegador (decisión de Willder: todos entran en inglés). Botones en orden **EN · ES**.
- `hreflang`: `en` y `x-default` → `https://willnet.dev/`; `es` → `https://willnet.dev/?lang=es`.
- Al cambiar de idioma también se actualizan `<html lang>`, el `<title>`, la meta descripción, Open Graph y los enlaces de WhatsApp/SMS con su mensaje.
- Los `value` del selector de servicio del formulario siguen en español a propósito: es lo que le llega a Willder en el correo.
- **Regla:** todo texto nuevo se escribe en inglés en el HTML con su `data-i18n` y su clave en `es`. Para comprobar que no falte ninguna, hay un script en la sección "Verificación".
- La inversión se hizo con un script que reemplazó los 172 textos y 22 atributos del HTML por su inglés y guardó el español en `translations.es` (160 claves).
- Futuro: cuando se use un framework (Astro/Next), migrar a rutas `/en` y `/es` reales, que es mejor para el SEO.

## Carrusel de tecnologías
- Íconos SVG **en blanco** en `assets/img/tecnologias/` (de **Simple Icons**, CC0, y **Devicon**, MIT: VS Code, Canva y WooCommerce). ChatGPT usa el ícono de OpenAI de Simple Icons 11 (las versiones nuevas lo quitaron).
- Para agregar una tecnología: copiar su SVG a esa carpeta con `fill="#ffffff"` y añadir un `<li class="carousel-img tech-item">` en **las dos listas** del HTML (la segunda lleva `aria-hidden` y existe para que el movimiento sea continuo).
- Estilos en `css/input.css` (`.carousel`, `.tech-item`). Velocidad: `animation: scroll 60s`.
- Los logos de clientes que antes estaban en el carrusel quedaron guardados en `docs/logos-clientes/` (no se publican).

## Comandos
```bash
npm install        # solo la primera vez
npm run dev        # Tailwind en modo watch (dejar abierto mientras se trabaja)
npm run serve      # servidor local en http://localhost:5500
npm run build      # CSS minificado para publicar
npm run deploy     # build + copia a dist/ + sube a Cloudflare (wrangler deploy)
```

## Publicación (Cloudflare Workers, archivos estáticos)
- Config en `wrangler.jsonc` (proyecto `willdev-landing`; **no renombrarlo**: cambiaría la URL workers.dev y habría que reconectar el dominio). El dominio se conecta en `routes` con `custom_domain: true` para `willnet.dev` y `www.willnet.dev`; `workers_dev: true` mantiene la URL vieja. Se publica **solo `dist/`**, que genera `npm run dist` con `index.html`, `css/styles.css`, `js/` y `assets/` (sin `.md` ni `.DS_Store`). `dist/` es GENERADO: no editarlo.
- La sesión de Cloudflare la guarda wrangler en el equipo (`npx wrangler login`); no hay claves en el proyecto.
- Para volver a una versión anterior: `npx wrangler rollback`.
- Después de publicar, Cloudflare puede tardar un minuto en mostrar la versión nueva (caché).

## GitHub
- Repo **público**: https://github.com/willnet-dev/willnet-landing (rama `main`). `.gitignore` deja fuera `node_modules/`, `dist/`, `.wrangler/` y `.env`.
- `css/styles.css` sí se sube (así el repo funciona sin compilar).
- Correo de los commits (`git config --global user.email`): **will.gomez@willnet.dev** desde el 2026-10-17. Es el correo principal de la cuenta de GitHub; willdevgo@gmail.com sigue agregado para que los commits viejos sigan contando como suyos y como respaldo para recuperar la cuenta. **No borrarlo.**
- La clave de Web3Forms de `js/contact.js` es **pública por diseño** (Web3Forms la pone en el HTML), por eso puede ir en el repo.
- Flujo: editar → `npm run deploy` → `git add -A && git commit -m "..." && git push`.
- LinkedIn: el proyecto "Portfolio Website" enlaza a willnet.dev y a este repo (2026-10-17).
- Es el **proyecto principal del perfil** de GitHub: lo presenta el README de perfil (repo `willnet-dev/willnet-dev`, en `../../../Repositorios/willnet-dev/`; tiene que llamarse igual que el usuario) y tiene la web como *homepage* y temas. Reemplaza al portafolio de 2024 (`personal-portfolio`), que está **archivado** y cuya página redirige aquí.

Vista previa en Claude Code: el panel del navegador no puede lanzar el servidor dentro de `Documents` (permisos de macOS). Hay que levantar `python3 -m http.server 5500` desde Bash en segundo plano y abrir `http://localhost:5500/`. Las animaciones de GSAP tardan en arrancar si el panel no tiene el foco: no es un error.

## Estructura
```
index.html               ← página (secciones: inicio, tecnologías, por qué, servicios, 2 destacados, proyectos, proceso, sobre-mi, faq, contacto, footer)
css/input.css            ← tokens (primary azul, secondary, outline, Ubuntu) + componentes de la plantilla
css/styles.css           ← GENERADO
wrangler.jsonc           ← configuración de Cloudflare
dist/                    ← GENERADO por npm run dist (lo que se publica)
js/i18n.js               ← sistema bilingüe y traducciones al inglés
js/main.js               ← menú móvil, acordeón FAQ, filtros del portafolio, año y animaciones GSAP
js/contact.js            ← formulario: envía con Web3Forms (si se quita la clave, abre el correo con mailto)
assets/logo/             ← isotipo SVG de la W (willnet-isotipo-blanco/negro.svg)
assets/favicon/          ← favicon.svg, 32, apple-touch (180) y 512
assets/img/tecnologias/  ← íconos blancos del carrusel
assets/img/portafolio/   ← capturas y diseños del portafolio (ver su README)
assets/img/hero/         ← imagen del hero (Muro de proyectos)
assets/img/og/           ← imagen para compartir en redes (1200×630)
docs/contenido.md        ← brief de contenido y pendientes
docs/logos-clientes/     ← logos de clientes del carrusel viejo (no se publican)
docs/hero-muro.html      ← fuente de la imagen del hero (no se publica)
```

## Pendientes
1. **Fotos** de Willder: él las va a mandar. Van en "Sobre mí" (hay un comentario en el HTML donde va). No usar las del portafolio de 2024.
2. Opcional: redirigir `www.willnet.dev` → `willnet.dev` con una *Redirect Rule* en el panel de Cloudflare (hoy las dos sirven la misma página y el `canonical` apunta a `willnet.dev`, que es suficiente para Google). El correo `@willnet.dev` está en **Google Workspace** (MX, SPF, DKIM y DMARC en Cloudflare): **no activar Cloudflare Email Routing** y no borrar esos registros DNS. Cuando Willder confirme su dirección, se puede usar en la landing (hoy usa willdevgo@gmail.com).
3. **Logotipo con la palabra WILLNET** (hoy el PNG dice WILLDEV; en la web solo se usa la W + texto HTML, así que no afecta a la landing).
4. ~~LinkedIn: correo will.gomez@willnet.dev~~ **Hecho (2026-10-16, por Willder):** su información de contacto muestra will.gomez@willnet.dev y el sitio willnet.dev.
5. Testimonios de clientes: la sección de la plantilla se quitó hasta tener testimonios reales. **No inventar testimonios.**
6. Agendar videollamadas (fase 2).
7. La invitación de XV (`willnet-dev.github.io/invitacion-marcela`) carga su video desde `dopicos.com/video_hero.mp4`, que da **404** desde el 16-10-2026 o antes: en la web se ve un fondo gris. La captura del portafolio se hizo con el video local.
- Hecho (2026-10-16): inglés como idioma principal, hero "Muro de proyectos" e imagen OG, 3 destacados, correos contact@/info@/support@ (formulario probado: llega a contact@), clave de Web3Forms (probada), carrusel de tecnologías, capturas desde el inicio, cambio a WillNet, repo en GitHub, **dominio willnet.dev** y QR nuevo (`../../03 QR/qr-willnet-dev-*`).

## Verificación de traducciones
```bash
node -e 'const fs=require("fs");const h=fs.readFileSync("index.html","utf8");global.window={};global.document={querySelectorAll:()=>[],documentElement:{},dispatchEvent(){}};const es=eval(fs.readFileSync("js/i18n.js","utf8").split("const SUPPORTED_LANGS")[0]+";translations.es");const k=new Set([...h.matchAll(/data-i18n="([^"]+)"/g)].map(m=>m[1]));for(const m of h.matchAll(/data-i18n-attr="([^"]+)"/g))m[1].split(",").forEach(p=>k.add(p.split(":")[1].trim()));console.log("Faltan:",[...k].filter(x=>!(x in es)))'
```

## Hoja de ruta tecnológica
1. **Fase 1 (ahora):** landing HTML + JS + Tailwind, bilingüe, publicada en Cloudflare y con repo en GitHub. Contacto por WhatsApp, SMS, llamada, correo y formulario (Web3Forms).
2. **Fase 2:** backend propio del formulario con **Node.js + Express + Nodemailer**, y agenda de videollamadas.
3. **Fase 3:** despliegue automático desde GitHub a Cloudflare (el dominio propio ya está).
4. **Fase 4 en adelante:** TypeScript, React o Astro (con rutas `/es` y `/en`), según avance su formación, hasta tener la web completa de WillNet.
