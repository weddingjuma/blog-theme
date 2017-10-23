'use strict';

const path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'static/js'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery', 'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
            // In case you imported plugins individually, you must also require them here:
            Util: "exports-loader?Util!bootstrap/js/dist/util",
            Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
        })
    ]
};
