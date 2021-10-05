---
title: Filtering and searching issues and pull requests
intro: 'To find detailed information about a repository on {% data variables.product.product_name %}, you can filter, sort, and search issues and pull requests that are relevant to the repository.'
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
topics:
  - Issues
  - Pull requests
shortTitle: Filter and search
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

Once you've [assigned an issue or pull request to someone](/articles/assigning-issues-and-pull-requests-to-other-github-users), you can find items based on who's working on them.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. En el ángulo superior derecho, selecciona el menú desplegable Asignatario.
4. El menú desplegable Asignatario menciona a todos los usuarios que tienen acceso de escritura a tu repositorio. Haz clic en el nombre de la persona cuyos elementos asignados deseas ver, o haz clic en **No asignado a nadie** para ver qué propuestas no están asignadas. ![Utilizar la pestaña desplegable Asignatarios](/assets/images/help/issues/issues_assignee_dropdown.png)

{% tip %}

Para borrar tu selección de filtro, haz clic en **Borrar consultas de búsqueda, filtros y clasificaciones actuales**.

{% endtip %}

## Filtrar propuestas y solicitudes de extracción por etiquetas

Once you've [applied labels to an issue or pull request](/articles/applying-labels-to-issues-and-pull-requests), you can find items based on their labels.

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
- Solicitudes de extracción que tú has revisado
- Solicitudes de extracción que [alguien te ha pedido a ti que revises o a un equipo del que eres miembro](/articles/requesting-a-pull-request-review)

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
3. En el ángulo superior derecho, selecciona el menú desplegable Revisiones. ![Menú desplegable Revisiones en el menú de filtros sobre la lista de solicitudes de extracción](/assets/images/help/pull_requests/reviews-filter-dropdown.png)
4. Elige un filtro para buscar todas las solicitudes de extracción con ese estado de filtro. ![Lista de filtros en el menú desplegable Revisiones](/assets/images/help/pull_requests/pr-review-filters.png)

## Utilizar búsqueda para filtrar propuestas y solicitudes de extracción

You can use advanced filters to search for issues and pull requests that meet specific criteria.

### Searching for issues and pull requests

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

You can use the {% data variables.product.prodname_cli %} to search for issues or pull requests. Use the `gh issue list` or `gh pr list` subcommand along with the `--search` argument and a search query.

For example, you can list, in order of date created, all issues that have no assignee and that have the label `help wanted` or `bug`.

```shell
gh issue list --search 'no:assignee label:"help wanted",bug sort:created-asc'
```

You can also list all pull requests that mention the `octo-org/octo-team` team.

```shell
gh pr list --search "team:octo-org/octo-team"
```

{% endcli %}

### About search terms

Con los términos de búsqueda de propuestas y solicitudes de extracción, puedes hacer lo siguiente:

- Filtrar propuestas y solicitudes de extracción por autor: `state:open type:issue author:octocat`
- Filtrar propuestas y solicitudes de extracción que involucren, aunque no necesariamente [**@mention**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) (mencionen), determinadas personas: `state:open type:issue involves:octocat`
- Filtrar propuestas y solicitudes de extracción por asignatario: `state:open type:issue assignee:octocat`
- Filtrar propuestas y solicitudes de extracción por etiqueta: `state:open type:issue label:"bug"`
- Filtra los términos de búsqueda utilizando `-` antes del término: `state:open type:issue -author:octocat`

{% ifversion fpt or ghes > 3.2 or ghae-next %}
{% tip %}

**Tip:** You can filter issues and pull requests by label using logical OR or using logical AND.
- To filter issues using logical OR, use the comma syntax: `label:"bug","wip"`.
- To filter issues using logical AND, use separate label filters: `label:"bug" label:"wip"`.

{% endtip %}
{% endif %}

{% ifversion fpt or ghes or ghae %}
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
- Filtrar solicitudes de extracción por el usuario específico [que solicitó la revisión](/articles/requesting-a-pull-request-review): `state:open type:pr review-requested:octocat`
- Filtrar solicitudes de extracción por el equipo que se solicita para revisión: `state:open type:pr team-review-requested:github/atom`{% ifversion fpt or ghes or ghae %}
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

- "[Searching issues and pull requests](/articles/searching-issues)""
