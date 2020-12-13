// const CleanCSS = require("clean-css");

module.exports = function (config) {



    config.addPassthroughCopy("images") // makes sure that these files get outputed
    config.addPassthroughCopy("admin")
    config.addPassthroughCopy("assets/css/tailwind.css")

    // // Minify CSS
    // config.addFilter("cssmin", function(code) {
    //     return new CleanCSS({}).minify(code).styles;
    // });
}
