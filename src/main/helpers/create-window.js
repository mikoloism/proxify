const { app, screen, BrowserWindow } = require('electron');

const isProd = app.isPackaged;

module.exports = function createWindow(windowName = 'main', options = {}) {
	const winOptions = {
		minWidth: 800,
		minHeight: 600,
		titleBarStyle: 'hidden',
		autoHideMenuBar: true,
		center: true,
		darkTheme: true,
		resizable: false,
		maximizable: false,
		movable: false,
		...options,
		webPreferences: {
			contextIsolation: true,
			devTools: !isProd,
			spellcheck: false,
			nodeIntegration: true,
			...(options.webPreferences || {}),
		},
	};

	let win;

	win = new BrowserWindow({
		...winOptions,
		width: winOptions.minWidth,
		height: winOptions.minHeight,
	});

	// disabled as we now do it explicitly white hiding the splash screen
	// win.once('ready-to-show', () => {
	//   win.show()
	//   win.focus()
	// })

	return win;
};
