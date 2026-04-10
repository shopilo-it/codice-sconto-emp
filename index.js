#!/usr/bin/env node
/**
 * Recupero codici sconto EMP da shopilo.it
 * Homepage: https://shopilo.it/negozi/emp-online.it
 */

const SHOPILO_URL = "https://shopilo.it/negozi/emp-online.it";
const STORE_NAME  = "EMP";

async function fetchCoupons(url = SHOPILO_URL) {
  const res = await fetch(url, {
    headers: { "User-Agent": "coupon-fetcher/1.0 (+https://github.com/shopilo-it/codice-sconto-emp)" }
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const html = await res.text();
  const codes = [...html.matchAll(/data-code=["']([^"']+)["']/gi)].map(m => m[1]);
  return codes.map(code => ({ store: STORE_NAME, code, source: SHOPILO_URL }));
}

module.exports = { fetchCoupons, SHOPILO_URL, STORE_NAME };

if (require.main === module) {
  fetchCoupons()
    .then(data => {
      if (data.length) {
        console.log(JSON.stringify(data, null, 2));
        console.log(`\nTotal: ${data.length} codici trovati`);
      } else {
        console.log(`Nessun codice trovato. Lista completa: ${SHOPILO_URL}`);
      }
    })
    .catch(err => console.error("Errore:", err.message));
}
