---
title: Crear y resaltar bloques de código
intro: Compartir muestras de código con bloques de código cercados y habilitar el resaltado de la sintaxis
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882421'
---
## Bloques de código delimitados

Puede crear bloques de código delimitados colocando comillas simples triples <code>\`\`\`</code> antes y después del bloque de código. Te recomendamos dejar una línea en blanco antes y después de los bloques de código para facilitar la lectura del formato sin procesar.

<pre>
```
function test() {
  console.log("notice the blank line before this function?");
}
```
</pre>

![Bloque de código cercado representado](/assets/images/help/writing/fenced-code-block-rendered.png)

{% tip %}

**Sugerencia**: Para preservar su formato en una lista, asegúrese de dejar una sangría de ocho espacios en los bloques de código no delimitados.

{% endtip %}

Para mostrar las comillas simples triples en un bloque de código cercado, enciérralas en comillas simples cuádruples.


<pre>
````
```
Look! You can see my backticks.
```
````
</pre>

![Código cercado interpretado con un bloque de comillas inversas](/assets/images/help/writing/fenced-code-show-backticks-rendered.png)

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## Resaltado de sintaxis

<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

Puedes agregar un identificador opcional de idioma para habilitar el resaltado de la sintaxis en tu bloque de código cercado.

Por ejemplo, para resaltar la sintaxis del código Ruby:

    ```ruby
    require 'redcarpet'
    markdown = Redcarpet.new("Hello World!")
    puts markdown.to_html
    ```

![Bloque de código cercado representado con sintaxis de Ruby resaltada](/assets/images/help/writing/code-block-syntax-highlighting-rendered.png)

Usamos [Linguist](https://github.com/github/linguist) (Lingüista) para realizar la detección de idioma y seleccionar [gramáticas de terceros](https://github.com/github/linguist/blob/master/vendor/README.md) para el resaltado de sintaxis. Puede averiguar qué palabras clave son válidas en [el archivo YAML de idiomas](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml).

{% ifversion mermaid %}
## Crear diagramas

También puede usar bloques de código para crear diagramas en Markdown. GitHub admite la sintaxis Mermaid, GeoJSON, TopoJSON y STL ASCII. Para obtener más información, vea "[Crear diagramas](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams)".

{% endif %}
## Información adicional

- [Especificación de {% data variables.product.prodname_dotcom %} Flavored Markdown](https://github.github.com/gfm/)
- "[Sintaxis de escritura y formato básicos](/articles/basic-writing-and-formatting-syntax)"
