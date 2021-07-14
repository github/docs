---
title: Codeblöcke erstellen und markieren
intro: 'Gib Codebeispiele mit Fenced-Code-Blöcken frei, und aktiviere die Syntaxmarkierung.'
redirect_from:
  - /articles/creating-and-highlighting-code-blocks
  - /github/writing-on-github/creating-and-highlighting-code-blocks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Fenced-Code-Blöcke

Um Fenced-Code-Blöcke zu erstellen, platziere dreifache Backticks <code>\`\`\`</code> vor und nach dem Codeblock. Wir empfehlen, eine leere Zeile vor und nach den Codeblöcken einzufügen, damit die Rohformatierung besser lesbar ist.

<pre>
```
function test() {
  console.log("notice the blank line before this function?");
}
```
</pre>

![Gerenderter Fenced-Code-Block](/assets/images/help/writing/fenced-code-block-rendered.png)

{% tip %}

**Tipp:** Um die Formatierung in einer Liste beizubehalten, achte darauf, die Nicht-Fenced-Code-Blöcke um acht Leerzeichen einzurücken.

{% endtip %}

To display triple backticks in a fenced code block, wrap them inside quadruple backticks.


<pre>
```` 
```
Look! You can see my backticks.
```
````
</pre>

![Rendered fenced code with backticks block](/assets/images/help/writing/fenced-code-show-backticks-rendered.png)


### Syntaxmarkierung

<!-- If you make changes to this feature, update /getting-started-with-github/github-language-support to reflect any changes to supported languages. -->

Du kannst einen optionalen Sprachkennzeichner hinzufügen, um die Syntaxmarkierung im Fenced-Code-Block zu aktivieren.

So sieht z. B. die Syntaxmarkierung des Ruby-Codes aus:

    ```ruby
    require 'redcarpet'
    markdown = Redcarpet.new("Hello World!")
    puts markdown.to_html
    puts markdown.to_html
    ```

![Gerenderter Code-Block mit Ruby-Syntaxmarkierung](/assets/images/help/writing/code-block-syntax-highlighting-rendered.png)

Wir nutzen [Linguist](https://github.com/github/linguist), um die Spracherkennung durchzuführen und [Drittanbieter-Grammatiken](https://github.com/github/linguist/blob/master/vendor/README.md) für die Syntaxmarkierung auszuwählen. In der [YAML-Sprachen-Datei](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml) findest Du gültige Stichworte.

### Weiterführende Informationen

- [{% data variables.product.prodname_dotcom %} Flavored Markdown – Spezifikation](https://github.github.com/gfm/)
- „[Grundlegende Schreib- und Formatierungssyntax](/articles/basic-writing-and-formatting-syntax)“
