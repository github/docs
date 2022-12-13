---
title: Informationen zu Datumsfeldern
shortTitle: About date fields
intro: Du kannst benutzerdefinierte Datumsfelder erstellen, die sich durch Eingabe eines Datums oder mithilfe eines Kalenders festlegen lassen.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
- Projects
ms.openlocfilehash: 7c3bc45c036e209e0be682c3b13b9dafcba17885
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109670"
---
Du kannst Datumswerte mit dem Format `YYYY-MM-DD` filtern, z. B.: `date:2022-07-01` Du kannst auch Operatoren verwenden, z. B. `>`, `>=`, `<`, `<=` und `..`. Beispiel: `date:>2022-07-01` und `date:2022-07-01..2022-07-31`. Du kannst auch `@today` angeben, um den aktuellen Tag in deinem Filter darzustellen. Weitere Informationen findest du unter [Filtering projects](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects) („Filtern von Projekten“).

## Hinzufügen eines Datumsfelds

{% data reusables.projects.new-field %}
1. Klicke auf **Datum**
   ![Screenshot der Option „Datum“](/assets/images/help/projects-v2/new-field-date.png)
1. Klicke auf **Speichern**.
   ![Screenshot der Schaltfläche „Speichern“](/assets/images/help/projects-v2/new-field-save.png)

Alternativ drücke {% data variables.projects.command-palette-shortcut %}, um die Projektbefehlspalette zu öffnen, und beginne mit der Eingabe von „Neues Feld erstellen“.
