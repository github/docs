---
title: Testar o site do GitHub Pages localmente com o Jekyll
intro: 'Você pode criar o site do {% data variables.product.prodname_pages %} localmente para visualizar e testar as alterações nele.'
redirect_from:
  - /articles/setting-up-your-pages-site-locally-with-jekyll
  - /articles/setting-up-your-github-pages-site-locally-with-jekyll
  - /articles/testing-your-github-pages-site-locally-with-jekyll
  - /github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Test site locally with Jekyll
ms.openlocfilehash: 9db3a964ee38afa191f7fed31cfa032128460f48
ms.sourcegitcommit: 3268914369fb29540e4d88ee5e56bc7a41f2a60e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/26/2022
ms.locfileid: '148111301'
---
Qualquer pessoa com permissões de leitura para um repositório pode testar um site do {% data variables.product.prodname_pages %} localmente.

## Pré-requisitos

Antes de usar o Jekyll para testar um site, você deve:
  - Instalar o [Jekyll](https://jekyllrb.com/docs/installation/).
  - Criar um site do Jekyll. Para obter mais informações, confira "[Como criar um site do {% data variables.product.prodname_pages %} com o Jekyll](/articles/creating-a-github-pages-site-with-jekyll)".

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

## Criar site localmente

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.pages.navigate-publishing-source %}
3. Execute `bundle install`.
3. Execute o site do Jekyll localmente.
  ```shell
  $ bundle exec jekyll serve
  > Configuration file: /Users/octocat/my-site/_config.yml
  >            Source: /Users/octocat/my-site
  >       Destination: /Users/octocat/my-site/_site
  > Incremental build: disabled. Enable with --incremental
  >      Generating...
  >                    done in 0.309 seconds.
  > Auto-regeneration: enabled for '/Users/octocat/my-site'
  > Configuration file: /Users/octocat/my-site/_config.yml
  >    Server address: http://127.0.0.1:4000/
  >  Server running... press ctrl-c to stop.
  ```
  {% note %}

  **Observação:** se você instalou o Ruby 3.0 ou posterior (o que pode ter ocorrido se a versão padrão foi instalada pelo Homebrew), um erro poderá ser gerado nesta etapa. Isso ocorre porque essas versões do Ruby não vêm mais com o `webrick` instalado.
  
  Para corrigir o erro, tente executar `bundle add webrick` e depois executar `bundle exec jekyll serve` novamente.
  {% endnote %}

3. Para visualizar seu site, no navegador da Web, navegue até `http://localhost:4000`.

## Atualizar o gem do {% data variables.product.prodname_pages %}

O Jekyll é um projeto ativo de código aberto que é atualizado com frequência. Se o gem `github-pages` do computador estiver desatualizado com o gem `github-pages` do servidor do {% data variables.product.prodname_pages %}, seu site poderá parecer diferente quando criado localmente do que quando publicado no {% data variables.product.product_name %}. Para evitar isso, atualize regularmente o gem `github-pages` do computador.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Atualize o gem `github-pages`.
    - Se você instalou o Bundler, execute `bundle update github-pages`.
    - Se você não tiver o Bundler instalado, execute `gem update github-pages`.

## Leitura adicional

- [{% data variables.product.prodname_pages %}](http://jekyllrb.com/docs/github-pages/) na documentação do Jekyll
