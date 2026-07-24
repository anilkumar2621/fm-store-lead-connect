/**
 * ============================================
 * FM STORE-STYLES Lead Connect API
 * Version 1.0
 * ============================================
 */

const SHEET_NAME = "Leads";

/**
 * Main API Entry
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const sheet = getSheet();

    const leadId = generateLeadId(sheet);

    sheet.appendRow([
      leadId,
      new Date(),
      data.type || "",
      data.name || "",
      data.phone || "",
      JSON.stringify(data),
      "New"
    ]);

    return ContentService
      .createTextOutput(
        JSON.stringify({
          success: true,
          leadId: leadId
        })
      )
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {

    return ContentService
      .createTextOutput(
        JSON.stringify({
          success: false,
          error: err.toString()
        })
      )
      .setMimeType(ContentService.MimeType.JSON);

  }
}
/**
 * ============================================
 * Get or Create Sheet
 * ============================================
 */
function getSheet() {

  const ss = SpreadsheetApp.getActiveSpreadsheet();

  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {

    sheet = ss.insertSheet(SHEET_NAME);

    sheet.appendRow([
      "Lead ID",
      "Date",
      "Type",
      "Name",
      "Phone",
      "Data",
      "Status"
    ]);

    sheet.getRange(1,1,1,7).setFontWeight("bold");

  }

  return sheet;

}

/**
 * ============================================
 * Generate Lead ID
 * Example:
 * FM000001
 * ============================================
 */
function generateLeadId(sheet){

  const lastRow = sheet.getLastRow();

  if(lastRow <= 1){

    return "FM000001";

  }

  const lastLead = sheet.getRange(lastRow,1).getValue();

  if(!lastLead){

    return "FM000001";

  }

  const number = parseInt(
    String(lastLead).replace("FM",""),
    10
  );

  return "FM" + String(number + 1).padStart(6,"0");

}

/**
 * ============================================
 * Test Function
 * Run this once from Apps Script
 * ============================================
 */
function testConnection(){

  Logger.log("FM STORE-STYLES API Ready");

}
