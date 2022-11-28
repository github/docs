---
title: Informationen zu den Feldern „Nachverfolgungen“ und „Nachverfolgt von“
shortTitle: About Tracks and Tracked-by fields
intro: Du kannst die Teilaufgaben der Issues in deinen Projekten anzeigen.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2-tasklists
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 74cd26d20882a00ac8c7ac1d109cc6810286cec6
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159658'
---
{% data reusables.projects.tasklists-release-stage %}

Du kannst die Felder „Nachverfolgungen“ und „Nachverfolgt von“ für deine Projekte aktivieren, um die Beziehungen zwischen deinen Issues anzuzeigen, während du Teilaufgaben zu Aufgabenlisten hinzufügst. Weitere Informationen zum Erstellen von Issuehierarchien in Aufgabenlisten findest du unter [Informationen zu Aufgabenlisten](/issues/tracking-your-work-with-issues/about-tasklists).

Das Feld „Nachverfolgt von“ kann verwendet werden, um Elemente für eine Ansicht zu gruppieren, die die Teilaufgaben der einzelnen Issues und die für deren Abschluss erforderlichen Arbeiten klar zeigt. Weitere Informationen findest du unter [Gruppieren nach Feldwerten im Tabellenlayout](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view#grouping-by-field-values-in-table-layout).

Außerdem kannst du nach dem Feld „Nachverfolgt von“ filtern, um nur Elemente anzuzeigen, die durch bestimmte Issues nachverfolgt werden. Beginne entweder mit dem Eingeben von „tracked-by“, und wähle ein Issue aus der Liste aus, oder gib den Filter unten vollständig ein, wenn du das Repository und die Issuenummer kennst.

```
tracked-by:"<OWNER>/<REPO>#<ISSUE NUMBER>"
```

Um den Filter zu verwenden, ersetze `<OWNER>` durch den Repositorybesitzer, `<REPO>` durch den Repositorynamen und `<ISSUE NUMBER>` durch die Issuenummer. Weitere Informationen findest du unter [Filtering projects](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects) („Filtern von Projekten“).

### Aktivieren des Felds „Nachverfolgt von“

Du kannst das Feld „Nachverfolgt von“ aktivieren, um zu sehen, welche Issues ein Element in deinem Projekt nachverfolgen.

1. Klicke in der Tabellenansicht im Feld ganz rechts auf {% octicon "plus" aria-label="the plus icon" %}.
   
   ![Screenshot der Schaltfläche „Neues Feld“](/assets/images/help/projects-v2/new-field-button.png)
   
1. Klicke unter „Verborgene Felder“ auf **Nachverfolgt von**.
   
   ![Screenshot des Feldmenüs](/assets/images/help/projects-v2/select-tracked-by-field.png)
   

### Aktivieren des Felds „Nachverfolgungen“

Du kannst das Feld „Nachverfolgungen“ aktivieren, um zu sehen, welche anderen Issues ein Element in deinem Projekt nachverfolgt.

1. Klicke in der Tabellenansicht im Feld ganz rechts auf {% octicon "plus" aria-label="the plus icon" %}.
   
   ![Screenshot der Schaltfläche „Neues Feld“](/assets/images/help/projects-v2/new-field-button.png)
   
1. Klicke unter „Verborgene Felder“ auf **Nachverfolgungen**.
   
   ![Screenshot des Feldmenüs](/assets/images/help/projects-v2/select-tracks-field.png)
   
