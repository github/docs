---
title: Solucionar problemas de errores de compilación de Jekyll para sitios de Páginas de GitHub
intro: 'Puedes usar los mensajes de error de compilación de Jekyll para solucionar los problemas de tu sitio de {% data variables.product.prodname_pages %}.'
redirect_from:
  - /articles/page-build-failed-missing-docs-folder
  - /articles/page-build-failed-invalid-submodule
  - /articles/page-build-failed-missing-submodule
  - /articles/page-build-failed-markdown-errors
  - /articles/page-build-failed-config-file-error
  - /articles/page-build-failed-unknown-tag-error
  - /articles/page-build-failed-tag-not-properly-terminated
  - /articles/page-build-failed-tag-not-properly-closed
  - /articles/page-build-failed-file-does-not-exist-in-includes-directory
  - /articles/page-build-failed-file-is-a-symlink
  - /articles/page-build-failed-symlink-does-not-exist-within-your-sites-repository
  - /articles/page-build-failed-file-is-not-properly-utf-8-encoded
  - /articles/page-build-failed-invalid-post-date
  - /articles/page-build-failed-invalid-sass-or-scss
  - /articles/page-build-failed-invalid-highlighter-language
  - /articles/page-build-failed-relative-permalinks-configured
  - /articles/page-build-failed-syntax-error-in-for-loop
  - /articles/page-build-failed-invalid-yaml-in-data-file
  - /articles/page-build-failed-date-is-not-a-valid-datetime
  - /articles/troubleshooting-github-pages-builds
  - /articles/troubleshooting-jekyll-builds
  - /articles/troubleshooting-jekyll-build-errors-for-github-pages-sites
  - /github/working-with-github-pages/troubleshooting-jekyll-build-errors-for-github-pages-sites
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Troubleshoot Jekyll errors
ms.openlocfilehash: 224f626df144ad249a799767984118778202e7b4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883469'
---
## Solucionar problemas de errores de compilación

Si Jekyll encuentra un error al compilar tu sitio de {% data variables.product.prodname_pages %} localmente o en {% data variables.product.product_name %}, puede usar los mensajes de error para solucionar los problemas. Para obtener más información sobre los mensajes de error y cómo visualizarlos, consulta "[Acerca de los errores de compilación de Jekyll para sitios de {% data variables.product.prodname_pages %}](/articles/about-jekyll-build-errors-for-github-pages-sites)".

Si recibiste un mensaje de error genérico, revisa los problemas comunes.
- Estás usando plugins no compatibles. Para obtener más información, consulta "[Acerca de {% data variables.product.prodname_pages %} y Jekyll](/articles/about-github-pages-and-jekyll#plugins)".{% ifversion fpt or ghec %}
- Tu repositorio ha excedido nuestros límites de tamaño del repositorio. Para obtener más información, consulta "[¿Cuál es mi cuota de disco?](/articles/what-is-my-disk-quota)".{% endif %}
- Has cambiado la configuración `source` en el archivo *_config.yml*. {% ifversion pages-custom-workflow %}Si publicas el sitio desde una rama, {% endif %}{% data variables.product.prodname_pages %} reemplaza este parámetro durante el proceso de compilación.
- Un nombre de archivo en tus archivos publicados contiene dos puntos (`:`), los cuales no se admiten.

Si recibiste un mensaje de error específico, revisa la información de solución de problemas para el mensaje de error que aparece a continuación.

{% ifversion pages-custom-workflow %}Después de haber corregido los errores, desencadena otra compilación insertando los cambios en la rama de origen del sitio (si publicas desde una rama) o desencadenando el flujo de trabajo de {% data variables.product.prodname_actions %} personalizado (si publicas con {% data variables.product.prodname_actions %}).{% else %}Después de haber corregido los errores, sube los cambios a la fuente de publicación de tu sitio para activar otra compilación en {% data variables.product.product_name %}.{% endif %}

## Error de archivo de configuración

Este error significa que el sitio no se pudo compilar porque el archivo *_config.yml* contiene errores de sintaxis.

Para solucionar problemas, asegúrate de que el archivo *_config.yml* sigue estas reglas:

{% data reusables.pages.yaml-rules %}

{% data reusables.pages.yaml-linter %}

## La fecha no es una fecha válida

Este error significa que una de las páginas de tu sitio incluye una fecha inválida.

Para solucionar el problema, busca el archivo en el mensaje de error y los diseños del archivo para encontrar llamadas a cualquier filtro Liquid relacionado con la fecha. Asegúrate de que todas las variables pasadas en los filtros de Liquid relacionados con la fecha contengan valores en todos los casos y nunca pases `nil` ni `""`. Para obtener más información, consulta "[Filtros de Liquid](https://help.shopify.com/en/themes/liquid/filters)" en la documentación de Liquid.

## El archivo no existe en el directorio includes

Este error significa que tu código hace referencia a un archivo que no existe en el directorio *_includes*.

