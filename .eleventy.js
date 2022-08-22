module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("is-land.js");
  eleventyConfig.addWatchTarget("css/");
  eleventyConfig.addWatchTarget("js/");
};
