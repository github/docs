---
title: Agregar contenido a tu sitio de Páginas de GitHub con Jekyll
intro: 'Puedes agregar una página nueva o publicar tu sitio Jekyll a tu sitio en las {% data variables.product.prodname_pages %}.'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/adding-content-to-your-github-pages-site-using-jekyll
  - /github/working-with-github-pages/adding-content-to-your-github-pages-site-using-jekyll
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pages
---

Las personas con permisos de escritura para un repositorio pueden agregar contenido a un sitio de {% data variables.product.prodname_pages %} con Jekyll.

### Acerca del contenido en sitios Jekyll

Antes de poder agregar contenido a un sitio Jekyll en las {% data variables.product.prodname_pages %}, debes crear un sitio Jekyll. Para obtener más información, consulta "[Crear un sitio de {% data variables.product.prodname_pages %} con Jekyll](/articles/creating-a-github-pages-site-with-jekyll)".

Los principales tipos de contenido para sitios Jekyll son páginas y publicaciones. Una página es para el contenido independiente que no está asociado con una fecha específica, como una página "Acerca de". El sitio Jekyll predeterminado contiene un archivo denominado `about.md`, que se representa como una página en tu sitio en `TU-SITE-URL/about`. Puedes editar los contenidos de ese archivo para personalizar tu página "Acerca de" y usar la página "Acerca de" como plantilla para crear páginas nuevas. Para obtener más información, consulta "[Páginas](https://jekyllrb.com/docs/pages/)" en la documentación de Jekyll.

Una publicación es una entrada de blog. El sitio Jekyll predeterminado contiene un directorio denominado `_posts` que contiene un archivo de publicación predeterminada. Puedes editar los contenidos de esa publicación y usar la publicación predeterminada como plantilla para crear publicaciones nuevas. Para obtener más información, consulta "[Publicaciones](https://jekyllrb.com/docs/posts/)" en la documentación de Jekyll.

Tu tema incluye diseños predeterminados, inclusiones y hojas de estilos que se aplicarán automáticamente a las páginas y publicaciones nuevas de tu sitio; sin embargo, puedes reemplazar cualquiera de estas formas predeterminadas. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_pages %} y de Jekyll](/articles/about-github-pages-and-jekyll#themes)".

{% data reusables.pages.about-front-matter %}

{% data reusables.pages.test-locally %}

### Agregar una página nueva a tu sitio

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
3. En la raíz de tu fuente de publicación, crea un archivo nuevo para tu página denominado _PAGE-NAME.md_, reemplazando _PAGE-NAME_ por un nombre de archivo significativo para la página.
4. Agrega el siguiente texto preliminar de YAML a la parte superior del archivo, reemplazando _PAGE TITLE_ por el título de la página y _URL-PATH_ por la ruta que quieras para la URL de la página. Por ejemplo, si la URL base de tu sitio es `https://octocat.github.io` y tu _URL-PATH_ es `/about/contact/`, tu página se encontrará en `https://octocat.github.io/about/contact`.
  ```shell
  layout: page
  title: "<em>PAGE TITLE</em>"
  permalink: /<em>URL-PATH</em>/
  ```
5. Debajo del texto preliminar, agrega contenido para tu página.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}
{% data reusables.files.choose_pull_request %}
{% data reusables.files.merge_pull_request %}
{% data reusables.files.write_commit_message_pull_request %}
{% data reusables.files.confirm_merge %}
{% data reusables.files.delete_branch %}

### Agregar una publicación nueva a tu sitio

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
3. Desplázate hasta el directorio `_posts`.
4. Crea un archivo nuevo denominado _YYYY-MM-DD-NAME-OF-POST.md_, reemplazando _YYY-MM-DD_ por la fecha de tu publicación y _NAME-OF-POST_ por el nombre de tu publicación.
4. Agrega el siguiente texto preliminar de YAML en la parte superior del archivo, reemplazando _POST TITLE_ por el título de la publicación, _YYYYY-MM-DD hh:mm:ss -0000_ por la fecha y hora de la publicación, y _CATEGORY-1_ y _CATEGORY-2_ por tantas categorías como las que quieras para tu publicación.
  ```shell
  layout: post
  title: "<em>POST TITLE</em>"
  date: </em>YYYY-MM-DD hh:mm:ss -0000</em>
  categories: <em>CATEGORY-1</em> <em>CATEGORY-2</em>
  ```
5. Debajo del texto preliminar, agrega contenido para tu publicación.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}
{% data reusables.files.choose_pull_request %}
{% data reusables.files.merge_pull_request %}
{% data reusables.files.write_commit_message_pull_request %}
{% data reusables.files.confirm_merge %}
{% data reusables.files.delete_branch %}

¡Ahora tu publicación debería estar disponible en tu sitio! Si la URL base de tu sitio es `https://octocat.github.io`, entonces tu publicación nueva se ubicará en `https://octocat.github.io/YYYY/MM/DD/TITLE.html`.

### Pasos siguientes

{% data reusables.pages.add-jekyll-theme %} Para obtener más información, consulta "[Agregar un tema a tu sitio de {% data variables.product.prodname_pages %} con Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)".
