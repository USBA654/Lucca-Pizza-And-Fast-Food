// Optional backend configuration. Set this before deployment if you host the Express API.
// Example: window.LUCCA_API_BASE = 'https://your-backend.example.com';
window.LUCCA_API_BASE = window.LUCCA_API_BASE || '';
window.LUCCA_WHATSAPP = '923129016202';

async function luccaSend(endpoint, payload) {
  if (!window.LUCCA_API_BASE) return null;
  try {
    const r = await fetch(window.LUCCA_API_BASE.replace(/\/$/, '') + endpoint, {
      method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(payload)
    });
    if (!r.ok) throw new Error('API request failed');
    return await r.json();
  } catch (e) {
    console.warn('Lucca backend unavailable; local/WhatsApp flow remains active.', e);
    return null;
  }
}

function luccaWhatsApp(text) {
  const url = 'https://wa.me/' + window.LUCCA_WHATSAPP + '?text=' + encodeURIComponent(text);
  window.open(url, '_blank', 'noopener');
}
