---
title: Sobre erros de criação do Jekyll para sites do GitHub Pages
intro: 'Se o Jekyll encontrar um erro ao criar seu site do {% data variables.product.prodname_pages %} localmente ou no {% data variables.product.product_name %}, você receberá uma mensagem de erro com mais informações.'
redirect_from:
  - /articles/viewing-jekyll-build-error-messages
  - /articles/generic-jekyll-build-failures
  - /articles/about-jekyll-build-errors-for-github-pages-sites
  - /github/working-with-github-pages/about-jekyll-build-errors-for-github-pages-sites
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Jekyll build errors for Pages
ms.openlocfilehash: c435d7857239ae4a8b1a09c86e10fe12b248a4b2
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147648236'
---
## Sobre erros de criação do Jekyll

{% ifversion pages-custom-workflow %}Se você estiver publicando de um branch, às vezes{% else %}Às vezes,{% endif %} {% data variables.product.prodname_pages %} não tentará criar seu site depois que você efetuar push das alterações à fonte de publicação do seu site.{% ifversion fpt or ghec %}
- A pessoa que fez push das alterações não verificou o endereço de e-mail dela. Para obter mais informações, confira "[Como verificar seu endereço de email](/articles/verifying-your-email-address)".{% endif %}
- Você está fazendo push com uma chave de implantação. Se desejar automatizar pushes para o repositório do seu site, você poderá configurar um usuário de máquina. Para obter mais informações, confira "[Como gerenciar chaves de implantação](/developers/overview/managing-deploy-keys#machine-users)".
- Você está usando um serviço de CI que não está configurado para criar sua fonte de publicação. Por exemplo, o Travis CI não compilará o branch `gh-pages` a menos que você adicione o branch a uma lista segura. Para obter mais informações, confira "[Como personalizar o build](https://docs.travis-ci.com/user/customizing-the-build/#safelisting-or-blocklisting-branches)" no Travis CI ou na documentação do serviço de CI.

{% note %}

**Observação:** poderá levar até dez minutos para que as alterações no seu site sejam publicadas depois que você efetuar push das alterações para o {% data variables.product.product_name %}.

{% endnote %}

{% ifversion build-pages-with-actions %} Se o Jekyll não tentar criar seu site e encontrar um erro, você receberá uma mensagem de erro de criação.
{% else %} Se o Jekyll não tentar criar seu site e encontrar um erro, você receberá uma mensagem de erro de criação. Existem dois tipos principais de mensagens de erro de compilação do Jekyll.
- Uma mensagem "Page build warning" significa que sua criação foi concluída com êxito, mas talvez você precise fazer alterações para evitar problemas futuros.
- Uma mensagem "Page build failed" significa que sua criação falhou ao ser concluída. Se for possível para o Jekyll detectar um motivo para a falha, você verá uma mensagem de erro descritiva.
{% endif %}

Para obter mais informações sobre como solucionar problemas de erros de build, confira "[Solução de problemas de erros de build do Jekyll em sites do {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)".

{% ifversion build-pages-with-actions %}
## Visualizando as mensagens de erro de criação do Jekyll com {% data variables.product.prodname_actions %}

Por padrão, seu site de {% data variables.product.prodname_pages %} foi criado e implantado com a execução de um fluxo de trabalho de {% data variables.product.prodname_actions %}, a menos que você tenha configurado seu site do {% data variables.product.prodname_pages %} para usar uma ferramenta de CI diferente. Para encontrar possíveis erros de criação, verifique a execução do fluxo de trabalho para o seu site do {% data variables.product.prodname_pages %}, revisando a execução do fluxo de trabalho do seu repositório. Para obter mais informações, confira "[Como ver o histórico de execução do fluxo de trabalho](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)".  Para obter mais informações sobre como executar novamente o fluxo de trabalho em caso de erro, confira "[Como executar fluxos de trabalho e trabalhos novamente](/actions/managing-workflow-runs/re-running-workflows-and-jobs)".
{% endif %}

{% ifversion build-pages-with-actions %}{% else %}
## Visualizando as falhas de criação de seu repositório em {% data variables.product.product_name %}

