// @ts-nocheck

const createWindow = require('./helpers/create-window.js');
const { app } = require('electron');
const contextMenu = require('electron-context-menu');

try {
	require('electron-reloader')(module);
} catch {}

contextMenu({
	showSearchWithGoogle: false,
	showCopyImage: false,
	prepend: (defaultActions, params, browserWindow) => [
		{ label: 'its like magic 💥' },
	],
});

const isDev = !app.isPackaged;

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
	mainWindow = createWindow('main', { show: false, movable: true });
	mainWindow.once('close', () => {
		mainWindow = null;
	});

	// create a new `splash`-Window
	const splash = createWindow('splash', { show: true, movable: false });
	splash.loadURL(`file://${__dirname}/../extra/splashscreen.html`);

	const port = process.env.PORT || 3333;
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
