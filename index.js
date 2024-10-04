const electron = require("electron");
const platform = require("os");
const BrowserWindow = electron.BrowserWindow;
const app = electron.app;

let MainWindow;

function CreateWindow(){
    MainWindow = new Electron.BrowserWindow({
      width: 800,
      height: 900  
    });

    MainWindow.loadURL("index.html");
}


app.whenReady().then(() =>{
    CreateWindow();
    app.on("activate", function() {
        if(BrowserWindow.getAllWindows() == 0){
            CreateWindow();
        }
    });
})


app.on("window-all-closed", function (){
    if(process.platform !== "darwin") {
        app.quit();
    }
});