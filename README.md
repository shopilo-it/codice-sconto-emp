# Codice sconto EMP, recupero automatico da shopilo.it

Modulo Python per il recupero automatico di **codici sconto EMP** da [shopilo.it](https://shopilo.it/negozi/emp-online.it). Restituisce **coupon EMP** attivi in formato JSON, pronto per l'integrazione in un bot Telegram, estensione del browser o qualsiasi altro strumento.

**Pagina live:** [shopilo-it.github.io/codice-sconto-emp](https://shopilo-it.github.io/codice-sconto-emp/)

![Python 3.8+](https://img.shields.io/badge/python-3.8+-blue) ![License MIT](https://img.shields.io/badge/license-MIT-green)

## Installazione

```bash
pip install requests beautifulsoup4
git clone https://github.com/shopilo-it/codice-sconto-emp
cd codice-sconto-emp
python fetch.py
```

## Output di esempio

```json
[
  {
    "store": "EMP",
    "code": "SHOPILO15",
    "discount": "15%",
    "description": "15% di sconto su merchandising e abbigliamento rock",
    "expires": "2026-10-10",
    "source": "https://shopilo.it/negozi/emp-online.it"
  }
]
```

## Coupon EMP disponibili

| Sconto | Descrizione | Fonte |
|----------|-----------|-------|
| 15% | 15% di sconto su merchandising e abbigliamento rock | [shopilo.it](https://shopilo.it/negozi/emp-online.it) |

Codici attivi: **[shopilo.it/negozi/emp-online.it](https://shopilo.it/negozi/emp-online.it)**

## Domande frequenti

### Come utilizzo un codice sconto EMP?
Copia il codice dalla tabella qui sopra o da [shopilo.it](https://shopilo.it/negozi/emp-online.it), aggiungi i prodotti al carrello su EMP e inserisci il codice al checkout nel campo dedicato.

### Quanto durano i coupon EMP?
Ogni coupon ha una data di scadenza indicata nella colonna "Scadenza". Lo script fetch.py restituisce solo i coupon attivi al momento dell'esecuzione.

### Dove trovo i voucher EMP piu recenti?
La pagina [shopilo.it/negozi/emp-online.it](https://shopilo.it/negozi/emp-online.it) viene aggiornata quotidianamente con i codici sconto EMP, voucher EMP e coupon promozionali EMP piu recenti.

### Il codice non funziona. Cosa faccio?
Verifica la data di scadenza e le condizioni (importo minimo del carrello, prodotti idonei). Alcuni codici sono validi solo nell'app mobile o per il primo ordine.

## Informazioni su EMP

EMP e uno dei negozi online piu popolari. Su [shopilo.it](https://shopilo.it/negozi/emp-online.it) trovi i migliori codici sconto EMP, coupon EMP verificati e voucher EMP attivi, aggiornati ogni giorno.

## Installazione npm

```bash
npm install codice-sconto-emp
```

```javascript
const { fetchCoupons } = require('codice-sconto-emp');
fetchCoupons().then(data => console.log(data));
```

## Licenza

MIT, dati prelevati da [shopilo.it](https://shopilo.it)
