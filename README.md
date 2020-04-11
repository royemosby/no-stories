# No stories, just recipes

## Development

### Directory tree

```plaintext
|-_site                    ###files for deployment
|-src/
  |-_includes/             ###template files
  |-concepts/              ###posts relating to cooking concepts
    |-kitchen-glossary/    ###sub-posts for definitions
  |-icons/
  |-images/
  |-sass/                  ###scss files broken down from general to specific
    |-defaults/            ###border-box and normalize
  |-scripts/
  |-styles/                ###compiled css that gets copied to _site
|-.eleventy.js             ###Eleventy SSG config
|-.gitignore
|-gulpfile.js              ###primarily to process scss
|-LICENSE                  ###all files MIT unless otherwise stated in front-matter
|-package-lock.json
|-package.json
|-README.md
```

### Current configs

- addPassthruCopy: icons, images, styles, js
- setDataDeepMerge(true) [11ty's docs ↗️](https://www.11ty.dev/docs/data-deep-merge/)
- using markdown-it and markdown-it-footnote
- customized collection that front-loads pinned material in the concepts section.

### Installation

After cloning repo, run `npm install` and wait for all node modules to be installed.

### Commands

```bash
npm run test #hello world equivalent
npm run develop #provides a server and live-rebuild environment on localhost:8080
npm run debug #runs DEBUG; uses globally installed debug package that spits out diagnostic info on the build process and any errors encountered
```

## Blogging

### Front matter

Defaults found in their respective data file are shown in place. These terms do not have to be included in the front matter since 11ty's templating engine does this automatically. Types in comment as needed. I also have 11ty's `setDataDeepMerge(true)` so that nested collections inherit key-value pairs instead of overwriting them.

#### Recipe

```yaml
---
title: //string
description: //string
date: Last Modified
layout: post.liquid
tags: ['posts', 'concepts']
sourceTitle: //optional string
sourceURL: //optional URL
sourceLicense:
  license: //optional string
  URL: //optional URL
---

```

#### Concept

```yaml
---
title: //string
description: //string
date: Last Modified
layout: post.liquid
tags: ['posts', 'recipes']
sourceTitle: //optional string
sourceURL: //optional URL
sourceLicense:
  license: //optional string
  URL: //optional URL
---

```

#### Definition

```yaml
---
title: //string
description: //string
date: Last Modified
layout: post.liquid
permalink: false
tags: ['posts', 'recipes', 'definitions']
sourceTitle: //optional string
sourceURL: //optional URL
sourceLicense:
  license: //optional string
  URL: //optional URL
---

```

### Inlining illustrations

This site nests illustrations inside the list items they support. This allows me to style the image without having to inline HTML in the markdown document. Images should appear before any words on the list item. This approach is not perfect because it does not take into account multiple pictures in close proximation of each other. Should it become a problem, it will be changed.

## TODO

- Alphabetize glossary
- Consider search
- About: this site
- How to do recipe change logs?
- Optionally link to cited source instead of always (forced to use anchor placeholder)
- Optionally link to license instead of always
- tags ftw
