var webpack = require('webpack')

module.exports = {
    entry: {
        main: './index.js'
    },
    output: {
        path: './dist',
        publicPath: 'dist/',
        filename: 'build.js',
        sourceMapFilename: '[file].map'
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'   //babel配置见.babelrc文件
            }
        ]  
    } 
}
