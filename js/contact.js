// Formulario de contacto de la landing de WillNet.
//
// Fase 1 (ahora): si NO hay clave de Web3Forms, el formulario abre la app de correo del visitante
//                 con el mensaje listo para enviar a willdevgo@gmail.com.
// Fase 1b:        pega aquí tu clave de Web3Forms (gratis en https://web3forms.com, con willdevgo@gmail.com)
//                 y los mensajes te llegarán directo al correo, sin abrir nada.
// Fase 2:         reemplazar Web3Forms por tu propio backend con Node.js + Express + Nodemailer.

const WEB3FORMS_ACCESS_KEY = "f772dd78-9690-4ae3-bc1d-e362e4821bad"; // clave pública de Web3Forms (cuenta willdevgo@gmail.com)
const CONTACT_EMAIL = "willdevgo@gmail.com";

const form = document.getElementById("contact-form");
const statusMessages = form.querySelectorAll(".form-status");

function showStatus(name) {
  statusMessages.forEach((message) => {
    message.classList.toggle("hidden", message.dataset.status !== name);
  });
}

function isValid(data) {
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
  return data.name.trim() !== "" && emailOk && data.message.trim() !== "";
}

// Texto de la etiqueta de un campo, en el idioma que se esté mostrando
function labelFor(fieldName) {
  return form.querySelector(`[name="${fieldName}"]`).closest("label").querySelector("span").textContent;
}

function openMailClient(data) {
  const subject = `WillNet — ${data.service} — ${data.name}`;
  const body = [
    `${labelFor("name")}: ${data.name}`,
    `${labelFor("email")}: ${data.email}`,
    `${labelFor("phone")}: ${data.phone || "-"}`,
    `${labelFor("service")}: ${data.service}`,
    "",
    data.message,
  ].join("\n");
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

async function sendWithWeb3Forms(data) {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `Nuevo mensaje desde la landing de WillNet — ${data.service}`,
      from_name: "Landing WillNet",
      language: document.documentElement.lang,
      ...data,
    }),
  });
  const result = await response.json();
  if (!result.success) throw new Error(result.message || "Web3Forms error");
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  // Si la trampa anti-spam está marcada, es un bot: no se envía nada
  if (formData.get("botcheck")) return;

  const data = {
    name: formData.get("name") || "",
    email: formData.get("email") || "",
    phone: formData.get("phone") || "",
    service: formData.get("service") || "",
    message: formData.get("message") || "",
  };

  if (!isValid(data)) {
    showStatus("invalid");
    return;
  }

  if (!WEB3FORMS_ACCESS_KEY) {
    showStatus("mailto");
    openMailClient(data);
    return;
  }

  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  showStatus("sending");
  try {
    await sendWithWeb3Forms(data);
    form.reset();
    showStatus("success");
  } catch (error) {
    console.error(error);
    showStatus("error");
  } finally {
    submitButton.disabled = false;
  }
});
