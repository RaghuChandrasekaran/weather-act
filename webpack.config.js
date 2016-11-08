'use strict'
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/app/index.html`,
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    context: `${__dirname}/app`,
    entry: {
        app: './index.js',
    },
    output: {
        path: `${__dirname}/dist`,
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader",
                    options: { presets: ["react"] }
                }],
            }
        ],
    },
    devServer: {
        contentBase: `${__dirname}/dist`,
        historyApiFallback: true
    },
    plugins: process.env.NODE_ENV === 'production' ? [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons.js",
            minChunks: 2,
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        HtmlWebpackPluginConfig
    ] : [HtmlWebpackPluginConfig]
};