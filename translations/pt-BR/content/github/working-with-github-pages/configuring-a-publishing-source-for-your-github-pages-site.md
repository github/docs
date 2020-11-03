---
title: Configurar uma fonte de publicação para o site do GitHub Pages
intro: 'Se você usar a fonte de publicação padrão do site do {% data variables.product.prodname_pages %}, seu site será publicado automaticamente. Você também pode optar por publicar o seu{% if currentVersion ver_lt "enterprise-server@2.23" %} site do projeto{% endif %} a partir de um branch ou pasta diferente.'
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

Antes de configurar uma fonte de publicação, certifique-se o branch{% if currentVersion ver_lt "enterprise-server@2. 3" %} ou pasta{% endif %} que você deseja usar como fonte de publicação já existe no repositório.{% if currentVersion ver_lt "enterprise-server@2. 3" %} Por exemplo, antes de poder publicar seu site de projeto na pasta `/docs` no `mestre` branch do repositório, um colaborador deverá criar uma pasta `/docs` no branch `mestre` padrão do seu repositório.{% endif %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
3. Em "{% data variables.product.prodname_pages %}", use o menu suspenso **Nenhum** ou **Branch** e selecione uma fonte de publicação. ![Menu suspenso para selecionar uma fonte de publicação](/assets/images/help/pages/publishing-source-drop-down.png)
4. Opcionalmente, use o menu suspenso para selecionar uma pasta para sua fonte de publicação. ![Menu suspenso para selecionar uma pasta para a fonte de publicação](/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. Clique em **Salvar**. ![Botão para salvar alterações nas configurações da fonte de publicação](/assets/images/help/pages/publishing-source-save.png)
  {% else %}
3. Em "
{% data variables.product.prodname_pages %}", use o menu suspenso **Fonte** e selecione uma fonte de publicação.
   ![Menu suspenso para selecionar uma fonte de publicação](/assets/images/help/pages/publishing-source-drop-down.png)
{% endif %}

### Solucionar problemas de publicação com o site do {% data variables.product.prodname_pages %}

{% data reusables.pages.admin-must-push %}

Se você escolher a pasta `docs` em {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 2" %}qualquer{% else %}o `master`{% endif %} branch como fonte de publicação, remova a pasta `/docs` do branch do repositório. Seu site não será criado e você receberá uma mensagem de erro de criação de página para uma pasta `/docs` ausente. Para obter informações, consulte [Solucionar problemas de erros de criação do Jekyll para sites do {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)".
