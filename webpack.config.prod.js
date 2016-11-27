import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map', //for production use source-map instead is inline-source-map as it is more powerfull, suited for prod env
  noInfo: false,
  entry:{
    main: path.resolve(__dirname, 'src/index'),
    vendor: path.resolve(__dirname, 'src/vendor'),
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'), //output to be generated in dist folder instead of src
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [
    // create html file dynamically that has ref to bundle.js
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true,
    }),
    // Use CommonsChunkPlugin to create a separate bundle
    // of vendor libraries so that they're cached separately.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
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
