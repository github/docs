---
title: Filtrar y buscar propuestas y solicitudes de cambios
intro: 'Para encontrar información detallada sobre un repositorio en {% data variables.product.product_name %}, puedes filtrar, clasificar y buscar propuestas y solicitudes de cambios que sean relevantes para el repositorio.'
redirect_from:
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-assignees
  - /articles/filtering-issues-and-pull-requests-by-assignees
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests-by-assignees
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-labels
  - /articles/filtering-issues-and-pull-requests-by-labels
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests-by-labels
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-issues-and-pull-requests
  - /articles/filtering-issues-and-pull-requests
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-pull-requests-by-review-status
  - /articles/filtering-pull-requests-by-review-status
  - /github/managing-your-work-on-github/filtering-pull-requests-by-review-status
  - /github/managing-your-work-on-github/finding-information-in-a-repository
  - /articles/finding-information-in-a-repository
  - /github/managing-your-work-on-github/finding-information-in-a-repository/sharing-filters
  - /articles/sharing-filters
  - /github/managing-your-work-on-github/sharing-filters
  - /github/managing-your-work-on-github/finding-information-in-a-repository/using-search-to-filter-issues-and-pull-requests
  - /articles/using-search-to-filter-issues-and-pull-requests
  - /github/managing-your-work-on-github/using-search-to-filter-issues-and-pull-requests
  - /github/managing-your-work-on-github/finding-information-in-a-repository/sorting-issues-and-pull-requests
  - /articles/sorting-issues-and-pull-requests
  - /github/managing-your-work-on-github/sorting-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-assignees
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-labels
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-pull-requests-by-review-status
  - /github/administering-a-repository/finding-information-in-a-repository/sorting-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository/using-search-to-filter-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository/sharing-filters
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Issues
  - Pull requests
shortTitle: Filter and search
type: how_to
ms.openlocfilehash: 24f91958f98f4b6744ee3b21bf3d748aef062eb6
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107601'
---
{% data reusables.cli.filter-issues-and-pull-requests-tip %}

## Filtrar propuestas y solicitudes de extracción

Las propuestas y las solicitudes de extracción vienen con un conjunto de filtros predeterminados que puedes aplicar para organizar tus listas.

{% data reusables.search.requested_reviews_search %}

Puedes filtrar propuestas y solicitudes de extracción para buscar:
- Todas las propuestas y solicitudes de extracción abiertas
- Las propuestas y solicitudes de extracción creadas por ti
- Las propuestas y solicitudes de extracción que se te han asignado
- Propuestas y solicitudes de incorporación de cambios en las que apareces como [ **@mentioned**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)

{% data reusables.cli.filter-issues-and-pull-requests-tip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. Haz clic en **Filtros** para elegir el tipo de filtro que te interesa.
  ![Uso del menú desplegable Filtros](/assets/images/help/issues/issues_filter_dropdown.png)

## Filtrar propuestas y solicitudes de extracción por asignatarios

Una vez que hayas [asignado una propuesta o una solicitud de incorporación de cambios a alguien](/articles/assigning-issues-and-pull-requests-to-other-github-users), puedes encontrar elementos basados en quién está trabajando en ella.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. En el ángulo superior derecho, selecciona el menú desplegable Asignatario.
4. El menú desplegable Asignatario menciona a todos los usuarios que tienen acceso de escritura a tu repositorio. Haz clic en el nombre de la persona cuyos elementos asignados quieras ver, o haz clic en **No asignado a nadie** para ver qué propuestas no están asignadas.
![Uso de la pestaña desplegable Usuarios asignados](/assets/images/help/issues/issues_assignee_dropdown.png)

{% tip %}

Para borrar la selección de filtro, haz clic en **Borrar consultas de búsqueda, filtros y ordenaciones actuales**.

{% endtip %}

## Filtrar propuestas y solicitudes de extracción por etiquetas

Una vez que hayas [aplicado etiquetas a una propuesta o una solicitud de incorporación de cambios](/articles/applying-labels-to-issues-and-pull-requests), puedes encontrar elementos basados en sus etiquetas.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %}
4. En la lista de etiquetas, haz clic en una etiqueta para ver las propuestas y solicitudes de extracción a las que se ha aplicado.
  ![Lista de etiquetas de un repositorio](/assets/images/help/issues/labels-page.png)

