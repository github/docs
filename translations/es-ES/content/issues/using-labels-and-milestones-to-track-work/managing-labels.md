---
title: Administrar las etiquetas
intro: 'Puedes clasificar {% ifversion fpt or ghec %}propuestas, solicitudes de incorporación de cambios y debates{% else %}propuestas y solicitudes de incorporación de cambios{% endif %} si creas, editas, aplicas y borras las etiquetas.'
permissions: '{% data reusables.enterprise-accounts.emu-permission-repo %}'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/managing-labels
  - /articles/managing-Labels
  - /articles/labeling-issues-and-pull-requests
  - /github/managing-your-work-on-github/labeling-issues-and-pull-requests
  - /articles/about-labels
  - /github/managing-your-work-on-github/about-labels
  - /articles/creating-and-editing-labels-for-issues-and-pull-requests
  - /articles/creating-a-label
  - /github/managing-your-work-on-github/creating-a-label
  - /articles/customizing-issue-labels
  - /articles/applying-labels-to-issues-and-pull-requests
  - /github/managing-your-work-on-github/applying-labels-to-issues-and-pull-requests
  - /articles/editing-a-label
  - /github/managing-your-work-on-github/editing-a-label
  - /articles/deleting-a-label
  - /github/managing-your-work-on-github/deleting-a-label
  - /github/managing-your-work-on-github/managing-labels
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
type: how_to
ms.openlocfilehash: 42feddd5ebbdee81140d3aab48b81f83a2c6e69f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145135270'
---
## Acerca de las etiquetas

Puede administrar el trabajo en {% data variables.product.product_name %} si crea etiquetas para categorizar {% ifversion fpt or ghec %}incidencias, solicitudes de incorporación de cambios y debates{% else %}incidencias y solicitudes de incorporación de cambios{% endif %}. Puedes aplicar etiquetas en el repositorio en el que éstas se hayan creado. Una vez que existe una etiqueta, puede usarla en cualquier {% ifversion fpt or ghec %}incidencia, solicitud de incorporación de cambios o debate{% else %}incidencia o solicitud de incorporación de cambios{% endif %} dentro de ese repositorio.

## Acerca de las etiquetas predeterminadas

{% data variables.product.product_name %} ofrece etiquetas predeterminadas en cada repositorio nuevo. Puede usar estas etiquetas predeterminadas para facilitar la creación de un flujo de trabajo estándar en un repositorio.

Etiqueta | Descripción
---  | ---
`bug` | Indica un problema inesperado o un comportamiento no deseado{% ifversion fpt or ghes or ghec %}
`documentation` | Indica una necesidad de mejoras o adiciones a la documentación{% endif %}
`duplicate` | Indica {% ifversion fpt or ghec %}incidencias, solicitudes de incorporación de cambios o debates{% else %}incidencias o solicitudes de incorporación de cambios{% endif %} similares
`enhancement` | Indica solicitudes de nueva función
`good first issue` | Indica una buena propuesta para los colaboradores por primera vez
`help wanted` | Indica que un mantenedor necesita ayuda en una propuesta o solicitud de extracción
`invalid` | Indica que una {% ifversion fpt or ghec %}incidencia, una solicitud de incorporación de cambios o un debate{% else %}incidencia o solicitud de incorporación de cambios{% endif %} ya no es importante
`question` | Indica que una {% ifversion fpt or ghec %}incidencia, una solicitud de incorporación de cambios o un debate{% else %}incidencia o solicitud de incorporación de cambios{% endif %} necesita más información
`wontfix` | Indica que el trabajo no continuará en una {% ifversion fpt or ghec %}incidencia, solicitud de incorporación de cambios o un debate{% else %}incidencia o solicitud de incorporación de cambios{% endif %}

Las etiquetas predeterminadas se incluyen en todos los repositorios nuevos cuando se crea el repositorio, pero luego puedes editarlas o eliminarlas.

Las incidencias con la etiqueta `good first issue` se usan para rellenar la página `contribute` del repositorio. Para obtener un ejemplo de una página `contribute`, vea [github/docs/contribute](https://github.com/github/docs/contribute). 

{% ifversion fpt or ghes or ghec %} Los propietarios de la organización pueden personalizar las etiquetas predeterminadas para los repositorios de su organización. Para más información, vea "[Administración de etiquetas predeterminadas para repositorios de la organización](/articles/managing-default-labels-for-repositories-in-your-organization)".
{% endif %}

## Crear una etiqueta

Cualquiera con acceso de escritura en un repositorio puede crear una etiqueta.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %}
4. A la derecha del campo de búsqueda, haga clic en **Nueva etiqueta**.
{% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.create-label %}

## Aplicar una etiqueta

Cualquiera con acceso de clasificación en un repositorio puede aplicar y descartar etiquetas.

1. Vaya a la {% ifversion fpt or ghec %}incidencia, la solicitud de incorporación de cambios o el debate{% else %}incidencia o solicitud de incorporación de cambios{% endif %}.
1. En la barra lateral derecha, a la derecha de "Etiquetas", haz clic en {% octicon "gear" aria-label="The gear icon" %} y luego en la etiqueta.
  ![Menú desplegable "Etiquetas"](/assets/images/help/issues/labels-drop-down.png)

## Editar una etiqueta

Cualquiera con acceso de escritura en un repositorio puede editar las etiquetas existentes.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %} {% data reusables.project-management.edit-label %} {% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.save-label %}

## Eliminar una etiqueta

Cualquiera con acceso de escritura en un repositorio puede borrar las etiquetas existentes.

El borrar una etiqueta la eliminará de las propuestas y soilcitudes de cambios.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %} {% data reusables.project-management.delete-label %}

## Información adicional
- "[Filtrado y búsqueda de incidencias y solicitudes de incorporación de cambios](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)"{% ifversion fpt or ghes or ghec %}
- "[Administración de etiquetas predeterminadas para repositorios de la organización](/articles/managing-default-labels-for-repositories-in-your-organization)"{% endif %}{% ifversion fpt or ghec %}
- "[Fomento de colaboraciones útiles para el proyecto con etiquetas](/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels)"{% endif %}
- "[Sintaxis de escritura y formato básicos](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#using-emoji)"
