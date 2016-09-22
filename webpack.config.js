var webpack = require('webpack');

module.exports = {
	entry: './dist/app.js',
	output: {
		path: 'build',
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		contentBase: './build',
		port: 3000
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader'
			},
			{
				test: /\.sass$/,
				loader: 'style-loader!css-loader!sass-loader'
			}
		]
	}
};