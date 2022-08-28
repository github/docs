---
title: Eine Zusammenfassung der Repository-Aktivitäten anzeigen
intro: 'You can view an overview of a repository''s pull request, issue, and commit activity.'
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-a-summary-of-repository-activity
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: View repository activity
---

## About Pulse

In Pulse kannst Du eine Übersicht der Aktivitäten eines Repositorys anzeigen. Pulse includes a list of open and merged pull requests, open and closed issues, and a graph showing the commit activity for the top 15 users who committed to the default branch of the project in the selected [time period](/articles/viewing-a-summary-of-repository-activity#filtering-by-time).

Commits mit Co-Autoren sind in der Commit-Aktivitätsübersicht enthalten, falls ihre Commits in den Standardbranch des Repositorys zusammengeführt wurden und sie sich unter den Top-15-Benutzern befinden, welche die meisten Commits beigesteuert haben.

## Accessing Pulse

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}

## Nach der Zeit filtern

Pulse zeigt standardmäßig die letzten sieben Tage der Repository-Aktivitäten an. Klicke zum Auswählen eines anderen Zeitraums in der oberen rechten Ecke der Pulse-Übersicht auf das Dropdownmenü **Period** (Zeitraum).

![Pulse-Aktivität nach Zeit filtern](/assets/images/help/pulse/pulse_time_filter_dropdown.png)
