---
title: Suchergebnisse sortieren
intro: 'Du kannst [{% data variables.product.product_name %}-Suchergebnisse](/articles/searching-on-github) sortieren, indem du das Menü „Sortieren“ verwendest oder einen `sort`-Qualifizierer zu deiner Abfrage hinzufügst.'
redirect_from:
  - /articles/sorting-search-results
  - /github/searching-for-information-on-github/sorting-search-results
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/sorting-search-results
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: b2c01cdb1bc1df9d4ae4247886b1471211b2714b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145106079'
---
Über das Sortiermenü kannst du die Ergebnisse nach Relevanz, Anzahl der Sterne, Anzahl der Forks und dem letzten Änderungsdatum sortieren.

  ![Menü mit Optionen zum Sortieren der Suchergebnisse](/assets/images/help/search/repo-search-sort.png)

Um nach Interaktionen, Reaktionen, Erstellungsdatum, Commitdatum und letztem Änderungsdatum zu sortieren, kannst du deiner Suchabfrage einen `sort`-Qualifizierer hinzufügen.

## Nach Interaktionen sortieren

Der Qualifizierer `sort:interactions` sortiert nach der höchsten kombinierten Anzahl von Reaktionen und Kommentaren.

| Qualifizierer  | Beispiel
| ------------- | -------------
| `sort:interactions` oder `sort:interactions-desc` | [**org:github sort:interactions**](https://github.com/search?q=org%3Agithub+sort%3Ainteractions&type=Issues) sucht nach Issues in Repositorys im Besitz von {% data variables.product.product_name %}, sortiert nach der höchsten kombinierten Anzahl von Reaktionen und Kommentaren.
| `sort:interactions-asc` | [**org:github sort:interactions-asc**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Ainteractions-asc&type=Issues) sucht nach Issues in Repositorys im Besitz von {% data variables.product.product_name %}, sortiert nach der niedrigsten kombinierten Anzahl von Reaktionen und Kommentaren.

## Nach Reaktionen sortieren

Der Qualifizierer `sort:reactions` sortiert nach der Anzahl oder Art von Reaktionen.

| Qualifizierer  | Beispiel
| ------------- | -------------
| `sort:reactions` oder `sort:reactions-desc` | [**org:github sort:reactions**](https://github.com/search?q=org%3Agithub+sort%3Areactions&type=Issues) sucht nach Issues in Repositorys im Besitz von {% data variables.product.product_name %}, sortiert nach der höchsten Anzahl von Reaktionen.
| `sort:reactions-asc` | [**org:github sort:reactions-asc**](https://github.com/search?q=org%3Agithub+sort%3Areactions-asc&type=Issues) sucht nach Issues in Repositorys im Besitz von {% data variables.product.product_name %}, nach der Anzahl von Reaktionen absteigend sortiert (von den wenigsten zu den meisten).
| <code>sort:reactions-<em>reaction</em></code> | [**org:github sort:reactions-+1**](https://github.com/search?q=org%3Agithub+sort%3Areactions-%2B1&type=Issues) sucht nach Issues in Repositorys im Besitz von {% data variables.product.product_name %}, sortiert nach den meisten „Daumen nach oben“-Reaktionen (:+1:).
| | [**org:github sort:reactions--1**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions--1&type=Issues) sucht nach Issues in Repositorys im Besitz von {% data variables.product.product_name %}, sortiert nach den meisten „Daumen nach unten“-Reaktionen (:-1:).
| | [**org:github sort:reactions-smile**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-smile&type=Issues) sucht nach Issues in Repositorys im Besitz von {% data variables.product.product_name %}, sortiert nach den meisten „Lachen“-Reaktionen (:smile:).
| | [**org:github sort:reactions-tada**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-tada&type=Issues) sucht nach Issues in Repositorys im Besitz von {% data variables.product.product_name %}, sortiert nach den meisten „Hurra“-Reaktionen (:tada:).
| | [**org:github sort:reactions-heart**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-heart&type=Issues) sucht nach Issues in Repositorys im Besitz von {% data variables.product.product_name %}, sortiert nach den meisten „Herzchen“-Reaktionen (:heart:).

## Nach Verfassungsdatum sortieren

Der Qualifizierer `sort:author-date` sortiert absteigend oder aufsteigend nach Erstellungsdatum.

| Qualifizierer  | Beispiel
| ------------- | -------------
| `sort:author-date` oder `sort:author-date-desc` | [**feature org:github sort:author-date**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date&type=Commits) sucht nach Commits mit dem Wort „feature“ in Repositorys im Besitz von {% data variables.product.product_name %}, absteigend sortiert nach Erstellungsdatum.
| `sort:author-date-asc` | [**`feature org:github sort:author-date-asc`**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date-asc&type=Commits) sucht nach Commits mit dem Wort „feature“ in Repositorys im Besitz von {% data variables.product.product_name %}, aufsteigend sortiert nach Erstellungsdatum.

## Nach Commit-Datum sortieren

Der Qualifizierer `sort:committer-date` sortiert absteigend oder aufsteigend nach Commitdatum.

| Qualifizierer  | Beispiel
| ------------- | -------------
| `sort:committer-date` oder `sort:committer-date-desc` | [**feature org:github sort:committer-date**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date&type=Commits) sucht nach Commits mit dem Wort „feature“ in Repositorys im Besitz von {% data variables.product.product_name %}, absteigend sortiert nach Commitdatum.
| `sort:committer-date-asc` | [**`feature org:github sort:committer-date-asc`**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date-asc&type=Commits) sucht nach Commits mit dem Wort „feature“ in Repositorys im Besitz von {% data variables.product.product_name %}, aufsteigend sortiert nach Commitdatum.

## Nach Änderungsdatum sortieren

Der Qualifizierer `sort:updated` sortiert nach dem Aktualisierungsdatum der Elemente.

| Qualifizierer  | Beispiel
| ------------- | -------------
| `sort:updated` oder `sort:updated-desc` | [**feature sort:updated**](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated&type=Repositories) sucht nach Repositorys mit dem Wort „feature“, sortiert nach dem jüngsten Aktualisierungsdatum.
| `sort:updated-asc` | [**feature sort:updated-asc**](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated-asc&type=Repositories) sucht nach Repositorys mit dem Wort „feature“, sortiert nach dem ältesten Aktualisierungsdatum.

## Weitere Informationsquellen

- [Informationen zum Suchen auf {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)
- [Filtern und Suchen von Issues und Pull Requests](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)
