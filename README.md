# willnet-landing

Landing **bilingüe (ES/EN)** de **WillNet**: servicios de diseño y desarrollo web. HTML + JavaScript + Tailwind CSS v4, sobre la plantilla `portfolio_landing` en azul.

- Textos en inglés (idioma principal): `index.html`. Textos en español: `js/i18n.js` (`translations.es`). Para ver la versión en español, abre `http://localhost:5500/?lang=es` o usa el botón **ES**.
- Formulario: `js/contact.js` (envía con Web3Forms a contact@willnet.dev; la clave es pública por diseño).
- Publicada en Cloudflare: **https://willnet.dev** · Código: https://github.com/willgo-dev/willnet-landing

## Requisitos
- Node.js 18 o superior (en esta Mac: v24 con nvm)
- Python 3 (para el servidor local; viene con macOS)

## Cómo trabajar
1. `npm install` (solo la primera vez)
2. En una terminal: `npm run dev` (genera `css/styles.css` y lo actualiza cada vez que guardas)
3. En otra terminal: `npm run serve` y abre http://localhost:5500
4. Edita `index.html`, `css/input.css` y `js/main.js`. **No edites `css/styles.css`.**
5. Para publicar: `npm run deploy` (compila, arma `dist/` y lo sube a Cloudflare)
6. Para guardar en GitHub: `git add -A && git commit -m "mensaje" && git push`

## Notas
- `npm audit` muestra una alerta en `braces` (dependencia del observador de archivos de Tailwind). Solo afecta a la herramienta de desarrollo en tu Mac, no a la web publicada. No hace falta `npm audit fix --force` (bajaría Tailwind de versión).
- La plantilla original de referencia está en `../_plantilla-portfolio_landing/`.
- Instrucciones para Claude y decisiones del proyecto: `CLAUDE.md`. Textos y contenido: `docs/contenido.md`.
