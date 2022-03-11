const markdownIt = require('markdown-it');
const markdownItFootnote = require('markdown-it-footnote');
const markdownItAttrs = require('markdown-it-attrs');
const markdownLib = markdownIt().use(markdownItFootnote)
  .use(markdownItAttrs);

//const schema = require("@quasibit/eleventy-plugin-schema");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('src/icons');
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/styles');
  eleventyConfig.addPassthroughCopy('src/scripts');
  eleventyConfig.addPassthroughCopy('src/site.webmanifest');
  eleventyConfig.addPassthroughCopy('src/favicons');

  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setLibrary('md', markdownLib);
  
  eleventyConfig.addCollection('conceptsPlusPin', function (collection) {
    let pinned = collection
      .getFilteredByTag('concepts')
      .filter(item => item.data.tags.includes('pinned'));
    let nonPinned = collection
      .getFilteredByTag('concepts')
      .filter(item => !item.data.tags.includes('pinned'));
    return [...pinned, ...nonPinned];
  });

  eleventyConfig.addCollection('glossarySortedAlpha', function (collection) {
    return collection.getFilteredByTag('definitions').sort(function (a, b) {
      if (a.data.title < b.data.title) {
        return -1;
      } else if (a.data.title > b.data.title) {
        return 1;
      } else {
        return 0
      }
    })
  });

  eleventyConfig.addCollection('publishedPosts', function (collection) {
    return collection.getFilteredByTag('posts').filter((r)=> r.data.published === true);
  })

  eleventyConfig.addCollection('publishedRecipes', function (collection) {
    return collection.getFilteredByTag('recipes').filter((r)=> r.data.published === true);
  })

  return {
    dir: {
      input: 'src',
      includes: '_includes',
    },
    passthroughFileCopy: true,
  };
};