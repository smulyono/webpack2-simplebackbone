var path = require("path"),
    webpack = require("webpack"),
    HtmlWebpackPlugin = require("html-webpack-plugin");

const PROJECT_DIR = path.resolve(path.join(__dirname, 'src/')),
    BUILD_DIR = path.resolve(path.join(__dirname, 'build/'));

module.exports = {
    context : PROJECT_DIR,
    target : "web",
    entry : {
        vendors : ["jquery", "backbone", "underscore"],
        app     : "./app/index.js"
    },
    output : {
        path : BUILD_DIR,
        filename : "[name]-[hash].js"
    },
    resolve : {
        modules : [
            PROJECT_DIR,
            "node_modules"
        ],
        alias : {
            "backbone" : "assets/js/vendor/backbone/backbone",
            "underscore" : "assets/js/vendor/underscore/underscore",
            "jquery"   : "assets/js/vendor/jquery/jquery",
            // "requirejs": "assets/js/vendor/requirejs/require",
            "mainRoutes" : "app/routes/index",
            "mainView" : "app/views/main",
            "byeView"  : "app/views/bye",
            "helloView": "app/views/hello"
        }
    },
    module : {
        loaders : [
            { 
                test : /\.js$/, 
                loaders: ['babel-loader', 'eslint-loader'], 
                exclude : /node_modules|vendor/
            }
        ]
    },
    plugins : [
        // https://github.com/webpack/webpack/issues/1943
        // multiple vendor chunks 
        new webpack.optimize.CommonsChunkPlugin({
            names : ["vendors"]
        }),
        new webpack.ProvidePlugin({
            _ : "underscore",
            $ : "jquery",
            jQuery : "jquery"
        }),
        new HtmlWebpackPlugin({
            title : "Main File",
            filename : "index.html"
        })        
    ]
    
};