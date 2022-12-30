---
title: 'Bewährte Methoden für {% data variables.product.prodname_projects_v2 %}'
intro: Hier erhältst du Tipps zum Verwalten deiner Projekte.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/best-practices-for-managing-projects
type: overview
topics:
  - Projects
  - Issues
  - Project management
ms.openlocfilehash: 1473e08a8a6d3bf4df480b4b5ce6930753a04491
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106765'
---
Du kannst {% data variables.product.prodname_projects_v2 %} verwenden, um deine Arbeit auf {% data variables.product.company_short %} zu verwalten, wo sich auch deine Issues und Pull Requests befinden. Weiter unten findest du Tipps zur effizienten und effektiven Verwaltung deiner Projekte. Weitere Informationen zu {% data variables.product.prodname_projects_v2 %} findest du unter [Informationen zu {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects).

## Aufteilen großer Issues in kleinere Issues

Wenn du ein großes Issue in kleinere Issues aufteilst, wird die Arbeit an diesen übersichtlicher. Außerdem können Teammitglieder dann parallel daran arbeiten. Dadurch werden Pull Requests ebenfalls kleiner, wodurch sie leichter zu überprüfen sind.

Verwende Aufgabenlisten, Meilensteine oder Bezeichnungen, um nachzuverfolgen, wie sich kleinere Issues zum übergeordneten Ziel beitragen. Weitere Informationen findest du unter [Informationen zu Aufgabenlisten](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists), [Informationen zu Meilensteinen](/issues/using-labels-and-milestones-to-track-work/about-milestones) und [Verwalten von Bezeichnungen](/issues/using-labels-and-milestones-to-track-work/managing-labels).

## Kommunikation

Issues und Pull Requests enthalten integrierte Features, mithilfe derer du problemlos mit deinen Projektmitarbeiter*innen kommunizieren kannst. Verwende @mentions, um eine Person oder ein gesamtes Team auf einen Kommentar aufmerksam zu machen. Weise Projektmitarbeiter*innen Issues zu, um die Zuständigkeiten zu kommunizieren. Verweise auf verwandte Issues oder Pull Requests, um zu zeigen, wie sie miteinander zusammenhängen.

## Verwenden der Beschreibung und der Infodatei

Verwende die Beschreibung deines Projekts und die zugehörige Infodatei, um Informationen zum Projekt freizugeben.

Beispiel:

- Erläutere den Zweck des Projekts.
- Beschreibe die Projektansichten und ihre Verwendung.
- Füge relevante Links und Personen ein, die für weitere Informationen kontaktiert werden können.

Infodateien von Projekten unterstützen die Markdown-Sprache, mit der du Bilder und erweiterte Formatierungen wie Links, Listen und Kopfzeilen verwenden kannst. 

Weitere Informationen findest du unter [Erstellen eines {% data variables.projects.project_v2 %}s](/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project).

## Verwenden von Ansichten

Verwende Projektansichten, um dein Projekt aus verschiedenen Winkeln zu betrachten.

Beispiel:

- Filtere nach Status, um alle nicht gestarteten Elemente anzuzeigen.
- Gruppiere nach einem benutzerdefinierten Prioritätsfeld, um das Volume von Elementen mit hoher Priorität zu überwachen.
- Sortiere nach einem benutzerdefinierten Datumsfeld, um die Elemente mit dem frühesten Zielversanddatum anzuzeigen.

Weitere Informationen findest du unter [Anpassen einer Ansicht](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view).

## Einzelne Single Source of Truth

Um zu verhindern, dass Informationen nicht synchronisiert werden, solltest du eine Single Source of Truth verwenden. Überwache das Zielversanddatum beispielsweise an einer einzigen Stelle, anstatt über mehrere Felder verteilt. Wenn Sich das Zielversanddatum ändert, musst du nur das Datum an einer Stelle aktualisieren.

{% data variables.product.prodname_projects_v2 %} bleibt automatisch mit {% data variables.product.company_short %}-Daten wie zugewiesenen Personen, Meilensteinen oder Bezeichnungen auf dem neuesten Stand. Wenn sich eines dieser Felder in einem Issue oder einem Pull Request ändert, wird die Änderung automatisch in deinem Projekt angezeigt.

## Verwenden der Automatisierung

Du kannst Aufgaben automatisieren, damit du weniger Zeit für Routinearbeiten und mehr Zeit für das eigentliche Projekt aufwenden kannst. Je weniger du manuell erledigen musst, desto eher bleibt dein Projekt auf dem neuesten Stand.

{% data variables.product.prodname_projects_v2 %} bietet integrierte Workflows. Wenn beispielsweise ein Issue geschlossen wird, kannst du den Status automatisch auf „Fertig“ festlegen. {% ifversion projects-v2-auto-archive %}Du kannst integrierte Workflows auch so konfigurieren, dass Elemente automatisch archiviert werden, die bestimmten Kriterien entsprechen.{% endif %}

Darüber hinaus kannst du mit {% data variables.product.prodname_actions %} und der GraphQL-API sich wiederholende Projektverwaltungsaufgaben automatisieren. Wenn du beispielsweise die Pull Requests nachverfolgen möchtest, die überprüft werden müssen, kannst du einen Workflow erstellen, der einen Pull Request zu einem Projekt hinzufügt und den Status auf „Überprüfung erforderlich“ setzt. Dieser Prozess kann automatisch ausgelöst werden, wenn ein Pull Request als „Bereit zur Überprüfung“ gekennzeichnet wird.

- Weitere Informationen zu den integrierten Workflows findest du unter [Verwenden der integrierten Automatisierungen](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-built-in-automations).{% ifversion projects-v2-auto-archive %}
- Weitere Informationen zum automatischen Archivieren von Elementen findest du unter [Automatisches Archivieren von Elementen](/issues/planning-and-tracking-with-projects/automating-your-project/archiving-items-automatically).{% endif %}
- Einen Beispielworkflow findest du unter [Automatisieren von {% data variables.product.prodname_projects_v2 %} mithilfe von Aktionen](/issues/planning-and-tracking-with-projects/automating-your-project/automating-projects-using-actions).
- Weitere Informationen zu der API findest du unter [Verwenden der API zum Verwalten von {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-api-to-manage-projects).
- Weitere Informationen zu {% data variables.product.prodname_actions %} findest du unter [{% data variables.product.prodname_actions %}](/actions).

## Verwenden verschiedener Feldtypen

Nutze die verschiedenen Feldtypen, um deinen Anforderungen gerecht zu werden.

Verwende ein Iterationsfeld, um Arbeit zu planen oder eine Zeitachse zu erstellen. Du kannst nach Iteration gruppieren, um zu überprüfen, ob Elemente zwischen Iterationen ausgeglichen sind, oder du kannst filtern, um sich auf eine einzelne Iteration zu konzentrieren. Mit Iterationsfeldern kannst du auch die Arbeit anzeigen, die du in vergangenen Iterationen geleistet hast, was bei der Geschwindigkeitsplanung und der Reflexion über die Leistungen deines Teams hilfreich sein kann. Iterationsfelder unterstützen auch Unterbrechungen, die anzeigen, wann du und dein Team ihre Iterationen unterbrechen. Weitere Informationen findest du unter [Informationen zu Iterationsfeldern](/issues/planning-and-tracking-with-projects/understanding-field-types/about-iteration-fields).

Verwende ein einzelnes Auswahlfeld, um Informationen zu einer Aufgabe basierend auf einer voreingestellten Liste von Werten nachzuverfolgen. Verfolge beispielsweise die Priorität oder Projektphase nach. Da die Werte aus einer voreingestellten Liste ausgewählt werden, kannst du sie einfach gruppieren oder filtern, um sich auf Elemente mit einem bestimmten Wert zu konzentrieren.

Weitere Informationen zu den verschiedenen Feldtypen findest du unter [Grundlegendes zu Feldtypen](/issues/planning-and-tracking-with-projects/understanding-field-types).
