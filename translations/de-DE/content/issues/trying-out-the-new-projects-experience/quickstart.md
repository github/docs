---
title: Schnellstart für Projekte (Beta)
intro: Erlebe die Geschwindigkeit, Flexibilität und Anpassung von Projekten (Beta) durch Erstellung eines Projekts in diesem interaktiven Leitfaden.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
- Projects
ms.openlocfilehash: 3baf341d38b59e20e6fe1e677e338d6bec1d57da
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "145130938"
---
{% data reusables.projects.projects-beta %}

## <a name="introduction"></a>Einführung

In diesem Leitfaden wird veranschaulicht, wie Projekte (Beta) verwendet werden, um Arbeit zu planen und nachzuverfolgen. In diesem Leitfaden erstellst du ein neues Projekt und fügst ein benutzerdefiniertes Feld hinzu, um Prioritäten für deine Aufgaben nachzuverfolgen. Außerdem erfährst du, wie du gespeicherte Ansichten erstellst, um Prioritäten und Fortschritte an deine Mitarbeiter zu kommunizieren.

## <a name="prerequisites"></a>Voraussetzungen

Du kannst entweder ein Organisationsprojekt oder ein Benutzerprojekt erstellen. Zum Erstellen eines Organisationsprojekts benötigst du eine {% data variables.product.prodname_dotcom %}-Organisation. Weitere Informationen findest du unter [Grundlegendes Neuerstellen einer Organisation](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch).

In diesem Leitfaden fügst du deinem neuen Projekt vorhandene Issues aus Repositorys im Besitz deiner Organisation (für Organisationsprojekte) oder in deinem Besitz (für Benutzerprojekte) hinzu. Weitere Informationen zum Erstellen von Issues findest du unter [Erstellen eines Issues](/issues/tracking-your-work-with-issues/creating-an-issue).

## <a name="creating-a-project"></a>Erstellen eines Projekts

Erstelle als Erstes ein Organisationsprojekt oder ein Benutzerprojekt.

### <a name="creating-an-organization-project"></a>Erstellen eines Organisationsprojekts

{% data reusables.projects.create-project %}

### <a name="creating-a-user-project"></a>Erstellen eines Benutzerprojekts

{% data reusables.projects.create-user-project %}

## <a name="setting-your-project-description-and-readme"></a>Festlegen der Projektbeschreibung und der Infodatei

{% data reusables.projects.project-description %}

## <a name="adding-issues-to-your-project"></a>Hinzufügen von Issues zu deinem Projekt

Füge deinem Projekt als Nächstes ein paar Issues hinzu.

Wenn dein neues Projekt initialisiert wird, wirst du zum Hinzufügen von Elementen zu deinem Projekt aufgefordert. Wenn diese Ansicht verloren geht oder wenn du später weitere Issues hinzufügen möchtest, platziere den Cursor in der untersten Zeile des Projekts neben dem Pluszeichen ({% octicon "plus" aria-label="plus icon" %}).

1. Gib `#` ein.
2. Wähle das Repository aus, in dem sich dein Issue befindet. Um die Optionen einzugrenzen, kannst du mit der Eingabe eines Teils des Repositorynamens beginnen.
3. Wähle das Issue aus. Um die Optionen einzugrenzen, kannst du mit der Eingabe eines Teils des Issuetitels beginnen.

Wiederhole die obigen Schritte einige Male, um deinem Projekt mehrere Issues hinzuzufügen.

