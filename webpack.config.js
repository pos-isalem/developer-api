var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        main: './src',
    },
    resolve: {
        extensions: [".js", ".ts"]
    },
    target: 'node',
    mode: 'none',
    // this makes sure we include node_modules and other 3rd party libraries
    externals: [/node_modules/],
    output: {
        publicPath: "/js/",
        path: path.join(__dirname, '/dist/js/'),
        filename: '[name].build.js'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader'
        }]
    }
};