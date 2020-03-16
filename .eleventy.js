module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/icons');
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/styles');
  eleventyConfig.addPassthroughCopy('src/scripts');
  eleventyConfig.setDataDeepMerge(true);

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

/*
module.exports = function(eleventyConfig) {
  
  eleventyConfig.addCollection('conceptsPlusPin', function(collection) {
    let pinned = collection.getFilteredByTagName('concepts').filter(item => item.data.tags === 'pinned');
    let nonPinned = collection.getFilteredByTagName('concepts').filter(item => item.data.tags !== 'pinned');
    return [...pinned, ...nonPinned];
  });

};*/
