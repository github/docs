---
title: Issues und Pull Requests nach Meilenstein filtern
intro: 'Issues und Pull Requests können nach dem Meilenstein gefiltert werden, mit dem sie verknüpft sind. Wenn Du [einen Issue oder Pull Request mit einem Meilenstein verknüpft hast](/articles/associating-milestones-with-issues-and-pull-requests), kannst Du Issues und Pull Requests basierend auf ihren Meilensteinen suchen. Innerhalb eines Meilensteins kannst Du Issues und Pull Requests priorisieren.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-milestones/filtering-issues-and-pull-requests-by-milestone
  - /articles/filtering-issues-and-pull-requests-by-milestone
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests-by-milestone
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
shortTitle: Filter by milestone
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

## Weiterführende Informationen

- "[Filtering and searching issues and pull requests](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)"
- „[Tickets auf einem Projektboard filtern](/articles/filtering-cards-on-a-project-board)“
