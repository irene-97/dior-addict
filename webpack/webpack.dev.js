const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.config.js');
const autoprefixer = require('autoprefixer');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

module.exports = merge(common, {

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.(png|jpg|gif?)(\?.+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: '/'
                }
            },
            {
                test: /\.(woff2|woff?)(\?.+)?$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]',
                    publicPath: '/'
                }
            },
            {
                test: /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                    },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [autoprefixer({
                                    browsers: ['> 1%', 'last 5 versions']
                                })],
                            },
                        },
                        {
                            loader: 'sass-loader',
                        },
                    ],
                }),
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: (getPath) => {
                return getPath('styles/[name].css').replace('css/js', 'css');
            },
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    devtool: 'inline-source-map',
    devServer: {
        contentBase: 'source',
        compress: true,
        host: '0.0.0.0',
        port: 9001
    }
});
