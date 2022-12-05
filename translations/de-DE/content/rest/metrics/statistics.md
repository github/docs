---
title: Repositorystatistiken
shortTitle: Statistics
allowTitleToDifferFromFilename: true
intro: 'Mit der API für Repositorystatistiken kannst du die Daten abrufen, die {% data variables.product.product_name %} zum Visualisieren verschiedener Arten von Repositoryaktivitäten verwendet.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 74692780426dd848634bf18f16bacd3770da001c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066130'
---
## Informationen zur API für Repositorystatistiken

Mit der API für Repositorystatistiken kannst du die Daten abrufen, die {% data variables.product.product_name %} zum Visualisieren verschiedener Arten von Repositoryaktivitäten verwendet.

### Kurzer Hinweis zum Zwischenspeichern

Das Berechnen von Repositorystatistiken ist ein teurer Vorgang, weshalb nach Möglichkeit immer versucht wird, zwischengespeicherte Daten zurückzugeben.  Wenn die Daten beim Abfragen der Statistiken für ein Repository nicht zwischengespeichert wurden, erhältst du eine `202`-Antwort. Zudem wird im Hintergrund ein Vorgang ausgelöst, um mit der Kompilierung dieser Statistiken zu beginnen. Warte einen Moment, bist der Auftrag abgeschlossen ist, und übermittle die Anforderung dann erneut. Wenn der Auftrag abgeschlossen ist, wird für diese Anforderung eine `200`-Antwort mit den Statistiken im Antworttext ausgegeben.

Repositorystatistiken werden vom SHA des Standardbranchs des Repositorys zwischengespeichert. Durch das Pushen an den Standardbranch wird der Statistikcache zurückgesetzt.

### Statistiken schließen einige Arten von Commits aus

Die von der API verfügbar gemachten Statistiken stimmen mit den Statistiken überein, die von [verschiedenen Repositorydiagrammen](/github/visualizing-repository-data-with-graphs/about-repository-graphs) angezeigt werden.

Zusammenfassung:
- Alle Statistiken schließen Mergecommits aus.
- Statistiken zu Mitwirkenden schließen auch leere Commits aus.
