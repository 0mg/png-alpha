var electron = require("electron");
var window = null;
electron.app.on("ready", function() {
  window = new electron.BrowserWindow({
    width: 320,
    height: 240
  });
  window.on("close", function() {
    electron.app.quit();
  });
  window.loadURL(`file://${__dirname}/index.html`);
});
