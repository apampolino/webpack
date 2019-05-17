const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        port: 3000
    },
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: [
                    /node_modules/
                ],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            // {
            //     test: /\.css?$/,
            //     use: [
            //         {
            //             loader: 'style-loader'
            //         },
            //         {
            //             loader: 'css-loader'
            //         }
            //     ]
            // },
            // {
            //     test: /\.(png|svg|jpg|gif)?$/,
            //     use: [
            //         {
            //             loader: 'file-loader'
            //         }
            //     ]
            // }
        ]
    }
}