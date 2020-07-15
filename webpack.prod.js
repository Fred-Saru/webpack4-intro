const wm = require( 'webpack-merge' );
const common = require( './webpack.common' );
const miniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const optimizeCssPlugin = require( 'optimize-css-assets-webpack-plugin' );
const optimizeJsPlugin = require( 'terser-webpack-plugin' );
const { SplitChunksPlugin } = require( 'webpack' );

module.exports = wm.merge( common, {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [ {
                    loader: miniCssExtractPlugin.loader
                }, 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: [
                            require( 'autoprefixer' )
                        ]
                    }
                }, 'sass-loader' ]
            },
        ]
    },// end module
    plugins: [
        new miniCssExtractPlugin( {
            filename: 'css/[name]-[contenthash].css'
        } )
    ],
    optimization: {
        minimizer: [
            new optimizeJsPlugin( {
                parallel: true
            } ),
            new optimizeCssPlugin()
        ],
        splitChunks: {
            chunks: 'all'
        }
    }
} );// end module.exports