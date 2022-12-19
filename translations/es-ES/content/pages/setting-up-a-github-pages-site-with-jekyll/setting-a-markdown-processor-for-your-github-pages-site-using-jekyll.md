---
title: Configurar un procesador Markdown para tu sitio de páginas de GitHub usando Jekyll
intro: 'Puedes elegir un procesador Markdown para determinar la manera en que Markdown se representa en tu sitio de {% data variables.product.prodname_pages %}.'
redirect_from:
  - /articles/migrating-your-pages-site-from-maruku
  - /articles/updating-your-markdown-processor-to-kramdown
  - /articles/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll
  - /github/working-with-github-pages/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Set Markdown processor
ms.openlocfilehash: 218877ee598afd47352d1e72a2ecb845f901c8b9
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145137858'
---
Las personas con permisos de escritura para un repositorio pueden configurar el procesador Markdown para un sitio de {% data variables.product.prodname_pages %}.

{% data variables.product.prodname_pages %} admite dos procesadores de Markdown: [kramdown](http://kramdown.gettalong.org/) y el propio procesador de Markdown de {% data variables.product.prodname_dotcom %}, que se usa para representar [{% data variables.product.prodname_dotcom %} Flavored Markdown (GFM)](https://github.github.com/gfm/) desde {% data variables.product.product_name %}. Para más información, vea "[Acerca de la escritura y el formato en {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github)".

Puedes utilizar el Lenguaje de Marcado Enriquecido de {% data variables.product.prodname_dotcom %} con cualquier procesador, pero solo tu procesador de GFM empatará siempre con los resultados que ves en {% data variables.product.product_name %}.

{% data reusables.pages.navigate-site-repo %}
2. En el repositorio, vaya hasta el archivo *_config.yml*.
{% data reusables.repositories.edit-file %}
4. Busque la línea que comienza por `markdown:` y cambie el valor a `kramdown` o `GFM`.
  ![Configuración de Markdown en config.yml](/assets/images/help/pages/config-markdown-value.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## Información adicional

- [Documentación de kramdown](https://kramdown.gettalong.org/documentation.html)
- [Especificación de {% data variables.product.prodname_dotcom %} Flavored Markdown](https://github.github.com/gfm/)
