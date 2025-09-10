function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
      .setTitle('Mapa Interativo do Brasil')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
}
