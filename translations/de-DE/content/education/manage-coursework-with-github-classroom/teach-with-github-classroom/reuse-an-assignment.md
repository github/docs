---
title: Wiederverwenden einer Aufgabe
intro: 'Du kannst vorhandene Aufgaben in mehreren Kursräumen wiederverwenden, einschließlich Kursräumen in einer anderen Organisation.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can reuse assignments from a classroom. {% data reusables.classroom.classroom-admins-link %}'
shortTitle: Reuse an assignment
ms.openlocfilehash: 4c1c9048847affef95d5c904b188e68d2c183b43
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066914'
---
## Informationen zur Wiederverwendung von Aufgaben

Du kannst eine vorhandene Einzel- oder Gruppenaufgabe in einem beliebigen anderen Kursraum wiederverwenden, für den du über Zugriffsberechtigungen verfügst (einschließlich Kursräume in einer anderen Organisation). Du kannst auch mehrere Aufgaben aus einem Klassenraum gleichzeitig wiederverwenden. Wenn du dich für die Wiederverwendung einer Aufgabe entscheidest, kopiert {% data variables.product.prodname_classroom %} die Aufgabe in den ausgewählten Kursraum. Wenn du für die Aufgabe ein Vorlagenrepository verwendest und dieses in einem Kursraum einer anderen Organisation wiederverwendest, erstellt {% data variables.product.prodname_classroom %} eine Kopie des Repositorys und dessen Inhalte in der Zielorganisation.

Die kopierte Aufgabe umfasst Aufgabendetails wie den Namen und das Quellrepository sowie Informationen zum automatischen Bewertungstest und dem bevorzugten Editor. Nachdem die Aufgabe kopiert wurde, kannst du sie bearbeiten, um Änderungen vorzunehmen. Du kannst den bevorzugten Editor nicht ändern. 

## Wiederverwenden einer Aufgabe

1. Melde dich bei {% data variables.product.prodname_classroom_with_url %} an.
1. Navigiere zum Kursraum mit der Aufgabe, die du wiederverwenden möchtest.

   ![Kursraum in einer Liste von Kursräumen für eine Organisation](/assets/images/help/classroom/click-classroom-in-list.png)

1. Klicke in der Liste der Aufgaben auf die Aufgabe, die du wiederverwenden möchtest.

   ![Aufgabe in Liste von Aufgaben für einen Kursraum](/assets/images/help/classroom/click-assignment-in-list.png)

1. Klicke auf das Dropdownmenü **{% octicon "pencil" aria-label="The pencil icon" %} Bearbeiten** oben rechts auf der Seite und dann auf **{% octicon "sync" aria-label="The sync icon" %} Aufgabe wiederverwenden**.

   ![Schaltfläche zum Wiederverwenden einer Aufgabe](/assets/images/help/classroom/reuse-assignment-button.png)

1. Verwende im modalen Fenster „Aufgabe wiederverwenden“ das Dropdownmenü **Organisation auswählen**, um die Organisation auszuwählen, der die Aufgabe zugewiesen werden soll.  Verwende dann das Dropdownmenü **Kursraum auswählen**, um den Kursraum innerhalb der Organisation auszuwählen, in den du die Aufgabe kopieren möchtest.

   ![Modales Fenster zum Wiederverwenden einer Aufgabe](/assets/images/help/classroom/reuse-assignment-modal.png)

1. Klicke auf **Aufgabe erstellen**.
1. Die Aufgabe wird in den ausgewählten Kursraum kopiert, und eine Bestätigungsmeldung wird angezeigt. Wenn du dich für die Wiederverwendung einer Aufgabe mit einem Vorlagenrepository entschieden hast, kann es einige Minuten dauern, bis der Kopiervorgang abgeschlossen ist. Möglicherweise musst du die Seite aktualisieren, damit die Meldung mit dem Hinweis auf den abgeschlossenen Vorgang angezeigt wird.

   ![Meldung mit dem Hinweis auf den abgeschlossenen Vorgang für die wiederverwendete Aufgabe](/assets/images/help/classroom/reuse-assignment-completed-message.png)

## Wiederverwenden mehrerer Aufgaben aus einem Klassenraum

1. Melde dich bei {% data variables.product.prodname_classroom_with_url %} an.
2. Klicke rechts neben dem Namen eines Kursraums auf das {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}-Dropdownmenü und dann auf **Aufgabe wiederverwenden**.
   
   ![Screenshot der Übersichtsseite des Klassenraums mit hervorgehobenem Dropdownmenü](/assets/images/help/classroom/classroom-reuse-assignment-modal.png)

3. Verwende im modalen Fenster „Aufgaben wiederverwenden“ das Dropdownmenü **Organisation auswählen**, um die Organisation auszuwählen, der die Aufgaben zugewiesen werden sollen.  Verwende dann das Dropdownmenü **Kursraum auswählen**, um den Kursraum innerhalb der Organisation auszuwählen, in den du die Aufgaben kopieren möchtest.
   
   ![Screenshot des modalen Fensters „Aufgaben wiederverwenden“](/assets/images/help/classroom/reuse-multiple-assignments-modal.png)

4. Markiere die Auswahl jeweils links neben der gewünschten Aufgabe.

   ![Screenshot mehrerer ausgewählter Aufgaben](/assets/images/help/classroom/multiple-assignments-selected.png)

5. Klicke auf **Aufgaben erstellen**.
6. Die Aufgaben werden in den ausgewählten Klassenraum kopiert. Wenn du dich für die Wiederverwendung einer Aufgabe mit einem Vorlagenrepository entschieden hast, kann es einige Minuten dauern, bis der Kopiervorgang abgeschlossen ist.
