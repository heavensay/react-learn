var webpack = require('webpack')

module.exports = {
    entry: {
        main: './src/components/home.js'
    },
    output: {
        path: './dist',
        publicPath: 'dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'   //babel配置见.babelrc文件
            },
            {   test: /\.css$/, 
                loader: 'style-loader!css-loader?sourceMap' 
            }
        ]  
    } 
}
