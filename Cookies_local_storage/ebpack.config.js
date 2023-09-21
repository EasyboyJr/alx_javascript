const path = require('path');

module.exports = {
    entry: './src/0-index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist');
    },
    Plugins: [
        new HtmlWebpackPlugin({
            template: './0-index.html',
        }),
    ],
    devServer: {
        contentBase: './dist',
        port: 8080,
    },
};