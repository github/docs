---
title: Sobre o GitHub Pages e Jekyll
intro: 'Jekyll é um gerador de site estático com suporte integrado para {% data variables.product.prodname_pages %}.'
redirect_from:
  - /articles/about-jekyll-themes-on-github
  - /articles/configuring-jekyll
  - /articles/configuring-jekyll-plugins
  - /articles/using-syntax-highlighting-on-github-pages
  - /articles/files-that-start-with-an-underscore-are-missing
  - /articles/sitemaps-for-github-pages/
  - /articles/search-engine-optimization-for-github-pages/
  - /articles/repository-metadata-on-github-pages/
  - /articles/atom-rss-feeds-for-github-pages/
  - /articles/redirects-on-github-pages/
  - /articles/emoji-on-github-pages/
  - /articles/mentions-on-github-pages/
  - /articles/using-jekyll-plugins-with-github-pages/
  - /articles/adding-jekyll-plugins-to-a-github-pages-site/
  - /articles/about-github-pages-and-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Sobre o Jekyll

O Jekyll é um gerador de site estático com suporte integrado para {% data variables.product.prodname_pages %} e um processo de compilação simplificado. O Jekyll usa arquivos Markdown e HTML, além de criar um site estático completo com base na sua escolha de layouts. O Jekyll aceita Markdown e Liquid, uma linguagem de modelagem que carrega conteúdo dinâmico no site. Para obter mais informações, consulte [Jekyll](https://jekyllrb.com/).

O Jekyll não é oficialmente compatível com o Windows. Para obter mais informações, consulte "[Jekyll no Windows](http://jekyllrb.com/docs/windows/#installation)" na documentação do Jekyll.

É recomendável usar o Jekyll com o {% data variables.product.prodname_pages %}. Se preferir, você pode usar outros geradores de site estáticos ou personalizar seu próprio processo de compilação localmente ou em outro servidor. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_pages %}](/articles/about-github-pages#static-site-generators)".

### Configurar o Jekyll em seu site do {% data variables.product.prodname_pages %}

É possível configurar a maioria das definições do Jekyll, como o tema e os plugins do seu site, editando o arquivo *_config.yml*. Para obter mais informações, consulte "[Configuração](https://jekyllrb.com/docs/configuration/)" na documentação do Jekyll.

Algumas definições de configuração não podem ser alteradas para sites do {% data variables.product.prodname_pages %}.

```
lsi: false
safe: true
source: [your repo's top level directory]
incremental: false
highlighter: rouge
gist:
  noscript: false
kramdown:
  math_engine: mathjax
  syntax_highlighter: rouge
```

Por padrão, o Jekyll não cria arquivos nem pastas que:
- estão localizadas em uma pasta chamada `/node_modules` ou `/vendor`
- começam com `_`, `.` ou `#`
- terminam com `~`
- são excluídos pela configuração `exclude` em seu arquivo de configuração

Se quiser que o Jekyll processe algum desses arquivos, você poderá usar a configuração `includes` no arquivo de configuração.

### Material inicial

{% data reusables.pages.about-front-matter %}

Você pode adicionar `site.github` a uma publicação ou página para incluir metadados de referências de repositório ao seu site. Para obter mais informações, consulte "[Usar `site.github`](https://jekyll.github.io/github-metadata/site.github/)" na documentação de metadados do Jekyll.

### Temas

{% data reusables.pages.add-jekyll-theme %} Para obter mais informações, consulte "[Temas](https://jekyllrb.com/docs/themes/)" na documentação do Jekyll.

{% if currentVersion == "free-pro-team@latest" %}
Você pode adicionar um tema compatível ao seu site em
{% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Temas compatíveis](https://pages.github.com/themes/)" no site do {% data variables.product.prodname_pages %} e "[Adicionar um tema ao seu site do {% data variables.product.prodname_pages %} com o seletor de temas](/articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser)".

Para usar qualquer outro tema de código aberto do Jekyll hospedado em {% data variables.product.prodname_dotcom %}, você pode adicionar o tema manualmente.{% else %} Você pode adicionar um tema ao seu site manualmente.{% endif %} Para mais informações, consulte {% if currentVersion == "free-pro-team@latest" %} [temas hospedados em {% data variables.product.prodname_dotcom %}](https://github.com/topics/jekyll-theme) e{% else %} "[Temas compatíveis](https://pages.github.com/themes/)no site de {% data variables.product.prodname_pages %} e{% endif %} "[Adicionar um tema ao seu site de {% data variables.product.prodname_pages %} usando Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)".

Você pode substituir qualquer um dos padrões do seu tema editando os arquivos do tema. Para obter mais informações, consulte a documentação do seu tema e "[Substituir padrões do tema](https://jekyllrb.com/docs/themes/#overriding-theme-defaults)" na documentação do Jekyll.

### Plugins

Você pode baixar ou criar plugins do Jekyll para ampliar a funcionalidade do Jekyll em seu site. Por exemplo, o plugin [jemoji](https://github.com/jekyll/jemoji) permite usar emoji em estilo do {% data variables.product.prodname_dotcom %} em qualquer página do seu site da mesma forma que você faria no {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Plugins](https://jekyllrb.com/docs/plugins/)" na documentação do Jekyll.

O {% data variables.product.prodname_pages %} usa plugins que são habilitados por padrão e não podem ser desabilitados:
- [`jekyll-coffeescript`](https://github.com/jekyll/jekyll-coffeescript)
- [`jekyll-default-layout`](https://github.com/benbalter/jekyll-default-layout)
- [`jekyll-gist`](https://github.com/jekyll/jekyll-gist)
- [`jekyll-github-metadata`](https://github.com/jekyll/github-metadata)
- [`jekyll-optional-front-matter`](https://github.com/benbalter/jekyll-optional-front-matter)
- [`jekyll-paginate`](https://github.com/jekyll/jekyll-paginate)
- [`jekyll-readme-index`](https://github.com/benbalter/jekyll-readme-index)
- [`jekyll-titles-from-headings`](https://github.com/benbalter/jekyll-titles-from-headings)
- [`jekyll-relative-links`](https://github.com/benbalter/jekyll-relative-links)

Você pode habilitar plugins adicionais incluindo a gem do plugin à configuração `plugins` em seu arquivo *_config.yml*. Para obter mais informações, consulte "[Configuração](https://jekyllrb.com/docs/configuration/)" na documentação do Jekyll. Para obter uma lista de plugins compatíveis, consulte "[Versões de dependência](https://pages.github.com/versions/)" no site do {% data variables.product.prodname_pages %}.

Para obter informações de uso para um plugin específico, consulte a documentação do plugin.

{% tip %}

**Dica:** você pode ter certeza de que está usando a versão mais recente de todos os plugins mantendo o gem do {% data variables.product.prodname_pages %} atualizado. Para obter mais informações, consulte "[Testar o site do GitHub Pages localmente com o Jekyll](/articles/testing-your-github-pages-site-locally-with-jekyll#updating-the-github-pages-gem)" e "[Versões de dependência](https://pages.github.com/versions/)" no site do {% data variables.product.prodname_pages %}.

{% endtip %}

O {% data variables.product.prodname_pages %} não pode criar sites usando plugins incompatíveis. Se quiser usar plugins incompatíveis, gere seu site localmente e faça push dos arquivos estáticos do site no {% data variables.product.product_name %}.

### Realce de sintaxe

Para facilitar a leitura do seu site, trechos de código são destacados nos sites do {% data variables.product.prodname_pages %} da mesma maneira que são destacados no {% data variables.product.product_name %}. Para mais informações sobre destaque de sintaxe em {% data variables.product.product_name %}, consulte "[Criar e realçar blocos de código](/articles/creating-and-highlighting-code-blocks)".

Por padrão, blocos de código no seu site serão destacados pelo Jekyll. O Jekyll usa o realçador [Rouge](https://github.com/jneen/rouge), que é compatível com [Pygments](http://pygments.org/). Se você especificar Pygments no arquivo *_config.yml*, Rouge será usado no lugar. O Jekyll não pode usar qualquer outro realçador de sintaxe, e você receberá um aviso de criação de página se especificar outro realçador de sintaxe no arquivo *_config.yml*. Para obter mais informações, consulte "[Sobre erros de criação do Jekyll para sites do {% data variables.product.prodname_pages %}](/articles/about-jekyll-build-errors-for-github-pages-sites)".

Se quiser usar outro realçador, como `highlight.js`, você deverá desabilitar o realce da sintaxe do Jekyll atualizando o arquivo *_config.yml* do projeto.

```
kramdown:
  syntax_highlighter_opts:
    disable : true
```

Se o seu tema não incluir CSS para realce da sintaxe, você poderá gerar CSS de realce de sintaxe do {% data variables.product.prodname_dotcom %} e adicioná-lo ao arquivo `style.css` do projeto.

```shell
$ rougify style github > style.css
```

### Criar site localmente

{% data reusables.pages.test-locally %}
