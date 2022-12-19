---
title: 'Informationen zu Erkenntnissen für {% data variables.product.prodname_projects_v2 %}'
intro: 'Du kannst Diagramme anzeigen und anpassen, die aus den Daten deines Projekts erstellt wurden.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/using-insights-with-projects
type: tutorial
product: '{% data reusables.gated-features.historical-insights-for-projects %}'
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 809d8492bb1ec7c8cd4eb051b1eaefb00d29097e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158573'
---
{% ifversion fpt %}

{% note %}

**Hinweis:** Verlaufsdiagramme sind derzeit als Featurevorschau für Organisationen verfügbar, die {% data variables.product.prodname_team %} verwenden. Sie sind in der Regel für Organisationen mit {% data variables.product.prodname_ghe_cloud %} verfügbar.

{% endnote %}

{% endif %}

 Du kannst Erkenntnisse für {% data variables.product.prodname_projects_v2 %} zum Anzeigen, Erstellen und Anpassen von Diagrammen verwenden, in denen die dem Projekt hinzugefügten Elemente als Quelldaten verwendet werden. Du kannst Filter auf das Standarddiagramm anwenden und auch eigene Diagramme erstellen. Wenn du ein Diagramm erstellst, legst du die Filter, den Diagrammtyp und die angezeigten Informationen fest. Das Diagramm steht allen Personen zur Verfügung, die das Projekt anzeigen können. Du kannst zwei Diagrammtypen generieren: aktuelle Diagramme und Verlaufsdiagramme.

 Insights verfolgt Elemente nach, die du archiviert oder gelöscht hast.

 ### Informationen zu aktuellen Diagrammen

Du kannst aktuelle Diagramme erstellen, um deine Projektelemente zu visualisieren. Du kannst z. B. Diagramme erstellen, um anzuzeigen, wie viele Elemente jeder einzelnen Person zugewiesen werden, oder wie viele Issues jeder bevorstehenden Iteration zugewiesen werden.

Außerdem kannst du Filter verwenden, um die Daten zu bearbeiten, die zum Erstellen deines Diagramms verwendet werden. Du kannst z. B. ein Diagramm erstellen, das zeigt, wie viel anstehende Arbeit du hast, diese Ergebnisse jedoch auf bestimmte Bezeichnungen oder zugewiesene Personen beschränken. Weitere Informationen findest du unter [Filtering projects](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects) („Filtern von Projekten“).

 ![Screenshot eines gestapelten Säulendiagramms mit Elementtypen für jede Iteration](/assets/images/help/issues/column-chart-example.png)

Weitere Informationen findest du unter [Erstellen von Diagrammen](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/creating-charts).

 ### Informationen zu Verlaufsdiagrammen

 Verlaufsdiagramme sind zeitbasierte Diagramme, mit denen du die Trends und Fortschritte deines Projekts anzeigen kannst. Du kannst die Anzahl der Elemente gruppiert nach Status und anderen Feldern im Zeitverlauf anzeigen.
 
 Das Standarddiagramm „Burn up“ zeigt den Elementstatus im Zeitverlauf an, sodass du den Fortschritt und Spotmuster im Lauf der Zeit visualisieren kannst. 

![Screenshot eines Beispiels für das Burn up-Standarddiagramm für die aktuelle Iteration](/assets/images/help/issues/burnup-example.png)

 Wenn du ein Verlaufsdiagramm erstellen möchtest, lege die X-Achse des Diagramms auf „Zeit“ fest. Weitere Informationen findest du unter [Erstellen von Diagrammen](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/creating-charts) und [Konfigurieren von Diagrammen](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/configuring-charts).

## Weiterführende Themen

- [Informationen zu {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
- [Deaktivieren von Erkenntnissen für {% data variables.product.prodname_projects_v2 %} in deiner Organisation](/organizations/managing-organization-settings/disabling-insights-for-projects-in-your-organization)
