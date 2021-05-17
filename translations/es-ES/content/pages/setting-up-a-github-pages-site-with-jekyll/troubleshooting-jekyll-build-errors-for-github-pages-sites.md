---
title: Solucionar problemas de errores de compilación de Jekyll para sitios de Páginas de GitHub
intro: 'Puedes usar los mensajes de error de compilación de Jekyll para solucionar los problemas de tu sitio de {% data variables.product.prodname_pages %}.'
redirect_from:
  - /articles/page-build-failed-missing-docs-folder/
  - /articles/page-build-failed-invalid-submodule/
  - /articles/page-build-failed-missing-submodule/
  - /articles/page-build-failed-markdown-errors/
  - /articles/page-build-failed-config-file-error/
  - /articles/page-build-failed-unknown-tag-error/
  - /articles/page-build-failed-tag-not-properly-terminated/
  - /articles/page-build-failed-tag-not-properly-closed/
  - /articles/page-build-failed-file-does-not-exist-in-includes-directory/
  - /articles/page-build-failed-file-is-a-symlink/
  - /articles/page-build-failed-symlink-does-not-exist-within-your-sites-repository/
  - /articles/page-build-failed-file-is-not-properly-utf-8-encoded/
  - /articles/page-build-failed-invalid-post-date/
  - /articles/page-build-failed-invalid-sass-or-scss/
  - /articles/page-build-failed-invalid-highlighter-language/
  - /articles/page-build-failed-relative-permalinks-configured/
  - /articles/page-build-failed-syntax-error-in-for-loop/
  - /articles/page-build-failed-invalid-yaml-in-data-file/
  - /articles/page-build-failed-date-is-not-a-valid-datetime/
  - /articles/troubleshooting-github-pages-builds/
  - /articles/troubleshooting-jekyll-builds/
  - /articles/troubleshooting-jekyll-build-errors-for-github-pages-sites
  - /github/working-with-github-pages/troubleshooting-jekyll-build-errors-for-github-pages-sites
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pages
---

### Solucionar problemas de errores de compilación

Si Jekyll encuentra un error al compilar tu sitio de {% data variables.product.prodname_pages %} localmente o en {% data variables.product.product_name %}, puede usar los mensajes de error para solucionar los problemas. Para obtener más información acerca de los mensajes de error y de cómo verlos, consulta "[Acerca de los errores de compilación de Jekyll para sitios de {% data variables.product.prodname_pages %}](/articles/about-jekyll-build-errors-for-github-pages-sites)".

