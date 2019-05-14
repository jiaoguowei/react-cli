const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        app: [
            path.join(__dirname, '../src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    mode: 'development',
    output: {
        path: path.join(__dirname, '../dist'),
        // filename: 'bundle.js'
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, '../src')
        },{
            test: /\.css$/,
            use: [{loader: MiniCssExtractPlugin.loader},{
                loader:'css-loader',
                options: {
                    modules: true,
                    localIdentName: '[local]--[hash:base64:5]'
                }
            }, "postcss-loader"] //postcss-loader写CSS的时候需要自动加浏览器前缀
            
        },{
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    },
    devServer: {
        // contentBase: path.join(__dirname, '../dist'),
        compress: true,
        host: '0.0.0.0',
        hot: true,
        historyApiFallback:true,
        port: 8000,
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:8000',
        //         pathRewrite: {'^/api' : ''},
        //         changeOrigin:true
        //     }
        // }
    },
    devtool: 'inline-source-map',
    resolve: {
        alias: {
            pages: path.join(__dirname, '../src/pages'),
            components: path.join(__dirname, '../src/components'),
            router: path.join(__dirname, '../src/router'),
            actions: path.join(__dirname, '../src/redux/actions'),
            reducers: path.join(__dirname, '../src/redux/reducers'),
            images: path.join(__dirname, '../src/images'),
        }
    },
    plugins: [
        // webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../public/index.html')
        }),
        new MiniCssExtractPlugin({ // 压缩css
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css"
        })
    ],
    
}