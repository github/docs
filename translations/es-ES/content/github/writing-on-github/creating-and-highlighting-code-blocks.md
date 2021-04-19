---
title: Crear y resaltar bloques de código
intro: Compartir muestras de código con bloques de código cercados y habilitar el resaltado de la sintaxis
redirect_from:
  - /articles/creating-and-highlighting-code-blocks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Bloques de código cercados

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

### Resaltado de la sintaxis

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

### Leer más

- [{% data variables.product.prodname_dotcom %} Especificaciones del formato Markdown](https://github.github.com/gfm/)
- [Sintaxis de escritura y formato básicos](/articles/basic-writing-and-formatting-syntax)"
