const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    // Development options
    mode: 'development',
    node: false,
    target: 'web',
    devtool: 'inline-source-map',

    // Input/Output
    entry: './src/main.tsx',
    output: {
        filename: '[name].js',
        path:  path.resolve(__dirname, 'dist')
    },

    // Module loading
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ],
            }
        ]
    },
    resolve: {
        extensions: [ '.js', '.ts', '.tsx' ],
        alias: {
            react: 'preact/compat',
            'react-dom': 'preact/compat',

            '@components': path.resolve(__dirname, 'src/components'),
        }
    },

    // Plugins
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(),
    ]
}
