---
title: Eine Zusammenfassung der Repository-Aktivitäten anzeigen
intro: 'In Pulse kannst Du eine Übersicht der Aktivitäten eines Repositorys anzeigen. Pulse umfasst eine Liste der offenen und gemergten Pull Requests, der offenen und geschlossenen Issues und ein Diagramm, in dem die Commit-Aktivität für die Top-15-Benutzer angezeigt wird, die sich im ausgewählten [Zeitraum](/articles/viewing-a-summary-of-repository-activity#filtering-by-time) am Standardbranch des Projekts beteiligt haben.'
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-summary-of-repository-activity
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Commits mit Co-Autoren sind in der Commit-Aktivitätsübersicht enthalten, falls ihre Commits in den Standardbranch des Repositorys zusammengeführt wurden und sie sich unter den Top-15-Benutzern befinden, welche die meisten Commits beigesteuert haben.

### Auf Pulse zugreifen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}

### Nach der Zeit filtern

Pulse zeigt standardmäßig die letzten sieben Tage der Repository-Aktivitäten an. Klicke zum Auswählen eines anderen Zeitraums in der oberen rechten Ecke der Pulse-Übersicht auf das Dropdownmenü **Period** (Zeitraum).

![Pulse-Aktivität nach Zeit filtern](/assets/images/help/pulse/pulse_time_filter_dropdown.png)
