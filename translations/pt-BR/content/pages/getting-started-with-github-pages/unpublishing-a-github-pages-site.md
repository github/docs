---
title: Cancelar a publicação de um site do GitHub Pages
intro: 'Você pode cancelar a publicação do seu site de {% data variables.product.prodname_pages %} para que não fique mais disponível.'
redirect_from:
  - /articles/how-do-i-unpublish-a-project-page/
  - /articles/unpublishing-a-project-page/
  - /articles/unpublishing-a-project-pages-site/
  - /articles/unpublishing-a-user-pages-site/
  - /articles/unpublishing-a-github-pages-site
  - /github/working-with-github-pages/unpublishing-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'People with admin or maintainer permissions for a repository can unpublish a {% data variables.product.prodname_pages %} site.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pages
---

### Cancelar a publicação de um site de projeto

{% data reusables.repositories.navigate-to-repo %}
2. Se existir um branch `gh-pages` no repositório, exclua o branch `gh-pages`. Para obter mais informações, consulte "[Criar e excluir branches em seu repositório](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch)".
3. If the `gh-pages` branch was your publishing source, {% if currentVersion == "free-pro-team@latest" %}skip to step 6{% else %}your site is now unpublished and you can skip the remaining steps{% endif %}.
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
5. No "{% data variables.product.prodname_pages %}", use o menu suspenso **Source** (Fonte) e selecione **None** (Nenhuma). ![Menu suspenso para selecionar uma fonte de publicação](/assets/images/help/pages/publishing-source-drop-down.png)
{% data reusables.pages.update_your_dns_settings %}

### Cancelar a publicação de um site de usuário ou organização

{% data reusables.repositories.navigate-to-repo %}
2. Exclua o branch que você está usando como fonte de publicação ou exclua todo o repositório. Para obter mais informações, consulte "[Criar e excluir branches no repositório](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch)" e "[Excluir um repositório](/articles/deleting-a-repository)".
{% data reusables.pages.update_your_dns_settings %}
