---
title: Création et mise en évidence de blocs de code
intro: Partagez des échantillons de code avec des blocs de code clôturés et en activant la coloration syntaxique.
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882416'
---
## Blocs de code délimités

Vous pouvez créer des blocs de code délimités en insérant trois barres obliques inverses <code>\`\`\`</code> avant et après le bloc de code. Nous vous recommandons d’insérer une ligne vide avant et après les blocs de code pour faciliter la lecture de la mise en forme brute.

<pre>
```
function test() {
  console.log("notice the blank line before this function?");
}
```
</pre>

![Bloc de code délimité rendu](/assets/images/help/writing/fenced-code-block-rendered.png)

{% tip %}

**Astuce :** pour conserver votre mise en forme dans une liste, veillez à mettre les blocs de code non délimités en retrait de huit espaces.

{% endtip %}

Pour afficher trois barres obliques inverses dans un bloc de code délimité, encapsulez-les à l’intérieur de quatre barres obliques inverses.


<pre>
````
```
Look! You can see my backticks.
```
````
</pre>

![Code délimité rendu avec un bloc de barres obliques inverses](/assets/images/help/writing/fenced-code-show-backticks-rendered.png)

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## Mise en surbrillance de la syntaxe

<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

Vous pouvez ajouter un identificateur de langue facultatif pour activer la mise en évidence de la syntaxe dans votre bloc de code délimité.

Par exemple, pour mettre en évidence la syntaxe de code Ruby :

    ```ruby
    require 'redcarpet'
    markdown = Redcarpet.new("Hello World!")
    puts markdown.to_html
    ```

![Bloc de code rendu avec mise en évidence de la syntaxe de Ruby](/assets/images/help/writing/code-block-syntax-highlighting-rendered.png)

Nous utilisons [Linguist](https://github.com/github/linguist) pour détecter la langue et sélectionner des [grammaires tierces](https://github.com/github/linguist/blob/master/vendor/README.md) pour la mise en évidence de la syntaxe. Vous trouverez les mots clés valides dans le [fichier YAML des langages](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml).

{% ifversion mermaid %}
## Création de diagrammes

Vous pouvez également utiliser des blocs de code pour créer des diagrammes dans Markdown. GitHub prend en charge la syntaxe Mermaid, GeoJSON, TopoJSON et ASCII STL. Pour plus d’informations, consultez « [Création de diagrammes](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams) ».

{% endif %}
## Pour aller plus loin

- [Spécification Markdown saveur {% data variables.product.prodname_dotcom %}](https://github.github.com/gfm/)
- « [Syntaxe de base pour l’écriture et la mise en forme ](/articles/basic-writing-and-formatting-syntax) »
