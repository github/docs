---
title: Code-Blöcke erstellen und markieren
intro: 'Gib Codebeispiele mit Fenced-Code-Blöcken frei, und aktiviere die Syntaxmarkierung.'
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
ms.openlocfilehash: ba0b49795df16fbafc77ef43c6fef58684162709
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882417'
---
## Umgrenzte Codeblöcke

Um umgrenzte Codeblöcke zu erstellen, platzierst du dreifache Graviszeichen <code>\`\`\`</code> vor und hinter dem Codeblock. Wir empfehlen, eine leere Zeile vor und nach den Codeblöcken einzufügen, damit die Rohformatierung besser lesbar ist.

<pre>
```
function test() {
  console.log("notice the blank line before this function?");
}
```
</pre>

![Gerenderter Fenced-Code-Block](/assets/images/help/writing/fenced-code-block-rendered.png)

{% tip %}

**Tipp:** Um die Formatierung in einer Liste beizubehalten, musst du darauf achten, die nicht umgrenzten Codeblöcke um acht Leerzeichen einzurücken.

{% endtip %}

Um dreifache Graviszeichen in einem umgrenzten Codeblock anzuzeigen, musst du sie in vierfache Graviszeichen einschließen.


<pre>
````
```
Look! You can see my backticks.
```
````
</pre>

![Gerenderter umgrenzter Codeblock mit Graviszeichen](/assets/images/help/writing/fenced-code-show-backticks-rendered.png)

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## Syntaxhervorhebung

<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

Du kannst einen optionalen Sprachkennzeichner hinzufügen, um die Syntaxmarkierung im Fenced-Code-Block zu aktivieren.

So sieht z. B. die Syntaxmarkierung des Ruby-Codes aus:

    ```ruby
    require 'redcarpet'
    markdown = Redcarpet.new("Hello World!")
    puts markdown.to_html
    ```

![Gerenderter Code-Block mit Ruby-Syntaxmarkierung](/assets/images/help/writing/code-block-syntax-highlighting-rendered.png)

Wir verwenden [Linguist](https://github.com/github/linguist) zum Ausführen der Spracherkennung und zum Auswählen von [Grammatiken von Drittanbietern](https://github.com/github/linguist/blob/master/vendor/README.md) für die Syntaxhervorhebung. Die gültigen Schlüsselwörter findest du in [der YAML-Datei der Sprache](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml).

{% ifversion mermaid %}
## Erstellen von Diagrammen

Du kannst auch Codeblöcke verwenden, um Diagramme in Markdown zu erstellen. GitHub unterstützt Mermaid-, GeoJSON-, TopoJSON- und ASCII STL-Syntax. Weitere Informationen findest du unter [Erstellen von Diagrammen](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams).

{% endif %}
## Weiterführende Themen

- [{% data variables.product.prodname_dotcom %} Flavored Markdown – Spezifikation](https://github.github.com/gfm/)
- [Grundlegende Schreib- und Formatierungssyntax](/articles/basic-writing-and-formatting-syntax)
