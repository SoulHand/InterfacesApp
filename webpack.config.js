var webpack = require('webpack');

// webpack.config.js 
module.exports = {
    entry: './scss/main.scss',
    output: {
        path: './scss',
        filename: '../css/app.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
    }
};

/*
module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings 
            }, {
                loader: "css-loader" // translates CSS into CommonJS 
            }, {
                loader: "sass-loader", // compiles Sass to CSS 
                options: {
                    includePaths: ["scss/"]
                }
            }]
        }]
    }
*/