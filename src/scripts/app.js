//TODO: match kitchen glossary w/concepts for link underline IIFE
//TODO: toggle open glossary term details based on anchor
//TODO: fancy fractional measures in recipes (markdown-it plugin)

(function() {
  const pageLinks = Array.from(document.links);
  let currentLinks = pageLinks
  .filter(link => link.href === document.documentURI)
  .filter(link => link.children.length === 0);
  currentLinks.forEach(link => {
    link.classList.add('current-page');
  });
})();

// START FANCY FRACTIONS

//negative lookbehinds are not widely implemented
//must grab fractions AND dates then eliminate dates
// (\d+\/\d+)(\/\d*)* matches dates AND fractions
// (\d+\/\d+)(\/\d*)+ matches  dates NOT fractions

const fractionEntites = {
  "1/2": "&frac12;",
  "1/3": "&frac13;",
  "1/4": "&frac14;",
  "1/5": "&frac15;",
  "1/6": "&frac16;",
  "1/7": "&frac17;",
  "1/8": "&frac18;",
  "2/3": "&frac23;",
  "2/5": "&frac25;",
  "3/4": "&frac34;",
  "3/5": "&frac35;",
  "3/8": "&frac38;",
  "4/5": "&frac45;",
  "5/6": "&frac56;",
  "5/8": "&frac58;",
  "7/8": "&frac78;",
}

function fakeFraction(numerator, denominator){
  return `<span class="fraction"><sup>${numerator}&frasl;${denominator}</sup></span>`
}

function returnNiceFraction(str){
  if(Object.keys(fractionEntites).includes(str)){
    return fractionEntites[str];
  } else {
    const nums = str.split('/');
    return fakeFraction(nums[0], nums[1])
  }
}

const ul = document.querySelectorAll('ul')[1];

function findFraction(node){
  const regex = /\d+\/\d+/g;
  return [...node.innerText.matchAll(regex)]
}

// END FANCY FRACTIONS
// START GLOSSARY TERMS EXPAND WITH ANCHOR

// onLoad AND on any <a></a> click inside <main></main>
// document.location.pathname === /concepts/kitchen-glossary/
//  && document.location.has IS NOT blank
//  get all details.
// match location.hash (silently fail) to details
// - terms are ids in kebab-case
// if (details.open === false){detail.open = true};

// END GLOSSARY TERMS EXPAND WITH ANCHOR
