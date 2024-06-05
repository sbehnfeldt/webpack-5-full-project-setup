const path = require('path');
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

let mode   = "development";
if ("production" === process.env.NODE_ENV) {
    mode = "production";
}

module.exports = {
    mode: mode,
    devtool: "source-map",
    devServer: {
        static: './dist',
        hot: true
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            },
            test: /\.s?css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
        }]
    },

    plugins: [new MiniCssExtractPlugin()],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}