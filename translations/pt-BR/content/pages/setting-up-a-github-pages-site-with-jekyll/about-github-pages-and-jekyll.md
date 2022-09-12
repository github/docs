---
title: Sobre o GitHub Pages e o Jekyll
intro: 'Jekyll é um gerador de site estático com suporte integrado para {% data variables.product.prodname_pages %}.'
redirect_from:
  - /articles/about-jekyll-themes-on-github
  - /articles/configuring-jekyll
  - /articles/configuring-jekyll-plugins
  - /articles/using-syntax-highlighting-on-github-pages
  - /articles/files-that-start-with-an-underscore-are-missing
  - /articles/sitemaps-for-github-pages
  - /articles/search-engine-optimization-for-github-pages
  - /articles/repository-metadata-on-github-pages
  - /articles/atom-rss-feeds-for-github-pages
  - /articles/redirects-on-github-pages
  - /articles/emoji-on-github-pages
  - /articles/mentions-on-github-pages
  - /articles/using-jekyll-plugins-with-github-pages
  - /articles/adding-jekyll-plugins-to-a-github-pages-site
  - /articles/about-github-pages-and-jekyll
  - /github/working-with-github-pages/about-github-pages-and-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: GitHub Pages & Jekyll
ms.openlocfilehash: 15551d849842c0b8866c0820c4a42397f412d6ea
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: '145128208'
---
## <a name="about-jekyll"></a>Sobre o Jekyll

