---
title: Anular la publicación de un sitio de Páginas de GitHub
intro: 'Puedes publicar tu sitio de {% data variables.product.prodname_pages %} para que éste deje de estar disponible.'
redirect_from:
  - /articles/how-do-i-unpublish-a-project-page
  - /articles/unpublishing-a-project-page
  - /articles/unpublishing-a-project-pages-site
  - /articles/unpublishing-a-user-pages-site
  - /articles/unpublishing-a-github-pages-site
  - /github/working-with-github-pages/unpublishing-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'People with admin or maintainer permissions for a repository can unpublish a {% data variables.product.prodname_pages %} site.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Unpublish Pages site
ms.openlocfilehash: bfb22638b51560cb0006cca49a55b9842d8b807d
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110031'
---
{% ifversion pages-custom-workflow %}

Al anular la publicación del sitio, este dejará de estar disponible. La configuración o el contenido del repositorio existentes no se verán afectados.

{% data reusables.repositories.navigate-to-repo %}
1. En **{% data variables.product.prodname_pages %}** , junto al mensaje **Su sitio está activo**, haz clic en {% octicon "kebab-horizontal" aria-label="the horizontal kebab icon" %}.
1. En el menú que aparece, selecciona **Anular la publicación del sitio**.

   ![Menú desplegable para anular la publicación del sitio](/assets/images/help/pages/unpublish-site.png)

{% else %}

## Anular la publicación de un sitio de proyecto

{% data reusables.repositories.navigate-to-repo %}
2. Si existe una rama `gh-pages` en el repositorio, elimine la rama `gh-pages`. Para más información, vea "[Creación y eliminación de ramas dentro del repositorio](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch)".
3. Si la rama `gh-pages` era el origen de publicación, {% ifversion fpt or ghec %}avance al paso 6{% else %}se anulará la publicación del sitio y puede avanzar a los pasos restantes{% endif %}.
{% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
5. En "{% data variables.product.prodname_pages %}", use el menú desplegable **Origen** y seleccione **Ninguno.** 
  ![Menú desplegable para seleccionar un origen de publicación](/assets/images/help/pages/publishing-source-drop-down.png) {% data reusables.pages.update_your_dns_settings %}

## Anular la publicación de un sitio de usuario o de organización

{% data reusables.repositories.navigate-to-repo %}
2. Borra la rama que estás utilizando como fuente de publicación, o borra todo el repositorio. Para más información, vea "[Creación y eliminación de ramas dentro del repositorio](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch)" y "[Eliminación de un repositorio](/articles/deleting-a-repository)".
{% data reusables.pages.update_your_dns_settings %}

{% endif %}
