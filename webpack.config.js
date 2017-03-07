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
