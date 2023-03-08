const { app, BrowserWindow } = require('electron');
const globalConfig = require('../configs/global.config');

const isProd = app.isPackaged;

module.exports = function createWindow(
	windowName = globalConfig.defaultWindowName,
	options = {},
) {
	const winOptions = Object.assign({}, globalConfig.options, options);
	let win = new BrowserWindow(winOptions);

	/** HINT :
	 * disabled as we now do it explicitly white hiding the splash screen
	 * win.once('ready-to-show', () => {
	 * 	win.show()
	 * 	win.focus()
	 * })
	 */

	return win;
};
