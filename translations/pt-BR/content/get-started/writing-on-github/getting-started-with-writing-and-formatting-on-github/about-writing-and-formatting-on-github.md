---
title: Sobre gravação e formatação no GitHub
intro: O GitHub combina uma sintaxe para formatar texto chamada markdown em estilo GitHub com alguns recursos de escrita exclusivos.
redirect_from:
  - /articles/about-writing-and-formatting-on-github
  - /github/writing-on-github/about-writing-and-formatting-on-github
  - /github/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Escrever & formatar no GitHub
---

[Markdown](http://daringfireball.net/projects/markdown/) é uma sintaxe de leitura e gravação fáceis para formatação de texto sem formatação.

Adicionamos algumas funcionalidades personalizadas para criar o markdown em estilo {% data variables.product.prodname_dotcom %}, usadas para formatar prosa e código em nosso site.

Você também pode interagir com outros usuários em pull requests e problemas usando recursos como [@menções](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams), [referências a problemas e pull request](/articles/basic-writing-and-formatting-syntax/#referencing-issues-and-pull-requests) e [emoji](/articles/basic-writing-and-formatting-syntax/#using-emoji).

## Barra de ferramentas de formatação de texto

Cada campo de comentário no {% data variables.product.product_name %} contém uma barra de ferramentas de formatação de texto, permitindo que você formate texto sem precisar aprender a sintaxe markdown. Além da formatação markdown, como os estilos negrito e itálico e criação de headers, links e listas, a barra de ferramentas inclui recursos específicos do {% data variables.product.product_name %}, como @menções, listas de tarefas e links para problemas e pull requests.

{% ifversion fixed-width-font-gfm-fields %}

## Habilitando fontes de largura fixa no editor

Você pode habilitar uma fonte de largura fixa em cada campo de comentário em {% data variables.product.product_name %}. Cada caractere em uma largura fixa, ou em monoespaço, a fonte ocupa o mesmo espaço horizontal que pode facilitar a edição de estruturas avançadas de Markdown, como tabelas e trechos de código.

![Captura de tela que mostra o campo comentário de {% data variables.product.product_name %} com as fontes de largura fixa habilitadas](/assets/images/help/writing/fixed-width-example.png)

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.appearance-settings %}
1. Em "Preferência do editor Markdown, selecione **Usar uma fonte de largura fixa (monospace) ao editar o Markdown**. ![Captura de tela que mostra o campo comentário de {% data variables.product.product_name %} com as fontes de largura fixa habilitadas](/assets/images/help/writing/enable-fixed-width.png)

{% endif %}

## Leia mais

- [Especificações de markdown em estilo {% data variables.product.prodname_dotcom %}](https://github.github.com/gfm/)
- "[Sintaxe básica de gravação e formatação](/articles/basic-writing-and-formatting-syntax)"
- "[Trabalhar com formatação avançada](/articles/working-with-advanced-formatting)"
- "[Dominar o markdown](https://guides.github.com/features/mastering-markdown/)"
