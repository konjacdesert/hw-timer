module.exports = {
  mode: "development",
  target: "web",
  entry: `${__dirname}/src/index.ts`,
  output: {
    path: `${__dirname}/docs`,
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".json", ".js", ".jsx", ".css", ".ts", ".tsx"],
  },
};
