---
title: Creating and highlighting code blocks
intro: Share samples of code with fenced code blocks and enabling syntax highlighting.
product: '{% data reusables.gated-features.markdown-ui %}'
redirect_from:
  - /articles/creating-and-highlighting-code-blocks
  - /github/writing-on-github/creating-and-highlighting-code-blocks
  - /github/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Create code blocks
---

## Fenced code blocks

You can create fenced code blocks by placing triple backticks <code>\`\`\`</code> before and after the code block. We recommend placing a blank line before and after code blocks to make the raw formatting easier to read.

````text
```
function test() {
  console.log("notice the blank line before this function?");
}
```
````

![Screenshot of rendered {% data variables.product.github %} Markdown showing the use of triple backticks to create code blocks. The block begins with "function test() {."](/assets/images/help/writing/fenced-code-block-rendered.png)

> [!TIP]
> To preserve your formatting within a list, make sure to indent non-fenced code blocks by eight spaces.

To display triple backticks in a fenced code block, wrap them inside quadruple backticks.

`````text
````
```
Look! You can see my backticks.
```
````
`````

![Screenshot of rendered Markdown showing that when you write triple backticks between quadruple backticks they are visible in the rendered content.](/assets/images/help/writing/fenced-code-show-backticks-rendered.png)

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## Syntax highlighting

<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

You can add an optional language identifier to enable syntax highlighting in your fenced code block.

Syntax highlighting changes the color and style of source code to make it easier to read.

For example, to syntax highlight Ruby code:

````text
```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```
````

This will display the code block with syntax highlighting:

![Screenshot of three lines of Ruby code as displayed on {% data variables.product.prodname_dotcom %}. Elements of the code display in purple, blue, and red type for scannability.](/assets/images/help/writing/code-block-syntax-highlighting-rendered.png)

> [!TIP]
> When you create a fenced code block that you also want to have syntax highlighting on a GitHub Pages site, use lower-case language identifiers. For more information, see [AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll#syntax-highlighting).

We use [Linguist](https://github.com/github-linguist/linguist) to perform language detection and to select [third-party grammars](https://github.com/github-linguist/linguist/blob/main/vendor/README.md) for syntax highlighting. You can find out which keywords are valid in [the languages YAML file](https://github.com/github-linguist/linguist/blob/main/lib/linguist/languages.yml).

## Creating diagrams

You can also use code blocks to create diagrams in Markdown. GitHub supports Mermaid, GeoJSON, TopoJSON, and ASCII STL syntax. For more information, see [AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams).

## Further reading

* [{% data variables.product.prodname_dotcom %} Flavored Markdown Spec](https://github.github.com/gfm/)
* [AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
