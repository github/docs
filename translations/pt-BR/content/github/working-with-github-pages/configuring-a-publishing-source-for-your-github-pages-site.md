---
title: Configurar uma fonte de publicação para o site do GitHub Pages
intro: 'Se você usar a fonte de publicação padrão do site do {% data variables.product.prodname_pages %}, seu site será publicado automaticamente. Você também pode optar por publicar o {% if currentVersion ver_lt "enterprise-server@2.23" %} site{% endif %} do projeto a partir de um branch ou pasta diferente.'
redirect_from:
  - /articles/configuring-a-publishing-source-for-github-pages/
  - /articles/configuring-a-publishing-source-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'Pessoas com permissões de administrador ou mantenedor para um repositório podem configurar uma fonte de publicação para um site do {% data variables.product.prodname_pages %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Para obter mais informações sobre fontes de publicação, consulte "[Sobre o {% data variables.product.prodname_pages %}](/articles/about-github-pages#publishing-sources-for-github-pages-sites)".

### Escolher uma fonte de publicação

Before you configure a publishing source, make sure the branch{% if currentVersion ver_lt "enterprise-server@2.22" %} or folder{% endif %} you want to use as your publishing source already exists in your repository.{% if currentVersion ver_lt "enterprise-server@2.22" %} For example, before you can publish your project site from the `/docs` folder on the `master` branch of your repository, you or a collaborator must create a `/docs` folder on the default `master` branch of your repository.{% endif %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
3. Em "{% data variables.product.prodname_pages %}", use o menu suspenso **Nenhum** ou **Branch** e selecione uma fonte de publicação. ![Menu suspenso para selecionar uma fonte de publicação](/assets/images/help/pages/publishing-source-drop-down.png)
4. Opcionalmente, use o menu suspenso para selecionar uma pasta para sua fonte de publicação. ![Menu suspenso para selecionar uma pasta para a fonte de publicação](/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. Clique em **Salvar**. ![Botão para salvar alterações nas configurações da fonte de publicação](/assets/images/help/pages/publishing-source-save.png)
  {% else %}
3. No "{% data variables.product.prodname_pages %}", use o menu suspenso **Source** (Fonte) e selecione uma fonte de publicação. ![Menu suspenso para selecionar uma fonte de publicação](/assets/images/help/pages/publishing-source-drop-down.png)
{% endif %}

### Solucionar problemas de publicação com o site do {% data variables.product.prodname_pages %}

{% data reusables.pages.admin-must-push %}

If you choose the `docs` folder on {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}any{% else %}the `master`{% endif %} branch as your publishing source, then later remove the `/docs` folder from that branch in your repository, your site won't build and you'll get a page build error message for a missing `/docs` folder. Para obter informações, consulte [Solucionar problemas de erros de criação do Jekyll para sites do {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)".
