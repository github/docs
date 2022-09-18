---
title: Criar e realçar blocos de código
intro: Compartilhe amostras de código com blocos de código protegidos e habilite o realce de sintaxe.
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882414'
---
## Blocos de código isolados

Você pode criar blocos de código isolados colocando acentos graves triplos <code>\`\`\`</code> antes e depois do bloco de código. É recomendável colocar uma linha em branco antes e depois dos blocos de código para facilitar a leitura da formação bruta.

<pre>
```
function test() {
  console.log("notice the blank line before this function?");
}
```
</pre>

![Bloco de código isolado renderizado](/assets/images/help/writing/fenced-code-block-rendered.png)

{% tip %}

**Dica:** para preservar sua formatação em uma lista, recue os blocos de código não isolados em oito espaços.

{% endtip %}

Para mostrar aspas tripas em um bloco de código isolado, envolva-os dentro de aspas quádruplas.


<pre>
````
```
Look! You can see my backticks.
```
````
</pre>

![Código isolado interpretado como um bloco de aspas inversas](/assets/images/help/writing/fenced-code-show-backticks-rendered.png)

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## Realce de sintaxe

<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

Você pode adicionar um identificador de linguagem opcional para habilitar o realce de sintaxe no bloco de código isolado.

Por exemplo, para código Ruby do realce de sintaxe:

    ```ruby
    require 'redcarpet'
    markdown = Redcarpet.new("Hello World!")
    puts markdown.to_html
    ```

![Bloco de código renderizado com realce de sintaxe Ruby](/assets/images/help/writing/code-block-syntax-highlighting-rendered.png)

Usamos o [Linguist](https://github.com/github/linguist) para executar a detecção de linguagem e selecionar [gramáticas de terceiros](https://github.com/github/linguist/blob/master/vendor/README.md) para realce da sintaxe. Descubra as palavras-chave válidas no [arquivo YAML de linguagens](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml).

{% ifversion mermaid %}
## Criando diagramas

Você também pode usar blocos de código para criar diagramas em Markdown. O GitHub dá suporte às sintaxes Mermaid, GeoJSON, TopoJSON e ASCII STL. Para obter mais informações, confira "[Como criar diagramas](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams)".

{% endif %}
## Leitura adicional

- [Especificações do {% data variables.product.prodname_dotcom %} Flavored Markdown](https://github.github.com/gfm/)
- "[Sintaxe básica de escrita e formatação](/articles/basic-writing-and-formatting-syntax)"
