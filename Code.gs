function doGet(){
  var tmp = HtmlService.createTemplateFromFile("page");

  var url = "https://docs.google.com/spreadsheets/d/1PhtUZ4kYjRz3Ov48Bc6ZeiueCq1xzfTxFnv826kqOR4/edit#gid=0"
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Data");

  var sheet = SpreadsheetApp.openByUrl(url);
  var data = sheet.getDataRange().getValues();
  tmp.Data = data;
  return tmp.evaluate();
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function post(Name, Title, Body, Category){
  var url = "https://docs.google.com/spreadsheets/d/1PhtUZ4kYjRz3Ov48Bc6ZeiueCq1xzfTxFnv826kqOR4/edit#gid=0"
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Data");
  ws.appendRow([Name, Title, Body, Category]);
}
