# Imágenes del portafolio

Imágenes de la sección **Proyectos** (y del hero y los destacados). Las webs se capturan **desde el inicio (hero)** de cada sitio, a 1600×900.

| Archivo | Origen |
|---|---|
| `pavlove.jpg` | Captura del inicio de https://pavlovesat.com (16-10-2026). Va también en el hero de la landing |
| `imola.jpg` | Captura del inicio de https://imolagoldjewelry.com (16-10-2026) |
| `mastermind.jpg` | Captura del inicio de https://mastermind-team.com (16-10-2026) |
| `mesas.jpg` | Captura de https://willgo-dev.github.io/assignacion_mesas/ |
| `invitacion-xv.jpg` | Captura del inicio de https://willgo-dev.github.io/invitacion-marcela/ en celular (16-10-2026). El video se sirvió desde `Repositorios/invitacion-marcela/video_hero.mp4` porque el enlace publicado (dopicos.com/video_hero.mp4) da 404 |
| `invitacion-primer-anito.jpg` | `Clientes/Hernan Mateo/Cumple Hernan Mateo.pdf` |
| `mediakit-nicole.jpg` | `Clientes/nicole_diaz/Nicole-Media-KIT-ES.pdf` (portada) |
| `tarjeta-dopicos.jpg` | `Clientes/dopicos/dp_business_card/dp_business_card_ES.pdf` |
| `logo-alibel.png`, `logo-anto.jpg`, `logo-acl.jpg` | Logos en `Clientes/` |
| `simon-game.jpg`, `drum-kit.jpg`, `tindog.jpg`, `dice-game.jpg` | Capturas del inicio en GitHub Pages (willgo-dev, 16-10-2026) |
| `bootstrap-website.jpg`, `aprendiendo-a-programar.jpg`, `login-form.jpg` | Capturas del inicio de `boobstrap-website`, `website-structure` y `login-form` en GitHub Pages (16-10-2026). Venían del portafolio de 2024 |

**Para agregar una imagen:** `.jpg` o `.webp`, 1200–1600 px de ancho y menos de 300 KB. Nombre en minúsculas y con guiones.
Las capturas se pueden rehacer con Chrome en modo headless:
```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --window-size=1600,900 --virtual-time-budget=15000 --screenshot=captura.png https://sitio.com
```

**Animaciones:** si el sitio anima su portada (como Pavlove), Chrome headless con `--virtual-time-budget` la captura a medias. En ese caso se usa un script con `puppeteer-core` que toma varias capturas seguidas y se elige la mejor.
