const webpack = require('webpack');
const path = require('path');

module.exports = {
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	debug: true,
	devtool: 'source-map',
	noInfo: true,
	entry: [
		'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
		path.resolve(__dirname, 'src/app')
	],
	target: 'web',
	output: {
		path: __dirname + '/build', // Note: Physical files are only output by the production build task `npm run build`.
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'src')
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{test: /\.js$/, include: path.resolve(__dirname, 'src'), loader: 'babel'},
			{test: /\.jsx$/, include: path.resolve(__dirname, 'src'), loader: 'babel'}
		]
	}
};
