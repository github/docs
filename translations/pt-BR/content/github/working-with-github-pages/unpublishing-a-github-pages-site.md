---
title: Cancelar a publicação de um site do GitHub Pages
intro: 'Você pode cancelar a publicação do seu site de {% data variables.product.prodname_pages %} para que não fique mais disponível.'
redirect_from:
  - /articles/how-do-i-unpublish-a-project-page/
  - /articles/unpublishing-a-project-page/
  - /articles/unpublishing-a-project-pages-site/
  - /articles/unpublishing-a-user-pages-site/
  - /articles/unpublishing-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'As pessoas com permissões de administrador para um repositório podem cancelar a publicação de um site do {% data variables.product.prodname_pages %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Páginas
---

### Cancelar a publicação de um site de projeto

{% data reusables.repositories.navigate-to-repo %}
2. Se existir um branch `gh-pages` no repositório, exclua o branch `gh-pages`. Para obter mais informações, consulte "[Criar e excluir branches em seu repositório](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch)".
3. Se o branch `gh-pages` tiver sido sua fonte de publicação,
{% if currentVersion == "free-pro-team@latest" %}pule para a etapa 6{% else %}o seu site agora não está publicado e você pode pular as outras etapas{% endif %}.
{% data reusables.repositories.sidebar-settings %}
5. Em "
{% data variables.product.prodname_pages %}", use o menu suspenso **Origem** e selecione **Nenhum.**
  ![Menu suspenso para selecionar uma fonte de publicação](/assets/images/help/pages/publishing-source-drop-down.png)
{% data reusables.pages.update_your_dns_settings %}

### Cancelar a publicação de um site de usuário ou organização

{% data reusables.repositories.navigate-to-repo %}
2. Exclua o branch que você está usando como fonte de publicação ou exclua todo o repositório. Para obter mais informações, consulte "[Criar e excluir branches no repositório](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch)" e "[Excluir um repositório](/articles/deleting-a-repository)".
{% data reusables.pages.update_your_dns_settings %}
