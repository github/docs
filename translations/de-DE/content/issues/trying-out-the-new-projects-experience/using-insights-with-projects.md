---
title: Verwenden von Erkenntnissen mit Projekten (Betaversion)
intro: Du kannst Diagramme anzeigen und anpassen, die aus den Daten deines Projekts erstellt wurden.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: b2e8f2bc76c584d4de33fe00da1fd95982f9d091
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "147064706"
---
{% data reusables.projects.insights-alpha %}

## <a name="about-insights"></a>Informationen zu Erkenntnissen

Du kannst Erkenntnisse verwenden, um Diagramme anzuzeigen und anzupassen, in denen als Quelldaten die dem Projekt hinzugefügten Elemente verwendet werden. Das Standarddiagramm „Burn up“ zeigt den Elementstatus im Zeitverlauf an, sodass du den Fortschritt und Spotmuster im Lauf der Zeit visualisieren kannst. 

![Screenshot eines Beispiels für das Burn up-Standarddiagramm für die aktuelle Iteration](/assets/images/help/issues/burnup-example.png)

Du kannst Filter auf das Standarddiagramm anwenden und auch eigene Diagramme erstellen. Wenn du ein Diagramm erstellst, legst du die Filter, den Diagrammtyp und die angezeigten Informationen fest. Das Diagramm steht allen Personen zur Verfügung, die das Projekt anzeigen können.

![Screenshot eines gestapelten Säulendiagramms mit Elementtypen für jede Iteration](/assets/images/help/issues/column-chart-example.png)

## <a name="creating-a-chart"></a>Erstellen eines Diagramms

{% data reusables.projects.access-insights %}
3. Klicke im Menü auf der linken Seite auf **Neues Diagramm**.
4. Um optional den Namen des neuen Diagramms zu ändern, klickst du auf {% octicon "triangle-down" aria-label="The triangle icon" %}, gibst einen neuen Namen ein und drückst die <kbd>EINGABETASTE</kbd>.
5. Gib über dem Diagramm Filter ein, um die Daten zu ändern, die zum Erstellen des Diagramms verwendet werden. Weitere Informationen findest du unter [Filtering projects](/issues/trying-out-the-new-projects-experience/filtering-projects) („Filtern von Projekten“).
6. Klicke rechts neben dem Filtertextfeld auf **Änderungen speichern**.

## <a name="configuring-a-chart"></a>Konfigurieren eines Diagramms

{% data reusables.projects.access-insights %}
1. Klicke im Menü links auf das Diagramm, das du konfigurieren möchtest.
1. Klicke rechts oben auf der Seite auf **Konfigurieren**. Ein Panel wird auf der rechten Seite geöffnet.
1. Um den Diagrammtyp zu ändern, wählst du die Dropdownliste **Layout** aus und klickst auf den gewünschten Diagrammtyp.
1. Um das Feld zu ändern, das für die X-Achse deines Diagramms verwendet wird, wählst du die Dropdownliste der **X-Achse** aus und klickst auf das Feld, das du verwenden möchtest.
1. Wenn du optional die Elemente auf der X-Achse nach einem anderen Feld gruppieren möchtest, wähle **Gruppieren nach** aus, und klicke dann auf das gewünschte Feld. Du kannst auch auf „Keine“ klicken, um die Gruppierung zu deaktivieren.
1. Wenn dein Projekt Zahlenfelder enthält und du auf der Y-Achse die Summe, den Durchschnitt, das Minimum oder das Maximum eines dieser Zahlenfelder anzeigen möchtest, wählst du die **Y-Achse** aus und klickst auf eine Option. Wähle dann die Dropdownliste aus, die darunter angezeigt wird, und klicke auf das Zahlenfeld, das du verwenden möchtest. 
1. Um dein Diagramm zu speichern, klickst du auf **Änderungen speichern**.
