---
title: Utilizar búsqueda para filtrar propuestas y solicitudes de extracción
intro: Cada vista de propuestas y solicitudes de extracción viene con una barra de búsqueda para la administración de filtros avanzada.
redirect_from:
  - /articles/using-search-to-filter-issues-and-pull-requests
  - /github/managing-your-work-on-github/using-search-to-filter-issues-and-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
La barra de búsqueda de propuestas y solicitudes de extracción te permite definir tus propios filtros personalizados y clasificar por una amplia variedad de criterios. Puedes encontrar la barra de búsqueda en las pestañas **Issues** (Propuestas) y **Pull requests** (Solicitudes de extracción) de cada repositorio y en tus [tableros de Issues (Propuestas) y Pull requests (Solicitudes de extracción)](/articles/viewing-all-of-your-issues-and-pull-requests).

![La barra de búsqueda de propuestas y solicitudes de extracción](/assets/images/help/issues/issues_search_bar.png)

{% tip %}

**Sugerencia:** {% data reusables.search.search_issues_and_pull_requests_shortcut %}

{% endtip %}

Con los términos de búsqueda de propuestas y solicitudes de extracción, puedes hacer lo siguiente:

- Filtrar propuestas y solicitudes de extracción por autor: `state:open type:issue author:octocat`
- Filtrar propuestas y solicitudes de extracción que involucren, aunque no necesariamente [**@mention**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) (mencionen), determinadas personas: `state:open type:issue involves:octocat`
- Filtrar propuestas y solicitudes de extracción por asignatario: `state:open type:issue assignee:octocat`
- Filtrar propuestas y solicitudes de extracción por etiqueta: `state:open type:issue label:"bug"`

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
Para el caso de informes de problemas, también puedes utilizar la búsqueda para:

- Filtrar los informes de problemas enlazados a una solicitud de extracción mediante una referencia de cierre: `linked:pr`
{% endif %}

For pull requests, you can also use search to:
- Filtrar solicitudes de extracción [en borrador](/articles/about-pull-requests#draft-pull-requests): `is:draft`
- Filtrar solicitudes de extracción que aún no hayan sido [revisadas](/articles/about-pull-request-reviews): `state:open type:pr review:none`
- Filtrar solicitudes de extracción que [requieran una revisión](/articles/about-required-reviews-for-pull-requests) antes de que se puedan fusionar: `state:open type:pr review:required`
- Filtrar solicitudes de extracción que haya aprobado un revisor: `state:open type:pr review:approved`
- Filtrar solicitudes de extracción en las que un revisor haya solicitado cambios: `state:open type:pr review:changes_requested`
- Filtrar solicitudes de extracción por [revisor](/articles/about-pull-request-reviews/): `state:open type:pr reviewed-by:octocat`
- Filtrar solicitudes de extracción por el usuario específico [que solicitó la revisión](/articles/requesting-a-pull-request-review): `state:open type:pr review-requested:octocat`
- Filtrar solicitudes de extracción por el equipo que se solicita para revisión: `state:open type:pr team-review-requested:github/atom`{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
- Filtrar por las solicitudes de extracción enlazadas con un informe de problemas que se pudiera cerrar con dicha solicitud: `linked:issue`{% endif %}

### Leer más

- "[Buscar propuestas](/articles/searching-issues)"
- [Filtrar propuestas y solicitudes de extracción](/articles/filtering-issues-and-pull-requests)"
- [Clasificar propuestas y solicitudes de extracción](/articles/sorting-issues-and-pull-requests)"
- "[Compartir filtros](/articles/sharing-filters)"
