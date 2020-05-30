var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')

module.exports = {

    entry: path.join(__dirname,'/functions/src/app/index.js'),
    output: {
		
		path:path.resolve(__dirname,'./functions/public'),
		filename: 'main.js'
	},

    module: {

        rules: [

            {

                test: /\.js$/,
                exclude: /node_modules/,
                use: {

                    loader: 'babel-loader',
                    options:{
						presets: ['@babel/preset-react', '@babel/preset-env'],
					}
                }

            },

            {

                test: /\.css$/i,
                use: ['style-loader', 'css-loader']

            }

        ]
    },

    plugins: [

        new HtmlWebpackPlugin({

            title: 'Aplicacion de Nico',
            template: './index.html'

        })

    ]

}