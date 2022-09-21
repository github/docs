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
ms.openlocfilehash: 68123d7bc2849881fc60fdd89dc4177e6701f5d4
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147875528'
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
3. Para visualizar seu site, no navegador da Web, navegue até `http://localhost:4000`.

{% note %}

**Observação:** se você estiver usando o Ruby 3.0 e o Jekyll 4.2.x ou uma versão mais antiga, precisará adicionar o gem `webrick` ao Gemfile do projeto antes de executar `bundle install`.

{% endnote %}

## Atualizar o gem do {% data variables.product.prodname_pages %}

O Jekyll é um projeto ativo de código aberto que é atualizado com frequência. Se o gem `github-pages` do computador estiver desatualizado com o gem `github-pages` do servidor do {% data variables.product.prodname_pages %}, seu site poderá parecer diferente quando criado localmente do que quando publicado no {% data variables.product.product_name %}. Para evitar isso, atualize regularmente o gem `github-pages` do computador.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Atualize o gem `github-pages`.
    - Se você instalou o Bundler, execute `bundle update github-pages`.
    - Se você não tiver o Bundler instalado, execute `gem update github-pages`.

## Leitura adicional

- [{% data variables.product.prodname_pages %}](http://jekyllrb.com/docs/github-pages/) na documentação do Jekyll
