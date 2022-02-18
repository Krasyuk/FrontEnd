const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {loader} = require("mini-css-extract-plugin");

const jsLoaders = () => {
    const loaders = [{
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env']
        }
    }]

    loaders.push('eslint-loader')

    return loaders

}


module.exports = {
    context: path.resolve(__dirname,"src"),
    mode: "development",
    entry: {
        main: [ '@babel/polyfill','./index.js'],
        analytics: './analytics.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.json', '.png'],
        alias: {
            '@models' : path.resolve(__dirname, 'src/models'),
            '@' : path.resolve(__dirname, 'src')

        }
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    devServer: {
        port:4200
    },
    devtool: 'source-map',
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {},
                },'css-loader'
                ]
            },
            {
                test: /\.(png|jsg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: jsLoaders()
            }
        ]
    }
}