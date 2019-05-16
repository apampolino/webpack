const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    preset: ['env']
                }
            },
            {
                test: /\.css?$/,
                use: [{
                    loader: 'style-loader',
                    loader: 'css-loader'
                }]
            },
            {
                test: /\.(png|svg|jpg|gif)?$/,
                use: [{
                    loader: 'file-loader'
                }]
            }
        ]
    }
}