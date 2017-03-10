const webpack = require('webpack');
const path = require('path');

const webpackConfig = {
    devtool: 'source-map',
    entry: {
        'bundle': './app/index.js',
        'bundle.min': './app/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'js/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true,
            sourceMap: true
        })
    ]
    // stats: {
    //     assets: false,
    //     children: false
    // }
};

module.exports = webpackConfig;
