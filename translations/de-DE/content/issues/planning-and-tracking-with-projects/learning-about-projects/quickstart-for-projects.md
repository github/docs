---
title: 'Schnellstartanleitung für {% data variables.product.prodname_projects_v2 %}'
intro: 'In diesem interaktiven Leitfaden kannst du durch Erstellung eines Projekts die Geschwindigkeit, Flexibilität und Anpassungsfähigkeit von {% data variables.product.prodname_projects_v2 %} erleben.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/quickstart
type: quick_start
topics:
  - Projects
ms.openlocfilehash: 39798565419acaa831a996a0c86cc62f367f4bb7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109683'
---
## Einführung

In diesem Leitfaden wird gezeigt, wie du mithilfe von {% data variables.product.prodname_projects_v2 %} Arbeit planst und nachverfolgst. In diesem Leitfaden erstellst du ein neues Projekt und fügst ein benutzerdefiniertes Feld hinzu, um Prioritäten für deine Aufgaben nachzuverfolgen. Außerdem erfährst du, wie du gespeicherte Ansichten erstellst, um Prioritäten und Fortschritte an deine Mitarbeiter zu kommunizieren.

## Voraussetzungen

Du kannst entweder ein Organisationsprojekt oder ein Benutzerprojekt erstellen. Zum Erstellen eines Organisationsprojekts benötigst du eine {% data variables.product.prodname_dotcom %}-Organisation. Weitere Informationen findest du unter [Grundlegendes Neuerstellen einer Organisation](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch).

In diesem Leitfaden fügst du deinem neuen Projekt vorhandene Issues aus Repositorys im Besitz deiner Organisation (für Organisationsprojekte) oder in deinem Besitz (für Benutzerprojekte) hinzu. Weitere Informationen zum Erstellen von Issues findest du unter [Erstellen eines Issues](/issues/tracking-your-work-with-issues/creating-an-issue).

## Erstellen eines Projekts

Erstelle als Erstes ein Organisationsprojekt oder ein Benutzerprojekt.

### Erstellen eines Organisationsprojekts

{% data reusables.projects.create-project %}

### Erstellen eines Benutzerprojekts

{% data reusables.projects.create-user-project %}

## Festlegen der Projektbeschreibung und der Infodatei

{% data reusables.projects.project-description %}

## Hinzufügen von Issues zu deinem Projekt

Füge deinem Projekt als Nächstes ein paar Issues hinzu.

{% data reusables.projects.add-item-via-paste %}

Wiederhole die obigen Schritte einige Male, um deinem Projekt mehrere Issues hinzuzufügen.

Weitere Informationen zu Issues oder anderen Elementen, die du deinem Projekt hinzufügen kannst, sowie andere Möglichkeiten zum Hinzufügen von Issues findest du unter [Hinzufügen von Elementen zu deinem Projekt](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project).

## Hinzufügen von Entwurfsissues zu deinem Projekt

Füge deinem Projekt als Nächstes ein Entwurfsissue hinzu.

{% data reusables.projects.add-draft-issue %}

## Hinzufügen eines Iterationsfelds

Erstelle als Nächstes ein Iterationsfeld, um deine Arbeit über wiederholte Zeitblöcke planen und nachverfolgen zu können. Durch Anpassen der Länge und Einfügen von Unterbrechungen können Iterationen so konfiguriert werden, dass sie deiner Arbeitsweise bzw. der Arbeitsweise deines Teams entsprechen.

{% data reusables.projects.new-field %}
1. Wähle **Iteration**
   ![Screenshot der Option „Iteration“](/assets/images/help/projects-v2/new-field-iteration.png)
3. Um die Dauer der einzelnen Iterationen zu ändern, gib eine neue Zahl ein, wähle dann das Dropdownmenü aus, und klicke dann auf **Tage** oder **Wochen**.
   ![Screenshot der Iterationsdauer](/assets/images/help/projects-v2/iteration-field-duration.png)
4. Klicke auf **Speichern**.
   ![Screenshot der Schaltfläche „Speichern“](/assets/images/help/projects-v2/new-field-save-and-create.png)

## Erstellen eines Felds zum Nachverfolgen der Priorität

Erstellen nun ein benutzerdefiniertes Feld namens `Priority`, das die Werte `High`, `Medium` oder `Low` enthält.

{% data reusables.projects.new-field %}
1. Wähle **Einfachauswahl**
   ![Screenshot der Option „Einfachauswahl“](/assets/images/help/projects-v2/new-field-single-select.png)
1. Gib unter „Optionen“ die erste Option ein: „Hoch“.
   ![Screenshot der Option „Einfachauswahl“](/assets/images/help/projects-v2/priority-example.png)
1. Zum Hinzufügen weiterer Felder für „Mittel“ und „Niedrig“ klicke auf **Option hinzufügen**.
1. Klicke auf **Speichern**.
   ![Screenshot der Schaltfläche „Speichern“](/assets/images/help/projects-v2/new-field-save.png)

Gib eine Priorität für alle Issues in deinem Projekt an.

![Beispielprioritäten](/assets/images/help/projects/priority_example.png)

## Gruppieren von Issues nach Priorität

