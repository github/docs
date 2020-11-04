---
title: Suchergebnisse sortieren
intro: 'Sie können Ergebnisse der [{% data variables.product.product_name %}-Suche](/articles/searching-on-github) mit den Optionen des Menüs „Sortieren“ oder durch einen „sort“-Kennzeichner in der Abfrage sortieren.'
redirect_from:
  - /articles/sorting-search-results
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Über das Sortiermenü kannst Du die Ergebnisse nach Relevanz, Anzahl der Sterne, Anzahl der Forks und dem letzten Änderungsdatum sortieren.

  ![Menü mit Optionen zum Sortieren der Suchergebnisse](/assets/images/help/search/repo-search-sort.png)

Mit einem `sort`-Qualifizierer in der Abfrage kannst Du die Suchergebnisse nach Interaktionen, Reaktionen, Erstellungsdatum, Commit-Datum und letztem Änderungsdatum sortieren.

### Nach Interaktionen sortieren

Der Qualifizierer `sort:interactions` sortiert in absteigender Reihenfolge nach der Gesamtzahl der Reaktionen und Kommentare.

| Qualifizierer                                     | Beispiel                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sort:interactions` oder `sort:interactions-desc` | [**org:github sort:interactions**](https://github.com/search?q=org%3Agithub+sort%3Ainteractions&type=Issues) sucht Issues in {% data variables.product.product_name %}-Repositorys und sortiert sie in absteigender Reihenfolge nach der Gesamtzahl der Reaktionen und Kommentare.                         |
| `sort:interactions-asc`                           | [**org:github sort:interactions-asc**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Ainteractions-asc&type=Issues) sucht Issues in {% data variables.product.product_name %}-Repositorys und sortiert sie in aufsteigender Reihenfolge nach der Gesamtzahl der Reaktionen und Kommentare. |

### Nach Reaktionen sortieren

Der Qualifizierer `sort:reactions` sortiert nach der Anzahl oder dem Typ der Reaktionen.

| Qualifizierer                               | Beispiel                                                                                                                                                                                                                                                                                                |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sort:reactions` oder `sort:reactions-desc` | [**org:github sort:reactions**](https://github.com/search?q=org%3Agithub+sort%3Areactions&type=Issues) sucht Issues in {% data variables.product.product_name %}-Repositorys und sortiert sie in absteigender Reihenfolge nach der Anzahl der Reaktionen.                                               |
| `sort:reactions-asc`                        | [**org:github sort:reactions-asc**](https://github.com/search?q=org%3Agithub+sort%3Areactions-asc&type=Issues) sucht Issues in {% data variables.product.product_name %}-Repositorys und sortiert sie in aufsteigender Reihenfolge nach der Anzahl der Reaktionen.                                      |
| <code>sort:reactions-<em>reaction</em></code>                   | [**org:github sort:reactions-+1**](https://github.com/search?q=org%3Agithub+sort%3Areactions-%2B1&type=Issues) sucht Issues in {% data variables.product.product_name %}-Repositorys und sortiert sie in absteigender Reihenfolge nach der Anzahl der :+1:-Reaktionen (Daumen nach oben).               |
|                                             | [**org:github sort:reactions--1**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions--1&type=Issues) sucht Issues in {% data variables.product.product_name %}-Repositorys und sortiert sie in absteigender Reihenfolge nach der Anzahl der :-1:-Reaktionen (Daumen nach unten). |
|                                             | [**org:github sort:reactions-smile**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-smile&type=Issues) sucht Issues in {% data variables.product.product_name %}-Repositorys und sortiert sie in absteigender Reihenfolge nach der Anzahl der :smile:-Reaktionen (Lächeln).  |
|                                             | [**org:github sort:reactions-tada**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-tada&type=Issues) sucht Issues in {% data variables.product.product_name %}-Repositorys und sortiert sie in absteigender Reihenfolge nach der Anzahl der :tada:-Reaktionen (Hurra).       |
|                                             | [**org:github sort:reactions-heart**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-heart&type=Issues) sucht Issues in {% data variables.product.product_name %}-Repositorys und sortiert sie in absteigender Reihenfolge nach der Anzahl der :heart:-Reaktionen (Herz).     |

### Nach Verfassungsdatum sortieren

Der Qualifizierer `sort:author-date` sortiert in absteigender oder aufsteigender Reihenfolge nach dem Verfassungsdatum.

| Qualifizierer                                   | Beispiel                                                                                                                                                                                                                                                                                                                  |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sort:author-date` oder `sort:author-date-desc` | [**feature org:github sort:author-date**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date&type=Commits) sucht Commits mit dem Wort „feature“ in {% data variables.product.product_name %}-Repositorys und sortiert sie in absteigender Reihenfolge nach dem Verfassungsdatum.          |
| `sort:author-date-asc`                          | [**feature org:github sort:author-date-asc**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date-asc&type=Commits) sucht Commits mit dem Wort „feature“ in {% data variables.product.product_name %}-Repositorys und sortiert sie in aufsteigender Reihenfolge nach dem Verfassungsdatum. |

### Nach Commit-Datum sortieren

Der Qualifizierer `sort:committer-date` sortiert in absteigender oder aufsteigender Reihenfolge nach dem Commit-Datum.

| Qualifizierer                                         | Beispiel                                                                                                                                                                                                                                                                                                                    |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sort:committer-date` oder `sort:committer-date-desc` | [**feature org:github sort:committer-date**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date&type=Commits) sucht Commits mit dem Wort „feature“ in {% data variables.product.product_name %}-Repositorys und sortiert sie in absteigender Reihenfolge nach dem Commit-Datum.          |
| `sort:committer-date-asc`                             | [**feature org:github sort:committer-date-asc**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date-asc&type=Commits) sucht Commits mit dem Wort „feature“ in {% data variables.product.product_name %}-Repositorys und sortiert sie in aufsteigender Reihenfolge nach dem Commit-Datum. |

### Nach Änderungsdatum sortieren

Der Qualifizierer `sort:updated` sortiert in absteigender oder aufsteigender Reihenfolge nach dem letzten Änderungsdatum.

| Qualifizierer                           | Beispiel                                                                                                                                                                                                                                        |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sort:updated` oder `sort:updated-desc` | [**feature sort:updated**](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated&type=Repositories) sucht Repositorys mit dem Wort „feature“ und sortiert sie in absteigender Reihenfolge nach dem letzten Änderungsdatum.          |
| `sort:updated-asc`                      | [**feature sort:updated-asc**](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated-asc&type=Repositories) sucht Repositorys mit dem Wort „feature“ und sortiert sie in aufsteigender Reihenfolge nach dem letzten Änderungsdatum. |

### Weiterführende Informationen

- [Informationen zur Suche auf GitHub](/articles/about-searching-on-github)
- [Issues und Pull Requests sortieren](/articles/sorting-issues-and-pull-requests/)
