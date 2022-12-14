---
title: Erstellen eines Projekts (Beta)
intro: Hier erfährst du, wie du ein Projekt erstellen und auffüllen sowie dem Projekt benutzerdefinierte Felder hinzufügst.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
- Projects
ms.openlocfilehash: 3fa7e52f09f3be67a036000b13f484b29852a741
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "145130970"
---
Projekte sind eine anpassbare Sammlung von Elementen, die mit {% data variables.product.company_short %}-Daten auf dem jeweils aktuellen Stand gehalten werden. Mit Projekten kannst du Issues, Pull Requests und Ideen nachverfolgen, die du dir notierst. Du kannst benutzerdefinierte Felder hinzufügen und Ansichten für bestimmte Zwecke erstellen.

{% data reusables.projects.projects-beta %}

## <a name="creating-a-project"></a>Erstellen eines Projekts

### <a name="creating-an-organization-project"></a>Erstellen eines Organisationsprojekts

{% data reusables.projects.create-project %}

### <a name="creating-a-user-project"></a>Erstellen eines Benutzerprojekts

{% data reusables.projects.create-user-project %}

## <a name="updating-your-project-description-and-readme"></a>Aktualisieren der Projektbeschreibung und der Infodatei

{% data reusables.projects.project-description %}

## <a name="adding-items-to-your-project"></a>Hinzufügen von Elementen zu deinem Projekt

Mit deinem Projekt kannst du Issueentwürfe, Issues und Pull Requests nachverfolgen.

### <a name="creating-draft-issues"></a>Erstellen von Issueentwürfen

Issueentwürfe sind nützlich, um Ideen schnell zu dokumentieren.

1. Platziere den Cursor in der untersten Zeile des Projekts neben dem folgenden Symbol: {% octicon "plus" aria-label="plus icon" %}.
1. Gib deine Idee ein, und drücke dann die **EINGABETASTE**.
1. Wenn du einen Textkörper hinzufügen möchtest, klicke auf den Titel des Issueentwurfs. Gib in dem Markdown-Eingabefeld, das daraufhin angezeigt wird, den Text für den Textkörper des Issueentwurfs ein, und klicke dann auf **Speichern**.

