---
title: Criar e realçar blocos de código
intro: Compartilhe amostras de código com blocos de código isolados e habilitando o realce da sintaxe.
redirect_from:
  - /articles/creating-and-highlighting-code-blocks
  - /github/writing-on-github/creating-and-highlighting-code-blocks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
### Blocos de código isolados

Você pode criar blocos de código isolados colocando aspas triplas <code>\`\`\`</code> antes e depois do bloco de código. É recomendável colocar uma linha em branco antes e depois dos blocos de código para facilitar a leitura da formação bruta.

<pre>
```
function test() {
  console.log("notice the blank line before this function?");
}
```
</pre>

![Bloco de código isolado renderizado](/assets/images/help/writing/fenced-code-block-rendered.png)

{% tip %}

**Dica:** para preservar sua formatação em uma lista, certifique-se de recuar blocos de código não isolados em oito espaços.

{% endtip %}

### Realce de sintaxe
<!-- If you make changes to this feature, update /getting-started-with-github/github-language-support to reflect any changes to supported languages. -->

Você pode adicionar um identificador de linguagem opcional para habilitar o realce de sintaxe no bloco de código isolado.

Por exemplo, para código Ruby do realce de sintaxe:

    ```ruby
    require 'redcarpet'
    markdown = Redcarpet.new("Hello World!")
    puts markdown.to_html
    coloca markdown.to_html
    ```

![Bloco de código renderizado com realce de sintaxe Ruby](/assets/images/help/writing/code-block-syntax-highlighting-rendered.png)

Usamos [Linguist](https://github.com/github/linguist) para executar a detecção de linguagem e selecionar [gramáticas de terceiros](https://github.com/github/linguist/blob/master/vendor/README.md) para realce de sintaxe. Você pode descobrir quais palavras-chave são válidas no [arquivo YAML de linguagem](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml).

### Leia mais

- [Especificações de markdown em estilo {% data variables.product.prodname_dotcom %}](https://github.github.com/gfm/)
- "[Sintaxe básica de gravação e formatação](/articles/basic-writing-and-formatting-syntax)"
