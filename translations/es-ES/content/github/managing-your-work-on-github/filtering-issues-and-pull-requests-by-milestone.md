---
title: Filtrar propuestas y solicitudes de extracción por hito
intro: 'Las propuestas y solicitudes de extracción se pueden filtrar según el hito con el que están asociadas. Una vez que has [asociado una propuesta o solicitud de extracción con un hito](/articles/associating-milestones-with-issues-and-pull-requests), puedes buscar elementos basados en sus hitos. Dentro de un hito, puedes priorizar las propuestas y solicitudes de extracción.'
redirect_from:
  - /articles/filtering-issues-and-pull-requests-by-milestone
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

{% tip %}

**Tips:**

- Si prefieres filtrar propuestas y solicitudes de extracción usando la barra de búsqueda, puedes usar la sintaxis de búsqueda de hitos. Para un hito llamado My milestone, la sintaxis de búsqueda sería: `milestone:"My Milestone"`.
- Para borrar tu selección de filtro, haz clic en **Borrar consultas de búsqueda, filtros y clasificaciones actuales**.
-  También puedes filtrar las propuestas o solicitudes de cambios si utilizas el {% data variables.product.prodname_cli %}. Para obtener más información, consulta "[`gh issue list`](https://cli.github.com/manual/gh_issue_list)" o "[`gh pr list`](https://cli.github.com/manual/gh_pr_list)" en la documentación de {% data variables.product.prodname_cli %}.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. Selecciona **Hitos** para ver una lista de todos los hitos disponibles para el repositorio. ![Botón Hitos](/assets/images/help/issues/issues_milestone_button.png)
4. Selecciona el hito que te interesa en la lista. En la página del hito puedes ver información relevante sobre el hito, incluidas todas las propuestas y solicitudes de extracción asociadas con él. Para obtener más información, consulta "[Acerca de los hitos](/articles/about-milestones)".

### Leer más

- [Filtrar propuestas y solicitudes de extracción](/articles/filtering-issues-and-pull-requests)"
- [Clasificar propuestas y solicitudes de extracción](/articles/sorting-issues-and-pull-requests)"
- "[Usar la búsqueda para filtrar propuestas y solicitudes de extracción](/articles/using-search-to-filter-issues-and-pull-requests)"
- "[Compartir filtros](/articles/sharing-filters)"
- "[Filtrar tarjetas en un tablero de proyecto](/articles/filtering-cards-on-a-project-board)"