Issueentwürfe können über einen Titel, einen Textkörper, zugewiesene Benutzer*innen sowie benutzerdefinierte Felder aus deinem Projekt verfügen. Damit bei einem Issueentwurf das Repository, Kennzeichnungen oder Meilensteine eingefügt werden können, musst du den Entwurf erst in ein Issue konvertieren. Weitere Informationen findest du unter [Konvertieren von Issueentwürfen in Issues](#converting-draft-issues-to-issues).

{% note %}

**Hinweis**: Benutzer*innen erhalten keine Benachrichtigungen, wenn sie einem Issueentwurf zugewiesen oder dort erwähnt werden, es sei denn, der Issueentwurf wird in ein Issue konvertiert.

{% endnote %}

### <a name="issues-and-pull-requests"></a>Issues und Pull Requests

#### <a name="paste-the-url-of-an-issue-or-pull-request"></a>Einfügen der URL eines Issues oder Pull Requests

1. Platziere den Cursor in der untersten Zeile des Projekts neben dem folgenden Symbol: {% octicon "plus" aria-label="plus icon" %}.
1. Füge die URL des Issues oder Pull Requests ein.

#### <a name="searching-for-an-issue-or-pull-request"></a>Suchen nach einem Issue oder Pull Request

1. Platziere den Cursor in der untersten Zeile des Projekts neben dem folgenden Symbol: {% octicon "plus" aria-label="plus icon" %}.
2. Gib <kbd>#</kbd> ein.
3. Wähle das Repository aus, in dem sich der Pull Request oder das Issue befindet. Du kannst einen Teil des Repositorynamens eingeben, um die Optionen einzugrenzen.
4. Wähle das Issue oder den Pull Request aus. Du kannst einen Teil des Titels eingeben, um die Optionen einzugrenzen.

#### <a name="adding-multiple-issues-or-pull-requests-from-a-repository"></a>Hinzufügen mehrerer Issues oder Pull Requests aus einem Repository

1. Navigiere auf {% data variables.product.product_location %} zum Repository mit den Issues oder Pull Requests, die du deinem Projekt hinzufügen möchtest.
{% data reusables.repositories.sidebar-issue-pr %}
1. Wähle links neben jedem Issuetitel die Issues aus, die du deinem Projekt hinzufügen möchtest.
  ![Screenshot des Kontrollkästchens zum Auswählen des Issues oder Pull Requests](/assets/images/help/issues/select-issue-checkbox.png)
1. Um alle Issues oder Pull Requests auf der Seite auszuwählen, kannst du auch oben in der Liste der Issues oder Pull Requests „Alle“ auswählen. 
  ![Screenshot des Kontrollkästchens zum Auswählen von „Alle“ auf dem Bildschirm](/assets/images/help/issues/select-all-checkbox.png)
1. Klicke oberhalb der Liste der Issues oder Pull Requests auf **Projekte (Beta)**. 
  ![Screenshot des Kontrollkästchens zum Auswählen von „Alle“ auf dem Bildschirm](/assets/images/help/issues/projects-beta-assign-button.png)
1. Klicke auf die Projekte, denen du die ausgewählten Issues oder Pull Requests hinzufügen möchtest.
  ![Screenshot des Kontrollkästchens zum Auswählen von „Alle“ auf dem Bildschirm](/assets/images/help/issues/projects-beta-assign-dropdown.png)

#### <a name="assigning-a-project-from-within-an-issue-or-pull-request"></a>Zuweisen eines Projekts in einem Issue oder Pull Request

1. Navigiere zu dem Issue oder Pull Request, das bzw. den du einem Projekt hinzufügen möchtest.
2. Klicke in der Randleiste auf **Projekte**.
3. Wähle das Projekt aus, dem du das Issue oder den Pull Request hinzufügen möchtest.
4. Fülle optional die benutzerdefinierten Felder aus.

   ![Projektrandleiste](/assets/images/help/issues/project_side_bar.png)

## <a name="converting-draft-issues-to-issues"></a>Konvertieren von Issueentwürfen in Issues

Beim Tabellenlayout:

1. Klicke in dem Issueentwurf, den du konvertieren möchtest, auf das folgende Symbol: {% octicon "triangle-down" aria-label="the item menu" %}.
2. Wähle **In Issue konvertieren** aus.
3. Wähle das Repository aus, dem du das Issue hinzufügen möchtest.
4. Bearbeite alternativ das Feld `labels`, `milestone` oder `repository` des Issueentwurfs, den du konvertieren möchtest.

Beim Boardlayout:

1. Klicke in dem Issueentwurf, den du konvertieren möchtest, auf das folgende Symbol: {% octicon "kebab-horizontal" aria-label="the item menu" %}.
2. Wähle **In Issue konvertieren** aus.
3. Wähle das Repository aus, dem du das Issue hinzufügen möchtest.

## <a name="removing-items-from-your-project"></a>Entfernen von Elementen aus deinem Projekt

Du kannst ein Element archivieren, um den Kontext für das Element im Projekt beizubehalten, das Element selbst jedoch aus den Projektansichten zu entfernen. Du kannst ein Element löschen, um es vollständig aus dem Projekt zu entfernen.

1. Wähle die Elemente aus, die archiviert oder gelöscht werden sollen. Wenn du mehrere Elemente auswählen möchtest, befolgst du eine der folgenden Vorgehensweisen:
     - <kbd>BEFEHLSTASTE</kbd>+Klick (Mac) oder <kbd>STRG</kbd>+Klick (Windows oder Linux) auf jedes Element
     - Wähle ein Element aus, drücke dann <kbd>UMSCHALT</kbd>+<kbd>↑</kbd> oder <kbd>UMSCHALT</kbd>+<kbd>↓</kbd>, um weitere Elemente über oder unter dem zuerst ausgewählten Element auszuwählen.
     - Wähle ein Element aus, halte dann die <kbd>UMSCHALTTASTE</kbd> gedrückt, und klicke auf ein anderes Element, um alle Elemente zwischen diesen beiden Elementen auszuwählen.
     - Drücke <kbd>BEFEHL</kbd>+<kbd>A</kbd> (Mac) oder <kbd>STRG</kbd>+<kbd>A</kbd> (Windows oder Linux), um alle Elemente in einer Spalte des Boardlayouts oder alle Elemente im Tabellenlayout auszuwählen.
2. Wenn du alle ausgewählten Elemente archivieren möchtest, drücke <kbd>E</kbd>. Wenn du alle ausgewählten Elemente löschen möchtest, drücke <kbd>ENTF</kbd>. Alternativ kannst du auf {% octicon "triangle-down" aria-label="the item menu" %} (im Tabellenlayout) oder {% octicon "kebab-horizontal" aria-label="the item menu" %} (im Boardlayout) klicken und dann die gewünschte Aktion auswählen.

Archivierte Elemente können wiederhergestellt werden, gelöschte Elemente jedoch nicht. Weitere Informationen findest du unter [Wiederherstellen archivierter Elemente](#restoring-archived-items).

## <a name="restoring-archived-items"></a>Wiederherstellen archivierter Elemente

1. Navigiere zu deinem Projekt.
1. Klicke rechts oben auf {% octicon "kebab-horizontal" aria-label="the kebab icon" %}.
1. Klicke im Menü auf **Archivierte Elemente**.
1. Um die angezeigten archivierten Elemente zu filtern, kannst du deinen Filter in das Textfeld über der Liste mit den Elementen eingeben. Weitere Informationen zu den verfügbaren Filtern findest du unter [Filtern von Projekten (Beta)](/issues/trying-out-the-new-projects-experience/filtering-projects).

   ![Screenshot des Felds zum Filtern archivierter Elemente](/assets/images/help/issues/filter-archived-items.png)
   
1. Wähle links neben jedem Elementtitel die Elemente aus, die du wiederherstellen möchtest.

   ![Screenshot mit Kontrollkästchen neben archivierten Elementen](/assets/images/help/issues/select-archived-item.png)
   
1. Um die ausgewählten Elemente wiederherzustellen, klicke oberhalb der Liste der Elemente auf **Wiederherstellen**. 

   ![Screenshot mit der Schaltfläche „Wiederherstellen“](/assets/images/help/issues/restore-archived-item-button.png)

## <a name="adding-fields"></a>Hinzufügen von Feldern

Wenn Feldwerte sich ändern, werden sie automatisch synchronisiert, sodass dein Projekt und die Elemente, die damit nachverfolgt werden, auf dem jeweils aktuellen Stand sind.

### <a name="showing-existing-fields"></a>Anzeigen vorhandener Felder

Mit deinem Projekt werden aktuelle Informationen zu Issues und Pull Requests nachverfolgt, einschließlich Änderungen des Titels sowie der zugewiesenen Benutzer*innen, Kennzeichnungen, Meilensteine, Repositorys, Reviewer*innen und verknüpften Pull Requests. Wenn dein Projekt initialisiert wird, werden der Titel und die zugewiesenen Benutzer*innen angezeigt. Die restlichen Felder sind ausgeblendet. Die Sichtbarkeit dieser Felder kannst du in deinem Projekt ändern.

1. {% data reusables.projects.open-command-palette %}
2. Gib zunächst „show“ ein.
3. Wähle den gewünschten Befehl aus (z. B. „Show: Repository“).

Alternativ kannst du diese Einstellung über die Benutzeroberfläche ändern:

1. Klicke in der Kopfzeile im Feld ganz rechts auf das folgende Symbol: {% octicon "plus" aria-label="the plus icon" %}. Es wird ein Dropdownmenü mit den Projektfeldern angezeigt.
   ![Ein- oder Ausblenden von Feldern](/assets/images/help/issues/projects_fields_menu.png)
2. Wähle die Felder aus, die du anzeigen oder ausblenden möchtest. Die Felder, die angezeigt werden, sind mit dem Symbol {% octicon "check" aria-label="check icon" %} gekennzeichnet.

### <a name="adding-custom-fields"></a>Anzeigen benutzerdefinierter Felder

Du kannst deinem Projekt benutzerdefinierte Felder hinzufügen. Benutzerdefinierte Felder werden in der Randleiste von Issues und Pull Requests im Projekt angezeigt.

Bei benutzerdefinierten Feldern kann es sich um Text, eine Zahl, ein Datum, eine Einfachauswahl oder eine Iteration handeln:

- Text: Der Wert kann jeder beliebige Text sein.
- Zahl: Der Wert muss eine Zahl sein.
- Datum: Der Wert muss ein Datum sein.
- Einfachauswahl: Der Wert muss aus einer Gruppe festgelegter Werte ausgewählt werden.
- Iteration: Der Wert muss aus einer Gruppe von Datumsbereichen (Iterationen) ausgewählt werden. Iterationen in der Vergangenheit werden automatisch als „abgeschlossen“ gekennzeichnet und die Iteration mit dem aktuellen Datumsbereich als „aktuell“. Weitere Informationen findest du unter [Verwalten von Iterationen in Projekten](/issues/trying-out-the-new-projects-experience/managing-iterations).

1. {% data reusables.projects.open-command-palette %} Beginne zunächst damit, einen Teil von „Neues Feld erstellen“ einzutippen. Wenn „Neues Feld erstellen“ in der Befehlspalette angezeigt wird, wähle diese Option aus.
2. Alternativ kannst du in der Kopfzeile im Feld ganz rechts auf das folgende Symbol klicken: {% octicon "plus" aria-label="the plus icon" %}. Es wird ein Dropdownmenü mit den Projektfeldern angezeigt. Klicke auf **Neues Feld**.
3. Es wird ein Pop-up angezeigt, in dem du Informationen zu dem neuen Feld angeben kannst.
   ![Neues Feld](/assets/images/help/issues/projects_new_field.png)
4. Gib im Textfeld einen Namen für das neue Feld ein.
5. Klicke auf das Dropdownmenü und dann auf den gewünschten Typ.
6. Wenn du **Einfachauswahl** als Typ angegeben hast, gib die Optionen ein.
7. Wenn du **Iteration** als Typ angegeben hast, gib das Startdatum der ersten Iteration und die Dauer der Iteration ein. Drei Iterationen werden automatisch erstellt. Weitere Iterationen können auf der Einstellungsseite des Projekts hinzugefügt werden.

Du kannst auch deine benutzerdefinierten Felder bearbeiten.

{% data reusables.projects.project-settings %}
1. Wähle unter **Felder** das Feld aus, das du bearbeiten möchtest.
1. Bei Einfachauswahlfeldern kannst du Optionen hinzufügen, löschen oder neu anordnen.
1. Bei Iterationsfeldern kannst du Iterationen hinzufügen oder löschen, Iterationsnamen ändern und das Startdatum sowie die Dauer der Iteration ändern.

   Weitere Informationen zum Ändern von Iterationsfeldern findest du unter [Verwalten von Iterationen in Projekten](/issues/trying-out-the-new-projects-experience/managing-iterations).

## <a name="customizing-your-views"></a>Anpassen deiner Ansichten

Du kannst unter anderem dein Projekt als Tabelle oder Board anzeigen, Elemente nach Feldern gruppieren und nach Elementen filtern. Weitere Informationen findest du unter [Anpassen deiner Projektansichten (Beta)](/issues/trying-out-the-new-projects-experience/customizing-your-project-views).

## <a name="configuring-built-in-automation"></a>Konfigurieren der integrierten Automatisierung

{% data reusables.projects.about-workflows %}

Du kannst die integrierten Workflows für dein Projekt aktivieren oder deaktivieren.

{% data reusables.projects.enable-basic-workflow %}

## <a name="adding-your-project-to-a-repository"></a>Hinzufügen deines Projekts zu einem Repository

Du kannst relevante Projekte in einem Repository auflisten. Du kannst nur Projekte auflisten, die dem bzw. der Benutzer*in oder der Organisation gehören, dem bzw. der das Repository gehört.

Damit Repositorymitglieder ein in einem Repository aufgelistetes Projekt sehen können, müssen sie das jeweilige Projekt anzeigen können. Weitere Informationen hierzu findest du unter [Verwalten der Sichtbarkeit deiner Projekte (Beta)](/issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects) und [Verwalten des Zugriffs auf Projekte (Beta)](/issues/trying-out-the-new-projects-experience/managing-access-to-projects).

1. Navigiere auf {% data variables.product.prodname_dotcom %} zur Hauptseite deines Repositorys.
1. Klicke auf {% octicon "table" aria-label="the project icon" %} **Projekte**.
1. Klicke in der Randleiste auf **Projekte (Beta)**.
1. Klicke auf **Projekt hinzufügen**.
1. Suche in der angezeigten Suchleiste nach Projekten, die dem bzw. der Benutzer*in oder der Organisation gehören, dem bzw. der das Repository gehört.
1. Klicke auf ein Projekt, um es in deinem Repository aufzulisten.
