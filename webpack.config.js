const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// CommonJS syntax
module.exports = {
    entry: './src/index.js',
    // Where we want compiled code to go
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                // Order matters
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}