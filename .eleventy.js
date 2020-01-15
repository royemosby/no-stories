module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('icons');
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('styles');
  eleventyConfig.addPassthroughCopy('scripts');

  return {
    dir: {
      input: 'src',
      includes: '_includes',
    },
    passthroughFileCopy: true,
  };
};
