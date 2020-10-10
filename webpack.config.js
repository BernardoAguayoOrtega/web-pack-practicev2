const babelRules = {
	test: /\.js$/,
	exclude: /node_modules/,
	loader: 'babel-loader',
	options: {
		presets: [['@babel/preset-react'], ['@babel/preset-env']],
	},
};

module.exports = {
	module: {
		rules: [babelRules],
	},
};
