module.exports = {
    entry: {
        index: ['./src/index.js', './src/style.css']
    },
    output: {
        path: './dist/',
        filename: 'index.js',
        publicPath: '/dist',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-0', 'react']
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }]
    }
}
