---
title: Issues und Pull Requests nach Meilenstein filtern
intro: 'Issues und Pull Requests können nach dem Meilenstein gefiltert werden, mit dem sie verknüpft sind. Wenn Du [einen Issue oder Pull Request mit einem Meilenstein verknüpft hast](/articles/associating-milestones-with-issues-and-pull-requests), kannst Du Issues und Pull Requests basierend auf ihren Meilensteinen suchen. Innerhalb eines Meilensteins kannst Du Issues und Pull Requests priorisieren.'
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

**Tipps:**

- Wenn Du Issues und Pull Requests lieber über die Suchleiste filtern möchtest, kannst Du die Meilenstein-Such-Syntax verwenden. Für einen Meilenstein mit dem Namen „My Milestone“ lautete die Such-Syntax: `milestone:"My Milestone"`.
- Um Deine Filterauswahl zurückzusetzen, klicke auf **Clear current search query, filters, and sorts** (Aktuelle Suchabfrage, Filter und Sortierung löschen).
-  You can also filter issues or pull requests using the {% data variables.product.prodname_cli %}. For more information, see "[`gh issue list`](https://cli.github.com/manual/gh_issue_list)" or "[`gh pr list`](https://cli.github.com/manual/gh_pr_list)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. Wähle **Milestones** (Meilensteine) aus, um eine Liste aller Meilensteine anzuzeigen, die für das Repository verfügbar sind. ![Schaltfläche „Milestones“ (Meilensteine)](/assets/images/help/issues/issues_milestone_button.png)
4. Wähle den Meilenstein, für den Du dich interessierst, aus der Liste aus. Auf der Meilenstein-Seite kannst Du relevante Informationen für den Meilenstein anzeigen, einschließlich aller mit ihm verknüpften Issues und Pull Requests. Weitere Informationen findest Du unter „[Informationen zu Meilensteinen](/articles/about-milestones).“

### Weiterführende Informationen

- „[Issues und Pull Requests filtern](/articles/filtering-issues-and-pull-requests)“
- „[Issues und Pull Requests sortieren](/articles/sorting-issues-and-pull-requests)“
- „[Issues und Pull Requests mit der Suchfunktion filtern](/articles/using-search-to-filter-issues-and-pull-requests)“
- „[Filter freigeben](/articles/sharing-filters)“
- „[Tickets auf einem Projektboard filtern](/articles/filtering-cards-on-a-project-board)“
