---
title: Crear una página 404 personalizada para tu sitio de Páginas de GitHub
intro: Puedes mostrar una página personalizada de error 404 cuando se intente acceder a páginas que no existen en tu sitio.
redirect_from:
  - /articles/custom-404-pages
  - /articles/creating-a-custom-404-page-for-your-github-pages-site
  - /github/working-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Create custom 404 page
ms.openlocfilehash: 1b10946277d90773b847b929d85a3b6cf8212a4e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880569'
---
{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %} {% data reusables.files.add-file %}
3. En el campo del nombre de archivo, escriba `404.html` o `404.md`.
  ![Campo Nombre de archivo](/assets/images/help/pages/404-file-name.png)
4. Si ha asignado el nombre `404.md` al archivo, agregue el siguiente texto preliminar de YAML al comienzo del archivo:
  ```yaml
  ---
  permalink: /404.html
  ---
  ```
5. Debajo del texto preliminar de YAML, si aparece, agrega el contenido que quieras mostrar en tu página 404.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## Información adicional

- [Texto preliminar](http://jekyllrb.com/docs/frontmatter) en la documentación de Jekyll
