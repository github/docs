---
title: Guía de inicio rápido para GitHub Pages
intro: 'Puedes utilizar {% data variables.product.prodname_pages %} para mostrar algunos proyectos de código abierto, hospedar un blog o incluso compartir tu CV. Esta guía te ayudará a iniciar creando tu siguiente sitio web.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Pages
shortTitle: Quickstart
product: '{% data reusables.gated-features.pages %}'
ms.openlocfilehash: a6cf4a2f00237206a3c15083797aa12c832cf32c
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: '145140266'
---
## <a name="introduction"></a>Introducción

Las {% data variables.product.prodname_pages %} son páginas web públicas que se publican a través de {% data variables.product.product_name %}. La forma más rápida de iniciar es utilizando el Selector de Temas de Jekyll para que cargue un tema preconfigurado. Posteriormente, podrás modificar el estilo y contenido de tus {% data variables.product.prodname_pages %}.

Esta guía le llevará por la creación de un sitio de usuario en `username.github.io`.

## <a name="creating-your-website"></a>Crear tu sitio web

{% data reusables.repositories.create_new %}
1. Escriba `username.github.io` como nombre del repositorio. Reemplace `username` por su nombre de usuario de {% data variables.product.prodname_dotcom %}. Por ejemplo, si el nombre de usuario es `octocat`, el nombre del repositorio debe ser `octocat.github.io`.
   ![Campo del nombre del repositorio](/assets/images/help/pages/create-repository-name-pages.png) {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
1. Haga clic en **Choose a theme** (Elegir un tema).
   ![Botón para elegir un tema](/assets/images/help/pages/choose-theme.png)
2. Se abrirá el selector de temas. Examine los temas disponibles y, después, haga clic en **Select theme** (Seleccionar tema) para seleccionar un tema. Puedes cambiar tu tema más adelante sin problema, así que, si no estás seguro, solo elige uno para comenzar.
   ![Opciones de temas y botón para seleccionar tema](/assets/images/help/pages/select-theme.png)
3. Después de seleccionar un tema, el archivo del repositorio `README.md` se abrirá en el editor de archivos. El archivo `README.md` es donde escribirá el contenido de su sitio. Puedes editar el archivo o mantener el contenido predeterminado por el momento.
4. Cuando haya terminado de editar el archivo, haga clic en **Commit changes** (Confirmar cambios).
5. Visite `username.github.io` para ver su nuevo sitio web. **Nota**: Es posible que la publicación de los cambios en el sitio tarde hasta 20 minutos después de enviar los cambios a {% data variables.product.product_name %}.

## <a name="changing-the-title-and-description"></a>Cambiar el título y la descripción

De manera predeterminada, el título del sitio es `username.github.io`. Puede cambiar el título. Para ello, edite el archivo `_config.yml` en el repositorio. También puedes agregar una descripción de tu sitio.

1. Haga clic en la pestaña **Code** (Código) del repositorio.
1. En la lista de archivos, haga clic en `_config.yml` para abrir el archivo.
1. Haz clic en {% octicon "pencil" aria-label="The edit icon" %} para editar el archivo.
1. El archivo `_config.yml` ya contiene una línea que especifica el tema del sitio. Agregue una nueva línea con `title:` seguido del título que quiera. Agregue una nueva línea con `description:` seguido de la descripción que quiera. Por ejemplo:

   ```yaml
   theme: jekyll-theme-minimal
   title: Octocat's homepage
   description: Bookmark this to keep an eye on my project updates!
   ```

1. Cuando haya terminado de editar el archivo, haga clic en **Commit changes** (Confirmar cambios).

## <a name="next-steps"></a>Pasos siguientes

Para obtener más información sobre cómo agregar páginas adicionales a su sitio, vea "[Incorporación de contenido a su sitio de GitHub Pages mediante Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll#about-content-in-jekyll-sites)".

Para obtener más información sobre cómo configurar un sitio de {% data variables.product.prodname_pages %} con Jekyll, vea "[Acerca de GitHub Pages y Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)".
