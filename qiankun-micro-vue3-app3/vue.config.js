const {name} = require('./package.json')

module.exports = {
    devServer: {
        port: 3013,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    },
    configureWebpack: {
        output: {
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`
        }
    }
}