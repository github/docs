---
title: Acerca de las Páginas de GitHub y Jekyll
intro: 'Jekyll es un generador de sitios estáticos con soporte integrado para {% data variables.product.prodname_pages %}.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: '145140258'
---
## <a name="about-jekyll"></a>Acerca de Jekyll

Jekill es un generador de sitio estático con soporte incorporado para {% data variables.product.prodname_pages %} y un proceso de construcción simplificado. Jekyll toma los archivos Markdown y HTML y crea un sitio web estático completo en función de la opción de diseño. Jekyll soporta Markdown y Liquid, un lenguaje de plantillas que carga contenido dinámico en tu sitio. Para más información, vea [Jekyll](https://jekyllrb.com/).

Jekyll no está oficialmente admitido por Windows. Para más información, vea "[Jekyll en Windows](http://jekyllrb.com/docs/windows/#installation)" en la documentación de Jekyll.

Recomandamos usar Jekyll con {% data variables.product.prodname_pages %}. Si lo prefieres, puedes usar otros generadores de sitio estático o personalizar tu propio proceso de compilación localmente o en otro servidor. Para más información, vea "[Acerca de {% data variables.product.prodname_pages %}](/articles/about-github-pages#static-site-generators)".

## <a name="configuring-jekyll-in-your--data-variablesproductprodname_pages--site"></a>Configurando Jekyll en tu sitio {% data variables.product.prodname_pages %}

Puede configurar la mayoría de los valores de Jekyll, como los temas y los plugins del sitio, si edita el archivo *_config.yml*. Para más información, vea "[Configuración](https://jekyllrb.com/docs/configuration/)" en la documentación de Jekyll.

Algunos parámetros de configuración no pueden cambiarse para los sitios {% data variables.product.prodname_pages %} sites.

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

De manera predeterminada, Jekyll no compila archivos o carpetas que:
- se encuentran en una carpeta denominada `/node_modules` o `/vendor`
- comienzan por `_`, `.` o `#`
- terminan con `~`
- se excluyen mediante el valor `exclude` del archivo de configuración

Si quiere que Jekyll procese cualquiera de estos archivos, puede usar el valor `include` del archivo de configuración.

## <a name="front-matter"></a>Texto preliminar

{% data reusables.pages.about-front-matter %}

Puede agregar `site.github` a una publicación o página para agregar los metadatos de referencias del repositorio al sitio. Para más información, vea "[Uso de `site.github`](https://jekyll.github.io/github-metadata/site.github/)" en la documentación de metadatos de Jekyll.

## <a name="themes"></a>Temas

{% data reusables.pages.add-jekyll-theme %} Para más información, vea "[Temas](https://jekyllrb.com/docs/themes/)" en la documentación de Jekyll.

{% ifversion fpt or ghec %} Puede agregar un tema compatible al sitio en {% data variables.product.prodname_dotcom %}. Para más información, vea "[Temas admitidos](https://pages.github.com/themes/)" en el sitio de {% data variables.product.prodname_pages %} y "[Adición de un tema al sitio de {% data variables.product.prodname_pages %} con el selector de temas](/articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser)".

Para usar cualquier otro tema de Jekyll código abierto hospedado en {% data variables.product.prodname_dotcom %}, puede agregar el tema manualmente.{% else %} Puede agregar manualmente un tema al sitio. {% endif %} Para más información, vea{% ifversion fpt or ghec %} [Temas hospedados en {% data variables.product.prodname_dotcom %}](https://github.com/topics/jekyll-theme) y{% else %} "[Temas admitidos](https://pages.github.com/themes/)" en el sitio de {% data variables.product.prodname_pages %} y{% endif %} "[Adición de un tema al sitio de {% data variables.product.prodname_pages %} mediante Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)".

Puedes sobrescribir cualquiera de los valores por defecto de tu tema editando los archivos del tema. Para más información, vea la documentación del tema e "[Invalidación de los valores predeterminados del tema](https://jekyllrb.com/docs/themes/#overriding-theme-defaults)" en la documentación de Jekyll.

## <a name="plugins"></a>Complementos

Puedes descargar o crear plugins Jekyll para ampliar la funcionalidad de Jekyll para tu sitio. Por ejemplo, el complemento [jemoji](https://github.com/jekyll/jemoji) le permite usar emoji de estilo {% data variables.product.prodname_dotcom %} en cualquier página del sitio de la misma manera que lo haría en {% data variables.product.prodname_dotcom %}. Para más información, vea "[Complementos](https://jekyllrb.com/docs/plugins/)" en la documentación de Jekyll.

{% data variables.product.prodname_pages %} usa plugins que están habilitados por defecto y no pueden estar inhabilitados:
- [`jekyll-coffeescript`](https://github.com/jekyll/jekyll-coffeescript)
- [`jekyll-default-layout`](https://github.com/benbalter/jekyll-default-layout)
- [`jekyll-gist`](https://github.com/jekyll/jekyll-gist)
- [`jekyll-github-metadata`](https://github.com/jekyll/github-metadata)
- [`jekyll-optional-front-matter`](https://github.com/benbalter/jekyll-optional-front-matter)
- [`jekyll-paginate`](https://github.com/jekyll/jekyll-paginate)
- [`jekyll-readme-index`](https://github.com/benbalter/jekyll-readme-index)
- [`jekyll-titles-from-headings`](https://github.com/benbalter/jekyll-titles-from-headings)
- [`jekyll-relative-links`](https://github.com/benbalter/jekyll-relative-links)

Puede habilitar complementos adicionales si agrega la gema del complemento al valor `plugins` en el archivo *_config.yml*. Para más información, vea "[Configuración](https://jekyllrb.com/docs/configuration/)" en la documentación de Jekyll. 

Para obtener una lista de los complementos admitidos, vea "[Versiones de dependencia](https://pages.github.com/versions/)" en el sitio de {% data variables.product.prodname_pages %}.  Para obtener información de uso de un plugin específico, consulta la documentación del plugin.

{% tip %}

**Sugerencia:** Puede asegurarse de que usa la versión más reciente de todos los complementos si mantiene actualizada la gema de {% data variables.product.prodname_pages %}. Para más información, vea "[Prueba del sitio de GitHub Pages localmente con Jekyll](/articles/testing-your-github-pages-site-locally-with-jekyll#updating-the-github-pages-gem)" y "[Versiones de dependencia](https://pages.github.com/versions/)" en el sitio de {% data variables.product.prodname_pages %}.

{% endtip %}

{% data variables.product.prodname_pages %} no puede compilar sitios mediante plugins no compatibles. Si deseas usar plugins no compatibles, genera tu sitio localmente y luego sube los archivos estáticos del sitio a {% data variables.product.product_name %}.

## <a name="syntax-highlighting"></a>Resaltado de sintaxis

Para facilitar la lectura de tu sitio, los fragmentos de código se resaltan en los sitios de {% data variables.product.prodname_pages %} de la misma manera que se resaltan en {% data variables.product.product_name %}. Para más información sobre el resaltado de sintaxis en {% data variables.product.product_name %}, vea "[Creación y resaltado de bloques de código](/articles/creating-and-highlighting-code-blocks)".

Por defecto, los bloques de código en su sitio serán resaltados por Jekyll. Jekyll usa el resaltado [Rouge](https://github.com/jneen/rouge), que es compatible con [Pygments](http://pygments.org/). Pygments se obsoletizó y no es compatible con Jekyll 4. Si especifica Pygments en el archivo *_config.yml*, Rouge se usará como reserva en su lugar. Jekyll no puede usar ningún otro resaltador de sintaxis, y obtendrá una advertencia de compilación de página si especifica otro distinto en el archivo *_config.yml*. Para más información, vea "[Acerca de los errores de compilación de Jekyll para sitios de {% data variables.product.prodname_pages %}](/articles/about-jekyll-build-errors-for-github-pages-sites)".

Si quiere usar otro resaltador, como `highlight.js`, debe deshabilitar el resaltado de sintaxis de Jekyll mediante la actualización del archivo *_config.yml* del proyecto.

```yaml
kramdown:
  syntax_highlighter_opts:
    disable : true
```

Si en el tema no se incluye CSS para el resaltado de sintaxis, puede generar CSS de resaltado de sintaxis de {% data variables.product.prodname_dotcom %} y agregarlo al archivo `style.css` del proyecto.

```shell
$ rougify style github > style.css
```

## <a name="building-your-site-locally"></a>Construyendo tu sitio localmente

{% data reusables.pages.test-locally %}
