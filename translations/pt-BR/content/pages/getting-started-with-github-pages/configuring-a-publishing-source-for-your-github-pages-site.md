---
title: Configurar uma fonte de publicação para o site do GitHub Pages
intro: '{% ifversion pages-custom-workflow %}Você pode configurar seu site do {% data variables.product.prodname_pages %} para ser publicado quando alterações são enviadas por push a um branch específico ou pode escrever um fluxo de trabalho do {% data variables.product.prodname_actions %} para publicar seu site.{% else%}Se você usar a fonte de publicação padrão para seu site do {% data variables.product.prodname_pages %}, seu site será publicado automaticamente. Você também pode optar por publicar o seu site a partir de um branch ou uma pasta diferente.{% endif %}'
redirect_from:
  - /articles/configuring-a-publishing-source-for-github-pages
  - /articles/configuring-a-publishing-source-for-your-github-pages-site
  - /github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'People with admin or maintainer permissions for a repository can configure a publishing source for a {% data variables.product.prodname_pages %} site.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Configure publishing source
ms.openlocfilehash: d08b5c150da5be18700312237c374059228c563d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529636'
---
## Sobre as fontes de publicação

{% data reusables.pages.pages-about-publishing-source %}

{% data reusables.pages.private_pages_are_public_warning %}

## Fazer publicação de um branch

1. Verifique se o branch que você deseja usar como fonte de publicação já existe no repositório.
{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %} {% ifversion pages-custom-workflow %}
1. Em "Build e implantação", em "Fonte", selecione **Fazer implantação de um branch**.
1. Em "Build e implantação", em "Branch", use o menu suspenso **Nenhum** ou **Branch** e selecione uma fonte de publicação.

   ![Menu suspenso usado para selecionar uma fonte de publicação](/assets/images/help/pages/publishing-source-drop-down.png) {% else %}
3. Em "{% data variables.product.prodname_pages %}", use o menu suspenso **Nenhuma** ou **Branch** e selecione uma fonte de publicação.
  ![Menu suspenso usado para selecionar uma fonte de publicação](/assets/images/help/pages/publishing-source-drop-down.png) {% endif %}
