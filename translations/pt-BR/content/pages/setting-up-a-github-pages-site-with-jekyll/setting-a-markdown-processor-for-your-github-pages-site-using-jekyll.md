---
title: Definir um processador markdown para seu site do GitHub Pages usando o Jekyll
intro: 'Você pode escolher um processador markdown para determinar como o markdown é renderizado no site do {% data variables.product.prodname_pages %}.'
redirect_from:
  - /articles/migrating-your-pages-site-from-maruku
  - /articles/updating-your-markdown-processor-to-kramdown
  - /articles/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll
  - /github/working-with-github-pages/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Set Markdown processor
ms.openlocfilehash: 218877ee598afd47352d1e72a2ecb845f901c8b9
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145127608'
---
Pessoas com permissões de gravação para um repositório podem definir um processador markdown para um site do {% data variables.product.prodname_pages %}.

O {% data variables.product.prodname_pages %} dá suporte a dois processadores Markdown: o [kramdown](http://kramdown.gettalong.org/) e o próprio processador Markdown do {% data variables.product.prodname_dotcom %}, que é usado para renderizar o [GFM ({% data variables.product.prodname_dotcom %} Flavored Markdown)](https://github.github.com/gfm/) no {% data variables.product.product_name %}. Para obter mais informações, confira "[Sobre a gravação e a formatação no {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github)".

Você pode usar o Markdown enriquecido de {% data variables.product.prodname_dotcom %} com qualquer um dos processadores, mas apenas o nosso processador de GFM sempre corresponderá aos resultados que você vê em {% data variables.product.product_name %}.

{% data reusables.pages.navigate-site-repo %}
2. No repositório, procure o arquivo *_config.yml*.
{% data reusables.repositories.edit-file %}
4. Localize a linha que começa com `markdown:` e altere o valor para `kramdown` ou `GFM`.
  ![Configuração Markdown em config.yml](/assets/images/help/pages/config-markdown-value.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## Leitura adicional

- [Documentação do kramdown](https://kramdown.gettalong.org/documentation.html)
- [Especificações do {% data variables.product.prodname_dotcom %} Flavored Markdown](https://github.github.com/gfm/)
