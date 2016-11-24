import path from 'path';
import webpack from 'webpack';

export default {
  debug: true,
  devtool: 'source-map', //for production use source-map instead is inline-source-map as it is more powerfull, suited for prod env
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'), //output to be generated in dist folder instead of src
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    //eliminate duplicagte packages when creating bundle
    new webpack.optimize.DedupePlugin(),
    // minify js
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}