{% tip %}

**Sugerencia:** Para borrar la selección de filtro, haz clic en **Borrar consultas de búsqueda, filtros y ordenaciones actuales**.

{% endtip %}

## Filtrar solicitudes de extracción por estado de revisión

Puedes usar filtros para ver en una lista las solicitudes de extracción por estado de revisión y buscar las solicitudes de extracción que has revisado o que otras personas te han pedido que revises.

Puedes filtrar la lista de solicitudes de extracción de un repositorio para buscar:
- Solicitudes de incorporación de cambios que aún no se han [revisado](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)
- Solicitudes de incorporación de cambios que [requieren una revisión](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging) antes de poder combinarse
- Solicitudes de extracción que ha aprobado un revisor
- Solicitudes de extracción en las que un revisor ha pedido cambios
- Solicitudes de incorporación de cambios que has revisado
- Solicitudes de incorporación de cambios que alguien te pidió directamente que revisaras
- Solicitudes de incorporación de cambios para las que [un usuario te ha pedido la revisión, o se la ha pedido a un equipo del que eres miembro](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
3. En el ángulo superior derecho, selecciona el menú desplegable Revisiones.
  ![Menú desplegable Revisiones en el menú de filtros sobre la lista de solicitudes de incorporación de cambios](/assets/images/help/pull_requests/reviews-filter-dropdown.png)
4. Elige un filtro para buscar todas las solicitudes de extracción con ese estado de filtro.
  ![Lista de filtros en el menú desplegable Revisiones](/assets/images/help/pull_requests/pr-review-filters.png)

## Utilizar búsqueda para filtrar propuestas y solicitudes de extracción

Puedes utilizar filtros avanzados para buscar propuestas y solicitudes de cambio que cumplan criterios específicos.

### Buscar propuestas y solicitudes de cambio

{% webui %}

La barra de búsqueda de propuestas y solicitudes de extracción te permite definir tus propios filtros personalizados y clasificar por una amplia variedad de criterios. Puedes encontrar la barra de búsqueda en las pestañas **Propuestas** y **Solicitudes de incorporación de cambios** de cada repositorio y en los [paneles Propuestas y Solicitudes de incorporación de cambios](/articles/viewing-all-of-your-issues-and-pull-requests).

![La barra de búsqueda de propuestas y solicitudes de extracción](/assets/images/help/issues/issues_search_bar.png)

{% tip %}

**Sugerencia:** {% data reusables.search.search_issues_and_pull_requests_shortcut %}

{% endtip %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Puedes utilizar el {% data variables.product.prodname_cli %} para buscar propuestas o solicitudes de cambio. Usa el subcomando `gh issue list` o `gh pr list` junto con el argumento `--search` y una consulta de búsqueda.

Por ejemplo, puedes enumerar, ordenados por fecha de creación, todas las propuestas que no tienen un usuario asignado y que tienen la etiqueta `help wanted` o `bug`.

```shell
gh issue list --search 'no:assignee label:"help wanted",bug sort:created-asc'
```

También puedes enumerar todas las solicitudes de incorporación de cambios que mencionan al equipo `octo-org/octo-team`.

```shell
gh pr list --search "team:octo-org/octo-team"
```

{% endcli %}

### Acerca de los términos de búsqueda

Con los términos de búsqueda de propuestas y solicitudes de extracción, puedes hacer lo siguiente:

- Filtra las propuestas y las solicitudes de incorporación de cambios por autor: `state:open type:issue author:octocat`
- Filtra las propuestas y las solicitudes de incorporación de cambios que impliquen, pero no necesariamente [ **@mention**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams), a determinados usuarios: `state:open type:issue involves:octocat`
- Filtra las propuestas y solicitudes de incorporación de cambios por usuario asignado: `state:open type:issue assignee:octocat`
- Filtra las propuestas y solicitudes de incorporación de cambios por etiqueta: `state:open type:issue label:"bug"`
- Filtra los términos de búsqueda utilizando `-` antes del término: `state:open type:issue -author:octocat`

{% tip %}

**Sugerencia:** Puedes filtrar las propuestas y solicitudes de incorporación de cambios por etiqueta mediante los operadores lógicos OR o AND.
- Para filtrar las propuestas mediante el operador lógico OR, usa la sintaxis de coma: `label:"bug","wip"`.
- Para filtrar las propuestas mediante el operador lógico AND, usa filtros de etiqueta independientes: `label:"bug" label:"wip"`.

{% endtip %}

Para el caso de informes de problemas, también puedes utilizar la búsqueda para:

- Filtrar los problemas vinculadas a una solicitud de incorporación de cambios mediante una referencia de cierre: `linked:pr`{% ifversion issue-close-reasons %}
- Filtrar los problemas por el motivo por el que se cerraron: `is:closed reason:complete` o `is:closed reason:"not planned"`{% endif %}

Para las solicitudes de cambios, también puedes utilizar la búsqueda para:
- Filtrar los [borradores](/articles/about-pull-requests#draft-pull-requests) de solicitudes de incorporación de cambios: `is:draft`
- Filtrar las solicitudes de incorporación de cambios que aún no se han [revisado](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews): `state:open type:pr review:none`
- Filtrar las solicitudes de incorporación de cambios que [requieren una revisión](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging) antes de poder combinarse: `state:open type:pr review:required`
- Filtrar las solicitudes de incorporación de cambios que ha aprobado un revisor: `state:open type:pr review:approved`
- Filtrar las solicitudes de incorporación de cambios en las que un revisor ha pedido cambios: `state:open type:pr review:changes_requested`
- Filtrar las solicitudes de incorporación de cambios por [revisor](/articles/about-pull-request-reviews/): `state:open type:pr reviewed-by:octocat`
- Filtrar las solicitudes de incorporación de cambios por el usuario específico [solicitado para la revisión](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review): `state:open type:pr review-requested:octocat`
- Filtrar las solicitudes de incorporación de cambios que alguien te pidió directamente que revisaras: `state:open type:pr user-review-requested:@me`
- Filtrar las solicitudes de incorporación de cambios por el equipo solicitado para la revisión: `state:open type:pr team-review-requested:github/docs`
- Filtrar las solicitudes de incorporación de cambios vinculadas a una incidencia que la solicitud de incorporación de cambios puede cerrar: `linked:issue`

## Clasificar propuestas y solicitudes de extracción

Los filtros pueden ser clasificados para ofrecer mejor información durante un período de tiempo específico.

Puedes clasificar cualquier vista filtrada por:

* Las propuestas y solicitudes de extracción creadas más recientemente
* Las propuestas y solicitudes de extracción creadas con mayor antigüedad
* Las propuestas y solicitudes de extracción más comentadas
* Las propuestas y solicitudes de extracción menos comentadas
* Las propuestas y solicitudes de extracción actualizadas más recientemente
* Las propuestas y solicitudes de extracción actualizadas con mayor antigüedad
* La reacción más agregada a las propuestas o solicitudes de cambio

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
1. En el ángulo superior derecho, selecciona el menú desplegable de Clasificación.
  ![Uso de la pestaña desplegable de ordenación](/assets/images/help/issues/issues_sort_dropdown.png)

Para borrar la selección de ordenación, haz clic en **Ordenar** > **Más reciente**.

## Compartir filtros

Cuando filtras o clasificas propuestas y solicitudes de extracción, la URL de tu navegador se actualiza automáticamente para coincidir con la nueva vista.

Puedes enviar la URL que genera esa propuesta a cualquier usuario, que podrá ver el mismo filtro que tú ves.

Por ejemplo, si filtras propuestas asignadas a Hubot, y clasificas las propuestas abiertas más antiguas, tu URL se actualizaría a algo similar a esto:

```
/issues?q=state:open+type:issue+assignee:hubot+sort:created-asc
```

## Información adicional

- "[Buscar propuestas y solicitudes de incorporación de cambios](/articles/searching-issues)"
