> Note: This theme isn't published. It serves as the master "template" for all DuoTone themes.

# DuoTone Syntax (master)

A double-hue syntax theme for Atom.

<!-- Don't forget to update the screenshot -->
![DuoTone Theme](https://github.com/simurai/duotone-syntax/raw/master/docs/screenshot.png)

DuoTone themes use only 2 hues (8 shades in total). It __tones down__ less important parts (like punctuation and brackets) and highlights only the __important__ ones. This leads to a more calm color scheme, but still lets you find the stuff you're looking for.

## Language support

DuoTone themes are optimized for many languages:

> C, Clojure, CoffeeScript, C#, CSS, GF Markdown, Go, Haskell, HTML, Java, JavaScript, JSON, Less, Perl, PHP, Python, Ruby, SASS, SCSS, Stylus, XML, YAML...

See the list of [all languages](/styles/languages).


## Variations

Here a list of all [DuoTone themes](https://atom.io/themes/search?utf8=%E2%9C%93&q=keyword:duotone). Or at least the ones that have the `duotone` keyword added. :grin:


## Create your own DuoTone theme

Follow the short guide how to create your own DuoTone version.

1. Clone this repo.
2. Rename it (folder, package.json, etc).
3. Change the colors in `styles/colors.less`.
4. Publish!

Optionally, also update the `docs`. It's a page with all colors and some sample code. It can be used as a GitHub Page, when the `/docs` folder is enabled in the repo settings.

1. Run `docs/update.sh` to update the theme colors.
2. Replace the `xxx` in `docs/index.html` with your own user and theme name.
3. Take a screenshot and replace (`docs/screenshot.png`) with your version.

For more help, feel free to open a new issue.
