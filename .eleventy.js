const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const { DateTime } = require("luxon");

module.exports = function (config) {

    config.addPassthroughCopy("images") // makes sure that these files get outputed
    config.addPassthroughCopy("admin")
    config.addPassthroughCopy("assets/css/tailwind.css")

    // Eleventy Navigation https://www.11ty.dev/docs/plugins/navigation/
    config.addPlugin(eleventyNavigationPlugin);

    // Configuration API: use eleventyConfig.addLayoutAlias(from, to) to add
    // layout aliases! Say you have a bunch of existing content using
    // layout: post. If you don’t want to rewrite all of those values, just map
    // post to a new file like this:
    // eleventyConfig.addLayoutAlias("post", "layouts/my_new_post_layout.njk");

    // Date formatting (human readable)
    config.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
    });

    // Date formatting (machine readable)
    config.addFilter("machineDate", dateObj => {
        return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
    });

}
