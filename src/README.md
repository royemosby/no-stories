# Super-simple [eleventy](https://eleventy.io) template

- Repo set up as GitHub template so that it does not have to be cloned
- Configured with brochure site in mind
- Biased towards Liquid templates but painless to change
- Gulp used to process SASS

## To use

1. Choose green ["Use this template"](https://github.com/egomadking/11ty-template/generate) button to generate a new repo using this one as a template.
2. Clone or download resulting repo to desktop.
3. Navigate to the base directory with your chosen terminal emulator.
4. Type `npm install` to install modules needed to run eleventy. Install takes about 30 seconds depending on internet speed.
5. Spend a little time with [eleventy's documentation](https://www.11ty.io/docs/) to get a feel for how it works- especially templating and front matter data.
6. Edit away!
7. Use the terminal command `npx @11ty/eleventy` to run eleventy's generation process. This will create a `_site` directory with all the ready-to-use artifacts of static site.<sup>1</sup>
8. Or use `npm run develop` to spin up a [browser-sync](https://browsersync.io/) server which auto-refreshes your browser page as you edit your files. 🕶️

## To-do

- SASS variables
- add "deploy" process that optimizes files
  - postcss to strip unused styles, uglify css, and insert above-the-fold styles
  - Transpilation, uglification of js
- Spin off version with blogging in mind

---

## Footnotes

1: Running `npx @11ty/eleventy` only overwrites existing content. If a resource such as a picture is removed from a project, eleventy does not delete the picture from where ever it is in the `_site` directory. The easiest way clean things up prior to deployment is to delete the complete `_site` directory and re-build.
