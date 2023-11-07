const path = require('path');

module.exports = {
	
	entry: path.resolve(__dirname, './src/index.js'),
	
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	
	devServer: {
		static: path.resolve(__dirname, './dist'),
		port: 3000
	},
	
	module: {
		rules: [
		  {
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: ['babel-loader'],
		  },
		  {
			test: /\.css$/i,
			exclude: /node_modules/,
			use: [
			  'style-loader',
			  {
				loader: 'css-loader',
				options: {
				  modules: true,
				},
			  },
			],
		  },
		],
	},
	
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
  
};