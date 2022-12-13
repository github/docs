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
shortTitle: Write & format on GitHub
ms.openlocfilehash: 7819ebc6bbf3ffa8696c87f82745a19c103c8134
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147860831'
---
[Markdown](http://daringfireball.net/projects/markdown/) é uma sintaxe fácil de ler e de gravar para formatar textos sem formatação.

Adicionamos algumas funcionalidades personalizadas para criar o markdown em estilo {% data variables.product.prodname_dotcom %}, usadas para formatar prosa e código em nosso site.

Você também pode interagir com outros usuários em solicitações de pull e problemas usando recursos como [@mentions](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams), [referências de problemas e de RP](/articles/basic-writing-and-formatting-syntax/#referencing-issues-and-pull-requests) e [emojis](/articles/basic-writing-and-formatting-syntax/#using-emoji).

## Barra de ferramentas de formatação de texto

Cada campo de comentário no {% data variables.product.product_name %} contém uma barra de ferramentas de formatação de texto, permitindo que você formate texto sem precisar aprender a sintaxe markdown. Além da formatação Markdown, como estilos em negrito e itálico e criação de cabeçalhos, links e listas, a barra de ferramentas inclui recursos específicos do {% data variables.product.product_name %}, como @mentions, listas de tarefas e links para problemas e solicitações de pull.

{% ifversion fixed-width-font-gfm-fields %}

## Habilitando fontes de largura fixa no editor

Você pode habilitar uma fonte de largura fixa em cada campo de comentário em {% data variables.product.product_name %}. Cada caractere em uma largura fixa, ou em monoespaço, a fonte ocupa o mesmo espaço horizontal que pode facilitar a edição de estruturas avançadas de Markdown, como tabelas e trechos de código.

![Captura de tela que mostra o campo comentário de {% data variables.product.product_name %} com as fontes de largura fixa habilitadas](/assets/images/help/writing/fixed-width-example.png)

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.appearance-settings %}
1. Em "Preferência de fonte do editor Markdown", selecione **Usar uma fonte de largura fixa (com espaçamento uniforme) ao editar Markdown**.
  ![Captura de tela que mostra o campo de comentário do {% data variables.product.product_name %} com as fontes de largura fixa habilitadas](/assets/images/help/writing/enable-fixed-width.png)

{% endif %}

## Leitura adicional

- [Especificações do {% data variables.product.prodname_dotcom %} Flavored Markdown](https://github.github.com/gfm/)
- "[Sintaxe básica de escrita e formatação](/articles/basic-writing-and-formatting-syntax)"
- "[Como trabalhar com formatação avançada](/articles/working-with-advanced-formatting)"
