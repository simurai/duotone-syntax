> Note: This theme isn't published. It serves as the master "template" for all DuoTone themes.

# DuoTone Syntax (master)

A double-hue syntax theme for Atom.

![duotone](https://cloud.githubusercontent.com/assets/378023/11769688/753483be-a230-11e5-9193-51db5e77ce6b.png)

DuoTone themes use only 2 hues (7 shades in total). It __tones down__ less important parts (like punctuation and brackets) and highlights only the __important__ ones. This leads to a more calm color scheme, but still lets you find the stuff you're looking for.


## Language support

DuoTone themes are optimized for many languages:

> C, Clojure, CoffeeScript, C#, CSS, GF Markdown, Go, Haskell, HTML, Java, JavaScript, JSON, Less, Perl, PHP, Python, Ruby, SASS, SCSS, Stylus, XML, YAML...

More optimizations to come. See the growing list of [all languages](/styles/languages).


## Variations

Here a list with [all DuoTone themes](https://atom.io/themes/search?utf8=%E2%9C%93&q=keyword:duotone). Or at least the ones that have the `duotone` keyword added. :grin:


## Create your own DuoTone theme

Here a guide how to create your own DuoTone version.

1. Clone this repo.
2. Rename it (folder, package.json, etc).
3. Change the colors in `styles/colors.less`.
4. Publish!

Here the [Sketch template](https://github.com/simurai/duotone-syntax/files/106441/DuoTone.zip) to create screenshots.


## Keep your DuoTone theme up to date

You can always watch this repo to get notified about changes and manually apply or cherry pick them into your theme too.

Or once in while, just pull the latest version of this repo and drop it onto your theme. Then commit everything except

- `styles/colors.less`
- `LICENSE`
- `package.json`
- `README.md`

Of course, if you make changes to one of the other files (like `styles/syntax-variables.less`) it will be overridden. So you might wanna make a note which files got customized. Upstream contributions are very welcomed too.