Si recibiste un mensaje de error genérico, revisa los problemas comunes.
- Estás usando plugins no compatibles. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_pages %} y de Jekyll](/articles/about-github-pages-and-jekyll#plugins)".{% if currentVersion == "free-pro-team@latest" %}
- Tu repositorio ha excedido nuestros límites de tamaño del repositorio. Para obtener más información, consulta "[¿Cuál es mi cuota de disco?](/articles/what-is-my-disk-quota)"{% endif %}
- Cambiaste el parámetro `fuente` de tu archivo *_config.yml*. {% data variables.product.prodname_pages %} reemplaza este parámetro durante el proceso de compilación.
- Un nombre de archivo en tu fuente de publicación contiene dos puntos (`:`), los cuales no se admiten.

Si recibiste un mensaje de error específico, revisa la información de solución de problemas para el mensaje de error que aparece a continuación.

Después de haber corregido los errores, sube los cambios a la fuente de publicación de tu sitio para activar otra compilación en {% data variables.product.product_name %}.

### Error de archivo de configuración

Este error significa que su sitio no se pudo compilar porque el archivo *_config.yml* contiene errores de sintaxis.

Para solucionar el problema, asegúrate de que tu archivo *_config.yml* respete estas reglas:

{% data reusables.pages.yaml-rules %}

{% data reusables.pages.yaml-linter %}

### La fecha no es una fecha válida

Este error significa que una de las páginas de tu sitio incluye una fecha inválida.

Para solucionar el problema, busca el archivo en el mensaje de error y los diseños del archivo para encontrar llamadas a cualquier filtro Liquid relacionado con la fecha. Asegúrate de que todas las variables ingresadas en los filtros Liquid relacionados con la fecha contengan valores en todos los casos y nunca ingreses `nil` o `""`. Para obtener más información, consulta "[Filtros Liquid](https://help.shopify.com/en/themes/liquid/filters)" en la documentación de Liquid.

### El archivo no existe en el directorio includes

Este error significa que tu código hace referencia a un archivo que no existe en el directorio *_includes*.

{% data reusables.pages.search-for-includes %} Si alguno de los archivos a los que has hecho referencia no se encuentra en el directorio *_includes*, copia o mueve los archivos al directorio *_includes*.

### El archivo es un enlace simbólico

Este error significa que tu código hace referencia a un archivo simbólico que no existe en la fuente de publicación de tu sitio.

{% data reusables.pages.search-for-includes %} Si alguno de los archivos a los que has hecho referencia es un enlace simbólico, copia o mueve los archivos al directorio *_includes*.

### El archivo no está correctamente codificado en UTF-8

Este error significa que usaste caracteres no latinos, como `日本語`, sin decirle a la computadora que esperara estos símbolos.

Para solucionar el problema, fuerza la codificación en UTF-8 agregando la siguiente línea a tu archivo *_config.yml*:
```yaml
codificación: UTF-8
```

### Lenguaje de resaltado inválido

Este error significa que has especificado un resaltador de sintaxis distinto de [Rouge](https://github.com/jneen/rouge) o [Pygments](http://pygments.org/) en tu archivo de configuración.

Para solucionar el problema, actualiza tu archivo *_config.yml* para especificar [Rouge](https://github.com/jneen/rouge) o [Pygments](http://pygments.org/). Para obtener más información, consulta "[Acerca de las {% data variables.product.product_name %} y Jekyll](/articles/about-github-pages-and-jekyll#syntax-highlighting)".

### Fecha de publicación inválida

Este error significa que una publicación en tu sitio contiene una fecha inválida en el nombre de archivo o en el asunto de la parte delantera de YAML.

Para solucionar el problema, asegúrate de que todas las fechas tengan el formato de AAAA-MM-DD HH:MM:SS para UTC y que sean fechas del calendario reales. Para especificar una zona horaria con un desplazamiento desde UTC, utiliza el formato AAAA-MM-DD HH:MM:SS +/-TTTT, como `2014-04-18 11:30:00 +0800`.

Si especificas un formato de fecha en tu archivo *_config.yml*, asegúrate de que tenga el formato correcto.

### Sass o SCSS inválido

Este error significa que tu repositorio contiene un archivo Sass o SCSS con contenido inválido.

Para solucionar el problema, revisa el número de línea incluido en el mensaje de error para el Sass o SCSS inválido. Para ayudar a prevenir errores futuros, instala un limpiador de Sass o SCSS para tu editor de texto favorito.

### Submódulo inválido

Este error significa que tu repositorio incluye un submódulo que no se ha iniciado correctamente.

{% data reusables.pages.remove-submodule %}

Si quieres usar el submódulo, asegúrate de usar `https://` cuando hagas referencia al submódulo (no `http://`) y que el submódulo esté en un repositorio público.

### YAML inválido en el archivo de datos

Este error significa que uno o más archivos en la carpeta *_data* contiene un YAML inválido.

Para solucionar el problema, asegúrate de que tu archivo YAML de la carpeta *_data* respete estas reglas:

{% data reusables.pages.yaml-rules %}

{% data reusables.pages.yaml-linter %}

Para obtener más información sobre los archivos de datos de Jekyll, consulta "[Archivos de datos](https://jekyllrb.com/docs/datafiles/)" en la documentación de Jekyll.

### Errores de Markdown

Este error significa que tu repositorio contiene errores de Markdown.

Para solucionar el problema, asegúrate de estar usando un procesador Markdown compatible. Para obtener más información, consulta "[Configurar un procesador Markdown para tu sitio de {% data variables.product.prodname_pages %} usando Jekyll](/articles/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll)".

Luego asegúrate de que el archivo del mensaje de error utilice una sintaxis Markdown válida. Para obtener más información, consulta "[Markdown: sintaxis](https://daringfireball.net/projects/markdown/syntax)" en Daring Fireball.

### Falta carpeta de docs

Este error significa que has elegido la carpeta `docs` en una rama como tu fuente de publicación, pero no hay una carpeta `docs` en la raíz de tu repositorio en esa rama.

Para solucionar el problema, si tu carpeta `docs` se movió accidentalmente, trata de volver a mover la carpeta `docs` a la raíz de tu repositorio en la rama que elegiste como tu fuente de publicación. Si la carpeta `docs` se eliminó accidentalmente, también puedes hacer lo siguiente:
- Usar Git para revertir o deshacer la eliminación. Para obtener más información, consulta "[git-revert](https://git-scm.com/docs/git-revert.html)" en la documentación de Git.
- Crea una carpeta de `docs` nueva en la raíz de tu repositorio en la rama que elegiste para ser tu fuente de publicación y agrega los archivos fuente de tu sitio a la carpeta. Para obtener más información, consulta "[Crear nuevos archivos](/articles/creating-new-files)."
- Cambiar tu fuente de publicación. Para obtener más información, consulta "[Configurar una fuente de publicación para {% data variables.product.prodname_pages %}](/articles/configuring-a-publishing-source-for-github-pages)".

### Falta submódulo

Este error significa que tu repositorio incluye un submódulo que no existe o no se ha iniciado correctamente.

{% data reusables.pages.remove-submodule %}

Si quieres utilizar un submódulo, inicia el submódulo. Para obtener más información, consulta "[Herramientas Git - Submódulos](https://git-scm.com/book/en/v2/Git-Tools-Submodules)" en el libro _Pro Git_.

### Enlaces permanentes relativos configurados

Este error significa que tienes enlaces permanentes relativos que no son compatibles con {% data variables.product.prodname_pages %} en tu archivo *_config.yml*.

Los enlaces permanentes son URL permanentes que hacen referencia a una página particular en tu sitio. Los enlaces permanentes absolutos comienzan con la raíz del sitio, mientras que los enlaces permanentes relativos comienzan con la carpeta que contiene la página referenciada. {% data variables.product.prodname_pages %} y Jekyll ya no admiten enlaces permanentes relativos. Para obtener más información acerca de los enlaces permanentes, consulta "[Enlaces permanentes](https://jekyllrb.com/docs/permalinks/)" en la documentación de Jekyll.

Para solucionar el problema, elimina la línea `relativa_permalinks` de tu archivo *_config.yml* y vuelve a formatear cualquier enlace permanente relativo de tu sitio con enlaces permanentes absolutos. Para obtener más información, consulta "[Editar archivos en tu repositorio](/articles/editing-files-in-your-repository)".

### El enlace simbólico no existe dentro del repositorio de tu sitio

Este error significa que tu sitio incluye un enlace simbólico (symlink) que no existe en la fuente de publicación de tu sitio. Para obtener más información acerca de los enlaces simbólicos, consulta "[Enlace simbólico](https://en.wikipedia.org/wiki/Symbolic_link)" en Wikipedia.

Para solucionar el problema, determina si el archivo en el mensaje de error se utiliza para compilar tu sitio. De lo contrario, o si no quieres que el archivo sea un enlace simbólico, elimina el archivo. Si el archivo de enlace simbólico se necesita para compilar tu sitio, asegúrate de que el archivo o el directorio al que hace referencia el enlace simbólico esté en la fuente de publicación de tu sitio. Para incluir los activos externos, considera utilizar {% if currentVersion == "free-pro-team@latest" %}`git submodule` o {% endif %}un administrador de paquetes de terceros tal como [Bower](https://bower.io/).{% if currentVersion == "free-pro-team@latest" %} Para obtener más información, consulta la sección "[Utilizar los submódulos con {% data variables.product.prodname_pages %}](/articles/using-submodules-with-github-pages)".{% endif %}

### Error de sintaxis en el bucle 'for'

Este error significa que tu código incluye una sintaxis inválida en una declaración de bucle `for` de Liquid.

Para solucionar el problema, asegúrate de que todos los bucles `for` en el archivo del mensaje de error tengan una sintaxis adecuada. Para obtener más información acerca de la sintaxis adecuada para los bucles `for`, consulta "[Etiquetas de iteración](https://help.shopify.com/en/themes/liquid/tags/iteration-tags#for)" en la documentación de Liquid.

### Etiqueta no cerrada correctamente

Este mensaje de error significa que tu código incluye una etiqueta lógica que no está correctamente cerrada. Por ejemplo, {% raw %}`{% capture example_variable %}` debe estar cerrada con `{% endcapture %}`{% endraw %}.

Para solucionar el problema, asegúrate de que todas las etiquetas lógicas en el archivo del mensaje de error estén correctamente cerradas. Para obtener más información, consulta "[Etiquetas de Liquid](https://help.shopify.com/en/themes/liquid/tags)" en la documentación de Liquid.

### Etiqueta no finalizada correctamente

Este error significa que tu código incluye una etiqueta de salida que no está correctamente finalizada. Por ejemplo, {% raw %}`{{ page.title }` en lugar de `{{ page.title }}`{% endraw %}.

Para solucionar el problema, asegúrate de que todas las etiquetas de salida en el archivo del mensaje de error finalicen con `}}`. Para obtener más información, consulta "[Objetos de Liquid](https://help.shopify.com/en/themes/liquid/objects)" en la documentación de Liquid.

### Error de etiqueta desconocido

Este error significa que tu código contiene una etiqueta de Liquid no reconocida.

Para solucionar el problema, asegúrate de que todas las etiquetas de Liquid en el archivo del mensaje de error coincidan con las variables predeterminadas de Jekyll y que no haya ningún error de escritura en los nombres de las etiquetas. Para encontrar una lista de variables predeterminadas, consulta la sección "[Variables](https://jekyllrb.com/docs/variables/)" en la documentación de Jekyll.

Los plugins no compatibles son una fuente común de etiquetas no reconocidas. Si usas un plugin no compatible en tu sitio cuando lo generas localmente y subes tus archivos estáticos a {% data variables.product.product_name %}, asegúrate de que el plugin no esté introduciendo etiquetas que no están en las variables predeterminadas de Jekyll. Para obtener una lista de plugin compatibles, consulta "[Acerca de las {% data variables.product.prodname_pages %} y Jekyll](/articles/about-github-pages-and-jekyll#plugins)".