Gruppiere als Nächstes alle Elemente in deinem Projekt nach Priorität, um den Fokus einfacher auf die Elemente mit hoher Priorität legen zu können.

{% data reusables.projects.open-view-menu %}
1. Klicke auf {% octicon "rows" aria-label="the rows icon" %} **Gruppieren**.
   ![Screenshot des Menüelements „Gruppieren“](/assets/images/help/projects-v2/group-menu-item.png)
1. Klicke auf **Priorität**.
   ![Screenshot des Menüs „Gruppieren“](/assets/images/help/projects-v2/group-menu.png)

Verschiebe jetzt Issues zwischen den Gruppen, um ihre Priorität zu ändern.

1. Wähle ein Issue aus.
2. Ziehe das Issue auf eine andere Prioritätsgruppe. Dadurch ändert sich die Priorität des Issues in die Priorität der neuen Gruppe.

![Verschieben eines Issues zwischen Gruppen](/assets/images/help/projects/move_between_group.gif)

## Speichern der Prioritätsansicht

Wenn du Issues im vorherigen Schritt nach Priorität gruppiert hast, hat dein Projekt durch einen Indikator angezeigt, dass die Ansicht geändert wurde. Speichere diese Änderungen, damit auch deine Mitarbeiter die nach Priorität gruppierten Aufgaben sehen.

{% data reusables.projects.save-view %}

Du kannst die URL für dein Team freigeben, damit alle über die Projektprioritäten informiert sind.

Wenn eine Ansicht gespeichert wurde, wird sie jedem angezeigt, der das Projekt öffnet. In diesem Fall hast du nach Priorität gruppiert, aber du kannst auch weitere Modifizierer hinzufügen, z. B. Sortieren, Filtern oder Layout. Als Nächstes erstellst du eine neue Ansicht mit geändertem Layout.

## Hinzufügen eines Boardlayouts

Um den Fortschritt der Issues deines Projekts anzuzeigen, kannst du zum Boardlayout wechseln.

Das Boardlayout basiert auf dem Statusfeld. Gib daher einen Status für jedes Issue in deinem Projekt an.

![Beispielstatus](/assets/images/help/projects/status_example.png)

Erstelle dann eine neue Sicht.

{% data reusables.projects.new-view %}

Wechsle als Nächstes zum Boardlayout.

{% data reusables.projects.open-view-menu %}
1. Klicke unter „Layout“ auf **Board**.
   ![Screenshot der Option „Layout“](/assets/images/help/projects-v2/table-or-board.png)

![Beispielprioritäten](/assets/images/help/projects/example_board.png)

Wenn du das Layout geändert hast, weist das Projekt durch einen Indikator darauf hin, dass die Ansicht geändert wurde. Speichere diese Ansicht, damit du und deine Mitarbeiter in Zukunft problemlos darauf zugreifen können.

{% data reusables.projects.save-view %}

Um auf den Zweck der Ansicht hinzuweisen, gib ihr einen aussagekräftigen Namen.

{% data reusables.projects.open-view-menu %}
1. Klicke auf {% octicon "pencil" aria-label="the pencil icon" %} **Ansicht umbenennen**.
   ![Screenshot des Menüelements zum Umbenennen](/assets/images/help/projects-v2/rename-view.png)
1. Gib den neuen Namen für deine Ansicht ein.
1. Drücke die <kbd>Eingabetaste</kbd>, um die Änderungen zu speichern.

![Beispielprioritäten](/assets/images/help/projects/project-view-switch.gif)

## Konfigurieren der integrierten Automatisierung

Füge schließlich einen integrierten Workflow hinzu, um den Status auf **Todo** festzulegen, wenn deinem Projekt ein Element hinzugefügt wird.

1. Klicke rechts oben auf {% octicon "kebab-horizontal" aria-label="The menu icon" %}, um das Menü zu öffnen.
  ![Screenshot des Menüsymbols](/assets/images/help/projects-v2/open-menu.png)
1. Klicke im Menü auf {% octicon "workflow" aria-label="The workflow icon" %} **Workflows**.
  ![Screenshot des Menüelements „Workflows“](/assets/images/help/projects-v2/workflows-menu-item.png)
1. Klicke unter **Standardworkflows** auf **Dem Projekt hinzugefügtes Element**.
  ![Screenshot des Standardworkflows](/assets/images/help/projects-v2/default-workflows.png)
1. Stelle neben **Wann** sicher, dass sowohl `issues` als auch `pull requests` ausgewählt sind.
  ![Screenshot der Konfiguration von „Wann“ für einen Workflow](/assets/images/help/projects-v2/workflow-when.png)
1. Wähle neben **Festlegen** die Option **Status:Todo** aus.
  ![Screenshot der Konfiguration von „Festlegen“ für einen Workflow](/assets/images/help/projects-v2/workflow-set.png)
1. Klicke auf die Umschaltfläche **Deaktiviert**, um den Workflow zu aktivieren.
  ![Screenshot der Konfiguration von „Aktivieren“ für einen Workflow](/assets/images/help/projects-v2/workflow-enable.png)

## Weiterführende Themen

- [Hinzufügen von Elementen zu deinem Projekt](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project)
- [Anpassen einer Ansicht](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)
