//TODO: fancy fractional measures in recipes
//negative lookbehinds are not widely implemented
//must grab fractions AND dates then eliminate dates
// (\d+\/\d+)(\/\d*)* matches dates AND fractions
// (\d+\/\d+)(\/\d*)+ matches  dates NOT fractions

(function() {
  let pageLinks = Array.from(document.links);
  let currentLinks = pageLinks
    .filter(link => link.href === document.documentURI)
    .filter(link => link.children.length === 0);
  currentLinks.forEach(link => {
    link.classList.add('current-page');
  });
})();
