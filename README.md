# 🎉 Festa di Chiara — 30 anni

Sito-invito one-page per la festa dei 30 anni di Chiara.
**Sabato 19 settembre 2026 · Orto Domingo, Bari · dalle 19:00.**

- **`index.html`** — il sito (HTML/CSS/JS, senza dipendenze da compilare).
- **`apps-script.gs`** — il piccolo backend che salva le conferme (RSVP) in un Google Sheet.

---

## Far funzionare l'RSVP (salvare le conferme)

Di default il form è in **modalità demo**: mostra il "grazie" ma **non salva** nulla.
Per raccogliere davvero le presenze in un Google Sheet, bastano 5 minuti:

1. **Crea un Google Sheet** vuoto (su [sheets.google.com](https://sheets.google.com)). Dagli un nome, es. *"Festa Chiara – RSVP"*.
2. Nel foglio: menu **Estensioni ▸ Apps Script**.
3. Cancella il codice di esempio e **incolla tutto il contenuto di `apps-script.gs`**. Salva (icona floppy).
4. In alto clicca **Distribuisci ▸ Nuova distribuzione**.
   - Ingranaggio ▸ tipo **App web**.
   - **Esegui come:** *Me stesso*.
   - **Chi ha accesso:** *Chiunque*.
   - **Distribuisci** e autorizza (Google chiederà il permesso: è normale, è il tuo script).
5. Copia l'**URL dell'app web** (finisce con `/exec`).
6. Apri **`index.html`**, trova la riga vicino all'inizio dello `<script>`:
   ```js
   const APPS_SCRIPT_URL = "";
   ```
   e incolla l'URL tra le virgolette:
   ```js
   const APPS_SCRIPT_URL = "https://script.google.com/macros/s/XXXX/exec";
   ```
7. Salva, fai commit e push. Da questo momento ogni conferma finisce nel foglio
   (colonne: **Data e ora · Nome · Presenza · Intolleranze**).

> Suggerimento: apri l'URL `/exec` nel browser — se vedi *"RSVP attivo ✅"* il backend risponde.

---

## Pubblicare il sito (GitHub Pages)

Impostazioni della repo ▸ **Pages** ▸ Source: *Deploy from a branch* ▸ Branch: `main` / `root` ▸ Save.
Dopo un minuto il sito sarà online su `https://eliocaiaffa.github.io/festa-chiara-/`.

## Modificare i contenuti

Sono tutti dentro `index.html`, in chiaro: data, luogo, link mappa, link album foto, testi. Cerca la sezione corrispondente (`HERO`, `DETTAGLI`, `RSVP`, `FOTO`) e modifica il testo.
