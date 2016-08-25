module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'mylibrary.js',
        library: 'MyLibrary',
        libraryTarget: 'umd',
        path: './build'
    },
    module: {
        loaders: [
            {
                exclude: ['node_modules', 'build', 'test'],
                loader: 'babel',
                test: /\.js$/
            }
        ]
    }
};
