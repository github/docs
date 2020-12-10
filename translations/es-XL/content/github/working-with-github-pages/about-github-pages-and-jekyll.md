---
title: Acerca de las Páginas de GitHub y Jekyll
intro: 'Jekyll es un generador de sitios estáticos con soporte integrado para {% data variables.product.prodname_pages %}.'
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

### Acerca de Jekyll

Jekill es un generador de sitio estático con soporte incorporado para {% data variables.product.prodname_pages %} y un proceso de construcción simplificado. Jekyll toma los archivos Markdown y HTML y crea un sitio web estático completo en función de la opción de diseño. Jekyll soporta Markdown y Liquid, un lenguaje de plantillas que carga contenido dinámico en tu sitio. Para obtener más información, consulta [Jekyll](https://jekyllrb.com/).

Jekyll no está oficialmente admitido por Windows. Para obtener más información, consulta "[Jekyll en Windows](http://jekyllrb.com/docs/windows/#installation)" en la documentación de Jekyll.

Recomandamos usar Jekyll con {% data variables.product.prodname_pages %}. Si lo prefieres, puedes usar otros generadores de sitio estático o personalizar tu propio proceso de compilación localmente o en otro servidor. Para obtener más información, consulta la sección "[Acerca de{% data variables.product.prodname_pages %}](/articles/about-github-pages#static-site-generators)".

### Configurando Jekyll en tu sitio {% data variables.product.prodname_pages %}

Puedes configurar la mayoría de los parámetros de Jekyll, como los temas y los plugins del sitio, al editar tu archivo *_config.yml*. Para obtener más información, consulte "[Configuración](https://jekyllrb.com/docs/configuration/)" en la documentación de Jekyll.

Algunos parámetros de configuración no pueden cambiarse para los sitios {% data variables.product.prodname_pages %} sites.

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

De manera predeterminada, Jekyll no compila archivos o carpetas que:
- están situados en una carpeta denominada `/node_modules` o `/vendor`
- comienza con `_`, `.`, o `#`
- termina con `~`
- están excluidos por el parámetro `exclude` en tu archivo de configuración

Si deseas que Jekyll procese alguno de estos archivos, puedes usar el parámetro `includes` en tu archivo de configuración.

### Texto preliminar

{% data reusables.pages.about-front-matter %}

Puedes añadir `site.github` a una publicación o página para añadir cualquier metadato de referencias de repositorio a tu sitio. Para obtener más información, consulta "[Usar `site.github`](https://jekyll.github.io/github-metadata/site.github/)" en la documentación de metadatos de Jekyll.

### Temas

{% data reusables.pages.add-jekyll-theme %} Para obtenerr más información, consulta "[Temas](https://jekyllrb.com/docs/themes/)" en la documentación de Jekyll.

{% if currentVersion == "free-pro-team@latest" %}
Puedes agregar un tema soportado a tu sitio en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta "[Temas soportados](https://pages.github.com/themes/)" en el sitio {% data variables.product.prodname_pages %} y "[Agregar un tema a tu sitio de {% data variables.product.prodname_pages %} con el selector de temas](/articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser)."

Para usar cualquier otro tema de código abierto de Jekyll en {% data variables.product.prodname_dotcom %}, puedes añadirlo manualmente.{% else %} Puedes añadir el tema a tu sitio manualmente. {% endif %} Para obtener más información, consulta {% if currentVersion == "free-pro-team@latest" %}los "[temas hospedados en {% data variables.product.prodname_dotcom %}](https://github.com/topics/jekyll-theme) y {% else %}"[Temas compatibles](https://pages.github.com/themes/)" en el sitio de {% data variables.product.prodname_pages %} y {% endif %}"[Añadir un tema a tu sitio de {% data variables.product.prodname_pages %} usando Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)".

Puedes sobrescribir cualquiera de los valores por defecto de tu tema editando los archivos del tema. Para obtener más información, consulta la documentación de tu tema y "[Sobrescribir los valores predeterminados del tema](https://jekyllrb.com/docs/themes/#overriding-theme-defaults)" en la documentación de Jekyll.

### Plugins

Puedes descargar o crear plugins Jekyll para ampliar la funcionalidad de Jekyll para tu sitio. Por ejemplo, el plugin [jemoji](https://github.com/jekyll/jemoji) te permite usar el emoji con formato {% data variables.product.prodname_dotcom %} en cualquier página de tu sitio del mismo modo que lo harías en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta "[Plugins](https://jekyllrb.com/docs/plugins/)" en la documentación de Jekyll.

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

Puedes habilitar plugins adicionales al agregar la gema del plugin en los ajustes de `plugins` en tu archivo *_config.yml*. Para obtener más información, consulte "[Configuración](https://jekyllrb.com/docs/configuration/)" en la documentación de Jekyll. Para conocer la lista de los plugins soportados, consulta "[Versiones de dependencia](https://pages.github.com/versions/)" en el sitio {% data variables.product.prodname_pages %}.

Para obtener información de uso de un plugin específico, consulta la documentación del plugin.

{% tip %}

**Sugerencia:** Puedes asegurarte de que estás usando la versión más reciente de todos los plugins al mantener actualizada la gema de {% data variables.product.prodname_pages %}. Para obtener más información, consulta "[Comprobar tus páginas de GitHub localmente con Jekyll](/articles/testing-your-github-pages-site-locally-with-jekyll#updating-the-github-pages-gem)" y "[Versiones de dependencia](https://pages.github.com/versions/)" en el sitio de {% data variables.product.prodname_pages %}.

{% endtip %}

{% data variables.product.prodname_pages %} no puede compilar sitios mediante plugins no compatibles. Si deseas usar plugins no compatibles, genera tu sitio localmente y luego sube los archivos estáticos del sitio a {% data variables.product.product_name %}.

### Resaltado de la sintaxis

Para facilitar la lectura de tu sitio, los fragmentos de código se resaltan en los sitios de {% data variables.product.prodname_pages %} de la misma manera que se resaltan en {% data variables.product.product_name %}. Para más información sobre como enfatizar sintaxis en {% data variables.product.product_name %}, vea "[Creando y resaltando bloques de código](/articles/creating-and-highlighting-code-blocks)."

Por defecto, los bloques de código en su sitio serán resaltados por Jekyll. Jekyll utiliza el resaltador de [Rouge](https://github.com/jneen/rouge), compatible con [Pygments](http://pygments.org/). Si especificas Pygments en tu archivo *_config.yml*, el Rouge se utilizará en su lugar. Jekyll no puede usar ningún otro resaltador de sintaxis, y obtendrás una advertencia de compilación de página si especificas otro en tu archivo *_config.yml*. Para más información, vea "[Acerca de los errores de construcción de sitios Jekyll {% data variables.product.prodname_pages %} ](/articles/about-jekyll-build-errors-for-github-pages-sites)."

Si quieres usar otro resaltador, como `highlight.js`, debes desactivar el resaltador de sintaxis de Jekyll actualizando el archivo de tu proyecto *_config.yml*.

```
kramdown:
  syntax_highlighter_opts:
    disable : true
```

Si tu tema no incluye CSS para resaltar la sintaxis, puedes generar la sintaxis de {% data variables.product.prodname_dotcom %} resaltando CSS y añadirlo a tu archivo `style.css` de proyecto.

```shell
$ rougify style github > style.css
```

### Construyendo su sitio localmente

{% data reusables.pages.test-locally %}
