const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: "./assets/js/app.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'test.bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                },
                {
                    loader: "sass-loader",
                    options; {
                        include
                    }
                }],
                fallback: "style-loader"
            })
        }]
    },
    plugins: [
        extractSass
    ]
}
