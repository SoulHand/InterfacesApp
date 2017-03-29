var webpack = require('webpack');

// webpack.config.js 
module.exports = {
    entry: './src/js/main.js',
    output: {
        path: './dist',
        filename: 'app.js'
    },
    module: {
        loaders: [
          { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" },
          { test: /\.css$/, loader: "style-loader!css-loader" }
        ],
    },
    plugins: [
    new webpack.ProvidePlugin({
       $: "jquery",
       jQuery: "jquery",
       Tether:"tether",
       React: "react",
       ReactDOM: "react-dom",
       ReactRouter: "react-router"
    }),
    // new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.DefinePlugin({
        NODE_ENV: 'development'
    })/*,
     new BowerWebpackPlugin({
      modulesDirectories: ["bower_components"],
      manifestFiles:      "bower.json",
      includes:           "/.*\/",
      excludes:           [],
      searchResolveModulesDirectories: true
    })*/   
  ]
};
