// This script will include a sidebar for CSV import and column selection.

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('CSV Importer')
    .addItem('Import CSV', 'showSidebar')
    .addToUi();
}

function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Espresso')
    .setWidth(310);
  SpreadsheetApp.getUi().showSidebar(html);
}

function importCSVData(csvData, selectedColumns) {
  try {
    // Parse the CSV data into a 2D array
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Clear the existing content of the sheet if needed
    sheet.clear();

    var csvRows = Utilities.parseCsv(csvData);

    // Filter the columns based on selectedColumns (an array of column indexes)
    var filteredData = csvRows.map(function(row) {
      return row.filter(function(_, index) {
        return selectedColumns.indexOf(index) !== -1;
      });
    });

    // Batch process the filtered data to improve performance for large files
    var batchSize = 500; // Adjust the batch size as needed
    for (var i = 0; i < filteredData.length; i += batchSize) {
      var batchData = filteredData.slice(i, i + batchSize);
      sheet.getRange(sheet.getLastRow() + 1, 1, batchData.length, batchData[0].length).setValues(batchData);
    }

    Logger.log('CSV data imported successfully.');
  } catch (e) {
    Logger.log('Error importing CSV data: ' + e.toString());
  }
}


