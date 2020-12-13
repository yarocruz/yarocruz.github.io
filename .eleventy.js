module.exports = function (config) {
    config.addPassthroughCopy("images") // makes sure that these files get outputed
    config.addPassthroughCopy("admin")
}
