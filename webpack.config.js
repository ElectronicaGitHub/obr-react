var webpack = require('webpack');
var path = require('path');
var BowerWebpackPlugin = require("bower-webpack-plugin");

var config = {
    context: path.join(__dirname, 'public/'), // исходная директория
    entry: {
        main : './app'
    }, // файл для сборки, если несколько - указываем hash (entry name => filename)
    output: {
        path: path.join(__dirname, 'public/build'),
        filename: '[name].bundle.js'
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify('production')
        }),
        new BowerWebpackPlugin({
            modulesDirectories: ['public/libs'],
            manifestFiles: ['bower.json', '.bower.json'],
            includes: /.*/,
            excludes: /.*\.less$/
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.less'],
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'jsx-loader' },
            { test: /\.less$/, loader: "style!css!less" }
        ]
    }
};

module.exports = config;

// var compiler = webpack(config);
// compiler.run(function (err, stats) {
//     if (!err) console.log('builded')
//     // console.log(stats.toJson()); // по завершению, выводим всю статистику
// });