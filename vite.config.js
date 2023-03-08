import vue from '@vitejs/plugin-vue';
import path from 'path';

const srcPath = path.resolve(__dirname, 'src', 'renderer');
const constPath = path.resolve(__dirname, 'src', 'main', 'constants');
const constants = require(constPath);

module.exports = {
	server: {
		open: false, // do not open the browser as we use electron
		port: process.env.PORT || constants.DEFAULT_MAIN_PORT,
	},
	root: './src/renderer',
	resolve: { alias: [{ find: '~', replacement: srcPath }] },
	plugins: [vue()],
	optimizeDeps: {
		// exclude path and electron-window-state as we are using the node runtime inside the browser
		// and don't wont vite to complain. If you have any issues importing node packages and vite complains,
		// add them here
		exclude: ['path', 'electron-window-state'],
	},
};
