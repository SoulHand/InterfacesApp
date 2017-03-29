<<<<<<< HEAD
var webpack = require('webpack');


module.exports = {
    entry: './src/js/main.js',
    output: {
        path: './dist/',
        filename: 'app.js'
    },
    module: {
        loaders: [
            { 
                test: /\.(css|scss)$/, 
                use:[
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }  
                ]
            }
        ]        
    },
    plugins: [
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery",
           Tether:"tether"
       })
    ]
};
=======
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
>>>>>>> interfaz
