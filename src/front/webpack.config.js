const HTMLPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  plugins: [
    new HTMLPlugin({
      template: "src/index.html",
      title: 'My App',
      path: __dirname + '/public',
      filename: 'index.html'
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    path: __dirname + '/public',
    filename: 'public.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          }
        ]
      }
    ]
  }
};
