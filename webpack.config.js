'use strict'
const webpack = require('webpack');
const path = require("path");
const srcPath = path.resolve(__dirname, "app");
const distPath = path.resolve(__dirname, "dist");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/app/index.html`,
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    devtool: 'source-map',
    entry: {
        app: `${srcPath}/index.js`,
    },
    output: {
        path: distPath,
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
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: ["url-loader"],
            },
            {
                test: /\.json$/,
                use: ["json-loader"],
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