Weitere Informationen zu weiteren Möglichkeiten zum Hinzufügen von Issues zu deinem Projekt oder zu anderen Elementen, die du deinem Projekt hinzufügen kannst, findest du unter [Erstellen eines Projekts](/issues/trying-out-the-new-projects-experience/creating-a-project#adding-items-to-your-project).

## <a name="adding-draft-issues-to-your-project"></a>Hinzufügen von Entwurfsissues zu deinem Projekt

Füge deinem Projekt als Nächstes ein Entwurfsissue hinzu.

1. Platziere den Cursor in der untersten Zeile des Projekts neben dem folgenden Symbol: {% octicon "plus" aria-label="plus icon" %}.
1. Gib deine Idee ein, und drücke dann die **EINGABETASTE**.
1. Klicke auf den Titel des Entwurfsissues. Gib im angezeigten Eingabefeld für Markdown weitere Informationen zu deiner Idee ein, und klicke dann auf **Speichern**.

## <a name="creating-a-field-to-track-priority"></a>Erstellen eines Felds zum Nachverfolgen der Priorität

Erstelle nun ein benutzerdefiniertes Feld `Priority`, das folgende Werte enthalten soll: `High`, `Medium`, oder `Low`.

1. {% data reusables.projects.open-command-palette %}
2. Beginne mit der Eingabe eines beliebigen Teils von „Neues Feld erstellen“.
3. Wähle **Neues Feld erstellen** aus.
4. Gib im daraufhin angezeigten Popupelement `Priority` im Textfeld ein.
5. Wähle in der Dropdownliste **Einzelauswahl** aus.
6. Füge Optionen für `High`, `Medium` und `Low` hinzu. Du kannst auch Emojis in deine Optionen aufnehmen.
   ![Beispiel für ein neues Einzelauswahlfeld](/assets/images/help/projects/new-single-select-field.png)
7. Klicke auf **Speichern**.

Gib eine Priorität für alle Issues in deinem Projekt an.

![Beispielprioritäten](/assets/images/help/projects/priority_example.png)

## <a name="grouping-issues-by-priority"></a>Gruppieren von Issues nach Priorität

Gruppiere als Nächstes alle Elemente in deinem Projekt nach Priorität, um den Fokus einfacher auf die Elemente mit hoher Priorität legen zu können.

1. {% data reusables.projects.open-command-palette %}
2. Beginne mit der Eingabe eines beliebigen Teils von „Gruppieren nach“.
3. Wähle **Gruppieren nach: Priorität** aus.

Verschiebe jetzt Issues zwischen den Gruppen, um ihre Priorität zu ändern.

1. Wähle ein Issue aus.
2. Ziehe das Issue auf eine andere Prioritätsgruppe. Dadurch ändert sich die Priorität des Issues in die Priorität der neuen Gruppe.

![Verschieben eines Issues zwischen Gruppen](/assets/images/help/projects/move_between_group.gif)

## <a name="saving-the-priority-view"></a>Speichern der Prioritätsansicht

Wenn du Issues im vorherigen Schritt nach Priorität gruppiert hast, hat dein Projekt durch einen Indikator angezeigt, dass die Ansicht geändert wurde. Speichere diese Änderungen, damit auch deine Mitarbeiter die nach Priorität gruppierten Aufgaben sehen.

1. Wähle das Dropdownmenü neben dem Ansichtsnamen aus.
2. Klicke auf **Änderungen speichern**.

Um auf den Zweck der Ansicht hinzuweisen, gib ihr einen aussagekräftigen Namen.

1. Platziere den Cursor im aktuellen Ansichtsnamen, **Ansicht 1**.
2. Ersetze den vorhandenen Text durch den neuen Namen, `Priorities`.

Du kannst die URL für dein Team freigeben, damit alle über die Projektprioritäten informiert sind.

Wenn eine Ansicht gespeichert wurde, wird sie jedem angezeigt, der das Projekt öffnet. In diesem Fall hast du nach Priorität gruppiert, aber du kannst auch weitere Modifizierer hinzufügen, z. B. Sortieren, Filtern oder Layout. Als Nächstes erstellst du eine neue Ansicht mit geändertem Layout.

## <a name="adding-a-board-layout"></a>Hinzufügen eines Boardlayouts

Um den Fortschritt der Issues deines Projekts anzuzeigen, kannst du zum Boardlayout wechseln.

Das Boardlayout basiert auf dem Statusfeld. Gib daher einen Status für jedes Issue in deinem Projekt an.

![Beispielstatus](/assets/images/help/projects/status_example.png)

Erstelle dann eine neue Sicht.

1. Klicke neben der Ansicht ganz rechts auf {% octicon "plus" aria-label="the plus icon" %} **Neue Ansicht**.

Wechsele als Nächstes zum Boardlayout.

1. {% data reusables.projects.open-command-palette %}
2. Beginne mit der Eingabe eines beliebigen Teils von „Layout wechseln: Board“.
3. Wähle **Layout wechseln: Board** aus.
   ![Beispielprioritäten](/assets/images/help/projects/example_board.png)

Wenn du das Layout geändert hast, weist das Projekt durch einen Indikator darauf hin, dass die Ansicht geändert wurde. Speichere diese Ansicht, damit du und deine Mitarbeiter in Zukunft problemlos darauf zugreifen können.

1. Wähle das Dropdownmenü neben dem Ansichtsnamen aus.
2. Klicke auf **Änderungen speichern**.

Um auf den Zweck der Ansicht hinzuweisen, gib ihr einen aussagekräftigen Namen.

1. Platziere den Cursor im aktuellen Ansichtsnamen, **Ansicht 2**.
2. Ersetze den vorhandenen Text durch den neuen Namen, `Progress`.

![Beispielprioritäten](/assets/images/help/projects/project-view-switch.gif)

## <a name="configure-built-in-automation"></a>Konfigurieren der integrierten Automatisierung

Füge schließlich einen integrierten Workflow hinzu, um den Status auf **Todo** festzulegen, wenn deinem Projekt ein Element hinzugefügt wird.

1. Klicke in deinem Projekt auf {% octicon "workflow" aria-label="the workflow icon" %}.
2. Klicke unter **Standardworkflows** auf **Dem Projekt hinzugefügtes Element**.
3. Stelle neben **Wann** sicher, dass sowohl `issues` als auch `pull requests` ausgewählt sind.
4. Wähle neben **Festlegen** die Option **Status:Todo** aus.
5. Klicke auf die Umschaltfläche **Deaktiviert**, um den Workflow zu aktivieren.

## <a name="next-steps"></a>Nächste Schritte

Du kannst Projekte für eine Vielzahl von Zwecken verwenden. Beispiel:

- Nachverfolgen der Arbeit für ein Release
- Planen eines Sprints
- Priorisieren eines Backlogs

Hier findest du einige hilfreiche Ressourcen für deine nächsten Schritte mit {% data variables.product.prodname_github_issues %}:

- Um Feedback zur Projektoberfläche (Beta) bereitzustellen, wechsele zum [GitHub-Feedbackrepository](https://github.com/github/feedback/discussions/categories/issues-feedback).
- Weitere Informationen dazu, wie Projekte dir bei der Planung und Nachverfolgung helfen können, findest du unter [Informationen zu Projekten](/issues/trying-out-the-new-projects-experience/about-projects).
- Weitere Informationen zu den Feldern und Elementen, die du deinem Projekt hinzufügen kannst, findest du unter [Erstellen eines Projekts](/issues/trying-out-the-new-projects-experience/creating-a-project).
- Weitere Informationen zum Anzeigen der benötigten Informationen findest du unter [Anpassen deiner Projektansichten](/issues/trying-out-the-new-projects-experience/customizing-your-project-views).
