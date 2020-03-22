module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/icons');
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/styles');
  eleventyConfig.addPassthroughCopy('src/scripts');
  eleventyConfig.setDataDeepMerge(true);

  let markdownIt = require('markdown-it');
  let markdownItFootnote = require('markdown-it-footnote');
  let markdownLib = markdownIt().use(markdownItFootnote);
  eleventyConfig.setLibrary('md', markdownLib);

  eleventyConfig.addCollection('conceptsPlusPin', function(collection) {
    let pinned = collection
      .getFilteredByTag('concepts')
      .filter(item => item.data.tags.includes('pinned'));
    let nonPinned = collection
      .getFilteredByTag('concepts')
      .filter(item => !item.data.tags.includes('pinned'));
    return [...pinned, ...nonPinned];
  });

  return {
    dir: {
      input: 'src',
      includes: '_includes',
    },
    passthroughFileCopy: true,
  };
};
