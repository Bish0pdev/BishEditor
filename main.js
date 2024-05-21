const { app, BrowserWindow } = require('electron')
require('electron-reload')(__dirname); //Allow hot reloads
app.whenReady().then(() => {
    const myWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: { //THIS IS VERY INSECURE!!! DO NOT USE IN PRODUCTION!
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    myWindow.loadFile('index.html');
});