---
title: Änderungen am Inhalt eines Repositorys analysieren
intro: 'Du kannst die Änderungen am Inhalt eines Repositorys sehen, indem Du die Commits eines Repositorys, die Commit-Häufigkeit und Ergänzungen sowie Löschungen von Inhalten analysierst.'
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/visualizing-additions-and-deletions-to-content-in-a-repository
  - /github/visualizing-repository-data-with-graphs/visualizing-additions-and-deletions-to-content-in-a-repository
  - /articles/viewing-commit-frequency-in-a-repository
  - /articles/analyzing-changes-to-a-repository-s-content
  - /articles/analyzing-changes-to-a-repositorys-content
  - /articles/visualizing-commits-in-a-repository
  - /github/visualizing-repository-data-with-graphs/visualizing-commits-in-a-repository
  - /github/visualizing-repository-data-with-graphs/analyzing-changes-to-a-repositorys-content
  - /github/visualizing-repository-data-with-graphs/analyzing-changes-to-a-repositorys-content/visualizing-commits-in-a-repository
  - /github/visualizing-repository-data-with-graphs/analyzing-changes-to-a-repositorys-content/visualizing-additions-and-deletions-to-content-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Analyze changes
---

## Commits in einem Repository visualisieren

Im Commit-Diagramm kannst Du mit Ausnahme von Merge-Commits alle Commits anzeigen, die im vergangenen Jahr an einem Repository vorgenommen wurden.

Das obere Diagramm zeigt Commits für das gesamte Jahr nach Woche.

![Repository-Commit-Jahresdiagramm](/assets/images/help/graphs/repo_commit_activity_year_graph.png)

Im folgenden Diagramm wird die durchschnittliche Anzahl an Commits nach Wochentag für die ausgewählte Woche angezeigt.

![Repository-Commit-Wochendiagramm](/assets/images/help/graphs/repo_commit_activity_week_graph.png)

### Auf das Commit-Diagramm zugreifen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. Klicke in der linken Seitenleiste auf **Commits**. ![Registerkarte „Commits“](/assets/images/help/graphs/commits_tab.png)

## Visualizing additions and deletion to content in a repository

Das Code-Verlaufsdiagramm zeigt für jede Woche im Verlauf eines Repositorys die hinzugefügten und gelöschten Inhalte an.

{% ifversion fpt %}

![Code-Verlaufsdiagramm](/assets/images/help/graphs/repo_code_frequency_graph_dotcom.png)

{% endif %}

### Auf das Code-Verlaufsdiagramm zugreifen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. Klicke auf der linken Seitenleiste auf **Code frequency** (Code-Verlauf). ![Registerkarte „Code frequency“ (Code-Verlauf)](/assets/images/help/graphs/code_frequency_tab.png)
