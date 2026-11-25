// Google Apps Script — paste this into Extensions > Apps Script of a Google Sheet
// Then Deploy > New deployment > Web app (Execute as: Me, Who has access: Anyone)
// Copy the Web app URL and put it into:
//   1) index.html  -> window.TW4A_SHEET_ENDPOINT = 'YOUR_URL'
//   2) dashboard.html -> SHEET_URL = 'YOUR_URL'  (or enter at sync time)

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    // ensure header row
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Date', 'Name', 'Email', 'Service', 'Message']);
    }
    const data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      data.date || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.service || '',
      data.message || ''
    ]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Returns all rows as JSON array for dashboard sync
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) {
    return ContentService.createTextOutput(JSON.stringify([]))
      .setMimeType(ContentService.MimeType.JSON);
  }
  const header = values[0].map(h => String(h).trim());
  const rows = values.slice(1).map(r => {
    const obj = {};
    header.forEach((h, i) => { obj[h] = r[i]; });
    // normalize keys for dashboard
    return {
      id: '',
      date: obj['Date'] || obj['date'] || '',
      name: obj['Name'] || obj['name'] || '',
      email: obj['Email'] || obj['email'] || '',
      service: obj['Service'] || obj['service'] || '',
      message: obj['Message'] || obj['message'] || ''
    };
  });
  return ContentService.createTextOutput(JSON.stringify(rows))
    .setMimeType(ContentService.MimeType.JSON);
}
