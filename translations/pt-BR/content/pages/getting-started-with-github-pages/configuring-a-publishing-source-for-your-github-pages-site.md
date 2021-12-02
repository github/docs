---
title: Configurar uma fonte de publicação para o site do GitHub Pages
intro: 'Se você usar a fonte de publicação padrão do site do {% data variables.product.prodname_pages %}, seu site será publicado automaticamente. You can also choose to publish your site from a different branch or folder.'
redirect_from:
  - /articles/configuring-a-publishing-source-for-github-pages/
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

Before you configure a publishing source, make sure the branch you want to use as your publishing source already exists in your repository.

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
3. Em "{% data variables.product.prodname_pages %}", use o menu suspenso **Nenhum** ou **Branch** e selecione uma fonte de publicação. ![Menu suspenso para selecionar uma fonte de publicação](/assets/images/help/pages/publishing-source-drop-down.png)
4. Opcionalmente, use o menu suspenso para selecionar uma pasta para sua fonte de publicação. ![Menu suspenso para selecionar uma pasta para a fonte de publicação](/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. Clique em **Salvar**. ![Botão para salvar alterações nas configurações da fonte de publicação](/assets/images/help/pages/publishing-source-save.png)

## Solucionar problemas de publicação com o site do {% data variables.product.prodname_pages %}

{% data reusables.pages.admin-must-push %}

If you choose the `docs` folder on any branch as your publishing source, then later remove the `/docs` folder from that branch in your repository, your site won't build and you'll get a page build error message for a missing `/docs` folder. Para obter informações, consulte [Solucionar problemas de erros de criação do Jekyll para sites do {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)".
