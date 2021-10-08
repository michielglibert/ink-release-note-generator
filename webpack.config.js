const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
	entry: "./dist/cli.js",
	externalsPresets: { node: true },
	externals: [nodeExternals()],
	output: {
		filename: "releasenote.js",
		path: path.resolve(__dirname, "build"),
		clean: true,
	},
};
