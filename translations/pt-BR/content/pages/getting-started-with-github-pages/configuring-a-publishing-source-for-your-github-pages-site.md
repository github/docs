---
title: Configurar uma fonte de publicação para o site do GitHub Pages
intro: 'Se você usar a fonte de publicação padrão do site do {% data variables.product.prodname_pages %}, seu site será publicado automaticamente. Você também pode optar por publicar o {% ifversion ghes < 3.0 %} site{% endif %} do projeto a partir de um branch ou pasta diferente.'
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
topics:
  - Pages
shortTitle: Configurar fonte de publicação
---

Para obter mais informações sobre fontes de publicação, consulte "[Sobre o {% data variables.product.prodname_pages %}](/articles/about-github-pages#publishing-sources-for-github-pages-sites)".

## Escolher uma fonte de publicação

Antes de configurar uma fonte de publicação, certifique-se de que o branch{% ifversion ghes < 3.0 %} ou a pasta{% endif %} que deseja usar como fonte de publicação já existe no repositório.{% ifversion ghes < 3.0 %} Por exemplo, antes de poder publicar o site do seu projeto a partir da pasta `/docs` no branch `master` do repositório, você ou um colaborador deverá criar uma pasta `/docs` no branch `master` padrão do repositório.{% endif %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
{% ifversion fpt or ghes > 2.22 or ghae %}
3. Em "{% data variables.product.prodname_pages %}", use o menu suspenso **Nenhum** ou **Branch** e selecione uma fonte de publicação. ![Menu suspenso para selecionar uma fonte de publicação](/assets/images/help/pages/publishing-source-drop-down.png)
4. Opcionalmente, use o menu suspenso para selecionar uma pasta para sua fonte de publicação. ![Menu suspenso para selecionar uma pasta para a fonte de publicação](/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. Clique em **Salvar**. ![Button to save changes to publishing source settings](/assets/images/help/pages/publishing-source-save.png){% else %}
3. No "{% data variables.product.prodname_pages %}", use o menu suspenso **Source** (Fonte) e selecione uma fonte de publicação. ![Menu suspenso para selecionar uma fonte de publicação](/assets/images/help/pages/publishing-source-drop-down.png)
{% endif %}

## Solucionar problemas de publicação com o site do {% data variables.product.prodname_pages %}

{% data reusables.pages.admin-must-push %}

Se você escolher a pasta</code>documentação` em {% ifversion fpt or ghes &#062; 2.22 or ghae %}qualquer{% else %}o branch <code>mestre`{% endif %} como fonte de publicação, remova, posteriormente, `/docs` do branch do seu repositório. O seu site não será criado e você receberá uma mensagem de erro de criação referente a uma pasta ausente de `/docs`. Para obter informações, consulte [Solucionar problemas de erros de criação do Jekyll para sites do {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)".
