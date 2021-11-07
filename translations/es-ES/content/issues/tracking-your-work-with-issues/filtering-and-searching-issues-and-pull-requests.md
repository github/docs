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
shortTitle: Filtrar y buscar
type: how_to
---

{% data reusables.cli.filter-issues-and-pull-requests-tip %}

## Filtrar propuestas y solicitudes de extracción

Las propuestas y las solicitudes de extracción vienen con un conjunto de filtros predeterminados que puedes aplicar para organizar tus listas.

{% data reusables.search.requested_reviews_search %}

Puedes filtrar propuestas y solicitudes de extracción para buscar:
- Todas las propuestas y solicitudes de extracción abiertas
- Las propuestas y solicitudes de extracción creadas por ti
- Las propuestas y solicitudes de extracción que se te han asignado
- Las propuestas y solicitudes de extracción en las que eres [**@mencionado**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)

{% data reusables.cli.filter-issues-and-pull-requests-tip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. Haz clic en **Filtros** para elegir el tipo de filtro que te interesa. ![Usar el menú desplegable Filtros](/assets/images/help/issues/issues_filter_dropdown.png)

## Filtrar propuestas y solicitudes de extracción por asignatarios

Una vez que hayas [asignado una propuesta o solicitud de cambios a alguien](/articles/assigning-issues-and-pull-requests-to-other-github-users), puedes encontrar los elementos con base en quién está trabajando en ellos.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. En el ángulo superior derecho, selecciona el menú desplegable Asignatario.
4. El menú desplegable Asignatario menciona a todos los usuarios que tienen acceso de escritura a tu repositorio. Haz clic en el nombre de la persona cuyos elementos asignados deseas ver, o haz clic en **No asignado a nadie** para ver qué propuestas no están asignadas. ![Utilizar la pestaña desplegable Asignatarios](/assets/images/help/issues/issues_assignee_dropdown.png)

{% tip %}

Para borrar tu selección de filtro, haz clic en **Borrar consultas de búsqueda, filtros y clasificaciones actuales**.

{% endtip %}

## Filtrar propuestas y solicitudes de extracción por etiquetas

Una vez que hayas [aplicado etiquetas a una propuesta o solicitud de cambios](/articles/applying-labels-to-issues-and-pull-requests), puedes encontrar los elementos con base en sus etiquetas.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
4. En la lista de etiquetas, haz clic en una etiqueta para ver las propuestas y solicitudes de extracción a las que se ha aplicado. ![Lista de etiquetas de repositorio](/assets/images/help/issues/labels-page.png)

{% tip %}

**Sugerencia:** Para borrar tu selección de filtro, haz clic en **Borrar consultas de búsqueda, filtros y clasificaciones actuales**.

{% endtip %}

## Filtrar solicitudes de extracción por estado de revisión

Puedes usar filtros para ver en una lista las solicitudes de extracción por estado de revisión y buscar las solicitudes de extracción que has revisado o que otras personas te han pedido que revises.

Puedes filtrar la lista de solicitudes de extracción de un repositorio para buscar:
- Solicitudes de extracción que no han sido [revisadas](/articles/about-pull-request-reviews) todavía
- Solicitudes de extracción que [requieren una revisión](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging) antes de que puedan fusionarse
- Solicitudes de extracción que ha aprobado un revisor
- Solicitudes de extracción en las que un revisor ha pedido cambios
- Solicitudes de cambios que revisaste{% ifversion fpt or ghae or ghes > 3.2 or ghec %}
- Solicitudes de cambios que alguien te pidió que revisaras directamente{% endif %}
- Solicitudes de extracción que [alguien te ha pedido a ti que revises o a un equipo del que eres miembro](/articles/requesting-a-pull-request-review)

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
3. En el ángulo superior derecho, selecciona el menú desplegable Revisiones. ![Menú desplegable Revisiones en el menú de filtros sobre la lista de solicitudes de extracción](/assets/images/help/pull_requests/reviews-filter-dropdown.png)
4. Elige un filtro para buscar todas las solicitudes de extracción con ese estado de filtro. ![Lista de filtros en el menú desplegable Revisiones](/assets/images/help/pull_requests/pr-review-filters.png)

## Utilizar búsqueda para filtrar propuestas y solicitudes de extracción

Puedes utilizar filtros avanzados para buscar propuestas y solicitudes de cambio que cumplan criterios específicos.

### Buscar propuestas y solicitudes de cambio

{% include tool-switcher %}

{% webui %}

La barra de búsqueda de propuestas y solicitudes de extracción te permite definir tus propios filtros personalizados y clasificar por una amplia variedad de criterios. Puedes encontrar la barra de búsqueda en las pestañas **Issues** (Propuestas) y **Pull requests** (Solicitudes de extracción) de cada repositorio y en tus [tableros de Issues (Propuestas) y Pull requests (Solicitudes de extracción)](/articles/viewing-all-of-your-issues-and-pull-requests).

![La barra de búsqueda de propuestas y solicitudes de extracción](/assets/images/help/issues/issues_search_bar.png)

{% tip %}

**Sugerencia:** {% data reusables.search.search_issues_and_pull_requests_shortcut %}

{% endtip %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Puedes utilizar el {% data variables.product.prodname_cli %} para buscar propuestas o solicitudes de cambio. Utiliza el subcomando `gh issue list` o `gh pr list` junto con el argumento `--search` y consulta de búsqueda.

Por ejemplo, puedes listar, en orden de fecha en la que se creó, todas las propuestas que no tengan asignado a alguien y que tengan la etiqueta `help wanted` o `bug`.

```shell
gh issue list --search 'no:assignee label:"help wanted",bug sort:created-asc'
```

También puedes listar todas las solicitudes de cambio que mencionen al equipo `octo-org/octo-team`.

```shell
gh pr list --search "team:octo-org/octo-team"
```

{% endcli %}

### Acerca de los términos de búsqueda

Con los términos de búsqueda de propuestas y solicitudes de extracción, puedes hacer lo siguiente:

- Filtrar propuestas y solicitudes de extracción por autor: `state:open type:issue author:octocat`
- Filtrar propuestas y solicitudes de extracción que involucren, aunque no necesariamente [**@mention**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) (mencionen), determinadas personas: `state:open type:issue involves:octocat`
- Filtrar propuestas y solicitudes de extracción por asignatario: `state:open type:issue assignee:octocat`
- Filtrar propuestas y solicitudes de extracción por etiqueta: `state:open type:issue label:"bug"`
- Filtra los términos de búsqueda utilizando `-` antes del término: `state:open type:issue -author:octocat`

{% ifversion fpt or ghes > 3.2 or ghae-next or ghec %}
{% tip %}

**Tip:** Puedes filtrar propuestas y solicitudes de cambio por etiqueta utilizando el componente lógico OR o el AND.
- Para filtrar propuestas utilizando el componente lógico OR, utiliza la sintaxis con coma: `label:"bug","wip"`.
- Para filtrar propuestas utilizando el componente lógico AND, utiliza filtros de etiqueta separados: `label:"bug" label:"wip"`.

{% endtip %}
{% endif %}

{% ifversion fpt or ghes or ghae or ghec %}
Para el caso de informes de problemas, también puedes utilizar la búsqueda para:

- Filtrar los informes de problemas enlazados a una solicitud de extracción mediante una referencia de cierre: `linked:pr`
{% endif %}

Para las solicitudes de cambios, también puedes utilizar la búsqueda para:
- Filtrar solicitudes de extracción [en borrador](/articles/about-pull-requests#draft-pull-requests): `is:draft`
- Filtrar solicitudes de extracción que aún no hayan sido [revisadas](/articles/about-pull-request-reviews): `state:open type:pr review:none`
- Filtrar solicitudes de extracción que [requieran una revisión](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging) antes de que se puedan fusionar: `state:open type:pr review:required`
- Filtrar solicitudes de extracción que haya aprobado un revisor: `state:open type:pr review:approved`
- Filtrar solicitudes de extracción en las que un revisor haya solicitado cambios: `state:open type:pr review:changes_requested`
- Filtrar solicitudes de extracción por [revisor](/articles/about-pull-request-reviews/): `state:open type:pr reviewed-by:octocat`
- Filtrar solicitudes de cambios por usuario específico [al que se le solicitó la revisión](/articles/requesting-a-pull-request-review): `state:open type:pr review-requested:octocat`{% ifversion fpt or ghae or ghes > 3.2 or ghec %}
- Filtrar solicitudes de cambio que alguien te pidió revisar directamente: `state:open type:pr user-review-requested:@me`{% endif %}
- Filtrar solicitudes de extracción por el equipo que se solicita para revisión: `state:open type:pr team-review-requested:github/atom`{% ifversion fpt or ghes or ghae or ghec %}
- Filtrar por las solicitudes de extracción enlazadas con un informe de problemas que se pudiera cerrar con dicha solicitud: `linked:issue`{% endif %}

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

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
1. En el ángulo superior derecho, selecciona el menú desplegable de Clasificación. ![Utilizar la pestaña desplegable de Clasificación](/assets/images/help/issues/issues_sort_dropdown.png)

Para borrar tu selección de clasificación, haz clic en **Sort** &#062 (Clasificar); **Newest** (Más reciente).


## Compartir filtros

Cuando filtras o clasificas propuestas y solicitudes de extracción, la URL de tu navegador se actualiza automáticamente para coincidir con la nueva vista.

Puedes enviar la URL que genera esa propuesta a cualquier usuario, que podrá ver el mismo filtro que tú ves.

Por ejemplo, si filtras propuestas asignadas a Hubot, y clasificas las propuestas abiertas más antiguas, tu URL se actualizaría a algo similar a esto:

```
/issues?q=state:open+type:issue+assignee:hubot+sort:created-asc
```

## Leer más

- "[Buscar propuestas y solicitudes de cambio](/articles/searching-issues)""
