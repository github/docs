---
title: Filtrar propuestas y solicitudes de extracción por hito
intro: 'Las propuestas y solicitudes de extracción se pueden filtrar según el hito con el que están asociadas. Una vez que hayas [asociado una incidencia o una solicitud de incorporación de cambios con un hito](/articles/associating-milestones-with-issues-and-pull-requests), puedes encontrar elementos en función de sus hitos. Dentro de un hito, puedes priorizar las propuestas y solicitudes de extracción.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-milestones/filtering-issues-and-pull-requests-by-milestone
  - /articles/filtering-issues-and-pull-requests-by-milestone
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests-by-milestone
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Filter by milestone
ms.openlocfilehash: 6eda4a52df3212b37c3052832291f03aa2285fd5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145135294'
---
{% tip %}

**Sugerencias:**

- Si prefieres filtrar propuestas y solicitudes de extracción usando la barra de búsqueda, puedes usar la sintaxis de búsqueda de hitos. Para un hito denominado Mi hito, la sintaxis de búsqueda sería: `milestone:"My Milestone"`.
- Para borrar la selección de filtro, haga clic en **Clear current search query, filters, and sorts** (Borrar consultas de búsqueda, filtros y ordenaciones actuales).
-  También puedes filtrar las propuestas o solicitudes de cambios si utilizas el {% data variables.product.prodname_cli %}. Para más información, vea "[`gh issue list`](https://cli.github.com/manual/gh_issue_list)" o "[`gh pr list`](https://cli.github.com/manual/gh_pr_list)" en la documentación de {% data variables.product.prodname_cli %}.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. Seleccione **Milestones** (Hitos) a fin de ver una lista de todos los hitos disponibles para el repositorio.
  ![Botón Hitos](/assets/images/help/issues/issues_milestone_button.png)
4. Selecciona el hito que te interesa en la lista. En la página del hito puedes ver información relevante sobre el hito, incluidas todas las propuestas y solicitudes de extracción asociadas con él. Para más información, vea "[Acerca de los hitos](/articles/about-milestones)".

## Información adicional

- "[Filtrado y búsqueda de incidencias y solicitudes de incorporación de cambios](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)"
- "[Filtrado de tarjetas en un panel de proyecto](/articles/filtering-cards-on-a-project-board)"
