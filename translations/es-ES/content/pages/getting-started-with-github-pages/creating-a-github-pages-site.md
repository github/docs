---
title: Crear un sitio de Páginas de GitHub
intro: 'Puede crear un sitio de {% data variables.product.prodname_pages %} en un repositorio nuevo o existente.'
redirect_from:
  - /articles/creating-pages-manually
  - /articles/creating-project-pages-manually
  - /articles/creating-project-pages-from-the-command-line
  - /articles/creating-project-pages-using-the-command-line
  - /articles/creating-a-github-pages-site
  - /github/working-with-github-pages/creating-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Create a GitHub Pages site
ms.openlocfilehash: 83f953ac5c5c109abd5f63fd595642e4fd139113
ms.sourcegitcommit: febc27cb8f2d53c97b51e614a941931f85ae5d95
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/27/2022
ms.locfileid: '147428360'
---
{% data reusables.pages.org-owners-can-restrict-pages-creation %}

## <a name="creating-a-repository-for-your-site"></a>Crear un repositorio para tu sitio

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.repositories.create_new %} {% data reusables.repositories.owner-drop-down %} {% indented_data_reference reusables.pages.emu-org-only spaces=3 %} {% data reusables.pages.create-repo-name %} {% data reusables.repositories.choose-repo-visibility %} {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}

## <a name="creating-your-site"></a>Crear tu sitio

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.decide-publishing-source %}
1. Crea el archivo de entrada para el sitio. {% data variables.product.prodname_pages %} buscará un archivo `index.html`, `index.md` o `README.md` como archivo de entrada para el sitio.

   {% ifversion pages-custom-workflow %}Si el origen de publicación es una rama y una carpeta, el archivo de entrada debe estar en el nivel superior de la carpeta de origen de la rama de origen. Por ejemplo, si la fuente de publicación es la carpeta `/docs` de la rama `main`, el archivo de entrada debe estar en la carpeta `/docs` de una rama denominada `main`.

   Si la fuente de publicación es un flujo de trabajo de {% data variables.product.prodname_actions %}, el artefacto que implementes debe incluir el archivo de entrada en el nivel superior del artefacto. En lugar de agregar el archivo de entrada al repositorio, puedes optar por que el flujo de trabajo de {% data variables.product.prodname_actions %} genere el archivo de entrada cuando se ejecute el flujo de trabajo.{% else %} El archivo de entrada debe estar en el nivel superior de la fuente de publicación elegida. Por ejemplo, si la fuente de publicación es la carpeta `/docs` de la rama `main`, el archivo de entrada debe estar en la carpeta `/docs` de una rama denominada `main`.{% endif %} {% data reusables.pages.configure-publishing-source %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %} {% data reusables.pages.choose-visibility %} {% data reusables.pages.visit-site %} {% data reusables.pages.check-workflow-run %}

{% data reusables.pages.admin-must-push %}

## <a name="next-steps"></a>Pasos siguientes

Puedes agregar más páginas a tu sitio creando más archivos nuevos. Cada archivo estará disponible en tu sitio en la misma estructura de directorios que tu fuente de publicación. Por ejemplo, si el origen de publicación del sitio del proyecto es la rama `gh-pages` y crea un nuevo archivo denominado `/about/contact-us.md` en la rama `gh-pages`, el archivo estará disponible en {% ifversion fpt or ghec %}`https://<user>.github.io/<repository>/{% else %}`http(s)://<hostname>/pages/<username>/<repository>/{% endif %}about/contact-us.html`.

También puedes agregar un tema para personalizar la apariencia de tu sitio. Para obtener más información, vea {% ifversion fpt or ghec %}"[Adición de un tema al sitio de {% data variables.product.prodname_pages %} con el selector de temas](/articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser){% else %}"[Adición de un tema al sitio de {% data variables.product.prodname_pages %} mediante Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll){% endif %}".

Para personalizar aún más tu sitio, puedes usar Jekyll, un generador de sitio estático con soporte integrado para {% data variables.product.prodname_pages %}. Para más información, vea "[Acerca de {% data variables.product.prodname_pages %} y Jekyll](/articles/about-github-pages-and-jekyll)".

## <a name="further-reading"></a>Información adicional

- "[Solución de problemas de errores de compilación de Jekyll para sitios de {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)"
- "[Creación y eliminación de ramas en el repositorio](/articles/creating-and-deleting-branches-within-your-repository)"
- "[Creación de archivos](/articles/creating-new-files)"
