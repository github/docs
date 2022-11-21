---
title: Fehlerbehebung bei Suchabfragen
intro: 'Wenn deine Suche auf {% data variables.product.product_name %} zu unerwarteten Ergebnissen führt, ziehe zur Behebung dieser Fehler unsere Informationen zu häufigen Problemen und Einschränkungen der Abfragelänge zu Rate.'
redirect_from:
  - /articles/troubleshooting-search-queries
  - /github/searching-for-information-on-github/troubleshooting-search-queries
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/troubleshooting-search-queries
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
shortTitle: Troubleshoot search queries
ms.openlocfilehash: 2c90d144401974ebc44f4b80a1509593fe987329
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106063'
---
## Mögliche Zeitüberschreitung

Einige Abfragen stellen für unsere Suchinfrastruktur eine außergewöhnlich hohe Rechenlast dar. Damit die Suche aber für jeden Benutzer schnell erfolgt, sehen wir uns gezwungen, der Dauer einer einzelnen Abfrage Grenzen zu setzen. In den sehr seltenen Fällen, in denen eine Abfrage aufgrund einer Zeitüberschreitung abgebrochen wird, gibt die Suche alle Treffer zurück, die bis zum Abbruch gefunden wurden. Gleichzeitig wirst Du über die Zeitüberschreitung informiert.

Das Erreichen des Zeitlimits bedeutet jedoch nicht in jedem Fall, dass die Suchergebnisse unvollständig sind. Es bedeutet lediglich, dass die Abfrage vor der vollständigen Durchsuchung aller zur Verfügung stehenden Daten abgebrochen wurde.

## Einschränkungen der Abfragelänge

Bei der Suche auf {% data variables.product.product_name %} gelten für Abfragen auch Längeneinschränkungen:

* Abfragen mit mehr als 256 Zeichen werden nicht unterstützt.
* Du kannst keine Abfrage mit mehr als fünf `AND`-, `OR`- oder `NOT`-Operatoren erstellen.

Für bestimmte Arten der Suche, beispielsweise für die Codesuche, gelten unter Umständen weitere Einschränkungen. Nähere Informationen findest Du in der Dokumentation zum jeweiligen Suchtyp.

## Weiterführende Themen

- [Informationen zur Suche auf GitHub](/search-github/getting-started-with-searching-on-github/about-searching-on-github)
