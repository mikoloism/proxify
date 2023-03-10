// @ts-nocheck

const createWindow = require('./helpers/create-window.js');
const { app } = require('electron');
const mainConfig = require('./configs/main.config.js');
const splashConfig = require('./configs/splash.config.js');
const constants = require('./constants');

try {
	require('electron-reloader')(module);
} catch {}

const isDev = true;

let mainWindow;

function loadVitePage(port) {
	mainWindow.loadURL(`http://localhost:${port}`).catch((err) => {
		console.log('VITE NOT READY, WILL TRY AGAIN IN 200ms');
		setTimeout(() => {
			// do it again as the vite build can take a bit longer the first time
			loadVitePage(port);
		}, 200);
	});
}

function createMainWindow() {
	mainWindow = createWindow(mainConfig.appName, mainConfig.options);
	mainWindow.once('close', () => {
		mainWindow = null;
	});

	// create a new `splash`-Window
	const splash = createWindow(splashConfig.appName, splashConfig.options);
	splash.loadURL(constants.SPLASH_LOAD_URL);

	const port = process.env.PORT || constants.DEFAULT_MAIN_PORT;
	if (isDev) {
		loadVitePage(port);
	} else {
		mainWindow.loadFile(`${__dirname}/../renderer/dist/index.html`);
	}

	// if main window is ready to show, then destroy the splash window and show up the main window
	mainWindow.once('ready-to-show', () => {
		console.log('READY');
		splash.destroy();
		mainWindow.show();
		mainWindow.focus();
		mainWindow.webContents.openDevTools();
	});
}

app.once('ready', createMainWindow);
app.on('activate', () => {
	if (!mainWindow) {
		createMainWindow();
	}
});
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
