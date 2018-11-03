const path = require('path');

module.exports = {
	entry: ['@babel/polyfill','whatwg-fetch','./js/script.js'],
	output: {
		path: path.resolve(__dirname , './public'),
		filename: 'bundle.js'
	},
  devServer: {
    contentBase: './public'
  },
	module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
