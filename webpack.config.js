const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	//模式
	mode: 'development',//development(开发模式不会压缩)   production(生产模式会压缩)  none
	//监视
	watch: true,
	//入口
	entry: './src/main.js',
	//出口
	output:{
		//输出的目录名
		path: path.resolve('dist'),
		//输出的文件名
		filename: 'build.js'
	},
	// 解析
	resolve: {
		// webpack忽略的扩展名
		extensions: ['.js','.vue','.json'],
	},
	devServer: {
		port: 8080,//指定端口
		hot: true//开启热更新
	},
	//配置静态资源的处理
	module: {
		rules: [
			{
                test: /\.css$/i,
                use: ['style-loader','css-loader']
            },{
                test: /\.less$/i,
                use: ['style-loader','css-loader','less-loader']
            },{
                test: /\.(sass|scss)$/i,
                use: ['style-loader','css-loader','sass-loader']
            },{
                test: /\.styl(us)?$/i,
                use: ['style-loader','css-loader','stylus-loader']
            },{
				test: /\.(png|jpe?g|gif|svg|psd|webp|ttf|woff|eot)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }
			},{
				test: /\.vue$/i,
				use: ['vue-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new VueLoaderPlugin()
	]
}