O Jekyll é um gerador de site estático com suporte integrado para {% data variables.product.prodname_pages %} e um processo de compilação simplificado. O Jekyll usa arquivos Markdown e HTML, além de criar um site estático completo com base na sua escolha de layouts. O Jekyll aceita Markdown e Liquid, uma linguagem de modelagem que carrega conteúdo dinâmico no site. Para obter mais informações, confira [Jekyll](https://jekyllrb.com/).

O Jekyll não é oficialmente compatível com o Windows. Para obter mais informações, confira "[Jekyll no Windows](http://jekyllrb.com/docs/windows/#installation)" na documentação do Jekyll.

É recomendável usar o Jekyll com o {% data variables.product.prodname_pages %}. Se preferir, você pode usar outros geradores de site estáticos ou personalizar seu próprio processo de compilação localmente ou em outro servidor. Para obter mais informações, confira "[Sobre o {% data variables.product.prodname_pages %}](/articles/about-github-pages#static-site-generators)".

## <a name="configuring-jekyll-in-your--data-variablesproductprodname_pages--site"></a>Configurar o Jekyll em seu site do {% data variables.product.prodname_pages %}

É possível definir a maioria das configurações do Jekyll, como o tema e os plug-ins do seu site, editando o arquivo *_config.yml*. Para obter mais informações, confira "[Configuração](https://jekyllrb.com/docs/configuration/)" na documentação do Jekyll.

Algumas definições de configuração não podem ser alteradas para sites do {% data variables.product.prodname_pages %}.

```yaml
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
- estão localizados em uma pasta chamada `/node_modules` ou `/vendor`
- começam com `_`, `.` ou `#`
- terminam com `~`
- são excluídos pela configuração `exclude` no arquivo de configuração

Caso deseje que o Jekyll processe algum desses arquivos, use a configuração `include` no arquivo de configuração.

## <a name="front-matter"></a>Material inicial

{% data reusables.pages.about-front-matter %}

Você pode adicionar `site.github` a uma postagem ou a uma página para incluir metadados de referências do repositório no seu site. Para obter mais informações, confira "[Como usar o `site.github`](https://jekyll.github.io/github-metadata/site.github/)" na documentação de metadados do Jekyll.

## <a name="themes"></a>Temas

{% data reusables.pages.add-jekyll-theme %} Para obter mais informações, confira "[Temas](https://jekyllrb.com/docs/themes/)" na documentação do Jekyll.

{% ifversion fpt or ghec %} Adicione um tema com suporte ao seu site no {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira "[Temas com suporte](https://pages.github.com/themes/)" no site do {% data variables.product.prodname_pages %} e "[Como adicionar um tema ao seu site do {% data variables.product.prodname_pages %} com o seletor de tema](/articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser)".

Para usar qualquer outro tema do Jekyll de código aberto hospedado no {% data variables.product.prodname_dotcom %}, adicione o tema manualmente.{% else %} Adicione um tema ao seu site manualmente.{% endif %} Para obter mais informações, confira{% ifversion fpt or ghec %} [temas hospedados no {% data variables.product.prodname_dotcom %}](https://github.com/topics/jekyll-theme) e{% else %} "[Temas com suporte](https://pages.github.com/themes/)" no site do {% data variables.product.prodname_pages %} e{% endif %} "[Como adicionar um tema ao seu site do {% data variables.product.prodname_pages %} usando o Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)".

Você pode substituir qualquer um dos padrões do seu tema editando os arquivos do tema. Para obter mais informações, confira a documentação do tema e "[Como substituir os padrões do tema](https://jekyllrb.com/docs/themes/#overriding-theme-defaults)" na documentação do Jekyll.

## <a name="plugins"></a>Plug-ins

Você pode baixar ou criar plugins do Jekyll para ampliar a funcionalidade do Jekyll em seu site. Por exemplo, o plug-in [jemoji](https://github.com/jekyll/jemoji) permite usar emojis no estilo do {% data variables.product.prodname_dotcom %} em qualquer página do seu site da mesma forma que você usaria no {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira "[Plug-ins](https://jekyllrb.com/docs/plugins/)" na documentação do Jekyll.

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

Habilite outros plug-ins adicionando o gem do plug-in à configuração `plugins` no arquivo *_config.yml*. Para obter mais informações, confira "[Configuração](https://jekyllrb.com/docs/configuration/)" na documentação do Jekyll. 

Para obter uma lista de plug-ins com suporte, confira "[Versões de dependência](https://pages.github.com/versions/)" no site do {% data variables.product.prodname_pages %}.  Para obter informações de uso para um plugin específico, consulte a documentação do plugin.

{% tip %}

**Dica:** você pode garantir que está usando a última versão de todos os plug-ins mantendo o gem do {% data variables.product.prodname_pages %} atualizado. Para obter mais informações, confira "[Como testar seu site do GitHub Pages localmente com o Jekyll](/articles/testing-your-github-pages-site-locally-with-jekyll#updating-the-github-pages-gem)" e "[Versões de dependência](https://pages.github.com/versions/)" no site do {% data variables.product.prodname_pages %}.

{% endtip %}

O {% data variables.product.prodname_pages %} não pode criar sites usando plugins incompatíveis. Se quiser usar plugins incompatíveis, gere seu site localmente e faça push dos arquivos estáticos do site no {% data variables.product.product_name %}.

## <a name="syntax-highlighting"></a>Realce de sintaxe

Para facilitar a leitura do seu site, trechos de código são destacados nos sites do {% data variables.product.prodname_pages %} da mesma maneira que são destacados no {% data variables.product.product_name %}. Para obter mais informações sobre o realce de sintaxe do {% data variables.product.product_name %}, confira "[Como criar e realçar blocos de código](/articles/creating-and-highlighting-code-blocks)".

Por padrão, blocos de código no seu site serão destacados pelo Jekyll. O Jekyll usa o realçador [Rouge](https://github.com/jneen/rouge), que é compatível com o [Pygments](http://pygments.org/). Pigmentos foram desativados e não são compatíveis com o Jekyll 4. Se você especificar o Pygments no arquivo *_config.yml*, o Rouge será usado no lugar. O Jekyll não pode usar nenhum outro realçador de sintaxe, e você receberá um aviso de criação de página se especificar outro realçador de sintaxe no arquivo *_config.yml*. Para obter mais informações, confira "[Sobre erros de build do Jekyll para sites do {% data variables.product.prodname_pages %}](/articles/about-jekyll-build-errors-for-github-pages-sites)".

Caso você deseje usar outro realçador, por exemplo `highlight.js`, desabilite o realce de sintaxe do Jekyll atualizando o arquivo *_config.yml* do projeto.

```yaml
kramdown:
  syntax_highlighter_opts:
    disable : true
```

Se o seu tema não incluir CSS para realce de sintaxe, gere o CSS de realce de sintaxe do {% data variables.product.prodname_dotcom %} e adicione-o ao arquivo `style.css` do projeto.

```shell
$ rougify style github > style.css
```

## <a name="building-your-site-locally"></a>Criar site localmente

{% data reusables.pages.test-locally %}
