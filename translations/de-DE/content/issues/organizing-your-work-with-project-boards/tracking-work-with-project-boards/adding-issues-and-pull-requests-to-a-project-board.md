---
title: Issues und Pull Requests zu einem Projektboard hinzufügen
intro: Du kannst Issues und Pull Requests in Form von Tickets zu einem Projektboard hinzufügen und in Spalten einteilen.
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/adding-issues-and-pull-requests-to-a-project-board
  - /articles/adding-issues-and-pull-requests-to-a-project/
  - /articles/adding-issues-and-pull-requests-to-a-project-board
  - /github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Issues oder Pull Requests kannst Du zu Deinem Projektboard hinzufügen, indem Du:
- Tickets aus dem Bereich **Triage** (Einteilung) in die Seitenleiste ziehst.
- Die Issue- oder Pull-Request-URL in ein Ticket eingibst.
- In der Such-Seitenleiste des Projektboards nach Issues oder Pull Requests suchst.

In jeder Projektspalte können maximal 2.500 Tickets enthalten sein. Wenn die Höchstzahl an Tickets in einer Spalte erreicht ist, kannst Du keine Tickets mehr in diese Spalte schieben.

![Mauszeiger verschiebt Issue-Ticket von der Einteilungsseitenleiste zur Projektboardspalte](/assets/images/help/projects/add-card-from-sidebar.gif)

{% note %}

**Hinweis:** Du kannst auch Hinweise zu Deinem Projektboard hinzufügen und als Erinnerungen an Aufgaben oder als Verweise auf Issues und Pull Requests aus einem beliebigen Repository auf {% data variables.product.product_name %} verwenden. Über Hinweise kannst Du auch zugehörige Informationen zum Projektboard hinzufügen. Weitere Informationen findest Du unter „[Hinweise zu einem Projektboard hinzufügen](/articles/adding-notes-to-a-project-board).“

{% endnote %}

{% data reusables.project-management.edit-in-project %}

{% data reusables.project-management.link-repos-to-project-board %} Wenn Du nach Issues und Pull Requests suchst, die Du zu Deinem Projektboard hinzufügen möchtest, reduziert sich die Suche automatisch auf Deine verlinkten Repositorys. Du kannst diese Qualifizierer entfernen, um die Suche in allen Repositorys der Organisation auszuführen. Weitere Informationen findest Du unter „[Ein Repository mit einem Projektboard verknüpfen](/articles/linking-a-repository-to-a-project-board).“

### Issues und Pull Requests zu einem Projektboard hinzufügen

1. Navigiere zu dem Projektboard, zu dem Du Issues und Pull Requests hinzufügen möchtest.
2. Klicke im Projektboard auf {% octicon "plus" aria-label="The plus icon" %} **Add cards** (Tickets hinzufügen). ![Schaltfläche „Add cards“ (Tickets hinzufügen)](/assets/images/help/projects/add-cards-button.png)
3. Suche mithilfe von Qualifizierern nach Issues und Pull Requests, die zu Deinem Projektboard hinzugefügt werden sollen. Weitere Informationen zu Qualifizierern findest Du unter „[Nach Issues suchen](/articles/searching-issues).“ ![Nach Issues und Pull Requests suchen](/assets/images/help/issues/issues_search_bar.png)

  {% tip %}

  **Tipps:**
    - Du kannst auch einen Issue oder Pull Request hinzufügen, indem Du die URL in ein Ticket eingibst.
    - Wenn Du an einer bestimmten Funktion arbeitest, kannst Du eine Kennzeichnung auf jeden zu dieser Funktion gehörenden Issue oder Pull Request anwenden. Dann kannst Du ganz leicht Tickets zu Deinem Projektboard hinzufügen, indem Du nach dem Namen der Kennzeichnung suchst. Weitere Informationen findest Du unter „[Kennzeichnungen auf Issues und Pull Requests anwenden](/articles/applying-labels-to-issues-and-pull-requests).“

  {% endtip %}
4. Ziehe per Drag-and-Drop aus der gefilterten Liste von Issues und Pull Requests das Ticket, das Du zu Deinem Projektboard hinzufügen möchtest, in die richtige Spalte. Alternativ kannst Du die Tickets auch mithilfe von Tastenkürzeln verschieben. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% tip %}

    **Tipp:** Du kannst Tickets per Drag-and-Drop oder mithilfe von Tastenkürzeln neu anordnen und zwischen den Spalten verschieben. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% endtip %}

### Issues und Pull Requests über die Seitenleiste zu einem Projekt hinzufügen

1. Klicke rechts neben einem Issue oder Pull Request auf **Projects {% octicon "gear" aria-label="The Gear icon" %}** (Projekte). ![Projektboard-Schaltfläche in Seitenleiste](/assets/images/help/projects/sidebar-project.png)
2. Klicke auf die Registerkarte **Recent** (Zuletzt verwendet), **Repository** (Repository),**User** (Benutzer) oder **Organization** (Organisation) für das Projektboard, zu dem Du etwas hinzufügen möchtest. ![Registerkarten „Recent“ (Zuletzt verwendet), „Repository“ (Repository) und „Organization“ (Organisation)](/assets/images/help/projects/sidebar-project-tabs.png)
3. Gib den Namen des Projekts in das Feld **Filter projects** (Projekte filtern) ein. ![Projektboard-Suchfeld](/assets/images/help/projects/sidebar-search-project.png)
4. Select one or more project boards where you want to add the issue or pull request. ![Ausgewähltes Projektboard](/assets/images/help/projects/sidebar-select-project.png)
5. Klicke auf {% octicon "triangle-down" aria-label="The down triangle icon" %} und anschließend auf die Spalte, die den Issue oder Pull Request enthalten soll. Das Ticket wird unten in der ausgewählten Projektboard-Spalte platziert. ![Menü „Move card to column“ (Ticket in Spalte verschieben)](/assets/images/help/projects/sidebar-select-project-board-column-menu.png)

### Weiterführende Informationen

- „[Informationen zu Projektboards](/articles/about-project-boards)“
- „[Ein Projektboard bearbeiten](/articles/editing-a-project-board)“
- „[Tickets auf einem Projektboard filtern](/articles/filtering-cards-on-a-project-board)“
