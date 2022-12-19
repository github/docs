---
title: Criar uma página 404 para o site do GitHub Pages
intro: Você pode exibir uma página de erro 404 personalizada quando as pessoas tentam acessar páginas não existentes no seu site.
redirect_from:
  - /articles/custom-404-pages
  - /articles/creating-a-custom-404-page-for-your-github-pages-site
  - /github/working-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Create custom 404 page
ms.openlocfilehash: 1b10946277d90773b847b929d85a3b6cf8212a4e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880562'
---
{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %} {% data reusables.files.add-file %}
3. No campo Nome do arquivo, insira `404.html` ou `404.md`.
  ![Campo Nome de arquivo](/assets/images/help/pages/404-file-name.png)
4. Se você deu ao arquivo o nome `404.md`, adicione o seguinte front matter YAML no começo do arquivo:
  ```yaml
  ---
  permalink: /404.html
  ---
  ```
5. Abaixo da página inicial YAML, se houver, adicione o conteúdo que deseja exibir na página 404.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## Leitura adicional

- [Front matter](http://jekyllrb.com/docs/frontmatter) na documentação do Jekyll
