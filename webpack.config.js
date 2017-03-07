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
    }
};

/*
,
            {
                test: /\.js$/,
                loader: 'raw-loader'
            }


rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        },
        {
            test: /\.js$/,
            use: 'raw-loader'
        }]

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