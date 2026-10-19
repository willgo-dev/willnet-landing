# Imágenes del portafolio

Imágenes de la sección **Proyectos** (y del hero y los destacados). Las webs se capturan **desde el inicio (hero)** de cada sitio, a 1600×900.

| Archivo | Origen |
|---|---|
| `pavlove.jpg` / `pavlove-en.jpg` | Captura del inicio de https://pavlovesat.com en español / en inglés (18-10-2026). El sitio está en español y GTranslate lo traduce al inglés con Google (por eso dice "Saint Anthony") |
| `imola.jpg` | Captura del inicio de https://imolagoldjewelry.com (16-10-2026) |
| `mastermind.jpg` / `mastermind-en.jpg` | Captura del inicio de https://mastermind-team.com en español / en inglés (botones ES/EN del sitio, 18-10-2026) |
| `acl.jpg` / `acl-en.jpg` | Captura del inicio de https://alecreativelab.com en español / en inglés (`?lang=en`) (18-10-2026) |
| `mesas.jpg` | Captura de https://willnet-dev.github.io/assignacion_mesas/ |
| `invitacion-xv.jpg` | Captura del inicio de https://willnet-dev.github.io/invitacion-marcela/ en celular (16-10-2026). El video se sirvió desde `Repositorios/invitacion-marcela/video_hero.mp4` porque el enlace publicado (dopicos.com/video_hero.mp4) da 404 |
| `invitacion-primer-anito.jpg` | `Clientes/Hernan Mateo/Cumple Hernan Mateo.pdf` |
| `mediakit-nicole.jpg` | `Clientes/nicole_diaz/Nicole-Media-KIT-ES.pdf` (portada) |
| `tarjeta-dopicos.jpg` | `Clientes/dopicos/dp_business_card/dp_business_card_ES.pdf` |
| `logo-alibel.png`, `logo-anto.jpg`, `logo-acl.jpg` | Logos en `Clientes/` |
| `simon-game.jpg`, `drum-kit.jpg`, `tindog.jpg`, `dice-game.jpg` | Capturas del inicio en GitHub Pages (willgo-dev, 16-10-2026) |
| `bootstrap-website.jpg`, `aprendiendo-a-programar.jpg`, `login-form.jpg` | Capturas del inicio de `boobstrap-website`, `website-structure` y `login-form` en GitHub Pages (16-10-2026). Venían del portafolio de 2024 |

**Capturas por idioma (18-10-2026):** los proyectos que tienen inglés y español (**Pavlove, Mastermind y ACL**) tienen dos capturas: `<nombre>-en.jpg` y `<nombre>-movil-en.jpg` (inglés, van en el HTML porque el inglés es el idioma principal) y `<nombre>.jpg` y `<nombre>-movil.jpg` (español, se ponen al cambiar a ES con `data-i18n-attr="src:img.<nombre>"` y `srcset:img.<nombre>Movil` en `js/i18n.js`). Los que tienen un solo idioma (Imola, invitaciones, buscador de mesas y prácticas de GitHub) usan la misma captura en los dos idiomas.

**Versión móvil:** cada web tiene además `<nombre>-movil.jpg` (captura del inicio a 390 px de ancho, 585×1266). En `index.html` va dentro de un `<picture>` con `<source media="(max-width: 639px)">`, así en el celular se carga la vertical. La invitación de XV ya es vertical y no tiene archivo aparte. Las de Pavlove se rehicieron el 18-10-2026 con `puppeteer-core`, esperando 9 s a que termine la animación del logo y eligiendo el idioma en su menú de GTranslate.

**Para agregar una imagen:** `.jpg` o `.webp`, 1200–1600 px de ancho y menos de 300 KB. Nombre en minúsculas y con guiones.
Las capturas se pueden rehacer con Chrome en modo headless:
```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --window-size=1600,900 --virtual-time-budget=15000 --screenshot=captura.png https://sitio.com
```

**Animaciones:** si el sitio anima su portada (como Pavlove), Chrome headless con `--virtual-time-budget` la captura a medias. En ese caso se usa un script con `puppeteer-core` que toma varias capturas seguidas y se elige la mejor.
