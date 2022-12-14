---
title: Acerca de las wikis
intro: 'Puedes alojar documentación para tu repositorio en una wiki, para que otros puedan usar y colaborar con tu proyecto.'
redirect_from:
  - /articles/about-github-wikis
  - /articles/about-wikis
  - /github/building-a-strong-community/about-wikis
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 94800761c60bb984745e582e2c9691e294e7a90d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529627'
---
Cada repositorio en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} viene equipado con una sección para hospedar documentación, llamada wiki. Puedes usar la wiki de tu repositorio para compartir contenido en forma completa acerca de tu proyecto, como por ejemplo cómo usarlo, cómo lo diseñaste o sus principios básicos. Un archivo README rápidamente dice lo que puede hacer tu proyecto, mientras que puedes usar una wiki para proporcionar documentación adicional. Para más información, vea "[Acerca de los archivos Léame](/articles/about-readmes)".

Con las wikis, puedes escribir contenido como en cualquier otro lado en {% data variables.product.product_name %}. Para más información, vea "[Introducción a la escritura y el formato en {% data variables.product.prodname_dotcom %}](/articles/getting-started-with-writing-and-formatting-on-github)". Usamos [nuestra biblioteca de marcado de código abierto](https://github.com/github/markup) para convertir diferentes formatos en HTML, por lo que puede optar por escribir en Markdown o en cualquier otro formato admitido. 

{% data reusables.getting-started.math-and-diagrams %}

{% ifversion fpt or ghes or ghec %}Si crea una wiki en un repositorio público, estará disponible para {% ifversion ghes %}todos los usuarios con acceso a {% data variables.product.product_location %}{% else %}el público public{% endif %}. {% endif %}Si creas un wiki en un repositorio privado{% ifversion ghec or ghes %} o interno{% endif %}, solo los {% elsif ghae %}miembros empresariales{% endif %} en {% ifversion fpt or ghes or ghec %} que tengan acceso a dicho repositorio podrán acceder a este wiki. Para más información, vea "[Configuración de la visibilidad de un repositorio](/articles/setting-repository-visibility)".

Puedes editar las wikis directamente en {% data variables.product.product_name %} o puedes editar los archivos wiki localmente. Predeterminadamente, solo las personas con acceso a tu repositorio podrán hacer cambios a los wikis, aunque podrás permitir que cualquiera en {% data variables.product.product_location %} colabore con un wiki en {% ifversion ghae %}un repositorio interno{% else %}un repositorio público{% endif %}. Para obtener más información, consulta [Cambio de permisos de acceso para wikis](/communities/documenting-your-project-with-wikis/changing-access-permissions-for-wikis).

{% note %}

**Nota:** Los motores de búsqueda no indexarán el contenido de las wikis. Para que el contenido se indexe en los motores de búsqueda, puede usar [{% data variables.product.prodname_pages %}](/pages) en un repositorio público.

{% endnote %}

## Información adicional

- "[Adición o eliminación de páginas de wiki](/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages)"
- "[Creación de un pie de página o una barra lateral para la wiki](/communities/documenting-your-project-with-wikis/creating-a-footer-or-sidebar-for-your-wiki)"
- "[Edición del contenido de una wiki](/communities/documenting-your-project-with-wikis/editing-wiki-content)"
- "[Visualización del historial de cambios de una wiki](/articles/viewing-a-wiki-s-history-of-changes)"
- "[Búsqueda en wikis](/search-github/searching-on-github/searching-wikis)"
