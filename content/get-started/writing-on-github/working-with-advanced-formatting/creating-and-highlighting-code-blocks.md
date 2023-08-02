---
title: Creating and highlighting code blocks
intro: Share samples of code with fenced code blocks and enabling syntax highlighting.
redirect_from:
  - /articles/creating-and-highlighting-code-blocks
  - /github/writing-on-github/creating-and-highlighting-code-blocks
  - /github/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Create code blocks
---

## Fenced code blocks

You can create fenced code blocks by placing triple backticks <code>\`\`\`</code> before and after the code block. We recommend placing a blank line before and after code blocks to make the raw formatting easier to read.

<pre>
```
function test() {
  console.log("notice the blank line before this function?");
}
```
</pre>

![Screenshot of rendered {% data variables.product.prodname_dotcom %} Markdown showing how triple backticks cause a code block to render in raw formatting. The block begins with "function test() {."](/assets/images/help/writing/fenced-code-block-rendered.png)

{% tip %}

**Tip:** To preserve your formatting within a list, make sure to indent non-fenced code blocks by eight spaces.

{% endtip %}

To display triple backticks in a fenced code block, wrap them inside quadruple backticks.

<pre>
````
```
Look! You can see my backticks.
```
````
</pre>

![Screenshot of rendered {% data variables.product.prodname_dotcom %} Markdown showing how quadruple backticks cause triple backticks surrounding a code block to remain visible. The block reads, "Look! You can see my backticks."](/assets/images/help/writing/fenced-code-show-backticks-rendered.png)

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## Syntax highlighting

<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

You can add an optional language identifier to enable syntax highlighting in your fenced code block.

Syntax highlighting changes the color and style of source code to make it easier to read.

For example, to syntax highlight Ruby code:

    ```ruby
    require 'redcarpet'
    markdown = Redcarpet.new("Hello World!")
    puts markdown.to_html
    ```

This will display the code block with syntax highlighting:  

![Screenshot of three lines of Ruby code as displayed on {% data variables.product.prodname_dotcom %}. Elements of the code display in purple, blue, and red type, making the lines more visually scannable.](/assets/images/help/writing/code-block-syntax-highlighting-rendered.png)

We use [Linguist](https://github.com/github-linguist/linguist) to perform language detection and to select [third-party grammars](https://github.com/github-linguist/linguist/blob/master/vendor/README.md) for syntax highlighting. You can find out which keywords are valid in [the languages YAML file](https://github.com/github-linguist/linguist/blob/master/lib/linguist/languages.yml).

{% ifversion mermaid %}

## Creating diagrams

You can also use code blocks to create diagrams in Markdown. GitHub supports Mermaid, GeoJSON, TopoJSON, and ASCII STL syntax. For more information, see "[AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams)."

{% endif %}

## Further reading

- [{% data variables.product.prodname_dotcom %} Flavored Markdown Spec](https://github.github.com/gfm/)
- "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)"
