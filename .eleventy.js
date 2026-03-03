module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("_headers");

  eleventyConfig.addFilter("dateToISO", (date) => {
    return new Date(date).toISOString().split("T")[0];
  });

  eleventyConfig.addFilter("dateToReadable", (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });
  });

  eleventyConfig.addFilter("dateToYear", () => {
    return new Date().getFullYear();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