Você pode ver falhas de build (mas não avisos de build) para seu site no {% data variables.product.product_name %} na **guia Configurações** do repositório do site.
{% endif %}

## Visualizando as mensagens de erro de criação do Jekyll localmente

É recomendável testar o site no local, o que permite ver mensagens de erro de criação na linha de comando e solucionar qualquer falha de criação antes de fazer push das alterações no {% data variables.product.product_name %}. Para obter mais informações, confira "[Como testar seu site do {% data variables.product.prodname_pages %} localmente com o Jekyll](/articles/testing-your-github-pages-site-locally-with-jekyll)".

## Visualizando mensagens de erro de criação do Jekyll no seu pull request

{% ifversion pages-custom-workflow %}Se você estiver publicando de um branch, quando{% else %}Quando{% endif %} você criar uma solicitação de pull para atualizar sua fonte de publicação em {% data variables.product.product_name %}, você poderá ver mensagens de erro de build na guia **Verificações** da solicitação de pull. Para obter mais informações, confira "[Sobre as verificações de status](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)".

{% ifversion pages-custom-workflow %}Se você estiver publicando com um fluxo de trabalho personalizado de {% data variables.product.prodname_actions %}, para ver as mensagens de erro de build na sua solicitação de pull, você precisará configurar seu fluxo de trabalho para ser executado no gatilho `pull_request`. Ao fazer isso, recomendamos ignorar todas as etapas de implantação se o fluxo de trabalho tiver sido disparado pelo evento `pull_request`. Isso permitirá que você veja erros de build sem implantar as alterações da sua solicitação de pull em seu site. Para obter mais informações, confira "[Eventos que disparam fluxos de trabalho](/actions/using-workflows/events-that-trigger-workflows#pull_request)" e "[Expressões](/actions/learn-github-actions/expressions)."{% endif %}

## Visualizando os erros de criação do Jekyll por e-mail

{% ifversion pages-custom-workflow %}Se você estiver publicando de um branch, quando{% else %}Quando{% endif %} você efetuar push das alterações para sua fonte de publicação em {% data variables.product.product_name %}, {% data variables.product.prodname_pages %} tentará criar seu site. Se a criação falhar, você receberá um e-mail no seu endereço de e-mail principal. {% data reusables.pages.build-failure-email-server %}

{% ifversion pages-custom-workflow %}Se você estiver publicando com um fluxo de trabalho personalizado de {% data variables.product.prodname_actions %}, para receber e-mails sobre o erro de build na sua solicitação de pull, você precisará configurar seu fluxo de trabalho para ser executado no gatilho `pull_request`. Ao fazer isso, recomendamos ignorar todas as etapas de implantação se o fluxo de trabalho tiver sido disparado pelo evento `pull_request`. Isso permitirá que você veja erros de build sem implantar as alterações da sua solicitação de pull em seu site. Para obter mais informações, confira "[Eventos que disparam fluxos de trabalho](/actions/using-workflows/events-that-trigger-workflows#pull_request)" e "[Expressões](/actions/learn-github-actions/expressions)."{% endif %}

## Visualizando as mensagens de erro do Jekyll no seu pull request com um serviço de CI de terceiros

Você pode configurar um serviço de terceiros, como o [Travis CI](https://travis-ci.org/), para ver as mensagens de erro após cada commit.

1. Caso ainda não tenha feito isso, adicione um arquivo chamado _Gemfile_ na raiz da fonte de publicação, com o seguinte conteúdo:
  ```ruby
  source `https://rubygems.org`
  gem `github-pages`
  ```

2. Configure o repositório do site para o serviço de teste de sua escolha. Por exemplo, para usar o [Travis CI](https://travis-ci.org/), adicione um arquivo chamado _.travis.yml_ na raiz da fonte de publicação, com o seguinte conteúdo:
  ```yaml
  language: ruby
  rvm:
    - 2.3
  script: "bundle exec jekyll build"
  ```
3. Talvez você precise ativar o repositório com o serviço de teste de terceiros. Para obter mais informações, consulte a documentação do seu serviço de teste.
