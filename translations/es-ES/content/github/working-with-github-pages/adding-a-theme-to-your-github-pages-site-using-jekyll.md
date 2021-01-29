---
title: Agregar un tema a tu sitio de Páginas de GitHub con Jekyll
intro: Puedes personalizar tu sitio Jekyll agregando y personalizando un tema.
redirect_from:
  - /articles/customizing-css-and-html-in-your-jekyll-theme/
  - /articles/adding-a-jekyll-theme-to-your-github-pages-site/
  - /articles/adding-a-theme-to-your-github-pages-site-using-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Las personas con permisos de escritura para un repositorio pueden agregar un tema a un sitio de {% data variables.product.prodname_pages %} con Jekyll.

{% data reusables.pages.test-locally %}

### Agregar un tema

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
2. Navega hasta *_config.yml*.
{% data reusables.repositories.edit-file %}
4. Agrega una nueva línea al archivo para el nombre del tema.
   - Para utilizar un tema compatible, teclea `theme: THEME-NAME`, reemplazando _THEME-NAME_ con el nombre del tema como se muestra en el archivo README del repositorio del tema. Para conocer la lista de temas compatibles, consulta "[Temas compatibles](https://pages.github.com/themes/)" en el sitio de {% data variables.product.prodname_pages %}. ![Tema compatible en el archivo de configuración](/assets/images/help/pages/add-theme-to-config-file.png)
   - Para usar cualquier otro tema de Jekyll alojado en {% data variables.product.prodname_dotcom %}, escribe `remote_theme: THEME-NAME`, reemplazando THEME-NAME por el nombre del tema, tal como se muestra en el README del repositorio del tema. ![Tema no compatible en el archivo de configuración](/assets/images/help/pages/add-remote-theme-to-config-file.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

### Personalizar el CSS de tu tema

{% data reusables.pages.best-with-supported-themes %}

{% data reusables.pages.theme-customization-help %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
1. Crea un archivo nuevo denominado _/assets/css/style.scss_.
2. Agrega el siguiente contenido en la parte superior del archivo:
  ```
  ---
  ---

  @import "{{ site.theme }}";
  ```
3. Agrega cualquier CSS o Sass personalizado que quieras (incluidas importaciones) inmediatamente después de la línea `@import`.

### Personalizar el diseño HTML de tu tema

{% data reusables.pages.best-with-supported-themes %}

{% data reusables.pages.theme-customization-help %}

1. En {% data variables.product.prodname_dotcom %}, desplázate hasta el repositorio fuente de tu tema. Por ejemplo, el repositorio fuente para Minima es https://github.com/jekyll/minima.
2. En la carpeta *_layouts*, desplázate hasta el archivo _default.html_ de tu tema.
3. Copia los contenidos del archivo.
{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
6. Crea un archivo denominado *_layouts/default.html*.
7. Pega el contenido del diseño personalizado que copiaste anteriormente.
8. Personaliza el diseño como desees.

### Further reading

- "[Crear archivos nuevos](/articles/creating-new-files)"
