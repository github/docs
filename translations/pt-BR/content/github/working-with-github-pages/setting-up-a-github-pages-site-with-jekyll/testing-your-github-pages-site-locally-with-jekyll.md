---
title: Testar o site do GitHub Pages localmente com o Jekyll
intro: 'Você pode criar o site do {% data variables.product.prodname_pages %} localmente para visualizar e testar as alterações nele.'
redirect_from:
  - /articles/setting-up-your-pages-site-locally-with-jekyll/
  - /articles/setting-up-your-github-pages-site-locally-with-jekyll/
  - /articles/testing-your-github-pages-site-locally-with-jekyll
  - /github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Páginas
---
Qualquer pessoa com permissões de leitura para um repositório pode testar um site do {% data variables.product.prodname_pages %} localmente.

### Pré-requisitos

Antes de usar o Jekyll para testar um site, você deve:
  - Instalar o [Jekyll](https://jekyllrb.com/docs/installation/).
  - Criar um site do Jekyll. Para obter mais informações, consulte "[Criar um site do {% data variables.product.prodname_pages %} com o Jekyll](/articles/creating-a-github-pages-site-with-jekyll)".

{% data reusables.pages.recommend-bundler %}

{% data reusables.pages.jekyll-install-troubleshooting %}

### Criar site localmente

{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.pages.navigate-publishing-source %}
3. Run `bundle install`.
3. Execute o site do Jekyll localmente.
  ```shell
  $ bundle exec jekyll serve
  > Configuration file: /Users/octocat/my-site/_config.yml
  >            Source: /Users/octocat/my-site
  >       Destination: /Users/octocat/my-site/_site
  > Incremental build: disabled. Enable with --incremental
  >      Generating...
  >                    done in 0.309 seconds.
  > Auto-regeneration: enabled for '/Users/octocat/my-site'
  > Configuration file: /Users/octocat/my-site/_config.yml
  >    Server address: http://127.0.0.1:4000/
  >  Server running... press ctrl-c to stop.
  ```
3. Para visualizar o site, navegue para `http://localhost:4000` no navegador da web.

### Atualizar o gem do {% data variables.product.prodname_pages %}

O Jekyll é um projeto ativo de código aberto que é atualizado com frequência. Se o gem `github-pages` no seu computador estiver desatualizado em relação ao gem `github-pages` no servidor do {% data variables.product.prodname_pages %}, seu site poderá ter uma aparência diferente da criada localmente quando for publicado no {% data variables.product.product_name %}. Para evitar isso, atualize regularmente o gem `github-pages` no seu computador.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Atualize o gem `github-pages`.
    - Se você instalou o bundler, execute `bundle update github-pages`.
    - Se não tiver o bundler instalado, execute `gem update github-pages`.

### Leia mais

- [{% data variables.product.prodname_pages %}](http://jekyllrb.com/docs/github-pages/) na documentação do Jekyll
