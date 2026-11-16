// Datos de contacto, en un solo lugar para todo el sitio.
// WhatsApp en formato internacional, sin "+" ni espacios.
// Para celulares de Argentina: 54 + 9 + código de área + número.
export const WHATSAPP_NUMBER = "5492926462675";
export const CONTACT_EMAIL = "felipeblanco114@gmail.com";
export const GITHUB_URL = "https://github.com/felipeblanco114";
export const LINKEDIN_URL = "https://www.linkedin.com/in/felipe-blanco-muzzolon/";

export const whatsappLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
