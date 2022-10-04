---
title: Agregar un tema a tu sitio de Páginas de GitHub con Jekyll
intro: Puedes personalizar tu sitio Jekyll agregando y personalizando un tema.
redirect_from:
  - /articles/customizing-css-and-html-in-your-jekyll-theme
  - /articles/adding-a-jekyll-theme-to-your-github-pages-site
  - /articles/adding-a-theme-to-your-github-pages-site-using-jekyll
  - /github/working-with-github-pages/adding-a-theme-to-your-github-pages-site-using-jekyll
  - /pages/getting-started-with-github-pages/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Add theme to Pages site
ms.openlocfilehash: 33969695e96aa0629b2811e2742ca3093e58139a
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147644799'
---
Las personas con permisos de escritura para un repositorio pueden agregar un tema a un sitio de {% data variables.product.prodname_pages %} con Jekyll.

{% data reusables.pages.test-locally %}

## Agregar un tema

{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %}
2. Vaya a *_config.yml*.
{% data reusables.repositories.edit-file %}
4. Agrega una nueva línea al archivo para el nombre del tema.
   - Para usar un tema compatible, escriba `theme: THEME-NAME`, reemplazando _THEME-NAME_ por el nombre del tema como se muestra en el archivo README del repositorio del tema. Para obtener una lista de los temas compatibles, consulte "[Temas admitidos](https://pages.github.com/themes/)" en el sitio {% data variables.product.prodname_pages %}.
   ![Tema compatible en el archivo de configuración](/assets/images/help/pages/add-theme-to-config-file.png)
   - Para usar cualquier otro tema de Jekyll hospedado en {% data variables.product.prodname_dotcom %}, escriba `remote_theme: THEME-NAME` reemplazando THEME-NAME por el nombre del tema como se muestra en el archivo README del repositorio del tema.
   ![Tema no compatible en el archivo de configuración](/assets/images/help/pages/add-remote-theme-to-config-file.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## Personalizar el CSS de tu tema

{% data reusables.pages.best-with-supported-themes %}

{% data reusables.pages.theme-customization-help %}

{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %}
1. Cree un nuevo archivo denominado _/assets/css/style.scss_.
2. Agrega el siguiente contenido en la parte superior del archivo:
  ```scss
  ---
  ---

  @import "{% raw %}{{ site.theme }}{% endraw %}";
  ```
3. Agregue cualquier CSS o Sass personalizado (incluidas las importaciones) que desee colocar inmediatamente después de la línea `@import`.

## Personalizar el diseño HTML de tu tema

{% data reusables.pages.best-with-supported-themes %}

{% data reusables.pages.theme-customization-help %}

1. En {% data variables.product.prodname_dotcom %}, desplázate hasta el repositorio fuente de tu tema. Por ejemplo, el repositorio de origen de Minima es https://github.com/jekyll/minima.
2. En la carpeta *_layouts*, vaya al archivo _default.html_ del tema.
3. Copie el contenido del archivo.
{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %}
6. Cree un archivo denominado *_layouts/default.html*.
7. Pega el contenido del diseño personalizado que copiaste anteriormente.
8. Personaliza el diseño como desees.

## Información adicional

- "[Creación de archivos](/articles/creating-new-files)"
