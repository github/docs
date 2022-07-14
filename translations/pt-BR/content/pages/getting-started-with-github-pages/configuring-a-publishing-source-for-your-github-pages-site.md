---
title: Configurar uma fonte de publicação para o site do GitHub Pages
intro: 'Se você usar a fonte de publicação padrão do site do {% data variables.product.prodname_pages %}, seu site será publicado automaticamente. Você também pode optar por publicar o seu site a partir de um branch ou uma pasta diferente.'
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
shortTitle: Configurar fonte de publicação
---

Para obter mais informações sobre fontes de publicação, consulte "[Sobre o {% data variables.product.prodname_pages %}](/articles/about-github-pages#publishing-sources-for-github-pages-sites)".

## Escolher uma fonte de publicação

Antes de configurar uma fonte de publicação, verifique se o branch que você deseja usar como fonte de publicação já existe no repositório.

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
3. Em "{% data variables.product.prodname_pages %}", use o menu suspenso **Nenhum** ou **Branch** e selecione uma fonte de publicação. ![Menu suspenso para selecionar uma fonte de publicação](/assets/images/help/pages/publishing-source-drop-down.png)
4. Opcionalmente, use o menu suspenso para selecionar uma pasta para sua fonte de publicação. ![Menu suspenso para selecionar uma pasta para a fonte de publicação](/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. Clique em **Salvar**. ![Botão para salvar alterações nas configurações da fonte de publicação](/assets/images/help/pages/publishing-source-save.png)

## Solucionar problemas de publicação com o site do {% data variables.product.prodname_pages %}

{% data reusables.pages.admin-must-push %}

Se você escolher a pasta `docs` em qualquer branch como fonte de publicação e, em seguida, remover a pasta `/docs` desse branch do repositório, seu site não vai criar e você receberá uma mensagem de erro de criação de página para uma pasta `/docs` que está faltando. Para obter informações, consulte [Solucionar problemas de erros de criação do Jekyll para sites do {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)".

{% ifversion fpt %}

O seu sitede {% data variables.product.prodname_pages %} será sempre implantado com a execução de um fluxo de trabalho {% data variables.product.prodname_actions %}, mesmo que você tenha configurado seu site {% data variables.product.prodname_pages %} para ser criado usando uma ferramenta de CI diferente. A maioria dos fluxos de trabalho de CI externos fazem "implantação" no GitHub Pages, fazendo commit da saída da compilação no branch de `gh-pages` do repositório, e normalmente, incluem um arquivo `.nojekyll`. Quando isso acontecer, o fluxo de trabalho de {% data variables.product.prodname_actions %} detectará o estado de que o branch não precisa de uma etapa de criação e seguirá as etapas necessárias para implantar o site em servidores de {% data variables.product.prodname_pages %}.

Para encontrar possíveis erros com a compilação ou implantação, você pode verificar a execução do fluxo de trabalho para o seu site de {% data variables.product.prodname_pages %} revisando a execução do fluxo de trabalho do seu repositório. Para obter mais informações, consulte "[Visualizar histórico de execução de fluxo de trabalho](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)".  Para obter mais informações sobre como executar novamente o fluxo de trabalho em caso de erro, consulte "[Executar novamente fluxos de trabalho e trabalhos](/actions/managing-workflow-runs/re-running-workflows-and-jobs)".

{% note %}

{% data reusables.pages.pages-builds-with-github-actions-public-beta %}

{% endnote %}

{% endif %}
