module.exports = {
    plugins: [
        require('tailwindcss')('tailwind.config.js'),
        require('autoprefixer'),
        require('@fullhuman/postcss-purgecss')({
            content: [
                "./_site/**/*.html"
            ],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        })
    ]
}