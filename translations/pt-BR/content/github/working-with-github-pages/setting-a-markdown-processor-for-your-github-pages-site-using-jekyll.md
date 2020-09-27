---
title: Definir um processador markdown para seu site do GitHub Pages usando o Jekyll
intro: 'Você pode escolher um processador markdown para determinar como o markdown é renderizado no site do {{ site.data.variables.product.prodname_pages }}.'
redirect_from:
  - /articles/migrating-your-pages-site-from-maruku/
  - /articles/updating-your-markdown-processor-to-kramdown/
  - /articles/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll
product: '{{ site.data.reusables.gated-features.pages }}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Pessoas com permissões de gravação para um repositório podem definir um processador markdown para um site do {{ site.data.variables.product.prodname_pages }}.

O {{ site.data.variables.product.prodname_pages }} é compatível com dois processadores markdown: [kramdown](http://kramdown.gettalong.org/) e o próprio processador [CommonMark](https://commonmark.org/) estendido do {{ site.data.variables.product.prodname_dotcom }}, que é usado para renderizar markdown em estilo {{ site.data.variables.product.prodname_dotcom }} em todo o {{ site.data.variables.product.product_name }}. Para obter mais informações, consulte "[Sobre gravação e formatação no {{ site.data.variables.product.prodname_dotcom }}](/articles/about-writing-and-formatting-on-github)".

Você pode usar o markdown em estilo {{ site.data.variables.product.prodname_dotcom }} com qualquer um dos processadores, mas apenas o processador CommonMark é que sempre corresponderá aos resultados que você vê no {{ site.data.variables.product.product_name }}.

{{ site.data.reusables.pages.navigate-site-repo }}
2. No repositório, navegue até o arquivo *_config.yml*.
{{ site.data.reusables.repositories.edit-file }}
4. Localize a linha que começa com `markdown:` e altere o valor para `kramdown` ou `GFM`. ![Configuração do markdown em config.yml](/assets/images/help/pages/config-markdown-value.png)
{{ site.data.reusables.files.write_commit_message }}
{{ site.data.reusables.files.choose-commit-email }}
{{ site.data.reusables.files.choose_commit_branch }}
{{ site.data.reusables.files.propose_new_file }}

### Leia mais

- [Documentação do kramdown](https://kramdown.gettalong.org/documentation.html)
- [Especificações de markdown em estilo {{ site.data.variables.product.prodname_dotcom }}](https://github.github.com/gfm/)
