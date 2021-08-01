const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: 'server.js',
    output: {
        path:_dirname + '/dist',
        filename: 'server.js'
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    minify: false
}