module.exports = {
    entry: 'mocha!./test/main.js',
    module: {
        loaders: [
            {
                exclude: ['node_modules', 'test'],
                loader: 'babel',
                test: /\.js$/
            }
        ]
    }
};
