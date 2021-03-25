module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/icons');
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/styles');
  eleventyConfig.addPassthroughCopy('src/scripts');
  eleventyConfig.setDataDeepMerge(true);

  let markdownIt = require('markdown-it');
  let markdownItFootnote = require('markdown-it-footnote');
  let markdownItAttrs = require('markdown-it-attrs');
  let markdownLib = markdownIt().use(markdownItFootnote)
                                .use(markdownItAttrs);
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

  eleventyConfig.addCollection('glossarySortedAlpha', function(collection){
    let sorted = collection.getFilteredByTag('definitions').sort(function(a, b){
      if (a.data.title < b.data.title){ 
        return -1;
      } else if (a.data.title > b.data.title) {
        return 1;
      } else {
        return 0
    }
    })
    return sorted
  });

  return {
    dir: {
      input: 'src',
      includes: '_includes',
    },
    passthroughFileCopy: true,
  };
};
