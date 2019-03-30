const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    publicPath: './',
    outputDir: 'manfred',
    configureWebpack: {
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        compress: {
                            warnings: false,
                            drop_console: true,//console
                            drop_debugger: true,
                            pure_funcs: ['console.log']//移除console
                        }
                    }
                })
            ]
        }
    },
    productionSourceMap: false
}