{% data reusables.pages.search-for-includes %} Si cualquiera de los archivos a los que has hecho referencia no está en el directorio *_includes*, copia o mueve los archivos en el directorio *_includes*.

## El archivo es un enlace simbólico

Este error significa que tu código hace referencia a un archivo simbólico que no existe en los archivos publicados de tu sitio.

{% data reusables.pages.search-for-includes %} Si cualquiera de los archivos a los que has hecho referencia es un enlace simbólico, copia o mueve los archivos en el directorio *_includes*.

## El archivo no está correctamente codificado en UTF-8

Este error significa que usaste caracteres no latinos, como `日本語`, sin decirle al equipo que esperara estos símbolos.

Para solucionar el problema, aplica la codificación UTF-8 agregando la siguiente línea al archivo *_config.yml*:
```yaml
encoding: UTF-8
```

## Lenguaje de resaltado inválido

Este error significa que especificaste cualquier resaltador de sintaxis diferente de [Rouge](https://github.com/jneen/rouge) o [Pygments](http://pygments.org/) en el archivo de configuración.

Para solucionar el problema, actualiza el archivo *_config.yml* para especificar [Rouge](https://github.com/jneen/rouge) o [Pygments](http://pygments.org/). Para obtener más información, consulta "[Acerca de {% data variables.product.product_name %} y Jekyll](/articles/about-github-pages-and-jekyll#syntax-highlighting)".

## Fecha de publicación inválida

Este error significa que una publicación en tu sitio contiene una fecha inválida en el nombre de archivo o en el asunto de la parte delantera de YAML.

Para solucionar el problema, asegúrate de que todas las fechas tengan el formato de AAAA-MM-DD HH:MM:SS para UTC y que sean fechas del calendario reales. Para especificar una zona horaria con un desplazamiento UTC, utiliza el formato AAAA-MM-DD HH:MM:SS +/-TTTT, como `2014-04-18 11:30:00 +0800`.

Si especificas un formato de fecha en el archivo *_config.yml*, asegúrate de que el formato sea correcto.

## Sass o SCSS inválido

Este error significa que tu repositorio contiene un archivo Sass o SCSS con contenido inválido.

Para solucionar el problema, revisa el número de línea incluido en el mensaje de error para el Sass o SCSS inválido. Para ayudar a prevenir errores futuros, instala un limpiador de Sass o SCSS para tu editor de texto favorito.

## Submódulo inválido

Este error significa que tu repositorio incluye un submódulo que no se ha iniciado correctamente.

{% data reusables.pages.remove-submodule %}

Si quieres usar el submódulo, asegúrate de usar `https://` al hacer referencia al submódulo (no `http://`) y de que el submódulo se encuentre en un repositorio público.

## YAML inválido en el archivo de datos

Este error significa que uno de los archivos de la carpeta *_data* contiene YAML no válido.

Para solucionar el problema, asegúrate de que los archivos YAML de la carpeta *_data* sigan estas reglas:

{% data reusables.pages.yaml-rules %}

{% data reusables.pages.yaml-linter %}

Para obtener más información sobre los archivos de datos de Jekyll, consulta "[Archivos de datos](https://jekyllrb.com/docs/datafiles/)" en la documentación de Jekyll.

## Errores de Markdown

Este error significa que tu repositorio contiene errores de Markdown.

Para solucionar el problema, asegúrate de estar usando un procesador Markdown compatible. Para obtener más información, consulta "[Establecimiento de un procesador Markdown para el sitio de {% data variables.product.prodname_pages %} mediante Jekyll](/articles/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll)".

Luego asegúrate de que el archivo del mensaje de error utilice una sintaxis Markdown válida. Para obtener más información, consulta "[Markdown: Sintaxis](https://daringfireball.net/projects/markdown/syntax)" de Daring Fireball.

## Falta carpeta de docs

Este error significa que has elegido la carpeta `docs` en una rama como origen de publicación, pero no hay ninguna carpeta `docs` en la raíz del repositorio de esa rama.

Para solucionar el problema, si tu carpeta `docs` se movió accidentalmente, trata de volver a mover la carpeta `docs` a la raíz de tu repositorio en la rama que elegiste como tu origen de publicación. Si la carpeta `docs` se eliminó accidentalmente, puedes hacer lo siguiente:
- Usar Git para revertir o deshacer la eliminación. Para obtener más información, consulta "[git-revert](https://git-scm.com/docs/git-revert.html)" en la documentación de Git.
- Crea una carpeta `docs` nueva en la raíz de tu repositorio en la rama que elegiste para ser tu origen de publicación y agrega los archivos de origen de tu sitio a la carpeta. Para obtener más información, consulta "[Creación de archivos](/articles/creating-new-files)".
- Cambiar tu fuente de publicación. Para obtener más información, consulta "[Configuración de un origen de publicación de {% data variables.product.prodname_pages %}](/articles/configuring-a-publishing-source-for-github-pages)".

## Falta submódulo

Este error significa que tu repositorio incluye un submódulo que no existe o no se ha iniciado correctamente.

{% data reusables.pages.remove-submodule %}

Si quieres utilizar un submódulo, inicia el submódulo. Para obtener más información, consulta "[Submódulos de herramientas de Git](https://git-scm.com/book/en/v2/Git-Tools-Submodules)" en el libro _Pro Git_.

## Enlaces permanentes relativos configurados

Este error significa que tienes enlaces permanentes relativos que no son compatibles con {% data variables.product.prodname_pages %} en tu archivo *_config.yml*.

Los enlaces permanentes son URL permanentes que hacen referencia a una página particular en tu sitio. Los enlaces permanentes absolutos comienzan con la raíz del sitio, mientras que los enlaces permanentes relativos comienzan con la carpeta que contiene la página referenciada. {% data variables.product.prodname_pages %} y Jekyll ya no admiten enlaces permanentes relativos. Para obtener más información sobre los vínculos permanentes, consulta "[Vínculos permanentes](https://jekyllrb.com/docs/permalinks/)" en la documentación de Jekyll.

Para solucionar el problema, quita la línea `relative_permalinks` del archivo *_config.yml* y vuelve a formatear los vínculos permanentes relativos del sitio con vínculos permanentes absolutos. Para obtener más información, consulta "[Edición de archivos](/repositories/working-with-files/managing-files/editing-files)".

## El enlace simbólico no existe dentro del repositorio de tu sitio

Este error significa que tu sitio incluye un enlace simbólico (symlink) que no existe en los archivos publicados de tu sitio. Para obtener más información sobre los vínculos simbólicos, consulta "[Vínculo simbólico](https://en.wikipedia.org/wiki/Symbolic_link)" en Wikipedia.

Para solucionar el problema, determina si el archivo en el mensaje de error se utiliza para compilar tu sitio. De lo contrario, o si no quieres que el archivo sea un enlace simbólico, elimina el archivo. Si el archivo de enlace simbólico se necesita para compilar tu sitio, asegúrate de que el archivo o el directorio al que hace referencia el enlace simbólico esté en los archivos publicados de tu sitio. Para incluir recursos externos, considera la posibilidad de usar {% ifversion fpt or ghec %}`git submodule` o {% endif %}un administrador de paquetes de terceros como [Bower](https://bower.io/).{% ifversion fpt or ghec %} Para obtener más información, consulta "[Uso de submódulos con {% data variables.product.prodname_pages %}](/articles/using-submodules-with-github-pages)".{% endif %}

## Error de sintaxis en el bucle 'for'

Este error significa que tu código incluye una sintaxis no válida en una declaración de bucle `for` de Liquid.

Para solucionar el problema, asegúrate de que todos los bucles `for` en el archivo del mensaje de error tengan una sintaxis adecuada. Para obtener más información sobre la sintaxis adecuada de los bucles `for`, consulta "[Etiquetas de iteración](https://help.shopify.com/en/themes/liquid/tags/iteration-tags#for)" en la documentación de Liquid.

## Etiqueta no cerrada correctamente

Este mensaje de error significa que tu código incluye una etiqueta lógica que no está correctamente cerrada. Por ejemplo, {% raw %}`{% capture example_variable %}` debe cerrarse mediante `{% endcapture %}`{% endraw %}.

Para solucionar el problema, asegúrate de que todas las etiquetas lógicas en el archivo del mensaje de error estén correctamente cerradas. Para obtener más información, consulta "[Etiquetas de Liquid](https://help.shopify.com/en/themes/liquid/tags)" en la documentación de Liquid.

## Etiqueta no finalizada correctamente

Este error significa que tu código incluye una etiqueta de salida que no está correctamente finalizada. Por ejemplo, {% raw %}`{{ page.title }` en lugar de `{{ page.title }}`{% endraw %}.

Para solucionar el problema, asegúrate de que todas las etiquetas de salida en el archivo del mensaje de error finalicen con `}}`. Para obtener más información, consulta "[Objetos de Liquid](https://help.shopify.com/en/themes/liquid/objects)" en la documentación de Liquid.

## Error de etiqueta desconocido

Este error significa que tu código contiene una etiqueta de Liquid no reconocida.

Para solucionar el problema, asegúrate de que todas las etiquetas de Liquid en el archivo del mensaje de error coincidan con las variables predeterminadas de Jekyll y que no haya ningún error de escritura en los nombres de las etiquetas. Para obtener una lista de variables predeterminadas, consulta "[Variables](https://jekyllrb.com/docs/variables/)" en la documentación de Jekyll.

Los plugins no compatibles son una fuente común de etiquetas no reconocidas. Si usas un plugin no compatible en tu sitio cuando lo generas localmente y subes tus archivos estáticos a {% data variables.product.product_name %}, asegúrate de que el plugin no esté introduciendo etiquetas que no están en las variables predeterminadas de Jekyll. Para obtener una lista de los complementos admitidos, consulta "[Acerca de {% data variables.product.prodname_pages %} y Jekyll](/articles/about-github-pages-and-jekyll#plugins)".
