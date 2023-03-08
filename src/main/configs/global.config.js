module.exports = {
	defaultWindowName: 'main',
	options: {
		minWidth: 500,
		minHeight: 700,
		width: 500,
		height: 700,
		titleBarStyle: 'hidden',
		autoHideMenuBar: true,
		center: true,
		darkTheme: true,
		resizable: false,
		maximizable: false,
		movable: false,
		webPreferences: {
			contextIsolation: true,
			devTools: true,
			spellcheck: false,
			nodeIntegration: true,
		},
	},
};
