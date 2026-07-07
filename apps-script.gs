/**
 * Festa di Chiara — backend RSVP
 * Riceve le conferme dal sito e le salva in un Google Sheet.
 *
 * COME USARLO (istruzioni complete in README.md):
 *  1. Crea un nuovo Google Sheet.
 *  2. Menu  Estensioni ▸ Apps Script  e incolla questo file.
 *  3. Distribuisci ▸ Nuova distribuzione ▸ tipo "App web":
 *        - Esegui come:  Me stesso
 *        - Chi ha accesso:  Chiunque
 *  4. Copia l'URL /exec e incollalo in index.html (const APPS_SCRIPT_URL).
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('RSVP') || ss.insertSheet('RSVP');

    // Intestazioni alla prima esecuzione
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Data e ora', 'Nome', 'Presenza', 'Intolleranze']);
      sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
    }

    var p = (e && e.parameter) ? e.parameter : {};
    sheet.appendRow([
      new Date(),
      p.nome || '',
      p.presenza || '',
      p.intolleranze || ''
    ]);

    return ContentService.createTextOutput('ok');
  } catch (err) {
    return ContentService.createTextOutput('error: ' + err);
  } finally {
    lock.releaseLock();
  }
}

// Utile per testare l'URL nel browser: apre e mostra "Festa di Chiara RSVP attivo".
function doGet() {
  return ContentService.createTextOutput('Festa di Chiara — RSVP attivo ✅');
}
