var webpack = require('webpack')

module.exports = {
    entry: {
        main: './content.js'
        //vendors: ['react','jquery']
    },
    output: {
        path: './dist',
        publicPath: 'dist/',
        filename: 'build.js'
    }
}
