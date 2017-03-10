module.exports = {
    map: { inline: false },
    plugins: [
        require('postcss-smart-import'),
        require('postcss-simple-vars'),
        require('precss'),
        require('postcss-short'),
        require('postcss-center'),
        require('postcss-flexbox'),
        require('postcss-assets'),
        require('pleeease-filters'),
        require('postcss-selector-matches'),
        require('postcss-selector-not'),
        require('postcss-quantity-queries'),
        require('postcss-fixes'),
        require('autoprefixer'),
        require('postcss-reporter'), // evt nicht benötigt
        // require('cssnano'),
        require('postcss-style-guide')({
            project: 'Test-App',
            dest: 'src/styleguide/index.html'
        })
    ]
}
