var electron = require("electron");
var window = null;
electron.app.on("ready", function() {
  window = new electron.BrowserWindow({
    width: 640,
    height: 480,
    show: false
  });
  window.on("close", function() {
    electron.app.quit();
  });
  window.loadURL(`file://${__dirname}/index.html`);
});
