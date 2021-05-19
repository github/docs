---
title: Usar submódulos com o GitHub Pages
intro: 'Você pode usar submódulos com o {% data variables.product.prodname_pages %} para incluir outros projetos no código do seu site.'
redirect_from:
  - /articles/using-submodules-with-pages/
  - /articles/using-submodules-with-github-pages
  - /github/working-with-github-pages/using-submodules-with-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
topics:
  - Páginas
---
Se o repositório do seu site do {% data variables.product.prodname_pages %} contiver submódulos, o conteúdo dele será inserido automaticamente quando o site for criado.

Só é possível usar submódulos que apontem para repositórios públicos, porque o servidor do {% data variables.product.prodname_pages %} não pode acessar repositórios privados.

Use a URL somente leitura `https://` para os submódulos, inclusive os aninhados. Essa alteração pode ser feita no arquivo _.gitmodules_.

### Leia mais

- "[Ferramentas Git - Submódulos](https://git-scm.com/book/en/Git-Tools-Submodules)" no livro _Pro Git_
- "[Solucionar problemas de erros de criação do Jekyll para sites do {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)"
