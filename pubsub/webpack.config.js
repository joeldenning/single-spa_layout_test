const path = require('path');

module.exports = {
  entry: './src/pubsub.js',
  output: {
    filename: 'pubsub.js',
    path: path.resolve(__dirname, 'dist'),
    library: "pubsub",
    libraryTarget: "umd"
  },
  devtool: "eval-source-map",
  module: {
    rules: [
        {
            test: /\.js$/, //using regex to tell babel exactly what files to transcompile
            exclude: /node_modules/, // files to be ignored
            use: {
                loader: 'babel-loader' // specify the loader
            } 
        }
    ]
},
  devServer: {
    port: 9998,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  }
};