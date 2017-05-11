var webpack = require('webpack');

module.exports = {
  entry: {
    app:'./src/js/main.js',
    style:'./src/css/index.scss'
  },
  output: {
    path: __dirname + '/dist/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.webpack.js', '.web.js'],
    modules: ['node_modules']
  },
  // devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader?name=[name].[ext]"
      },
      {
        test: /\.(gif|png|jpeg|jpg)$/,
        loader: "file-loader?name=[name].[ext]"
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader',"css-loader","sass-loader"]
        //loader: "style-loader!css-loader!sass-loader",
        //options: { importLoaders: 1 }
      }
    ]
  },
  /*
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "react-router": "ReactRouter"
  },*/
  plugins: [
    new webpack.ProvidePlugin({
       $: "jquery",
       jQuery: "jquery",
       Tether:"tether"
    }),
    // new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    /*new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),*/
    new webpack.DefinePlugin({
        NODE_ENV: 'development'
    })
  ]
}
