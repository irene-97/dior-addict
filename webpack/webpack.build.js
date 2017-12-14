const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
    module: {
        rules: [
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
                })
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.(png|jpg|gif?)(\?.+)?$/,
                loader: 'file-loader',
                options: {
                    name: '/images/[name].[ext]'
                }
            },
            {
                test: /\.(woff2|woff?)(\?.+)?$/,
                loader: 'file-loader',
                query: {
                    name: '/fonts/[name].[ext]'
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['build']),
        new UglifyJSPlugin(),
        new ExtractTextPlugin({
            filename: (getPath) => {
                return getPath('styles/[name].css').replace('css/js', 'css');
            },
            allChunks: true
        }),
        new CopyWebpackPlugin([
            {
                from: '../source/content',
                to: 'content'
            }
        ])
    ]
});
