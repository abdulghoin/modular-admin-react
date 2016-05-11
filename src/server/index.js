// Bootstrap environment
require('babel-register');
require('babel-polyfill');

// External modules
const express = require('express');
const WebpackIsomorphicTools = require('webpack-isomorphic-tools');

// Internal modules
const config = require('./config');
const api = require('./api');
const ui = require('./ui');

// Constants
const rootDir = require('path').resolve(__dirname, '..', '..');
const webpackIsomorphicAssets = require('../../webpack/assets');

global.webpackIsomorphicTools = new WebpackIsomorphicTools(webpackIsomorphicAssets)
  .development(!config.isProduction)
  .server(rootDir, () => {

  	// App instance
	const app = express();

	// Serve API
	app.use('/api/v1', api);

	// Serve UI
	app.use(ui);

	// Start listening
	app.listen(config.port, () => {
	  console.log('Server started at port %d', config.port);
	});

  });
