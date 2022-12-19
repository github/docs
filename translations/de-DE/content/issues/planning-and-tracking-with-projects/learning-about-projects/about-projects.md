---
title: 'Informationen zu {% data variables.product.prodname_projects_v2 %}'
intro: '{% data variables.product.prodname_projects_v2 %} ist ein anpassbares, flexibles Tool zum Planen und Nachverfolgen der Arbeit auf {% data variables.product.company_short %}.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/about-projects
type: overview
topics:
  - Projects
ms.openlocfilehash: 3190379652fe1c95b8ea6ec7f864c44b72d9a7f7
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180761'
---
## Informationen zu {% data variables.product.prodname_projects_v2 %}

Ein Projekt ist eine anpassbare Kalkulationstabelle, die in deine Issues und Pull Requests auf {% data variables.product.company_short %} integriert wird, um eine effektive Planung und Nachverfolgung deiner Arbeit zu ermöglichen. Durch das Filtern, Sortieren und Gruppieren deiner Issues und Pull Requests sowie das Hinzufügen benutzerdefinierter Felder zum Nachverfolgen teamspezifischer Metadaten kannst du mehrere Ansichten erstellen und anpassen sowie deine Arbeit in konfigurierbaren Diagrammen veranschaulichen. Anstatt eine bestimmte Methode zu erzwingen, bietet ein Projekt flexible Features, die du den Anforderungen und Prozessen deines Teams anpassen kannst.

### Aktualisierung

Deine Projekte basieren auf den von dir hinzugefügten Issues und Pull Requests, wobei direkte Verweise zwischen deinem Projekt und deiner Arbeit erstellt werden. Informationen werden automatisch mit deinem Projekt synchronisiert, wenn du Änderungen vornimmst bzw. deine Ansichten und Diagramme aktualisierst. Diese Integration funktioniert in beide Richtungen. Wenn du also Informationen zu einem Pull Request oder Issue in deinem Projekt änderst, spiegelt der Pull Request oder das Issue diese Informationen wider. Wenn du beispielsweise eine zugewiesene Person in deinem Projekt änderst, wird diese Änderung in deinem Issue angezeigt. Du kannst bei dieser Integration sogar noch weiter gehen, dein Projekt nach zugewiesenen Personen gruppieren und Änderungen an der Issuezuweisung vornehmen, indem du Issues in die verschiedenen Gruppen ziehst.

### Hinzufügen von Metadaten zu deinen Elementen

Du kannst benutzerdefinierte Felder verwenden, um deinen Issues, Pull Requests und Entwurfs-Issues Metadaten hinzuzufügen und eine umfangreichere Ansicht der Elementattribute zu erstellen. Du bist nicht auf die integrierten Metadaten (zugewiesene Person, Meilenstein, Bezeichnungen usw.) beschränkt, die derzeit für Issues und Pull Requests vorhanden sind. Du kannst beispielsweise die folgenden Metadaten als benutzerdefinierte Felder hinzufügen:

- Ein Datumsfeld zum Nachverfolgen von Zielversanddaten.
- Ein Zahlenfeld, um die Komplexität eines Vorgangs nachzuverfolgen.
- Ein einzelnes Auswahlfeld, um nachzuverfolgen, ob eine Aufgabe die Priorität „Niedrig“, „Mittel“ oder „Hoch“ hat.
- Ein Textfeld zum Hinzufügen einer schnellen Notiz.
- Ein Iterationsfeld zum wöchentlichen Planen der Arbeit, einschließlich Unterstützung von Unterbrechungen.

{% ifversion projects-v2-tasklists %}

### Untersuchen der Beziehungen zwischen Issues

{% data reusables.projects.tasklists-release-stage %}

Du kannst Tasklisten verwenden, um Hierarchien von Issues zu erstellen, deine Probleme in kleinere Teilaufgaben aufzuteilen und neue Beziehungen zwischen deinen Issues zu erstellen. Weitere Informationen findest du unter „[Informationen zu Aufgabenlisten](/issues/tracking-your-work-with-issues/about-tasklists)“.

Diese Beziehungen werden für das Issue sowie die nachverfolgungsbezogenen Felder in deinen Projekten angezeigt. Du kannst nach Issues filtern, die von einem anderen Problem nachverfolgt werden, und du kannst deine Tabellenansichten auch nach dem Feld „Nachverfolgt von“ gruppieren, um alle übergeordneten Probleme mit einer Liste der Unteraufgaben anzuzeigen.

{% endif %}

### Betrachten deines Projekts aus unterschiedlichen Perspektiven

Beantworte schnell deine wichtigsten Fragen, indem du deine Projektansicht so anpasst, dass sie die benötigten Informationen liefert. Du kannst diese Ansichten speichern, sodass du schnell zu ihnen zurückkehren und sie deinem Team zur Verfügung stellen kannst. Ansichten ermöglichen nicht nur die Eingrenzung der aufgelisteten Elemente, sondern bieten auch zwei verschiedene Layoutoptionen.

Du kannst dein Projekt als Tabellenlayout mit hoher Dichte anzeigen:

![Projekttabelle](/assets/images/help/issues/projects_table.png)

Oder als Board:

![Projektboard](/assets/images/help/issues/projects_board.png)

Elemente können gruppiert, sortiert oder gefiltert werden, damit du dich besser auf bestimmte Aspekte deines Projekts konzentrieren kannst:

![Projektansicht](/assets/images/help/issues/project_view.png)

Weitere Informationen findest du unter [Anpassen einer Ansicht](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view).
