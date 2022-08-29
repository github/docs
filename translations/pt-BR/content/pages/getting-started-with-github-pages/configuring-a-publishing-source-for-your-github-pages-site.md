---
title: Configurar uma fonte de publicação para o site do GitHub Pages
intro: '{% ifversion pages-custom-workflow %}Você pode configurar seu site de {% data variables.product.prodname_pages %} para publicar quando as alterações são enviadas para um branch específico ou você pode escrever um fluxo de trabalho de {% data variables.product.prodname_actions %} para publicar seu site.{% else%}Se você usar a fonte de publicação padrão do seu site de {% data variables.product.prodname_pages %}, seu site será publicado automaticamente. Você também pode optar por publicar o seu site a partir de um branch ou uma pasta diferente.{% endif %}'
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

## Sobre as fontes de publicação

{% data reusables.pages.pages-about-publishing-source %}

{% data reusables.pages.private_pages_are_public_warning %}

## Publicando a partir de um branch

1. Certifique-se de que o branch que você deseja usar como fonte de publicação já existe no repositório.
{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
{% ifversion pages-custom-workflow %}
1. Em "Compilação e implantação", em "Fonte", selecione **Implantar a partir de um branch**.
1. Em "Compilação e implantação", em "Branch", use o menu suspenso **Nenhum** ou **Branch** e selecione uma fonte de publicação.

   ![Menu suspenso para selecionar uma fonte de publicação](/assets/images/help/pages/publishing-source-drop-down.png)
{% else %}
3. Em "{% data variables.product.prodname_pages %}", use o menu suspenso **Nenhum** ou **Branch** e selecione uma fonte de publicação. ![Menu suspenso para selecionar uma fonte de publicação](/assets/images/help/pages/publishing-source-drop-down.png)
{% endif %}
4. Opcionalmente, use o menu suspenso para selecionar uma pasta para sua fonte de publicação. ![Menu suspenso para selecionar uma pasta para a fonte de publicação](/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. Clique em **Salvar**. ![Botão para salvar alterações nas configurações da fonte de publicação](/assets/images/help/pages/publishing-source-save.png)

### Solucionar problemas de publicação a partir de um branch

{% data reusables.pages.admin-must-push %}

Se você escolher a pasta `docs` em qualquer branch como fonte de publicação e, em seguida, remover a pasta `/docs` desse branch do repositório, seu site não vai criar e você receberá uma mensagem de erro de criação de página para uma pasta `/docs` que está faltando. Para obter informações, consulte [Solucionar problemas de erros de criação do Jekyll para sites do {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)".

{% ifversion build-pages-with-actions %}

O seu sitede {% data variables.product.prodname_pages %} será sempre implantado com a execução de um fluxo de trabalho {% data variables.product.prodname_actions %}, mesmo que você tenha configurado seu site {% data variables.product.prodname_pages %} para ser criado usando uma ferramenta de CI diferente. A maioria dos fluxos de trabalho de CI externos fazem "implantação" no GitHub Pages, fazendo commit da saída da compilação no branch de `gh-pages` do repositório, e normalmente, incluem um arquivo `.nojekyll`. Quando isso acontecer, o fluxo de trabalho de {% data variables.product.prodname_actions %} detectará o estado de que o branch não precisa de uma etapa de criação e seguirá as etapas necessárias para implantar o site em servidores de {% data variables.product.prodname_pages %}.

Para encontrar possíveis erros com a compilação ou implantação, você pode verificar a execução do fluxo de trabalho para o seu site de {% data variables.product.prodname_pages %} revisando a execução do fluxo de trabalho do seu repositório. Para obter mais informações, consulte "[Visualizar histórico de execução de fluxo de trabalho](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)". Para obter mais informações sobre como executar novamente o fluxo de trabalho em caso de erro, consulte "[Executar novamente fluxos de trabalho e trabalhos](/actions/managing-workflow-runs/re-running-workflows-and-jobs)".

{% endif %}

{% ifversion pages-custom-workflow %}

## Publicação com um fluxo de trabalho de {% data variables.product.prodname_actions %} personalizado

{% data reusables.pages.pages-custom-workflow-beta %}

Para configurar seu site para publicar com {% data variables.product.prodname_actions %}:

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
1. Em "Compilação e implantação", em "Fonte", selecione **GitHub Actions**.
1. {% data variables.product.product_name %} irá sugerir vários fluxos de trabalho iniciais. Se você já tem um fluxo de trabalho para publicar o site, você pode pular esta etapa. Caso contrário, escolha uma das opções para criar um fluxo de trabalho de {% data variables.product.prodname_actions %}. Para obter mais informações sobre a criação de seu fluxo de trabalho personalizado, consulte "[Criando um fluxo de trabalho de {% data variables.product.prodname_actions %} personalizado para publicar seu site](#creating-a-custom-github-actions-workflow-to-publish-your-site)".

   {% data variables.product.prodname_pages %} não associa um fluxo de trabalho específico às configurações de {% data variables.product.prodname_pages %}. No entanto, as configurações do {% data variables.product.prodname_pages %} serão ligadas à execução do fluxo de trabalho que o seu site implantou mais recentemente.

### Criar um fluxo de trabalhode {% data variables.product.prodname_actions %} personalizado para publicar seu site

Para obter mais informações sobre {% data variables.product.prodname_actions %}, consulte "[Actions](/actions)."

Ao configurar seu site para publicar com {% data variables.product.prodname_actions %}, {% data variables.product.product_name %} irá sugerir fluxos de trabalho iniciantes para cenários de publicação comuns. O fluxo de trabalho geral é:

1. Acionar sempre que houver um push para o branch padrão do repositório ou sempre que um pull request que apontar para o branch padrão for aberto, reaberto ou atualizado.
1. Use a ação [`ações/checkout`](https://github.com/actions/checkout) para conferir o conteúdo do repositório.
1. Se o seu site exigir, crie qualquer arquivo de site estático.
1. Use a ação [`actions/upload-pages-artifact`](https://github.com/actions/upload-pages-artifact) para fazer upload dos arquivos estáticos como um artefato.
1. Se o fluxo de trabalho foi acionado por um push para o branch padrão, use a ação [`actions/deploy-pages`](https://github.com/actions/deploy-pages) para implantar o artefato. Esta etapa é ignorada se o fluxo de trabalho foi acionado por um pull request.

Os fluxos de trabalho iniciais usam um ambiente de implantação denominado `github-pages`. Se seu repositório ainda não incluir um ambiente denominado `github-pages`, o ambiente será criado automaticamente. Recomendamos que você adicione uma regra de proteção de ambiente para que apenas o branch padrão possa fazer a implantação nesse ambiente. Para obter mais informações, consulte "[Usando ambientes para implantação](/actions/deployment/targeting-different-environments/using-environments-for-deployment)".

{% note %}

**Observação**: Um arquivo `CNAME` no seu arquivo de repositório não adiciona ou remove automaticamente um domínio personalizado. Em vez disso, você deve configurar o domínio personalizado por meio das configurações do repositório ou da API. Para obter mais informações, consulte "[Gerenciando um domínio personalizado para o seu site do GitHub Pages](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain) e [a documentação de referência da API do Pages](/rest/pages#update-information-about-a-github-pages-site).

{% endnote %}

### Solucionar problemas de publicação com um fluxo de trabalho personalizado de {% data variables.product.prodname_actions %}

Para obter informações sobre como solucionar seu fluxo de trabalho de {% data variables.product.prodname_actions %}, consulte "[Sobre o monitoramento e solução de problemas](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting)."

{% endif %}
