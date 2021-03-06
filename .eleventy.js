const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const slugify = require("slugify");

const { DateTime } = require("luxon");

module.exports = function (config) {
    // Eleventy Navigation https://www.11ty.dev/docs/plugins/navigation/
    config.addPlugin(eleventyNavigationPlugin);

    // Configuration API: use eleventyConfig.addLayoutAlias(from, to) to add
    // layout aliases! Say you have a bunch of existing content using
    // layout: post. If you don’t want to rewrite all of those values, just map
    // post to a new file like this:
    // eleventyConfig.addLayoutAlias("post", "layouts/my_new_post_layout.njk");

    // Date formatting (human readable)
    config.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj).toFormat("LLL dd yyyy");
    });

    // Date formatting (machine readable)
    config.addFilter("machineDate", dateObj => {
        return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
    });

    // Universal slug filter strips unsafe chars from URLs
    config.addFilter("slugify", function(str) {
        return slugify(str, {
            lower: true,
            replacement: "-",
            remove: /[*+~.·,()'"`´%!?¿:@]/g
        });
    });

    config.addPassthroughCopy("images") // makes sure that these files get outputed
    config.addPassthroughCopy("admin")
    config.addPassthroughCopy("assets/css/tailwind.css")
}
