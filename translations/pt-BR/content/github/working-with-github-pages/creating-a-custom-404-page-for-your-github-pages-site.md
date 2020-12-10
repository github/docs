---
title: Criar uma página 404 personalizada para o site do GitHub Pages
intro: Você pode exibir uma página de erro 404 personalizada quando as pessoas tentam acessar páginas não existentes no seu site.
redirect_from:
  - /articles/custom-404-pages/
  - /articles/creating-a-custom-404-page-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
{% data reusables.files.add-file %}
3. No campo de nome de arquivo, digite `404.html` ou `404.md`. ![Campo de nome de arquivo](/assets/images/help/pages/404-file-name.png)
4. Se você nomeou seu arquivo como `404.md`, adicione a seguinte página inicial YAML no começo do arquivo:
  ```
  ---
  permalink: /404.html
  ---
  ```
5. Abaixo da página inicial YAML, se houver, adicione o conteúdo que deseja exibir na página 404.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

### Leia mais

- [Página inicial](http://jekyllrb.com/docs/frontmatter) na documentação do Jekyll
