---
title: Agregar un tema a tu sitio de Páginas de GitHub con el selector de tema
intro: Puedes añadir un tema a tu sitio de {% data variables.product.prodname_pages %} para personalizar la apariencia de tu sitio.
redirect_from:
- /articles/creating-a-github-pages-site-with-the-jekyll-theme-chooser
- /articles/adding-a-jekyll-theme-to-your-github-pages-site-with-the-jekyll-theme-chooser
- /articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser
- /github/working-with-github-pages/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
- Pages
shortTitle: Add theme to a Pages site
permissions: People with admin permissions for a repository can use the theme chooser to add a theme to a {% data variables.product.prodname_pages %} site.
ms.openlocfilehash: b38ce81802b5137f49fef076ffdc5a16392a446d
ms.sourcegitcommit: febc27cb8f2d53c97b51e614a941931f85ae5d95
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/27/2022
ms.locfileid: "147428380"
---
## <a name="about-the-theme-chooser"></a>Acerca del selector de temas

{% ifversion pages-custom-workflow %}

{% note %}

**Nota**: Los sitios de {% data variables.product.prodname_pages %} publicados con un flujo de trabajo de {% data variables.product.prodname_actions %} personalizado no admiten el selector de temas de Jekyll. Si compilas el sitio con Jekyll y lo publicas con un flujo de trabajo de {% data variables.product.prodname_actions %} personalizado, puedes agregar un tema editando el archivo `_config.yml`. Para obtener más información, consulta "[Agregar un tema al tu sitio de GitHub Pages con Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll)".

{% endnote %}

{% endif %}

El selector de temas agrega un tema de Jekyll a tu repositorio. Para obtener más información acerca de Jekyll, consulta "[Acerca de {% data variables.product.prodname_pages %} y Jekyll](/articles/about-github-pages-and-jekyll)".

La forma en que funciona el selector de temas depende de si tu repositorio es público o privado.
  - Si las {% data variables.product.prodname_pages %} ya están habilitadas para tu repositorio, el selector de temas agregará tu tema a la fuente de publicación actual.
  - Si tu repositorio es público y {% data variables.product.prodname_pages %} se encuentra inhabilitado para éste, mediante el selector de temas podrás habilitar {% data variables.product.prodname_pages %} y configurar la rama predeterminada como tu fuente de publicación.
  - Si tu repositorio es público, y las {% data variables.product.prodname_pages %} están inhabilitadas para tu repositorio, debes habilitar las {% data variables.product.prodname_pages %} configurando una fuente de publicación antes de poder usar el selector de temas.

Para más información sobre los orígenes de publicación, vea ["Acerca de {% data variables.product.prodname_pages %}](/articles/about-github-pages#publishing-sources-for-github-pages-sites)".

Si antes agregaste manualmente un tema de Jekyll a tu repositorio, puede que esos archivos se apliquen incluso después de que uses el selector de temas. Para evitar conflictos, elimina todas las carpetas y archivos de temas agregados manualmente antes de usar el selector de temas. Para obtener más información, consulta "[Incorporación de un tema al sitio de {% data variables.product.prodname_pages %} mediante Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)".

## <a name="adding-a-theme-with-the-theme-chooser"></a>Agregar un tema con el selector de temas

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
3. En "{% data variables.product.prodname_pages %}", haz clic en **Elegir un tema** o **Cambiar tema**.
  ![Botón para elegir un tema](/assets/images/help/pages/choose-a-theme.png)
4. En la parte superior de la página, haz clic en el tema que quieras y luego haz clic en **Seleccionar tema**.
  ![Opciones de temas y botón para seleccionar tema](/assets/images/help/pages/select-theme.png)
5. Es posible que se te pida que edites el archivo *README.md* del sitio.
   - Para editar el archivo más adelante, haz clic en **Cancelar**.
   ![Enlace de cancelación al editar un archivo](/assets/images/help/pages/cancel-edit.png)
   - Para editar el archivo ahora, consulta "[Editar archivos](/repositories/working-with-files/managing-files/editing-files)".

El tema elegido se aplicará automáticamente a los archivos markdown de tu repositorio. Para aplicar el tema a los archivos HTML de tu repositorio, debes agregar el texto preliminar de YAML que especifica un diseño para cada archivo. Para obtener más información, consulta "[Front Matter](https://jekyllrb.com/docs/front-matter/)" en el sitio de Jekyll.

## <a name="further-reading"></a>Información adicional

- [Temas](https://jekyllrb.com/docs/themes/) en el sitio de Jekyll
