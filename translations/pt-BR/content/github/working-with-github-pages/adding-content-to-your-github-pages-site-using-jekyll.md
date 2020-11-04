---
title: Adicionar conteúdo ao site do GitHub Pages usando o Jekyll
intro: 'É possível adicionar uma nova página ou postagem ao site do Jekyll no {% data variables.product.prodname_pages %}.'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/adding-content-to-your-github-pages-site-using-jekyll
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Pessoas com permissões de gravação para um repositório podem adicionar conteúdo a um site do {% data variables.product.prodname_pages %} usando o Jekyll.

### Sobre conteúdo em sites do Jekyll

Para poder adicionar conteúdo a um site do Jekyll no {% data variables.product.prodname_pages %}, você precisa criar o site do Jekyll. Para obter mais informações, consulte "[Criar um site do {% data variables.product.prodname_pages %} com o Jekyll](/articles/creating-a-github-pages-site-with-jekyll)".

Os principais tipos de conteúdo para sites do Jekyll são páginas e postagens. As páginas se destinam a conteúdo autônomo que não está associado a uma data específica, como uma página "Sobre". O site padrão do Jekyll contém um arquivo chamado `about.md` que é renderizado como uma página no seu site em `YOUR-SITE-URL/about`. Você pode editar o conteúdo desse arquivo para personalizar a página "Sobre" e usá-la como um modelo para criar novas páginas. Para obter mais informações, consulte "[Páginas](https://jekyllrb.com/docs/pages/)" na documentação do Jekyll.

As postagens são uma postagem de blog. O site padrão do Jekyll contém um diretório chamado `_posts` que contém um arquivo de postagem padrão. Você pode editar o conteúdo dessa postagem e usá-la como modelo para criar novas postagens. Para obter mais informações, consulte "[Postagens](https://jekyllrb.com/docs/posts/)" na documentação do Jekyll.

O tema engloba layouts, inclusões e folhas de estilo padrão que serão aplicados automaticamente a novas páginas e postagens no site, mas é possível substituir qualquer um desses padrões. Para obter mais informações, consulte "[Sobre o {% data variables.product.prodname_pages %} e o Jekyll](/articles/about-github-pages-and-jekyll#themes)".

{% data reusables.pages.about-front-matter %}

{% data reusables.pages.test-locally %}

### Adicionar uma nova página ao site

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
3. Na raiz da fonte de publicação, crie um novo arquivo para a página chamado _PAGE-NAME.md_, substituindo _PAGE-NAME_ por um nome de arquivo significativo.
4. Adicione a página inicial YAML a seguir ao topo do arquivo, substituindo _PAGE TITLE_ pelo título da página e _URL-PATH_ por um caminho para a URL da página. Por exemplo, se a URL base do site for `https://octocat.github.io` e _URL-PATH_ for `/about/contact/`, a página estará localizada em `https://octocat.github.io/about/contact`.
  ```shell
  layout: page
  title: "<em>PAGE TITLE</em>"
  permalink: /<em>URL-PATH</em>/
  ```
5. Abaixo da página inicial, adicione conteúdo para a página.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

### Adicionar uma nova postagem ao site

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
3. Navegue até o diretório `_posts`.
4. Crie um novo arquivo chamado _YYYY-MM-DD-NAME-OF-POST.md_, substituindo _YYY-MM-DD_ pela data da postagem e _NAME-OF-POST_ pelo nome dela.
4. Adicione a página inicial YAML a seguir ao topo do arquivo, substituindo _POST TITLE_ pelo título da postagem, _YYYY-MM-DD hh:mm:ss -0000_ pela data e hora da postagem e _CATEGORY-1_ e _CATEGORY-2_ por quantas categorias que você quiser que a postagem tenha.
  ```shell
  layout: page
  title: "<em>POST TITLE</em>"
  date: </em>YYYY-MM-DD hh:mm:ss -0000</em>
  categories: <em>CATEGORY-1</em> <em>CATEGORY-2</em>
  ```
5. Abaixo da página inicial, adicione conteúdo para a postagem.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

### Próximas etapas

{% data reusables.pages.add-jekyll-theme %} Para obter mais informações, consulte "[Adicionar um tema ao site do {% data variables.product.prodname_pages %} usando o Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)".
