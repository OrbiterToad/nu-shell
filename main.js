const {app, BrowserWindow} = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 900,
    height: 800,
    icon: `file://${__dirname}/dist/nu-shell/logo.png`,
    frame: true
  });


  win.loadURL(`file://${__dirname}/dist/nu-shell/index.html`);

  win.on('closed', function () {
    win = null
  })
}

app.on('ready', createWindow);
