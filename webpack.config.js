const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// CommonJS syntax
module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/index.js',
    // Where we want compiled code to go
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
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
    ],
    devServer: {
        publicPath: '/dist/',
        contentBase: path.join(__dirname, '/src'),
        watchContentBase: true,
        proxy: { '/': 'http://localhost:3000' },
      },
}