4. Opcionalmente, use o menu suspenso para selecionar uma pasta para sua fonte de publicação.
  ![Menu suspenso usado para selecionar uma pasta para a fonte de publicação](/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. Clique em **Salvar**.
  ![Botão usado para salvar as alterações nas configurações da fonte de publicação](/assets/images/help/pages/publishing-source-save.png)

### Solução de problemas de publicação de um branch

{% data reusables.pages.admin-must-push %}

Se você escolher a pasta `docs` em qualquer branch como a origem de publicação e, depois, remover a pasta `/docs` desse branch no repositório, seu site não será compilado e você receberá uma mensagem de erro de build de página para uma pasta `/docs` ausente. Para obter mais informações, confira "[Solução de problemas de erros de build do Jekyll para sites do {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)".

{% ifversion build-pages-with-actions %}

O seu sitede {% data variables.product.prodname_pages %} será sempre implantado com a execução de um fluxo de trabalho {% data variables.product.prodname_actions %}, mesmo que você tenha configurado seu site {% data variables.product.prodname_pages %} para ser criado usando uma ferramenta de CI diferente. A maioria dos fluxos de trabalho de CI externos é "implantada" no GitHub Pages pelo commit da saída de build no branch `gh-pages` do repositório e, geralmente, inclui um arquivo `.nojekyll`. Quando isso acontecer, o fluxo de trabalho do {% data variables.product.prodname_actions %} detectará o estado de que o branch não precisa de uma etapa de build e executará apenas as etapas necessárias para implantar o site em servidores do {% data variables.product.prodname_pages %}.

Para encontrar possíveis erros com a compilação ou implantação, você pode verificar a execução do fluxo de trabalho para o seu site de {% data variables.product.prodname_pages %} revisando a execução do fluxo de trabalho do seu repositório. Para obter mais informações, confira "[Como ver o histórico de execução do fluxo de trabalho](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)". Para obter mais informações sobre como executar novamente o fluxo de trabalho em caso de erro, confira "[Como executar fluxos de trabalho e trabalhos novamente](/actions/managing-workflow-runs/re-running-workflows-and-jobs)".

{% endif %}

{% ifversion pages-custom-workflow %}

## Fazer publicação com um fluxo de trabalho personalizado de {% data variables.product.prodname_actions %}

{% data reusables.pages.pages-custom-workflow-beta %}

Para configurar seu site para publicar com {% data variables.product.prodname_actions %}:

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
1. Em "Build e implantação", em "Fonte", selecione **GitHub Actions**.
1. {% data variables.product.product_name %} sugerirá vários fluxos de trabalho iniciais. Se você já tiver um fluxo de trabalho para publicar seu site, poderá ignorar esta etapa. Caso contrário, escolha uma das opções para criar um fluxo de trabalho de {% data variables.product.prodname_actions %}. Para obter mais informações sobre como criar seu fluxo de trabalho personalizado, confira "[Como criar um fluxo de trabalho personalizado de {% data variables.product.prodname_actions %} para publicar seu site](#creating-a-custom-github-actions-workflow-to-publish-your-site)."

   {% data variables.product.prodname_pages %} não associa um fluxo de trabalho específico às configurações de {% data variables.product.prodname_pages %}. No entanto, as configurações de {% data variables.product.prodname_pages %} serão vinculadas à execução de fluxo de trabalho que implantou seu site mais recentemente.

### Criar um fluxo de trabalho de {% data variables.product.prodname_actions %} para publicar seu site

Para obter mais informações sobre {% data variables.product.prodname_actions %}, confira "[Ações](/actions)."

Quando você configurar seu site para ser publicado com {% data variables.product.prodname_actions %}, {% data variables.product.product_name %} vai sugerir fluxos de trabalho iniciais para cenários de publicação comuns. O fluxo geral de um fluxo de trabalho é:

1. Disparar sempre que houver um push para o branch padrão do repositório ou sempre que uma solicitação de pull direcionada ao branch padrão for aberta, reaberta ou atualizada.
1. Usar a ação [`actions/checkout`](https://github.com/actions/checkout) para conferir o conteúdo do repositório.
1. Se exigido pelo seu site, crie arquivos de site estáticos.
1. Usar a ação [`actions/upload-pages-artifact`](https://github.com/actions/upload-pages-artifact) para carregar os arquivos estáticos como um artefato.
1. Se o fluxo de trabalho foi disparado por um push para o branch padrão, use a ação [`actions/deploy-pages`](https://github.com/actions/deploy-pages) para implantar o artefato. Essa etapa será ignorada se o fluxo de trabalho tiver sido disparado por uma solicitação de pull.

Os fluxos de trabalho iniciais usam um ambiente de implantação chamado `github-pages`. Se o repositório ainda não incluir um ambiente chamado `github-pages`, o ambiente será criado automaticamente. Recomendamos que você adicione uma regra de proteção de ambiente para que apenas o branch padrão possa ser implantado nesse ambiente. Para obter mais informações, confira "[Como usar ambientes para implantação](/actions/deployment/targeting-different-environments/using-environments-for-deployment)".

{% note %}

**Observação**: um arquivo `CNAME` no seu arquivo de repositório não adiciona nem remove automaticamente um domínio personalizado. Em vez disso, você precisa configurar o domínio personalizado por meio das configurações do repositório ou por meio da API. Para obter mais informações, confira "[Gerenciar um domínio personalizado para seu site do GitHub Pages](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)" e a [documentação de referência da API do Pages](/rest/pages#update-information-about-a-github-pages-site).

{% endnote %}

### Solucionar problemas da publicação com um fluxo de trabalho personalizado de {% data variables.product.prodname_actions %}

Para obter informações sobre como solucionar problemas do seu fluxo de trabalho de {% data variables.product.prodname_actions %}, confira "[Sobre o monitoramento e a solução de problemas](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting)".

{% endif %}
