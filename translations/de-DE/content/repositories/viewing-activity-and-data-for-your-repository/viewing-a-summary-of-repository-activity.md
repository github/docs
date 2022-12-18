---
title: Eine Zusammenfassung der Repository-Aktivitäten anzeigen
intro: 'Du kannst eine Übersicht über die Aktivitäten zu Pull Requests, Issues und Commits eines Repositorys anzeigen.'
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-a-summary-of-repository-activity
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View repository activity
ms.openlocfilehash: 2dafe04a8214e2840d8b36bdd3aaeb87f0ad2764
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882303'
---
## Informationen zu Pulse

In Pulse kannst du eine Übersicht der Aktivitäten eines Repositorys anzeigen. Pulse umfasst eine Liste der offenen und zusammengeführten Pull Requests, der offenen und geschlossenen Probleme und ein Diagramm, in dem die Commit-Aktivität für die Top-15-Benutzer angezeigt wird, die sich im ausgewählten [Zeitraum](/articles/viewing-a-summary-of-repository-activity#filtering-by-time) an der Standardverzweigung des Projekts beteiligt haben.

Commits mit Co-Autoren sind in der Commit-Aktivitätsübersicht enthalten, falls ihre Commits in den Standardbranch des Repositorys zusammengeführt wurden und sie sich unter den Top-15-Benutzern befinden, welche die meisten Commits beigesteuert haben.

## Zugreifen auf Pulse

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}

## Nach der Zeit filtern

Pulse zeigt standardmäßig die letzten sieben Tage der Repository-Aktivitäten an. Klicke zum Auswählen eines anderen Zeitraums in der oberen rechten Ecke der Pulse-Übersicht auf die Dropdownliste **Zeitraum**.

![Pulse-Aktivität nach Zeit filtern](/assets/images/help/pulse/pulse_time_filter_dropdown.png)
