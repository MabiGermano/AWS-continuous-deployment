const path = require("path")

module.exports = {
  target: "node",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  node: "14",
                },
              },
            ],
          ],
        },
      },
    ],
  },
  resolveLoader: {
    modules: [__dirname + "/node_modules"],
  },
}
