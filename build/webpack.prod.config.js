const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        app: [
            path.join(__dirname, '../src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    mode: 'production',
    output: {
        path: path.join(__dirname, '../dist'),
        // filename: 'bundle.js'
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath : '/dist/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, '../src')
        },{
            test: /\.css$/,
            use: ['style-loader',{
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
    devtool: 'none',
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
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../public/index.html')
        }),
        new CleanWebpackPlugin(),
        new OptimizeCssAssetsPlugin()
    ],
    optimization: {
        splitChunks: {
          chunks: 'all'
        }
    }
}