---
title: Tickets auf einem Projektboard filtern
intro: Du kannst die Tickets auf einem Projektboard filtern, um bestimmte Tickets zu suchen oder eine Teilmenge der Tickets anzuzeigen.
redirect_from:
  - /articles/filtering-cards-on-a-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pull requests
---

On a card, you can click any assignee, milestone, or label to filter the project board by that qualifier. To clear the search, you can click the same assignee, milestone, or label again.

Du kannst Tickets auch über die Suchleiste „Filter cards“ (Tickets filtern) oben auf jedem Projektboard suchen. Um Tickets zu filtern, kannst Du die folgenden Qualifizierer in beliebiger Kombination verwenden oder einfach den Text eingeben, nach dem Du suchst.

- Tickets nach Autor filtern – mit `author:USERNAME`
- Tickets nach Bearbeiter filtern – mit `assignee:USERNAME` oder `no:assignee`
- Filter cards by label using `label:LABEL`, `label:"MULTI-WORD LABEL NAME"`, or `no:label`
- Tickets nach Meilenstein filtern – mit `milestone:MY-MILESTONE`
- Tickets nach Status filtern – mit `state:open`, `state:closed` oder `state:merged`
- Tickets nach Review-Status filtern – mit `review:none`, `review:required`, `review:approved` oder `review:changes_requested`
- Tickets nach Prüfstatus filtern – mit `status:pending`, `status:success` oder `status:failure`
- Tickets nach Typ filtern – mit `type:issue`, `type:pr` oder `type:note`
- Tickets nach Status und Typ filtern – mit `is:open`, `is:closed` oder `is:merged` und `is:issue`, `is:pr` oder `is:note`
- Filter cards by issues that are linked to a pull request by a closing reference using `linked:pr`{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
- Tickets nach Repository in einem organisationsweiten Projektboard filtern – mit `repo:ORGANIZATION/REPOSITORY`{% endif %}

1. Navigiere zu dem Projektboard, das die Tickets enthält, nach denen Du filtern möchtest.
2. Klicke über den Spalten der Projekttickets in die Suchleiste „Filter cards“ (Tickets filtern), und gib eine Suchabfrage ein, um die Tickets zu filtern. ![Suchleiste zum Filtern der Tickets](/assets/images/help/projects/filter-card-search-bar.png)

{% tip %}

**Tipp:** Du kannst die gefilterten Tickets per Drag-and-Drop oder mithilfe von Tastenkürzeln zwischen den Spalten verschieben. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

{% endtip %}

### Weiterführende Informationen

- „[Informationen zu Projektboards](/articles/about-project-boards)“
- „[Issues und Pull Requests zu einem Projektboard hinzufügen](/articles/adding-issues-and-pull-requests-to-a-project-board)“
- „[Hinweise zu einem Projektboard hinzufügen](/articles/adding-notes-to-a-project-board)“
