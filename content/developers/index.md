const  path  =  require （'path' ）;

const  CommonsChunkPlugin  =  require （'webpack / lib / optimize / CommonsChunkPlugin' ）;
const  CopyWebpackPlugin  =  require （'copy-webpack-plugin' ）;
const  HtmlWebpackPlugin  =  require （'html-webpack-plugin' ）;
const  UglifyJsPlugin  =  require （'uglifyjs-webpack-plugin' ）;
const  ExtractTextPlugin  =  require （'extract-text-webpack-plugin' ）;
var  OptimizeCssAssetsPlugin  =  require （'optimize-css-assets-webpack-plugin' ）;

模块。出口 =  {
	条目：{
		'main'：'./src/scripts/site.js'
	} ，
	解决：{
		扩展名：[ '.js' ， '.json' ]
	} ，
	模块：{
		规则：[
			{
				测试：/ \。s？css $ / ，
				使用：ExtractTextPlugin 。提取（{
					后备：'style-loader' ，
					使用：[ 'css-loader' ， 'sass-loader' ]
				} ）
			} ，
			{
				测试：/ \。（ jpg | png | gif | pdf ）$ / ，
				使用：“文件加载器”
			} ，
			{
				测试：/ \。（ eot | woff2？| svg | ttf ）（[ \？]？。* ）$ / ，
				使用：“文件加载器”
			}
		]
	} ，
	插件：[
		新的 CommonsChunkPlugin （{
			名称：'main' ，
			异步：'common' ，
			孩子们：是的，
			minChunks：2
		} ），
		新的 ExtractTextPlugin （'[name]。[contenthash] .css' ），
		新的 OptimizeCssAssetsPlugin （{
			assetNameRegExp：/ \。css $ / g ，
			cssProcessor：require （'cssnano' ），
			cssProcessorOptions：{  discardComments：{ 的removeAll：真正 }  } ，
			canPrint：true
		} ），
		新的 CopyWebpackPlugin （[
			{ 从：'SRC /资产' ， 到：'资产'  } ，
		] ），
		新的 HtmlWebpackPlugin （{
			模板：“ src / assets / disclaimer / index.html” ，
			注入：'body' ，
			xhtml：true ，
			元数据：{
				isDevServer：假
			} ，
			缩小：{
				caseSensitive：true ，
				crashWhitespace：true ，
				keepClosingSlash：true
			} ，
			块：'全部' ，
			excludeChunks：[ ] ，
			filename：'assets / disclaimer / index.html'
		} ），
		新的 HtmlWebpackPlugin （{
			模板：“ src / sites / cn / index.html” ，
			注入：'body' ，
			xhtml：true ，
			元数据：{
				isDevServer：假
			} ，
			缩小：{
				caseSensitive：true ，
				crashWhitespace：true ，
				keepClosingSlash：true
			} ，
			块：'全部' ，
			excludeChunks：[ ] ，
			文件名：“ index.html”
		} ），
		新的 HtmlWebpackPlugin （{
			模板：“ src / sites / en / index.html” ，
			注入：'body' ，
			xhtml：true ，
			元数据：{
				isDevServer：假
			} ，
			缩小：{
				caseSensitive：true ，
				crashWhitespace：true ，
				keepClosingSlash：true
			} ，
			块：'全部' ，
			excludeChunks：[ ] ，
			文件名：“ en / index.html”
		} ），
		新的 HtmlWebpackPlugin （{
			模板：“ src / sites / cn / index.html” ，
			注入：'body' ，
			xhtml：true ，
			元数据：{
				isDevServer：假
			} ，
			缩小：{
				caseSensitive：true ，
				crashWhitespace：true ，
				keepClosingSlash：true
			} ，
			块：'全部' ，
			excludeChunks：[ ] ，
			文件名：“ cn / index.html”
		} ），
		新的 UglifyJsPlugin （{
			sourceMap：true ，
			uglifyOptions：{
				ecma：5 ，
				警告：false ，    //基于选项的TODO详细信息？
				ie8：错误，
				mangle：是的，
				压缩：{
					pure_getters：true ， / * buildOptimizer * /
					//纯注释最好通过3次传递。
					//参见https://github.com/webpack/webpack/issues/2899#issuecomment-317425926。
					通过：3
				} ，
				输出：{
					ascii_only：true ，
					评论：错误
				}
			}
		} ）
	] ，
	输出：{
		路径：路径。解析（__dirname ， '../dist' ），
		filename：'[name]。[chunkhash] .bundle.js' ，
		sourceMapFilename：'[file] .map' ，
		chunkFilename：'[名称]。[chunkhash] .chunk.js'
	}
} ;
