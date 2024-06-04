const path = require('path');
let mode   = "development";
if ("production" === process.env.NODE_ENV) {
    mode = "production";
}

module.exports = {
    mode: mode,
    devtool: "source-map",
    devServer: {
        static: './dist'
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}