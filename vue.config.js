const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const isProduction = process.env.NODE_ENV === "production";

const plugins = [];
if (isProduction) {
    plugins.push(
        new UglifyJsPlugin({
            uglifyOptions: {
                output: {
                    comments: false
                }
            }
        }));
}
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-tables-app/'
        : '/',
    assetsDir: "assets/",
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
                "@assets": path.resolve(__dirname, "./src/assets"),
                "@models": path.resolve(__dirname, "./src/models"),
                "@components": path.resolve(__dirname, "./src/views/components"),
                "@views": path.resolve(__dirname, "./src/views"),
                "@layouts": path.resolve(__dirname, "./src/views/layouts"),
            },
        },
        optimization: {
            minimize: isProduction
        },
        plugins: plugins
    },
};
