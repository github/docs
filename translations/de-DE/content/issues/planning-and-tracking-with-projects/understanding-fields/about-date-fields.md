---
title: Informationen zu Datumsfeldern
shortTitle: About date fields
intro: 'Du kannst benutzerdefinierte Datumsfelder erstellen, die sich durch Eingabe eines Datums oder mithilfe eines Kalenders festlegen lassen.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
redirect_from:
  - /issues/planning-and-tracking-with-projects/understanding-field-types/about-date-fields
ms.openlocfilehash: d6057212941db8d20ed49f240052e5ad0fc8eb80
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159689'
---
Du kannst Datumswerte mit dem Format `YYYY-MM-DD` filtern, z. B.: `date:2022-07-01` Du kannst auch Operatoren verwenden, z. B. `>`, `>=`, `<`, `<=` und `..`. Beispiel: `date:>2022-07-01` und `date:2022-07-01..2022-07-31`. Du kannst auch `@today` angeben, um den aktuellen Tag in deinem Filter darzustellen. Weitere Informationen findest du unter [Filtering projects](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects) („Filtern von Projekten“).

## Hinzufügen eines Datumsfelds

{% data reusables.projects.new-field %}
1. Klicke auf **Datum**
   ![Screenshot der Option „Datum“](/assets/images/help/projects-v2/new-field-date.png)
1. Klicke auf **Speichern**.
   ![Screenshot der Schaltfläche „Speichern“](/assets/images/help/projects-v2/new-field-save.png)

Alternativ drücke {% data variables.projects.command-palette-shortcut %}, um die Projektbefehlspalette zu öffnen, und beginne mit der Eingabe von „Neues Feld erstellen“.
