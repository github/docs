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
shortTitle: Crear bloques de código
---

## Bloques de código cercados

Puedes crear bloques de código cercados al colocar comillas simples triples <code>\`\`\`</code> antes y después del bloque de código. Te recomendamos dejar una línea en blanco antes y después de los bloques de código para facilitar la lectura del formato sin procesar.

<pre>
```
function test() {
  console.log("notice the blank line before this function?");
}
```
</pre>

![Bloque de código cercado representado](/assets/images/help/writing/fenced-code-block-rendered.png)

{% tip %}

**Sugerencia:** Para preservar tu formato en una lista, asegúrate de dejar una sangría de ocho espacios para los bloques de código no cercados.

{% endtip %}

Para mostrar las comillas simples triples en un bloque de código cercado, enciérralas en comillas simples cuádruples.


<pre>
````
```
Look! Puedes ver mis comillas inversas.
```
````
</pre>

![Código cercado interpretado con un bloque de comillas inversas](/assets/images/help/writing/fenced-code-show-backticks-rendered.png)

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## Resaltado de la sintaxis

<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

Puedes agregar un identificador opcional de idioma para habilitar el resaltado de la sintaxis en tu bloque de código cercado.

Por ejemplo, para resaltar la sintaxis del código Ruby:

    ```ruby
    require 'redcarpet'
    markdown = Redcarpet.new("Hello World!")
    puts markdown.to_html
    puts markdown.to_html
    ```

![Bloque de código cercado representado con sintaxis de Ruby resaltada](/assets/images/help/writing/code-block-syntax-highlighting-rendered.png)

Usamos [Lingüista](https://github.com/github/linguist) para realizar la detección del idioma y seleccionar [gramáticas independientes](https://github.com/github/linguist/blob/master/vendor/README.md) para el resaltado de la sintaxis. Puedes conocer las palabra clave válidas en [el archivo YAML de idiomas](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml).

{% ifversion mermaid %}
## Crear diagramas

También puedes usar bloques de código para crear diagramas en el lenguaje de marcado. GitHub es compatible con la sintaxis de Mermaid, geoJSON, topoJSON y ASCII STL. Para obtener más información, consulta la sección "[Crear diagramas](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams)".

{% endif %}
## Leer más

- [{% data variables.product.prodname_dotcom %} Especificaciones del formato Markdown](https://github.github.com/gfm/)
- "[Sintaxis de escritura y formato básicos](/articles/basic-writing-and-formatting-syntax)"
