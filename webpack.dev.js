const wm = require( 'webpack-merge' );
const common = require( './webpack.common' );
const path = require( 'path' );

module.exports = wm.merge( common, {
    mode: "development",
    devServer: {
        port: 3000,
        contentBase: path.join( __dirname, 'dist' ),
        watchOptions: {
            ignored: /node_moules/
        }
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [ 'style-loader', 'css-loader', {
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
    }// end module
} );// end module.exports